import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, MapPin, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet';

const TopukDikeniBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Topuk Dikeni (Calcanei Epin) Nedir ve Nasıl Önlenir? | Medipodo Bağlıca</title>
        <meta name="description" content="Topuk dikeni (Epin Calcanei) nedir, belirtileri nelerdir ve nasıl önlenir? Podolojik yaklaşımlar, biyomekanik analiz, ortez tedavisi ve kalıcı çözümler." />
        <meta name="keywords" content="topuk dikeni, calcanei epin, plantar fasiit, topuk ağrısı, ayak tabanı ağrısı, topuk dikeni tedavisi, ortez, tabanlık, podoloji, Medipodo, Bağlıca, Ankara" />
        <meta property="og:title" content="Topuk Dikeni Nedir ve Nasıl Önlenir? | Medipodo Bağlıca" />
        <meta property="og:description" content="Topuk dikeni nedir, belirtileri nelerdir ve nasıl önlenir? Podolojik yaklaşımlar ve kalıcı çözümler." />
        <meta property="og:image" content="https://medipodo.com/blog-images/topuk-dikeni/kapak görseli topuk dikeni.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://medipodo.com/blog/topuk-dikeni" />
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
              Topuk Dikeni (Calcanei Epin) Nedir ve Nasıl Önlenir?
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Podoloji Ekibi</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>10 Aralık 2025</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>15 dakika okuma</span>
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
                Her sabah yataktan kalktığınızda topuğunuza batan, cam kırıkları üzerinde yürüyormuş gibi hissettiren o keskin acı size tanıdık geliyor mu? Günün ilk birkaç adımı adeta bir işkenceye mi dönüşüyor? Yalnız değilsiniz. Milyonlarca insanı etkileyen bu durumun adı, halk arasında bilinen ismiyle <strong>Topuk Dikeni</strong>, tıbbi adıyla ise <strong>Calcanei Epin</strong>'tir.
              </p>

              <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/topuk-dikeni/1.jpg" 
                  alt="Topuk Dikeni - Sabah Ağrısı"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda, bir podolog gözüyle topuk dikeninin gerçek nedenlerini, belirtilerini ve en önemlisi, ağrı döngüsünü kırarak sizi yeniden konforlu adımlara kavuşturacak modern podolojik yaklaşımları detaylıca ele alıyoruz.
              </p>
            </div>

            {/* Topuk Dikeni Nedir Bölümü */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Topuk Dikeni Nedir?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Topuk dikeni, en kolay anlaşılır haliyle topuğun altında oluşan küçük bir kemik çıkıntısıdır. Genellikle topuk tabanındaki dokunun (ayak altı bandının) gerilmesi ve yorulmasıyla birlikte görülür. Bu nedenle özellikle sabah kalkınca atılan ilk adımda keskin bir batma ve ağrı oluşturur.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">💡 Önemli Bilgi</h3>
                <p className="text-gray-700 mb-3">
                  Topuk dikeni, plantar fasyanın yapışma noktasında oluşan kalsifik kemik çıkıntısıdır.
                </p>
                <p className="text-gray-700 mb-3">
                  Ağrının ana sebebi çoğu zaman diken değil, plantar fasyanın ve topuk yumuşak dokularının gerilmesi/iritasyonudur.
                </p>
                <p className="text-gray-700 mb-3">
                  Ağrısı olmayan kişilerin de röntgenlerinde topuk dikeni görülebilir.
                </p>
                <p className="text-gray-700">
                  Bu nedenle tedavi, <strong>"dikeni eritmeye"</strong> değil, <strong>biyomekanik yükün düzeltilmesine</strong> odaklanmalıdır.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <img 
                    src="/blog-images/topuk-dikeni/2.jpg" 
                    alt="Plantar Fasya Anatomisi"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Topuk Dikeni Muayenesi</p>
                </div>
                <div>
                  <img 
                    src="/blog-images/topuk-dikeni/3.jpg" 
                    alt="Topuk Dikeni Röntgen Görüntüsü"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Topuk dikeni röntgen görüntüsü</p>
                </div>
              </div>

              <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/topuk-dikeni/4.jpg" 
                  alt="Topuk Dikeni Oluşum Mekanizması"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </section>

            {/* Risk Faktörleri */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Topuk Dikenine Neden Olan Risk Faktörleri
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">⚙️</span>
                    Mekanik Yüklenme
                  </h3>
                  <p className="text-gray-700">
                    Sert zeminlerde uzun süre ayakta kalmak veya yürümek (öğretmenler, askerler, fabrika işçileri, sağlık çalışanları).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">👟</span>
                    Yanlış Ayakkabı Seçimi
                  </h3>
                  <p className="text-gray-700">
                    Düz, desteksiz, tabanı ince veya sert ayakkabılar (babet, terlik, topuklu) şok emilimini engelleyerek tüm yükü fasyaya bindirir.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">⚖️</span>
                    Aşırı Kilo ve Hamilelik
                  </h3>
                  <p className="text-gray-700">
                    Vücut ağırlığındaki artış, ayak tabanına binen yükü doğrudan artırır ve plantar fasyayı zorlar.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🦶</span>
                    Ayak Yapısı Bozuklukları
                  </h3>
                  <p className="text-gray-700">
                    Düz tabanlık (pes planus) veya yüksek kavis (pes cavus) gibi durumlar, plantar fasyanın anormal şekilde gerilmesine neden olur.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">💪</span>
                    Aşil Tendonunda Kısalık
                  </h3>
                  <p className="text-gray-700">
                    Baldır kaslarının ve Aşil tendonunun gergin olması, fasyanın daha fazla çekilmesine yol açar.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🏃</span>
                    Ani Aktivite Değişikliği
                  </h3>
                  <p className="text-gray-700">
                    Hareketsiz bir yaşamdan aniden yoğun spor programlarına geçmek, fasyayı hazırlıksız yakalar.
                  </p>
                </div>
              </div>

              <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/topuk-dikeni/5.jpg" 
                  alt="Topuk Dikeni Risk Faktörleri"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </section>

            {/* Belirtiler */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Topuk Dikeninin Belirtileri
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <img 
                    src="/blog-images/topuk-dikeni/6.jpg" 
                    alt="Sabah Ağrısı - Topuk Dikeni"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img 
                    src="/blog-images/topuk-dikeni/7.jpg" 
                    alt="Topuk Ağrısı Lokalizasyonu"
                    className="rounded-lg shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔴 Karakteristik Belirtiler</h3>
                <ul className="space-y-3">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-red-600 mr-2 font-bold text-xl">⏰</span>
                    <div>
                      <strong>Sabah Ağrısı:</strong> En belirgin semptomdur. Sabah yataktan kalkınca veya uzun süre oturduktan sonra atılan ilk birkaç adımda topukta hissedilen keskin, batıcı ağrı.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-orange-600 mr-2 font-bold text-xl">🚶</span>
                    <div>
                      <strong>Yürüdükçe Azalan Ağrı:</strong> Birkaç dakika yürüdükten sonra fasya esnedikçe ağrı hafifler veya kaybolur.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-yellow-600 mr-2 font-bold text-xl">🌆</span>
                    <div>
                      <strong>Gün Sonu Ağrısı:</strong> Gün boyu ayakta kalmanın ardından ağrı tekrar şiddetlenir.
                    </div>
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2 font-bold text-xl">📍</span>
                    <div>
                      <strong>Ağrının Yeri:</strong> Genellikle topuğun ön-iç kısmında, ayak kavisiyle birleştiği noktada hissedilir.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Podolojik Tedavi */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Podolojik Yaklaşım ile Topuk Dikeni Tedavisi
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                Podolojide topuk dikeni tedavisi, sadece semptomları bastırmaya yönelik değildir. Amaç, plantar fasyadaki gerilimi azaltmak, iltihabı gidermek ve en önemlisi, <strong>bu soruna yol açan temel biyomekanik nedeni ortadan kaldırmaktır.</strong> Bu bir ameliyat veya iğne süreci değil, bedenin kendi iyileşme mekanizmasını destekleyen, bilimsel adımlardan oluşan bütüncül bir tedavi planıdır.
              </p>

              <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/topuk-dikeni/8.jpg" 
                  alt="Podolojik Tedavi Yaklaşımları"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    1️⃣ Detaylı Biyomekanik Analiz ve Teşhis
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tedavinin temelini oluşturur. Podolog, yürüme ve basış analizi yaparak ayağınızın yapısal durumunu, yük dağılımını ve plantar fasyanın neden aşırı gerildiğini tespit eder. Bu, ağrının "neden"ini anladığımız kritik aşamadır.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/blog-images/topuk-dikeni/9.jpg" 
                      alt="Biyomekanik Analiz"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    2️⃣ Kişiye Özel Tabanlık (Ortez) ile Yükü Azaltma
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Analiz sonuçlarına göre tasarlanan <strong>kişiye özel medikal tabanlıklar</strong>, tedavinin kilit noktasıdır. Bu tabanlıklar, ayak kavisini doğru şekilde destekleyerek plantar fasyanın üzerindeki aşırı yükü alır ve iyileşmesi için ona gerekli dinlenme ortamını sunar.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/blog-images/topuk-dikeni/13.jpg" 
                      alt="Kişiye Özel Tabanlık - Ankara Medipodo"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    3️⃣ Manuel Terapi ve Destekleyici Uygulamalar
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Kinezyolojik bantlama</strong> gibi tekniklerle fasyayı destekler, kan dolaşımını artırır ve ağrıyı hafifletiriz. Ayrıca podologunuz, baldır kaslarına yönelik özel germe ve mobilizasyon teknikleri uygulayarak dokudaki genel gerginliği azaltır.
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/blog-images/topuk-dikeni/12.jpg" 
                      alt="Kinezyolojik Bantlama"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    4️⃣ Hasta Eğitimi ve Egzersiz Programı
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tedavinin kalıcılığını sağlayan en önemli adımdır. Size evde uygulamanız için basit ama etkili bir program öğretiriz:
                  </p>
                  <ul className="mt-3 mb-4 space-y-2">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      Doğru germe teknikleri
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      Ayak kaslarını güçlendirme egzersizleri
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      Yaşam tarzınıza en uygun ayakkabı seçimi konusunda danışmanlık
                    </li>
                  </ul>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/blog-images/topuk-dikeni/11.jpg" 
                      alt="Egzersiz ve Germe Programı"
                      className="w-full h-auto"
                      loading="lazy"
                    />
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
                    ❓ Topuk dikeni ameliyatı şart mıdır?
                  </h3>
                  <p className="text-gray-700">
                    <strong>Hayır.</strong> Topuk dikeni vakalarının %95'inden fazlası, bu yazıda bahsedilen podolojik yöntemler gibi konservatif (ameliyatsız) yaklaşımlarla başarıyla tedavi edilir. Ameliyat, yalnızca tüm konservatif yöntemlerin denenmesine rağmen iyileşme sağlanamayan, çok nadir vakalarda düşünülür.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❓ Topuk dikeni iğnesi (kortizon enjeksiyonu) kalıcı bir çözüm müdür?
                  </h3>
                  <p className="text-gray-700">
                    Kortizon enjeksiyonları ağrıyı hızla azaltabilir ancak <strong>altta yatan biyomekanik sorun düzeltilmediği sürece ağrı tekrarlayacaktır.</strong> Kalıcı bir çözüm değildir. Ayrıca, tekrarlayan kortizon enjeksiyonları plantar fasya dokusunu zayıflatabilir ve yırtılma riskini artırabilir. Bu nedenle, biyomekanik düzeltme ve ortez tedavisi gibi köklü çözümler tercih edilmelidir.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❓ Tedavi ne kadar sürer?
                  </h3>
                  <p className="text-gray-700">
                    İyileşme süreci kişiden kişiye değişmekle birlikte, podolojik yaklaşımlarla hastalar genellikle <strong>ilk 2-4 hafta içinde belirgin bir rahatlama</strong> hissederler. Tam iyileşme için 3-6 ay sürebilir. Sabır ve tedaviye uyum, kalıcı sonuçlar için anahtardır.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❓ Topuk dikeni tekrar eder mi?
                  </h3>
                  <p className="text-gray-700">
                    Biyomekanik sorunlar düzeltilmez ve risk faktörleri ortadan kaldırılmazsa, topuk dikeni tekrarlayabilir. Bu nedenle, <strong>ortez kullanımı, uygun ayakkabı seçimi ve düzenli germe egzersizleri</strong> gibi önleyici tedbirleri sürdürmek önemlidir.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❓ Hangi ayakkabılar topuk dikeni için uygundur?
                  </h3>
                  <p className="text-gray-700">
                    Topuk dikeni için ideal ayakkabılar:
                  </p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li className="text-gray-700">• İyi kavis desteği olan</li>
                    <li className="text-gray-700">• Yumuşak ve esnek tabanlı</li>
                    <li className="text-gray-700">• 2-3 cm topuk yüksekliği olan</li>
                    <li className="text-gray-700">• Geniş ve rahat olan ayakkabılardır</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    Düz tabanlar, topuklu ayakkabılar, terlikler ve espadriller <strong>kesinlikle kaçınılmalıdır.</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Sonuç ve CTA */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Sonuç ve Profesyonel Destek
                </h2>

                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Ağrılı adımlar kaderiniz değil. Doğru teşhis ve bütüncül bir podolojik yaklaşımla, sabahları yataktan ağrısız kalkmak ve gün boyu konforla yürümek tamamen mümkündür.
                </p>

                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  <strong>Medipodo Bağlıca Ayak Sağlığı Merkezi</strong> olarak Ankara Bağlıca'da modern podolojik yöntemler ile hizmet veriyoruz. Uzman podologlarımız, kişiye özel biyomekanik analiz, egzersiz eğitimi ve refleksoloji uygulamaları ile sizler için Ankara Bağlıca'da.
                </p>

                <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg mb-8">
                  <p className="text-sm text-blue-100 italic">
                    <strong>Not:</strong> Blog yazımız bilgilendirme amacı gütmektedir; tanı ve tedavi önerisi yerine geçmez. Herhangi bir sağlık sorununuz için mutlaka hekiminize başvurunuz.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="tel:05456569747" 
                    className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center"
                  >
                    <Phone size={20} className="mr-2" />
                    Randevu: 0545 656 97 47
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

export default TopukDikeniBlog;
