import { useState, useEffect } from 'react'
import './App.css'

// Gerçek ürün görselleri
import productImage1 from './assets/IMG_7570.jpeg'
import productImage2 from './assets/pedizone foam.png'
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

// Blog görselleri
import blogImage1 from './assets/blog/ayak-mantari-tedavi.webp'
import blogImage2 from './assets/blog/tirnak-mantari-cesitleri.jpg'
import blogImage3 from './assets/blog/pedizone-serum-kullanimi.jpg'

function App() {
  const [currentLang, setCurrentLang] = useState('tr')

  const translations = {
    tr: {
      nav: {
        home: 'Ana Sayfa',
        products: 'Ürünler',
        about: 'Hakkımızda',
        contact: 'İletişim',
        blog: 'Blog'
      },
      hero: {
        title: 'Advanced Foot Care Formula',
        subtitle: 'PediZone®',
        description: 'Podologların Tercihi',
        cta: 'Ürünleri İncele'
      },
      products: {
        title: 'Ürünlerimiz',
        subtitle: 'PediZone® Ayak Bakım Ürünleri',
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
        foam: {
          name: 'PediZone® 200 Ml Ayak Temizleme Köpüğü',
          description: 'Koku ve Bakteri Karşıtı',
          features: [
            'Güçlü mantar karşıtı etki',
            'Derin temizlik',
            'Onarıcı formül',
            'Profesyonel bakım'
          ]
        },
        serum: {
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
            title: 'Ayak Kokusu',
            description: 'Aşırı terleme ve koku problemi',
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
            title: 'Tırnak Mantarı',
            description: 'Tırnak mantarı enfeksiyonları',
            image: footOdor
          }
        ]
      },
      testimonials: {

      blog: {
        title: 'Blog',
        subtitle: 'Ayak Sağlığı Rehberi ve Uzman Tavsiyeleri',
        posts: [
          {
            title: 'Ayak Mantarı Nedir, Neden Olur?',
            excerpt: 'Ayak mantarı, özellikle ayak parmak aralarında oluşan ve kaşıntı, kızarıklık, kötü koku gibi belirtilerle kendini gösteren bulaşıcı bir cilt enfeksiyonudur.',
            readTime: '5 dakika',
            image: blogImage1
          },
          {
            title: 'Tırnak Mantarı Çeşitleri Nelerdir?',
            excerpt: 'Tırnak mantarı, hem estetik görünümü bozan hem de ciddi rahatsızlıklara yol açabilen yaygın bir enfeksiyondur.',
            readTime: '6 dakika',
            image: blogImage2
          },
          {
            title: 'Mantar İçin Serum Kullanmanın Önemi',
            excerpt: 'Mantar enfeksiyonlarında doğru ürünle yapılan topikal tedavi, iyileşme sürecini doğrudan etkiler.',
            readTime: '7 dakika',
            image: blogImage3
          }
        ]
      },
      about: {
        title: 'Hakkımızda',
        subtitle: 'Ayak sağlığınız için buradayız',
        description: 'PediZone®, ayak sağlığı alanında uzman ekibimizle geliştirdiğimiz yenilikçi ürünlerle, kullanıcıların ayak sağlığını korumak ve iyileştirmek için çalışmaktadır. Podologların beklentileriyle şekillenen formüllerimiz, en yüksek kalite standartlarında üretilmektedir.',
        mission: {
          title: 'Misyon',
          description: 'Misyonumuz, herkesin sağlıklı ayaklara sahip olması için etkili ve güvenli çözümler sunmaktır.'
        },
        vision: {
          title: 'Vizyon',
          description: 'Vizyonumuz, ayak sağlığı alanında Türkiye\'nin önde gelen markası olmaktır.'
        },
        values: {
          title: 'Değerler',
          description: 'Değerlerimiz: Kalite, güvenilirlik, müşteri memnuniyeti ve sürekli gelişim.'
        }
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
        contact: 'Contact',
        blog: 'Blog'
      },
      hero: {
        title: 'Advanced Foot Care Formula',
        subtitle: 'PediZone®',
        description: 'Podologists\' Choice',
        cta: 'Explore Products'
      },
      products: {
        title: 'Our Products',
        subtitle: 'PediZone® Foot Care Products',
        classic: {
          name: 'PediZone® 50 Ml Serum',
          description: 'Ideal formula for daily foot care',
          features: [
            'Anti-fungal effect',
            'Daily use',
            'Fast absorption',
            'Natural ingredients'
          ]
        },
        foam: {
          name: 'PediZone® 200 Ml Foot Cleansing Foam',
          description: 'Anti-Odor and Anti-Bacterial',
          features: [
            'Strong anti-fungal effect',
            'Deep cleansing',
            'Restorative formula',
            'Professional care'
          ]
        },
        serum: {
          name: 'PediZone® 50 Ml Serum',
          description: 'For Both Men and Women',
          features: [
            'Skin-friendly',
            'Gentle formula',
            'For external use',
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
            description: 'Laboratory tested and proven effectiveness'
          },
          {
            title: 'Podologist Approved',
            description: 'Trusted formula recommended by foot health specialists'
          },
          {
            title: 'Natural Ingredients',
            description: 'Formulated with natural and safe active ingredients'
          }
        ]
      },
      footProblems: {
        title: 'Common Foot Problems',
        subtitle: 'Foot problems you can solve with PediZone®',
        problems: [
          {
            title: 'Foot Odor',
            description: 'Excessive sweating and odor problem',
            image: footFungus
          },
          {
            title: 'Callus and Thickening',
            description: 'Thick skin layer on the sole of the foot',
            image: footCallus
          },
          {
            title: 'Cracks',
            description: 'Heel and foot cracks',
            image: footCrack
          },
          {
            title: 'Nail Fungus',
            description: 'Nail fungus infections',
            image: footOdor
          }
        ]
      },
      testimonials: {
        title: 'User Reviews',
        subtitle: 'Our customers\' experiences',
        reviews: [
          {
            name: 'Gamze B.',
            role: 'Podologist',
            rating: 5,
            comment: 'An effective product that I confidently recommend to my patients at the Podology Center. The results are truly satisfying.'
          },
          {
            name: 'Ayşe K.',
            role: 'User',
            rating: 5,
            comment: 'My foot fungus problem that I\'ve been suffering from for years has finally been solved. I\'m very satisfied.'
          },
          {
            name: 'Mustafa D.',
            role: 'User',
            rating: 5,
            comment: 'An effective and fast-acting product. I definitely recommend it.'
          },
          {
            name: 'Fatma Özkan',
            role: 'Podologist',
            rating: 5,
            comment: 'A reliable solution that I frequently recommend in my clinical practice.'
          },
          {
            name: 'Ahmet S.',
            role: 'User',
            rating: 5,
            comment: 'Thanks to its natural ingredients, I had no problems with my sensitive skin.'
          },
          {
            name: 'Zeynep M.',
            role: 'User',
            rating: 5,
            comment: 'Easy to use and effective. It has become indispensable for my foot health.'
          }
        ]
      },
      blog: {
        title: 'Blog',
        subtitle: 'Foot Health Guide and Expert Advice',
        posts: [
          {
            title: 'What is Foot Fungus, Why Does it Occur?',
            excerpt: 'Foot fungus is a contagious skin infection that occurs especially between the toes and manifests itself with symptoms such as itching, redness, and bad odor.',
            readTime: '5 minutes',
            image: blogImage1
          },
          {
            title: 'What are the Types of Nail Fungus?',
            excerpt: 'Nail fungus is a common infection that both spoils the aesthetic appearance and can lead to serious discomfort.',
            readTime: '6 minutes',
            image: blogImage2
          },
          {
            title: 'The Importance of Using Serum for Fungus',
            excerpt: 'Topical treatment with the right product in fungal infections directly affects the healing process.',
            readTime: '7 minutes',
            image: blogImage3
          }
        ]
      },
      about: {
        title: 'About Us',
        subtitle: 'We are here for your foot health',
        description: 'PediZone® works to protect and improve users\' foot health with innovative products developed by our expert team in the field of foot health. Our formulas, shaped by the expectations of podologists, are produced to the highest quality standards.',
        mission: {
          title: 'Mission',
          description: 'Our mission is to provide effective and safe solutions for everyone to have healthy feet.'
        },
        vision: {
          title: 'Vision',
          description: 'Our vision is to be Turkey\'s leading brand in the field of foot health.'
        },
        values: {
          title: 'Values',
          description: 'Our values: Quality, reliability, customer satisfaction and continuous improvement.'
        }
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
        company: 'Medipodo Medical Health Services Ind. And Trade. Ltd. Co.',
        rights: 'All rights reserved.'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        products: 'المنتجات',
        about: 'حولنا',
        contact: 'اتصل بنا',
        blog: 'المدونة'
      },
      hero: {
        title: 'تركيبة متقدمة لرعاية القدم',
        subtitle: 'بيديزون®',
        description: 'اختيار أطباء الأقدام',
        cta: 'استكشف المنتجات'
      },
      products: {
        title: 'منتجاتنا',
        subtitle: 'منتجات بيديزون® لرعاية القدم',
        classic: {
          name: 'بيديزون® سيروم 50 مل',
          description: 'تركيبة مثالية للعناية اليومية بالقدم',
          features: [
            'تأثير مضاد للفطريات',
            'للاستخدام اليومي',
            'امتصاص سريع',
            'مكونات طبيعية'
          ]
        },
        foam: {
          name: 'بيديزون® رغوة تنظيف القدم 200 مل',
          description: 'مضاد للرائحة والبكتيريا',
          features: [
            'تأثير قوي مضاد للفطريات',
            'تنظيف عميق',
            'تركيبة مرممة',
            'رعاية مهنية'
          ]
        },
        serum: {
          name: 'بيديزون® سيروم 50 مل',
          description: 'للرجال والنساء',
          features: [
            'صديق للبشرة',
            'تركيبة لطيفة',
            'للاستخدام الخارجي',
            'للاستخدام اليومي'
          ]
        }
      },
      whyPedizone: {
        title: 'لماذا بيديزون®؟',
        subtitle: 'أفضل حل لصحة قدميك',
        reasons: [
          {
            title: 'اختبارات سريرية',
            description: 'فعالية مختبرة ومثبتة في المختبر'
          },
          {
            title: 'معتمد من أطباء الأقدام',
            description: 'تركيبة موثوقة موصى بها من قبل أخصائيي صحة القدم'
          },
          {
            title: 'مكونات طبيعية',
            description: 'مُصاغ بمكونات فعالة طبيعية وآمنة'
          }
        ]
      },
      footProblems: {
        title: 'مشاكل القدم الشائعة',
        subtitle: 'مشاكل القدم التي يمكنك حلها مع بيديزون®',
        problems: [
          {
            title: 'رائحة القدم',
            description: 'مشكلة التعرق المفرط والرائحة',
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
            title: 'فطريات الأظافر',
            description: 'عدوى فطريات الأظافر',
            image: footOdor
          }
        ]
      },
      testimonials: {
        title: 'آراء المستخدمين',
        subtitle: 'تجارب عملائنا',
        reviews: [
          {
            name: 'جامزة ب.',
            role: 'طبيب أقدام',
            rating: 5,
            comment: 'منتج فعال أوصي به بثقة لمرضاي في مركز طب الأقدام. النتائج مرضية حقاً.'
          },
          {
            name: 'عائشة ك.',
            role: 'مستخدم',
            rating: 5,
            comment: 'مشكلة فطريات القدم التي عانيت منها لسنوات تم حلها أخيراً. أنا راضية جداً.'
          },
          {
            name: 'مصطفى د.',
            role: 'مستخدم',
            rating: 5,
            comment: 'منتج فعال وسريع المفعول. أنصح به بالتأكيد.'
          },
          {
            name: 'فاطمة أوزكان',
            role: 'طبيب أقدام',
            rating: 5,
            comment: 'حل موثوق أوصي به كثيراً في ممارستي السريرية.'
          },
          {
            name: 'أحمد س.',
            role: 'مستخدم',
            rating: 5,
            comment: 'بفضل مكوناته الطبيعية، لم أواجه أي مشاكل مع بشرتي الحساسة.'
          },
          {
            name: 'زينب م.',
            role: 'مستخدم',
            rating: 5,
            comment: 'سهل الاستخدام وفعال. أصبح لا غنى عنه لصحة قدمي.'
          }
        ]
      },
      blog: {
        title: 'المدونة',
        subtitle: 'دليل صحة القدم ونصائح الخبراء',
        posts: [
          {
            title: 'ما هي فطريات القدم، لماذا تحدث؟',
            excerpt: 'فطريات القدم هي عدوى جلدية معدية تحدث خاصة بين أصابع القدم وتظهر بأعراض مثل الحكة والاحمرار والرائحة الكريهة.',
            readTime: '5 دقائق',
            image: blogImage1
          },
          {
            title: 'ما هي أنواع فطريات الأظافر؟',
            excerpt: 'فطريات الأظافر هي عدوى شائعة تفسد المظهر الجمالي ويمكن أن تؤدي إلى مضايقات خطيرة.',
            readTime: '6 دقائق',
            image: blogImage2
          },
          {
            title: 'أهمية استخدام السيروم للفطريات',
            excerpt: 'العلاج الموضعي بالمنتج المناسب في العدوى الفطرية يؤثر مباشرة على عملية الشفاء.',
            readTime: '7 دقائق',
            image: blogImage3
          }
        ]
      },
      about: {
        title: 'حولنا',
        subtitle: 'نحن هنا من أجل صحة قدميك',
        description: 'بيديزون® تعمل على حماية وتحسين صحة أقدام المستخدمين بمنتجات مبتكرة طورها فريقنا الخبير في مجال صحة القدم. تركيباتنا، المشكلة بتوقعات أطباء الأقدام، يتم إنتاجها بأعلى معايير الجودة.',
        mission: {
          title: 'المهمة',
          description: 'مهمتنا هي توفير حلول فعالة وآمنة لكل شخص ليحصل على أقدام صحية.'
        },
        vision: {
          title: 'الرؤية',
          description: 'رؤيتنا هي أن نكون العلامة التجارية الرائدة في تركيا في مجال صحة القدم.'
        },
        values: {
          title: 'القيم',
          description: 'قيمنا: الجودة، الموثوقية، رضا العملاء والتحسين المستمر.'
        }
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'تواصل معنا',
        address: 'العنوان',
        addressText: 'باغليجا ماه. مرت جاد. رقم 4/2 إتيمسغوت أنقرة',
        phone: 'الهاتف',
        phoneText: '05068860326',
        instagram: 'إنستغرام',
        instagramText: '@pediz0ne'
      },
      footer: {
        company: 'شركة ميديبودو للخدمات الطبية الصحية الصناعية والتجارية المحدودة',
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-600">PediZone®</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
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
                className={`px-3 py-2 text-sm rounded-md flex items-center space-x-1 ${currentLang === 'tr' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'}`}
              >
                <span className="hidden md:inline flag-icon flag-tr"></span>
                <span className="md:hidden">🇹🇷</span>
              </button>
              <button 
                onClick={() => setCurrentLang('en')}
                className={`px-3 py-2 text-sm rounded-md flex items-center space-x-1 ${currentLang === 'en' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'}`}
              >
                <span className="hidden md:inline flag-icon flag-en"></span>
                <span className="md:hidden">🇬🇧</span>
              </button>
              <button 
                onClick={() => setCurrentLang('ar')}
                className={`px-3 py-2 text-sm rounded-md flex items-center space-x-1 ${currentLang === 'ar' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'}`}
              >
                <span className="hidden md:inline flag-icon flag-ar"></span>
                <span className="md:hidden">🇸🇦</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-red-50 to-white hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-red-600 font-semibold mb-8">
              {t.hero.subtitle} - {t.hero.description}
            </p>
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-red-600 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors shadow-lg hero-cta-button"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600">{t.products.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src={productImage1} alt={t.products.classic.name} className="w-full h-full object-cover" />
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

            {/* Product 2 */}
            <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src={productImage2} alt={t.products.foam.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.products.foam.name}</h3>
                <p className="text-gray-600 mb-4">{t.products.foam.description}</p>
                <ul className="space-y-2">
                  {t.products.foam.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src={productImage3} alt={t.products.serum.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.products.serum.name}</h3>
                <p className="text-gray-600 mb-4">{t.products.serum.description}</p>
                <ul className="space-y-2">
                  {t.products.serum.features.map((feature, index) => (
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.footProblems.title}</h2>
            <p className="text-xl text-gray-600">{t.footProblems.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.footProblems.problems.map((problem, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img src={problem.image} alt={problem.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PediZone Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whyPedizone.title}</h2>
            <p className="text-xl text-gray-600">{t.whyPedizone.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyPedizone.reasons.map((reason, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-red-600">
                    {index === 0 ? '🔬' : index === 1 ? '👨‍⚕️' : '🌿'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonials.reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white blog-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.blog.title}</h2>
            <p className="text-xl text-gray-600">{t.blog.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.blog.posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">⏱️ {post.readTime}</span>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Devamını Oku →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.about.subtitle}</p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">{t.about.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.mission.title}</h3>
              <p className="text-gray-600">{t.about.mission.description}</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.vision.title}</h3>
              <p className="text-gray-600">{t.about.vision.description}</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.about.values.title}</h3>
              <p className="text-gray-600">{t.about.values.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.address}</h3>
                <p className="text-gray-600 text-sm">{t.contact.addressText}</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.phone}</h3>
                <a href={`tel:${t.contact.phoneText}`} className="text-red-600 hover:text-red-700 text-sm">
                  {t.contact.phoneText}
                </a>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.instagram}</h3>
                <a href={`https://instagram.com/${t.contact.instagramText.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 text-sm">
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

