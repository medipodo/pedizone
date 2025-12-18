import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { services, galleryImages } from '../mock';
import { enrichedBlogPosts } from '../blog_content';
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

  // İlgili blog yazılarını filtrele
  const getRelatedBlogs = () => {
    const serviceKeywords = {
      'batik-tirnak': ['Tırnak', 'Batık', 'Ortoniksi'],
      'tirnak-mantari': ['Mantar', 'Tırnak'],
      'topuk-bakimi': ['Topuk', 'Çatlak'],
      'nasir-tedavisi': ['Nasır', 'Kalınlaşma', 'Siğil'],
      'refleksoloji': ['Refleksoloji', 'Ayak', 'Masaj'],
      'diyabetik-ayak': ['Diyabet', 'Ayak'],
      'ayak-bakimi': ['Bağlıca', 'Podolog', 'Ayak Bakımı']
    };

    const keywords = serviceKeywords[serviceId] || [];
    
    return enrichedBlogPosts
      .filter(blog => 
        keywords.some(keyword => 
          blog.title.includes(keyword) || 
          blog.tags.some(tag => tag.includes(keyword))
        )
      )
      .slice(0, 3);
  };

  // İlgili galeri görsellerini filtrele
  const getRelatedGallery = () => {
    const serviceGalleryMap = {
      'batik-tirnak': [7, 8, 1], // Batık tırnak görselleri
      'tirnak-mantari': [10, 11, 4, 5], // Tırnak mantarı + onychogryphosis + restorasyon
      'topuk-bakimi': [3, 6, 2], // Topuk bakımı
      'nasir-tedavisi': [2], // Hiperkeratoz
      'refleksoloji': [], // Refleksoloji görseli yok
      'diyabetik-ayak': [2, 3] // Ayak bakımı
    };

    const relatedIds = serviceGalleryMap[serviceId] || [];
    return galleryImages.filter(item => relatedIds.includes(item.id));
  };

  const relatedBlogs = getRelatedBlogs();
  const relatedGallery = getRelatedGallery();

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
    <>
      <Helmet>
        <title>{service.title} - Medipodo Podoloji Merkezi | Ankara</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://medipodo.com/hizmet/${serviceId}`} />
      </Helmet>
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

      {/* Detailed Content Section for Tırnak Mantarı */}
      {service.detailedContent && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Causes */}
              {service.detailedContent.causes && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-blue-950 mb-6 border-l-4 border-blue-600 pl-4">
                    ✔ {service.detailedContent.causes.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.detailedContent.causes.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk faktörleri:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.detailedContent.causes.riskFactors.map((factor, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span className="text-gray-700">{factor}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.detailedContent.images && service.detailedContent.images[0] && (
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={service.detailedContent.images[0]} 
                        alt="Tırnak Mantarı Nedenleri"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-gray-700">{service.detailedContent.causes.note}</p>
                  </div>
                </div>
              )}

              {/* Symptoms */}
              {service.detailedContent.symptoms && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-blue-950 mb-6 border-l-4 border-orange-600 pl-4">
                    ✔ {service.detailedContent.symptoms.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.detailedContent.symptoms.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">En sık belirtiler:</h3>
                  <ul className="space-y-3 mb-6">
                    {service.detailedContent.symptoms.signs.map((sign, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-orange-600" size={16} />
                        </div>
                        <span className="text-gray-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.detailedContent.images && service.detailedContent.images[1] && (
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={service.detailedContent.images[1]} 
                        alt="Tırnak Mantarı Belirtileri"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
                    <p className="text-gray-700">{service.detailedContent.symptoms.note}</p>
                  </div>
                </div>
              )}

              {/* Treatment */}
              {service.detailedContent.treatment && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-blue-950 mb-6 border-l-4 border-green-600 pl-4">
                    {service.detailedContent.treatment.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {service.detailedContent.treatment.intro}
                  </p>
                  
                  <div className="space-y-6">
                    {service.detailedContent.treatment.steps.map((step, index) => (
                      <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{step.number}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-700 mb-3">{step.description}</p>
                            {step.benefits && (
                              <ul className="space-y-2 mt-4">
                                {step.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start space-x-2 text-sm">
                                    <span className="text-green-600">✓</span>
                                    <span className="text-gray-600">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {service.detailedContent.images && service.detailedContent.images[2] && (
                    <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={service.detailedContent.images[2]} 
                        alt="Tırnak Mantarı Tedavisi"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Risks */}
              {service.detailedContent.risks && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-blue-950 mb-6 border-l-4 border-red-600 pl-4">
                    {service.detailedContent.risks.title}
                  </h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 mb-4 font-semibold">Tedavi geciktirilirse:</p>
                    <ul className="space-y-3">
                      {service.detailedContent.risks.consequences.map((consequence, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-red-600 mt-1 font-bold">⚠️</span>
                          <span className="text-gray-700">{consequence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-gray-700 font-semibold">{service.detailedContent.risks.note}</p>
                  </div>
                </div>
              )}

              {/* Prevention */}
              {service.detailedContent.prevention && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-blue-950 mb-6 border-l-4 border-purple-600 pl-4">
                    {service.detailedContent.prevention.title}
                  </h2>
                  {service.detailedContent.prevention.intro && (
                    <p className="text-gray-700 mb-6">{service.detailedContent.prevention.intro}</p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.detailedContent.prevention.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-purple-50 rounded-lg p-4">
                        <span className="text-purple-600 text-xl">✓</span>
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits of Regular Care */}
              {service.detailedContent.benefits && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-blue-950 mb-6 border-l-4 border-green-600 pl-4">
                    {service.detailedContent.benefits.title}
                  </h2>
                  <div className="space-y-3 mb-6">
                    {service.detailedContent.benefits.list.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-green-50 rounded-lg p-4">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-green-600" size={16} />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  {service.detailedContent.benefits.note && (
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                      <p className="text-gray-700">{service.detailedContent.benefits.note}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Why Medipodo */}
              {service.detailedContent.whyMedipodo && (
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold mb-6">
                    {service.detailedContent.whyMedipodo.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.detailedContent.whyMedipodo.reasons.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-yellow-400 text-xl">★</span>
                        <span className="text-blue-100">{reason}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 mt-6">
                    <p className="text-blue-100 text-sm">
                      {service.detailedContent.whyMedipodo.note}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* İlgili Galeri Görselleri */}
      {relatedGallery.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                📸 Örnek İşlemler
              </h2>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                {service.title} hizmetimizden başarılı sonuçlar
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedGallery.map((item) => (
                  <Card 
                    key={item.id}
                    className="overflow-hidden hover:shadow-xl transition-all"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <img
                          src={item.before}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-blue-950 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/galeri">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                    Tüm Galeriyi Görüntüle
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* İlgili Blog Yazıları */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                📚 İlgili Blog Yazıları
              </h2>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                {service.title} hakkında daha fazla bilgi edinin
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs.map((blog) => (
                  <Link 
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="block"
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all h-full">
                      <CardContent className="p-0">
                        <div className="relative aspect-video">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-lg text-blue-950 leading-tight">
                            {blog.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/blog">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                    Tüm Blog Yazılarını Görüntüle
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
    </>
  );
};

export default ServiceDetail;
