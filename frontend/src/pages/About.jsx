import React from 'react';
import { Helmet } from 'react-helmet';
import { Award, Target, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Kişi Odaklılık',
      description: 'Her danışanımıza kişiye özel, özenli ve kapsayıcı hizmet sunuyoruz.'
    },
    {
      icon: Award,
      title: 'Mükemmellik',
      description: 'En yüksek kalite standartlarında hizmet vermeyi taaahhüt ediyoruz.'
    },
    {
      icon: Target,
      title: 'Uzmanlık',
      description: 'Sürekli eğitim ve gelişim ile en güncel tedavi yöntemlerini uyguluyoruz.'
    },
    {
      icon: Users,
      title: 'Şeffaflık',
      description: 'Danışanlarımıza açık iletişim ve güven ilişkisi kuruyoruz.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hakkımızda - Medipodo Podoloji Merkezi | Ankara</title>
        <meta name="description" content="Medipodo Ayak Sağlığı Merkezi hakkında bilgi edinin. Uzman podolog kadromuz ve profesyonel hizmet anlayışımızla tanışın." />
        <link rel="canonical" href="https://medipodo.com/hakkimizda" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Hakkımızda</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Medipodo Medikal Sağlık Hizmeti San. ve Tic. Ltd. Şti., Ankara'da ayak sağlığı ve podoloji alanında uzmanlaşmış öncü bir uygulama merkezidir.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-blue-950 mb-6">Hikayemiz</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Medipodo Bağlıca Ayak Bakımı, ayak sağlığının genel sağlık ve yaşam kalitesi üzerindeki önemini kavrayan bir ekip tarafından kurulmuştur. Misyonumuz, Ankara ve çevresindeki topluma en yüksek standartlarda podoloji hizmeti sunmaktır.
                  </p>
                  <p>
                    Yılların deneyimi ve sürekli eğitimle, batık tırnak, tırnak mantarı, nasır tedavisi ve kapsamlı ayak bakımı konularında uzmanlaştık. Modern ekipmanlarımız ve kanıtlanmış tedavi protokollerimiz ile hastalarımıza en etkili sonuçları sunuyoruz.
                  </p>
                  <p>
                    Steril ve hijyenik ortamımız, deneyimli uzman kadromuz ve hasta odaklı yaklaşımımız ile Ankara'nın güvenilir podoloji merkezi olmaktan gurur duyuyoruz.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
                  <img
                    src="https://customer-assets.emergentagent.com/job_podotherapy/artifacts/b9h35axs_Ads%C4%B1z%20tasar%C4%B1m%20%281%29.png"
                    alt="Medipodo Logo"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-blue-950 mb-2">Medipodo Ayak Bakımı</h3>
                    <p className="text-gray-600">Ankara'nın Güvenilir Podoloji Merkezi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hizmetlerimizde ve hasta ilişkilerimizde rehber ilkelerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-700" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">Misyonumuz</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ankara toplumuna en yüksek kalitede podoloji ve ayak bakımı hizmetleri sunarak, insanların ayak sağlığını iyileştirmek ve yaşam kalitelerini artırmak. Her hastası kişiye özel yaklaşımla tedavi etmek ve sürdeyebilir çözümler üretmek.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">Vizyonumuz</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Türkiye'de ayak sağlığı ve podoloji alanında öncü ve referans merkez olmak. İnovatif tedavi yöntemleri, sürekli eğitim ve hasta memnuniyeti odaklı hizmet anlayışıyla sektörde standartlar belirlemek.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Mutlu Hasta</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-blue-100">Uzman Ekip</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">%98</div>
              <div className="text-blue-100">Başarı Oranı</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
