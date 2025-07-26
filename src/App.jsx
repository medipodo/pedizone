import { useState, useEffect } from 'react'
import './App.css'

// Gerçek ürün görselleri
import productImage1 from './assets/IMG_7570.jpeg'
import productImage2 from './assets/pedizone_foam.png'
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
            'Derinlemesine karşıtı etki',
            'Derin temizlik',
            'Onarıcı formül',
            'Profesyonel bakım'
          ]
        },
        serum: {
          name: 'PediZone® 50 Ml Serum',
          description: 'Kadın Erkek Farketmeksizin',
          features: [
            'Çift dostu',
            'Yumuşak formül',
            'Hariçen kullanım için',
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
      blog: {
        title: 'Blog',
        subtitle: 'Ayak Sağlığı Rehberi ve Uzman Tavsiyeleri',
        posts: [
          {
            title: 'Ayak Mantarı Nedir, Neden Olur?',
            excerpt: 'Ayak mantarı, özellikle ayak parmak aralarında oluşan ve kaşıntı, kızarıklık, kötü koku gibi belirtilerle kendini gösteren bulaşıcı bir cilt enfeksiyonudur.',
            readTime: '5 dakika',
            image: blogImage1,
            url: '/blog/ayak-mantari-nedir'
          },
          {
            title: 'Tırnak Mantarı Çeşitleri Nelerdir?',
            excerpt: 'Tırnak mantarı, hem estetik görünümü bozan hem de ciddi rahatsızlıklara yol açabilen yaygın bir enfeksiyondur.',
            readTime: '6 dakika',
            image: blogImage2,
            url: '/blog/tirnak-mantari-cesitleri'
          },
          {
            title: 'Mantar İçin Serum Kullanmanın Önemi',
            excerpt: 'Mantar enfeksiyonlarında doğru ürünle yapılan topikal tedavi, iyileşme sürecini doğrudan etkiler.',
            readTime: '7 dakika',
            image: blogImage3,
            url: '/blog/serum-kullanim-onemleri'
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
            'Deep anti-bacterial effect',
            'Deep cleansing',
            'Repairing formula',
            'Professional care'
          ]
        },
        serum: {
          name: 'PediZone® 50 Ml Serum',
          description: 'Regardless of Gender',
          features: [
            'Couple friendly',
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
            description: 'Reliable formula recommended by foot health specialists'
          },
          {
            title: 'Natural Ingredients',
            description: 'Prepared with natural and safe active ingredients'
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
            description: 'Thick skin layer on the sole',
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
      blog: {
        title: 'Blog',
        subtitle: 'Foot Health Guide and Expert Advice',
        posts: [
          {
            title: 'What is Foot Fungus, Why Does it Occur?',
            excerpt: 'Foot fungus is a contagious skin infection that occurs especially between the toes and manifests itself with symptoms such as itching, redness, and bad odor.',
            readTime: '5 minutes',
            image: blogImage1,
            url: '/blog/what-is-foot-fungus'
          },
          {
            title: 'What are the Types of Nail Fungus?',
            excerpt: 'Nail fungus is a common infection that both spoils the aesthetic appearance and can lead to serious discomfort.',
            readTime: '6 minutes',
            image: blogImage2,
            url: '/blog/types-of-nail-fungus'
          },
          {
            title: 'The Importance of Using Serum for Fungus',
            excerpt: 'Topical treatment with the right product in fungal infections directly affects the healing process.',
            readTime: '7 minutes',
            image: blogImage3,
            url: '/blog/importance-of-serum-use'
          }
        ]
      },
      about: {
        title: 'About Us',
        subtitle: 'We are here for your foot health',
        description: 'PediZone® works to protect and improve users\' foot health with innovative products we develop with our expert team in the field of foot health. Our formulas, shaped by podologists\' expectations, are produced to the highest quality standards.',
        mission: {
          title: 'Mission',
          description: 'Our mission is to provide effective and safe solutions for everyone to have healthy feet.'
        },
        vision: {
          title: 'Vision',
          description: 'Our vision is to be Turkey\'s leading brand in foot health.'
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
        subtitle: 'PediZone®',
        description: 'اختيار أطباء الأقدام',
        cta: 'استكشف المنتجات'
      },
      products: {
        title: 'منتجاتنا',
        subtitle: 'منتجات العناية بالأقدام PediZone®',
        classic: {
          name: 'PediZone® 50 مل سيروم',
          description: 'التركيبة المثالية للعناية اليومية بالقدم',
          features: [
            'تأثير مضاد للفطريات',
            'الاستخدام اليومي',
            'امتصاص سريع',
            'مكونات طبيعية'
          ]
        },
        foam: {
          name: 'PediZone® 200 مل رغوة تنظيف القدم',
          description: 'مضاد للرائحة ومضاد للبكتيريا',
          features: [
            'تأثير مضاد للبكتيريا عميق',
            'تنظيف عميق',
            'تركيبة إصلاحية',
            'رعاية مهنية'
          ]
        },
        serum: {
          name: 'PediZone® 50 مل سيروم',
          description: 'بغض النظر عن الجنس',
          features: [
            'مناسب للأزواج',
            'تركيبة لطيفة',
            'للاستخدام الخارجي',
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
            description: 'تم اختباره في المختبر وأثبت فعاليته'
          },
          {
            title: 'معتمد من أطباء الأقدام',
            description: 'تركيبة موثوقة يوصي بها متخصصو صحة القدم'
          },
          {
            title: 'مكونات طبيعية',
            description: 'محضر بمكونات نشطة طبيعية وآمنة'
          }
        ]
      },
      footProblems: {
        title: 'مشاكل القدم الشائعة',
        subtitle: 'مشاكل القدم التي يمكنك حلها مع PediZone®',
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
      blog: {
        title: 'المدونة',
        subtitle: 'دليل صحة القدم ونصائح الخبراء',
        posts: [
          {
            title: 'ما هي فطريات القدم، لماذا تحدث؟',
            excerpt: 'فطريات القدم هي عدوى جلدية معدية تحدث خاصة بين أصابع القدم وتظهر بأعراض مثل الحكة والاحمرار والرائحة الكريهة.',
            readTime: '5 دقائق',
            image: blogImage1,
            url: '/blog/what-is-foot-fungus-ar'
          },
          {
            title: 'ما هي أنواع فطريات الأظافر؟',
            excerpt: 'فطريات الأظافر هي عدوى شائعة تفسد المظهر الجمالي ويمكن أن تؤدي إلى إزعاج خطير.',
            readTime: '6 دقائق',
            image: blogImage2,
            url: '/blog/types-of-nail-fungus-ar'
          },
          {
            title: 'أهمية استخدام السيروم للفطريات',
            excerpt: 'العلاج الموضعي بالمنتج المناسب في العدوى الفطرية يؤثر مباشرة على عملية الشفاء.',
            readTime: '7 دقائق',
            image: blogImage3,
            url: '/blog/importance-of-serum-use-ar'
          }
        ]
      },
      about: {
        title: 'حولنا',
        subtitle: 'نحن هنا من أجل صحة قدميك',
        description: 'تعمل PediZone® على حماية وتحسين صحة أقدام المستخدمين بمنتجات مبتكرة نطورها مع فريقنا الخبير في مجال صحة القدم. تركيباتنا، المشكلة بتوقعات أطباء الأقدام، يتم إنتاجها وفقاً لأعلى معايير الجودة.',
        mission: {
          title: 'المهمة',
          description: 'مهمتنا هي توفير حلول فعالة وآمنة للجميع للحصول على أقدام صحية.'
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
        addressText: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: 'الهاتف',
        phoneText: '05068860326',
        instagram: 'إنستغرام',
        instagramText: '@pediz0ne'
      }
    }
  }

  const t = translations[currentLang]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-600">PediZone®</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.home}</a>
                <a href="#products" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.products}</a>
                <a href="#about" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.about}</a>
                <a href="#contact" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.contact}</a>
                <a href="#blog" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.blog}</a>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentLang('tr')}
                className={`px-2 py-1 text-sm rounded ${currentLang === 'tr' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'}`}
              >
                🇹🇷
              </button>
              <button
                onClick={() => setCurrentLang('en')}
                className={`px-2 py-1 text-sm rounded ${currentLang === 'en' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'}`}
              >
                🇬🇧
              </button>
              <button
                onClick={() => setCurrentLang('ar')}
                className={`px-2 py-1 text-sm rounded ${currentLang === 'ar' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'}`}
              >
                🇸🇦
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-2">{t.hero.subtitle}</p>
            <p className="text-lg mb-8">{t.hero.description}</p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600">{t.products.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={productImage1} alt="PediZone Classic" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.products.classic.name}</h3>
                <p className="text-gray-600 mb-4">{t.products.classic.description}</p>
                <ul className="space-y-2">
                  {t.products.classic.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-red-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={productImage2} alt="PediZone Foam" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.products.foam.name}</h3>
                <p className="text-gray-600 mb-4">{t.products.foam.description}</p>
                <ul className="space-y-2">
                  {t.products.foam.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-red-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={productImage3} alt="PediZone Serum" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.products.serum.name}</h3>
                <p className="text-gray-600 mb-4">{t.products.serum.description}</p>
                <ul className="space-y-2">
                  {t.products.serum.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-red-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PediZone Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.whyPedizone.title}</h2>
            <p className="text-xl text-gray-600">{t.whyPedizone.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyPedizone.reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foot Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.footProblems.title}</h2>
            <p className="text-xl text-gray-600">{t.footProblems.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.footProblems.problems.map((problem, index) => (
              <div key={index} className="text-center">
                <img src={problem.image} alt={problem.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.blog.title}</h2>
            <p className="text-xl text-gray-600">{t.blog.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.blog.posts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <a href={post.url} className="text-red-600 hover:text-red-700 font-medium">Devamını Oku →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.about.subtitle}</p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">{t.about.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.mission.title}</h3>
              <p className="text-gray-600">{t.about.mission.description}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.vision.title}</h3>
              <p className="text-gray-600">{t.about.vision.description}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.values.title}</h3>
              <p className="text-gray-600">{t.about.values.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contact.address}</h3>
              <p className="text-gray-600">{t.contact.addressText}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contact.phone}</h3>
              <p className="text-gray-600">{t.contact.phoneText}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contact.instagram}</h3>
              <p className="text-gray-600">{t.contact.instagramText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-2xl font-bold text-red-500">PediZone®</span>
            <p className="mt-4 text-gray-400">© 2025 PediZone®. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

