export const lessons = [
  {
    id: 'basics', code: 'B1', icon: '✈️', title: 'Temel Havacılık İngilizcesi', subtitle: 'Fonetik alfabe, sayılar ve bakım iletişimi',
    sections: [
      { title: 'ICAO Fonetik Alfabe', body: 'Gürültülü ortamlarda harflerin karışmasını önler. A–M: Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike. N–Z: November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.', example: 'AB123CD → Alpha Bravo One Two Three Charlie Delta' },
      { title: 'Bakımda temel fiiller', body: 'install: monte etmek · remove: sökmek · replace: değiştirmek · inspect: kontrol etmek · report: raporlamak · torque: belirtilen torka sıkmak', example: 'Torque the bolts as per AMM instructions.' },
      { title: 'Bulgu bildirme', body: 'Bildiriminiz ne bulunduğunu, konumu ve durumu açıkça söylemelidir. Belirsiz “it looks bad” gibi ifadelerden kaçının.', example: 'Hydraulic fluid leak observed near the nose gear actuator.' }
    ]
  },
  {
    id: 'grammar', code: 'B2', icon: '📘', title: 'Sistem ve Gramer', subtitle: 'Zamanlar, passive voice ve teknik cümle yapıları',
    sections: [
      { title: 'Bakım kayıtlarında zaman', body: 'Tamamlanan işler çoğunlukla Past Simple ile yazılır. Rutin işlemler Present Simple, devam eden işler Present Continuous ile anlatılır.', example: 'The technician inspected the landing gear. / We are replacing the actuator.' },
      { title: 'Passive Voice', body: 'Teknik talimat ve kayıtlarda işlemin kendisi önemliyse be + V3 kullanılır.', example: 'The filter must be replaced. The system was tested.' },
      { title: 'Koşul cümleleri', body: 'Talimatlarda if ile şart belirtilir. Genel prosedürlerde Present Simple, olası sonuçlarda will/may kullanılır.', example: 'If the pressure is below the limit, replace the pump.' }
    ]
  },
  {
    id: 'documentation', code: 'B3', icon: '🛠️', title: 'Bakım Dokümantasyonu', subtitle: 'AMM, IPC, FIM ve teknik kayıt dili',
    sections: [
      { title: 'Dokümanlar', body: 'AMM onaylı bakım görevlerini; IPC parça numaraları ve patlatılmış görünümleri; FIM/TSM arıza izolasyonunu; WDM elektrik şemalarını içerir.', example: 'Perform the operational test IAW AMM 29-20-00.' },
      { title: 'Talimat fiilleri', body: 'remove, install, inspect, adjust, clean, apply, make sure, obey ve refer to ifadeleri görev adımlarında sık görülür.', example: 'Make sure that the circuit breakers are open.' },
      { title: 'İyi bakım kaydı', body: 'Bulgu + konum + yapılan işlem + referans + test sonucu sırasını kullanın.', example: 'Leak observed at RH fuel manifold. Seal replaced IAW AMM 28-20-00. Leak test satisfactory.' }
    ]
  },
  {
    id: 'regulatory', code: 'B4', icon: '🛡️', title: 'Mevzuat ve Emniyet', subtitle: 'Regulatory language, human factors ve raporlama',
    sections: [
      { title: 'Yaygın kısaltmalar', body: 'CRS: Certificate of Release to Service · MOE: Maintenance Organisation Exposition · AD: Airworthiness Directive · SB: Service Bulletin · MEL: Minimum Equipment List', example: 'Defect deferred under MEL 23-50-00.' },
      { title: 'Standart raporlama dili', body: 'Kısa, nesnel ve izlenebilir cümleler kurun. completed, complied, deferred, serviceable ve no defects noted ifadeleri yaygındır.', example: 'AD 2024-0025 complied with. No defects found.' }
    ]
  }
];

export const patterns = [
  { cue: 'subject ___ TO', meaning: '…e maruz kalmak / tabi olmak', example: 'Components subject to wear must be inspected.', tip: 'subject kelimesinden sonra çoğunlukla “to” gelir.' },
  { cue: 'in accordance ___', meaning: '…e uygun olarak', example: 'Perform the task in accordance with the AMM.', tip: 'Kalıp “in accordance with” şeklindedir.' },
  { cue: 'make sure ___', meaning: '…olduğundan emin olmak', example: 'Make sure that the area is clean.', tip: 'Devamında “that + cümle” veya isim grubu gelebilir.' },
  { cue: 'prevent ___ -ing', meaning: '…in yapılmasını önlemek', example: 'The lock prevents the valve from opening.', tip: 'prevent + nesne + from + V-ing' },
  { cue: 'refer ___', meaning: '…e başvurmak', example: 'Refer to the applicable wiring diagram.', tip: 'refer fiilinden sonra “to” kullanılır.' },
  { cue: 'capable ___', meaning: '…yapabilecek kapasitede', example: 'The unit is capable of supplying AC power.', tip: 'capable of + V-ing' }
];

