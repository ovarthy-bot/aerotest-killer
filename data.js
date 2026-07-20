export const QUESTION_TYPES = ['Yapı', 'Çeviri', 'Kelime', 'Okuma', 'Cümle tamamlama', 'Boşluk doldurma'];

export const lessons = [
  { id: 'basics', code: 'B1', icon: '✈️', title: 'Temel Havacılık İngilizcesi', subtitle: 'Fonetik alfabe, sayılar ve bakım iletişimi' },
  { id: 'grammar', code: 'B2', icon: '📘', title: 'Sistem ve Gramer', subtitle: 'Zamanlar, edilgen yapı ve teknik cümleler' },
  { id: 'documentation', code: 'B3', icon: '🛠️', title: 'Bakım Dokümantasyonu', subtitle: 'AMM, IPC, FIM ve teknik kayıt dili' },
  { id: 'regulatory', code: 'B4', icon: '🛡️', title: 'Mevzuat ve Emniyet', subtitle: 'MEL, CRS, human factors ve raporlama' }
];

export const patterns = [
  { cue: 'subject ___ TO', meaning: '…e maruz kalmak / tabi olmak', example: 'Components subject to wear must be inspected.', tip: 'subject kelimesinden sonra çoğunlukla “to” gelir.' },
  { cue: 'in accordance ___', meaning: '…e uygun olarak', example: 'Perform the task in accordance with the AMM.', tip: 'Kalıp “in accordance with” şeklindedir.' },
  { cue: 'make sure ___', meaning: '…olduğundan emin olmak', example: 'Make sure that the area is clean.', tip: 'Devamında “that + cümle” veya isim grubu gelebilir.' },
  { cue: 'prevent ___ -ing', meaning: '…in yapılmasını önlemek', example: 'The lock prevents the valve from opening.', tip: 'prevent + nesne + from + V-ing' },
  { cue: 'refer ___', meaning: '…e başvurmak', example: 'Refer to the applicable wiring diagram.', tip: 'refer fiilinden sonra “to” kullanılır.' },
  { cue: 'capable ___', meaning: '…yapabilecek kapasitede', example: 'The unit is capable of supplying AC power.', tip: 'capable of + V-ing' }
];

