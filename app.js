import { QUESTION_TYPES, patterns, words, questions } from './data.js';
import { firebaseConfig } from './firebase-config.js';

const KEY = 'aerotest-killer-v2';
const legacyKey = 'aerotest-killer-v1';
const initial = {
  name: '', answers: 0, correct: 0, wrong: [], wrongWords: [], streak: 0,
  lastStudy: '', minutes: 0, examDate: '', signedIn: false
};

let state = load();
let route = location.hash.slice(1) || 'home';
let session = null;
let wordReviewQueue = [];
let timerId = null;
let cloud = null;
let syncTimer = null;
let topicMode = 'mixed';
let topicTypes = new Set(QUESTION_TYPES);

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || localStorage.getItem(legacyKey) || '{}');
    const merged = { ...initial, ...saved };
    merged.wrong = Array.isArray(merged.wrong) ? merged.wrong : [];
    merged.wrongWords = Array.isArray(merged.wrongWords) ? merged.wrongWords : [];
    return merged;
  } catch { return { ...initial }; }
}
function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
  if (cloud?.user) {
    clearTimeout(syncTimer);
    syncTimer = setTimeout(syncCloud, 500);
  }
}
function h(value = '') {
  return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}
function toast(message) {
  const el = document.querySelector('#toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2200);
}
function go(next) { location.hash = next; }
function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
function letter(index) { return String.fromCharCode(65 + index); }
function progress() { return state.answers ? Math.round(state.correct / state.answers * 100) : 0; }
function touchStudy() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastStudy !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = state.lastStudy === yesterday ? state.streak + 1 : 1;
    state.lastStudy = today;
  }
}
function daysToExam() {
  if (!state.examDate) return null;
  return Math.max(0, Math.ceil((new Date(`${state.examDate}T00:00:00`) - new Date()) / 86400000));
}

function header(title, subtitle = 'AeroTest') {
  return `<header class="topbar">
    <button class="back" data-go="home" aria-label="Ana sayfaya dön">‹</button>
    <div class="page-title"><small>${h(subtitle)}</small><h1>${h(title)}</h1></div><div class="grow"></div>
  </header>`;
}
function nav(active = 'home') {
  return `<nav class="nav">
    <button data-go="home" class="${active === 'home' ? 'active' : ''}"><span>⌂</span>Ana Sayfa</button>
    <button data-go="stats" class="${active === 'stats' ? 'active' : ''}"><span>▥</span>İstatistik</button>
    <button data-go="settings" class="${active === 'settings' ? 'active' : ''}"><span>⚙</span>Ayarlar</button>
  </nav>`;
}
function shell(content, active) { return `<main class="shell">${content}${active ? nav(active) : ''}</main>`; }
function card(icon, title, subtitle, action, count = '') {
  return `<button class="card field-card action-card" style="width:100%" ${action}>
    <span class="emoji">${icon}</span><span><h3>${h(title)}</h3><p>${h(subtitle)}</p></span><span class="grow"></span>${count ? `<b>${count}</b>` : '<span>›</span>'}
  </button>`;
}

