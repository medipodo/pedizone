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
            url: '/blog/nail-fungus-types'
          },
          {
            title: 'The Importance of Using Serum for Fungus',
            excerpt: 'Topical treatment with the right product in fungal infections directly affects the healing process.',
            readTime: '7 minutes',
            image: blogImage3,
            url: '/blog/serum-usage-importance'
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
        subtitle: 'PediZone®',
        description: 'اختيار أطباء الأقدام',
        cta: 'استكشف المنتجات'
      },
      products: {
        title: 'منتجاتنا',
        subtitle: 'منتجات العناية بالقدم PediZone®',
        classic: {
          name: 'مصل PediZone® 50 مل',
          description: 'تركيبة مثالية للعناية اليومية بالقدم',
          features: [
            'تأثير مضاد للفطريات',
            'للاستخدام اليومي',
            'امتصاص سريع',
            'مكونات طبيعية'
          ]
        },
        foam: {
          name: 'رغوة تنظيف القدم PediZone® 200 مل',
          description: 'مضاد للرائحة والبكتيريا',
          features: [
            'تأثير قوي مضاد للفطريات',
            'تنظيف عميق',
            'تركيبة مرممة',
            'عناية مهنية'
          ]
        },
        serum: {
          name: 'مصل PediZone® 50 مل',
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
        title: 'لماذا PediZone®؟',
        subtitle: 'أفضل حل لصحة قدميك',
        reasons: [
          {
            title: 'اختبارات سريرية',
            description: 'فعالية مختبرة ومثبتة في المختبر'
          },
          {
            title: 'معتمد من أطباء الأقدام',
            description: 'تركيبة موثوقة موصى بها من قبل متخصصي صحة القدم'
          },
          {
            title: 'مكونات طبيعية',
            description: 'مُصاغ بمكونات فعالة طبيعية وآمنة'
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
            url: '/blog/nail-fungus-types-ar'
          },
          {
            title: 'أهمية استخدام المصل للفطريات',
            excerpt: 'العلاج الموضعي بالمنتج المناسب في العدوى الفطرية يؤثر مباشرة على عملية الشفاء.',
            readTime: '7 دقائق',
            image: blogImage3,
            url: '/blog/serum-usage-importance-ar'
          }
        ]
      },
      about: {
        title: 'حولنا',
        subtitle: 'نحن هنا من أجل صحة قدميك',
        description: 'تعمل PediZone® على حماية وتحسين صحة أقدام المستخدمين بمنتجات مبتكرة طورها فريقنا الخبير في مجال صحة القدم. تركيباتنا، المشكلة بتوقعات أطباء الأقدام، يتم إنتاجها وفقًا لأعلى معايير الجودة.',
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
          description: 'قيمنا: الجودة والموثوقية ورضا العملاء والتحسين المستمر.'
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
      },
      footer: {
        company: 'شركة ميديبودو للخدمات الصحية الطبية الصناعية والتجارية المحدودة',
        rights: 'جميع الحقوق محفوظة.'
      }
    }
  }

  const t = translations[currentLang]

  const products = [
    {
      id: 1,
      name: t.products.classic.name,
      description: t.products.classic.description,
      features: t.products.classic.features,
      image: productImage1
    },
    {
      id: 2,
      name: t.products.foam.name,
      description: t.products.foam.description,
      features: t.products.foam.features,
      image: productImage2
    },
    {
      id: 3,
      name: t.products.serum.name,
      description: t.products.serum.description,
      features: t.products.serum.features,
      image: productImage3
    }
  ]

  const handleBlogClick = (url) => {
    // Blog sayfalarına yönlendirme
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-white" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-600">PediZone®</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.home}</a>
                <a href="#products" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.products}</a>
                <a href="#about" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.about}</a>
                <a href="#contact" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.contact}</a>
                <a href="#blog" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">{t.nav.blog}</a>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              {/* Desktop - CSS Flags */}
              <div className="hidden md:flex space-x-2">
                <button
                  onClick={() => setCurrentLang('tr')}
                  className={`w-8 h-6 rounded border-2 ${currentLang === 'tr' ? 'border-red-600' : 'border-gray-300'} overflow-hidden`}
                  style={{
                    background: 'linear-gradient(to bottom, #e30a17 0%, #e30a17 100%)',
                    position: 'relative'
                  }}
                  title="Türkçe"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`w-8 h-6 rounded border-2 ${currentLang === 'en' ? 'border-red-600' : 'border-gray-300'} overflow-hidden`}
                  style={{
                    background: 'linear-gradient(to bottom, #012169 0%, #012169 33%, #ffffff 33%, #ffffff 66%, #c8102e 66%, #c8102e 100%)'
                  }}
                  title="English"
                >
                </button>
                
                <button
                  onClick={() => setCurrentLang('ar')}
                  className={`w-8 h-6 rounded border-2 ${currentLang === 'ar' ? 'border-red-600' : 'border-gray-300'} overflow-hidden`}
                  style={{
                    background: 'linear-gradient(to bottom, #000000 0%, #000000 33%, #ffffff 33%, #ffffff 66%, #ce1126 66%, #ce1126 100%)'
                  }}
                  title="العربية"
                >
                </button>
              </div>

              {/* Mobile - Emoji Flags */}
              <div className="md:hidden flex space-x-1">
                <button
                  onClick={() => setCurrentLang('tr')}
                  className={`text-lg ${currentLang === 'tr' ? 'ring-2 ring-red-600 rounded' : ''}`}
                  title="Türkçe"
                >
                  🇹🇷
                </button>
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`text-lg ${currentLang === 'en' ? 'ring-2 ring-red-600 rounded' : ''}`}
                  title="English"
                >
                  🇬🇧
                </button>
                <button
                  onClick={() => setCurrentLang('ar')}
                  className={`text-lg ${currentLang === 'ar' ? 'ring-2 ring-red-600 rounded' : ''}`}
                  title="العربية"
                >
                  🇸🇦
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-12 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {t.hero.title}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              {t.hero.subtitle}
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              {t.hero.description}
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-red-700 transform hover:translateY(-2px) transition-all duration-300 shadow-lg hover:shadow-xl">
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
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-80 bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foot Problems Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.footProblems.title}</h2>
            <p className="text-xl text-white">{t.footProblems.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.footProblems.problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-36 bg-gray-100">
                  <img src={problem.image} alt={problem.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PediZone Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whyPedizone.title}</h2>
            <p className="text-xl text-gray-600">{t.whyPedizone.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyPedizone.reasons.map((reason, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.blog.title}</h2>
            <p className="text-xl text-gray-600">{t.blog.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.blog.posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">⏱️ {post.readTime}</span>
                    <button 
                      onClick={() => handleBlogClick(post.url)}
                      className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200"
                    >
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