// [İngilizce, Türkçe, örnek İngilizce cümle, Türkçe çevirisi, modül]
export const words = [
  ['airworthiness','uçuşa elverişlilik','Airworthiness must be maintained throughout the aircraft life.','Uçağın uçuşa elverişliliği tüm hizmet ömrü boyunca korunmalıdır.','Mevzuat'],
  ['applicable','uygulanabilir / ilgili','Use the applicable maintenance procedure.','Uygulanabilir bakım prosedürünü kullanın.','Dokümantasyon'],
  ['chafing','sürtünme kaynaklı aşınma','Inspect the wiring for chafing.','Kabloları sürtünme kaynaklı aşınma açısından inceleyin.','Elektrik'],
  ['clearance','boşluk / açıklık','Measure the clearance between the two parts.','İki parça arasındaki boşluğu ölçün.','Standart Uygulamalar'],
  ['comply','uygun hareket etmek','Comply with all safety precautions.','Tüm emniyet önlemlerine uyun.','Mevzuat'],
  ['coupling','bağlantı elemanı','The leak was found at the line coupling.','Sızıntı hat bağlantı elemanında bulundu.','Hidrolik'],
  ['defer','ertelemek','The defect may be deferred in accordance with the MEL.','Arıza MEL’e uygun olarak ertelenebilir.','MEL'],
  ['discrepancy','uygunsuzluk / bulgu','Record each discrepancy in the technical log.','Her uygunsuzluğu teknik deftere kaydedin.','Raporlama'],
  ['dispatch','sefere vermek','The aircraft may be dispatched under MEL conditions.','Uçak MEL koşulları altında sefere verilebilir.','Operasyon'],
  ['drain','tahliye etmek','Drain the remaining fuel from the tank.','Depodaki kalan yakıtı tahliye edin.','Yakıt'],
  ['fastener','bağlantı elemanı','Replace each damaged fastener.','Her hasarlı bağlantı elemanını değiştirin.','Yapısal'],
  ['fitting','rakor / bağlantı parçası','Tighten the hydraulic fitting to the specified torque.','Hidrolik rakoru belirtilen torka sıkın.','Hidrolik'],
  ['leakage','sızıntı','No further leakage was observed.','Başka bir sızıntı gözlenmedi.','Raporlama'],
  ['mandatory','zorunlu','Compliance with the airworthiness directive is mandatory.','Uçuşa elverişlilik direktifine uyum zorunludur.','Mevzuat'],
  ['overhaul','revizyon / büyük bakım','Send the component to the shop for overhaul.','Komponenti revizyon için atölyeye gönderin.','Komponent'],
  ['proximity','yakınlık','The proximity sensor detects the target position.','Yakınlık sensörü hedef konumu algılar.','Elektrik'],
  ['replenish','ikmal etmek','Replenish the reservoir to the correct level.','Rezervuara doğru seviyeye kadar ikmal yapın.','Servis'],
  ['serviceable','kullanılabilir durumda','Install a serviceable replacement unit.','Kullanılabilir durumdaki yedek üniteyi takın.','Raporlama'],
  ['shear','kesme / koparma','The pin is designed to shear under excessive load.','Pim aşırı yük altında kopacak şekilde tasarlanmıştır.','Yapısal'],
  ['troubleshooting','arıza giderme','Continue with the applicable troubleshooting procedure.','Uygulanabilir arıza giderme prosedürüyle devam edin.','FIM/TSM'],
  ['velocity','sürat / hız','The velocity was within the specified limits.','Hız belirtilen limitler içindeydi.','Aerodinamik'],
  ['bonding','elektriksel irtibatlama','Check the bonding resistance.','Elektriksel irtibatlama direncini kontrol edin.','Elektrik'],
  ['contamination','kirlenme / yabancı madde bulaşması','Protect the system from contamination.','Sistemi yabancı madde bulaşmasından koruyun.','Temizlik'],
  ['deterioration','bozulma / kötüleşme','Inspect the seal for deterioration.','Contayı bozulma açısından inceleyin.','Kontrol'],
  ['elongation','uzama','Measure the bolt for excessive elongation.','Cıvatayı aşırı uzama açısından ölçün.','Yapısal'],
  ['flush','aynı hizada / yüzeyle sıfır','Make sure the fastener head is flush with the surface.','Bağlantı elemanı başının yüzeyle aynı hizada olduğundan emin olun.','Yapısal'],
  ['frayed','lifleri ayrılmış / saçaklanmış','Replace the frayed control cable.','Saçaklanmış kumanda kablosunu değiştirin.','Kumanda'],
  ['gasket','conta','Install a new gasket before assembly.','Montajdan önce yeni bir conta takın.','Motor'],
  ['hazardous','tehlikeli','Keep hazardous materials in approved containers.','Tehlikeli malzemeleri onaylı kaplarda bulundurun.','Emniyet'],
  ['impair','olumsuz etkilemek / bozmak','Damage can impair system operation.','Hasar sistem çalışmasını olumsuz etkileyebilir.','Teknik Dil'],
  ['inadvertent','istenmeden gerçekleşen','Prevent inadvertent operation of the system.','Sistemin istenmeden çalışmasını önleyin.','Emniyet'],
  ['intermittent','aralıklı / kesintili','The crew reported an intermittent fault.','Ekip aralıklı bir arıza bildirdi.','FIM/TSM'],
  ['latch','mandal / kilit','Make sure the access panel latch is secure.','Erişim paneli mandalının emniyetli olduğundan emin olun.','Gövde'],
  ['loosen','gevşetmek','Loosen the nut before adjustment.','Ayarlamadan önce somunu gevşetin.','Standart Uygulamalar'],
  ['misalignment','hizasızlık','Excessive vibration may indicate misalignment.','Aşırı titreşim hizasızlığa işaret edebilir.','Mekanik'],
  ['obstruction','engel / tıkanıklık','Check the duct for obstruction.','Kanalı tıkanıklık açısından kontrol edin.','Pnömatik'],
  ['permissible','izin verilen','The damage is within permissible limits.','Hasar izin verilen limitler içindedir.','SRM'],
  ['prevent','önlemek','Install the lockpin to prevent movement.','Hareketi önlemek için kilit pimini takın.','Emniyet'],
  ['residual','artık / kalan','Release residual pressure before removal.','Sökmeden önce artık basıncı boşaltın.','Hidrolik'],
  ['restore','eski durumuna getirmek','Restore the aircraft to its normal configuration.','Uçağı normal konfigürasyonuna geri getirin.','AMM'],
  ['seizure','sıkışma / kilitlenme','Lubrication prevents bearing seizure.','Yağlama rulman sıkışmasını önler.','Mekanik'],
  ['specified','belirtilen','Apply the specified torque value.','Belirtilen tork değerini uygulayın.','AMM'],
  ['subsequent','sonraki / takip eden','Monitor the system during subsequent flights.','Sistemi takip eden uçuşlarda izleyin.','Teknik Dil'],
  ['tighten','sıkmak','Tighten the bolts in the correct sequence.','Cıvataları doğru sırayla sıkın.','Standart Uygulamalar'],
  ['unserviceable','kullanılamaz durumda','Tag the removed component as unserviceable.','Sökülen komponenti kullanılamaz olarak etiketleyin.','Lojistik'],
  ['wear','aşınma','Inspect the bearing for wear.','Rulmanı aşınma açısından inceleyin.','Kontrol'],
  ['withstand','dayanmak','The structure must withstand the applied load.','Yapı uygulanan yüke dayanmalıdır.','Yapısal'],
  ['adequate','yeterli / uygun','Use adequate lighting during the inspection.','Kontrol sırasında yeterli aydınlatma kullanın.','İnsan Faktörleri'],
  ['adjacent','bitişik / komşu','Inspect the adjacent structure for damage.','Komşu yapıyı hasar açısından inceleyin.','Yapısal'],
  ['accomplish','yerine getirmek / tamamlamak','Accomplish the task before the next flight.','Görevi bir sonraki uçuştan önce tamamlayın.','AMM'],
  ['actuator','aktüatör','The actuator moves the flight control surface.','Aktüatör uçuş kumanda yüzeyini hareket ettirir.','Uçuş Kumandaları'],
  ['aileron','aleron','Inspect the aileron hinge points for wear.','Aileron menteşe noktalarını aşınma açısından inceleyin.','Uçuş Kumandaları'],
  ['ambient','çevresel / ortam','Allow the unit to cool to ambient temperature.','Ünitenin ortam sıcaklığına kadar soğumasına izin verin.','Teknik Dil'],
  ['anomaly','anormallik','Report any anomaly immediately.','Herhangi bir anormalliği derhal rapor edin.','Raporlama'],
  ['aperture','açıklık / delik','Keep the aperture free from obstruction.','Açıklığı tıkanıklıktan uzak tutun.','Yapısal'],
  ['bearing','rulman','Replace the bearing if it is worn beyond limits.','Rulman limitler dışında aşınmışsa değiştirin.','Mekanik'],
  ['bleed','hava almak / havasını boşaltmak','Bleed the hydraulic system after servicing.','Servis işleminden sonra hidrolik sistemin havasını alın.','Hidrolik'],
  ['brittle','gevrek','Do not install brittle hoses.','Gevrek hortumları takmayın.','Malzeme'],
  ['bypass','baypas / devre dışı bırakma','Do not bypass the safety device.','Emniyet tertibatını baypas etmeyin.','Emniyet'],
  ['calibration','kalibrasyon','Verify the calibration date of the tool.','Aletin kalibrasyon tarihini doğrulayın.','Kalite'],
  ['circuit','devre','Isolate the circuit before maintenance.','Bakım öncesinde devreyi izole edin.','Elektrik'],
  ['clamp','kelepçe','Install a new clamp on the line.','Hat üzerine yeni bir kelepçe takın.','Standart Uygulamalar'],
  ['conductive','iletken','Keep conductive materials away from live terminals.','İletken malzemeleri enerjili terminallerden uzak tutun.','Elektrik'],
  ['corrosion','korozyon','Remove corrosion in accordance with the SRM.','Korozyonu SRM’e uygun olarak giderin.','Yapısal'],
  ['crack','çatlak','A crack was observed near the attachment point.','Bağlantı noktasına yakın bir çatlak gözlendi.','Raporlama'],
  ['defect','arıza / kusur','Record the defect in the technical log.','Arızayı teknik deftere kaydedin.','Raporlama'],
  ['delamination','tabaka ayrılması','Inspect the composite panel for delamination.','Kompozit paneli tabaka ayrılması açısından inceleyin.','Yapısal'],
  ['emergency','acil durum','Know the emergency shutdown procedure.','Acil kapatma prosedürünü bilin.','Emniyet'],
  ['fatigue','yorulma','The crack may be caused by fatigue.','Çatlak yorulmadan kaynaklanmış olabilir.','Yapısal'],
  ['fluctuate','dalgalanmak','The pressure may fluctuate during the test.','Basınç test sırasında dalgalanabilir.','Hidrolik'],
  ['fuselage','gövde','Inspect the fuselage skin for damage.','Gövde kaplamasını hasar açısından inceleyin.','Yapısal'],
  ['hydraulic','hidrolik','Check the hydraulic fluid level.','Hidrolik sıvı seviyesini kontrol edin.','Hidrolik'],
  ['insulation','yalıtım','The insulation showed signs of overheating.','Yalıtım aşırı ısınma belirtileri gösterdi.','Elektrik'],
  ['lubricate','yağlamak','Lubricate the hinge in accordance with the AMM.','Menteşeyi AMM’e uygun olarak yağlayın.','Servis'],
  ['manifold','manifold / dağıtım bloğu','Inspect the fuel manifold for leakage.','Yakıt manifoldunu sızıntı açısından inceleyin.','Yakıt'],
  ['nacelle','motor kaportası','Close the engine nacelle after the inspection.','Kontrolden sonra motor kaportasını kapatın.','Motor'],
  ['nozzle','nozul','Clean the nozzle with approved solvent.','Nozulu onaylı solventle temizleyin.','Motor'],
  ['panel','panel','Remove the access panel carefully.','Erişim panelini dikkatlice sökün.','Gövde'],
  ['pressure','basınç','The pressure was below the minimum limit.','Basınç minimum limitin altındaydı.','Pnömatik'],
  ['procedure','prosedür','Follow the approved procedure step by step.','Onaylı prosedürü adım adım takip edin.','Dokümantasyon'],
  ['relay','röle','Replace the faulty relay in the avionics bay.','Aviyonik bölmesindeki arızalı röleyi değiştirin.','Elektrik'],
  ['reservoir','rezervuar','Check the reservoir quantity before dispatch.','Sefere vermeden önce rezervuar miktarını kontrol edin.','Hidrolik'],
  ['rudder','dümen','Check the rudder travel and neutral position.','Dümen hareketini ve nötr konumu kontrol edin.','Uçuş Kumandaları'],
  ['safety wire','emniyet teli','Install safety wire on the bolt heads.','Cıvata başlarına emniyet teli takın.','Standart Uygulamalar'],
  ['sealant','mastik / sızdırmazlık malzemesi','Apply sealant to the mating surface.','Birleşim yüzeyine mastik uygulayın.','Standart Uygulamalar'],
  ['sensor','sensör','The sensor sends a signal to the control unit.','Sensör kumanda ünitesine sinyal gönderir.','Elektrik'],
  ['torque','torklamak / tork','Torque the nut to 120 Nm.','Somunu 120 Nm torka sıkın.','Standart Uygulamalar'],
  ['valve','valf','Open the valve slowly.','Valfi yavaşça açın.','Hidrolik'],
  ['vibration','titreşim','Investigate abnormal vibration immediately.','Anormal titreşimi derhal inceleyin.','Raporlama'],
  ['wiring','kablolama','Inspect the wiring harness for damage.','Kablo demetini hasar açısından inceleyin.','Elektrik'],
  ['yield','akma / esneme sınırı','Do not exceed the material yield limit.','Malzemenin akma sınırını aşmayın.','Yapısal'],
  ['tolerance','tolerans','The measured value is within tolerance.','Ölçülen değer tolerans içindedir.','Kalite'],
  ['alignment','hizalama','Check the wheel alignment after replacement.','Değişimden sonra tekerlek hizalamasını kontrol edin.','Mekanik'],
  ['inspection','kontrol / muayene','Complete the inspection before sign-off.','İmza öncesinde kontrolü tamamlayın.','Kalite'],
  ['maintenance','bakım','Maintenance must be performed using approved data.','Bakım onaylı veri kullanılarak yapılmalıdır.','Dokümantasyon'],
  ['repair','onarım','Carry out the repair in accordance with the SRM.','Onarımı SRM’e uygun olarak gerçekleştirin.','Yapısal'],
  ['release to service','uçuşa/bakıma serbest bırakma','The aircraft was released to service after the test.','Uçak testten sonra servise serbest bırakıldı.','Mevzuat'],
  ['logbook','teknik defter','Enter the action in the aircraft logbook.','Yapılan işlemi uçak teknik defterine girin.','Raporlama'],
  ['service bulletin','servis bülteni','Comply with the applicable service bulletin.','İlgili servis bültenine uyun.','Mevzuat'],
  ['walkaround','uçak çevresi kontrolü','Complete the walkaround before the flight.','Uçuştan önce uçak çevresi kontrolünü tamamlayın.','Hat Bakımı']
];

