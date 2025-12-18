import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, ShieldCheck, Sparkles, CircleDot, Heart, Zap } from 'lucide-react';
import { services } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const iconMap = {
  Scissors, ShieldCheck, Sparkles, CircleDot, Heart, Zap
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Medipodo Podoloji Merkezi | Ankara</title>
        <meta name="description" content="Medipodo'da sunulan profesyonel podoloji hizmetleri: Batık tırnak tedavisi, tırnak mantarı, nasır tedavisi, medikal ayak bakımı ve daha fazlası." />
        <link rel="canonical" href="https://medipodo.com/hizmetler" />
      </Helmet>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Hizmetlerimiz</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ayak sağlığınız için profesyonel podoloji hizmetleri. Modern ekipman ve uzman kadromuzla her türlü ayak problemi için çözüm sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 relative aspect-square md:aspect-auto">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:col-span-3 p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="text-blue-700" size={24} />
                          </div>
                          <h3 className="text-2xl font-semibold text-blue-950">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.fullDesc}</p>
                        <Link to={`/hizmet/${service.id}`}>
                          <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                            Detaylı Bilgi
                            <ArrowRight className="ml-2" size={18} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hangi Hizmetimiz Sizin İçin Uygun?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Emin değilseniz, uzman ekibimiz size en uygun tedaviyi belirlemek için yardımcı olacaktır.
          </p>
          <Link to="/iletisim">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
              Ücretsiz Danışma
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;