function homePage() {
  const left = daysToExam();
  return shell(`<header class="topbar">
    <div class="brand"><div class="logo">✈</div><div class="brand-text"><strong>AeroTest Killer</strong><small>SHGM Dil Sınavı Hazırlık</small></div></div>
    <div class="grow"></div>
    ${state.signedIn ? `<button class="avatar" data-go="settings">${h((state.name || 'U')[0].toUpperCase())}</button>` : '<button class="login" data-action="login">Google ile giriş</button>'}
  </header>
  <section class="hero"><div class="eyebrow">Merhaba ${h(state.name || '👋')}</div><h1>Bugün ne çalışmak<br>istersin?</h1>
    <button class="countdown" data-go="settings"><span class="big">🗓️</span><span><strong>${left === null ? 'Sınav tarihini ayarla' : `${left} gün kaldı`}</strong><small>${left === null ? 'Geri sayımı başlat' : `Sınav tarihi: ${new Date(`${state.examDate}T00:00:00`).toLocaleDateString('tr-TR')}`}</small></span></button>
  </section>
  <section class="grid">
    <button class="card mode featured wide" data-go="exam"><span class="art">⏱️</span><div><h3>Sınav Modu</h3><p>Süre baskısı altında gerçek sınav deneyimi.</p></div></button>
    <button class="card mode" data-go="topics"><h3>Konulara Yönelik</h3><p>Soru tipini seçerek çalış.</p><span class="art">📖</span></button>
    <button class="card mode" data-go="patterns"><h3>Altın Kalıplar</h3><p>Kritik havacılık kalıplarını ezberle.</p><span class="art">🛩️</span></button>
    <button class="card mode" data-go="words"><h3>Kelime Çalışması</h3><p>${state.wrongWords.length ? `${state.wrongWords.length} yanlış kelime bekliyor` : '100 teknik kelimeyi güçlendir.'}</p><span class="art">🗂️</span></button>
    <button class="card mode" data-go="practice"><h3>Karışık Test</h3><p>180 soruluk havuzdan kendini ölç.</p><span class="art">🏆</span></button>
  </section>
  <section class="stats"><div class="stat"><strong>${state.answers}</strong><small>Soru</small></div><div class="stat"><strong>${state.minutes}</strong><small>Dakika</small></div><div class="stat"><strong>${state.streak}</strong><small>Gün Serisi</small></div><div class="stat"><strong>%${progress()}</strong><small>Başarı</small></div></section>`, 'home');
}

function typeIcon(type) {
  return ({ 'Yapı': '🧩', 'Çeviri': '🌐', 'Kelime': '🔤', 'Okuma': '📖', 'Cümle tamamlama': '☷', 'Boşluk doldurma': '⌙' })[type] || '•';
}
function topicsPage() {
  const selecting = topicMode === 'select';
  const selectedCount = topicTypes.size;
  const available = selecting ? selectedCount : QUESTION_TYPES.length;
  return shell(`${header('Konulara Yönelik')}
  <section class="topic-hero"><div><strong>Süre stresi yok, adım adım öğren.</strong><p>Yanıtından hemen sonra doğru cevap, neden yanlış olduğu ve pratik ipucu gösterilir.</p></div><span>✈</span></section>
  <section class="card topic-intro"><div class="topic-icon">📖</div><div><h2>Konu çalışması</h2><p>İstediğin soru tipleriyle çalışmaya başla.</p></div></section>
  <section class="card type-panel">
    <h2>Soru tipi</h2><p class="copy">${selecting ? 'Devam etmek için en az bir tür seç.' : 'Karışık modda tüm soru türleri dengeli gelir.'}</p>
    <div class="mode-switch"><button class="${topicMode === 'mixed' ? 'active' : ''}" data-action="topic-mode" data-mode="mixed">Karışık</button><button class="${selecting ? 'active' : ''}" data-action="topic-mode" data-mode="select">Seçerek</button></div>
    <div class="type-list">${QUESTION_TYPES.map(type => `<button class="type-choice ${(!selecting || topicTypes.has(type)) ? 'checked' : ''}" data-action="topic-type" data-type="${type}" ${!selecting ? 'disabled' : ''}><span class="type-symbol">${typeIcon(type)}</span><span>${h(type)}</span><span class="type-check">${topicTypes.has(type) ? '✓' : ''}</span></button>`).join('')}</div>
    <small class="type-help">${selecting ? `${selectedCount} tür seçildi` : '6 türün tamamı seçili'}</small>
  </section>
  <button class="primary ${available ? '' : 'disabled-button'}" data-action="start-topics" ${available ? '' : 'disabled'}>▶ ÇALIŞMAYA BAŞLA</button>`, 'home');
}

