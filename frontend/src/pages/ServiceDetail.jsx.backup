import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    // Aggressive scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    // Backup scroll
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-blue-950 mb-4">Hizmet Bulunamadı</h1>
          <Link to="/hizmetler">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
              <ArrowLeft className="mr-2" size={18} />
              Hizmetlere Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <Link to="/hizmetler">
            <Button variant="ghost" className="mb-6 text-blue-700">
              <ArrowLeft className="mr-2" size={18} />
              Hizmetlere Dön
            </Button>
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{service.fullDesc}</p>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-950 mb-6">Tedavi Faydaları</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-green-600" size={16} />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-950 mb-6">Tedavi Süreci</h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-700 font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bu Tedaviyi Almak İster misiniz?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle iletişime geçin ve özel tedavi planınızı oluşturmaya başlayalım.
          </p>
          <Link to="/iletisim">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
              Randevu Alın
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;