function optionsFor(correct, distractors, seed) {
  const all = [correct, ...distractors].slice(0, 4);
  const shift = seed % all.length;
  const options = [...all.slice(shift), ...all.slice(0, shift)];
  return { o: options, a: options.indexOf(correct) };
}

function question(id, type, text, correct, distractors, correctWhy, wrongWhy, extras = {}) {
  return { id, type, q: text, ...optionsFor(correct, distractors, id), correctWhy, wrongWhy, tip: extras.tip || '', passage: extras.passage || '' };
}

const grammarSeeds = [
  ['The bolts ______ to 45 Nm during the previous inspection.','were torqued',['torque','are torque','have torque'],'Geçmişte tamamlanan edilgen işlem için “were + V3” kullanılır.','Seçilen yapı geçmiş zamanlı edilgen eylemi vermez.','Past Simple Passive'],
  ['If the seal is damaged, ______ it with a new one.','replace',['replaced','replacing','to replace'],'Bakım talimatlarında emir kipi, fiilin yalın hâliyle kullanılır.','Bu seçenek prosedür talimatının emir kipine uymaz.','İmperative'],
  ['The access panel cannot be installed until the leak test ______.','is completed',['completes','has completing','will complete'],'Test edilgen olduğundan “is completed” gerekir.','Seçenek, “test”in kendi kendine eylem yaptığı anlamını veya yanlış zamanı verir.','Passive Voice'],
  ['The result depends ______ the position of the ground control valve.','on',['of','with','over'],'Depend fiili sabit olarak “on” ile kullanılır.','Depend fiilinin bu edatla kullanımı yoktur.','Verb + Preposition'],
  ['The inspection was carried out ______ AMM 27-50-00.','in accordance with',['according from','related at','comply to'],'Standart teknik ifade “in accordance with”tir.','Seçenek teknik doküman referans kalıbını oluşturmaz.','Fixed Expression'],
  ['The engineer has ______ reviewed the revised task card.','already',['yesterday','ago','last'],'Present Perfect ile “already” kullanılır.','Yesterday, ago ve last geçmişte bitmiş zaman ister; Present Perfect ile kullanılmaz.','Present Perfect'],
  ['The crew ______ the fuel quantity at the moment.','are checking',['check','checked','will check'],'“At the moment” şu anda devam eden eylemi gösterir; Present Continuous gerekir.','Seçenek cümlenin zaman ifadesiyle uyumlu değildir.','Present Continuous'],
  ['The technician ______ the damaged clamp yesterday.','replaced',['replaces','is replacing','has replace'],'Yesterday, Past Simple kullanılması gerektiğini gösterir.','Seçenek dün tamamlanmış eylemin zamanına uymaz.','Past Simple'],
  ['The system may be ______ after the functional test.','released',['release','releasing','releases'],'May be + V3, edilgen yapıdır: may be released.','Modal fiilden sonra bu biçim kullanılamaz.','Modal Passive'],
  ['The component ______ before the next flight.','must be inspected',['must inspect','must inspected','is must inspected'],'Must be + V3, zorunluluk bildiren edilgen yapıdır.','Seçenek modal fiil ve edilgen yapı kuralına uymaz.','Modal Passive'],
  ['While the aircraft ______, do not remove the safety pin.','is being serviced',['services','was serviced','has service'],'While ile devam eden edilgen eylem için “is being serviced” kullanılır.','Seçenek eş zamanlı devam eden bakım anlamını vermez.','Passive Continuous'],
  ['The pressure switch ______ in the high pressure position.','has failed',['has fail','have failed','failed'],'Tekil özneyle Present Perfect: has + V3 kullanılır.','Seçenek yardımcı fiil veya V3 kuralına uymaz.','Present Perfect'],
  ['The maintenance team ______ all checks before sunrise.','had completed',['have completed','was completing','will complete'],'Bir başka geçmiş olaydan önce tamamlanmış eylem için Past Perfect uygundur.','Seçenek “before sunrise” bağlamındaki önce tamamlanmış eylemi göstermez.','Past Perfect'],
  ['The aircraft ______ when the storm started.','was taxiing',['taxied','is taxiing','has taxied'],'Geçmişte başka bir olay olurken devam eden eylem için Past Continuous kullanılır.','Seçenek iki geçmiş olayın zaman ilişkisini doğru kurmaz.','Past Continuous'],
  ['The mechanic ______ the fuel system for two hours.','has been checking',['checked','is check','had check'],'For two hours ve devam eden eylem için Present Perfect Continuous uygundur.','Seçenek sürekliliği ifade etmez.','Present Perfect Continuous'],
  ['The report ______ by the certifying staff before release.','must be signed',['must sign','must signed','is must sign'],'Zorunlu edilgen işlem: must be + V3.','Seçenek modal-edilgen yapısını bozuyor.','Modal Passive'],
  ['The defect ______ under MEL 23-50-00.','was deferred',['is defer','has defer','was defer'],'Tamamlanmış kayıt için Past Simple Passive kullanılır.','Seçenek fiilin üçüncü hâlini veya zamanı doğru kullanmaz.','Maintenance Record'],
  ['If the indication ______ again, refer to the FIM.','appears',['appeared','will appear','appearing'],'Prosedür koşul cümlesinde If + Present Simple kullanılır.','Seçenek prosedür koşul yapısına uymaz.','Conditional'],
  ['The work card ______ after completion of the task.','will be signed',['will sign','will signed','is will signed'],'Gelecek edilgen yapı: will be + V3.','Seçenek will sonrası doğru biçimi kullanmaz.','Future Passive'],
  ['The technician ______ wear on the bearing during the inspection.','found',['finds','was find','has finding'],'Tamamlanmış gözlem için Past Simple “found” kullanılır.','Seçenek düzensiz fiilin doğru geçmiş hâli değildir.','Irregular Verb'],
  ['The new unit ______ in the avionics bay now.','is being installed',['installs','was installed','has install'],'Now ifadesi, devam eden edilgen montajı gösterir.','Seçenek şu an gerçekleşen edilgen eylemi ifade etmez.','Present Continuous Passive'],
  ['No further leakage ______ after the pressure test.','was observed',['observed','is observe','has observing'],'Bakım raporunda geçmişte gözlemlenmeyen bulgu için Passive Past kullanılır.','Seçenek edilgen yapı veya fiil biçimi açısından yanlıştır.','Maintenance Record'],
  ['The access doors ______ before the aircraft is released.','must be closed',['must close','must closed','are must closed'],'Must be + V3, zorunlu edilgen işlemdir.','Seçenek modal fiil sonrası doğru yapıyı kullanmaz.','Modal Passive'],
  ['The pressure ______ below limits, so the crew stopped the test.','was',['is','has been','will be'],'Testin durdurulduğu geçmiş bağlamda Past Simple gerekir.','Seçenek zaman bağlamıyla uymaz.','Past Simple'],
  ['The engineer ______ the wiring diagram before he started the test.','had reviewed',['reviews','was reviewing','will review'],'Testten önce tamamlanan eylem için Past Perfect kullanılır.','Seçenek geçmişteki sıra ilişkisini ifade etmez.','Past Perfect'],
  ['The panel is ______ by two quick-release fasteners.','secured',['secure','securing','secures'],'Is + V3, mevcut durumu belirten edilgen yapıdır.','Seçenek is sonrası gereken V3 biçimini vermez.','Passive Voice'],
  ['The crew ______ the aircraft tomorrow morning.','will inspect',['inspected','are inspect','has inspected'],'Tomorrow future simple bağlamıdır.','Seçenek gelecek zaman bağlamıyla uymaz.','Future Simple'],
  ['The system ______ normally when the fault occurred.','was operating',['operates','has operated','will operate'],'Arıza gerçekleşirken süren eylem için Past Continuous gerekir.','Seçenek iki olayın geçmiş zaman ilişkisini bozuyor.','Past Continuous'],
  ['The warning light ______ until the test was completed.','remained on',['remain','is remain','has remaining'],'Geçmişte tamamlanan test bağlamında Past Simple kullanılır.','Seçenek geçmişte bitmiş durumu doğru ifade etmez.','Past Simple'],
  ['The aircraft ______ to service after the inspection.','was returned',['returned','is return','has returning'],'Uçağın servise geri verilmesi edilgen bir işlemdir.','Seçenek bakım kaydındaki edilgen anlamı taşımaz.','Maintenance Record']
];