function wordChoices(index) {
  const correct = words[index][1];
  const pool = [...new Set(words.map(w => w[1]).filter(value => value !== correct))];
  const distractors = [pool[(index * 7 + 3) % pool.length], pool[(index * 11 + 17) % pool.length], pool[(index * 13 + 29) % pool.length]];
  const unique = [...new Set([correct, ...distractors])];
  for (const value of pool) {
    if (unique.length === 4) break;
    if (!unique.includes(value)) unique.push(value);
  }
  const shift = index % unique.length;
  const o = [...unique.slice(shift), ...unique.slice(0, shift)];
  return { o, a: o.indexOf(correct) };
}
function wordsHubPage() {
  return shell(`${header('Kelime Çalışması')}
    <section class="card intro"><h2>🔤 Teknik Havacılık Kelime Hazinesi</h2><p class="copy">100 kelimeyi şıklı biçimde çalış; her yanıtta örnek cümleyi ve Türkçe çevirisini gör.</p></section>
    ${card('🗂️', 'Tüm Kelimeler', `${words.length} teknik kelime ile çalış`, 'data-go="wordstudy/0"')}
    ${card('↻', 'Yanlış Kelimelerim', state.wrongWords.length ? `${state.wrongWords.length} kelime tekrar edilmeyi bekliyor.` : 'Henüz yanlış kelimen yok.', 'data-action="start-word-review" ' + (state.wrongWords.length ? '' : 'disabled'), state.wrongWords.length)}
    <section class="card mini-note"><strong>Öğrenme yöntemi</strong><p>Önce cevabı düşün. Ardından örnek cümlede kelimeyi bağlam içinde oku ve Türkçe karşılığını eşleştir.</p></section>`, 'home');
}
function nextReviewRoute(position) {
  return position + 1 < wordReviewQueue.length ? `wordwrong/${position + 1}` : 'words';
}
function wordStudyPage(index = 0, answerCode = '', review = false, reviewPosition = 0) {
  index = Number(index) % words.length;
  const [en, tr, example, translation, module] = words[index];
  const choices = wordChoices(index);
  const selected = answerCode.startsWith('a') ? Number(answerCode.slice(1)) : null;
  const answered = Number.isInteger(selected);
  const next = review ? nextReviewRoute(Number(reviewPosition)) : `wordstudy/${(index + 1) % words.length}`;
  return shell(`${header(review ? 'Yanlış Kelimelerim' : 'Kelime Çalışması')}
    <div class="progress"><i style="width:${Math.round((index + 1) / words.length * 100)}%"></i></div>
    <section class="card word-question"><span class="badge">${h(module)}</span><div class="word">${h(en)}</div><p class="copy">Bu kelimenin Türkçe anlamı nedir?</p></section>
    <div>${choices.o.map((choice, i) => `<button class="choice word-choice ${answered ? (i === choices.a ? 'correct' : i === selected ? 'wrong' : '') : ''}" data-word-answer="${i}" data-word-index="${index}" data-review="${review ? '1' : ''}" data-review-position="${reviewPosition}" ${answered ? 'disabled' : ''}><b>${letter(i)})</b> ${h(choice)}</button>`).join('')}</div>
    ${answered ? `<section class="answer-explanation correct-answer"><strong>✓ Doğru cevap: ${letter(choices.a)}. ${h(tr)}</strong><div class="example-box"><small>Örnek İngilizce cümle</small><p>${h(example)}</p><small>Türkçe çevirisi</small><p>${h(translation)}</p></div><div class="tip">💡 Bu kelimeyi “${h(module)}” bağlamında tekrar et.</div></section><button class="primary" data-go="${next}">${review ? 'SONRAKİ YANLIŞ KELİME' : 'SONRAKİ KELİME'} →</button>` : ''}`, 'home');
}

