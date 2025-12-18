import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function ProductDetail() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);

  const products = {
    'ayak-temizleme-kopugu': {
      name: 'Ayak Temizleme Köpüğü',
      price: '299 TL',
      image: '/assets/pedizone-foot-foam-new-bfspf5ij.jpg',
      description: 'Derinlemesine temizlik ve koruma sağlayan ayak temizleme köpüğü. Antibakteriyel, koku giderici, yumuşak formül.',
      details: {
        volume: '200 ml',
        benefits: [
          'Derinlemesine temizlik',
          'Antibakteriyel özellik',
          'Koku giderici',
          'Yumuşak ve nazik formül',
          'Tüm cilt tiplerinde kullanılabilir'
        ],
        usage: 'Ayaklarınızı ılık su ile ıslatın. Köpüğü bol miktarda ayaklara uygulayın ve masaj yaparak 2-3 dakika bekletin. Iyice durulayın ve kurutun.',
        ingredients: 'Su, sodyum lauril sülfat, kokamidopropil betain, gliserin, çay ağacı yağı, lavanta yağı'
      }
    },
    'urea-intense-repair-cream': {
      name: '%15 Üreli Yoğun Onarıcı Kremi',
      price: '349 TL',
      image: '/assets/topuk-kremi-pedizone-intense-c6gga9ou.jpg',
      description: 'Çatlak topuklar ve aşırı kuruluk için profesyonel bakım kremi. %15 urea içeriği ile yoğun onarım.',
      details: {
        volume: '150 ml',
        benefits: [
          '%15 Urea içeriği',
          'Yoğun nemlendirme',
          'Hızlı emilim',
          'Çatlak topukları onarır',
          'Cildi yumuşatır'
        ],
        usage: 'Temiz ve kuru ayaklara günde 1-2 kez uygulayın. Özellikle topuk ve kuru bölgelere masaj yaparak uygulayın.',
        ingredients: 'Urea, gliserin, lanolin, beeswax, vitamin E, çay ağacı yağı'
      }
    },
    'foot-nail-care-serum': {
      name: 'Tırnak ve Ayak Serumu',
      price: '399 TL',
      image: '/assets/pedizone-serum-new-bhg1pnig.jpg',
      description: 'Ayak ve tırnak sağlığı için özel formül. Tırnak mantarı eğilimine karşı koruma, mat tırnakları canlandırma.',
      details: {
        volume: '50 ml',
        benefits: [
          'Mantar karşıtı özellik',
          'Tırnak sağlığını destekler',
          'Mat tırnakları canlandırır',
          'Kötü kokuyu giderir',
          'Ayak cildi için beslenme'
        ],
        usage: 'Temiz ayaklara günde 1-2 kez uygulayın. Tırnak ve çevresi ile ayak tabanına masaj yaparak uygulayın.',
        ingredients: 'Salisilik asit, çay ağacı yağı, limon yağı, vitamin E, gliserin'
      }
    }
  };

  const product = products[slug] || products['ayak-temizleme-kopugu'];

  return (
    <>
      <Helmet>
        <title>{product.name} | PediZone</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://pedizone.com/urunler/${slug}`} />
      </Helmet>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 text-gray-600">
            <Link to="/" className="hover:text-red-600">Anasayfa</Link>
            <span>/</span>
            <Link to="/urunler" className="hover:text-red-600">Ürünler</Link>
            <span>/</span>
            <span className="text-gray-900 font-bold">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Details */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-red-600 mb-6">{product.price}</p>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3">Hacim: {product.details.volume}</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <label className="font-bold">Miktar:</label>
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 border-l border-r">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition mb-4">
                  Sepete Ekle
                </button>
                <button className="w-full border-2 border-red-600 text-red-600 py-3 rounded-lg font-bold hover:bg-red-50 transition">
                  Hemen Satın Al
                </button>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Faydaları:</h3>
                <ul className="space-y-2">
                  {product.details.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Kullanım Talimatları</h2>
          <p className="text-lg text-gray-700 mb-6">{product.details.usage}</p>

          <h3 className="text-2xl font-bold mb-4">İçerik:</h3>
          <p className="text-gray-700">{product.details.ingredients}</p>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">İlgili Ürünler</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(products)
              .filter(([key]) => key !== slug)
              .map(([key, prod]) => (
                <Link 
                  key={key}
                  to={`/urunler/${key}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{prod.name}</h3>
                    <p className="text-red-600 font-bold">{prod.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
