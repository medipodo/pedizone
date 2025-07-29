import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Phone, Mail, MapPin, Star, Award, Shield, Users } from 'lucide-react'
import './App.css'

// Ürün görselleri
import productSerum from './assets/IMG_7570.jpeg'
import productFoam from './assets/pedizone_foam.png'
import productSerum2 from './assets/IMG_7572.jpeg'
import productSerum3 from './assets/IMG_7574.jpeg'
import productSerum4 from './assets/IMG_7575.png'
import productBox1 from './assets/IMG_8135.jpeg'
import productBox2 from './assets/IMG_8137.jpeg'

// Ayak sorunları görselleri
import footFungus from './assets/foot-fungus-problem.jpg'
import footCallus from './assets/foot-callus-problem.jpg'
import footCrack from './assets/foot-crack-problem.jpg'
import footOdor from './assets/foot-odor-problem.jpg'

function App() {
  const [currentLang, setCurrentLang] = useState('tr')

  const content = {
    tr: {
      nav: {
        home: 'Ana Sayfa',
        products: 'Ürünler',
        about: 'Hakkımızda',
        solutions: 'Çözümler',
        contact: 'İletişim'
      },
      hero: {
        badge: 'Podolog Onaylı',
        title: 'Profesyonel Ayak Bakım Çözümleri',
        subtitle: 'PediZone®',
        description: 'Ayak sağlığı uzmanları tarafından geliştirilen, klinik testlerle kanıtlanmış etkili formüller ile ayaklarınızın sağlığını koruyun.',
        cta: 'Ürünleri Keşfedin',
        ctaSecondary: 'Uzman Desteği'
      },
      stats: {
        customers: '50.000+',
        customersLabel: 'Memnun Müşteri',
        specialists: '200+',
        specialistsLabel: 'Podolog Ortağı',
        experience: '10+',
        experienceLabel: 'Yıl Deneyim',
        products: '15+',
        productsLabel: 'Ürün Çeşidi'
      },
      products: {
        title: 'Ürün Portföyümüz',
        subtitle: 'Her ayak sorunu için özel olarak geliştirilmiş çözümler',
        items: [
          {
            name: 'PediZone® Mantar Karşıtı Serum',
            description: 'Ayak ve tırnak mantarı için özel formül',
            features: ['Hızlı etki', 'Doğal içerik', 'Günlük kullanım', 'Podolog onaylı'],
            image: productSerum,
            badge: 'En Popüler'
          },
          {
            name: 'PediZone® Temizleme Köpüğü',
            description: 'Derinlemesine temizlik ve koruma',
            features: ['Antibakteriyel', 'Koku giderici', 'Yumuşak formül', 'Günlük bakım'],
            image: productFoam,
            badge: 'Yeni'
          },
          {
            name: 'PediZone® Bakım Serumu',
            description: 'Genel ayak bakımı ve nemlendirme',
            features: ['Nemlendirici', 'Onarıcı', 'Koruyucu', 'Tüm cilt tipleri'],
            image: productSerum2,
            badge: 'Önerilen'
          }
        ]
      },
      solutions: {
        title: 'Ayak Sorunlarına Çözümler',
        subtitle: 'Uzman ekibimizle geliştirilen hedefli tedavi yaklaşımları',
        items: [
          {
            title: 'Mantar Enfeksiyonları',
            description: 'Ayak ve tırnak mantarı için etkili tedavi çözümleri',
            image: footFungus,
            solutions: ['Antifungal serum', 'Temizleme köpüğü', 'Koruyucu bakım']
          },
          {
            title: 'Nasır ve Kalınlaşma',
            description: 'Sert deri tabakalarını yumuşatan özel formüller',
            image: footCallus,
            solutions: ['Yumuşatıcı krem', 'Peeling serum', 'Nemlendirici']
          },
          {
            title: 'Çatlak ve Kuruluk',
            description: 'Kuru ve çatlak ayaklar için onarıcı bakım',
            image: footCrack,
            solutions: ['Onarıcı krem', 'Yoğun nemlendirici', 'Gece bakımı']
          },
          {
            title: 'Koku ve Terleme',
            description: 'Aşırı terleme ve koku problemleri için çözümler',
            image: footOdor,
            solutions: ['Deodorant serum', 'Antibakteriyel köpük', 'Terleme önleyici']
          }
        ]
      },
      about: {
        title: 'Neden PediZone®?',
        subtitle: 'Ayak sağlığında güvenilir çözüm ortağınız',
        features: [
          {
            icon: Award,
            title: 'Podolog Onaylı',
            description: 'Tüm ürünlerimiz ayak sağlığı uzmanları tarafından test edilmiş ve onaylanmıştır.'
          },
          {
            icon: Shield,
            title: 'Klinik Testli',
            description: 'Laboratuvar ortamında yapılan testlerle etkinliği kanıtlanmış formüller.'
          },
          {
            icon: Star,
            title: 'Doğal İçerikler',
            description: 'Doğal ve güvenli aktif bileşenlerle hazırlanmış, yan etki riski minimum.'
          },
          {
            icon: Users,
            title: 'Uzman Desteği',
            description: '7/24 uzman ekibimizden destek alabilir, sorularınızı yanıtlayabilirsiniz.'
          }
        ]
      },
      contact: {
        title: 'İletişime Geçin',
        subtitle: 'Sorularınız için buradayız',
        info: {
          address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
          phone: '05068860326',
          email: 'info@pedizone.com',
          instagram: '@pediz0ne'
        }
      }
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="pedizone-gradient shadow-xl sticky top-0 z-50">
        <div className="pedizone-container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">P</span>
              </div>
              <span className="pedizone-logo text-3xl text-white">
                PediZone<span className="text-red-200">®</span>
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.home}
              </a>
              <a href="#products" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.products}
              </a>
              <a href="#solutions" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.solutions}
              </a>
              <a href="#about" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.contact}
              </a>
            </nav>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Button
                variant={currentLang === 'tr' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setCurrentLang('tr')}
                className="text-white border-white/20"
              >
                🇹🇷 TR
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pedizone-hero-bg pedizone-section">
        <div className="pedizone-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
                {t.hero.badge}
              </Badge>
              
              <div className="space-y-4">
                <h1 className="pedizone-heading text-5xl lg:text-6xl text-gray-900">
                  {t.hero.title}
                </h1>
                <h2 className="pedizone-logo text-4xl text-red-600">
                  {t.hero.subtitle}
                </h2>
                <p className="pedizone-text text-xl text-gray-600 max-w-lg">
                  {t.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="pedizone-button text-lg">
                  {t.hero.cta}
                </Button>
                <Button variant="outline" className="pedizone-button-outline text-lg">
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={productSerum} 
                  alt="PediZone Serum" 
                  className="rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <img 
                  src={productFoam} 
                  alt="PediZone Köpük" 
                  className="rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="pedizone-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{t.stats.customers}</div>
              <div className="text-gray-600">{t.stats.customersLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{t.stats.specialists}</div>
              <div className="text-gray-600">{t.stats.specialistsLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{t.stats.experience}</div>
              <div className="text-gray-600">{t.stats.experienceLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{t.stats.products}</div>
              <div className="text-gray-600">{t.stats.productsLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="pedizone-section bg-gray-50">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.products.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600 max-w-3xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.products.items.map((product, index) => (
              <Card key={index} className="pedizone-card relative overflow-hidden">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                    {product.badge}
                  </Badge>
                )}
                
                <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-0">
                  <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="pedizone-text text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full pedizone-button">
                    Detayları İncele
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="pedizone-section bg-white">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.solutions.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600 max-w-3xl mx-auto">
              {t.solutions.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {t.solutions.items.map((solution, index) => (
              <Card key={index} className="pedizone-card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-48 md:h-full object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="pedizone-text text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2">
                      {solution.solutions.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pedizone-section bg-gray-50">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {t.about.features.map((feature, index) => (
              <Card key={index} className="pedizone-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  
                  <div>
                    <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="pedizone-text text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pedizone-section bg-white">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                  <p className="text-gray-600">{t.contact.info.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600">{t.contact.info.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                  <p className="text-gray-600">{t.contact.info.email}</p>
                </div>
              </div>
            </div>

            <Card className="pedizone-card">
              <h3 className="pedizone-heading text-xl text-gray-900 mb-6">
                Bize Ulaşın
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Adınızı girin"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="E-posta adresinizi girin"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Mesajınızı yazın"
                  ></textarea>
                </div>
                
                <Button className="w-full pedizone-button">
                  Mesaj Gönder
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pedizone-gradient text-white py-12">
        <div className="pedizone-container">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">P</span>
              </div>
              <span className="pedizone-logo text-2xl">
                PediZone<span className="text-red-200">®</span>
              </span>
            </div>
            
            <p className="text-red-100 mb-6">
              Ayak sağlığınız için güvenilir çözüm ortağınız
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#home" className="text-red-200 hover:text-white transition-colors">Ana Sayfa</a>
              <a href="#products" className="text-red-200 hover:text-white transition-colors">Ürünler</a>
              <a href="#solutions" className="text-red-200 hover:text-white transition-colors">Çözümler</a>
              <a href="#about" className="text-red-200 hover:text-white transition-colors">Hakkımızda</a>
              <a href="#contact" className="text-red-200 hover:text-white transition-colors">İletişim</a>
            </div>
            
            <div className="border-t border-red-400/30 pt-6">
              <p className="text-red-200 text-sm">
                © 2024 PediZone®. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

