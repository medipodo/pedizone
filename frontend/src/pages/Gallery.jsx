import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { X } from 'lucide-react';
import { galleryImages } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import OptimizedImage from '../components/OptimizedImage';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Galeri - Medipodo Podoloji Merkezi | Tedavi Öncesi Sonrası</title>
        <meta name="description" content="Medipodo tedavi galerisi. Batık tırnak, tırnak mantarı ve ayak bakımı tedavilerinin öncesi ve sonrası fotoğrafları." />
        <link rel="canonical" href="https://medipodo.com/galeri" />
      </Helmet>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Galeri</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Profesyonel tedavilerimizin başarılı sonuçlarını keşfedin. Her resim, ayak sağlığında yaptığımız farkı gösteriyor.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square group">
                    <OptimizedImage
                      src={item.before}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="font-medium">Tıklayın</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-blue-950 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-6xl w-full">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.before}
                alt={selectedImage.title}
                className="w-full h-auto"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-950 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Gallery;