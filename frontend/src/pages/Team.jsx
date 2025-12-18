import React from 'react';
import { Helmet } from 'react-helmet';
import { teamMembers } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Kadromuz - Medipodo Podoloji Merkezi | Uzman Ekibimiz</title>
        <meta name="description" content="Medipodo uzman podolog ekibi. Deneyimli ve sertifikalı podologlarımızla tanışın." />
        <link rel="canonical" href="https://medipodo.com/kadromuz" />
      </Helmet>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Ekibimiz</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Alanlarında uzman, deneyimli ve tutkulu podoloji ekibimizle tanışın.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-950 mb-1">{member.name}</h3>
                    <p className="text-blue-700 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700">Uzmanlık Alanları:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="bg-blue-100 text-blue-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Neden Medipodo?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ekibimiz, sürekli eğitim ve gelişime büyük önem verir. En son teknoloji yöntemleri ve uygulamalar konusunda kendilerini sürekli günceller. Memnuniyet ve başarılı sonuçlar bizim için en önemli hedeflerdir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-700 mb-2">10+</div>
                <p className="text-gray-600">Yıllık Toplam Deneyim</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-700 mb-2">100%</div>
                <p className="text-gray-600">Profesyonel Hizmet</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-700 mb-2">7/24</div>
                <p className="text-gray-600">Danışma Desteği</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Team;