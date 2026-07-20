# Aerotest Killer – Mobil Sürüm 2.0

Uçak bakım teknisyenleri için SHGM dil sınavına hazırlık amaçlı, mobil öncelikli PWA. Android ve iPhone'da tarayıcıdan çalışır; ana ekrana eklenebilir ve ilk açılıştan sonra çevrimdışı kullanılabilir.

## Sürüm 2.0 yenilikleri

- 100 teknik havacılık kelimesi; her cevapta İngilizce örnek ve Türkçe çevirisi.
- Kelime Çalışması ana ekranında ve İstatistikler bölümünde ayrı **Yanlış Kelimelerim** tekrarı.
- 180 soruluk dengeli bank: Yapı, Çeviri, Kelime, Okuma, Cümle Tamamlama ve Boşluk Doldurma için 30'ar soru.
- Konulara Yönelik ekranda **Karışık** veya **Seçerek** çalışma modu.
- Yanlış yanıtta doğru cevabın açıklaması, seçimin neden yanlış olduğu ve öğrenme ipucu.

## Çalıştırma

Dosyayı doğrudan açmak yerine proje klasörünü bir web sunucusuyla çalıştırın:

```bash
python -m http.server 8080 --directory aerotest-killer
```

Ardından `http://localhost:8080` adresini açın.

## GitHub Pages

1. Bu klasörün içeriğini GitHub deposunun köküne yükleyin.
2. GitHub'da **Settings → Pages** bölümünü açın.
3. **Deploy from a branch**, `main` ve `/ (root)` seçip kaydedin.
4. Yayın adresini Android Chrome veya iPhone Safari ile açın ve ana ekrana ekleyin.

## Google oturumu ve iPhone'da kalıcılık

GitHub Pages üzerinde yalnızca Google OAuth access token kullanmak, iPhone'da tarayıcı kapatıldığında güvenilir bir sürekli oturum sağlamaz. İlk sürüm bu nedenle ilerlemeyi varsayılan olarak `localStorage` içinde saklar ve çevrimdışı devam eder.

Üretim sürümünde önerilen çözüm Firebase Authentication + Firestore'dur:

1. [Firebase Console](https://console.firebase.google.com/) üzerinden proje oluşturun.
2. **Authentication → Sign-in method → Google** sağlayıcısını etkinleştirin.
3. **Authentication → Settings → Authorized domains** alanına GitHub Pages alan adınızı ekleyin.
4. Projeye bir Web App ekleyip verilen `firebaseConfig` değerlerini alın.
5. Firestore Database oluşturun ve kullanıcıların yalnızca kendi belgesini okuyup yazabildiği güvenlik kuralını uygulayın.
6. Uygulamada `browserLocalPersistence` ayarını girişten **önce** çağırın. iPhone'da uygulamayı ana ekrana ekledikten sonra oturumu PWA içinden açın; Safari sekmesi ile ana ekran uygulamasının depolama alanı aynı kabul edilmemelidir.

Önerilen Firestore kuralı:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

Not: Web platformunda hiçbir yöntem, kullanıcı tarayıcı verilerini elle silerse oturumu koruyamaz. iOS da uzun süre kullanılmayan site verilerini kendi politikaları kapsamında temizleyebilir. “Asla kopmaz” garantisi teknik olarak verilemez; PWA + Firebase kalıcı oturum uygulanabilir en güvenilir yapıdır.
