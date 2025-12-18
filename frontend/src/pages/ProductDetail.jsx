import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Package, Sparkles } from 'lucide-react';
import { products } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h2>
          <Link to="/">
            <Button>Ana Sayfaya Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - PediZone® | Medipodo</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://medipodo.com/urun/${slug}`} />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-700">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-blue-700 font-medium">{product.shortName}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-white rounded-2xl p-8 mb-4 shadow-lg">
                <img
                  src={product.detailImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
              </div>
              {product.detailImages.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.detailImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`bg-white rounded-lg p-4 border-2 transition-all ${
                        selectedImage === index
                          ? 'border-blue-700 shadow-md'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-blue-950 mb-3">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{product.tagline}</p>
              
              <div className="mb-6">
                <span className="text-lg text-gray-600">Hacim: <span className="font-semibold text-blue-950">{product.volume}</span></span>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg mb-6">
                <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Key Features */}
              <Card className="mb-6 border-2 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center gap-2">
                    <Sparkles className="text-blue-700" size={24} />
                    Öne Çıkan Özellikler
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/905456569747?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    WhatsApp ile Sipariş Ver
                  </Button>
                </a>
                <Link to="/iletisim" className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-50"
                  >
                    İletişime Geç
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Ürün Faydaları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-blue-300 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-blue-700" size={20} />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Aktif İçerikler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.ingredients.map((ingredient, index) => (
                <Card key={index} className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-950 mb-2">{ingredient.name}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{ingredient.effect}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Kullanım Talimatları</h2>
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {product.usage.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
                {product.recommendation && (
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <p className="text-blue-900 font-semibold mb-2">💡 Öneri:</p>
                    <p className="text-gray-700 leading-relaxed">{product.recommendation}</p>
                  </div>
                )}
                {product.professionalUse && (
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-blue-900 font-semibold mb-2">🏥 Profesyonel Kullanım:</p>
                    <p className="text-gray-700 leading-relaxed">{product.professionalUse}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Usage Areas (if available) */}
          {product.usageAreas && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Kullanım Alanları</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.usageAreas.map((area, index) => (
                  <Card key={index} className="border-2 border-blue-200 hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Package className="text-blue-700 mx-auto mb-3" size={32} />
                      <p className="text-gray-800 font-semibold">{area}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Podologist Approval */}
          <div className="mt-16">
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-700" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">Podolog Onaylı</h3>
                <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Bu ürün, ayak sağlığı uzmanları (Podologlar) tarafından test edilmiş ve onaylanmıştır. 
                  Profesyonel podoloji uygulamalarını evde desteklemek üzere geliştirilmiştir.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* PediZone.com Link */}
          <div className="mt-12">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6 text-center">
                <p className="text-gray-700 mb-4">
                  PediZone® ürünleri hakkında daha fazla bilgi almak ve satın alma seçenekleri için:
                </p>
                <a
                  href="https://pedizone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold text-lg"
                >
                  🔗 pedizone.com adresini ziyaret edin
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Other Products */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Diğer Ürünler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products
                .filter(p => p.id !== product.id)
                .map((otherProduct) => (
                  <Card key={otherProduct.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={otherProduct.coverImage} 
                          alt={otherProduct.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="text-sm text-blue-700 font-semibold">{otherProduct.category}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-950 mb-2">{otherProduct.shortName}</h3>
                        <p className="text-gray-600 text-sm mb-2">{otherProduct.tagline}</p>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{otherProduct.description}</p>
                        <div className="mb-4">
                          <span className="text-sm text-gray-500">Hacim: {otherProduct.volume}</span>
                        </div>
                        <Link to={`/urun/${otherProduct.slug}`}>
                          <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold">
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

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link to="/">
              <Button variant="outline" size="lg" className="border-2 border-blue-700 text-blue-700">
                <ArrowLeft className="mr-2" size={20} />
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ProductDetail;
