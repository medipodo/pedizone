import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

// Import product images
import productSerum from '../assets/IMG_7571_optimized.webp'
import productFoam from '../assets/Pedizone Foot Foam.jpg'
import productSerum2 from '../assets/pedizone-urea-cream.jpg'

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
      name: 'PediZone® Mantar Karşıtı Serum',
      description: 'Ayak ve tırnak mantarı için özel formül',
      image: productSerum,
      badge: 'En Popüler',
      features: [
        'Hızlı etki',
        'Doğal içerik', 
        'Günlük kullanım',
        'Podolog onaylı'
      ],
      detailedDescription: 'PediZone® Mantar Karşıtı Serum, ayak ve tırnak mantarı problemlerine karşı geliştirilmiş etkili bir çözümdür. Doğal aktif bileşenleri sayesinde mantarla mücadele ederken cildi besler ve korur.',
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
      <div className="pedizone-container py-12">
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
              <p className="text-gray-700 leading-relaxed">
                {product.detailedDescription}
              </p>
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

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-medium text-gray-900 mb-2">Çalışma Saatleri</h4>
                    <p className="text-sm text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-sm text-gray-600">Cumartesi: 09:00 - 16:00</p>
                    <p className="text-sm text-gray-600">Pazar: Kapalı</p>
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