export const words = [
  ['airworthiness','uçuşa elverişlilik','Airworthiness must be maintained throughout the aircraft life.','Mevzuat'],
  ['applicable','uygulanabilir / ilgili','Use the applicable maintenance procedure.','Dokümantasyon'],
  ['chafing','sürtünme kaynaklı aşınma','Inspect the wiring for chafing.','Elektrik'],
  ['clearance','boşluk / açıklık','Measure the clearance between the two parts.','Standart Uygulamalar'],
  ['comply','uygun hareket etmek','Comply with all safety precautions.','Mevzuat'],
  ['coupling','bağlantı elemanı','The leak was found at the line coupling.','Hidrolik'],
  ['defer','ertelemek','The defect may be deferred in accordance with the MEL.','MEL'],
  ['discrepancy','uygunsuzluk / bulgu','Record each discrepancy in the technical log.','Raporlama'],
  ['dispatch','sefere vermek','The aircraft may be dispatched under MEL conditions.','Operasyon'],
  ['drain','tahliye etmek','Drain the remaining fuel from the tank.','Yakıt'],
  ['fastener','bağlantı elemanı','Replace each damaged fastener.','Yapısal'],
  ['fitting','rakor / bağlantı parçası','Tighten the hydraulic fitting to the specified torque.','Hidrolik'],
  ['leakage','sızıntı','No further leakage was observed.','Raporlama'],
  ['mandatory','zorunlu','Compliance with the airworthiness directive is mandatory.','Mevzuat'],
  ['overhaul','revizyon / büyük bakım','Send the component to the shop for overhaul.','Komponent'],
  ['proximity','yakınlık','The proximity sensor detects the target position.','Elektrik'],
  ['replenish','ikmal etmek','Replenish the reservoir to the correct level.','Servis'],
  ['serviceable','kullanılabilir durumda','Install a serviceable replacement unit.','Raporlama'],
  ['shear','kesme / koparma','The pin is designed to shear under excessive load.','Yapısal'],
  ['troubleshooting','arıza giderme','Continue with the applicable troubleshooting procedure.','FIM/TSM'],
  ['velocity','sürat / hız','The velocity was within the specified limits.','Aerodinamik'],
  ['bonding','elektriksel irtibatlama','Check the bonding resistance.','Elektrik'],
  ['contamination','kirlenme / yabancı madde bulaşması','Protect the system from contamination.','Temizlik'],
  ['deterioration','bozulma / kötüleşme','Inspect the seal for deterioration.','Kontrol'],
  ['elongation','uzama','Measure the bolt for excessive elongation.','Yapısal'],
  ['flush','aynı hizada / yüzeyle sıfır','Make sure the fastener head is flush with the surface.','Yapısal'],
  ['frayed','lifleri ayrılmış / saçaklanmış','Replace the frayed control cable.','Kumanda'],
  ['gasket','conta','Install a new gasket before assembly.','Motor'],
  ['hazardous','tehlikeli','Keep hazardous materials in approved containers.','Emniyet'],
  ['impair','olumsuz etkilemek / bozmak','Damage can impair system operation.','Teknik Dil'],
  ['inadvertent','istenmeden gerçekleşen','Prevent inadvertent operation of the system.','Emniyet'],
  ['intermittent','aralıklı / kesintili','The crew reported an intermittent fault.','FIM/TSM'],
  ['latch','mandal / kilit','Make sure the access panel latch is secure.','Gövde'],
  ['loosen','gevşetmek','Loosen the nut before adjustment.','Standart Uygulamalar'],
  ['misalignment','hizasızlık','Excessive vibration may indicate misalignment.','Mekanik'],
  ['obstruction','engel / tıkanıklık','Check the duct for obstruction.','Pnömatik'],
  ['permissible','izin verilen','The damage is within permissible limits.','SRM'],
  ['prevent','önlemek','Install the lockpin to prevent movement.','Emniyet'],
  ['residual','artık / kalan','Release residual pressure before removal.','Hidrolik'],
  ['restore','eski durumuna getirmek','Restore the aircraft to its normal configuration.','AMM'],
  ['seizure','sıkışma / kilitlenme','Lubrication prevents bearing seizure.','Mekanik'],
  ['specified','belirtilen','Apply the specified torque value.','AMM'],
  ['subsequent','sonraki / takip eden','Monitor the system during subsequent flights.','Teknik Dil'],
  ['tighten','sıkmak','Tighten the bolts in the correct sequence.','Standart Uygulamalar'],
  ['unserviceable','kullanılamaz durumda','Tag the removed component as unserviceable.','Lojistik'],
  ['wear','aşınma','Inspect the bearing for wear.','Kontrol'],
  ['withstand','dayanmak','The structure must withstand the applied load.','Yapısal'],
  ['adequate','yeterli / uygun','Use adequate lighting during the inspection.','İnsan Faktörleri'],
  ['adjacent','bitişik / komşu','Inspect the adjacent structure for damage.','Yapısal'],
  ['accomplish','yerine getirmek / tamamlamak','Accomplish the task before the next flight.','AMM']
];

