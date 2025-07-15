import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Shield, 
  Award, 
  Users, 
  Phone, 
  MapPin, 
  Instagram,
  CheckCircle,
  Star,
  Stethoscope,
  Microscope,
  Heart,
  Globe,
  Clock,
  Zap,
  Leaf,
  Target,
  TrendingUp,
  UserCheck
} from 'lucide-react'
import './App.css'

// Import product images
import serumImage1 from './assets/pedizone-mantar-serumu-50ml-medipodo.jpg'
import serumImage2 from './assets/pedizone-tirnak-mantari-icin-serum-PediZoneSerum-50-ml.jpg'
import shampooImage from './assets/pedizone-shampoo-200ml.jpg'
import creamImage from './assets/pedizone-cream-150ml.jpg'

// Multi-language content
const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      products: 'Ürünler',
      about: 'Hakkımızda',
      contact: 'İletişim',
      benefits: 'Faydalar',
      usage: 'Kullanım'
    },
    hero: {
      title: 'PediZone',
      subtitle: 'Gelişmiş Ayak Bakım Formülü',
      description: 'Podologların beklentileriyle geliştirilen, klinik olarak test edilmiş ayak sağlığı ürünleri. Tırnak ve Ayak Mantarları, Kötü Koku, Topuk Çatlakları ve Nasırlara karşı etkili çözümler sunar.',
      cta: 'Ürünleri İncele',
      podologyRecommended: 'Podologlar Tarafından Önerilen',
      extendedDescription: 'Ayak sağlığı problemleri günlük yaşam kalitenizi olumsuz etkileyebilir. PediZone ürün serisi, ayak mantarı, tırnak mantarı, kötü koku, çatlaklar ve nasırlar gibi yaygın sorunlara karşı bilimsel olarak formüle edilmiş çözümler sunar.'
    },
    products: {
      title: 'Ürünlerimiz',
      subtitle: 'Profesyonel ayak sağlığı için geliştirilmiş kapsamlı ürün serisi',
      serum: {
        name: 'PediZone 50 Ml Mantar Karşıtı Ayak Ve Tırnak Serumu',
        description: 'Beta Hidroksit Asit (BHA) ve Salisilik Asit ile formüle edilmiş, sağlıksız dokuları etkili şekilde temizler. Çay Ağacı, Kekik ve Lavanta yağlarının sinerjik karışımı ile güçlendirilmiştir.',
        features: ['Antifungal etki', 'Günlük kullanım', 'Hızla emilir', 'Doğal aktif bileşenler'],
        benefits: ['Mantar enfeksiyonlarını önler', 'Tırnak sağlığını destekler', 'Antibakteriyel koruma', 'Deri yenilenmesini hızlandırır'],
        usage: 'Temiz ve kuru ayaklara günde 2 kez uygulayın. Etkilenen bölgeye damlatarak masaj yapın.'
      },
      shampoo: {
        name: 'PediZone 200 Ml Mantar Karşıtı Ayak Şampuanı',
        description: 'Çay ağacı yağı ve mentol içeriği ile ayak mantarına karşı etkili koruma sağlar. Günlük kullanım için formüle edilmiş ferahlatıcı şampuan.',
        features: ['Çay ağacı yağı', 'Mentol içeriği', 'Ferahlatıcı etki', 'Günlük kullanım'],
        benefits: ['Kötü kokuyu giderir', 'Ayak hijyenini sağlar', 'Serinletici etki', 'pH dengesini korur'],
        usage: 'Islak ayaklara uygulayın, köpürtün ve 2-3 dakika bekletin. Bol suyla durulayın.'
      },
      cream: {
        name: 'PediZone 150 Ml Yoğun Ayak Nemlendirici Krem',
        description: 'Shea yağı, allantoin ve E vitamini ile zenginleştirilmiş yoğun nemlendirici krem. Çatlak ve kuruluğa karşı etkili koruma sağlar.',
        features: ['Shea yağı', 'E vitamini', 'Yoğun nemlendirici', 'Hızla emilir'],
        benefits: ['Çatlakları onarır', 'Derin nemlendirme', 'Yumuşaklık sağlar', 'Koruyucu bariyer oluşturur'],
        usage: 'Temiz ayaklara günde 2-3 kez uygulayın. Özellikle topuk ve ayak tabanına masaj yapın.'
      }
    },
    features: {
      title: 'Neden PediZone?',
      clinicalTested: {
        title: 'Klinik Olarak Test Edilmiş',
        description: 'Tüm ürünlerimiz bağımsız laboratuvarlarda test edilmiş ve güvenliği onaylanmıştır.'
      },
      podologyApproved: {
        title: 'Podolog Onaylı',
        description: 'Podologlar tarafından önerilen ve güvenilen formüller.'
      },
      naturalIngredients: {
        title: 'Doğal İçerikler',
        description: 'Çay ağacı yağı, lavanta ve kekik gibi doğal aktif bileşenler içerir.'
      },
      fastAction: {
        title: 'Hızlı Etki',
        description: '2-3 hafta düzenli kullanımda görünür sonuçlar alın.'
      },
      dailyUse: {
        title: 'Günlük Kullanım',
        description: 'Hassas ciltler için uygun, günlük kullanıma uygun formül.'
      },
      scientificFormula: {
        title: 'Bilimsel Formül',
        description: 'Kanıtlanmış aktif bileşenlerle geliştirilmiş etkili formülasyon.'
      }
    },
    about: {
      title: 'Hakkımızda',
      description: 'PediZone®, ayak sağlığı alanında podologların beklentileriyle geliştirilen profesyonel ürün serisidir. Türkiye\'de formüle edilen ürünlerimiz, en yüksek kalite standartlarında üretilmektedir.',
      mission: 'Misyonumuz, ayak sağlığı sorunlarına etkili ve güvenli çözümler sunarak, insanların yaşam kalitesini artırmaktır.',
      vision: 'Vizyonumuz, ayak sağlığı alanında Türkiye\'nin önde gelen markası olmak ve uluslararası pazarda tanınan bir marka haline gelmektir.',
      values: 'Kalite, güvenilirlik ve müşteri memnuniyeti temel değerlerimizdir.'
    },
    footHealth: {
      title: 'Ayak Sağlığının Önemi',
      description: 'Ayaklarımız günlük yaşamımızın temel taşıdır. Sağlıklı ayaklar, aktif ve kaliteli bir yaşam için vazgeçilmezdir.',
      problems: {
        title: 'Yaygın Ayak Sorunları',
        fungus: {
          title: 'Ayak Mantarı',
          description: 'Nemli ortamlarda gelişen mantar enfeksiyonları, kaşıntı ve kötü kokuya neden olur.'
        },
        dryness: {
          title: 'Kuruluk ve Çatlaklar',
          description: 'Yetersiz nem, ayak tabanında ağrılı çatlakların oluşmasına yol açar.'
        },
        odor: {
          title: 'Kötü Koku',
          description: 'Bakteriyel büyüme ve ter birikimi, rahatsız edici kokuların oluşmasına neden olur.'
        },
        calluses: {
          title: 'Nasır ve Kalınlaşma',
          description: 'Sürekli basınç ve sürtünme, deri kalınlaşmasına ve nasır oluşumuna yol açar.'
        }
      }
    },
    testimonials: {
      title: 'Danışan Yorumları',
      podologist1: {
        name: 'Ayşe Kaya',
        title: 'Podolog',
        comment: 'PediZone ürünlerini hastalarıma güvenle öneriyorum. Klinik sonuçları çok başarılı.'
      },
      patient1: {
        name: 'Mehmet Özkan',
        title: 'Hasta',
        comment: 'Ayak mantarı problemi için kullandım, 2 hafta içinde belirgin iyileşme gördüm.'
      },
      patient2: {
        name: 'Fatma Demir',
        title: 'Danışan',
        comment: 'Kreminin nemlendirici etkisi harika, ayaklarım artık çok daha yumuşak.'
      },
      patient3: {
        name: 'Ali Yılmaz',
        title: 'Hasta',
        comment: 'Şampuanı kullandıktan sonra ayak kokum tamamen geçti. Çok memnunum.'
      },
      patient4: {
        name: 'Zeynep Aktaş',
        title: 'Danışan',
        comment: 'Topuk çatlaklarım için kullandım, 3 haftada müthiş bir iyileşme oldu.'
      }
    },
    usage: {
      title: 'Kullanım Talimatları',
      subtitle: 'Maksimum fayda için doğru kullanım önemlidir',
      steps: {
        step1: {
          title: 'Temizlik',
          description: 'Ayaklarınızı ılık suyla yıkayın ve iyice kurutun.'
        },
        step2: {
          title: 'Uygulama',
          description: 'Ürünü etkilenen bölgeye uygun miktarda uygulayın.'
        },
        step3: {
          title: 'Masaj',
          description: 'Dairesel hareketlerle nazikçe masaj yapın.'
        },
        step4: {
          title: 'Bekleme',
          description: 'Ürünün emilmesini bekleyin, gerekirse tekrarlayın.'
        }
      }
    },
    contact: {
      title: 'İletişim',
      address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
      phone: '05068860326',
      instagram: 'pediz0ne',
      getInTouch: 'Bizimle İletişime Geçin',
      workingHours: 'Çalışma Saatleri: Pazartesi - Cuma 09:00 - 18:00'
    },
    footer: {
      rights: '© 2025 PediZone®. Tüm hakları saklıdır.',
      developed: 'Podologların beklentileriyle geliştirilmiştir.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      benefits: 'Benefits',
      usage: 'Usage'
    },
    hero: {
      title: 'PediZone',
      subtitle: 'Advanced Foot Care Formula',
      description: 'Clinically tested foot health products developed with podologists\' expectations. Effective solutions against fungal infections, bad odor, cracks and calluses.',
      cta: 'Explore Products',
      podologyRecommended: 'Recommended by Podologists',
      extendedDescription: 'Foot health problems can negatively affect your daily quality of life. PediZone product series offers scientifically formulated solutions against common problems such as foot fungus, nail fungus, bad odor, cracks and calluses.'
    },
    products: {
      title: 'Our Products',
      subtitle: 'Comprehensive product series developed for professional foot health',
      serum: {
        name: 'PediZone 50 Ml Antifungal Foot And Nail Serum',
        description: 'Formulated with Beta Hydroxy Acid (BHA) and Salicylic Acid, effectively removes dead skin cells. Enhanced with synergistic blend of Tea Tree, Thyme and Lavender oils.',
        features: ['Antifungal effect', 'Daily use', 'Fast absorption', 'Natural active ingredients'],
        benefits: ['Prevents fungal infections', 'Supports nail health', 'Antibacterial protection', 'Accelerates skin renewal'],
        usage: 'Apply twice daily to clean and dry feet. Drop onto affected area and massage.'
      },
      shampoo: {
        name: 'PediZone 200 Ml Antifungal Foot Shampoo',
        description: 'Provides effective protection against foot fungus with tea tree oil and menthol content. Refreshing shampoo formulated for daily use.',
        features: ['Tea tree oil', 'Menthol content', 'Refreshing effect', 'Daily use'],
        benefits: ['Eliminates bad odor', 'Ensures foot hygiene', 'Cooling effect', 'Maintains pH balance'],
        usage: 'Apply to wet feet, lather and wait 2-3 minutes. Rinse thoroughly with water.'
      },
      cream: {
        name: 'PediZone 150 Ml Intensive Foot Moisturizing Cream',
        description: 'Intensive moisturizing cream enriched with Shea butter, allantoin and vitamin E. Provides effective protection against cracks and dryness.',
        features: ['Shea butter', 'Vitamin E', 'Intensive moisturizer', 'Fast absorption'],
        benefits: ['Repairs cracks', 'Deep moisturizing', 'Provides softness', 'Creates protective barrier'],
        usage: 'Apply 2-3 times daily to clean feet. Massage especially on heels and soles.'
      }
    },
    features: {
      title: 'Why PediZone?',
      clinicalTested: {
        title: 'Clinically Tested',
        description: 'All our products have been tested in independent laboratories and their safety has been confirmed.'
      },
      podologyApproved: {
        title: 'Podology Approved',
        description: 'Formulas recommended and trusted by podologists.'
      },
      naturalIngredients: {
        title: 'Natural Ingredients',
        description: 'Contains natural active ingredients such as tea tree oil, lavender and thyme.'
      },
      fastAction: {
        title: 'Fast Action',
        description: 'Get visible results with 2-3 weeks of regular use.'
      },
      dailyUse: {
        title: 'Daily Use',
        description: 'Suitable for sensitive skin, formula suitable for daily use.'
      },
      scientificFormula: {
        title: 'Scientific Formula',
        description: 'Effective formulation developed with proven active ingredients.'
      }
    },
    about: {
      title: 'About Us',
      description: 'PediZone® is a professional product series developed with podologists\' expectations in the field of foot health. Our products formulated in Turkey are produced to the highest quality standards.',
      mission: 'Our mission is to improve people\'s quality of life by providing effective and safe solutions to foot health problems.',
      vision: 'Our vision is to become Turkey\'s leading brand in foot health and become an internationally recognized brand.',
      values: 'Quality, reliability and customer satisfaction are our core values.'
    },
    footHealth: {
      title: 'Importance of Foot Health',
      description: 'Our feet are the foundation of our daily life. Healthy feet are essential for an active and quality life.',
      problems: {
        title: 'Common Foot Problems',
        fungus: {
          title: 'Foot Fungus',
          description: 'Fungal infections that develop in humid environments cause itching and bad odor.'
        },
        dryness: {
          title: 'Dryness and Cracks',
          description: 'Insufficient moisture leads to painful cracks on the sole of the foot.'
        },
        odor: {
          title: 'Bad Odor',
          description: 'Bacterial growth and sweat accumulation cause disturbing odors.'
        },
        calluses: {
          title: 'Calluses and Thickening',
          description: 'Constant pressure and friction lead to skin thickening and callus formation.'
        }
      }
    },
    testimonials: {
      title: 'Client Reviews',
      podologist1: {
        name: 'Ayşe Kaya',
        title: 'Podologist',
        comment: 'I confidently recommend PediZone products to my patients. Clinical results are very successful.'
      },
      patient1: {
        name: 'Mehmet Özkan',
        title: 'Patient',
        comment: 'I used it for foot fungus problem, I saw significant improvement within 2 weeks.'
      },
      patient2: {
        name: 'Fatma Demir',
        title: 'Client',
        comment: 'The moisturizing effect of the cream is amazing, my feet are much softer now.'
      },
      patient3: {
        name: 'Ali Yılmaz',
        title: 'Patient',
        comment: 'After using the shampoo, my foot odor completely disappeared. I am very satisfied.'
      },
      patient4: {
        name: 'Zeynep Aktaş',
        title: 'Client',
        comment: 'I used it for my heel cracks, there was an amazing improvement in 3 weeks.'
      }
    },
    usage: {
      title: 'Usage Instructions',
      subtitle: 'Proper use is important for maximum benefit',
      steps: {
        step1: {
          title: 'Cleaning',
          description: 'Wash your feet with warm water and dry thoroughly.'
        },
        step2: {
          title: 'Application',
          description: 'Apply an appropriate amount of product to the affected area.'
        },
        step3: {
          title: 'Massage',
          description: 'Gently massage in circular motions.'
        },
        step4: {
          title: 'Waiting',
          description: 'Wait for the product to be absorbed, repeat if necessary.'
        }
      }
    },
    contact: {
      title: 'Contact',
      address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
      phone: '05068860326',
      instagram: 'pediz0ne',
      getInTouch: 'Get In Touch',
      workingHours: 'Working Hours: Monday - Friday 09:00 - 18:00'
    },
    footer: {
      rights: '© 2025 PediZone®. All rights reserved.',
      developed: 'Developed with podologists\' expectations.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      about: 'حولنا',
      contact: 'اتصل بنا',
      benefits: 'الفوائد',
      usage: 'الاستخدام'
    },
    hero: {
      title: 'PediZone',
      subtitle: 'تركيبة متقدمة لرعاية القدم',
      description: 'منتجات صحة القدم المختبرة سريرياً والمطورة وفقاً لتوقعات أطباء الأقدام. حلول فعالة ضد العدوى الفطرية والرائحة الكريهة والتشققات والمسامير.',
      cta: 'استكشف المنتجات',
      podologyRecommended: 'موصى به من قبل أطباء الأقدام',
      extendedDescription: 'مشاكل صحة القدم يمكن أن تؤثر سلباً على جودة حياتك اليومية. سلسلة منتجات PediZone تقدم حلولاً مُركبة علمياً ضد المشاكل الشائعة مثل فطريات القدم وفطريات الأظافر والرائحة الكريهة والتشققات والمسامير.'
    },
    products: {
      title: 'منتجاتنا',
      subtitle: 'سلسلة منتجات شاملة مطورة لصحة القدم المهنية',
      serum: {
        name: 'PediZone 50 مل سيروم مضاد للفطريات للقدم والأظافر',
        description: 'مُركب بحمض البيتا هيدروكسي وحمض الساليسيليك، يزيل خلايا الجلد الميتة بفعالية. مُعزز بمزيج متآزر من زيوت شجرة الشاي والزعتر واللافندر.',
        features: ['تأثير مضاد للفطريات', 'للاستخدام اليومي', 'امتصاص سريع', 'مكونات طبيعية نشطة'],
        benefits: ['يمنع العدوى الفطرية', 'يدعم صحة الأظافر', 'حماية مضادة للبكتيريا', 'يسرع تجديد الجلد'],
        usage: 'يُطبق مرتين يومياً على القدمين النظيفتين والجافتين. يُقطر على المنطقة المصابة ويُدلك.'
      },
      shampoo: {
        name: 'PediZone 200 مل شامبو مضاد للفطريات للقدم',
        description: 'يوفر حماية فعالة ضد فطريات القدم بمحتوى زيت شجرة الشاي والمنثول. شامبو منعش مُركب للاستخدام اليومي.',
        features: ['زيت شجرة الشاي', 'محتوى المنثول', 'تأثير منعش', 'للاستخدام اليومي'],
        benefits: ['يزيل الرائحة الكريهة', 'يضمن نظافة القدم', 'تأثير مبرد', 'يحافظ على توازن الحموضة'],
        usage: 'يُطبق على القدمين المبللتين، يُرغى ويُترك لمدة 2-3 دقائق. يُشطف جيداً بالماء.'
      },
      cream: {
        name: 'PediZone 150 مل كريم مرطب مكثف للقدم',
        description: 'كريم مرطب مكثف مُغنى بزبدة الشيا والألانتوين وفيتامين E. يوفر حماية فعالة ضد التشققات والجفاف.',
        features: ['زبدة الشيا', 'فيتامين E', 'مرطب مكثف', 'امتصاص سريع'],
        benefits: ['يصلح التشققات', 'ترطيب عميق', 'يوفر النعومة', 'ينشئ حاجز واقي'],
        usage: 'يُطبق 2-3 مرات يومياً على القدمين النظيفتين. يُدلك خاصة على الكعبين وباطن القدم.'
      }
    },
    features: {
      title: 'لماذا PediZone؟',
      clinicalTested: {
        title: 'مختبر سريرياً',
        description: 'جميع منتجاتنا تم اختبارها في مختبرات مستقلة وتم تأكيد سلامتها.'
      },
      podologyApproved: {
        title: 'معتمد من طب الأقدام',
        description: 'تركيبات موصى بها وموثوقة من قبل أطباء الأقدام.'
      },
      naturalIngredients: {
        title: 'مكونات طبيعية',
        description: 'يحتوي على مكونات طبيعية نشطة مثل زيت شجرة الشاي واللافندر والزعتر.'
      },
      fastAction: {
        title: 'فعالية سريعة',
        description: 'احصل على نتائج مرئية مع 2-3 أسابيع من الاستخدام المنتظم.'
      },
      dailyUse: {
        title: 'للاستخدام اليومي',
        description: 'مناسب للبشرة الحساسة، تركيبة مناسبة للاستخدام اليومي.'
      },
      scientificFormula: {
        title: 'تركيبة علمية',
        description: 'تركيبة فعالة مطورة بمكونات نشطة مثبتة.'
      }
    },
    about: {
      title: 'حولنا',
      description: 'PediZone® هي سلسلة منتجات احترافية طُورت وفقاً لتوقعات أطباء الأقدام في مجال صحة القدم. منتجاتنا المُركبة في تركيا يتم إنتاجها وفقاً لأعلى معايير الجودة.',
      mission: 'مهمتنا هي تحسين جودة حياة الناس من خلال توفير حلول فعالة وآمنة لمشاكل صحة القدم.',
      vision: 'رؤيتنا هي أن نصبح العلامة التجارية الرائدة في تركيا في مجال صحة القدم وأن نصبح علامة تجارية معترف بها دولياً.',
      values: 'الجودة والموثوقية ورضا العملاء هي قيمنا الأساسية.'
    },
    footHealth: {
      title: 'أهمية صحة القدم',
      description: 'أقدامنا هي أساس حياتنا اليومية. الأقدام الصحية ضرورية لحياة نشطة وذات جودة.',
      problems: {
        title: 'مشاكل القدم الشائعة',
        fungus: {
          title: 'فطريات القدم',
          description: 'العدوى الفطرية التي تتطور في البيئات الرطبة تسبب الحكة والرائحة الكريهة.'
        },
        dryness: {
          title: 'الجفاف والتشققات',
          description: 'الرطوبة غير الكافية تؤدي إلى تشققات مؤلمة في باطن القدم.'
        },
        odor: {
          title: 'الرائحة الكريهة',
          description: 'النمو البكتيري وتراكم العرق يسببان روائح مزعجة.'
        },
        calluses: {
          title: 'المسامير والسماكة',
          description: 'الضغط المستمر والاحتكاك يؤديان إلى سماكة الجلد وتكوين المسامير.'
        }
      }
    },
    testimonials: {
      title: 'آراء المراجعين',
      podologist1: {
        name: 'عائشة كايا',
        title: 'طبيب أقدام',
        comment: 'أوصي بثقة بمنتجات PediZone لمرضاي. النتائج السريرية ناجحة جداً.'
      },
      patient1: {
        name: 'محمد أوزكان',
        title: 'مريض',
        comment: 'استخدمته لمشكلة فطريات القدم، رأيت تحسناً ملحوظاً خلال أسبوعين.'
      },
      patient2: {
        name: 'فاطمة ديمير',
        title: 'مراجع',
        comment: 'تأثير الكريم المرطب رائع، قدماي أصبحتا أكثر نعومة الآن.'
      },
      patient3: {
        name: 'علي يلماز',
        title: 'مريض',
        comment: 'بعد استخدام الشامبو، اختفت رائحة قدمي تماماً. أنا راضٍ جداً.'
      },
      patient4: {
        name: 'زينب أكتاش',
        title: 'مراجع',
        comment: 'استخدمته لتشققات كعبي، حدث تحسن مذهل في 3 أسابيع.'
      }
    },
    usage: {
      title: 'تعليمات الاستخدام',
      subtitle: 'الاستخدام الصحيح مهم للحصول على أقصى فائدة',
      steps: {
        step1: {
          title: 'التنظيف',
          description: 'اغسل قدميك بالماء الدافئ وجففهما جيداً.'
        },
        step2: {
          title: 'التطبيق',
          description: 'ضع كمية مناسبة من المنتج على المنطقة المصابة.'
        },
        step3: {
          title: 'التدليك',
          description: 'دلك بلطف بحركات دائرية.'
        },
        step4: {
          title: 'الانتظار',
          description: 'انتظر حتى يتم امتصاص المنتج، كرر إذا لزم الأمر.'
        }
      }
    },
    contact: {
      title: 'اتصل بنا',
      address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
      phone: '05068860326',
      instagram: 'pediz0ne',
      getInTouch: 'تواصل معنا',
      workingHours: 'ساعات العمل: الاثنين - الجمعة 09:00 - 18:00'
    },
    footer: {
      rights: '© 2025 PediZone®. جميع الحقوق محفوظة.',
      developed: 'طُور وفقاً لتوقعات أطباء الأقدام.'
    }
  }
}