const translations = [
  ['Make sure that all circuit breakers are open before you disconnect the connector.','Konektörü ayırmadan önce tüm devre kesicilerin açık olduğundan emin olun.'],
  ['No defects were found during the detailed visual inspection.','Detaylı görsel kontrol sırasında herhangi bir kusur bulunmadı.'],
  ['Release residual pressure before you loosen the fitting.','Rakoru gevşetmeden önce artık basıncı boşaltın.'],
  ['The damage is within the limits specified in the SRM.','Hasar SRM’de belirtilen limitler içindedir.'],
  ['Use adequate lighting to ensure that the work area is well illuminated.','Çalışma alanının iyi aydınlatıldığından emin olmak için yeterli ışık kullanın.'],
  ['Restore the aircraft to its normal configuration after completion of the task.','Görev tamamlandıktan sonra uçağı normal konfigürasyonuna getirin.'],
  ['Tag the removed unit as unserviceable and send it to the repair shop.','Sökülen üniteyi kullanılamaz olarak etiketleyip tamir atölyesine gönderin.'],
  ['The worn bearing was replaced and the system was function-tested satisfactorily.','Aşınmış rulman değiştirildi ve sistem fonksiyon testi başarılı şekilde yapıldı.'],
  ['The technician observed a hydraulic leak near the nose gear actuator.','Teknisyen burun iniş takımı aktüatörü yakınında hidrolik sızıntı gözlemledi.'],
  ['Install the safety pin before you work in the landing gear bay.','İniş takımı bölmesinde çalışmadan önce emniyet pimini takın.'],
  ['The component was removed in accordance with AMM 29-10-00.','Komponent AMM 29-10-00’a uygun olarak söküldü.'],
  ['Do not use unapproved materials for the repair.','Onarım için onaysız malzeme kullanmayın.'],
  ['The fuel quantity must be checked before dispatch.','Yakıt miktarı sefere vermeden önce kontrol edilmelidir.'],
  ['The maintenance record was completed by authorized personnel.','Bakım kaydı yetkili personel tarafından tamamlandı.'],
  ['Inspect adjacent structure for corrosion and cracking.','Komşu yapıyı korozyon ve çatlak açısından inceleyin.'],
  ['The test equipment must be calibrated before use.','Test ekipmanı kullanımdan önce kalibre edilmelidir.'],
  ['The fault was intermittent and could not be reproduced.','Arıza aralıklıydı ve tekrar oluşturulamadı.'],
  ['Apply sealant to the mating surface before installation.','Montajdan önce birleşim yüzeyine mastik uygulayın.'],
  ['The hydraulic reservoir was replenished to the correct level.','Hidrolik rezervuara doğru seviyeye kadar ikmal yapıldı.'],
  ['Remove all tools and equipment from the work area.','Tüm aletleri ve ekipmanı çalışma alanından kaldırın.'],
  ['The circuit was isolated before the wiring was repaired.','Kablolama onarılmadan önce devre izole edildi.'],
  ['Record the torque value on the task card.','Tork değerini görev kartına kaydedin.'],
  ['The aircraft may be dispatched with one system inoperative if MEL permits.','MEL izin veriyorsa uçak bir sistemi çalışmaz durumdayken sefere verilebilir.'],
  ['The access panel was secured with quick-release fasteners.','Erişim paneli hızlı sökülebilir bağlantı elemanlarıyla emniyete alındı.'],
  ['Clean the area before you apply the corrosion preventive compound.','Korozyon önleyici bileşiği uygulamadan önce alanı temizleyin.'],
  ['The technician verified that the warning placard was installed.','Teknisyen uyarı plakasının takılı olduğunu doğruladı.'],
  ['Follow the approved procedure and observe all safety precautions.','Onaylı prosedürü takip edin ve tüm emniyet önlemlerine uyun.'],
  ['The engine nacelle must be closed before the engine run.','Motor çalıştırmadan önce motor kaportası kapatılmalıdır.'],
  ['The defect was deferred and entered in the technical logbook.','Arıza ertelendi ve teknik deftere girildi.'],
  ['Do not exceed the permissible damage limits.','İzin verilen hasar limitlerini aşmayın.']
];