function patternsPage(index = 0) {
  const p = patterns[index % patterns.length];
  return shell(`${header('Altın Kalıplar')}<div class="segmented"><button class="active">Tüm Kalıplar</button><button>★ Öncelikli</button></div><section class="card pattern-card"><small>TEKNİK KALIP</small><div class="cue">${h(p.cue)}</div><div class="meaning">${h(p.meaning)}</div><p class="example">${h(p.example)}</p><div class="tip">💡 ${h(p.tip)}</div></section><div class="row"><button class="primary" data-go="patterns/${(index - 1 + patterns.length) % patterns.length}">‹</button><button class="primary" data-go="patterns/${(index + 1) % patterns.length}">›</button></div>`, 'home');
}

function setupPage(mode) {
  const isExam = mode === 'exam';
  return shell(`${header(isExam ? 'Sınav Modu' : 'Karışık Test')}
    <section class="card intro"><h2>${isExam ? '⏱️ Gerçek Sınav Deneyimi' : '🏆 Karışık Pratik'}</h2><p>${isExam ? 'Süre baskısı altında kendini test et.' : 'Altı soru türünden dengeli soru çöz.'}</p></section>
    <section class="card"><h3>Soru sayısı</h3><div class="segmented count-select">${[10, 20, 30, 50].map(x => `<button data-value="${x}" class="${x === 20 ? 'active' : ''}">${x}</button>`).join('')}</div>${isExam ? '<h3>Sınav süresi</h3><div class="segmented duration-select"><button data-value="30">30 dk</button><button data-value="60" class="active">60 dk</button></div>' : ''}</section>
    <button class="primary" data-action="start-standard" data-mode="${mode}">▶ ${isExam ? 'SINAVA' : 'ÇALIŞMAYA'} BAŞLA</button>`, 'home');
}
function startQuiz(mode, count, duration = 0, source = questions) {
  const items = shuffle(source).slice(0, Math.min(count, source.length));
  if (!items.length) { toast('Bu seçim için henüz soru yok.'); return; }
  session = { mode, items, index: 0, selected: null, score: 0, started: Date.now(), remaining: duration * 60 };
  go('quiz');
  if (mode === 'exam') startTimer();
}
function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (!session) return;
    session.remaining -= 1;
    const el = document.querySelector('.timer');
    if (el) el.textContent = formatTime(session.remaining);
    if (session.remaining <= 0) finishQuiz();
  }, 1000);
}
function formatTime(seconds) { return `${String(Math.max(0, Math.floor(seconds / 60))).padStart(2, '0')}:${String(Math.max(0, seconds % 60)).padStart(2, '0')}`; }
function feedback(q, selected) {
  const correct = `<section class="answer-explanation correct-answer"><strong>✓ Doğru cevap: ${letter(q.a)}. ${h(q.o[q.a])}</strong><p>${h(q.correctWhy)}</p>${q.tip ? `<div class="tip">💡 ${h(q.tip)}</div>` : ''}</section>`;
  if (selected === q.a) return correct;
  return `${correct}<section class="answer-explanation wrong-answer"><strong>✕ Neden yanlış?</strong><p>${h(q.wrongWhy || 'Seçtiğin seçenek, cümledeki anlam veya teknik kullanım ile uyuşmuyor.')}</p></section>`;
}
function quizPage() {
  if (!session) return setupPage('practice');
  const q = session.items[session.index];
  if (!q) return resultPage();
  const answered = session.selected !== null;
  const subtitle = session.mode === 'exam' ? 'Sınav Modu' : session.mode === 'topic' ? 'Konulara Yönelik' : session.mode === 'review' ? 'Yanlışlarım' : 'Karışık Pratik';
  return shell(`${header(`Soru ${session.index + 1} / ${session.items.length}`, subtitle)}
    <div class="quiz-head"><span class="badge">${h(q.type)}</span>${session.mode === 'exam' ? `<span class="timer">${formatTime(session.remaining)}</span>` : `<span>Doğru: ${session.score}</span>`}</div>
    <div class="progress"><i style="width:${Math.round(session.index / session.items.length * 100)}%"></i></div>
    ${q.passage ? `<section class="card reading-passage"><small>OKUMA PARÇASI</small><p>${h(q.passage)}</p></section>` : ''}
    <h2 class="question">${h(q.q)}</h2>
    <div>${q.o.map((o, i) => `<button class="choice ${answered ? (i === q.a ? 'correct' : i === session.selected ? 'wrong' : '') : ''}" data-answer="${i}" ${answered ? 'disabled' : ''}><b>${letter(i)})</b> ${h(o)}</button>`).join('')}</div>
    ${answered && session.mode !== 'exam' ? feedback(q, session.selected) : ''}
    ${answered ? `<button class="primary" data-action="next-question">${session.index === session.items.length - 1 ? 'SONUCU GÖR' : 'SONRAKİ SORU'} →</button>` : ''}`, 'home');
}
function answerQuestion(selected) {
  if (!session || session.selected !== null) return;
  const q = session.items[session.index];
  session.selected = selected;
  state.answers += 1;
  if (selected === q.a) {
    state.correct += 1;
    state.wrong = state.wrong.filter(id => id !== q.id);
  } else if (!state.wrong.includes(q.id)) {
    state.wrong.push(q.id);
  }
  touchStudy();
  save();
  render();
}
function nextQuestion() {
  if (!session) return;
  session.index += 1;
  session.selected = null;
  if (session.index >= session.items.length) finishQuiz(); else render();
}
function finishQuiz() {
  if (!session) return;
  clearInterval(timerId);
  state.minutes += Math.max(1, Math.round((Date.now() - session.started) / 60000));
  save();
  go('result');
}
function resultPage() {
  if (!session) return homePage();
  const pct = Math.round(session.score / session.items.length * 100);
  return shell(`${header('Sonuç')}<section class="card intro" style="text-align:center"><div style="font-size:55px">${pct >= 70 ? '🏆' : '📘'}</div><h2>%${pct} başarı</h2><p>${session.items.length} soruda ${session.score} doğru, ${session.items.length - session.score} yanlış.</p><div class="progress"><i style="width:${pct}%"></i></div></section><button class="primary" data-go="practice">YENİ TEST</button><button class="primary danger" data-go="home">ANA SAYFAYA DÖN</button>`, 'home');
}

