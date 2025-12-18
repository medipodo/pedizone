// Mock Data for Medipodo Podology Center

import { enrichedBlogPosts } from './blog_content';

export const siteInfo = {
  name: 'Medipodo',
  fullName: 'Medipodo Medikal Sağlık Hizmetleri',
  tagline: 'Ayak Sağlığı (Podoloji) Merkezi',
  phone: '0545 656 97 47',
  phoneLink: '05456569747',
  whatsapp: '905456569747',
  address: 'Bağlıca Mah. Mert Cad. 4/2 Etimesgut, Ankara',
  email: 'info@medipodo.com',
  mapCoordinates: { lat: 39.897085007400506, lng: 32.64813457116447 },
  workingHours: 'Pazartesi - Cumartesi: 09:00 - 19:00',
  logo: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/b9h35axs_Adsız%20tasarım%20%281%29.png'
};

export const services = [
  {
    id: 'batik-tirnak',
    title: 'Batık Tırnak',
    shortDesc: 'Ağrısız, sancısız ortoniksi uygulamaları',
    fullDesc: 'Batık tırnak, tırnağın kenarlarının cilde batması sonucu oluşan ağrılı bir durumdur. Profesyonel podoloji yaklaşımımızla, ağrısız ve kalıcı çözümler sunuyoruz. Modern teknikler ve steril koşullarda gerçekleştirdiğimiz tedavilerimiz ile enfeksiyon riskini minimize ederken, hızlı iyileşme sağlıyoruz.',
    icon: 'Scissors',
    image: '/images/services/Batik-Tirnak-tedavisi.jpg',
    benefits: [
      'Ağrısız tedavi yöntemleri',
      'Kalıcı çözümler',
      'Enfeksiyon riski minimizasyonu',
      'Profesyonel hijyen standartları'
    ],
    process: [
      'Detaylı muayene ve analiz',
      'Steril aletlerle işlem',
      'Ağrı kontrolü ve rahatlama',
      'Takip ve bakım önerileri'
    ],
    detailedContent: {
      causes: {
        title: 'Batık Tırnak Neden Olur?',
        description: 'Batık tırnağın en sık nedenleri şunlardır:',
        riskFactors: [
          'Yanlış tırnak kesimi: Tırnakların çok dipten veya kenarlardan yuvarlanarak kesilmesi',
          'Dar ve sıkı ayakkabılar: Parmaklara sürekli baskı yaparak tırnağın deriye gömülmesine yol açar',
          'Tırnak yapısının kıvrık olması: Doğuştan gelen kavisli tırnak yapısı batığa daha yatkındır',
          'Travmalar: Parmak sıkışması, spor esnasında alınan darbeler veya sürekli basınç',
          'Aşırı terleme: Nemli kalan ayak derisinin yumuşaması, tırnağın kolayca batmasına neden olabilir',
          'Yanlış pedikür uygulamaları: Steril olmayan ortamlar veya hatalı tırnak kısaltma işlemleri'
        ],
        note: 'Bu faktörlerden biri bile varsa, batık tırnak gelişme riski artar.'
      },
      symptoms: {
        title: 'Batık Tırnak Belirtileri',
        description: 'Batık tırnağın ilk işaretleri küçük bir rahatsızlık gibi görünse de ihmal edildiğinde hızla ilerleyebilir.',
        signs: [
          'Tırnak kenarında ağrı ve hassasiyet',
          'Parmak etrafında kızarıklık, şişlik, ısı artışı',
          'Ayakkabı giyerken artan rahatsızlık',
          'Cilt dokusunda sertleşme veya et büyümesi',
          'İleri dönemde akıntı ve enfeksiyon bulguları',
          'Yürüyüş sırasında sancı'
        ],
        note: 'Bu şikayetlerden biri bile varsa profesyonel müdahale gerekir.'
      },
      treatment: {
        title: 'Medipodo\'da Batık Tırnak Tedavisi Nasıl Yapılır?',
        intro: 'Başarılı bir batık tırnak tedavisinin temelinde doğru teknik, steril çalışma ve kişiye özel yaklaşım vardır. Medipodo\'da uyguladığımız yöntem:',
        steps: [
          {
            number: 1,
            title: 'Podolojik Muayene',
            description: 'Tırnağın batık derecesi, enfeksiyon durumu, tırnak yapısı ve deri dokusu detaylı olarak değerlendirilir.'
          },
          {
            number: 2,
            title: 'Steril Temizleme ve Basınç Azaltma',
            description: 'Batığın tırnağa yaptığı baskı podolojik ekipmanlarla azaltılır. Derideki ölü dokular temizlenir ve tırnak kenarı kontrollü şekilde rahatlatılır.'
          },
          {
            number: 3,
            title: 'Profesyonel Tırnak Şekillendirme',
            description: 'Tırnağın doğal yapısına zarar vermeden, batık köşe yeniden şekillendirilir. Bu işlem sayesinde tırnağın deriye doğru büyümesi engellenir.'
          },
          {
            number: 4,
            title: 'Gerekirse Ortoniks / Tırnak Teli',
            description: 'Tekrarlayan batıklarda, tırnağın yönünü düzeltmek için tırnak teli uygulaması yapılabilir. Bu yöntem acısızdır ve tırnağı doğru yönde büyümeye yönlendirir.'
          },
          {
            number: 5,
            title: 'Enfeksiyonlu Durumlarda Özel Bakım',
            description: 'İltihap, şişlik veya akıntı varsa tırnak çevresi özel antiseptiklerle temizlenir; hastaya uygun bakım önerilir.'
          },
          {
            number: 6,
            title: 'Tedavi Sonrası Eğitim',
            description: 'Hastaya doğru tırnak kesimi, ayakkabı seçimi ve evde yapılması gereken bakım adımları anlatılır. Bu sayede batığın tekrarlaması önlenir.'
          }
        ]
      },
      risks: {
        title: 'Batık Tırnak Tedavi Edilmezse Ne Olur?',
        intro: 'Tedavi edilmeyen batık tırnak zamanla:',
        consequences: [
          'Kronik ağrıya',
          'İleri enfeksiyona',
          'Tırnak şekil bozukluklarına',
          'Yürüyüş bozukluklarına',
          'Deride et büyümesine',
          'Bazı hastalarda ciddi komplikasyonlara (özellikle diyabetliler)'
        ],
        note: 'Bu nedenle erken müdahale çok önemlidir.'
      },
      prevention: {
        title: 'Batık Tırnak Nasıl Önlenir?',
        tips: [
          'Tırnakları düz ve çok kısa olmayacak şekilde kesin',
          'Dar ve burun kısmı sıkıştıran ayakkabılardan kaçının',
          'Ayakları her gün yıkayıp kurulayın',
          'Terlemeye yatkın ayaklarda çorap değişimini sıklaştırın',
          'Hijyenik olmayan pedikür işlemlerinden uzak durun',
          'Tırnak yapısı kıvrık olan kişiler düzenli podolojik kontrol yaptırmalı'
        ]
      },
      whyMedipodo: {
        title: 'Neden Medipodo?',
        reasons: [
          'Profesyonel podolog ekibi',
          'Tam steril ortam',
          'Ağrısız batık tırnak tedavisi',
          'Gerekirse tırnak teli uygulaması',
          'Kişiye özel bakım planı',
          'Tekrarı önlemeye yönelik danışmanlık',
          'Ankara / Bağlıca\'da kolay ulaşım'
        ],
        note: 'Medipodo olarak amacımız geçici değil, kalıcı ve konforlu bir çözüm sunmaktır.'
      },
      images: [
        '/images/services/batik-tirnak/batik1.jpg',
        '/images/services/batik-tirnak/batik2.jpg',
        '/images/services/batik-tirnak/batik3.jpg'
      ]
    }
  },
  {
    id: 'tirnak-mantari',
    title: 'Tırnak ve Ayak Mantarları',
    shortDesc: 'Etkili tırnak mantarı tedavisi ile sağlıklı tırnaklar',
    fullDesc: 'Tırnak mantarı, tırnak yapısını bozan ve estetik sorunlara yol açan fungal bir enfeksiyondur. Modern tedavi yöntemlerimizle kalıcı çözüm sağlıyoruz. Uzman podologlarımız, kişiye özel tedavi planları hazırlayarak, tırnaklarınızın sağlığına kavuşmasını sağlar. Tedavi sürecinde düzenli takip ile başarı oranını maksimuma çıkarıyoruz.',
    icon: 'ShieldCheck',
    image: '/images/services/Tirnak-Mantari.jpg',
    benefits: [
      'Modern tedavi protokolleri',
      'Hızlı iyileşme süreci',
      'Tekrarlama riskini azaltma',
      'Kişiye özel tedavi planı'
    ],
    process: [
      'Fungal analiz ve teşhis',
      'Tedavi planlaması',
      'Düzenli uygulama seansları',
      'Kontrol ve koruyucu önlemler'
    ],
    detailedContent: {
      causes: {
        title: 'Tırnak Mantarı Neden Olur?',
        description: 'Tırnak mantarına en sık dermatofit adı verilen mantarlar neden olur. Ancak maya ve küf mantarları da enfeksiyona yol açabilir.',
        riskFactors: [
          'Nemli çorap ve ayakkabı kullanımı',
          'Terleyen ayaklar',
          'Ortak terlik, havlu, duş alanı kullanımı',
          'Dar ayakkabılar',
          'Travmaya uğramış tırnak',
          'Bağışıklığın zayıf olması',
          'Diyabet ve dolaşım problemleri',
          'Mantar hastalığı olan biriyle temas'
        ],
        note: 'Bu faktörlerden biri bile varsa, tırnak mantarı gelişme ihtimali artar.'
      },
      symptoms: {
        title: 'Tırnak Mantarı Belirtileri',
        description: 'Tırnak mantarında görülen bulgular zamanla ilerleyerek tırnağı tamamen bozabilir. Bu nedenle erken müdahale çok önemlidir.',
        signs: [
          'Tırnakta sararma, kahverengileşme veya beyaz lekeler',
          'Tırnak kalınlaşması',
          'Tırnakta şekil bozukluğu',
          'Tırnak yüzeyinde katmanlaşma ve parçalanma',
          'Tırnak altından kötü koku gelmesi',
          'Tırnağın yatağından ayrılması',
          'Ayakkabı içinde batma ve ağrı'
        ],
        note: 'Bu şikayetlerin biri bile varsa, tırnak mantarı ihtimali yüksektir.'
      },
      treatment: {
        title: 'Podolojik Tırnak Mantarı Tedavisi – Medipodo Yaklaşımı',
        intro: 'Tırnak mantarı uzun süren ve doğru bakım gerektiren bir problemdir. Medipodo\'da uygulanan yöntem tamamen klinik, hijyenik ve profesyonel bir yaklaşıma dayanır.',
        steps: [
          {
            number: 1,
            title: 'Podolojik Değerlendirme',
            description: 'Tırnak yapısı, etkilenen alan, mantarın yaygınlığı ve tırnağın kalınlığı analiz edilir. Gerekirse mikroskobik inceleme önerilir.'
          },
          {
            number: 2,
            title: 'Enfekte Tırnak Katmanlarının Temizlenmesi (Debridman)',
            description: 'Özel podolojik frez uçlarıyla mantarın tuttuğu kalınlaşmış ve ölü tırnak dokusu kontrollü şekilde temizlenir.',
            benefits: [
              'Tedavinin etkinliğini artırır',
              'Topikal ürünlerin tırnak altına daha iyi nüfuz etmesini sağlar',
              'Ağrı ve basıncı azaltır'
            ]
          },
          {
            number: 3,
            title: 'Mantar Karşıtı Profesyonel Bakım Ürünleri',
            description: 'Hastalığın seviyesine göre evde kullanım için mantar karşıtı serum, solüsyon veya krem önerilir.'
          },
          {
            number: 4,
            title: 'Düzenli Kontrol Seansları',
            description: 'Tırnak mantarı tedavisi genellikle 2–6 ay sürer. Düzenli kontrollere gelmek tedavinin başarısı için kritik önemdedir.'
          }
        ]
      },
      risks: {
        title: 'Tırnak Mantarı Tedavi Edilmezse Ne Olur?',
        consequences: [
          'Enfeksiyon diğer tırnaklara yayılabilir',
          'Tırnak yatağı tamamen tahrip olabilir',
          'Ağrı ve koku artabilir',
          'Ayakkabı giymek zorlaşabilir',
          'Deri mantarı (athlete\'s foot) gelişebilir'
        ],
        note: 'Bu nedenle erken başvuru tedavinin temel anahtarıdır.'
      },
      prevention: {
        title: 'Tırnak Mantarı Nasıl Önlenir?',
        tips: [
          'Ayakları her gün yıkayıp iyice kurulayın',
          'Hava alan, pamuklu çoraplar kullanın',
          'Ayakkabıları düzenli havalandırın',
          'Ortak havuz/duş alanlarında terlik kullanın',
          'Manikür/pedikür için steril olmayan yerleri tercih etmeyin',
          'Mantar karşıtı koruyucu sprey/serumlar kullanın'
        ]
      },
      whyMedipodo: {
        title: 'Medipodo Ayak Sağlığı – Tırnak Mantarı Bakımında Neden Tercih Ediliyor?',
        reasons: [
          'Podolog eşliğinde profesyonel bakım',
          'Steril ve tek kullanımlık ürünler',
          'Mantarın evrelerine uygun kişiye özel tedavi planı',
          'Kalınlaşmış mantarlı tırnaklarda ağrısız inceltme',
          'Gelişmiş cihazlar ve hijyen protokolleri',
          'Ankara – Bağlıca\'da güvenilir hizmet'
        ],
        note: 'Randevular en az 1 gün önceden alınmaktadır. Evde bakım isterseniz, mobil ekiplerimiz de belirli bölgelere hizmet vermektedir.'
      },
      images: [
        '/images/services/tirnak-mantari/mantar1.jpg',
        '/images/services/tirnak-mantari/mantar2.jpg',
        '/images/services/tirnak-mantari/mantar3.jpg'
      ]
    }
  },
  {
    id: 'topuk-bakimi',
    title: 'Topuk ve Çatlak Bakımı',
    shortDesc: 'Çatlak topuklar için profesyonel bakım ve tedavi',
    fullDesc: 'Topuk çatlakları ve kalınlaşmaları hem estetik hem de sağlık problemi oluşturabilir. Özel bakım protokollerimizle topuklarınızı yeniden sağlıklı hale getiriyoruz. Profesyonel peeling ve nemlendirme uygulamalarımız, cildinizin derinlemesine beslenmesini sağlar. Uzun süreli sonuçlar için evde bakım önerilerimizle sürecin devamını destekliyoruz.',
    icon: 'Sparkles',
    image: '/images/services/Topuk-Bakimi.jpg',
    benefits: [
      'Derinlemesine nemlendirme',
      'Kalınlaşmış deri temizliği',
      'Yumuşak ve sağlıklı cilt',
      'Uzun süreli sonuçlar'
    ],
    process: [
      'Cilt analizi',
      'Profesyonel peeling işlemi',
      'Özel bakım uygulaması',
      'Evde bakım önerileri'
    ],
    detailedContent: {
      causes: {
        title: 'Topuk Çatlakları Neden Oluşur?',
        description: 'Topuk çatlaklarının ortaya çıkmasının birçok nedeni olabilir:',
        riskFactors: [
          'Cilt Kuruluğu: Ayak derisi ince ve yağ bezlerinden fakir olduğu için çabuk kurur. Nem kaybı arttıkça topuk tabanı sertleşir ve zamanla çatlar',
          'Aşırı Basınç: Uzun süre ayakta kalma, fazla kilo veya yanlış ayakkabı seçimi topuk çevresinde kalın tabaka oluşumuna yol açar',
          'Yanlış Ayak Bakımı: Sert törpüler, çok sık ponza taşı kullanımı veya yanlış pedikür uygulamaları topuğu daha da hassas hâle getirir',
          'Egzama – Diyabet – Cilt Hastalıkları: Bazı dermatolojik durumlar ve diyabet gibi kronik hastalıklar, derinin daha hızlı kurumasına ve çatlamasına neden olabilir',
          'Terleme ve Hijyen Eksikliği: Aşırı terleme ya da yeterince kurulamayarak bırakılan ayak derisi zamanla bozulur ve çatlaklar oluşur'
        ],
        note: ''
      },
      symptoms: {
        title: 'Topuk Sorunlarının Belirtileri Nelerdir?',
        description: 'Topuk bakımının gerekli olduğunu gösteren en yaygın işaretler:',
        signs: [
          'Topuk çevresinde sertleşme ve kalın tabaka',
          'Derinleşen çatlaklar',
          'Yürürken batma veya yanma hissi',
          'Çorap takılması',
          'Kanama, hafif sızı veya enfeksiyon başlangıcı',
          'Koku ve hijyen problemleri'
        ],
        note: 'Bu belirtilerden biri bile varsa profesyonel bakım geciktirilmemelidir.'
      },
      treatment: {
        title: 'Medipodo\'da Topuk Bakımı Nasıl Yapılır?',
        intro: 'Topuk bakımı uygulamalarımız tamamen steril, ağrısız ve klinik düzeyde podolojik tekniklerle yapılır.',
        steps: [
          {
            number: 1,
            title: 'Podolojik Muayene',
            description: 'Topuğun kalınlık derecesi, çatlak derinliği, enfeksiyon olup olmadığı ve yürüyüş şekli değerlendirilir.'
          },
          {
            number: 2,
            title: 'Medikal Cilt Temizliği',
            description: 'Sertleşmiş tabaka podolojik cihazlarla hassas şekilde temizlenir. Bu işlem sırasında sağlıklı dokuya zarar verilmez.'
          },
          {
            number: 3,
            title: 'Çatlakların Kapalı Teknikle Onarılması',
            description: 'Derin çatlaklar varsa özel prosedürlerle yüzey düzleştirilir, enfeksiyon riski azaltılır.'
          },
          {
            number: 4,
            title: 'Yoğun Nemlendirme ve Onarım',
            description: 'Uygulama sonrası ayak derisini hızlı şekilde toparlayan Pedizone Intense Repair Cream %15 Üre ile yoğun nem terapisi yapılır.',
            benefits: [
              'Sert tabakanın yumuşamasına',
              'Derinin su tutma kapasitesinin artmasına',
              'Kuruluk ve çatlakların kısa sürede onarılmasına'
            ],
            note: 'Üre, çatlak topuklarda keratolitik etki göstererek bu faydaları sağlar. Bu kremi düzenli kullandığınızda bakımın kalıcılığı belirgin şekilde uzar.'
          },
          {
            number: 5,
            title: 'Evde Bakım Eğitimi',
            description: 'Tedavinin tekrarlamaması için doğru nemlendirme, ayakkabı seçimi ve günlük bakım adımları detaylı olarak anlatılır.'
          }
        ]
      },
      benefits: {
        title: 'Topuk Bakımı Düzenli Olarak Yapılırsa Ne Değişir?',
        list: [
          'Daha pürüzsüz ve estetik görünüm',
          'Ağrı ve batma hissinde azalma',
          'Çatlakların kapanması ve enfeksiyon riskinin ortadan kalkması',
          'Çorap ve ayakkabı kullanımında konfor',
          'Koku oluşumunda azalma'
        ],
        note: 'Düzenli bakım yaptıranlarda ilerleyen dönemde kalın tabaka oluşumu çok daha düşük olur.'
      },
      prevention: {
        title: 'Evde Topuk Çatlağı Nasıl Önlenir?',
        intro: 'Profesyonel bakımın ardından şu adımlar düzenli uygulanmalıdır:',
        tips: [
          'Günde en az 1 kez Pedizone Intense Repair Cream %15 Üre ile nemlendirme',
          'Duştan sonra ayakların tamamen kurulunması',
          'Sert zeminlerde terliksiz dolaşmamak',
          'Çok kalınlaşmış deriye evde jilet / kesici işlem uygulamamak',
          'Uygun tabanlık ve ayakkabı seçmek',
          'Haftada 1 kez hafif peeling'
        ]
      },
      whyMedipodo: {
        title: 'Neden Medipodo?',
        reasons: [
          'Podoloji eğitimi almış profesyonel ekip',
          'Tam steril klinik ortam',
          'Ağrısız işlem garantisi',
          'Soruna göre kişiye özel bakım planı',
          'Kalıcı çözüme odaklanan klinik yaklaşım',
          'Ankara / Bağlıca\'da kolay ulaşım'
        ],
        note: 'Topuk çatlakları, doğru bakım yapılmadıkça sürekli tekrar eden bir problemdir. Medipodo olarak amacımız geçici bir "güzellik" değil, uzun süre konfor sağlayan kalıcı bir iyileşme sağlamaktır.'
      },
      images: [
        '/images/services/topuk-bakimi/topuk1.jpg',
        '/images/services/topuk-bakimi/topuk2.jpg',
        '/images/services/topuk-bakimi/topuk3.jpg',
        '/images/services/topuk-bakimi/topuk4.jpg'
      ]
    }
  },
  {
    id: 'nasir-tedavisi',
    title: 'Nasır ve Plantar Siğil',
    shortDesc: 'Ağrılı nasırların profesyonel tedavisi',
    fullDesc: 'Ayak tabanında oluşan nasırlar ve kalınlaşmalar yürüme konforu ve yaşam kalitenizi olumsuz etkiler. Uzman podoloji hizmetimizle rahatlayın. Özel cihazlarımız ve profesyonel tekniklerimizle, nasırlarınızı ağrısız bir şekilde temizliyor, basınç noktalarınızı analiz ederek tekrar oluşumunu önlemeye yönelik öneriler sunuyoruz.',
    icon: 'CircleDot',
    image: '/images/services/Nasir-Kalinlasma.jpg',
    benefits: [
      'Ağrısız temizleme',
      'Anında rahatlama',
      'Tekrar oluşumu önleme',
      'Profesyonel cilt bakımı'
    ],
    process: [
      'Nasır analizi ve lokasyon tespiti',
      'Özel aletlerle temizlik',
      'Basınç noktası değerlendirmesi',
      'Önleyici öneriler'
    ]
  },
  {
    id: 'ayak-bakimi',
    title: 'Medikal Ayak Bakımı',
    shortDesc: 'Kapsamlı profesyonel ayak bakımı hizmeti',
    fullDesc: 'Ayaklarınızın sağlığı için kapsamlı bakım programı. Temizlikten bakıma, tırnak kesiminden cilt bakımına kadar tüm ihtiyaçlarınız için buradayız. Steril koşullarda, profesyonel ürünler kullanarak gerçekleştirdiğimiz medikal ayak bakımı, hem tedavi edici hem de rahatlat',
    icon: 'Heart',
    image: '/images/services/Medikal-Ayak-Bakimi.jpg',
    benefits: [
      'Komple ayak bakımı',
      'Hijyenik koşullar',
      'Profesyonel ürünler',
      'Rahatlatıcı deneyim'
    ],
    process: [
      'Genel ayak muayenesi',
      'Tırnak ve cilt bakımı',
      'Masaj ve nemlendirme',
      'Özel bakım önerileri'
    ]
  },
  {
    id: 'evde-bakim',
    title: 'Evde Medikal Ayak Bakımı',
    shortDesc: 'Evinizin konforunda profesyonel ayak bakımı hizmeti',
    fullDesc: 'Sağlık sorunları nedeniyle merkezimize ulaşmakta zorluk mu yaşıyorsunuz? Evde medikal ayak bakımı hizmetimizle yanınızdayız. Özellikle yatalak hastalar, yaşlı bireyler, hareket zorluğu yaşayanlar ve dolaşım bozukluğu olan hastalarımız için ideal bir çözümdür. Ankara genelinde geniş hizmet bölgemizde, steril malzemeler ve profesyonel ekibimizle evinize geliyoruz.',
    icon: 'Zap',
    image: '/images/services/evde-bakim.jpg',
    benefits: [
      'Ev konforunda hizmet',
      'Yatalak ve yaşlı hastalara özel',
      'Steril malzeme ve cihazlar',
      'Geniş hizmet bölgesi',
      'Profesyonel podolog ekibi',
      'Dolaşım bozukluğu olan hastalara uygun'
    ],
    process: [
      'Randevu ve hazırlık (en az 1 gün önceden)',
      'Adresinize geliyoruz (1 Podolog + 1 Yardımcı)',
      'Kapsamlı ayak muayenesi ve bakımı',
      'Tırnak kesimi, mantar tedavisi, nasır temizliği',
      'Peeling, masaj ve serum uygulaması',
      'Takip ve bakım önerileri'
    ]
  }
];