const completionSeeds = [
  ['When carrying out maintenance at night or in poor lighting conditions, ______.','use adequate lighting to ensure the work area is well illuminated',['maintenance should be deferred until daylight','rely on memory rather than technical manuals','limit the inspection to visible areas only'],'Yetersiz ışıkta doğru uygulama, çalışma alanını yeterli şekilde aydınlatmaktır.','Diğer seçenekler prosedüre aykırı veya emniyetsizdir.'],
  ['Before installing a new O-ring, ______.','inspect it for damage and apply the approved lubricant',['stretch it to make it fit','reuse the old sealant only','install it without inspection'],'O-ring montajından önce hasar kontrolü ve onaylı yağlayıcı uygulaması gerekir.','Diğer seçenekler contaya zarar verebilir veya sızıntıya neden olabilir.'],
  ['If a circuit breaker trips again after reset, ______.','do not reset it again; refer to the applicable procedure',['continue resetting it until it stays in','replace it without troubleshooting','ignore the indication'],'Tekrarlayan CB atmasında tekrar tekrar resetlemek yerine prosedüre başvurulur.','Diğer seçenekler arızayı maskeleyebilir veya emniyet riski yaratır.'],
  ['After completing the maintenance task, ______.','remove tools and restore the aircraft configuration',['leave access panels open','start another unrelated task','omit the work card entry'],'Bakım çıkışında alet kontrolü ve normal konfigürasyona dönüş gerekir.','Diğer seçenekler bakım çıkış koşullarını karşılamaz.'],
  ['When a hydraulic leak is observed, ______.','identify the source before replacing any component',['wipe it away and release the aircraft','add fluid without investigation','replace the first nearby part'],'Önce sızıntı kaynağı kesin olarak tespit edilmelidir.','Diğer seçenekler kök nedeni çözmez.'],
  ['To prevent foreign object damage, ______.','keep the work area clean and account for all tools',['place loose parts on the wing','leave hardware in the bay','store tools under the aircraft'],'FOD önleme için temizlik ve alet sayımı esastır.','Diğer seçenekler FOD riskini artırır.'],
  ['Before disconnecting an electrical connector, ______.','isolate the related electrical power source',['pull the connector by its wires','apply hydraulic pressure','remove the identification tag'],'Elektrik konektörü ayrılmadan önce ilgili enerji izole edilir.','Diğer seçenekler elektrik emniyeti kuralını karşılamaz.'],
  ['When tightening bolts in a pattern, ______.','follow the sequence specified in the maintenance data',['tighten one bolt fully first','use any random order','ignore torque values'],'Belirtilen sıra yükü dengeli dağıtır.','Diğer seçenekler deformasyon veya yanlış torka yol açabilir.'],
  ['If the aircraft is on jacks, ______.','install the required safety locks before work',['move the aircraft with a tug','remove all warning signs','operate the gear without precautions'],'Jack üzerindeki uçakta emniyet kilitleri kullanılmalıdır.','Diğer seçenekler ciddi emniyet riski doğurur.'],
  ['When using chemical products, ______.','check the material safety data and wear required PPE',['mix products to improve cleaning','ignore ventilation requirements','use unlabelled containers'],'Kimyasal kullanımında SDS ve kişisel koruyucu ekipman zorunludur.','Diğer seçenekler kimyasal emniyete aykırıdır.'],
  ['If an AMM step conflicts with verbal instruction, ______.','follow approved maintenance data and clarify the conflict',['follow the verbal instruction immediately','skip the step','write the AMM step from memory'],'Onaylı bakım verisi esastır; çelişki açıklığa kavuşturulur.','Diğer seçenekler onaylı veriden sapma yaratır.'],
  ['Before an engine run, ______.','make sure the area is clear and all safety precautions are met',['leave loose equipment nearby','open all access panels','work inside the intake area'],'Motor çalıştırma öncesinde alan emniyeti sağlanır.','Diğer seçenekler yaralanma veya FOD riski taşır.'],
  ['When recording a defect, ______.','use clear and objective technical language',['use informal expressions','guess the fault cause','omit the component location'],'Kayıt, bulguyu ve yerini açıkça belirtmelidir.','Diğer seçenekler izlenebilirliği azaltır.'],
  ['If an item is beyond repair limits, ______.','replace it with an approved serviceable part',['repair it without data','continue using it','remove the limit from the record'],'Limit dışındaki parça onaylı servis verilebilir parça ile değiştirilir.','Diğer seçenekler uçuşa elverişlilik kurallarına aykırıdır.'],
  ['When inspecting composite structure, ______.','look for cracks, delamination and impact damage',['use a steel brush on the surface','ignore small dents','apply heat without data'],'Kompozit yapıda tipik hasarlar incelenmelidir.','Diğer seçenekler hasar verebilir veya bulguyu kaçırabilir.'],
  ['Before servicing a hydraulic reservoir, ______.','check the correct fluid type in the approved data',['use any available oil','mix different fluids','fill above the maximum line'],'Doğru sıvı tipi bakım verisinden doğrulanır.','Diğer seçenekler sistem hasarı veya taşmaya sebep olabilir.'],
  ['If a task requires independent inspection, ______.','arrange it before the work is closed',['sign for both inspections yourself','ignore the requirement','perform it after dispatch'],'Bağımsız kontrol, bakım kapatılmadan önce tamamlanır.','Diğer seçenekler bağımsızlık ve süreç kuralına uymaz.'],
  ['When measuring a dimension, ______.','use calibrated equipment and record the value if required',['estimate by sight','use a damaged ruler','round values without reading the limit'],'Ölçüm için kalibre alet ve gerekiyorsa kayıt kullanılır.','Diğer seçenekler güvenilir ölçüm sağlamaz.'],
  ['If a warning placard is required, ______.','install it before releasing the aircraft',['keep it in the tool box','install it after the flight','replace it with a verbal warning'],'Placard, kısıtlamanın uçak üzerinde görünür şekilde belirtilmesini sağlar.','Diğer seçenekler operasyonel kontrolü sağlamaz.'],
  ['To avoid damage to a connector, ______.','align it correctly and do not force engagement',['twist the pins by hand','pull the wires','use excessive force'],'Konektör doğru hizalanarak zorlanmadan birleştirilir.','Diğer seçenekler pin ve kablo hasarı yapabilir.'],
  ['When troubleshooting an intermittent fault, ______.','review history and follow the FIM systematically',['replace random components','clear the log without action','ignore crew reports'],'Aralıklı arızada geçmiş kayıt ve sistematik FIM takibi önemlidir.','Diğer seçenekler arızayı çözmeden maliyet yaratır.'],
  ['Before applying torque seal, ______.','make sure the fastener has been torqued correctly',['apply it before tightening','use it to replace safety wire','paint over a loose fastener'],'Torque seal, doğru tork sonrası kontrol işaretidir.','Diğer seçenekler tork doğrulamasını sağlamaz.'],
  ['If a fuel smell is reported, ______.','inspect for leaks using the approved safety procedure',['start an engine run immediately','ignore it if no stain is visible','use an open flame for inspection'],'Yakıt kokusu potansiyel sızıntıdır ve güvenli yöntemle incelenir.','Diğer seçenekler yangın veya arıza riski doğurur.'],
  ['When opening an access panel, ______.','protect adjacent structure from scratches and damage',['place it on an unprotected edge','discard its fasteners','leave it unsecured in the wind'],'Panel ve komşu yapı fiziksel hasardan korunur.','Diğer seçenekler panel veya uçağa hasar verebilir.'],
  ['If you cannot understand a maintenance instruction, ______.','stop and obtain clarification from approved sources',['continue using your best guess','skip the instruction','ask an unqualified person only'],'Belirsiz talimatta onaylı kaynaktan açıklama alınır.','Tahmine dayalı uygulama kabul edilemez.'],
  ['Before closing a task card, ______.','confirm all required steps and inspections are complete',['sign it before work starts','delete any finding','skip the functional test'],'Görev kartı, tüm zorunlu adımlar tamamlanınca kapatılır.','Diğer seçenekler kayıt bütünlüğünü bozar.'],
  ['When working near rotating equipment, ______.','keep clear of moving parts and secure loose clothing',['wear loose gloves near shafts','reach into a running mechanism','place tools on rotating parts'],'Dönen ekipmanda temas ve gevşek kıyafet ciddi risk oluşturur.','Diğer seçenekler yaralanma riski yaratır.'],
  ['If the fluid level is below minimum, ______.','service it using the approved fluid and recheck for leaks',['add any fluid available','ignore the level','fill far above maximum'],'Doğru sıvı ile ikmal yapılır ve sızıntı kontrol edilir.','Diğer seçenekler sistem hasarı veya taşmaya yol açabilir.'],
  ['When using a torque wrench, ______.','set it to the specified value and apply force smoothly',['use it as a hammer','pull beyond the click','ignore the calibration date'],'Doğru değer, kalibrasyon ve kontrollü uygulama gerekir.','Diğer seçenekler yanlış tork veya alet hasarı oluşturur.'],
  ['If a tool is missing after maintenance, ______.','stop the release process and search for the tool',['release the aircraft anyway','assume another team has it','record it later if found'],'Eksik alet FOD riski olduğu için serbest bırakma durdurulur.','Diğer seçenekler FOD riskini kabul edilemez şekilde artırır.']
];