function statsPage() {
  const group = type => state.wrong.filter(id => questions.find(q => q.id === id)?.type === type);
  return shell(`${header('İstatistikler')}
    <section class="grid"><div class="card"><small>Toplam soru</small><h2>${state.answers}</h2></div><div class="card"><small>Başarı</small><h2>%${progress()}</h2></div><div class="card"><small>Yanlış havuzu</small><h2>${state.wrong.length + state.wrongWords.length}</h2></div><div class="card"><small>Gün serisi</small><h2>${state.streak}</h2></div></section>
    <h3 class="section-title">YANLIŞ YAPTIKLARIM</h3>
    ${QUESTION_TYPES.map(type => card(typeIcon(type), `${type} Yanlışlarım`, group(type).length ? `${group(type).length} soru tekrar edilmeyi bekliyor.` : 'Bu kategoride yanlış yok.', `data-action="start-question-review" data-type="${type}" ${group(type).length ? '' : 'disabled'}`, group(type).length)).join('')}
    ${card('📚', 'Kelime Çalışması Yanlışlarım', state.wrongWords.length ? `${state.wrongWords.length} kelime tekrar edilmeyi bekliyor.` : 'Yanlış kelime yok.', `data-action="start-word-review" ${state.wrongWords.length ? '' : 'disabled'}`, state.wrongWords.length)}`, 'stats');
}
function settingsPage() {
  return shell(`${header('Ayarlar')}<section class="card settings"><div class="account"><div class="avatar">${h((state.name || 'U')[0].toUpperCase())}</div><div><strong>${h(state.name || 'Misafir kullanıcı')}</strong><p class="copy" style="margin:3px 0">${state.signedIn ? 'İlerleme buluta eşitlenebilir.' : 'İlerleme bu cihazda saklanıyor.'}</p></div></div><label>Görünen ad</label><input id="name" value="${h(state.name)}" placeholder="Adınız"><label>Sınav tarihi</label><input id="exam-date" type="date" value="${h(state.examDate)}"><button class="primary" data-action="save-settings">KAYDET</button>${state.signedIn ? '<button class="primary danger" data-action="logout">OTURUMU KAPAT</button>' : '<button class="primary" data-action="login">GOOGLE İLE GİRİŞ</button>'}</section><button class="card danger" style="width:100%;margin-top:14px" data-action="reset">Tüm yerel ilerlemeyi sıfırla</button>`, 'settings');
}