export const galleryImages = [
  {
    id: 1,
    before: '/images/gallery/g1.jpg',
    after: '/images/gallery/g1.jpg',
    title: 'Medikal Akrilik Tırnak',
    description: 'Deformite sonucu tırnak kalmayan bölgeye doğal tırnak uygulaması yaptık'
  },
  {
    id: 2,
    before: '/images/gallery/g2.jpg',
    after: '/images/gallery/g2.jpg',
    title: 'Ciltte Aşırı Kalınlaşma (Hiperkeratoz) ',
    description: 'Profesyonel medikal ayak bakımı ile harika sonuçlar'
  },
  {
    id: 3,
    before: '/images/gallery/g3.jpg',
    after: '/images/gallery/g3.jpg',
    title: 'Topuk Bakımı Sonuçları',
    description: 'Derin bakım ile yenilenen ayaklar'
  },
  {
    id: 4,
    before: '/images/gallery/g4.jpg',
    after: '/images/gallery/g4.jpg',
    title: 'Onikogrifoz Tırnak Temizliği',
    description: '7 yıl hiç kesilmemiş-Ağrısız uygulama, temiz görüntü'
  },
  {
    id: 5,
    before: '/images/gallery/g5.jpg',
    after: '/images/gallery/g5.jpg',
    title: 'Tırnak Restorasyonu',
    description: 'Hasarlı tırnak onarımı ve bakımı'
  },
  {
    id: 6,
    before: '/images/gallery/g6.jpg',
    after: '/images/gallery/g6.jpg',
    title: 'Soyulabilir Ayak Maskelerini Önermiyoruz - İşte Sebebi',
    description: 'Medikal ayak bakımı ve Pedizone %15 Üreli Intense Repair Cream Kullanım Sonucu'
  },
  {
    id: 7,
    before: '/images/gallery/g7.jpg',
    after: '/images/gallery/g7.jpg',
    title: 'Batık Tırnak ve Ortoniksi',
    description: 'Ortoniksi uygulaması ile batık tırnak tedavisi'
  },
  {
    id: 8,
    before: '/images/gallery/g8.jpg',
    after: '/images/gallery/g8.jpg',
    title: 'Enfeksiyonlu Batık Tırnak Vakası',
    description: 'B/S Bant ile yakaladığımız başarı'
  },
  {
    id: 9,
    before: '/images/gallery/g9.jpg',
    after: '/images/gallery/g9.jpg',
    title: 'Batık Tırnak Tedavisi',
    description: 'Ağrısız batık tırnak tedavisi ve iyileşme süreci'
  },
  {
    id: 10,
    before: '/images/gallery/g10.jpg',
    after: '/images/gallery/g10.jpg',
    title: 'Tırnak Mantarı Tedavisi',
    description: 'Kalıcı tırnak mantarı tedavisi sonuçları'
  },
  {
    id: 11,
    before: '/images/gallery/g11.jpg',
    after: '/images/gallery/g11.jpg',
    title: 'Onychogryphosis',
    description: 'Tırnağın aşırı kalınlaşması ve koç boynuzu gibi kıvrılarak şekil bozması durumudur. Küretajı yapılarak rahatlatılmıştır.'
  }
];

