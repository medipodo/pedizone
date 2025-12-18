import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Kullanım Şartları - Medipodo</title>
        <meta name="description" content="Medipodo kullanım şartları ve yasal uyarı. Web sitesi kullanım koşulları hakkında bilgi." />
        <link rel="canonical" href="https://medipodo.com/kullanim-sartlari" />
      </Helmet>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="mx-auto mb-4" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kullanım Şartları ve Yasal Uyarı</h1>
            <p className="text-blue-100 text-lg">Son Güncelleme Tarihi: 14 Aralık 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                medipodo.com web sitesini ("Site") ziyaret ederek ve kullanarak, aşağıda belirtilen Kullanım Şartları ve Yasal Uyarı hükümlerini kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız, lütfen Siteyi kullanmayınız.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">1. Yasal Uyarı (Tıbbi Sorumluluk Reddi)</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-3">⚠️ Önemli Uyarı</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Profesyonel Tavsiye Yerine Geçmez:</strong> Sitede yer alan tüm içerikler (metinler, görseller, videolar, blog yazıları ve diğer materyaller) yalnızca bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavi yerine geçmez. Sitede sunulan bilgiler, bir podoloji uzmanı, doktor veya diğer nitelikli sağlık profesyonelinin kişisel muayenesi, teşhisi ve tedavisi yerine geçme amacı taşımaz.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Tıbbi Durumlar:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Herhangi bir sağlık sorununuz veya tıbbi durumunuzla ilgili sorularınız için daima bir uzmana danışınız. Sitede okuduğunuz bir bilgi nedeniyle profesyonel tıbbi tavsiyeyi göz ardı etmeyiniz veya randevu almayı geciktirmeyiniz.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Sorumluluk Reddi:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Medipodo, Sitede yer alan bilgilerin kullanımından kaynaklanan hiçbir doğrudan veya dolaylı zarardan sorumlu tutulamaz. Siteyi kullanmakla, bilgileri kendi sorumluluğunuzda kullandığınızı kabul etmiş olursunuz.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">2. Fikri Mülkiyet Hakları</h2>
              
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 mt-6">Telif Hakkı</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sitede yer alan tüm içerik (tasarım, metin, grafikler, logolar, resimler, videolar ve yazılım) Medipodo Medikal Sağlık Hizmetleri'ne aittir ve telif hakkı yasaları ile korunmaktadır.
              </p>
              
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 mt-6">Kullanım Kısıtlamaları</h3>
              <p className="text-gray-700 leading-relaxed">
                Sitedeki içerik, Medipodo'nun yazılı izni olmaksızın çoğaltılamaz, dağıtılamaz, yayınlanamaz, değiştirilemez veya ticari amaçlarla kullanılamaz. Kişisel ve ticari olmayan kullanım için içeriklerin tek bir kopyasını indirebilir veya yazdırabilirsiniz, ancak bu kopyalarda tüm telif hakkı ve mülkiyet bildirimlerini korumanız gerekir.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">3. Site Kullanımı</h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Doğruluk:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Medipodo, Sitede yer alan bilgilerin doğru ve güncel olması için makul çabayı gösterir, ancak bilgilerin eksiksizliği, doğruluğu veya güncelliği konusunda herhangi bir garanti vermez.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Yasaklanmış Kullanım:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Siteyi yasa dışı amaçlarla veya bu Kullanım Şartlarını ihlal edecek şekilde kullanmanız yasaktır. Siteye zarar verecek, aşırı yükleyecek veya işleyişini bozacak eylemlerde bulunamazsınız.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">4. Üçüncü Taraf Bağlantıları</h2>
              <p className="text-gray-700 leading-relaxed">
                Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca size kolaylık sağlamak amacıyla sunulmuştur. Medipodo, bu üçüncü taraf sitelerin içeriği, gizlilik politikaları veya uygulamaları üzerinde herhangi bir kontrole sahip değildir ve bunlardan sorumlu değildir.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">5. Şartların Değiştirilmesi</h2>
              <p className="text-gray-700 leading-relaxed">
                Medipodo, bu Kullanım Şartlarını ve Yasal Uyarıyı herhangi bir zamanda önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Değişiklikler, Sitede yayınlandığı anda yürürlüğe girer. Siteyi kullanmaya devam etmeniz, güncellenmiş şartları kabul ettiğiniz anlamına gelir.
              </p>
            </section>

            {/* Section 6 - Contact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-blue-200">6. İletişim</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bu Kullanım Şartları ile ilgili herhangi bir sorunuz varsa, lütfen aşağıdaki iletişim bilgilerini kullanarak bizimle iletişime geçin:
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

export default TermsOfService;