function App() {
  const [currentLang, setCurrentLang] = useState('tr')
  const [isScrolled, setIsScrolled] = useState(false)
  
  const t = translations[currentLang]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const LanguageSelector = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setCurrentLang('tr')}
        className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
          currentLang === 'tr' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
        }`}
      >
        🇹🇷
        <span className="text-sm">TR</span>
      </button>
      <button
        onClick={() => setCurrentLang('en')}
        className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
          currentLang === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
        }`}
      >
        🇬🇧
        <span className="text-sm">EN</span>
      </button>
      <button
        onClick={() => setCurrentLang('ar')}
        className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
          currentLang === 'ar' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
        }`}
      >
        🇸🇦
        <span className="text-sm">AR</span>
      </button>
    </div>
  )

  return (
    <div className={`min-h-screen bg-background ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold pedizone-red">
                PediZone<sup className="text-xs">®</sup>
              </h1>
              <Badge variant="outline" className="pedizone-border-red pedizone-red">
                Advanced Foot Care
              </Badge>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">
                {t.nav.products}
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                {t.nav.contact}
              </button>
            </div>

            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 pedizone-bg-red text-white">
              <Stethoscope className="w-4 h-4 mr-2" />
              {t.hero.podologyRecommended}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="pedizone-red">{t.hero.title}<sup className="text-2xl">®</sup></span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-clinical mb-6 font-medium">
              {t.hero.subtitle}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              {t.hero.extendedDescription}
            </p>
            
            <Button 
              size="lg" 
              className="pedizone-bg-red hover:bg-red-700 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('products')}
            >
              {t.hero.cta}
            </Button>

            <div className="mt-12 flex justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 pedizone-red" />
                <span>Klinik Test Edilmiş</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 pedizone-red" />
                <span>Podolog Onaylı</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 pedizone-red" />
                <span>Doğal İçerikler</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foot Health Importance Section */}
      <section className="py-20 bg-clinical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinical mb-4">{t.footHealth.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.footHealth.description}
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-clinical mb-8 text-center">{t.footHealth.problems.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="medical-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-clinical mb-2">{t.footHealth.problems.fungus.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.footHealth.problems.fungus.description}</p>
                </CardContent>
              </Card>

              <Card className="medical-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-clinical mb-2">{t.footHealth.problems.dryness.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.footHealth.problems.dryness.description}</p>
                </CardContent>
              </Card>

              <Card className="medical-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-clinical mb-2">{t.footHealth.problems.odor.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.footHealth.problems.odor.description}</p>
                </CardContent>
              </Card>

              <Card className="medical-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-clinical mb-2">{t.footHealth.problems.calluses.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.footHealth.problems.calluses.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinical mb-4">{t.products.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Serum */}
            <Card className="product-card medical-shadow">
              <CardHeader>
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={serumImage1} 
                    alt="PediZone Serum" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-clinical text-lg">{t.products.serum.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {t.products.serum.description}
                </CardDescription>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-clinical mb-2">Özellikler:</h4>
                  <div className="space-y-1">
                    {t.products.serum.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 pedizone-red" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-clinical mb-2">Faydalar:</h4>
                  <div className="space-y-1">
                    {t.products.serum.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Target className="w-4 h-4 pedizone-red" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-clinical-light p-3 rounded-lg">
                  <h4 className="font-semibold text-clinical mb-1">Kullanım:</h4>
                  <p className="text-sm text-muted-foreground">{t.products.serum.usage}</p>
                </div>
              </CardContent>
            </Card>

            {/* Shampoo */}
            <Card className="product-card medical-shadow">
              <CardHeader>
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={shampooImage} 
                    alt="PediZone Şampuan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-clinical text-lg">{t.products.shampoo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {t.products.shampoo.description}
                </CardDescription>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-clinical mb-2">Özellikler:</h4>
                  <div className="space-y-1">
                    {t.products.shampoo.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 pedizone-red" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-clinical mb-2">Faydalar:</h4>
                  <div className="space-y-1">
                    {t.products.shampoo.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Target className="w-4 h-4 pedizone-red" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-clinical-light p-3 rounded-lg">
                  <h4 className="font-semibold text-clinical mb-1">Kullanım:</h4>
                  <p className="text-sm text-muted-foreground">{t.products.shampoo.usage}</p>
                </div>
              </CardContent>
            </Card>

            {/* Cream */}
            <Card className="product-card medical-shadow">
              <CardHeader>
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={creamImage} 
                    alt="PediZone Krem" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-clinical text-lg">{t.products.cream.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {t.products.cream.description}
                </CardDescription>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-clinical mb-2">Özellikler:</h4>
                  <div className="space-y-1">
                    {t.products.cream.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 pedizone-red" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-clinical mb-2">Faydalar:</h4>
                  <div className="space-y-1">
                    {t.products.cream.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Target className="w-4 h-4 pedizone-red" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-clinical-light p-3 rounded-lg">
                  <h4 className="font-semibold text-clinical mb-1">Kullanım:</h4>
                  <p className="text-sm text-muted-foreground">{t.products.cream.usage}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Instructions Section */}
      <section className="py-20 bg-clinical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinical mb-4">{t.usage.title}</h2>
            <p className="text-xl text-muted-foreground">{t.usage.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="medical-shadow text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold text-clinical mb-2">{t.usage.steps.step1.title}</h3>
                <p className="text-sm text-muted-foreground">{t.usage.steps.step1.description}</p>
              </CardContent>
            </Card>

            <Card className="medical-shadow text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold text-clinical mb-2">{t.usage.steps.step2.title}</h3>
                <p className="text-sm text-muted-foreground">{t.usage.steps.step2.description}</p>
              </CardContent>
            </Card>

            <Card className="medical-shadow text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold text-clinical mb-2">{t.usage.steps.step3.title}</h3>
                <p className="text-sm text-muted-foreground">{t.usage.steps.step3.description}</p>
              </CardContent>
            </Card>

            <Card className="medical-shadow text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-semibold text-clinical mb-2">{t.usage.steps.step4.title}</h3>
                <p className="text-sm text-muted-foreground">{t.usage.steps.step4.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinical mb-4">{t.features.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-clinical mb-2">
                {t.features.clinicalTested.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.clinicalTested.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-clinical mb-2">
                {t.features.podologyApproved.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.podologyApproved.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-clinical mb-2">
                {t.features.naturalIngredients.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.naturalIngredients.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-clinical mb-2">
                {t.features.fastAction.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.fastAction.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-clinical mb-2">
                {t.features.dailyUse.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.dailyUse.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 pedizone-bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-clinical mb-2">
                {t.features.scientificFormula.title}
              </h3>
              <p className="text-muted-foreground">
                {t.features.scientificFormula.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-clinical-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-clinical mb-8">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.description}
            </p>
            <p className="text-lg text-clinical font-medium mb-6">
              {t.about.mission}
            </p>
            <p className="text-base text-muted-foreground mb-6">
              {t.about.vision}
            </p>
            <p className="text-base text-clinical font-medium">
              {t.about.values}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinical mb-4">{t.testimonials.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="medical-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{t.testimonials.podologist1.comment}"
                </p>
                <div>
                  <p className="font-semibold text-clinical">{t.testimonials.podologist1.name}</p>
                  <p className="text-sm text-muted-foreground">{t.testimonials.podologist1.title}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{t.testimonials.patient1.comment}"
                </p>
                <div>
                  <p className="font-semibold text-clinical">{t.testimonials.patient1.name}</p>
                  <p className="text-sm text-muted-foreground">{t.testimonials.patient1.title}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{t.testimonials.patient2.comment}"
                </p>
                <div>
                  <p className="font-semibold text-clinical">{t.testimonials.patient2.name}</p>
                  <p className="text-sm text-muted-foreground">{t.testimonials.patient2.title}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{t.testimonials.patient3.comment}"
                </p>
                <div>
                  <p className="font-semibold text-clinical">{t.testimonials.patient3.name}</p>
                  <p className="text-sm text-muted-foreground">{t.testimonials.patient3.title}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{t.testimonials.patient4.comment}"
                </p>
                <div>
                  <p className="font-semibold text-clinical">{t.testimonials.patient4.name}</p>
                  <p className="text-sm text-muted-foreground">{t.testimonials.patient4.title}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-clinical-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-clinical mb-4">{t.contact.title}</h2>
              <p className="text-xl text-muted-foreground">{t.contact.getInTouch}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="medical-shadow text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 pedizone-red mx-auto mb-4" />
                  <h3 className="font-semibold text-clinical mb-2">Adres</h3>
                  <p className="text-muted-foreground">{t.contact.address}</p>
                </CardContent>
              </Card>

              <Card className="medical-shadow text-center">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 pedizone-red mx-auto mb-4" />
                  <h3 className="font-semibold text-clinical mb-2">Telefon</h3>
                  <p className="text-muted-foreground">{t.contact.phone}</p>
                  <p className="text-sm text-muted-foreground mt-2">{t.contact.workingHours}</p>
                </CardContent>
              </Card>

              <Card className="medical-shadow text-center">
                <CardContent className="pt-6">
                  <Instagram className="w-8 h-8 pedizone-red mx-auto mb-4" />
                  <h3 className="font-semibold text-clinical mb-2">Instagram</h3>
                  <p className="text-muted-foreground">@{t.contact.instagram}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-clinical text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold pedizone-red mb-4">PediZone<sup className="text-sm">®</sup></h3>
            <p className="text-gray-300 mb-4">{t.footer.developed}</p>
            <Separator className="my-6" />
            <p className="text-gray-400">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

