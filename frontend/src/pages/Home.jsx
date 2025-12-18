import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Sparkles, ShieldCheck, Heart, Scissors, CircleDot, Zap, BookOpen, Check, Star, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { services, whyChooseUs, galleryImages, blogPosts, products, faqData } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import OptimizedImage from '../components/OptimizedImage';
import HeroSlider from '../components/HeroSlider';

// FAQ Item Component
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="text-blue-700 flex-shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

const iconMap = {
  Award, Sparkles, ShieldCheck, Heart, Scissors, CircleDot, Zap
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Medipodo - Profesyonel Podoloji ve Ayak Bakımı Merkezi | Ankara</title>
        <meta name="description" content="Ankara'da profesyonel podoloji hizmetleri. Batık tırnak, tırnak mantarı, nasır tedavisi ve medikal ayak bakımı. Uzman podolog kadromuzla hizmetinizdeyiz." />
        <link rel="canonical" href="https://medipodo.com/" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Slider */}
        <HeroSlider />

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Neden Medipodo?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığınız için en iyi hizmeti sunmak için burayız
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={index} className="border-2 hover:border-blue-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-700" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığınız için kapsamlı profesyonel hizmetler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-blue-700" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-950">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.shortDesc}</p>
                      <Link to={`/hizmet/${service.id}`}>
                        <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold">
                          Detaylı Bilgi
                          <ArrowRight className="ml-1" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/hizmetler">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                Tüm Hizmetleri Görün
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Önce & Sonra</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel tedavilerimizin başarılı sonuçları
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.slice(0, 3).map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <OptimizedImage
                      src={item.before}
                      alt={item.title}
                      className="w-full h-full object-cover"
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
              <Button size="lg" variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                Tüm Galeriyi Görün
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ayak Analizi CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-6xl mb-4 inline-block animate-bounce">🦶</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ayaklarınızı Analiz Edin
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              6 basit soruyla ayak sağlığınızı analiz edin ve size özel PediZone ürün önerisi alın
            </p>
            <Link to="/ayak-analizi">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                🎯 Hemen Analiz Et
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <p className="text-white/70 text-sm mt-4">
              ✓ Ücretsiz  ✓ 2 dakika  ✓ Kişiselleştirilmiş sonuç
            </p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Blog & Haberler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığı hakkında faydalı bilgiler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 6).map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold">
                        Devamını Oku
                        <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                Tüm Blog Yazıları
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <HelpCircle className="text-blue-700" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                Aklınızdaki Sorulara Hızlı Cevaplar
              </h2>
              <p className="text-gray-600">
                Ayak sağlığı ve podoloji hakkında en çok merak edilenler
              </p>
            </div>

            {/* First 3 FAQs with Accordion */}
            <div className="space-y-4 mb-8">
              {faqData.slice(0, 3).map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Link to="/sikca-sorulan-sorular">
                <Button 
                  size="lg" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8"
                >
                  <HelpCircle className="mr-2" size={20} />
                  Tüm Sık Sorulan Sorular İçin Tıklayın
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* E-Book Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/ebook/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Book Cover */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                  <img 
                    src="/images/ebook/cover.png" 
                    alt="Ayak Bakımı Kılavuzu E-Kitap" 
                    className="relative w-full max-w-sm rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <div className="inline-flex items-center bg-green-500 bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                  <span className="text-sm font-semibold">Yeni: Dijital Kılavuz</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ayak Bakımı Kılavuzu
                </h2>
                
                <p className="text-xl text-blue-100 mb-6">
                  Batık Tırnak, Mantar ve Nasır Sorunlarına Uzman Podolog Çözümleri
                </p>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white border-opacity-20">
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <p className="text-3xl font-bold text-white">33</p>
                      <p className="text-sm text-blue-200">Sayfa</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">6</p>
                      <p className="text-sm text-blue-200">Bölüm</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">$5</p>
                      <p className="text-sm text-blue-200">Fiyat</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Check className="mr-2 text-green-400 flex-shrink-0" size={18} />
                      <span>Evde uygulayabileceğiniz adım adım talimatlar</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="mr-2 text-green-400 flex-shrink-0" size={18} />
                      <span>Uzman podologlar tarafından hazırlandı</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="mr-2 text-green-400 flex-shrink-0" size={18} />
                      <span>Anında indirme - PDF formatında</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/ayak-bakim-kilavuzu">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-xl w-full sm:w-auto"
                    >
                      <BookOpen className="mr-2" size={20} />
                      Detaylı Bilgi Al
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">PediZone® Ürünlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel ayak bakımı için podolog onaylı ürünler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={product.coverImage} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-blue-700 font-semibold">{product.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">{product.shortName}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.tagline}</p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Hacim: {product.volume}</span>
                    </div>
                    <Link to={`/urun/${product.slug}`}>
                      <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold w-full justify-start">
                        Ürün Detayı
                        <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ayak Sağlığınız İçin Hemen İletişime Geçin</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Uzman podoloji ekibimiz, ayak sağlığınız için size en uygun tedavi planını oluşturmaya hazır.
          </p>
          <Link to="/iletisim">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
              Randevu Alın
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;