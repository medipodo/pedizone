import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

// Import product images
import productSerum from '../assets/IMG_7571_optimized.webp'
import productFoam from '../assets/pedizone-foot-foam-product.jpg'
import productSerum2 from '../assets/pedizone-urea-cream-new.png'

// Import additional product images for serum
import serumSalicylicAcid from '../assets/products/pedizone-serum-salisilik-asit-tanitim.jpg'
import serumBoxDetail from '../assets/products/pedizone-50ml-serum-kutu-detay.jpg'
import treatmentBeforeAfter from '../assets/products/pedizone-mantar-tedavi-oncesi-sonrasi.jpg'
import podologistApplication from '../assets/products/pedizone-podolog-uygulama-klinik.jpg'

const ProductDetail = () => {
  const { productId } = useParams()
  const navigate = useNavigate()

  // Sayfa yüklendiğinde scroll pozisyonunu en üste getir
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  // Product data
  const products = {
    'mantar-karsiti-serum': {
      id: 'mantar-karsiti-serum',
      name: 'PediZone® Foot and Nail Care Serum',
      description: 'Ayak ve tırnak bakımı için etkili formül',
      image: productSerum,
      badge: 'En Popüler',
      features: [
        'Hızlı etki',
        'Doğal içerik', 
        'Günlük kullanım',
        'Podolog onaylı'
      ],
      detailedDescription: (
        <div style={{lineHeight: 1.7}}>
          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Ayak Bakımının Önemi</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>Ayaklarımız gün boyu ayakkabı içinde kalan, nem ve sürtünmeye maruz kalan bölgelerimizdir. Bu durum zamanla ayaklarda kötü kokuya, tırnaklarda mat görünüme ve ciltte yıpranmaya yol açabilir. Düzenli bakım, hem sağlıklı hem de ferah bir his için oldukça önemlidir.</p>
          
          <p style={{marginBottom: '1rem', color: '#4b5563'}}><strong style={{color: '#dc2626'}}>PediZone® Foot and Nail Care Serum</strong>, ayak ve tırnakların daha bakımlı görünümünü desteklemek üzere özel olarak geliştirilmiştir.</p>

          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <img src={serumSalicylicAcid} alt="PediZone Serum Salisilik Asit İçeriği" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>Salisilik asit içeriği ile etkili ayak ve tırnak bakımı</p>
          </div>

          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Etkili Formül</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>Serumun içeriğinde bulunan doğal aktif bileşenler, cildi beslemeye ve korumaya yardımcı olur. Düzenli kullanımda ayak ve tırnakların doğal yapısını destekler, kötü kokuların azalmasına katkı sağlar ve ferah bir his verir. Böylece ayaklarınız gün boyu rahat ve bakımlı kalır.</p>

          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <img src={serumBoxDetail} alt="PediZone 50ml Serum Kutu Detayı" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>50ml kişiye özel kilitli kapak ile güvenli ambalaj</p>
          </div>

          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Nasıl Kullanılır?</h3>
          <p style={{marginBottom: '0.75rem', color: '#4b5563'}}>Günlük ayak bakım rutininize PediZone® Foot and Nail Care Serum'u dahil etmek oldukça kolaydır:</p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', color: '#4b5563'}}>
            <li style={{marginBottom: '0.5rem'}}>Öncelikle ayaklarınızı temizleyip iyice kurulayın</li>
            <li style={{marginBottom: '0.5rem'}}>Birkaç damla serumu tırnaklarınıza ve çevresine uygulayın</li>
            <li style={{marginBottom: '0.5rem'}}>Hafifçe masaj yaparak emilmesini sağlayın</li>
          </ul>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>Düzenli kullanım, ayak bakımınızın bir parçası haline geldiğinde etkili sonuçlar almanıza yardımcı olacaktır.</p>

          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Tedavi Etkinliği</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>PediZone® Serum'un etkinliği klinik gözlemlerle kanıtlanmıştır. Düzenli kullanımda tırnak mantarı ve ayak problemlerinde belirgin iyileşme görülmektedir.</p>
          
          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <img src={treatmentBeforeAfter} alt="PediZone Mantar Tedavisi Öncesi Sonrası" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>Pedizone Serum düzenli kullanımda gözle görülür ilerleme</p>
          </div>

          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Uzman Önerileri</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>Uzmanlar, sağlıklı ayaklar için haftada birkaç kez peeling veya ayak banyosu yapmayı, sonrasında ise nemlendirici ve bakım ürünleri kullanmayı önermektedir. PediZone® Serum, bu rutini tamamlayan güçlü bir bakım desteği sunar.</p>
          
          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <img src={podologistApplication} alt="PediZone Podolog Uygulama Klinik" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>Podolog tarafından profesyonel uygulama</p>
          </div>
          
          <p style={{marginBottom: '1.5rem', color: '#4b5563'}}>Düzenli bakım ile hem tırnaklarınız hem de cildiniz daha sağlıklı bir görünüme kavuşur.</p>

          <div style={{backgroundColor: '#fef3f2', borderLeft: '4px solid #dc2626', padding: '1rem', marginTop: '1.5rem', borderRadius: '0.375rem'}}>
            <p style={{margin: 0, color: '#7c2d12', fontStyle: 'italic'}}><strong>Unutmayın:</strong> Ayak sağlığı günlük yaşam konforunun önemli bir parçasıdır. PediZone® ile ayak ve tırnaklarınıza düzenli bakım yaparak ferah, sağlıklı ve bakımlı hissetmenin keyfini çıkarabilirsiniz.</p>
          </div>
        </div>
      ),
      ingredients: [
        'Tea Tree Oil - Doğal antifungal etki',
        'Urea - Nemlendirici ve yumuşatıcı',
        'Salicylic Acid - Ölü deri hücrelerini temizler',
        'Vitamin E - Antioksidan koruma'
      ],
      usage: 'Temiz ve kuru ayaklara günde 2 kez uygulayın. Etkilenen bölgeye ince bir tabaka halinde sürün ve masaj yapın. Düzenli kullanımda 2-4 hafta içinde sonuç alabilirsiniz.',
      volume: '50ml'
    },
    'temizleme-kopugu': {
      id: 'temizleme-kopugu',
      name: 'PediZone® Ayak Temizleme Köpüğü',
      description: 'Derinlemesine temizlik ve koruma',
      image: productFoam,
      badge: 'Yeni',
      features: [
        'Antibakteriyel',
        'Koku giderici',
        'Yumuşak formül',
        'Günlük bakım'
      ],
      detailedDescription: 'PediZone® Temizleme Köpüğü, ayakların günlük temizliği için özel olarak formüle edilmiştir. Antibakteriyel özellikleri sayesinde mikroorganizmaları temizlerken cildi kurutmaz.',
      ingredients: [
        'Chlorhexidine - Antibakteriyel etki',
        'Aloe Vera - Yatıştırıcı ve nemlendirici',
        'Menthol - Serinletici etki',
        'Panthenol - Cilt onarıcı'
      ],
      usage: 'Islak ayaklara köpük halinde uygulayın. 1-2 dakika masaj yapın ve bol suyla durulayın. Günde 1-2 kez kullanabilirsiniz.',
      volume: '200ml'
    },
    'bakim-serumu': {
      id: 'bakim-serumu',
      name: 'PediZone® %15 Üreli Çatlak Topuk ve Ayak Kremi',
      description: 'Genel ayak bakımı ve nemlendirme',
      image: productSerum2,
      badge: 'Önerilen',
      features: [
        'Nemlendirici',
        'Onarıcı',
        'Koruyucu',
        'Tüm cilt tipleri'
      ],
      detailedDescription: 'PediZone® %15 Üreli Çatlak Topuk ve Ayak Kremi, %15 Urea içeriği ile yoğun nemlendirme sağlar. Çatlak ve kuru ayaklar için ideal olan bu krem, cildi yumuşatır ve esnek tutar.',
      ingredients: [
        '%15 Urea - Yoğun nemlendirme',
        'Shea Butter - Besleyici ve koruyucu',
        'Avocado Oil - Vitamin açısından zengin',
        'Glycerin - Nem tutucu'
      ],
      usage: 'Temiz ayaklara gece yatmadan önce uygulayın. Özellikle topuk ve çatlak bölgelere odaklanın. Düzenli kullanımda cildin yumuşaklığını hissedeceksiniz.',
      volume: '150ml'
    }
  }

  const product = products[productId]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ürün bulunamadı</h1>
          <Button onClick={() => navigate('/')} className="pedizone-button">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="pedizone-gradient text-white py-4">
        <div className="pedizone-container">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ana Sayfaya Dön
            </Button>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold">Pedizone</span>
              <span className="text-sm">®</span>
            </div>
          </div>
        </div>
      </header>

      {/* Product Detail Content */}
      <div className="pedizone-container py-12 pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.badge && (
              <div className="text-center">
                <Badge className="bg-red-600 text-white px-6 py-2 text-lg">
                  {product.badge}
                </Badge>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="pedizone-heading text-4xl text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="pedizone-text text-xl text-gray-600 mb-6">
                {product.description}
              </p>
              
              <div className="mb-6">
                <span className="text-lg text-gray-500">({product.volume})</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="pedizone-heading text-2xl text-gray-900 mb-4">
                Ürün Özellikleri
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="pedizone-heading text-2xl text-gray-900 mb-4">
                Ürün Açıklaması
              </h3>
              <div className="text-gray-700 leading-relaxed product-description-content">
                {product.detailedDescription}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="pedizone-heading text-2xl text-gray-900 mb-4">
                İçerik
              </h3>
              <div className="space-y-2">
                {product.ingredients.map((ingredient, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage */}
            <div>
              <h3 className="pedizone-heading text-2xl text-gray-900 mb-4">
                Kullanım Şekli
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.usage}
              </p>
            </div>

            {/* Podolog Recommendation */}
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                Podolog Önerisi
              </h3>
              <p className="text-gray-700">
                Bu ürün, ayak sağlığı uzmanları tarafından test edilmiş ve onaylanmıştır. 
                Düzenli kullanımda etkili sonuçlar alabilirsiniz. Herhangi bir yan etki 
                durumunda kullanımı bırakın ve uzmanınıza danışın.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="pedizone-heading text-2xl text-gray-900 mb-6">
                    Ürün Hakkında Bilgi Al
                  </h3>
                  
                  <form className="space-y-4">
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
                        Telefon
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Telefon numaranızı girin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mesaj
                      </label>
                      <textarea 
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Ürün hakkında sormak istediğiniz soruları yazın"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full pedizone-button">
                      <Mail className="w-4 h-4 mr-2" />
                      Bilgi Talep Et
                    </Button>
                  </form>
                </div>

                <div className="space-y-6">
                  <h3 className="pedizone-heading text-2xl text-gray-900">
                    İletişim Bilgileri
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Adres</p>
                        <p className="text-gray-600">Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Telefon</p>
                        <p className="text-gray-600">05068860326</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">E-posta</p>
                        <p className="text-gray-600">info@pedizone.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

