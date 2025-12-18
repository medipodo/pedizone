import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';

const NasirSigilBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nasır ve Siğil Farkları - Tedavi Yöntemleri | Medipodo Bağlıca</title>
        <meta name="description" content="Nasır ve plantar siğil arasındaki farklar, tedavi yöntemleri ve kriyoterapi uygulamaları. Medipodo Bağlıca'da uzman podolog ile kalıcı çözüm." />
        <meta name="keywords" content="nasır, siğil, plantar siğil, verruca plantaris, nasır tedavisi, siğil tedavisi, kriyoterapi, ayak sağlığı, podolog, Medipodo, Bağlıca" />
        <meta property="og:title" content="Nasır ve Siğil Farkları - Tedavi Yöntemleri | Medipodo Bağlıca" />
        <meta property="og:description" content="Nasır ve plantar siğil arasındaki farklar, tedavi yöntemleri ve kriyoterapi uygulamaları." />
        <meta property="og:image" content="https://medipodo.com/blog-images/nasir-sigil/Nasır Nedir görseli.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://medipodo.com/blog/nasir-sigil-farklari" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Blog'a Dön
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Nasır Nedir? Plantar Siğil Nedir? Nasıl Ayırt Edilir? Hangi Yöntemler Uygulanır?
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Podoloji Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>18 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Giriş */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ayağınızın tabanında, attığınız her adımda iğne gibi batan keskin bir acı mı hissediyorsunuz? Ayakkabınızı çıkardığınızda sizi rahatsız eden o sertliğin ne olduğundan emin değil misiniz? Yalnız değilsiniz. Ayak sağlığında en sık karşılaşılan ve birbiriyle en çok karıştırılan iki durum <strong>plantar siğil (verruca plantaris)</strong> ve <strong>nasır (kallus)</strong>dır. Görünümleri benzese de sebepleri ve tedavi yöntemleri gece ile gündüz kadar farklıdır. Yanlış bir müdahale, basit bir sorunu aylarca sürecek bir probleme dönüştürebilir.
              </p>
            </div>

            {/* Plantar Siğil Bölümü */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Plantar Siğil (Verruca Plantaris): Derinin Derinlerindeki Viral Düşman
              </h2>
              
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/nasir-sigil/Sigil nedir görseli.jpg" 
                  alt="Plantar Siğil (Verruca Plantaris) Görseli"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Plantar siğil, sanılanın aksine basit bir cilt kalınlaşması değildir. Cildin üst katmanlarına yerleşen <strong>İnsan Papilloma Virüsü'nün (HPV)</strong> neden olduğu, bulaşıcı bir enfeksiyondur. Vücut ağırlığının baskısıyla dışarı doğru büyümek yerine derinin içine doğru ilerler ve bu nedenle yoğun ağrıya sebep olur.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Plantar Siğil Nasıl Oluşur ve Bulaşır?</h3>
                <p className="text-gray-700 mb-3">
                  HPV virüsü sıcak ve nemli ortamları sever. Virüsün cildinize bulaşması için küçük bir kapı yeterlidir:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <div>
                      <strong>Ortak Kullanım Alanları:</strong> Spor salonu, havuz, hamam, otel odası veya ortak duş zeminlerinde çıplak ayakla dolaşmak en yaygın bulaşma yoludur.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <div>
                      <strong>Mikro Travmalar:</strong> Derideki gözle görülmeyen küçük kesikler, çizikler veya çatlaklar virüsün içeri girmesi için mükemmel bir giriş kapısıdır.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <div>
                      <strong>Nemli Ortam:</strong> Gün boyu ayakkabı içinde terleyen ve havasız kalan ayaklar, virüsün yerleşip çoğalması için ideal bir ortam yaratır.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <div>
                      <strong>Zayıf Bağışıklık:</strong> Vücut direncinin düşük olduğu dönemlerde virüsle savaşmak zorlaşır ve siğil oluşma riski artar.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div>
                  <img 
                    src="/blog-images/nasir-sigil/sigil görseli kapiller uçlar.jpg" 
                    alt="Siğil - Kapiller Uçlar (Siyah Noktalar)"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Siğildeki karakteristik siyah noktalar (kapiller damar uçları)</p>
                </div>
                <div>
                  <img 
                    src="/blog-images/nasir-sigil/Sigil.jpg" 
                    alt="Plantar Siğil Örneği"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Ayak tabanında plantar siğil</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Plantar Siğilin Ayırt Edici Belirtileri</h3>
                <ul className="space-y-3">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Görünüm:</strong> Genellikle yuvarlak, karnabahar benzeri pürüzlü bir yüzeye sahip, içe gömülü bir yapıdır.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Siyah Noktalar:</strong> En önemli ipucu budur! Siğilin içinde gördüğünüz minik siyah veya kırmızı noktalar, pıhtılaşmış kılcal damar uçlarıdır. Bu, lezyonun canlı ve kanla beslenen bir yapı olduğunu gösterir.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Ağrı Tipi:</strong> Siğilin üzerine direkt basmaktan çok, kenarlarından iki parmakla sıkıştırdığınızda keskin ve batıcı bir ağrı hissedersiniz.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Deri Çizgileri:</strong> Cildimizdeki parmak izi gibi doğal çizgiler, siğil lezyonunun üzerinde tamamen kaybolur ve devamlılık göstermez.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Yayılma:</strong> Tek bir siğil olarak başlayabilir, ancak tedavi edilmezse etrafına yayılarak "mozaik siğil" adı verilen kümeler oluşturabilir.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Nasır Bölümü */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-amber-600 pl-4">
                Nasır (Callus / Heloma): Vücudun Yardım Çığlığı
              </h2>
              
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/nasir-sigil/Nasır Nedir görseli.jpg" 
                  alt="Nasır (Callus) Görseli"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Nasır, cildin aşırı ve sürekli mekanik baskı ile sürtünmeye karşı geliştirdiği doğal bir savunma mekanizmasıdır. <strong>Bulaşıcı değildir.</strong> Vücudunuz, "Burada bir sorun var, kemiği korumam gerek!" diyerek o bölgedeki deri katmanını (stratum corneum) kalınlaştırır. Bu nedenle nasır bir hastalık değil, altta yatan bir problemin belirtisidir.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div>
                  <img 
                    src="/blog-images/nasir-sigil/nasır örnegi.jpg" 
                    alt="Nasır Örneği"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Tipik nasır görünümü</p>
                </div>
                <div>
                  <img 
                    src="/blog-images/nasir-sigil/Nasır.jpg" 
                    alt="Ayak Tabanında Nasır"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Ayak tabanında nasır oluşumu</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Nasır Neden Oluşur?</h3>
                <p className="text-gray-700 mb-3">
                  Nasırın tek bir sebebi vardır: <strong>yanlış veya sürekli basınç.</strong>
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-amber-600 mr-2 font-bold">•</span>
                    <div>
                      <strong>Yanlış Ayakkabı Seçimi:</strong> Sivri burunlu, dar, yüksek topuklu veya ayağınıza küçük gelen ayakkabılar parmakları ve tabanı sürekli sıkıştırır.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-amber-600 mr-2 font-bold">•</span>
                    <div>
                      <strong>Ayak Deformiteleri:</strong> Bunyon (halluks valgus), çekiç parmak, pençe parmak gibi kemiksel çıkıntılar, ayakkabı içinde sürekli sürtünme noktaları oluşturur.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-amber-600 mr-2 font-bold">•</span>
                    <div>
                      <strong>Basış Bozuklukları:</strong> İçe veya dışa basma gibi yürüme anormallikleri, vücut ağırlığının ayak tabanına dengesiz dağılmasına ve belirli noktaların aşırı yük almasına neden olur.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-amber-600 mr-2 font-bold">•</span>
                    <div>
                      <strong>Mesleki Faktörler:</strong> Sert zeminlerde uzun süre ayakta çalışan kişilerde (öğretmenler, cerrahlar, garsonlar vb.) sıkça görülür.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nasırın Belirtileri</h3>
                <ul className="space-y-3">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-amber-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Görünüm:</strong> Genellikle sarımsı renkte, sert ve cilalı gibi görünen bir deri alanıdır. İçinde siğildeki gibi siyah noktalar bulunmaz.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-amber-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Çekirdek (Nukleus):</strong> Özellikle parmak üstü veya tabandaki noktasal nasırların (heloma durum) ortasında, derinin derinliklerine uzanan ve "nasırın özü" olarak bilinen konik bir çekirdek oluşabilir. Asıl ağrıyı yapan bu çekirdektir.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-amber-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Ağrı Tipi:</strong> Ağrı, nasırın direkt üzerine basıldığında hissedilir. Sanki ayakkabınızın içinde bir taş varmış gibi bir his verir.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-amber-600 mr-2 font-bold">✓</span>
                    <div>
                      <strong>Deri Çizgileri:</strong> Siğilden en önemli farklarından biridir. Nasırın üzerinde deri çizgileri kaybolmaz, devamlılığını sürdürür.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Karşılaştırma Tablosu */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Plantar Siğil ve Nasır Arasındaki Farklar
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <img 
                    src="/blog-images/nasir-sigil/5.jpg" 
                    alt="Nasır ve Siğil Karşılaştırması 1"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img 
                    src="/blog-images/nasir-sigil/6.jpg" 
                    alt="Nasır ve Siğil Karşılaştırması 2"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Özellik</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Plantar Siğil (Viral Enfeksiyon)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Nasır (Mekanik Baskı)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Sebep</td>
                      <td className="px-6 py-4 text-gray-700">HPV virüsü</td>
                      <td className="px-6 py-4 text-gray-700">Sürekli sürtünme ve basınç</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Bulaşıcı mı?</td>
                      <td className="px-6 py-4 text-gray-700">Evet, oldukça bulaşıcıdır</td>
                      <td className="px-6 py-4 text-gray-700">Hayır, bulaşıcı değildir</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Görünüm</td>
                      <td className="px-6 py-4 text-gray-700">İçinde siyah/kırmızı noktacıklar (damar uçları)</td>
                      <td className="px-6 py-4 text-gray-700">Sarımsı, sert, mumsu doku. Siyah nokta yoktur</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Ağrı</td>
                      <td className="px-6 py-4 text-gray-700">Kenarlarından sıkıştırınca keskin acı</td>
                      <td className="px-6 py-4 text-gray-700">Direkt üzerine basınca batma ve ağrı</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Deri Çizgileri</td>
                      <td className="px-6 py-4 text-gray-700">Lezyonun üzerinde çizgiler kaybolur</td>
                      <td className="px-6 py-4 text-gray-700">Çizgiler lezyonun üzerinde devam eder</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">Yerleşim</td>
                      <td className="px-6 py-4 text-gray-700">Ayak tabanının her yerinde olabilir</td>
                      <td className="px-6 py-4 text-gray-700">Genellikle kemik çıkıntılarının üzeri ve basınç alanları</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Tedavi Yöntemleri */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Tedavi Yöntemleri: Podolojik ve Modern Yaklaşımlar
              </h2>

              {/* Plantar Siğil Tedavisi */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Plantar Siğil Tedavisi: Virüsü Yok Etmek Esastır
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Siğil tedavisinde amaç, virüsün enfekte ettiği dokuyu ortadan kaldırmaktır.
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      1. Podolojik Temizleme ve Profesyonel Bakım
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Tedavinin ilk adımıdır. Siğilin üzerindeki ölü ve kalınlaşmış deri tabakası (hiperkeratoz) ağrısız bir şekilde temizlenerek tedavi edilecek canlı dokuya ulaşılır. Bu aşamada, salisilik asit içeren Pedizon Serum gibi profesyonel ürünler, siğilli dokunun yumuşatılarak daha etkili bir şekilde temizlenmesine yardımcı olabilir.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      2. Kriyoterapi (Dondurma Tedavisi)
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-6 my-4">
                      <div>
                        <img 
                          src="/blog-images/nasir-sigil/nitrojen.jpg" 
                          alt="Kriyoterapi Cihazı"
                          className="rounded-lg shadow-lg w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <img 
                          src="/blog-images/nasir-sigil/sıvı nitrojen.jpg" 
                          alt="Sıvı Nitrojen Uygulaması"
                          className="rounded-lg shadow-lg w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Bu yöntemde, siğil dokusu özel bir sistemle kontrollü bir şekilde dondurularak tahrip edilir. Bu işlem, virüsün yerleştiği hücrelerde termal şok yaratarak vücudun o dokuyu reddetmesini ve atmasını sağlar.
                    </p>
                    <p className="text-gray-700">
                      <strong>Kliniğimizde kullandığımız gelişmiş, aerosol tabanlı kriyocerrahi sistemleri,</strong> geleneksel sıvı nitrojenin gücünü daha pratik ve güvenli bir uygulamayla birleştirir.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      3. Lazer Tedavisi
                    </h4>
                    <p className="text-gray-700">
                      Siğili besleyen kılcal damarları hedef alarak veya siğil dokusunu buharlaştırarak etki eder.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nasır Tedavisi */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Nasır Tedavisi: Sebebi Ortadan Kaldırmak Esastır
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nasır tedavisinde amaç, sadece kalınlaşmış deriyi almak değil, o baskının nedenini ortadan kaldırmaktır.
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      1. Podolojik Nasır Temizliği (Küretaj)
                    </h4>
                    
                    <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/blog-images/nasir-sigil/küretaj işlemi.jpg" 
                        alt="Podolojik Nasır Temizliği (Küretaj)"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-gray-700 mb-4">
                      En etkili ve hızlı rahatlama sağlayan yöntemdir. Steril aletlerle, kalınlaşmış deri katmanı ve ağrıya neden olan nasır çekirdeği (nukleus) tamamen ve ağrısız bir şekilde çıkarılır. İşlem sonrası hasta anında rahatlama hisseder.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      2. Basınç Yönetimi
                    </h4>
                    
                    <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="/blog-images/nasir-sigil/silikon-bası-önleyici.jpg" 
                        alt="Silikon Basınç Önleyici Ortez"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-gray-700 mb-4">
                      Tedavinin en önemli parçasıdır. Kişiye özel tabanlıklar, ayakkabı modifikasyonları ve silikon ortezler ile nasırın oluştuğu bölgedeki baskı ortadan kaldırılır.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      3. Ev Bakımı ve Nemlendirme
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Tedaviyi desteklemek ve nasırın tekrar sertleşmesini önlemek kritik öneme sahiptir. <strong>Pedizone %15 Üreli Krem</strong> gibi yüksek üre oranına sahip profesyonel ürünler, kalınlaşmış deriyi (kallus) etkili bir şekilde yumuşatır, cildin kaybettiği nemi geri kazandırır ve elastikiyetini artırır.
                    </p>
                    <p className="text-gray-700">
                      Düzenli kullanım, cildin savunma mekanizması olarak yeniden sertleşmesinin önüne geçer.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SSS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ayak siğili tedavi edilmezse ne olur?
                  </h3>
                  <p className="text-gray-700">
                    Siğil kendiliğinden geçebilir, ancak ayak tabanındaki siğiller sürekli baskı altında olduğu için genellikle derinin daha da derinine ilerler, ağrısı artar ve etrafa yayılarak "mozaik siğil" kümeleri oluşturabilir. Tedavi süreci zorlaşır.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Evde nasır bandı kullanmak veya nasırı kesmek güvenli mi?
                  </h3>
                  <p className="text-gray-700">
                    Kesinlikle önerilmez. Nasır bantları, içerdikleri asit ile sağlıklı deriye de zarar vererek kimyasal yanıklara ve enfeksiyonlara yol açabilir. Nasırı kesmeye çalışmak ise daha derin doku hasarına, kanamaya ve kontrol edilemeyen enfeksiyonlara neden olabilir. Özellikle diyabet hastaları için bu tür müdahaleler çok tehlikelidir.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Podolog nasır temizliğini nasıl yapar? Acıtır mı?
                  </h3>
                  <p className="text-gray-700">
                    Podolojik nasır temizliği, ölü deri katmanları üzerinde yapıldığı için tamamen ağrısızdır. Hastalarımız, işlem sırasında genellikle hiçbir şey hissetmediklerini ve işlem biter bitmez "yıllardır çektiğim ağrıdan dakikalar içinde kurtuldum" diyerek kliniğimizden rahatlamış bir şekilde ayrılırlar.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Nasır tekrarlar mı?
                  </h3>
                  <p className="text-gray-700">
                    Evet. Nasır sadece temizlenir ancak oluşmasına neden olan basınç (yanlış ayakkabı, basış bozukluğu vb.) devam ederse, vücut kendini savunmak için o bölgeyi tekrar kalınlaştıracaktır. Bu yüzden podolojik bakım, nasırı temizlemenin yanı sıra tekrarını önleyici çözümler sunmayı hedefler.
                  </p>
                </div>
              </div>
            </section>

            {/* Medipodo Bağlıca Bölümü */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Neden Medipodo Bağlıca? Ağrıya İlk Seansta Veda Edin
                </h2>

                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/blog-images/nasir-sigil/podolog-serdar-ceylan.jpg" 
                    alt="Podolog Serdar Ceylan - Medipodo Bağlıca"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Kliniğimizde, nasır ve siğil gibi yaygın sorunlara modern podolojinin sunduğu en etkili ve güvenli yöntemlerle yaklaşıyoruz.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-3">Ağrısız Nasır Tedavisi: Küretaj ile Anında Rahatlama</h3>
                    <p className="text-blue-100">
                      Steril bir ortamda, özel podoloji cihazları kullanarak nasırın ağrıya neden olan çekirdeğini tamamen çıkarıyoruz. Amacımız sadece nasırı temizlemek değil, ağrınızı ilk seansta dindirmek ve size adım atmanın konforunu yeniden yaşatmaktır.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-3">Gelişmiş Kriyoterapi ile Siğillere Nokta Atışı Çözüm</h3>
                    <p className="text-blue-100">
                      Kliniğimizde, siğil tedavisinde etkili sonuçlar sunan, aerosol tabanlı kriyocerrahi sistemleri kullanıyoruz. Bu teknoloji, siğilin köküne kadar inerek virüslü dokuyu etkin bir şekilde dondurur. Çocuklar ve hassas cilde sahip yetişkinlerde bile güvenle uygulanabilen bu yöntem, kısa seans süreleri ile konforlu bir tedavi imkanı sunar.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
                  <img 
                    src="/blog-images/nasir-sigil/ayak analizi.jpg" 
                    alt="Ayak Analizi - Medipodo Bağlıca"
                    className="w-full h-auto object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                  <p className="text-blue-100">
                    Medipodo Bağlıca'da amacımız sadece belirtiyi tedavi etmek değil, sorunun kökenine inerek size kalıcı çözümler sunmaktır. Uzman podolog ekibimiz, kişiye özel analizler ve tedavi planları ile ayak sağlığınızı en üst seviyeye çıkarmak için burada.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:05456569747" 
                    className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center"
                  >
                    <Phone size={20} className="mr-2" />
                    Randevu 0545 656 97 47
                  </a>
                  <a 
                    href="https://wa.me/905456569747" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
                  >
                    WhatsApp ile İletişim
                  </a>
                </div>
              </div>
            </section>

            {/* Konum Bilgisi */}
            <section className="mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-start space-x-3">
                  <MapPin size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-700">
                      Bağlıca Mah. Mert Cad. 4/2 Etimesgut, Ankara
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Diğer Yazıları Keşfedin</h2>
            <Link to="/blog">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors">
                Tüm Blog Yazıları
              </button>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
};

export default NasirSigilBlog;