// ============================================
// BLOG YAZILARINI BURADAN DEĞİŞTİREBİLİRSİNİZ
// ============================================
// Zenginleştirilmiş, SEO dostu blog içerikleri
// Podolojik yaklaşım ve bilimsel temeller içerir

export const blogPosts = enrichedBlogPosts.length > 0 ? enrichedBlogPosts : [
  {
    id: 'bs-bant-uygulamasi',
    title: 'B/S Bant Uygulaması Nedir? Batık Tırnak İçin Daha Mı Konforlu?',
    slug: 'bs-bant-uygulamasi',
    excerpt: 'B/S Bant uygulaması nedir, nasıl çalışır? Batık tırnak tedavisinde tırnak teline alternatif, acısız ve estetik çözüm. Ankara Medipodo\'da uygulanıyor.',
    content: 'B/S Bant Uygulaması Nedir?',
    author: 'Medipodo Podoloji Ekibi',
    date: '2025-12-16',
    readTime: '12 dakika',
    image: '/images/blog/bs-bant/bs-bant.jpg',
    tags: ['B/S Bant', 'Batık Tırnak', 'Podoloji', 'Tırnak Teli', 'Tedavi']
  },
  {
    id: 'tirnakbatmasi',
    title: 'Tırnak Batması Neden Olur? En Sık Yapılan Hatalar ve Doğru Çözümler',
    slug: 'tirnakbatmasi',
    excerpt: 'Tırnak batmasının nedenleri, evde yapılan hatalar, podolojik yöntemler ve kalıcı çözümler. Medipodo ile tırnak batması sorununu çözün.',
    content: 'Tırnak Batması Neden Olur? En Sık Yapılan Hatalar ve Doğru Çözümler',
    author: 'Medipodo Podolog Ekibi',
    date: '2024-12-01',
    readTime: '15 dakika',
    image: '/blog-images/batik-tirnak/1.jpg',
    tags: ['Tırnak Batması', 'Podoloji', 'Tedavi']
  },
  {
    id: 'ayak-sagligi-ipuclari',
    title: 'Ayak Sağlığı İçin 10 Önemli İpucu',
    slug: 'ayak-sagligi-ipuclari',
    excerpt: 'Sağlıklı ayaklar için günlük hayatınızda uygulayabileceğiniz pratik öneriler ve profesyonel tavsiyeleri keşfedin.',
    content: `# Ayak Sağlığı İçin 10 Önemli İpucu

Ayaklarımız günlük yaşamımızda en çok kullandığımız ancak en az önem verdiğimiz organlarımızdan biridir. Sağlıklı ayaklar, aktif ve konforlu bir yaşamın temelidir.

## 1. Doğru Ayakkabı Seçimi

Ayakkabı seçimi ayak sağlığının temelidir. Dar, yüksek topuklu veya düz tabanlı ayakkabılar birçok ayak probleminin ana nedenidir. Ayakkabınız ayağınıza tam oturmalı, ancak sıkmamalı, nefes alabilen malzemelerden yapılmış olmalı ve uygun taban desteği sağlamalıdır.

## 2. Günlük Ayak Hijyeni

Her gün ayaklarınızı ılık suyla yıkayın ve özellikle parmak aralarını iyice kurulayın. Nemli ortam mantar ve bakterilerin üremesine zemin hazırlar.

## 3. Tırnak Bakımı

Tırnaklarınızı düz bir şekilde, çok kısa kesmeden kesmeye özen gösterin. Batık tırnak oluşumunu önlemek için köşeleri aşırı derecede kısaltmayın.

## 4. Nemlendirme

Ayaklarınızı, özellikle topuk bölgenizi düzenli olarak nemlendirecek kremler kullanın. Ancak parmak aralarına krem sürmekten kaçının.

## 5. Çorap Seçimi

Pamuklu, ter emici çoraplar tercih edin. Sentetik malzemeler ter birikmesine ve mantar oluşumuna neden olabilir.

## 6. Ayakkabılarınızı Dinlendirin

Aynı ayakkabıyı art arda günler giymekten kaçının. Ayakkabılarınızın havalanması ve kuruması için zaman tanıyın.

## 7. Düzenli Egzersiz

Ayak parmaklarınızı hareket ettirin, ayak bileklerinizi döndürün. Basit egzersizler dolaşımı artırır ve ayak sağlığını destekler.

## 8. Diyabet Kontrolü

Diyabet hastaysanız, ayak sağlığınıza ekstra dikkat gösterin ve düzenli kontrolleri ihmal etmeyin.

## 9. Erken Müdahale

Herhangi bir ağrı, şişlik, renk değişikliği veya yara durumunda uzman bir podologa başvurun. Erken teşhis tedaviyi kolaylaştırır.

## 10. Profesyonel Ayak Bakımı

Yılda en az bir kez profesyonel ayak bakımı yaptırmanız, olası problemlerin erken tespiti için önemlidir.

**Profesyonel destek için Medipodo Ayak Bakımı merkezimizi ziyaret edebilirsiniz.**`,
    author: 'Dr. Ayşe Demir',
    date: '2024-01-15',
    readTime: '5 dakika',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
    tags: ['Ayak Sağlığı', 'Önleyici Bakım', 'Sağlıklı Yaşam']
  },
  {
    id: 'batik-tirnak-nedenleri',
    title: 'Batık Tırnak Nedenleri ve Korunma Yolları',
    slug: 'batik-tirnak-nedenleri',
    excerpt: 'Batık tırnak oluşumunun ana nedenleri ve bu rahatsızlıktan korunmak için alınabilecek önlemler hakkında detaylı bilgi.',
    content: `# Batık Tırnak Nedenleri ve Korunma Yolları

Batık tırnak, tırnağın kenarlarının yanındaki yumuşak dokuya batması sonucu oluşan ağrılı bir durumdur. Bu yaygın problemi anlamak ve önlemek için kapsamlı bilgiler sunuyoruz.`,
    author: 'Uzm. Mehmet Kaya',
    date: '2024-01-20',
    readTime: '7 dakika',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
    tags: ['Batık Tırnak', 'Tedavi', 'Önleme']
  },
  {
    id: 'tirnak-mantari-tedavisi',
    title: 'Tırnak Mantarı: Modern Tedavi Yöntemleri',
    slug: 'tirnak-mantari-tedavisi',
    excerpt: 'Tırnak mantarı tedavisinde güncel yaklaşımlar, tedavi süreçleri ve kalıcı çözüm yöntemlerini öğrenin.',
    content: `# Tırnak Mantarı: Modern Tedavi Yöntemleri

Tırnak mantarı, dünya çapında milyonlarca insanı etkileyen yaygın bir sağlık problemidir. Modern tedavi yöntemleri ile bu rahatsızlıktan tamamen kurtulmak mümkün.`,
    author: 'Dr. Zeynep Arslan',
    date: '2024-01-25',
    readTime: '8 dakika',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=400&fit=crop',
    tags: ['Tırnak Mantarı', 'Onikomikoz', 'Modern Tedavi']
  },

];