const fillSeeds = [
  ['The inspection was carried out ____ AMM 27-50-00.','in accordance with',['according from','related at','comply to'],'“In accordance with” onaylı veriyle uyumu ifade eden kalıptır.','Seçenek teknik doküman referans kalıbı değildir.'],
  ['The result depends ____ the position of the valve.','on',['of','with','at'],'Depend fiili “on” edatıyla kullanılır.','Bu fiil için seçilen edat doğru eşleşme değildir.'],
  ['The component was removed ____ further inspection.','for',['at','with','by'],'Amaç isimle ifade edildiğinde “for” kullanılır.','Seçilen edat amaç ilişkisini kurmaz.'],
  ['The aircraft may be dispatched ____ MEL conditions.','under',['over','between','from'],'MEL kısıtlamaları için standart ifade “under MEL conditions”tır.','Seçenek MEL şartı altında operasyon anlamını vermez.'],
  ['The technician found a crack ____ the flap fairing.','on',['at','by','from'],'Bir yüzey üzerindeki bulgu için “on” kullanılır.','Seçenek parça yüzeyi üzerindeki konumu doğru belirtmez.'],
  ['Refer ____ the applicable wiring diagram.','to',['at','for','with'],'Refer fiilinin sabit edatı “to”dur.','Refer fiili bu edatla kullanılmaz.'],
  ['The pressure was ____ the minimum limit.','below',['underneath','inside','across'],'Limit değerinden düşük olmak için “below” kullanılır.','Seçenek teknik limit karşılaştırmasını doğru ifade etmez.'],
  ['The tool must be calibrated ____ use.','before',['during','since','until'],'Kalibrasyon kullanımdan önce doğrulanır.','Seçenek zaman sırasını doğru kurmaz.'],
  ['Do not work ____ live electrical terminals.','on',['for','from','between'],'Elektrik terminali üzerinde çalışma “work on” olarak ifade edilir.','Seçilen edat teknik kullanımda doğru değildir.'],
  ['The access panel is secured ____ four fasteners.','with',['by','to','from'],'Bir parçanın hangi elemanla sabitlendiğini “secured with” anlatır.','Seçenek sabitleme aracını doğru belirtmez.'],
  ['The leak was detected ____ the right wing root.','near',['through','under','between'],'Yakın konum için “near” kullanılır.','Seçenek konum ilişkisini doğru vermez.'],
  ['The task was completed ____ the required time.','within',['over','between','across'],'Süre limiti içinde tamamlanma “within” ile ifade edilir.','Seçenek belirtilen süre sınırını anlatmaz.'],
  ['Inspect the cable ____ signs of wear.','for',['to','with','by'],'Bir şeyi belirti açısından incelemek “inspect for” kalıbıdır.','Seçenek aranan bulguyu ifade eden kalıp değildir.'],
  ['The aircraft was released ____ service after the test.','to',['for','with','on'],'Release to service sabit teknik ifadedir.','Seçenek CRS ifadesini doğru tamamlamaz.'],
  ['The warning placard must remain ____ place.','in',['at','on','to'],'“Remain in place” sabit konum ifadesidir.','Seçenek kalıbı bozuyor.'],
  ['The bolts were tightened ____ a cross pattern.','in',['at','by','for'],'Sıra/pattern için “in a cross pattern” denir.','Seçenek uygulama yöntemini doğru vermez.'],
  ['Keep the work area free ____ contamination.','from',['of','with','at'],'Free from = bir şeyden arındırılmış demektir.','Seçenek “free” sıfatı ile doğru kullanılmaz.'],
  ['The unit is capable ____ supplying AC power.','of',['to','for','with'],'Capable of + V-ing yapısı kullanılır.','Seçenek capable sıfatının doğru tamamlayıcısı değildir.'],
  ['The system was tested ____ normal operating conditions.','under',['over','to','from'],'Test koşulları “under conditions” ile ifade edilir.','Seçenek test koşulu ilişkisini doğru kurmaz.'],
  ['The defect was recorded ____ the technical logbook.','in',['on','at','by'],'Bir kayıt defteri içine girildiği için “in” kullanılır.','Seçenek kayıt konumunu doğru belirtmez.'],
  ['The maintenance was performed ____ authorized personnel.','by',['with','from','to'],'Edilgen cümlede işlemi yapanı “by” belirtir.','Seçenek edilgen eylemin failini belirtmez.'],
  ['The fuel line was checked ____ leakage.','for',['from','to','on'],'Check for leakage = sızıntı açısından kontrol etmek.','Seçenek kontrol amacını doğru bağlamaz.'],
  ['The component is installed ____ the avionics bay.','in',['on','at','under'],'Kapalı bölme içinde yerleşim için “in” kullanılır.','Seçenek yerleşim bağlamına uygun değildir.'],
  ['The procedure applies ____ this aircraft configuration.','to',['for','with','by'],'Apply to = ... için geçerli olmak.','Seçenek “apply” fiilinin doğru edatı değildir.'],
  ['The engine was shut down ____ an abnormal indication.','because of',['although','despite','while'],'Neden belirten isim grubu için “because of” kullanılır.','Seçenek neden-sonuç ilişkisini doğru kurmaz.'],
  ['The technician worked ____ the supervisor’s instruction.','under',['on','into','from'],'Under instruction = talimat altında.','Seçenek görev ilişkisini doğru ifade etmez.'],
  ['The panel was removed ____ access to the equipment.','to gain',['for gaining','gained','gain'],'Amaç belirten fiil için “to + fiil” kullanılır.','Seçenek amaç yapısını doğru kurmaz.'],
  ['The hose was replaced ____ it was damaged.','because',['despite','unless','during'],'Sebep bildiren tam cümle için “because” kullanılır.','Seçenek sebep bağlacını doğru kurmaz.'],
  ['The check must be repeated ____ every tire change.','after',['during','since','until'],'Bir işlemden sonraki tekrar için “after” kullanılır.','Seçenek bakım sırasını doğru belirtmez.'],
  ['The line is protected ____ chafing by a clamp.','from',['with','for','at'],'Protect from = ...e karşı korumak.','Seçenek protect fiiliyle doğru kalıp oluşturmaz.']
];

