import { useState } from 'react'
import './App.css'

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
      features: {
        clinicalTest: 'Klinik Test',
        clinicalTestDesc: 'Uzman görüşleriyle uyumlu içerikler',
        podologyApproved: 'Podolog Onaylı',
        podologyApprovedDesc: 'Ayak sağlığı uzmanları tarafından önerilen',
        naturalIngredients: 'Doğal İçerikler',
        naturalIngredientsDesc: 'Doğal ve güvenli aktif bileşenler'
      },
      products: {
        title: 'Ürünlerimiz',
        subtitle: 'PediZone® Ayak Bakım Ürünleri',
        classic: {
          name: 'PediZone® Classic',
          description: 'Günlük ayak bakımı için ideal formül',
          features: [
            'Mantar karşıtı etki',
            'Günlük kullanım',
            'Hızlı emilim',
            'Doğal içerikler'
          ]
        },
        intensive: {
          name: 'PediZone® Intensive',
          description: 'Yoğun bakım gerektiren durumlar için',
          features: [
            'Güçlü mantar karşıtı etki',
            'Derin temizlik',
            'Onarıcı formül',
            'Profesyonel bakım'
          ]
        },
        sensitive: {
          name: 'PediZone® Sensitive',
          description: 'Hassas ciltler için özel formül',
          features: [
            'Cilt dostu',
            'Yumuşak formül',
            'Hipoalerjenik',
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
            description: 'Parmak aralarında oluşan mantar enfeksiyonları'
          },
          {
            title: 'Nasır ve Kalınlaşma',
            description: 'Ayak tabanında oluşan kalın deri tabakası'
          },
          {
            title: 'Çatlaklar',
            description: 'Topuk ve ayak çatlakları'
          },
          {
            title: 'Ayak Kokusu',
            description: 'Aşırı terleme ve koku problemi'
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
            name: 'Ahmet Y.',
            title: 'Kullanıcı',
            text: 'Yıllardır çektiğim ayak mantarı problemi nihayet çözüldü. Çok memnunum.',
            rating: 5
          },
          {
            name: 'Fatma K.',
            title: 'Kullanıcı',
            text: 'Etkili ve hızlı sonuç veren bir ürün. Kesinlikle tavsiye ederim.',
            rating: 5
          },
          {
            name: 'Mehmet S.',
            title: 'Kullanıcı',
            text: 'Doğal içerikleri sayesinde hassas cildimde hiç problem yaşamadım.',
            rating: 5
          }
        ]
      },
      about: {
        title: 'Hakkımızda',
        subtitle: 'Ayak sağlığınız için buradayız',
        content: 'PediZone®, ayak sağlığı alanında uzman ekibimizle geliştirdiğimiz yenilikçi ürünlerle, kullanıcıların ayak sağlığını korumak ve iyileştirmek için çalışmaktadır.',
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-red-600 font-semibold mb-8">
              {t.hero.subtitle} - {t.hero.description}
            </p>
            <button 
              onClick={() => scrollToSection('products')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              {t.hero.cta}
            </button>
          </div>
          
          {/* Features */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Classic Variant */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                <div className="w-32 h-32 bg-red-200 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 font-bold">Classic</span>
                </div>
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
                <div className="w-32 h-32 bg-red-300 rounded-lg flex items-center justify-center">
                  <span className="text-red-700 font-bold">Intensive</span>
                </div>
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
                <div className="w-32 h-32 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 font-bold">Sensitive</span>
                </div>
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