function loginModal() {
  const ready = Boolean(firebaseConfig.apiKey);
  document.body.insertAdjacentHTML('beforeend', `<div class="modal-wrap"><div class="modal"><h2>Google ile giriş</h2><p class="copy">${ready ? 'Google hesabınla giriş yaptığında ilerlemen hesabına bağlanır.' : 'Firebase yapılandırması henüz girilmemiş. İlerleme bu cihazda saklanmaya devam eder.'}</p>${ready ? '<button class="primary" data-action="google-login">GOOGLE İLE DEVAM ET</button>' : '<button class="primary" data-action="demo-login">YEREL PROFİLİ ETKİNLEŞTİR</button>'}<button class="secondary" data-action="close-modal">VAZGEÇ</button></div></div>`);
}
async function initFirebase() {
  if (!firebaseConfig.apiKey) return;
  try {
    const appMod = await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js');
    const authMod = await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js');
    const dbMod = await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js');
    const app = appMod.initializeApp(firebaseConfig);
    const auth = authMod.getAuth(app);
    const db = dbMod.getFirestore(app);
    await authMod.setPersistence(auth, authMod.browserLocalPersistence);
    cloud = { auth, db, authMod, dbMod, user: null };
    authMod.onAuthStateChanged(auth, async user => {
      cloud.user = user;
      if (user) {
        state.signedIn = true;
        state.name = state.name || user.displayName || '';
        const snap = await dbMod.getDoc(dbMod.doc(db, 'users', user.uid));
        if (snap.exists()) state = { ...state, ...snap.data(), signedIn: true, name: state.name || user.displayName || '' };
        save(); render();
      }
    });
  } catch (error) { console.warn('Firebase başlatılamadı', error); }
}
async function googleLogin() {
  if (!cloud) await initFirebase();
  if (!cloud) { toast('Firebase yapılandırması gerekli.'); return; }
  try {
    await cloud.authMod.signInWithPopup(cloud.auth, new cloud.authMod.GoogleAuthProvider());
    document.querySelector('.modal-wrap')?.remove();
    toast('Google hesabına bağlandı.');
  } catch { toast('Google girişi tamamlanamadı.'); }
}
async function syncCloud() {
  if (!cloud?.user) return;
  try { await cloud.dbMod.setDoc(cloud.dbMod.doc(cloud.db, 'users', cloud.user.uid), state, { merge: true }); } catch (error) { console.warn('İlerleme eşitlenemedi', error); }
}

function render() {
  route = location.hash.slice(1) || 'home';
  const [base, first, second, third] = route.split('/');
  let html;
  switch (base) {
    case 'home': html = homePage(); break;
    case 'topics': html = topicsPage(); break;
    case 'words': html = wordsHubPage(); break;
    case 'wordstudy': html = wordStudyPage(Number(first) || 0, second || ''); break;
    case 'wordwrong': html = wordStudyPage(wordReviewQueue[Number(first)] ?? 0, second || '', true, Number(first) || 0); break;
    case 'patterns': html = patternsPage(Number(first) || 0); break;
    case 'exam': html = setupPage('exam'); break;
    case 'practice': html = setupPage('practice'); break;
    case 'quiz': html = quizPage(); break;
    case 'result': html = resultPage(); break;
    case 'stats': html = statsPage(); break;
    case 'settings': html = settingsPage(); break;
    default: html = homePage();
  }
  document.querySelector('#app').innerHTML = html;
  window.scrollTo(0, 0);
}

