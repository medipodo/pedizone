import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';

const CocukAyakSagligiBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Çocuğunuzun Ayak Sağlığı Rehberi: En Sık Görülen 5 Ayak Problemi | Medipodo</title>
        <meta name="description" content="Çocuklarda ve ergenlerde en sık görülen ayak problemleri ve podolojik çözümler. Batık tırnak, ayak mantarı, düz tabanlık tedavisi ve daha fazlası." />
        <meta name="keywords" content="çocuk ayak sağlığı, ergen ayak problemleri, batık tırnak çocuk, düz tabanlık, ayak mantarı tedavisi, podoloji, Medipodo, Ankara" />
        <meta property="og:title" content="Çocuğunuzun Ayak Sağlığı Rehberi | Medipodo" />
        <meta property="og:description" content="Çocuklarda ve ergenlerde en sık görülen ayak problemleri ve podolojik çözümler." />
        <meta property="og:image" content="https://medipodo.com/blog-images/cocuk-ayak-sagligi/blog kapak görseli.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://medipodo.com/blog/cocuk-ayak-sagligi" />
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
              Çocuğunuzun Ayak Sağlığı Rehberi: En Sık Görülen 5 Ayak Problemi ve Podolojik Çözümler
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Podoloji Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>12 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Kapak Görseli */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/blog-images/cocuk-ayak-sagligi/blog kapak görseli.jpg" 
                alt="Çocuk Ayak Sağlığı"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Giriş */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Büyüme Çağında Ayak Sağlığı Neden Kritik?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Çocukluk ve ergenlik dönemi, vücudun en hızlı gelişim gösterdiği, kemik ve kas yapısının şekillendiği kritik bir süreçtir. Bu dönemde ortaya çıkan basit bir ayak problemi bile, ilerleyen yaşlarda diz, kalça ve omurga sağlığını olumsuz etkileyebilecek zincirleme reaksiyonlara yol açabilir.
              </p>

              <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/cocuk-ayak-sagligi/ergenn.png" 
                  alt="Çocuk Ayak Gelişimi"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ebeveynler olarak, çocuklarımızın ayak sağlığını gözlemlemek ve doğru zamanda profesyonel destek almak, onların sağlıklı bir geleceğe adım atmaları için hayati önem taşır.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <p className="text-gray-700">
                  <strong>Medipodo olarak</strong>, çocuk ve ergenlerin hassas ayak yapılarına uygun, ağrısız ve kalıcı podolojik çözümler sunarak, büyüme çağındaki sorunların kronikleşmesini engellemeyi hedefliyoruz.
                </p>
              </div>
            </section>

            {/* En Sık Görülen Ayak Problemleri */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Çocuklarda ve Ergenlerde En Sık Görülen Ayak Problemleri
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                Çocukların aktif yaşam tarzları, spor aktiviteleri ve hızla değişen vücut yapıları, onları bazı ayak problemlerine karşı daha savunmasız hale getirir. İşte ebeveynlerin en sık karşılaştığı ve dikkat etmesi gereken başlıca sorunlar:
              </p>

              <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/cocuk-ayak-sagligi/spor-aktiviteleri.jpg" 
                  alt="Çocuk Spor Aktiviteleri"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Problem 1: Batık Tırnak */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Batık Tırnak (Onikokriptozis)
                </h3>
                
                <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/blog-images/cocuk-ayak-sagligi/tırnak-batmasi.jpg" 
                    alt="Batık Tırnak"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="text-gray-700 mb-4">
                  Özellikle ergenlik döneminde, yanlış tırnak kesimi, dar ayakkabılar veya spor aktiviteleri sonucu tırnak kenarının ete batmasıyla ortaya çıkar. Şiddetli ağrı, kızarıklık ve enfeksiyon riski taşır. Ebeveynler genellikle evde çözüm aramaya çalışsa da, bu durum enfeksiyonu derinleştirebilir.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Podolojik Çözüm:</strong> Medipodo'da uygulanan <strong>Ortoniksi (tel sistemi)</strong>, cerrahi müdahaleye gerek kalmadan, tırnağın doğal uzama yönünü düzelterek kalıcı çözüm sağlar.
                  </p>
                </div>

                <Link to="/hizmet/batik-tirnak" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  Batık Tırnak Tedavisi Hakkında Detaylı Bilgi →
                </Link>
              </div>

              {/* Problem 2: Ayak Mantarı */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Ayak Mantarı (Tinea Pedis) ve Aşırı Terleme
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/blog-images/cocuk-ayak-sagligi/Ayak-mantari.jpg" 
                      alt="Ayak Mantarı"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/blog-images/cocuk-ayak-sagligi/ayak-kokusu-görseli.jpg" 
                      alt="Ayak Kokusu"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Okul, spor salonu ve havuz gibi ortak kullanım alanları, ayak mantarının yayılması için ideal ortamlardır. Ergenlikte hormonal değişimlerle artan aşırı terleme (hiperhidroz) ise mantar oluşumunu tetikler ve kötü kokuya neden olur.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Podolojik Çözüm:</strong> Mantar tedavisinde sadece yüzeydeki belirtileri değil, kök nedeni hedefleyen özel solüsyonlar ve medikal ayak bakımı uygulanır. Aynı zamanda terleme kontrolü için doğru hijyen ve bakım rutinleri öğretilir.
                  </p>
                </div>

                <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/blog-images/cocuk-ayak-sagligi/tirnak-mantari-ankara.jpg" 
                    alt="Tırnak Mantarı"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Problem 3: Plantar Siğil ve Nasır */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Plantar Siğil ve Nasır (Kallus)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/blog-images/cocuk-ayak-sagligi/Sigil-görseli.jpg" 
                      alt="Plantar Siğil"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/blog-images/cocuk-ayak-sagligi/Sigil-görseli2.jpg" 
                      alt="Siğil Tedavisi"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  Ayak tabanında görülen bu iki problem sıklıkla karıştırılır. Siğiller (HPV virüsünden kaynaklanır) genellikle ağrılı ve bulaşıcıdır. Nasırlar ise sürtünme ve basınca tepki olarak oluşan kalınlaşmalardır. Çocuklar ve ergenler, özellikle çıplak ayakla dolaştıkları yerlerde siğil kapma riski altındadır.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Podolojik Çözüm:</strong> Siğil ve nasır tedavisinde Medipodo, çevre dokuya zarar vermeden, ağrısız ve steril yöntemlerle kalınlaşmayı veya siğili ortadan kaldırır.
                  </p>
                </div>

                <Link to="/blog/nasir-sigil-farklari" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  Nasır ve Siğil Farkları Hakkında Detaylı Blog Yazımız →
                </Link>
              </div>

              {/* Problem 4: Düz Tabanlık */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Düz Tabanlık (Pes Planus) ve Yürüme Bozuklukları
                </h3>
                
                <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/blog-images/cocuk-ayak-sagligi/duztaban.jpg" 
                    alt="Düz Tabanlık"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="text-gray-700 mb-4">
                  Çocuklarda 3-4 yaşına kadar düz tabanlık normal kabul edilse de, bu yaştan sonra devam eden veya ağrıya neden olan durumlar incelenmelidir. Yanlış basış, sadece ayakları değil, tüm vücut postürünü etkiler.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Podolojik Çözüm:</strong> <Link to="/ayak-analizi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Analizi</Link> ile basış bozuklukları tespit edilir ve kişiye özel tabanlık (ortez) tasarlanarak yürüme mekaniği düzeltilir. Bu, ileride oluşabilecek diz ve bel ağrılarının önüne geçer.
                  </p>
                </div>

                <Link to="/ayak-analizi" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  Ayak Analizi Hizmetimiz Hakkında Detaylı Bilgi →
                </Link>
              </div>

              {/* Problem 5: Ayakkabı Seçimi */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Yanlış Ayakkabı Seçimi ve Bağcık Problemleri
                </h3>
                
                <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/blog-images/cocuk-ayak-sagligi/ayakkabı-bagcik-baglama.jpg" 
                    alt="Ayakkabı Bağcık Bağlama"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="text-gray-700 mb-4">
                  Çocukların hızla büyüyen ayakları için doğru ayakkabı seçimi çok önemlidir. Dar, küçük veya yanlış tip ayakkabılar, parmak deformasyonlarına, tırnak batmasına ve postür bozukluklarına yol açabilir.
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Doğru Ayakkabı Seçim Kriterleri:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Ayakkabı içinde en uzun parmağın ucunda yaklaşık 1 cm boşluk olmalı</li>
                    <li>Parmaklar rahatça hareket edebilmeli</li>
                    <li>Topuk bölgesi sağlam destek vermeli</li>
                    <li>Nefes alabilen malzemeden yapılmış olmalı</li>
                    <li>Esnek ama destekleyici taban yapısına sahip olmalı</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Kontrol Listesi */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Ebeveyn Kontrol Listesi: Çocuğunuzun Ayak Sağlığı Takibi
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                Çocuğunuzun ayak sağlığını düzenli olarak değerlendirmeniz için size rehberlik edecek kontrol listesi. Bu basit kontrol listesi, ne zaman profesyonel bir podolog desteği almanız gerektiğini anlamanıza yardımcı olacaktır.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Kontrol Edilecek Durum</th>
                      <th className="px-6 py-4 text-center">Durum</th>
                      <th className="px-6 py-4 text-left">Podoloğa Danışın</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">
                        <strong>Ağrı Şikayeti:</strong> Çocuğunuz sık sık ayak, topuk, diz veya bacak ağrısından şikayet ediyor mu?
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        ⚠️
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Biyomekanik sorun veya büyüme ağrısı olabilir.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">
                        <strong>Tırnak Değişikliği:</strong> Tırnaklarında renk değişimi (sararma, kararma) veya kalınlaşma var mı?
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        ⚠️
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Tırnak mantarı veya travma belirtisi.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">
                        <strong>Yürüme Şekli:</strong> Yürürken ayaklarını içe veya dışa doğru aşırı derecede çeviriyor mu?
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        ⚠️
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Düz tabanlık veya tabanlık ihtiyacı olabilir.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">
                        <strong>Cilt Durumu:</strong> Ayak tabanında veya parmak aralarında kızarıklık, soyulma, çatlak veya kabarcık var mı?
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        ⚠️
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Mantar, egzama veya siğil olabilir.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">
                        <strong>Ayakkabı Boyutu:</strong> Ayakkabının en uzun parmağın ucunda yaklaşık 1 cm boşluk var mı?
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        ⚠️
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Tırnak ve parmak deformasyonu riski.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Medipodo ile Çözümler */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Medipodo ile Güvenli ve Ağrısız Çözümler
                </h2>

                <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/blog-images/cocuk-ayak-sagligi/blog-sonlarına-dogru.jpg" 
                    alt="Medipodo Çocuk Tedavisi"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Çocukların ve ergenlerin ayak problemleri, hassas yaklaşımlar gerektirir. Medipodo olarak, cerrahi olmayan, ağrısız ve steril yöntemlerle çözümler sunuyoruz. Erken teşhis ve doğru müdahale, çocuğunuzun yaşam kalitesini artırır ve ilerideki ortopedik sorunları önler.
                </p>

                <Link to="/hizmetler" className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors">
                  Tüm Hizmetlerimizi Keşfedin →
                </Link>
              </div>
            </section>

            {/* SSS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Sık Sorulan Sorular (SSS)
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❓ Çocuklarda tırnak batması nasıl tedavi edilir?
                  </h3>
                  <p className="text-gray-700">
                    Çocuklarda tırnak batması tedavisinde genellikle cerrahi müdahale önerilmez. Medipodo'da uygulanan <strong>Ortoniksi (tel sistemi)</strong>, tırnağın kenarına takılan küçük bir tel yardımıyla tırnağı nazikçe yukarı kaldırır ve doğru şekilde uzamasını sağlar. Bu yöntem ağrısızdır ve çocuğun günlük aktivitelerini kısıtlamaz.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❓ Düz tabanlık kendiliğinden geçer mi?
                  </h3>
                  <p className="text-gray-700">
                    Çocuklarda düz tabanlık, esnek düz tabanlık ve sert düz tabanlık olarak ikiye ayrılır. Esnek düz tabanlık genellikle 4-6 yaşlarına kadar kendiliğinden düzelebilir. Ancak, ağrıya neden olan veya 6 yaşından sonra devam eden durumlarda, bir podolog tarafından yapılan <Link to="/ayak-analizi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Analizi</Link> ile durum değerlendirilmeli ve gerekirse kişiye özel tabanlık kullanılmalıdır.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❓ Podolog ile ortopedist arasındaki fark nedir?
                  </h3>
                  <p className="text-gray-700">
                    <strong>Ortopedist</strong>, ayak ve ayak bileği dahil olmak üzere kas-iskelet sistemi hastalıklarının cerrahi ve tıbbi tedavisiyle ilgilenen tıp doktorudur. <strong>Podolog</strong> ise, ayak sağlığı ve bakımı konusunda uzmanlaşmış, cerrahi olmayan yöntemlerle (tırnak batması teli, nasır temizliği, medikal ayak bakımı, tabanlık yapımı) ayak problemlerini çözen sağlık profesyonelidir. Podologlar, özellikle diyabetik ayak bakımı ve tırnak/deri sorunlarında ilk başvurulacak uzmanlardır.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❓ Çocuğumun Ayak Analizi ne zaman yapılmalıdır?
                  </h3>
                  <p className="text-gray-700">
                    Çocuğunuzun yürüme şeklinde bir bozukluk fark ettiğinizde, sık sık ayak veya bacak ağrısı şikayeti olduğunda veya ayakkabılarının anormal şekilde aşındığını gözlemlediğinizde <Link to="/ayak-analizi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Analizi</Link> yapılmalıdır. Analiz, çocuğunuzun basış şeklini bilimsel verilerle ortaya koyarak, doğru tedaviye yönlendirilmesini sağlar.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Çocuğunuzun Ayak Sağlığı İçin Hemen Randevu Alın
                </h2>

                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  <strong>Medipodo Bağlıca Ayak Sağlığı Merkezi</strong> olarak Ankara Bağlıca'da, çocuk ve ergenlere özel podolojik tedavi hizmetleri sunuyoruz. Uzman podologlarımız, çocuğunuzun ayak sağlığını korumak ve geliştirmek için yanınızda.
                </p>

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

export default CocukAyakSagligiBlog;