export const teamMembers = [
  {
    id: 1,
    name: 'Serdar Ceylan',
    title: 'Podolog',
    bio: 'Uzun yıllar podoloji alanında deneyimli; ortoniksi uygulamaları, batık tırnak, tırnak ve ayak mantarı alanında başarısını ispatlamış uzman.',
    image: '/images/team/serdar-ceylan.jpg',
    specialties: ['Ortoniksi Uygulamaları', 'Batık Tırnak', 'Tırnak Mantarı']
  },
  {
    id: 2,
    name: 'Şaziye Kunt',
    title: 'Uzm. Refleksolog',
    bio: 'Medikal el ve ayak bakımı konusunda deneyimli, refleksoloji uygulayıcısı.',
    image: '/images/team/saziye-kunt.jpg',
    specialties: ['Medikal Pediküir', 'Nasır Tedavisi', 'Topuk Bakımı']
  },
  {
    id: 3,
    name: 'Sevda Karataş',
    title: 'Usta Öğretici',
    bio: 'Yılların ustalık deneyimini öğrencilerine aktararak onların profesyonel bir başlangıç yapmasını sağlıyor.',
    image: '/images/team/sevda-karatas.jpg',
    specialties: ['Evde Bakım', 'Mantar Tedavisi', 'Önleyici Bakım']
  }
];

