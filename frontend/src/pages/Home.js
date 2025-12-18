import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Teşekkürler! E-posta adresiniz kaydedildi.');
    setEmail('');
  };

  return (
    <>
      <Helmet>
        <title>PediZone® - Profesyonel Ayak Bakım Ürünleri | Podolog Onaylı</title>
        <meta name="description" content="PediZone® profesyonel ayak bakım ürünleri. Podologların tavsiye ettiği; tırnak ve ayak karşıtı serumu, temizleme köpüğü ve üreli yoğun nemlendirici ayak kremi ile ayak sağlığınızı koruyun." />
        <meta name="keywords" content="ayak bakımı, mantar tedavisi, podolog onaylı, ayak sağlığı, PediZone, tırnak mantarı, ayak mantarı" />
        <link rel="canonical" href="https://pedizone.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Ayak Sağlığınız İçin Profesyonel Çözümler
              </h1>
              <p className="text-xl mb-8 text-red-100">
                PediZone®, podologların tavsiye ettiği, bilimsel olarak kanıtlanmış ayak bakım ürünleri ile ayak sağlığınızı koruyun.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/urunler" 
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition"
                >
                  Ürünleri Keşfet
                </Link>
                <Link 
                  to="/blog" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition"
                >
                  Blog Yazıları
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/assets/pedizone-serum-new-bhg1pnig.jpg" 
                alt="PediZone Ürünleri" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Ürünlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <img 
                src="/assets/pedizone-foot-foam-new-bfspf5ij.jpg" 
                alt="Ayak Temizleme Köpüğü" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Ayak Temizleme Köpüğü</h3>
              <p className="text-gray-600 mb-4">
                Derinlemesine temizlik ve koruma sağlayan ayak temizleme köpüğü. Antibakteriyel, koku giderici, yumuşak formül.
              </p>
              <Link to="/urunler/ayak-temizleme-kopugu" className="text-red-600 font-bold hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <img 
                src="/assets/topuk-kremi-pedizone-intense-c6gga9ou.jpg" 
                alt="Üreli Yoğun Onarıcı Kremi" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">%15 Üreli Yoğun Onarıcı Kremi</h3>
              <p className="text-gray-600 mb-4">
                Çatlak topuklar ve aşırı kuruluk için profesyonel bakım kremi. %15 urea içeriği ile yoğun onarım.
              </p>
              <Link to="/urunler/urea-intense-repair-cream" className="text-red-600 font-bold hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <img 
                src="/assets/pedizone-serum-new-bhg1pnig.jpg" 
                alt="Tırnak ve Ayak Serumu" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Tırnak ve Ayak Serumu</h3>
              <p className="text-gray-600 mb-4">
                Ayak ve tırnak sağlığı için özel formül. Tırnak mantarı eğilimine karşı koruma, mat tırnakları canlandırma.
              </p>
              <Link to="/urunler/foot-nail-care-serum" className="text-red-600 font-bold hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Blog Yazıları</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/blog/ayak-hijyeni-ipuclari" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src="/assets/blog-images/ayak-hijyeni-blog-d1s9wrez.jpg" 
                alt="Ayak Hijyeni" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ayak Hijyeni ve Bakım İpuçları</h3>
                <p className="text-gray-600">Gün içinde attığımız her adım, ayaklarımızın sağlığını doğrudan etkiler...</p>
              </div>
            </Link>

            <Link to="/blog/ayak-kokusu-nedenleri" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src="/assets/blog-images/ayak-kokusu-blog-d6lm2ov0.jpg" 
                alt="Ayak Kokusu" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ayak Kokusu Nedenleri ve Çözümleri</h3>
                <p className="text-gray-600">Ayak kokusu, sosyal yaşamda utanç kaynağı olabilen bir sorundur...</p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
              Tüm Blog Yazıları
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ayak Sağlığı İpuçları İçin Bültenimize Abone Olun</h2>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
