import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteInfo } from '../mock';
import { Card, CardContent } from '../components/ui/card';

const Contact = () => {
  useEffect(() => {
    // AdSense script'i yükle
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>İletişim - Medipodo Podoloji Merkezi | Ankara Bağlıca</title>
        <meta name="description" content="Medipodo Podoloji Merkezi iletişim bilgileri. Adres: Bağlıca, Ankara. Randevu ve sorularınız için bize ulaşın." />
        <link rel="canonical" href="https://medipodo.com/iletisim" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">İletişim</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ayak sağlığınızla ilgili sorularınız için bize ulaşın. Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-950 mb-8">İletişim Bilgileri</h2>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950 mb-2">Adres</h3>
                      <p className="text-gray-600">{siteInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950 mb-2">Telefon</h3>
                      <a 
                        href={`tel:${siteInfo.phoneLink}`}
                        className="text-blue-700 hover:text-blue-800 font-medium"
                      >
                        {siteInfo.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950 mb-2">E-posta</h3>
                      <a 
                        href={`mailto:${siteInfo.email}`}
                        className="text-blue-700 hover:text-blue-800 font-medium"
                      >
                        {siteInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-950 mb-2">Çalışma Saatleri</h3>
                      <p className="text-gray-600">{siteInfo.workingHours}</p>
                      <p className="text-gray-500 text-sm mt-1">Pazar: Kapalı</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-8">Konum</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[600px]">
                <iframe
                  title="Medipodo Ayak Bakımı Konumu"
                  src={`https://www.google.com/maps?q=${siteInfo.mapCoordinates.lat},${siteInfo.mapCoordinates.lng}&hl=tr&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">WhatsApp'tan Hemen Ulaşın</h2>
          <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
            Hızlı yanıt için WhatsApp hattımızdan bize ulaşabilir, soru sorabilir ve randevu alabilirsiniz.
          </p>
          <a
            href={`https://wa.me/${siteInfo.whatsapp}?text=Merhaba, bilgi almak istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg shadow-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp ile Yaz
          </a>
        </div>
      </section>

      {/* Google AdSense */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ins 
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-5400209193949629"
              data-ad-slot="2964637990"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;