const readingPassages = [
  { text: 'During a daily inspection, a technician found hydraulic fluid below the minimum mark in the green system reservoir. There was no visible leak. The AMM procedure required the technician to identify the approved fluid, replenish the reservoir to the correct level, inspect nearby lines and fittings, and record the quantity added in the logbook.', questions: [
    ['What was below the minimum mark?','The green system reservoir fluid quantity',['The tire pressure','The battery voltage','The engine oil temperature'],'Metinde minimum altında olduğu belirtilen değer green system reservoir sıvı miktarıdır.'],
    ['What had to be identified before servicing?','The approved fluid',['The flight number','The crew schedule','The weather report'],'AMM, doğru/onaylı sıvı tipinin kullanılmasını gerektirir.'],
    ['Why were nearby lines inspected?','To check for a possible leak',['To repaint them','To change their color','To remove labels'],'Düşük seviye varsa görünür sızıntı olmasa bile hatlar ve rakorlar kontrol edilir.'],
    ['What had to be recorded?','The quantity of fluid added',['The technician’s lunch break','The paint code','The aircraft seating plan'],'AMM prosedürü eklenen sıvı miktarının logbook’a kaydını ister.'],
    ['Which document gave the procedure?','The AMM',['The passenger manifest','The weather forecast','The flight ticket'],'Metinde prosedürün AMM’de olduğu açıkça belirtilir.']
  ]},
  { text: 'A flight crew reported an intermittent fault message during climb. The message disappeared after landing. The maintenance team reviewed the technical logbook and found two similar reports in the previous week. Following the FIM, they inspected the related connector and found chafing on two wires. The damaged section was repaired, the system was tested, and no message reappeared.', questions: [
    ['When did the message disappear?','After landing',['Before takeoff','During refuelling','While climbing'],'Metne göre mesaj inişten sonra kayboldu.'],
    ['What helped the team identify a repeated problem?','Previous logbook reports',['The passenger list','A weather chart','A new paint scheme'],'Teknik defterde önceki hafta iki benzer kayıt bulunması tekrar eden sorunu gösterdi.'],
    ['Which manual was followed?','The FIM',['The IPC','The MEL only','The airport map'],'Arıza izolasyonu için FIM takip edildi.'],
    ['What was found on the wires?','Chafing',['Corrosion paint','A fuel nozzle','A loose tire'],'Konektör kontrolünde iki kabloda chafing bulundu.'],
    ['What was the final test result?','The message did not reappear',['The aircraft could not start','A new leak was found','The connector was removed permanently'],'Onarımdan sonra sistem test edildi ve mesaj tekrar görünmedi.']
  ]},
  { text: 'Before an engine run, the supervisor briefed the team. All access panels had to be closed, tools had to be removed from the area, and the fire extinguisher had to be available. One technician was assigned to observe the engine, while another monitored the cockpit indications. The run was stopped immediately when an abnormal vibration was noticed.', questions: [
    ['What had to be removed before the engine run?','Tools from the area',['The fire extinguisher','The cockpit displays','The engine nacelle'],'Motor çalıştırmadan önce aletler alandan kaldırılmalıydı.'],
    ['What had to be available?','A fire extinguisher',['A passenger stair','A tow bar only','A cabin trolley'],'Yangın söndürücünün hazır olması isteniyordu.'],
    ['What did one technician observe?','The engine',['The passenger cabin','The weather radar','The landing gear tire'],'Bir teknisyen motoru gözlemlemekle görevlendirildi.'],
    ['What did the other technician monitor?','Cockpit indications',['Baggage loading','Fuel truck route','Cabin lighting only'],'Diğer teknisyen kokpit göstergelerini izledi.'],
    ['Why was the run stopped?','An abnormal vibration was noticed',['The tool count was complete','The panels were closed','The weather improved'],'Anormal titreşim fark edilince run hemen durduruldu.']
  ]},
  { text: 'A component arrived at the store with a red unserviceable tag. The store employee checked the part number, serial number, and removal reason before placing it in the quarantine area. The component was not mixed with serviceable stock. Later, it was sent to the repair shop together with the required maintenance documentation.', questions: [
    ['What color was the tag?','Red',['Green','Blue','White'],'Komponentin kırmızı unserviceable etiketi vardı.'],
    ['Which information was checked?','Part number, serial number and removal reason',['Passenger names','Flight meal count','Cabin temperature'],'Depo çalışanı bu üç bilgiyi kontrol etti.'],
    ['Where was the component placed?','In the quarantine area',['In serviceable stock','In the cockpit','On the wing'],'Unserviceable komponent karantina alanına yerleştirildi.'],
    ['What was it not mixed with?','Serviceable stock',['Technical logbooks','Fuel samples','Cleaning materials'],'Kullanılabilir stokla karıştırılmadı.'],
    ['Where was it sent later?','To the repair shop',['To the passenger terminal','To the flight crew','To the fuel farm'],'Daha sonra bakım dokümanlarıyla repair shop’a gönderildi.']
  ]},
  { text: 'During a walkaround inspection, a technician noticed a small crack near a flap fairing attachment. He referred to the SRM to determine whether the damage was within permissible limits. The crack was outside the allowable area, so the aircraft could not be released until an approved repair was completed and inspected.', questions: [
    ['Where was the crack found?','Near a flap fairing attachment',['Inside the cockpit','On a tire valve','Near the fuel truck'],'Çatlak flap fairing bağlantısı yakınındaydı.'],
    ['Which document was used?','The SRM',['The passenger briefing','The MEL only','The flight plan'],'Yapısal hasar limitleri için SRM’e başvuruldu.'],
    ['What did the technician want to determine?','Whether the damage was within permissible limits',['The departure time','The cabin temperature','The fuel price'],'SRM ile hasarın izin verilen limit içinde olup olmadığı belirlendi.'],
    ['Was the crack within the allowable area?','No, it was outside it',['Yes, it was acceptable','It was not inspected','The text does not say'],'Metinde çatlağın izin verilen alan dışında olduğu söylenir.'],
    ['What was required before release?','An approved repair and inspection',['A cabin cleaning only','A new flight plan','A passenger announcement'],'Uçak onaylı onarım ve kontrol tamamlanmadan serbest bırakılamazdı.']
  ]},
  { text: 'The maintenance team needed to replace a wheel assembly. They first installed aircraft jacks in accordance with the AMM and fitted the required safety locks. After removing the worn wheel, they installed the new assembly, torqued the axle nut to the specified value, lowered the aircraft, and checked tire pressure. The work card was signed only after the final inspection was satisfactory.', questions: [
    ['What was installed before wheel removal?','Aircraft jacks and safety locks',['A fuel hose','A cabin divider','A new battery'],'Tekerlek sökümünden önce jack ve emniyet kilitleri takıldı.'],
    ['What was removed?','The worn wheel',['The axle nut permanently','The landing gear bay','The tire pressure gauge'],'Aşınmış tekerlek söküldü.'],
    ['What value was applied to the axle nut?','The specified torque value',['A random hand force','No torque','A paint code'],'Aks somunu belirtilen tork değerine sıkıldı.'],
    ['What was checked after lowering the aircraft?','Tire pressure',['Cabin lights','Fuel imbalance','Engine vibration'],'Uçak indirildikten sonra lastik basıncı kontrol edildi.'],
    ['When was the work card signed?','After the final inspection was satisfactory',['Before jacking the aircraft','Before removing the wheel','During the engine run'],'Görev kartı son kontrol tatmin edici olduktan sonra imzalandı.']
  ]}
];

