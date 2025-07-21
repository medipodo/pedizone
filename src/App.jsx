import { useState, useEffect } from 'react'
import './App.css'

// Gerçek ürün görselleri
import productImage1 from './assets/IMG_7570.jpeg'
import productImage2 from './assets/IMG_7571.png'
import productImage3 from './assets/IMG_7572.jpeg'
import productImage4 from './assets/IMG_7574.jpeg'
import productImage5 from './assets/IMG_7575.png'
import productImage6 from './assets/IMG_8135.jpeg'
import productImage7 from './assets/IMG_8137.jpeg'

// Ayak sorunları görselleri
import footFungus from './assets/foot-fungus-problem.jpg'
import footCallus from './assets/foot-callus-problem.jpg'
import footCrack from './assets/foot-crack-problem.jpg'
import footOdor from './assets/foot-odor-problem.jpg'

function App() {
  const [currentLang, setCurrentLang] = useState('tr')

  const translations = {
    tr: {
      nav: {
        home: 'Ana Sayfa',
        products: 'Ürünler',
        about: 'Hakkımızda',
        contact: 'İletişim'
        <a href="/blog/" className="nav-link">Blog</a>
      },
      hero: {
        title: 'PediZone®',
        subtitle: 'Gelişmiş Ayak Bakım Formülü',
        description: 'Podologların beklentileriyle geliştirilen',
        cta: 'Ürünleri İncele'
      },
      features: {
        clinicalTest: 'Klinik Test',
        clinicalTestDesc: 'Uzman görüşleriyle uyumlu içerikler.',
        podologyApproved: 'Podolog Onaylı',
        podologyApprovedDesc: 'Ayak sağlığı uzmanları tarafından önerilen',
        naturalIngredients: 'Doğal İçerikler',
        naturalIngredientsDesc: 'Doğal ve güvenli aktif bileşenler'
      },
      products: {
        title: 'Ürünlerimiz',
        subtitle: 'PediZone® 50ml Serum Varyantları',
        classic: {
          name: 'PediZone® 50 Ml Serum',
          description: 'Günlük ayak bakımı için ideal formül',
          features: [
            'Mantar karşıtı etki',
            'Günlük kullanım',
            'Hızlı emilim',
            'Doğal içerikler'
          ]
        },
        intensive: {
          name: 'PediZone® 50 Ml Serum',
          description: 'Yoğun bakım gerektiren ayaklar için',
          features: [
            'Güçlü mantar karşıtı etki',
            'Derin temizlik',
            'Onarıcı formül',
            'Profesyonel bakım'
          ]
        },
        sensitive: {
          name: 'PediZone® 50 Ml Serum',
          description: 'Kadın Erkek Farketmeksizin',
          features: [
            'Cilt dostu',
            'Yumuşak formül',
            'Haricen kullanım için',
            'Günlük kullanım'
          ]
        }
      },
      whyPedizone: {
        title: 'Neden PediZone®?',
        subtitle: 'Ayak sağlığınız için en iyi çözüm',
        reasons: [
          {
            title: 'Klinik Testler',
            description: 'Laboratuvar ortamında test edilmiş ve kanıtlanmış etkinlik'
          },
          {
            title: 'Podolog Onayı',
            description: 'Ayak sağlığı uzmanları tarafından önerilen güvenilir formül'
          },
          {
            title: 'Doğal İçerikler',
            description: 'Doğal ve güvenli aktif bileşenlerle hazırlanmış'
          }
        ]
      },
      footProblems: {
        title: 'Yaygın Ayak Sorunları',
        subtitle: 'PediZone® ile çözüm bulabileceğiniz ayak problemleri',
        problems: [
          {
            title: 'Ayak Mantarı',
            description: 'Tırnak ve ayak mantarı enfeksiyonları',
            image: footFungus
          },
          {
            title: 'Nasır ve Kalınlaşma',
            description: 'Ayak tabanında oluşan kalın deri tabakası',
            image: footCallus
          },
          {
            title: 'Çatlaklar',
            description: 'Topuk ve ayak çatlakları',
            image: footCrack
          },
          {
            title: 'Ayak Kokusu',
            description: 'Aşırı terleme ve koku problemi',
            image: footOdor
          }
        ]
      },
      usage: {
        title: 'Kullanım Talimatları',
        subtitle: '4 basit adımda etkili ayak bakımı',
        steps: [
          {
            step: '1',
            title: 'Temizlik',
            description: 'Ayaklarınızı ılık suyla yıkayın ve iyice kurutun.'
          },
          {
            step: '2',
            title: 'Uygulama',
            description: 'Ürünü etkilenen bölgeye uygun miktarda uygulayın.'
          },
          {
            step: '3',
            title: 'Masaj',
            description: 'Dairesel hareketlerle nazikçe masaj yapın.'
          },
          {
            step: '4',
            title: 'Bekleme',
            description: 'Ürünün emilmesini bekleyin, gerekirse tekrarlayın.'
          }
        ]
      },
      testimonials: {
        title: 'Kullanıcı Yorumları',
        subtitle: 'Müşterilerimizin deneyimleri',
        reviews: [
          {
            name: 'Gamze B.',
            title: 'Podolog',
            text: 'Podoloji Merkezimde hastalarıma güvenle önerdiğim etkili bir ürün. Sonuçları gerçekten tatmin edici.',
            rating: 5
          },
          {
            name: 'Ayşe K.',
            title: 'Kullanıcı',
            text: 'Yıllardır çektiğim ayak mantarı problemi nihayet çözüldü. Çok memnunum.',
            rating: 5
          },
          {
            name: 'Mustafa D.',
            title: 'Kullanıcı',
            text: 'Etkili ve hızlı sonuç veren bir ürün. Kesinlikle tavsiye ederim.',
            rating: 5
          },
          {
            name: 'Fatma Özkan',
            title: 'Podolog',
            text: 'Klinik pratiğimde sıkça önerdiğim güvenilir bir çözüm.',
            rating: 5
          },
          {
            name: 'Ahmet S.',
            title: 'Kullanıcı',
            text: 'Doğal içerikleri sayesinde hassas cildimde hiç problem yaşamadım.',
            rating: 5
          },
          {
            name: 'Zeynep M.',
            title: 'Kullanıcı',
            text: 'Kullanımı kolay ve etkili. Ayak sağlığım için vazgeçilmez oldu.',
            rating: 5
          }
        ]
      },
      about: {
        title: 'Hakkımızda',
        subtitle: 'Ayak sağlığınız için buradayız',
        content: 'PediZone®, ayak sağlığı alanında uzman ekibimizle geliştirdiğimiz yenilikçi ürünlerle, kullanıcıların ayak sağlığını korumak ve iyileştirmek için çalışmaktadır. Podologların beklentileriyle şekillenen formüllerimiz, en yüksek kalite standartlarında üretilmektedir.',
        mission: 'Misyonumuz, herkesin sağlıklı ayaklara sahip olması için etkili ve güvenli çözümler sunmaktır.',
        vision: 'Vizyonumuz, ayak sağlığı alanında Türkiye\'nin önde gelen markası olmaktır.',
        values: 'Değerlerimiz: Kalite, güvenilirlik, müşteri memnuniyeti ve sürekli gelişim.'
      },
      contact: {
        title: 'İletişim',
        subtitle: 'Bizimle iletişime geçin',
        address: 'Adres',
        addressText: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: 'Telefon',
        phoneText: '05068860326',
        instagram: 'Instagram',
        instagramText: '@pediz0ne'
      },
      footer: {
        company: 'Medipodo Medikal Sağlık Hizmetleri San. Ve Tic. Ltd. Şti.',
        rights: 'Tüm hakları saklıdır.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'PediZone®',
        subtitle: 'Advanced Foot Care Formula',
        description: 'Developed with podologists\' expectations',
        cta: 'Explore Products'
      },
      features: {
        clinicalTest: 'Clinical Test',
        clinicalTestDesc: 'Proven effectiveness in laboratory tests',
        podologyApproved: 'Podologist Approved',
        podologyApprovedDesc: 'Recommended by foot health specialists',
        naturalIngredients: 'Natural Ingredients',
        naturalIngredientsDesc: 'Natural and safe active components'
      },
      products: {
        title: 'Our Products',
        subtitle: 'PediZone® 50ml Serum Variants',
        classic: {
          name: 'PediZone® Classic',
          description: 'Ideal formula for daily foot care',
          features: [
            'Antifungal effect',
            'Daily use',
            'Fast absorption',
            'Natural ingredients'
          ]
        },
        intensive: {
          name: 'PediZone® Intensive',
          description: 'For feet requiring intensive care',
          features: [
            'Strong antifungal effect',
            'Deep cleansing',
            'Restorative formula',
            'Professional care'
          ]
        },
        sensitive: {
          name: 'PediZone® Sensitive',
          description: 'Special formula for sensitive skin',
          features: [
            'Sensitive skin friendly',
            'Gentle formula',
            'Hypoallergenic',
            'Daily use'
          ]
        }
      },
      whyPedizone: {
        title: 'Why PediZone®?',
        subtitle: 'The best solution for your foot health',
        reasons: [
          {
            title: 'Clinical Tests',
            description: 'Tested and proven effectiveness in laboratory environment'
          },
          {
            title: 'Podologist Approval',
            description: 'Reliable formula recommended by foot health specialists'
          },
          {
            title: 'Natural Ingredients',
            description: 'Prepared with natural and safe active components'
          }
        ]
      },
      footProblems: {
        title: 'Common Foot Problems',
        subtitle: 'Foot problems you can solve with PediZone®',
        problems: [
          {
            title: 'Foot Fungus',
            description: 'Nail and foot fungal infections',
            image: footFungus
          },
          {
            title: 'Callus and Thickening',
            description: 'Thick skin layer on the sole',
            image: footCallus
          },
          {
            title: 'Cracks',
            description: 'Heel and foot cracks',
            image: footCrack
          },
          {
            title: 'Foot Odor',
            description: 'Excessive sweating and odor problem',
            image: footOdor
          }
        ]
      },
      usage: {
        title: 'Usage Instructions',
        subtitle: 'Effective foot care in 4 simple steps',
        steps: [
          {
            step: '1',
            title: 'Cleaning',
            description: 'Wash your feet with warm water and dry thoroughly.'
          },
          {
            step: '2',
            title: 'Application',
            description: 'Apply appropriate amount to affected area.'
          },
          {
            step: '3',
            title: 'Massage',
            description: 'Gently massage in circular motions.'
          },
          {
            step: '4',
            title: 'Waiting',
            description: 'Wait for absorption, repeat if necessary.'
          }
        ]
      },
      testimonials: {
        title: 'User Reviews',
        subtitle: 'Our customers\' experiences',
        reviews: [
          {
            name: 'Dr. Mehmet Yılmaz',
            title: 'Podologist',
            text: 'An effective product I confidently recommend to my patients. Results are truly satisfying.',
            rating: 5
          },
          {
            name: 'Ayşe K.',
            title: 'User',
            text: 'My foot fungus problem that I suffered for years is finally solved. Very satisfied.',
            rating: 5
          },
          {
            name: 'Mustafa D.',
            title: 'User',
            text: 'Effective and fast-acting product. Definitely recommend.',
            rating: 5
          },
          {
            name: 'Dr. Fatma Özkan',
            title: 'Podologist',
            text: 'A reliable solution I frequently recommend in my clinical practice.',
            rating: 5
          },
          {
            name: 'Ahmet S.',
            title: 'User',
            text: 'Thanks to natural ingredients, I had no problems with my sensitive skin.',
            rating: 5
          },
          {
            name: 'Zeynep M.',
            title: 'User',
            text: 'Easy to use and effective. Became indispensable for my foot health.',
            rating: 5
          }
        ]
      },
      about: {
        title: 'About Us',
        subtitle: 'We are here for your foot health',
        content: 'PediZone® works to protect and improve our customers\' foot health with innovative products developed by our expert team in the field of foot health. Our formulas, shaped by podologists\' expectations, are produced to the highest quality standards.',
        mission: 'Our mission is to provide effective and safe solutions for everyone to have healthy feet.',
        vision: 'Our vision is to be Turkey\'s leading brand in foot health.',
        values: 'Our values: Quality, reliability, customer satisfaction and continuous improvement.'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Get in touch with us',
        address: 'Address',
        addressText: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: 'Phone',
        phoneText: '05068860326',
        instagram: 'Instagram',
        instagramText: '@pediz0ne'
      },
      footer: {
        company: 'Medipodo Medical Health Services Ind. And Trade Ltd. Co.',
        rights: 'All rights reserved.'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        products: 'المنتجات',
        about: 'حولنا',
        contact: 'اتصل بنا'
      },
      hero: {
        title: 'PediZone®',
        subtitle: 'تركيبة متقدمة لعناية القدم',
        description: 'تم تطويرها وفقاً لتوقعات أطباء الأقدام',
        cta: 'استكشف المنتجات'
      },
      features: {
        clinicalTest: 'اختبار سريري',
        clinicalTestDesc: 'فعالية مثبتة في الاختبارات المعملية',
        podologyApproved: 'معتمد من طبيب الأقدام',
        podologyApprovedDesc: 'موصى به من قبل متخصصي صحة القدم',
        naturalIngredients: 'مكونات طبيعية',
        naturalIngredientsDesc: 'مكونات نشطة طبيعية وآمنة'
      },
      products: {
        title: 'منتجاتنا',
        subtitle: 'متغيرات مصل PediZone® 50 مل',
        classic: {
          name: 'PediZone® كلاسيك',
          description: 'تركيبة مثالية للعناية اليومية بالقدم',
          features: [
            'تأثير مضاد للفطريات',
            'الاستخدام اليومي',
            'امتصاص سريع',
            'مكونات طبيعية'
          ]
        },
        intensive: {
          name: 'PediZone® مكثف',
          description: 'للأقدام التي تتطلب عناية مكثفة',
          features: [
            'تأثير قوي مضاد للفطريات',
            'تنظيف عميق',
            'تركيبة ترميمية',
            'عناية مهنية'
          ]
        },
        sensitive: {
          name: 'PediZone® حساس',
          description: 'تركيبة خاصة للبشرة الحساسة',
          features: [
            'مناسب للبشرة الحساسة',
            'تركيبة لطيفة',
            'مضاد للحساسية',
            'الاستخدام اليومي'
          ]
        }
      },
      whyPedizone: {
        title: 'لماذا PediZone®؟',
        subtitle: 'أفضل حل لصحة قدميك',
        reasons: [
          {
            title: 'اختبارات سريرية',
            description: 'فعالية مختبرة ومثبتة في البيئة المعملية'
          },
          {
            title: 'موافقة طبيب الأقدام',
            description: 'تركيبة موثوقة موصى بها من قبل متخصصي صحة القدم'
          },
          {
            title: 'مكونات طبيعية',
            description: 'محضرة بمكونات نشطة طبيعية وآمنة'
          }
        ]
      },
      footProblems: {
        title: 'مشاكل القدم الشائعة',
        subtitle: 'مشاكل القدم التي يمكنك حلها مع PediZone®',
        problems: [
          {
            title: 'فطريات القدم',
            description: 'التهابات فطرية في الأظافر والقدم',
            image: footFungus
          },
          {
            title: 'الكالو والسماكة',
            description: 'طبقة جلد سميكة على باطن القدم',
            image: footCallus
          },
          {
            title: 'التشققات',
            description: 'تشققات الكعب والقدم',
            image: footCrack
          },
          {
            title: 'رائحة القدم',
            description: 'مشكلة التعرق المفرط والرائحة',
            image: footOdor
          }
        ]
      },
      usage: {
        title: 'تعليمات الاستخدام',
        subtitle: 'عناية فعالة بالقدم في 4 خطوات بسيطة',
        steps: [
          {
            step: '1',
            title: 'التنظيف',
            description: 'اغسل قدميك بالماء الدافئ وجففهما جيداً.'
          },
          {
            step: '2',
            title: 'التطبيق',
            description: 'ضع كمية مناسبة على المنطقة المصابة.'
          },
          {
            step: '3',
            title: 'التدليك',
            description: 'دلك بلطف بحركات دائرية.'
          },
          {
            step: '4',
            title: 'الانتظار',
            description: 'انتظر حتى الامتصاص، كرر إذا لزم الأمر.'
          }
        ]
      },
      testimonials: {
        title: 'آراء المستخدمين',
        subtitle: 'تجارب عملائنا',
        reviews: [
          {
            name: 'د. محمد يلماز',
            title: 'طبيب أقدام',
            text: 'منتج فعال أوصي به بثقة لمرضاي. النتائج مرضية حقاً.',
            rating: 5
          },
          {
            name: 'عائشة ك.',
            title: 'مستخدم',
            text: 'مشكلة فطريات القدم التي عانيت منها لسنوات حُلت أخيراً. راضية جداً.',
            rating: 5
          },
          {
            name: 'مصطفى د.',
            title: 'مستخدم',
            text: 'منتج فعال وسريع المفعول. أنصح به بالتأكيد.',
            rating: 5
          },
          {
            name: 'د. فاطمة أوزكان',
            title: 'طبيب أقدام',
            text: 'حل موثوق أوصي به كثيراً في ممارستي السريرية.',
            rating: 5
          },
          {
            name: 'أحمد س.',
            title: 'مستخدم',
            text: 'بفضل المكونات الطبيعية، لم أواجه أي مشاكل مع بشرتي الحساسة.',
            rating: 5
          },
          {
            name: 'زينب م.',
            title: 'مستخدم',
            text: 'سهل الاستخدام وفعال. أصبح لا غنى عنه لصحة قدمي.',
            rating: 5
          }
        ]
      },
      about: {
        title: 'حولنا',
        subtitle: 'نحن هنا من أجل صحة قدميك',
        content: 'تعمل PediZone® على حماية وتحسين صحة أقدام عملائنا بمنتجات مبتكرة طورها فريقنا المتخصص في مجال صحة القدم. تركيباتنا، المشكلة وفقاً لتوقعات أطباء الأقدام، يتم إنتاجها وفقاً لأعلى معايير الجودة.',
        mission: 'مهمتنا هي توفير حلول فعالة وآمنة لكل شخص ليحصل على أقدام صحية.',
        vision: 'رؤيتنا هي أن نكون العلامة التجارية الرائدة في تركيا في مجال صحة القدم.',
        values: 'قيمنا: الجودة، الموثوقية، رضا العملاء والتحسين المستمر.'
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'تواصل معنا',
        address: 'العنوان',
        addressText: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: 'الهاتف',
        phoneText: '05068860326',
        instagram: 'إنستغرام',
        instagramText: '@pediz0ne'
      },
      footer: {
        company: 'شركة ميديبودو للخدمات الصحية الطبية والتجارة المحدودة',
        rights: 'جميع الحقوق محفوظة.'
      }
    }
  }

  const t = translations[currentLang]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen bg-white ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-600">PediZone<sup className="text-xs">®</sup></span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t.nav.products}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                  {t.nav.contact}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentLang('tr')} 
                className={`p-1 rounded ${currentLang === 'tr' ? 'bg-red-100' : 'hover:bg-gray-100'} transition-colors`}
                title="Türkçe"
              >
                🇹🇷
              </button>
              <button 
                onClick={() => setCurrentLang('en')} 
                className={`p-1 rounded ${currentLang === 'en' ? 'bg-red-100' : 'hover:bg-gray-100'} transition-colors`}
                title="English"
              >
                🇬🇧
              </button>
              <button 
                onClick={() => setCurrentLang('ar')} 
                className={`p-1 rounded ${currentLang === 'ar' ? 'bg-red-100' : 'hover:bg-gray-100'} transition-colors`}
                title="العربية"
              >
                🇸🇦
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-red-600 mb-8">
              {t.hero.description}
            </p>
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              {t.hero.cta}
            </button>
          </div>
          
          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.features.clinicalTest}</h3>
              <p className="text-gray-600">{t.features.clinicalTestDesc}</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.features.podologyApproved}</h3>
              <p className="text-gray-600">{t.features.podologyApprovedDesc}</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.features.naturalIngredients}</h3>
              <p className="text-gray-600">{t.features.naturalIngredientsDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600">{t.products.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Classic Variant */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={productImage1} 
                  alt="PediZone Classic" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.products.classic.name}</h3>
                <p className="text-gray-600 mb-4">{t.products.classic.description}</p>
                <ul className="space-y-2">
                  {t.products.classic.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Intensive Variant */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={productImage2} 
                  alt="PediZone Intensive" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.products.intensive.name}</h3>
                <p className="text-gray-600 mb-4">{t.products.intensive.description}</p>
                <ul className="space-y-2">
                  {t.products.intensive.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sensitive Variant */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={productImage3} 
                  alt="PediZone Sensitive" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.products.sensitive.name}</h3>
                <p className="text-gray-600 mb-4">{t.products.sensitive.description}</p>
                <ul className="space-y-2">
                  {t.products.sensitive.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foot Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.footProblems.title}</h2>
            <p className="text-xl text-gray-600">{t.footProblems.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.footProblems.problems.map((problem, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-md">
                  <img 
                    src={problem.image} 
                    alt={problem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.usage.title}</h2>
            <p className="text-xl text-gray-600">{t.usage.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.usage.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PediZone Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whyPedizone.title}</h2>
            <p className="text-xl text-gray-600">{t.whyPedizone.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyPedizone.reasons.map((reason, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonials.reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600">{t.about.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.about.content}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Misyon</h3>
                  <p className="text-gray-600">{t.about.mission}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Vizyon</h3>
                  <p className="text-gray-600">{t.about.vision}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Değerler</h3>
                  <p className="text-gray-600">{t.about.values}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.address}</h3>
                <p className="text-gray-600">{t.contact.addressText}</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.phone}</h3>
                <a href={`tel:${t.contact.phoneText}`} className="text-red-600 hover:text-red-700">
                  {t.contact.phoneText}
                </a>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.instagram}</h3>
                <a 
                  href="https://www.instagram.com/pediz0ne" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-red-600 hover:text-red-700"
                >
                  {t.contact.instagramText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">{t.footer.company}</p>
            <p className="text-gray-400 text-sm">© 2025 PediZone®. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

