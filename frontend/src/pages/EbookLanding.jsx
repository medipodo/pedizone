import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Check, BookOpen, Download, Star, Shield } from 'lucide-react';

const EbookLanding = () => {
  useEffect(() => {
    // Load Gumroad script
    const script = document.createElement('script');
    script.src = 'https://gumroad.com/js/gumroad.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const tableOfContents = [
    'Batık Tırnak: Nedenleri, Önleme ve Evde Bakım',
    'Tırnak Mantarı: Belirtiler ve Tedavi Yöntemleri',
    'Nasır ve Siğil: Farkları ve Doğru Yaklaşımlar',
    'Çatlak Topuk: Nedenleri ve Kalıcı Çözümler',
    'Ayak Kokusu ve Hijyen: Pratik Öneriler',
    'Podolojik Bakım: Ne Zaman Uzman Desteği Almalı?'
  ];

  const benefits = [
    'Uzman podologlar tarafından hazırlanmış 33 sayfalık kapsamlı kılavuz',
    'Evde uygulayabileceğiniz adım adım bakım talimatları',
    'Yanlış uygulamalardan kaçınma ve kalıcı çözümler',
    'Görsellerle desteklenmiş anlaşılır içerik',
    'Anında indirme - PDF formatında',
    'Tüm cihazlardan erişilebilir'
  ];

  return (
    <>
      <Helmet>
        <title>Ayak Bakımı Kılavuzu: Batık Tırnak, Mantar ve Nasır İçin Uzman Podolog Rehberi</title>
        <meta name="description" content="Batık tırnak, mantar ve nasır sorunlarına kalıcı çözümler. Uzman podologlar tarafından hazırlanan 33 sayfalık kapsamlı ayak bakımı kılavuzu." />
        <meta name="keywords" content="ayak bakımı, batık tırnak, tırnak mantarı, nasır, çatlak topuk, podoloji, e-kitap" />
        <meta property="og:title" content="Ayak Bakımı Kılavuzu - Uzman Podolog Rehberi" />
        <meta property="og:description" content="Ağrılı ayaklara son! Evde uygulayabileceğiniz profesyonel ayak bakımı rehberi." />
        <meta property="og:image" content="https://medipodo.com/images/ebook/cover.png" />
        <link rel="canonical" href="https://medipodo.com/ayak-bakim-kilavuzu" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/images/ebook/hero-bg.jpg" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative container mx-auto px-4 py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full mb-6">
                  <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                  <span className="text-sm font-semibold">Uzman Podologlar Tarafından Hazırlandı</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Ağrılı Ayaklara Son! Batık Tırnak, Mantar ve Nasır Sorunlarını Evde Çözün.
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Yıllarca süren tecrübeyle hazırlanan, 33 sayfalık kapsamlı ayak bakımı kılavuzu ile sağlıklı ayaklara kavuşun.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a 
                    href="https://medipodo.gumroad.com/l/ayakbakimklavuzu" 
                    data-gumroad-overlay="true"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg rounded-lg shadow-2xl transform hover:scale-105 transition-all"
                    data-testid="hero-cta-btn"
                  >
                    <Download className="mr-2" size={24} />
                    Şimdi Satın Al ve Anında İndir
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-blue-100">
                  <div className="flex items-center">
                    <Check className="mr-2 text-green-400" size={18} />
                    Anında İndirme
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 text-green-400" size={18} />
                    PDF Format
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 text-green-400" size={18} />
                    33 Sayfa
                  </div>
                </div>
              </div>

              {/* Right: Book Cover */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                  <img 
                    src="/images/ebook/cover.png" 
                    alt="Ayak Bakımı Kılavuzu E-Kitap Kapağı" 
                    className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SORUN VE ÇÖZÜM */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                  Bu Sorunlardan Biri Size Tanıdık Geliyor mu?
                </h2>
                <p className="text-xl text-gray-600">
                  Binlerce kişinin yaşadığı ayak problemlerine artık son verin
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Problem 1 */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-900 mb-3">❌ Batık Tırnak Ağrısı</h3>
                  <p className="text-gray-700">
                    Sürekli tekrarlayan, ağrılı batık tırnak sorunları günlük hayatınızı zorlaştırıyor.
                  </p>
                </div>

                {/* Problem 2 */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-900 mb-3">❌ Tırnak Mantarı</h3>
                  <p className="text-gray-700">
                    İnatçı tırnak mantarı, denediğiniz yöntemlere rağmen geçmiyor ve sizi utandırıyor.
                  </p>
                </div>

                {/* Problem 3 */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-900 mb-3">❌ Nasır ve Çatlaklar</h3>
                  <p className="text-gray-700">
                    Ağrılı nasırlar ve çatlak topuklar yürümeyi bile zorlaştırıyor.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12 border-2 border-green-200">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                    ✅ İşte Çözüm: Ayak Bakımı Kılavuzu
                  </h2>
                  <p className="text-xl text-green-800">
                    Yanlış evde bakım yöntemlerinden kurtararak kalıcı çözümler sunan rehberiniz
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                        <Check className="text-white" size={16} />
                      </div>
                      <p className="text-gray-800 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İÇİNDEKİLER */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <BookOpen className="text-blue-700" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                  Kılavuzda Neler Var?
                </h2>
                <p className="text-xl text-gray-600">
                  33 sayfalık kapsamlı içerik ile ayak sağlığınızı iyileştirin
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
                <div className="space-y-4">
                  {tableOfContents.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 hover:bg-blue-50 rounded-lg transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center justify-center gap-8 flex-wrap">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-blue-700 mb-1">33</p>
                      <p className="text-sm text-gray-600">Sayfa</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-blue-700 mb-1">6</p>
                      <p className="text-sm text-gray-600">Bölüm</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-blue-700 mb-1">PDF</p>
                      <p className="text-sm text-gray-600">Format</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOSYAL KANIT */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
                    <Shield className="text-green-700 mr-2" size={20} />
                    <span className="text-sm font-semibold text-green-800">Güvenilir ve Profesyonel</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                    Uzman Podologlar Tarafından Hazırlandı
                  </h2>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Bu kılavuz, <strong>binlerce vaka tecrübesi olan Medipodo uzmanları</strong> tarafından titizlikle hazırlanmıştır. 
                    Ankara Bağlıca'da hizmet veren kliniğimizde, her gün onlarca hastaya profesyonel podoloji hizmeti sunuyoruz.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg mb-6">
                    <p className="text-gray-800 italic">
                      "Ayak sağlığı konusunda yıllardır edindiğimiz bilgi ve tecrübemizi, 
                      herkesin evinde kolayca uygulayabileceği şekilde bir araya getirdik. 
                      Bu kılavuz, yanlış uygulamalardan kaçınmanızı ve kalıcı çözümler bulmanızı sağlayacak."
                    </p>
                    <p className="text-blue-900 font-semibold mt-3">- Medipodo Podoloji Ekibi</p>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center border-2 border-white font-bold">
                          M
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Binlerce hasta</strong> Medipodo'ya güveniyor
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img 
                    src="/images/ebook/mockup.jpg" 
                    alt="Medipodo Klinik" 
                    className="rounded-2xl shadow-2xl w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SON CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sağlıklı Ayaklara Giden Yolculuğunuz Burada Başlıyor!
              </h2>
              
              <p className="text-xl text-blue-100 mb-8">
                33 sayfalık bu kapsamlı kılavuz ile ayak sorunlarınıza kalıcı çözümler bulun
              </p>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white border-opacity-20">
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div>
                    <p className="text-sm text-blue-200 mb-1">Sadece</p>
                    <p className="text-5xl font-bold text-white">$5</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div className="flex items-center">
                    <Check className="mr-2 text-green-400" size={18} />
                    Anında İndirme
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 text-green-400" size={18} />
                    Tüm Cihazlarda Erişim
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 text-green-400" size={18} />
                    Ömür Boyu Erişim
                  </div>
                </div>
              </div>

              <a 
                href="https://medipodo.gumroad.com/l/ayakbakimklavuzu" 
                data-gumroad-overlay="true"
                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-lg shadow-2xl transform hover:scale-105 transition-all mb-6"
                data-testid="final-cta-btn"
              >
                <Download className="mr-3" size={28} />
                Şimdi Satın Al ve Anında İndir
              </a>

              <p className="text-sm text-blue-200">
                Güvenli ödeme: Gumroad üzerinden kredi kartı ile güvenle ödeme yapabilirsiniz
              </p>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="bg-blue-950 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-blue-200">
              © {new Date().getFullYear()} Medipodo Medikal Sağlık Hizmetleri. Tüm hakları saklıdır.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EbookLanding;