const grammarQuestions = grammarSeeds.map((s, index) => question(index + 1, 'Yapı', s[0], s[1], s[2], s[3], s[4], { tip: s[5] }));
const translationQuestions = translations.map((s, index) => {
  const distractors = translations.filter((_, i) => i !== index).slice(index % 20, index % 20 + 3).map(x => x[1]);
  return question(index + 31, 'Çeviri', s[0], s[1], distractors, 'Doğru çeviri; özne, işlem ve teknik terimleri eksiksiz aktarır.', 'Seçilen çeviri, cümlenin işlem sırasını veya teknik anlamını değiştirmektedir.', { tip: 'Önce ana fiili, sonra teknik nesneyi ve zaman/edilgen yapıyı bul.' });
});
const vocabularyQuestions = words.slice(0, 30).map((w, index) => {
  const distractors = words.filter((_, i) => i !== index).slice((index * 3 + 9) % 70, (index * 3 + 9) % 70 + 3).map(x => x[1]);
  return question(index + 61, 'Kelime', `“${w[0]}” kelimesinin en uygun Türkçe karşılığı hangisidir?`, w[1], distractors, `“${w[0]}” teknik bağlamda “${w[1]}” anlamına gelir.`, 'Seçilen anlam kelimenin teknik kullanımını karşılamaz.', { tip: w[2] });
});
const completionQuestions = completionSeeds.map((s, index) => question(index + 91, 'Cümle tamamlama', s[0], s[1], s[2], s[3], s[4], { tip: 'Önce prosedürün emniyet amacını belirle; ardından cümleyi tamamla.' }));
const fillQuestions = fillSeeds.map((s, index) => question(index + 121, 'Boşluk doldurma', s[0], s[1], s[2], s[3], s[4], { tip: 'Teknik İngilizcede fiil + edat kalıplarını birlikte ezberle.' }));
const readingQuestions = readingPassages.flatMap((passage, passageIndex) => passage.questions.map((q, questionIndex) => question(151 + passageIndex * 5 + questionIndex, 'Okuma', q[0], q[1], q[2], q[3], 'Seçilen seçenek metinde verilen bilgiyle uyuşmuyor veya metinde yer almıyor.', { passage: passage.text, tip: 'Önce sorudaki anahtar kelimeyi bul, sonra metindeki ilgili cümleyi doğrula.' })));

export const questions = [...grammarQuestions, ...translationQuestions, ...vocabularyQuestions, ...completionQuestions, ...fillQuestions, ...readingQuestions];