document.addEventListener('click', event => {
  const link = event.target.closest('[data-go]');
  if (link) { go(link.dataset.go); return; }

  const answer = event.target.closest('[data-answer]');
  if (answer) { answerQuestion(Number(answer.dataset.answer)); return; }

  const wordAnswer = event.target.closest('[data-word-answer]');
  if (wordAnswer) {
    const index = Number(wordAnswer.dataset.wordIndex);
    const selected = Number(wordAnswer.dataset.wordAnswer);
    const { a } = wordChoices(index);
    state.answers += 1;
    if (selected === a) {
      state.correct += 1;
      state.wrongWords = state.wrongWords.filter(item => item !== index);
    } else if (!state.wrongWords.includes(index)) state.wrongWords.push(index);
    touchStudy(); save();
    const target = wordAnswer.dataset.review ? `wordwrong/${wordAnswer.dataset.reviewPosition}/a${selected}` : `wordstudy/${index}/a${selected}`;
    go(target);
    return;
  }

  const button = event.target.closest('[data-action]');
  if (!button || button.disabled) return;
  switch (button.dataset.action) {
    case 'topic-mode': {
      const previousMode = topicMode;
      topicMode = button.dataset.mode;
      if (topicMode === 'mixed') topicTypes = new Set(QUESTION_TYPES);
      else if (previousMode === 'mixed') topicTypes = new Set();
      render();
      break;
    }
    case 'topic-type': {
      const type = button.dataset.type;
      if (topicTypes.has(type)) topicTypes.delete(type); else topicTypes.add(type);
      render();
      break;
    }
    case 'start-topics': {
      const source = topicMode === 'mixed' ? questions : questions.filter(q => topicTypes.has(q.type));
      startQuiz('topic', 20, 0, source);
      break;
    }
    case 'start-standard': {
      const count = Number(document.querySelector('.count-select .active')?.dataset.value || 20);
      const duration = Number(document.querySelector('.duration-select .active')?.dataset.value || 60);
      startQuiz(button.dataset.mode, count, duration);
      break;
    }
    case 'next-question': nextQuestion(); break;
    case 'start-question-review': {
      const source = questions.filter(q => q.type === button.dataset.type && state.wrong.includes(q.id));
      startQuiz('review', source.length, 0, source);
      break;
    }
    case 'start-word-review':
      wordReviewQueue = shuffle([...state.wrongWords]);
      if (wordReviewQueue.length) go('wordwrong/0');
      break;
    case 'login': loginModal(); break;
    case 'google-login': googleLogin(); break;
    case 'close-modal': document.querySelector('.modal-wrap')?.remove(); break;
    case 'demo-login': state.signedIn = true; state.name = state.name || 'Onur'; save(); document.querySelector('.modal-wrap')?.remove(); render(); break;
    case 'logout': if (cloud?.user) cloud.authMod.signOut(cloud.auth); else { state.signedIn = false; save(); render(); } break;
    case 'save-settings': state.name = document.querySelector('#name').value.trim(); state.examDate = document.querySelector('#exam-date').value; save(); toast('Ayarlar kaydedildi.'); render(); break;
    case 'reset': if (confirm('Tüm yerel ilerleme kalıcı olarak silinsin mi?')) { state = { ...initial }; save(); render(); } break;
  }
});
document.addEventListener('click', event => {
  const button = event.target.closest('.segmented button[data-value]');
  if (!button) return;
  button.parentElement.querySelectorAll('button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
});
window.addEventListener('hashchange', render);
window.addEventListener('beforeunload', save);
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
render();
initFirebase();