export const whyChooseUs = [
  {
    title: 'Uzman Kadro',
    description: 'Alanında deneyimli ve sertifikalı podoloji uzmanları',
    icon: 'Award'
  },
  {
    title: 'Modern Ekipman',
    description: 'En güncel teknoloji ve steril medikal ekipmanlar',
    icon: 'Sparkles'
  },
  {
    title: 'Hijyenik Ortam',
    description: 'Tam sterilizasyon ve hijyen standartlarına uygunluk',
    icon: 'ShieldCheck'
  },
  {
    title: 'Kişiye Özel Tedavi',
    description: 'Her hasta için özel hazırlanan tedavi programları',
    icon: 'Heart'
  }
];

// PediZone Products
export const products = [
  {
    id: 'ayak-temizleme-kopugu',
    slug: 'pedizone-ayak-temizleme-kopugu',
    name: 'PediZone® Ayak Temizleme Köpüğü',
    shortName: 'Ayak Temizleme Köpüğü',
    tagline: 'Derinlemesine Hijyen ve Ferahlık',
    volume: '200 ml',
    coverImage: '/images/products/FootFoam-Pedizone.jpg',
    detailImages: [
      '/images/products/pedizone-foot-foam-p.jpg',
      '/images/products/FootFoam-Pedizone.jpg',
      '/images/products/tum-pedizone-sayfalari.jpg'
    ],
    description: 'Ayak hijyeni, sağlıklı ayak bakımının temelini oluşturur. PediZone® Ayak Temizleme Köpüğü, ayakların derinlemesine temizliği ve korunması için özel olarak geliştirilmiş, antibakteriyel özellikli bir formüldür.',
    fullDescription: 'Günlük yaşamın getirdiği terleme, kirlenme ve kapalı ayakkabı kullanımı, ayaklarda bakteri ve kötü koku oluşumuna zemin hazırlar. PediZone® Ayak Temizleme Köpüğü, ayakların derinlemesine temizliği ve korunması için özel olarak geliştirilmiş, antibakteriyel özellikli bir formüldür. 200 ml\'lik bu yumuşak köpük, cildi kurutmadan mikroorganizmaları temizlerken, ayaklarınıza anında ferahlık ve rahatlama sağlar.',
    features: [
      'Antibakteriyel özellikli formül',
      'Yumuşak köpük yapısı',
      'Cildi kurutmadan temizler',
      'Anında ferahlık ve rahatlama',
      'Koku giderici etki',
      'Nemlendirici özellik',
      'Podolog onaylı'
    ],
    benefits: [
      'Derinlemesine hijyen sağlar',
      'Kötü koku oluşumunu engeller',
      'Cildi temizlerken nemlendirir',
      'Yorgun ayaklar için rahatlama',
      'Cilt bariyerini onarır',
      'Mantar Karşıtı'
    ],
    ingredients: [
      {
        name: 'Chlorhexidine',
        effect: 'Güçlü antibakteriyel etki, ayak kokusuna neden olan mikroorganizmaları temizler'
      },
      {
        name: 'Aloe Vera',
        effect: 'Cildi yatıştırır, nemlendirir ve tahrişi azaltır'
      },
      {
        name: 'Menthol',
        effect: 'Anında serinletici ve ferahlatıcı his verir'
      },
      {
        name: 'Panthenol (Provitamin B5)',
        effect: 'Cilt bariyerini onarır ve yenilenmesini destekler'
      },
      {
        name: 'Niacinamide',
        effect: 'Cilt tonunu eşitler, gözenekleri sıkılaştırır ve cilt bariyerini güçlendirir'
      },
      {
        name: 'Hyaluronic Acid',
        effect: 'Yoğun nem sağlar, cildin nem dengesini korur ve yumuşaklık verir'
      }
    ],
    usage: [
      'Islak ayaklara köpük olarak yeterli miktarda PediZone® Ayak Temizleme Köpüğü uygulayın',
      'Parmak araları da dahil olmak üzere tüm bölgeyi 1-2 dakika nazikçe masaj yapın',
      'Bol suyla durulayın'
    ],
    recommendation: 'Maksimum hijyen ve ferahlık için günlük rutininizde sabah ve/veya akşam olmak üzere günde 1-2 kez kullanılması önerilir.',
    category: 'Temizlik ve Hijyen'
  },
  {
    id: 'urea-intense-repair-cream',
    slug: 'pedizone-urea-intense-repair-cream',
    name: 'PediZone® %15 Urea Intense Repair Cream',
    shortName: '%15 Üreli Yoğun Onarıcı Kremi',
    tagline: 'Çatlak Topuk ve Yoğun Kuruluk İçin Yoğun Onarım',
    volume: '150 ml',
    coverImage: '/images/products/Intense Repair Cream-Pedizone.jpg',
    detailImages: [
      '/images/products/pedizone-krem4.jpg',
      '/images/products/Intense Repair Cream-Pedizone.jpg',
      '/images/products/tum-pedizone-sayfalari.jpg'
    ],
    description: 'Çatlak topuklar ve aşırı kuruluk için profesyonel bakım kremi. %15 urea içeriği ile yoğun onarım ve nemlendirme sağlar.',
    fullDescription: 'Çatlak topuklar, aşırı kuruluk ve hiperkeratoz (cilt kalınlaşması) sadece estetik kaygı değil, ağrıya ve enfeksiyon riskine yol açabilen ciddi sağlık sorunlarıdır. PediZone® %15 Urea Intense Repair Cream, podolojik uygulamalar için özel olarak geliştirilmiş, çatlak topuklar ve şiddetli kuru ayak cildi için yoğun onarım sağlayan profesyonel bir bakım kremidir.',
    features: [
      '%15 Urea (Üre) içeriği',
      'Keratolytik ve rejeneratif etki',
      'Bitki kompleksleri',
      'Derin nemlendirici ajanlar',
      'Hızlı emilim, yapışkan his bırakmaz',
      'Podolog onaylı',
      'Klinik testli'
    ],
    benefits: [
      'Çatlak topukları hızla onarır',
      'Hiperkeratozu yumuşatır',
      'Enfeksiyon riskini azaltır',
      'Cildi yoğun nemlendirir',
      'Yeniden çatlamayı önler',
      'Kaşınma ve Mantar Karşıtı'
    ],
    ingredients: [
      {
        name: '%15 Urea (Üre)',
        effect: 'Keratolitik ve rejeneratif etki: Sertleşmiş keratini yumuşatır, ölü cildin kontrollü şekilde uzaklaşmasına yardımcı olur'
      },
      {
        name: 'Tea Tree Oil',
        effect: 'Antifungal ve antibakteriyel koruma: Ayak mantarı ve bakteriyel kokulara karşı koruyucu bariyer oluşturur'
      },
      {
        name: 'Shea Butter & Avokado Yağı',
        effect: 'Derin besleyici onarım: Yoğun nem deposu oluşturur, cilt bariyerini güçlendirir'
      },
      {
        name: 'Gliserin',
        effect: 'Nem tutma etkisi: Cildin nem kaybını önler, formülün derine nüfuz etmesini kolaylaştırır'
      },
      {
        name: 'Panthenol',
        effect: 'Cilt onarımı ve yenilenmesi: Tahriş olmuş cildi sakinleştirir, nem kaybını önler ve cilt bariyerini güçlendirir'
      },
      {
        name: 'E Vitamini',
        effect: 'Antioksidan koruma: Serbest radikallere karşı korur, cildin esnekliğini artırır ve yaşlanma belirtilerini azaltır'
      }
    ],
    usage: [
      'Ev Kullanımı: En iyi sonuçlar için geceleri temiz ve kuru ayaklara uygulayın',
      'Çatlak ve kuru bölgelere odaklanarak tamamen emilene kadar masaj yapın',
      'Düzenli kullanımda 7-10 gün içinde ilk iyileşmeler gözlemlenebilir'
    ],
    professionalUse: 'Podoloji tedavilerinden sonra, temizlenmiş bölgeye ince bir tabaka halinde uygulayarak tedavi sonrası bakımı destekler.',
    category: 'Bakım ve Onarım',
    usageAreas: [
      'Çatlak topuklar ve aşırı kuruluk',
      'Hiperkeratoz (kalınlaşmış cilt)',
      'Podoloji tedavisi sonrası bakım',
      'Mantara eğilimli cilt'
    ]
  },
  {
    id: 'foot-nail-care-serum',
    slug: 'pedizone-foot-nail-care-serum',
    name: 'PediZone® Foot and Nail Care Serum',
    shortName: 'Tırnak ve Ayak Serumu',
    tagline: 'Tırnak ve Ayak Sağlığınız İçin Podolog Onaylı Çözüm',
    volume: '50 ml',
    coverImage: '/images/products/Antifungal-Pedizone.jpg',
    detailImages: [
      '/images/products/Antifungal-Pedizone.jpg',
      '/images/products/pedizone-urunler.jpg',
      '/images/products/tum-pedizone-sayfalari.jpg'
    ],
    description: 'Ayak ve tırnak sağlığı için özel formül. Tırnak mantarı eğilimine karşı koruma, mat tırnakları canlandırma ve kötü koku giderme özellikleri.',
    fullDescription: 'Ayak ve tırnak sağlığı, genel yaşam konforunuzun ayrılmaz bir parçasıdır. Gün boyu kapalı kalan, neme ve sürtünmeye maruz kalan ayaklar, zamanla mat tırnak görünümü, kötü koku ve cilt yıpranması gibi sorunlarla karşılaşabilir. PediZone® Foot and Nail Care Serum, bu zorluklara karşı özel olarak geliştirilmiş, podolog onaylı, etkili bir bakım formülüdür.',
    features: [
      'Konsantre serum formülü',
      'Antifungal özellik',
      'Antibakteriyel etki',
      'Tırnak yüzeyi yenileme',
      'Yoğun nemlendirme',
      'Hızlı emilim',
      'Podolog onaylı'
    ],
    benefits: [
      'Tırnak mantarına karşı koruma',
      'Mat tırnakları canlandırır',
      'Kötü koku giderir',
      'Tırnak ve cilt esnekliğini artırır',
      'Sağlıklı tırnak uzamasını destekler',
      'Tırnaklarda Hızlı Emilim'
    ],
    ingredients: [
      {
        name: 'Tea Tree Oil (Çay Ağacı Yağı)',
        effect: 'Güçlü doğal antifungal ve antibakteriyel etki, tırnak mantarı eğilimli bölgelerde koruyucu bariyer oluşturur'
      },
      {
        name: 'Salicylic Acid (Salisilik Asit)',
        effect: 'Keratolitik özelliği sayesinde ölü deri hücrelerini nazikçe temizler, tırnak yüzeyinin yenilenmesini destekler'
      },
      {
        name: 'Urea (Üre)',
        effect: 'Yoğun nemlendirici ve yumuşatıcı etki, tırnak ve çevresindeki cildin esnekliğini artırır'
      },
      {
        name: 'Vitamin E',
        effect: 'Güçlü antioksidan koruma, tırnak yatağını serbest radikallere karşı koruyarak sağlıklı uzamayı destekler'
      },
      {
        name: 'Benzoic Acid',
        effect: 'Antifungal ve antimikrobiyal özellik: Tırnak mantarı ve mikroorganizmalara karşı etkili koruma sağlar'
      },
      {
        name: 'Thymus Vulgaris (Kekik Yağı)',
        effect: 'Doğal antiseptik ve antibakteriyel: Tırnak çevresindeki enfeksiyonları önler ve iyileşmeyi destekler'
      },
      {
        name: 'Undecylenamide DEA',
        effect: 'Güçlü antifungal ajan: Tırnak mantarının büyümesini engeller ve tırnak sağlığını korur'
      },
      {
        name: 'Lavandula Angustifolia',
        effect: 'Yatıştırıcı ve onarıcı: Tahriş olmuş cildi sakinleştirir, hoş koku sağlar ve tırnak çevresini yumuşatır'
      }
    ],
    usage: [
      'Ayaklarınızı iyice temizleyip kurulayın',
      'Birkaç damla serumu doğrudan tırnaklarınıza ve tırnak çevresindeki cilde uygulayın',
      'Serumun tamamen emilmesi için hafifçe masaj yapın'
    ],
    recommendation: 'En etkili sonuçlar için sabah ve akşam olmak üzere günde 2 kez düzenli kullanılması tavsiye edilir. Düzenli kullanımda 2-4 hafta içinde gözle görülür sonuçlar alabilirsiniz.',
    category: 'Tırnak Bakımı',
    usageAreas: [
      'Tırnak mantarı eğilimi',
      'Mat ve yıpranmış tırnaklar',
      'Kötü koku sorunu',
      'Genel ayak ve tırnak bakımı'
    ]
  }
];