export const questions = [
  {id:1,type:'Kelime',q:'When the filter element is fitted, ______ opens the inner valve.',o:['a spigot','a seal','a mounting','a cap','a gasket'],a:0,n:'Spigot, filtre elemanı takıldığında iç valfi mekanik olarak açan çıkıntılı parçadır.'},
  {id:2,type:'Kelime',q:'Heavy cables from the output side of the battery relay ______ the electrical power to the starter relay.',o:['mount','supply','measure','contain','suppress'],a:1,n:'Supply, bir sisteme güç/akış sağlamak anlamına gelir.'},
  {id:3,type:'Yapı',q:'A damaged spar may be spliced at almost any point except at wing attachment fittings, landing gear fittings or engine mount fittings, unless ______.',o:['which point of fitting is the most appropriate','it is necessary to replace the whole spar','thereafter the fitting points have been determined','otherwise specified by the aircraft manufacturer','the most damaged spar is spliced first'],a:3,n:'Unless otherwise specified: aksi belirtilmedikçe.'},
  {id:4,type:'Kelime',q:'If the test gives a different maintenance message, you can find the ______ troubleshooting procedure in the applicable Page Block 101.',o:['revoked','resigned','refresh','related','refused'],a:3,n:'Related troubleshooting procedure: ilgili arıza giderme prosedürü.'},
  {id:5,type:'Yapı',q:'Multiple engines for aircraft ______ ranges are separated ______ a single space.',o:['functionality / for','entity / of','effectivity / by','productivity / that','capability / with'],a:2,n:'Effectivity ranges are separated by a single space.'},
  {id:6,type:'Çeviri',q:'All items which are related to the airworthiness of the airplane and not included on the list are automatically required to be operative.',o:['Uçağın uçuşa elverişliliği ile ilgili listede yer almayan tüm parçalar otomatik olarak çalışabilir olacaktır.','Uçağın uçuşa elverişliliği ile ilgili olan ve listede yer almayan tüm parçaların otomatik olarak çalışabilir olması gerekmektedir.','Bu listede yer almayan ve otomatik olarak çalışabilir olması gereken tüm parçalar uçağın uçuşa elverişliliği ile ilgilidir.','Uçağın uçuşa elverişliliği ile ilgili tüm parçaların otomatik olarak çalışabilir olması gerekmektedir.','Tüm parçalar uçağın uçuşa elverişliliği ile ilgilidir ve otomatik olarak listeye yer almamaktadır.'],a:1,n:'“related … and not included” iki sıfat cümleciği; “required to be operative” çalışır olması gerekmektedir.'},
  {id:7,type:'Çeviri',q:'This revision includes all pages of the service bulletin.',o:['Revizyon tüm sayfalarda yer alır.','Tüm sayfalar servis bülteninin revizyonlarını içerir.','Bu revizyon, servis bülteninin tüm sayfalarını içerir.','Tüm sayfalar bu servis bülteninden etkilenmektedir.','Bu revizyon, tüm sayfalardaki servis bültenlerini içerir.'],a:2,n:'includes = içerir; all pages of the service bulletin = servis bülteninin tüm sayfaları.'},
  {id:8,type:'Yapı',q:'If one system ______ normally, the airplane may be ______.',o:['have operated / dispatching','has operated / dispatches','operates / dispatched','operating / dispatching','operate / dispatched'],a:2,n:'If + Present Simple; may + be + V3 yapısı kullanılır.'},
  {id:9,type:'Yapı',q:'______ to indicate that the cartridge should be replaced.',o:['The indicator clip will be shear off','The indicator clip is shearing off','The indicator clip will shear off','The indicator clip will shearing off','The indicator clip will shorn off'],a:2,n:'Will’den sonra fiilin yalın hâli gelir: will shear off.'},
  {id:10,type:'Yapı',q:'The pressure switch ______ in the high pressure position.',o:['has fail','has failed','have fail','have failed','failed'],a:1,n:'Tekil özne + has + V3: has failed.'},
  {id:11,type:'Yapı',q:'Use normal procedures ______ the temperature selections.',o:['operated','to operate','operating','to be operated','operate'],a:1,n:'Amaç bildiren to-infinitive: to operate.'},
  {id:12,type:'Yapı',q:'The proximity switch electronics unit has ______ a fault from the hydraulic system B quantity/transmitter.',o:['detecting','detected','detects','been detected','detect'],a:1,n:'Present Perfect: has + past participle → has detected.'},
  {id:13,type:'Yapı',q:'Airplane is not ______ in known or forecast icing conditions.',o:['parked','released','moved','worked','operated'],a:4,n:'Be operated in conditions: belirtilen koşullarda işletilmek.'},
  {id:14,type:'Yapı',q:'______ all the fuel from the fuel system completely is not possible.',o:['Drainage','Drained','Draining','Drain of','Drain'],a:2,n:'Cümlede özne görevindeki fiil gerund (-ing) alır.'},
  {id:15,type:'Kelime',q:'A fourth hinge at the forward end of each door ______ to a common tie link between each door.',o:['moves','locks','separates','closes','connects'],a:4,n:'Connects to: …e bağlanır.'},
  {id:16,type:'Yapı',q:'If loading ______ four times, replace data loader otherwise return aircraft to service.',o:['failed','was failing','fails','failing','had failed'],a:2,n:'Prosedür koşulunda If + Present Simple kullanılır.'},
  {id:17,type:'Kelime',q:'Which document contains exploded diagrams and part numbers?',o:['SRM','MEL','IPC','WDM','FIM'],a:2,n:'IPC, parçaların patlatılmış görünümünü ve parça numaralarını içerir.'},
  {id:18,type:'Kelime',q:'What does IAW mean in maintenance documentation?',o:['Inspection After Work','In Accordance With','Initial Aircraft Warning','Install As Written','Inspection and Wiring'],a:1,n:'IAW = In Accordance With.'},
  {id:19,type:'Yapı',q:'The technician ______ the hydraulic actuator and replaced it with a serviceable unit.',o:['inspect','inspecting','inspected','has inspect','was inspect'],a:2,n:'Tamamlanmış bakım kaydı Past Simple ile yazılır.'},
  {id:20,type:'Çeviri',q:'“Sol motor yağ seviyesi minimum altındaydı. Yağ eklendi ve sistem kontrol edildi.”',o:['LH engine oil was minimum. We look at system.','Left engine oil level was below minimum. Oil added and system checked.','Oil level under minimum on engine left. System checking.','Left engine has low oil and add oil.','Engine oil was reduced; system will check.'],a:1,n:'Teknik kayıtta kısa passive ifadeler uygundur: Oil added; system checked.'},
  {id:21,type:'Yapı',q:'The operational test must be performed ______ the installation is complete.',o:['after','during','until','although','because of'],a:0,n:'İşlem sırası için after + cümle kullanılır.'},
  {id:22,type:'Kelime',q:'“Adjacent structure” ifadesinin en uygun karşılığı hangisidir?',o:['Hasarlı yapı','Bitişik yapı','Ana yapı','Hareketli yapı','Takviyeli yapı'],a:1,n:'Adjacent, bitişik veya komşu anlamındadır.'},
  {id:23,type:'Çeviri',q:'Make sure that all circuit breakers are open before you disconnect the connector.',o:['Konektörü ayırdıktan sonra devre kesicileri açın.','Konektörü ayırmadan önce tüm devre kesicilerin açık olduğundan emin olun.','Tüm devre kesicileri kapatıp konektörü bağlayın.','Konektör açıkken devre kesicileri kontrol edin.','Devre kesicileri ayırmadan önce konektörü açın.'],a:1,n:'before = önce; make sure that = olduğundan emin olun.'},
  {id:24,type:'Yapı',q:'The bolts ______ to 45 Nm during the previous inspection.',o:['torque','were torqued','are torque','have torque','torquing'],a:1,n:'Geçmişte tamamlanan edilgen işlem: were + V3.'},
  {id:25,type:'Kelime',q:'Which word means “istenmeden gerçekleşen”?',o:['subsequent','inadvertent','adequate','residual','mandatory'],a:1,n:'Inadvertent = istenmeden veya kazara gerçekleşen.'},
  {id:26,type:'Yapı',q:'If the seal is damaged, ______ it with a new one.',o:['replace','replaced','replacing','to replace','has replaced'],a:0,n:'Talimat cümlesinde fiilin yalın hâli kullanılır.'},
  {id:27,type:'Çeviri',q:'No defects were found during the detailed visual inspection.',o:['Detaylı görsel kontrol sırasında herhangi bir kusur bulunmadı.','Görsel kontrol yapılmadan kusur bulundu.','Kusurlar detaylı kontrolden sonra giderildi.','Detaylı kontrol ertelendi.','Görsel kontrolde birkaç kusur bulundu.'],a:0,n:'No defects were found = herhangi bir kusur bulunmadı.'},
  {id:28,type:'Kelime',q:'A fault that appears and disappears irregularly is described as ______.',o:['mandatory','intermittent','adjacent','serviceable','flush'],a:1,n:'Intermittent fault = aralıklı/kesintili arıza.'},
  {id:29,type:'Yapı',q:'The component has been removed ______ further inspection.',o:['for','at','with','by','from'],a:0,n:'Amaç isimle ifade edildiğinde for kullanılır: for further inspection.'},
  {id:30,type:'Çeviri',q:'Release residual pressure before you loosen the fitting.',o:['Rakoru sıktıktan sonra basıncı artırın.','Rakoru gevşetmeden önce artık basıncı boşaltın.','Basınç varken rakoru sökün.','Rakoru boşalttıktan sonra basıncı kontrol edin.','Artık basınç rakoru gevşetir.'],a:1,n:'Residual pressure = artık basınç; loosen = gevşetmek.'},
  {id:31,type:'Kelime',q:'Which term means “kullanılamaz durumda”?',o:['serviceable','applicable','unserviceable','permissible','operative'],a:2,n:'Unserviceable, servise uygun olmayan komponenti belirtir.'},
  {id:32,type:'Yapı',q:'Do not operate the system ______ the warning tag is installed.',o:['while','because of','despite','unless of','after that'],a:0,n:'While, bir durum devam ederken anlamını verir.'},
  {id:33,type:'Çeviri',q:'The damage is within the limits specified in the SRM.',o:['Hasar SRM’de belirtilen limitlerin dışındadır.','Hasar SRM’de belirtilen limitler içindedir.','SRM hasarın onarılmasını yasaklar.','Hasar limitleri henüz belirlenmemiştir.','SRM yalnızca hasarın yerini gösterir.'],a:1,n:'Within the limits = limitler içinde.'},
  {id:34,type:'Kelime',q:'“Chafing” most commonly refers to damage caused by ______.',o:['freezing','chemical reaction','rubbing or friction','high pressure only','incorrect painting'],a:2,n:'Chafing, sürtünme sonucu oluşan aşınmadır.'},
  {id:35,type:'Yapı',q:'The technician continued the test ______ the fault message appeared.',o:['until','because of','despite of','during','for'],a:0,n:'Until, bir olay gerçekleşene kadar devam eden eylemi anlatır.'},
  {id:36,type:'Çeviri',q:'Accomplish the inspection at intervals not exceeding 500 flight hours.',o:['Kontrolü tam olarak 500 saat sonra yapın.','Kontrolü 500 uçuş saatini aşmayan aralıklarla gerçekleştirin.','Her uçuşta 500 saatlik kontrol yapın.','Kontrol aralığını 500 saat uzatın.','500 saati geçen kontrolleri iptal edin.'],a:1,n:'Not exceeding = aşmayan; at intervals = aralıklarla.'},
  {id:37,type:'Kelime',q:'What does “replenish the reservoir” mean?',o:['Rezervuarı sökmek','Rezervuarı boşaltmak','Rezervuara ikmal yapmak','Rezervuarı basınçlandırmak','Rezervuarı değiştirmek'],a:2,n:'Replenish, eksilen sıvıyı uygun seviyeye tamamlamaktır.'},
  {id:38,type:'Yapı',q:'The access panel cannot be installed until the leak test ______.',o:['completes','is completed','has completing','will complete','complete'],a:1,n:'Test edilgen olduğundan is completed kullanılır.'},
  {id:39,type:'Çeviri',q:'Use adequate lighting to ensure that the work area is well illuminated.',o:['Çalışma alanını sınırlamak için düşük ışık kullanın.','Çalışma alanının iyi aydınlatıldığından emin olmak için yeterli ışık kullanın.','Yalnızca gündüz bakım yapın.','Işığı kontrol etmeden işe başlayın.','Aydınlatmayı yalnızca iş bittikten sonra kullanın.'],a:1,n:'Adequate lighting = yeterli aydınlatma; ensure = emin olmak/sağlamak.'},
  {id:40,type:'Kelime',q:'A component that can be safely installed and used is ______.',o:['deferred','serviceable','residual','frayed','hazardous'],a:1,n:'Serviceable = kullanılabilir ve servise uygun durumda.'},
  {id:41,type:'Yapı',q:'The result depends ______ the position of the ground control valve.',o:['on','of','with','over','at'],a:0,n:'Depend fiili her zaman on edatıyla kullanılır.'},
  {id:42,type:'Çeviri',q:'Restore the aircraft to its normal configuration after completion of the task.',o:['Görevden önce uçak konfigürasyonunu değiştirin.','Görev tamamlandıktan sonra uçağı normal konfigürasyonuna getirin.','Normal konfigürasyonda görevi iptal edin.','Uçağı bakım konfigürasyonunda bırakın.','Görev sırasında normal konfigürasyonu kontrol edin.'],a:1,n:'Restore = eski/normal durumuna getirmek.'},
  {id:43,type:'Kelime',q:'“Misalignment” indicates that components are ______.',o:['correctly lubricated','not correctly aligned','fully serviceable','electrically bonded','properly torqued'],a:1,n:'Misalignment = hizasızlık.'},
  {id:44,type:'Yapı',q:'Safety devices are installed to prevent the landing gear ______ accidentally.',o:['move','from moving','to moved','moved','has moved'],a:1,n:'Prevent + nesne + from + V-ing kalıbı kullanılır.'},
  {id:45,type:'Çeviri',q:'Tag the removed unit as unserviceable and send it to the repair shop.',o:['Sökülen üniteyi kullanılabilir olarak işaretleyin.','Sökülen üniteyi kullanılamaz olarak etiketleyip tamir atölyesine gönderin.','Üniteyi onarmadan yeniden takın.','Atölyedeki üniteyi uçağa gönderin.','Sökülen etiketi üniteye takın.'],a:1,n:'Tag as unserviceable = kullanılamaz olarak etiketlemek.'},
  {id:46,type:'Kelime',q:'Which word means “dayanmak” in a structural load context?',o:['withstand','restore','replenish','defer','dispatch'],a:0,n:'Withstand a load = bir yüke dayanmak.'},
  {id:47,type:'Yapı',q:'The inspection was carried out ______ AMM 27-50-00.',o:['in accordance with','according from','related at','comply to','depending of'],a:0,n:'Standart kalıp: in accordance with.'},
  {id:48,type:'Çeviri',q:'The worn bearing was replaced and the system was function-tested satisfactorily.',o:['Aşınmış rulman kontrol edildi ancak sistem çalışmadı.','Aşınmış rulman değiştirildi ve sistem fonksiyon testi başarılı şekilde yapıldı.','Rulman aşınması kabul edilebilir bulundu.','Sistem testi rulman değişiminden önce iptal edildi.','Rulman ve sistem kullanılamaz olarak etiketlendi.'],a:1,n:'Satisfactorily, test sonucunun başarılı/kabul edilebilir olduğunu belirtir.'},
  {id:49,type:'Kelime',q:'An unwanted material in a hydraulic system is called ______.',o:['clearance','contamination','elongation','velocity','bonding'],a:1,n:'Contamination = sisteme yabancı madde bulaşması/kirlenme.'},
  {id:50,type:'Yapı',q:'The engineer has ______ reviewed the revised task card.',o:['already','yesterday','ago','last','while'],a:0,n:'Present Perfect ile already kullanılabilir; yesterday/ago/last Past Simple gerektirir.'}
];
