import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function BlogDetail() {
  const { slug } = useParams();

  const blogContent = {
    'ayak-hijyeni-ipuclari': {
      title: 'Ayak Hijyeni ve Bakım İpuçları',
      date: '15 Aralık 2025',
      readTime: '5 dakika',
      image: '/assets/blog-images/ayak-hijyeni-blog-d1s9wrez.jpg',
      content: `
        <p>Gün içinde attığımız her adım, ayaklarımızın sağlığını doğrudan etkiler. Ancak çoğu zaman ayak hijyeni göz ardı edilir. Oysa doğru bakım yapılmadığında kötü koku, mantar, nasır, çatlak topuklar ve tırnak problemleri gibi birçok sorun ortaya çıkabilir. Sağlıklı, bakımlı ve rahat ayaklar için düzenli hijyen alışkanlıkları edinmek ve kaliteli ayak sağlığı ürünleri kullanmak oldukça önemlidir.</p>

        <h2>Neden Ayak Hijyeni Önemlidir?</h2>
        <ul>
          <li><strong>Enfeksiyon riskini azaltır:</strong> Ayaklar gün boyu ayakkabı içinde havasız kaldığı için bakteri ve mantar üremesi kolaylaşır. Düzenli hijyen, bu riskleri minimuma indirir.</li>
          <li><strong>Kötü kokuyu önler:</strong> Terleme ve bakteri birleşimi kötü kokuya yol açar. Doğru bakım sayesinde bu problem ortadan kalkar.</li>
          <li><strong>Konfor sağlar:</strong> Nemli, bakımsız ayaklar yürüyüş ve günlük aktivitelerde rahatsızlığa neden olur. Sağlıklı ayaklar ise daha konforlu bir yaşam sunar.</li>
          <li><strong>Estetik açıdan önemlidir:</strong> Bakımlı ayaklar hem özgüveni artırır hem de dış görünüşü olumlu etkiler.</li>
        </ul>

        <h2>Günlük Ayak Hijyeni İçin Basit İpuçları</h2>
        <ol>
          <li><strong>Ayaklarınızı her gün yıkayın:</strong> Ilık su ve nazik temizleyiciler kullanın. Çok sıcak su cildi kurutabilir.</li>
          <li><strong>Tırnak bakımına özen gösterin:</strong> Tırnakları çok kısa kesmek batmaya yol açabilir. Düz kesmeye dikkat edin.</li>
          <li><strong>Kuruluğu giderin:</strong> Banyo sonrası ayakları iyi kurulayın. Özellikle parmak aralarında nem kalmaması önemlidir.</li>
          <li><strong>Kaliteli ürün kullanın:</strong> PediZone gibi podolog onaylı ürünler, ayak sağlığını korumaya yardımcı olur.</li>
          <li><strong>Düzenli pedikür yapın:</strong> Ölü deri ve kalınlaşmış bölgeleri temizletmek önemlidir.</li>
        </ol>

        <h2>PediZone Ürünleri ile Ayak Bakımı</h2>
        <p>PediZone ayak temizleme köpüğü, antibakteriyel özellikleri sayesinde ayakları derinlemesine temizler. Tırnak ve ayak serumu ise mantar enfeksiyonlarına karşı koruma sağlar. Düzenli kullanımı, ayak sağlığınızı önemli ölçüde iyileştirebilir.</p>
      `
    },
    'ayak-kokusu-nedenleri': {
      title: 'Ayak Kokusu Nedenleri ve Çözümleri',
      date: '14 Aralık 2025',
      readTime: '6 dakika',
      image: '/assets/blog-images/ayak-kokusu-blog-d6lm2ov0.jpg',
      content: `
        <p>Ayak kokusu, sosyal yaşamda utanç kaynağı olabilen bir sorundur. Ancak doğru bakım ve ürünlerle bu problem çözülebilir.</p>
        
        <h2>Ayak Kokusu Nedenleri</h2>
        <ul>
          <li>Aşırı terleme (hiperhidroz)</li>
          <li>Bakteri ve mantar üremesi</li>
          <li>Kötü hijyen alışkanlıkları</li>
          <li>Uygun olmayan ayakkabı seçimi</li>
          <li>Bazı tıbbi koşullar</li>
        </ul>

        <h2>Çözüm Yolları</h2>
        <p>Ayak kokusu sorununu çözmek için:</p>
        <ol>
          <li>Günlük ayak hijyenine dikkat edin</li>
          <li>Nefes alan ayakkabılar seçin</li>
          <li>Çorap sık sık değiştirin</li>
          <li>PediZone ayak temizleme köpüğü kullanın</li>
          <li>Gerekirse doktor veya podologa başvurun</li>
        </ol>
      `
    },
    'ayak-mantari-nedir': {
      title: 'Ayak Mantarı Nedir ve Nasıl Tedavi Edilir',
      date: '13 Aralık 2025',
      readTime: '7 dakika',
      image: '/assets/blog-images/ayak-mantari-tedavi-optimized-bnw6r6oh.png',
      content: `
        <p>Ayak mantarı, özellikle nemli ve sıcak ortamlarda hızla yayılan bir enfeksiyondur. Erken teşhis ve tedavi çok önemlidir.</p>
        
        <h2>Ayak Mantarı Belirtileri</h2>
        <ul>
          <li>Ayakta kaşıntı ve yanma hissi</li>
          <li>Kızarıklık ve deri soyulması</li>
          <li>Çatlaklar ve ağrı</li>
          <li>Kötü koku</li>
        </ul>

        <h2>Tedavi Yöntemleri</h2>
        <p>Ayak mantarı tedavisi, durumun ciddiyetine bağlı olarak değişir. Hafif durumlarda PediZone tırnak ve ayak serumu yeterli olabilir. Daha ciddi durumlarda ise doktor veya podologa başvurmak gerekir.</p>
      `
    },
    'medikal-ayak-bakimi-nedir': {
      title: 'Medikal Ayak Bakımı Nedir ve Kimlere Gereklidir',
      date: '12 Aralık 2025',
      readTime: '8 dakika',
      image: '/assets/medikal-ayak-bakimi-cxovbie1.jpg',
      content: `
        <p>Medikal ayak bakımı, özellikle diyabet ve diğer kronik hastalıkları olan kişiler için hayati önem taşır.</p>
        
        <h2>Medikal Ayak Bakımı Kimler İçin Gereklidir?</h2>
        <ul>
          <li>Diyabetli hastalar</li>
          <li>Dolaşım problemleri olanlar</li>
          <li>Yaşlı bireyler</li>
          <li>Nöropati (sinir hastalığı) olanlar</li>
        </ul>

        <h2>Medikal Ayak Bakımının Faydaları</h2>
        <p>Düzenli medikal ayak bakımı, enfeksiyonları önler, ağrıyı azaltır ve yaşam kalitesini artırır.</p>
      `
    },
    'serum-kullanim-onemi': {
      title: 'Ayak Serumu Kullanımının Önemi',
      date: '11 Aralık 2025',
      readTime: '5 dakika',
      image: '/assets/pedizone-serum-kullanimi-bpnsuod2.jpg',
      content: `
        <p>Ayak serumu, tırnak ve ayak sağlığı için özel olarak formüle edilmiş bir üründür. Düzenli kullanımı önemli faydalar sağlar.</p>
        
        <h2>PediZone Serumunun Faydaları</h2>
        <ul>
          <li>Mantar enfeksiyonlarına karşı koruma</li>
          <li>Tırnak sağlığını destekler</li>
          <li>Kötü kokuyu giderir</li>
          <li>Ayak cildi için beslenme sağlar</li>
        </ul>

        <h2>Kullanım Önerileri</h2>
        <p>PediZone serumunu günde 1-2 kez, temiz ayaklara uygulanız. Düzenli kullanım en iyi sonuçları verir.</p>
      `
    },
    'spor-sonrasi-ayak-bakimi': {
      title: 'Spor Sonrası Ayak Bakımı',
      date: '10 Aralık 2025',
      readTime: '6 dakika',
      image: '/assets/spor-blog-kapak-gorseli-3d-0502k.jpg',
      content: `
        <p>Sporcu ayakları özel bakım gerektirir. Spor sonrası doğru bakım rutini, yaralanmaları ve sorunları önler.</p>
        
        <h2>Spor Sonrası Ayak Bakım Adımları</h2>
        <ol>
          <li>Ayakkabıları ve çorapları hemen çıkarın</li>
          <li>Ayakları soğuk suyla yıkayın</li>
          <li>PediZone ayak temizleme köpüğü kullanın</li>
          <li>İyi kurulayın</li>
          <li>Gerekirse PediZone serumu uygulayın</li>
        </ol>

        <h2>Yaralanma Önleme</h2>
        <p>Uygun spor ayakkabısı seçimi ve düzenli bakım, spor yaralanmalarını önemli ölçüde azaltır.</p>
      `
    },
    'tirnak-mantari-cesitleri': {
      title: 'Tırnak Mantarı Çeşitleri ve Tedavi Yöntemleri',
      date: '9 Aralık 2025',
      readTime: '7 dakika',
      image: '/assets/tirnak-mantari-cesitleri-cwb98cmj.jpg',
      content: `
        <p>Tırnak mantarı birçok çeşidi vardır ve her birinin farklı tedavi yöntemi gerekebilir.</p>
        
        <h2>Tırnak Mantarı Çeşitleri</h2>
        <ul>
          <li>Dermatophyte enfeksiyonları</li>
          <li>Candida enfeksiyonları</li>
          <li>Non-dermatophyte mold enfeksiyonları</li>
        </ul>

        <h2>Tedavi Seçenekleri</h2>
        <p>Hafif durumlarda PediZone tırnak ve ayak serumu etkili olabilir. Daha ciddi durumlarda ise antifungal ilaçlar veya profesyonel tedavi gerekebilir.</p>
      `
    }
  };

  const post = blogContent[slug] || blogContent['ayak-hijyeni-ipuclari'];

  return (
    <>
      <Helmet>
        <title>{post.title} | PediZone Blog</title>
        <meta name="description" content={post.title} />
        <link rel="canonical" href={`https://pedizone.com/blog/${slug}`} />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="text-red-100 hover:text-white mb-4 inline-block">
            ← Blog'a Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-red-100">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} okuma</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">İlgili Ürünler</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img 
                src="/assets/pedizone-foot-foam-new-bfspf5ij.jpg" 
                alt="Ayak Temizleme Köpüğü" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Ayak Temizleme Köpüğü</h3>
              <p className="text-gray-600 mb-4">Derinlemesine temizlik ve koruma sağlayan ayak temizleme köpüğü.</p>
              <Link to="/urunler/ayak-temizleme-kopugu" className="text-red-600 font-bold hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <img 
                src="/assets/topuk-kremi-pedizone-intense-c6gga9ou.jpg" 
                alt="Üreli Yoğun Onarıcı Kremi" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">%15 Üreli Yoğun Onarıcı Kremi</h3>
              <p className="text-gray-600 mb-4">Çatlak topuklar ve aşırı kuruluk için profesyonel bakım kremi.</p>
              <Link to="/urunler/urea-intense-repair-cream" className="text-red-600 font-bold hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <img 
                src="/assets/pedizone-serum-new-bhg1pnig.jpg" 
                alt="Tırnak ve Ayak Serumu" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Tırnak ve Ayak Serumu</h3>
              <p className="text-gray-600 mb-4">Ayak ve tırnak sağlığı için özel formül.</p>
              <Link to="/urunler/foot-nail-care-serum" className="text-red-600 font-bold hover:underline">
                Detaylı Bilgi →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
