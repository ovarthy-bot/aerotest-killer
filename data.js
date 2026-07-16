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
  ['airworthiness','uçuşa elverişlilik'],['applicable','uygulanabilir / ilgili'],['chafing','sürtünme kaynaklı aşınma'],['clearance','boşluk / açıklık'],['comply','uygun hareket etmek'],['coupling','bağlantı elemanı'],['defer','ertelemek'],['discrepancy','uygunsuzluk / bulgu'],['dispatch','sefere vermek'],['drain','tahliye etmek'],['fastener','bağlantı elemanı'],['fitting','rakor / bağlantı parçası'],['leakage','sızıntı'],['mandatory','zorunlu'],['overhaul','revizyon'],['proximity','yakınlık'],['replenish','ikmal etmek'],['serviceable','kullanılabilir durumda'],['shear','kesme / koparma'],['troubleshooting','arıza giderme']
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
  {id:20,type:'Çeviri',q:'“Sol motor yağ seviyesi minimum altındaydı. Yağ eklendi ve sistem kontrol edildi.”',o:['LH engine oil was minimum. We look at system.','Left engine oil level was below minimum. Oil added and system checked.','Oil level under minimum on engine left. System checking.','Left engine has low oil and add oil.','Engine oil was reduced; system will check.'],a:1,n:'Teknik kayıtta kısa passive ifadeler uygundur: Oil added; system checked.'}
];
