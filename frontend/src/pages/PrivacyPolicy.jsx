import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası - Medipodo</title>
        <meta name="description" content="Medipodo gizlilik politikası. Kişisel verilerinizin korunması ve KVKK uyumu hakkında bilgi." />
        <link rel="canonical" href="https://medipodo.com/gizlilik-politikasi" />
      </Helmet>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto mb-4" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gizlilik Politikası</h1>
            <p className="text-blue-100 text-lg">Son Güncelleme Tarihi: 14 Aralık 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                Bu Gizlilik Politikası, Medipodo Medikal Sağlık Hizmetleri ("Medipodo", "biz" veya "Şirket") nin medipodo.com web sitesi ("Site") aracılığıyla topladığı, kullandığı ve koruduğu kişisel veriler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">1. Topladığımız Bilgiler</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlanmak için bizimle iletişime geçtiğinizde aşağıdaki türde bilgileri toplayabiliriz:
              </p>
              
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 mt-6">A. Doğrudan Sağladığınız Bilgiler</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">İletişim Bilgileri:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Adınız, soyadınız, telefon numaranız, e-posta adresiniz ve randevu talebi veya iletişim formları aracılığıyla bize sağladığınız diğer bilgiler.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Sağlık Bilgileri:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Ayak analizi formu veya randevu talebi sırasında, hizmetlerimizi sağlamak amacıyla gerekli olan ve sizin tarafınızdan gönüllü olarak paylaşılan sağlık durumu veya ayak problemleriyle ilgili bilgiler. Bu tür hassas bilgiler, yalnızca hizmet sunumu amacıyla ve yasal yükümlülükler çerçevesinde işlenir.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-blue-900 mb-4 mt-6">B. Otomatik Olarak Toplanan Bilgiler (Çerezler ve İzleme Teknolojileri)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sitemizi ziyaret ettiğinizde, tarayıcınız ve cihazınız hakkında otomatik olarak bilgi toplanır. Bu bilgiler şunları içerir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>IP adresiniz, tarayıcı türünüz, işletim sisteminiz.</li>
                <li>Sitede geçirdiğiniz süre, ziyaret ettiğiniz sayfalar ve tıklama hareketleriniz.</li>
                <li><strong>Çerezler:</strong> Site, kullanıcı deneyimini iyileştirmek, trafiği analiz etmek ve reklam sunmak amacıyla çerezler (cookies) kullanır.</li>
                <li><strong>Web Analizi ve İzleme Araçları:</strong> Sitemizin performansını analiz etmek ve kullanıcı deneyimini iyileştirmek amacıyla Google Analytics ve Google Search Console gibi araçları kullanmaktayız. Bu araçlar, site trafiği, kullanıcı davranışları ve arama performansı gibi anonim verileri toplar.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">2. Bilgilerin Kullanım Amaçları</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Topladığımız bilgileri aşağıdaki amaçlar için kullanırız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Randevu taleplerinizi işleme koymak ve size talep ettiğiniz hizmetleri sunmak.</li>
                <li>Sizinle iletişim kurmak ve sorularınıza yanıt vermek.</li>
                <li>Hizmetlerimizi ve web sitemizin işlevselliğini analiz etmek ve iyileştirmek.</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">3. Google AdSense ve Üçüncü Taraf Reklamcılık</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Medipodo.com, içeriklerinden para kazanmak amacıyla Google tarafından sağlanan bir reklam hizmeti olan Google AdSense'i kullanmaktadır. Google, üçüncü taraf satıcı olarak çerezleri kullanarak sitemizde reklam yayınlar. Google'ın reklam çerezlerini kullanması, kullanıcılarımıza sitemize ve internetteki diğer sitelere yaptıkları ziyaretleri temel alan reklamlar sunmasını sağlar.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  Kullanıcılar, Google Reklam ve İçerik Ağı Gizlilik Politikası'nı ziyaret ederek reklam çerezlerinin kullanımını devre dışı bırakabilirler. AdSense reklamları sunan diğer üçüncü taraf satıcılar ve reklam ağları da kendi çerezlerini kullanabilir. Bu satıcıların ve reklam ağlarının çerez kullanımını kontrol etme yetkimiz bulunmamaktadır.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-gray-800 font-semibold mb-2">Önemli Not:</p>
                <p className="text-gray-700 leading-relaxed">
                  AdSense program politikaları gereği, sitemizde reklam yayınlayan üçüncü taraf tedarikçi firma ve reklam ağlarını ziyaretçilere belirtmekle yükümlüyüz.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">4. Bilgilerin Paylaşılması</h2>
              <p className="text-gray-700 leading-relaxed">
                Kişisel verileriniz, yasal zorunluluklar haricinde, sizin açık rızanız olmadan üçüncü taraflarla paylaşılmaz. Hizmetlerimizi sağlamak amacıyla (örneğin, web sitesi barındırma, analiz hizmetleri) güvendiğimiz hizmet sağlayıcılarla verilerinizi paylaşabiliriz. Bu hizmet sağlayıcılar, verilerinizi yalnızca bizim talimatlarımız doğrultusunda ve bu Gizlilik Politikası'na uygun olarak kullanmakla yükümlüdür.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">5. Güvenlik</h2>
              <p className="text-gray-700 leading-relaxed">
                Verilerinizin güvenliğini sağlamak için makul idari, teknik ve fiziksel önlemleri almaktayız. Ancak, internet üzerinden hiçbir veri aktarımının %100 güvenli olduğu garanti edilemez.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">6. Değişiklikler</h2>
              <p className="text-gray-700 leading-relaxed">
                Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Politikada önemli değişiklikler yaptığımızda, güncellenmiş politikayı Sitemizde yayınlayarak sizi bilgilendireceğiz.
              </p>
            </section>

            {/* Section 7 - Contact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">7. İletişim</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gizlilik Politikamız hakkında herhangi bir sorunuz varsa, lütfen aşağıdaki iletişim bilgilerini kullanarak bizimle iletişime geçin:
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Medipodo Medikal Sağlık Hizmetleri</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-blue-700 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">E-posta</p>
                      <a href="mailto:medipodotr@gmail.com" className="text-blue-700 font-semibold hover:underline text-lg">
                        medipodotr@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-blue-700 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Telefon</p>
                      <a href="tel:05456569747" className="text-blue-700 font-semibold hover:underline text-lg">
                        0545 656 97 47
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-blue-700 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Adres</p>
                      <p className="text-gray-800 font-medium text-lg">
                        Bağlıca Mah. Mert Cad. 4/2 Etimesgut, Ankara
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <Link to="/" className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold">
                ← Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;