// FAQ Data
export const faqData = [
  {
    id: 1,
    question: 'Podoloji Nedir?',
    answer: 'Podoloji, ayak ve tırnak sağlığının korunması, bakımı ve sorunlarının önlenmesiyle ilgilenen sağlık bilimidir. Podologlar, cerrahi olmayan medikal yöntemlerle batık tırnak, tırnak mantarı, nasır, çatlak topuk, siğil ve diyabetik ayak bakımı gibi sorunlara kalıcı çözümler sunar.',
    category: 'Genel'
  },
  {
    id: 2,
    question: 'Podolog Ne İş Yapar?',
    answer: 'Podolog; Üniversitelerin Podoloji Programı\'ndan mezun olan, bireylerin ayak sağlığının korunması ve bakımına yönelik hizmet veren, ve ilgili uzman tabibin (hekim) teşhisine ve tedavi için yönlendirmesine bağlı olarak hastaların ayak tedavisini yapan sağlık teknikeri olarak tanımlanır.',
    category: 'Genel'
  },
  {
    id: 3,
    question: 'Batık Tırnak Tedavisi Ne Kadar Sürer ve Ağrılı Bir İşlem midir?',
    answer: 'Batık tırnak tedavisi (tel sistemi), sorunun şiddetine bağlı olarak 3 ila 9 ay sürebilir. İşlem sırasında lokal anestezi uygulanmadığı için hafif bir hassasiyet hissedilebilir, ancak ağrılı bir işlem değildir. Medipodo\'da uygulanan modern podolojik yöntemler, tırnağın doğal büyüme yönünü düzelterek kalıcı çözüm sağlar.',
    category: 'Tedavi'
  },
  {
    id: 4,
    question: 'Tırnak Mantarı Evde Uygulanan Doğal Yöntemlerle Geçer mi?',
    answer: 'Tırnak mantarı (Onikomikoz) inatçı bir enfeksiyondur ve sirke, karbonat gibi doğal yöntemler genellikle yetersiz kalır. Kalıcı çözüm için tırnağın küretajı, lazer veya özel antifungal ürünler (Pedizone) ile kombine edilen podolojik tedavi gereklidir.',
    category: 'Tedavi',
    link: { text: 'Pedizone ürünlerini inceleyin', url: 'https://www.pedizone.com' }
  },
  {
    id: 5,
    question: 'Nasır ve Siğil Arasındaki Fark Nedir? Yanlış Tedavi Neden Tehlikelidir?',
    answer: 'Nasır, sürtünme ve baskı sonucu oluşan ölü deri kalınlaşmasıdır. Siğil ise HPV virüsünün neden olduğu bulaşıcı bir lezyondur. Yanlış teşhis ve bilinçsiz asitli ilaç kullanımı, siğilin yayılmasına veya nasırın derinleşmesine neden olabilir. Doğru teşhis ve tedavi için mutlaka bir podoloğa başvurulmalıdır.',
    category: 'Tedavi',
    link: { text: 'Detaylı bilgi için blog yazımızı okuyun', url: '/blog/nasir-sigil-farklari' }
  },
  {
    id: 6,
    question: 'Diyabetik Ayak Bakımı Neden Kritik Önem Taşır?',
    answer: 'Diyabet hastalarında sinir hasarı (nöropati) ve dolaşım bozukluğu (anjiyopati) nedeniyle küçük yaralar dahi hızla enfeksiyona dönüşebilir. Diyabetik ayak bakımı, bu yaraların oluşumunu önlemek ve olası riskleri erken tespit etmek için hayati önem taşır. Medipodo\'da özel diyabetik ayak bakımı hizmeti sunulmaktadır.',
    category: 'Özel Bakım',
    link: { text: 'Diyabet ve ayak sağlığı hakkında daha fazla bilgi', url: '/blog/diyabet-ve-ayak-sagligi' }
  },
  {
    id: 7,
    question: 'Medikal Ayak Bakımı ile Pedikür Arasındaki Temel Fark Nedir?',
    answer: 'Pedikür, estetik ve kozmetik bir işlemdir. Medikal ayak bakımı ise podologlar tarafından, steril aletler ve bilimsel yöntemlerle, tırnak ve cilt sorunlarını (nasır, mantar, kalınlaşmış tırnak) tedavi etmeye yönelik uygulanan bir sağlık hizmetidir. Medikal bakımda kesici aletler kullanılmaz ve enfeksiyon riski sıfırdır.',
    category: 'Genel'
  },
  {
    id: 8,
    question: 'Ayak Analizi Nedir ve Kimler Yaptırmalıdır?',
    answer: 'Ayak analizi, ayaklarınızın basış şeklini, vücut ağırlığı dağılımını ve varsa basış bozukluklarını tespit eden detaylı bir incelemedir. Sporcular, diyabet hastaları ve kronik ayak/diz/bel ağrısı çeken herkesin yaptırması önerilir. Ankara Bağlıca\'daki kliniğimizde detaylı ayak analizi hizmeti sunulmaktadır.',
    category: 'Hizmetler',
    link: { text: 'Ayak analizi hakkında detaylı bilgi', url: '/ayak-analizi' }
  },
  {
    id: 9,
    question: 'Ayak Yorgunluğunu Evde Hangi Yöntemlerle Azaltabilirim?',
    answer: 'Ayak yorgunluğunu azaltmak için kontrast banyoları (sıcak-soğuk su), ayakları kalp seviyesinden yukarıda tutmak ve doğru ayakkabı seçimi önemlidir. Ayrıca, masaj sırasında Pedizone ürünleri gibi dolaşımı destekleyen ürünler kullanmak rahatlamaya yardımcı olur.',
    category: 'Bakım'
  },
  {
    id: 10,
    question: 'Çatlak Topuklar İçin En Etkili Bakım Ürünü Nedir?',
    answer: 'Çatlak topuklar genellikle nem eksikliği ve keratin birikimi sonucu oluşur. Podologlar, cildin nem tutma kapasitesini artıran ve ölü deriyi nazikçe çözen yüksek oranda Üre içeren kremleri tavsiye eder. Pedizone %15 Üreli Yoğun Onarıcı Krem, bu tür sorunlar için idealdir.',
    category: 'Bakım',
    link: { text: 'Ürünü inceleyin', url: '/urun/pedizone-urea-intense-repair-cream' }
  },
  {
    id: 11,
    question: 'Medipodo\'dan Randevu Almadan Önce Hazırlık Yapmalı mıyım?',
    answer: 'Hayır, randevuya gelmeden önce herhangi bir özel hazırlık yapmanıza gerek yoktur. Özellikle tırnak mantarı veya batık gibi sorunlarda, durumu değiştirecek müdahalelerden kaçınmanız teşhis için daha iyi olacaktır. Kliniğimizde hijyenik ve profesyonel ortamda tüm işlemleriniz yapılacaktır.',
    category: 'Randevu'
  },
  {
    id: 12,
    question: 'Kriyoterapi Nedir ve Podolojide Hangi Sorunların Tedavisinde Kullanılır?',
    answer: 'Kriyoterapi, sıvı nitrojen veya karbondioksit gibi çok soğuk maddeler kullanılarak sorunlu dokunun dondurulup yok edilmesi işlemidir. Podolojide bu yöntem, özellikle inatçı ve yaygın ayak siğillerinin tedavisinde kullanılır. İşlem, kısa süreli ve etkilidir.',
    category: 'Tedavi'
  },
  {
    id: 13,
    question: 'B/S Bant Uygulaması Nedir ve Batık Tırnakta Acı Hissedilir mi?',
    answer: 'B/S Bant uygulaması, batık tırnağın yan kenarlarını nazikçe yukarı çekerek tırnak yatağındaki baskıyı azaltan, şeffaf ve esnek bir bantlama yöntemidir. Uygulama sırasında kesinlikle acı hissedilmez. Aksine, tırnak yatağındaki baskı hemen azaldığı için anında rahatlama sağlar. Bu yöntem, tel uygulamasına alternatif olarak kullanılabilir.',
    category: 'Tedavi'
  },
  {
    id: 14,
    question: 'Podolojik Ortez (Parmak Arası Silikon Destek) Ne İşe Yarar?',
    answer: 'Podolojik ortezler, parmaklarda oluşan şekil bozukluklarını (çekiç parmak, pençe parmak) düzeltmek, parmak aralarındaki sürtünmeyi (nasır oluşumu) engellemek veya ayak deformitelerine destek sağlamak amacıyla kişiye özel olarak hazırlanan silikon desteklerdir. Yanlış basıştan kaynaklanan ağrıları azaltmada etkilidir.',
    category: 'Hizmetler'
  },
  {
    id: 15,
    question: 'Tırnak Mantarı Tedavisinde Lazer Kullanımı Ne Kadar Etkilidir?',
    answer: 'Tırnak mantarı tedavisinde lazer, mantar sporlarını ısı enerjisiyle yok etmede oldukça etkili bir yöntemdir. Özellikle ilaç tedavisine yanıt vermeyen veya sistemik ilaç kullanmak istemeyen hastalar için idealdir. Lazer tedavisi, genellikle diğer podolojik bakımlarla kombine edilerek uygulanır.',
    category: 'Tedavi'
  },
  {
    id: 16,
    question: 'Düz Tabanlık (Pes Planus) Yetişkinlerde Tedavi Edilebilir mi?',
    answer: 'Yetişkinlerde düz tabanlık tamamen \'tedavi\' edilemez, ancak semptomları ve neden olduğu ağrılar yönetilebilir. Tedavideki temel amaç, kişiye özel hazırlanan tabanlıklar (ortezler) ile ayağın doğru pozisyonda desteklenmesi ve kasların güçlendirilmesidir. Bu sayede ağrı ve yorgunluk büyük ölçüde azalır.',
    category: 'Tedavi'
  },
  {
    id: 17,
    question: 'Ayaklardaki Kötü Koku, Tırnak Mantarının Bir Belirtisi Olabilir mi?',
    answer: 'Evet, ayak kokusu genellikle bakteriyel üremeden kaynaklansa da, tırnak veya ayak derisi mantarı da kötü kokuya neden olabilir. Mantar enfeksiyonu, ciltte nemli ve sıcak bir ortam yaratarak bakterilerin çoğalmasını hızlandırır. Koku devam ediyorsa, mantar kontrolü için podoloğa başvurulmalıdır.',
    category: 'Bakım'
  },
  {
    id: 18,
    question: 'Çocuklarda Tırnak Batması Neden Olur ve Nasıl Tedavi Edilir?',
    answer: 'Çocuklarda tırnak batması genellikle yanlış tırnak kesimi, dar ayakkabılar veya genetik yatkınlık nedeniyle oluşur. Tedavide ilk tercih, ağrısız ve cerrahi olmayan tel veya bant uygulamalarıdır. Çocuklarda cerrahi müdahale en son çare olarak düşünülmelidir.',
    category: 'Özel Bakım'
  },
  {
    id: 19,
    question: 'Ayak Analizi Sonucu Hazırlanan Kişiye Özel Tabanlıkların Ömrü Ne Kadardır?',
    answer: 'Kişiye özel tabanlıkların ömrü, kullanılan malzemeye, kişinin kilosuna ve kullanım sıklığına bağlı olarak değişir. Ortalama olarak 1 ila 2 yıl arasında kullanılması önerilir. Çocuklarda ise ayak gelişimi devam ettiği için bu süre daha kısa olabilir. Düzenli kontrol ve analiz ile tabanlıkların etkinliği takip edilmelidir.',
    category: 'Hizmetler'
  },
  {
    id: 20,
    question: 'Sporcular İçin Ayak Bakımında En Önemli İki Kural Nedir?',
    answer: 'Sporcular için en önemli iki kural: 1) Doğru Ayakkabı Seçimi: Yapılan spora uygun, ayağı destekleyen ve nefes alan ayakkabılar tercih edilmelidir. 2) Antrenman Sonrası Hijyen: Ayaklar hemen yıkanmalı, parmak araları dahil tamamen kurulanmalı ve mantar oluşumunu önleyici ürünler kullanılmalıdır.',
    category: 'Bakım'
  }
];

