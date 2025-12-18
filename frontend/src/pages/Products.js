import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Products() {
  const products = [
    {
      id: 'ayak-temizleme-kopugu',
      name: 'Ayak Temizleme Köpüğü',
      price: '299 TL',
      image: '/assets/pedizone-foot-foam-new-bfspf5ij.jpg',
      description: 'Derinlemesine temizlik ve koruma sağlayan ayak temizleme köpüğü. Antibakteriyel, koku giderici, yumuşak formül.',
      features: ['Antibakteriyel', 'Koku giderici', 'Yumuşak formül', '200 ml']
    },
    {
      id: 'urea-intense-repair-cream',
      name: '%15 Üreli Yoğun Onarıcı Kremi',
      price: '349 TL',
      image: '/assets/topuk-kremi-pedizone-intense-c6gga9ou.jpg',
      description: 'Çatlak topuklar ve aşırı kuruluk için profesyonel bakım kremi. %15 urea içeriği ile yoğun onarım.',
      features: ['%15 Urea', 'Yoğun nemlendirme', 'Hızlı emilim', '150 ml']
    },
    {
      id: 'foot-nail-care-serum',
      name: 'Tırnak ve Ayak Serumu',
      price: '399 TL',
      image: '/assets/pedizone-serum-new-bhg1pnig.jpg',
      description: 'Ayak ve tırnak sağlığı için özel formül. Tırnak mantarı eğilimine karşı koruma, mat tırnakları canlandırma.',
      features: ['Mantar karşıtı', 'Tırnak canlandırıcı', 'Koku giderici', '50 ml']
    }
  ];

  return (
    <>
      <Helmet>
        <title>PediZone Ürünleri | Profesyonel Ayak Bakım</title>
        <meta name="description" content="PediZone profesyonel ayak bakım ürünleri. Podolog onaylı temizleme köpüğü, kremi ve serumu." />
        <link rel="canonical" href="https://pedizone.com/urunler" />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PediZone Ürünleri</h1>
          <p className="text-xl text-red-100">Podolog Onaylı Profesyonel Ayak Bakım Ürünleri</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Özellikler:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={`/urunler/${product.id}`}
                    className="block w-full bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition text-center"
                  >
                    Detaylı Bilgi
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PediZone */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Neden PediZone?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold mb-2">Podolog Onaylı</h3>
              <p className="text-gray-600">Tüm ürünlerimiz podologlar tarafından onaylanmıştır.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="font-bold mb-2">Bilimsel Formül</h3>
              <p className="text-gray-600">Laboratuvarda test edilmiş, etkili formülasyonlar.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold mb-2">Güvenli Kullanım</h3>
              <p className="text-gray-600">Dermatologik olarak test edilmiş, güvenli ürünler.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600">Türkiye genelinde hızlı ve güvenli kargo.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
