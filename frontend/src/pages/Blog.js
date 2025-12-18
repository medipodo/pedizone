import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Blog() {
  const blogPosts = [
    {
      id: 'ayak-hijyeni-ipuclari',
      title: 'Ayak Hijyeni ve Bakım İpuçları',
      excerpt: 'Gün içinde attığımız her adım, ayaklarımızın sağlığını doğrudan etkiler. Ancak çoğu zaman ayak hijyeni göz ardı edilir.',
      image: '/assets/blog-images/ayak-hijyeni-blog-d1s9wrez.jpg',
      date: '15 Aralık 2025',
      readTime: '5 dakika'
    },
    {
      id: 'ayak-kokusu-nedenleri',
      title: 'Ayak Kokusu Nedenleri ve Çözümleri',
      excerpt: 'Ayak kokusu, sosyal yaşamda utanç kaynağı olabilen bir sorundur. Ancak doğru bakım ve ürünlerle bu problem çözülebilir.',
      image: '/assets/blog-images/ayak-kokusu-blog-d6lm2ov0.jpg',
      date: '14 Aralık 2025',
      readTime: '6 dakika'
    },
    {
      id: 'ayak-mantari-nedir',
      title: 'Ayak Mantarı Nedir ve Nasıl Tedavi Edilir',
      excerpt: 'Ayak mantarı, özellikle nemli ve sıcak ortamlarda hızla yayılan bir enfeksiyondur. Erken teşhis ve tedavi çok önemlidir.',
      image: '/assets/blog-images/ayak-mantari-tedavi-optimized-bnw6r6oh.png',
      date: '13 Aralık 2025',
      readTime: '7 dakika'
    },
    {
      id: 'medikal-ayak-bakimi-nedir',
      title: 'Medikal Ayak Bakımı Nedir ve Kimlere Gereklidir',
      excerpt: 'Medikal ayak bakımı, özellikle diyabet ve diğer kronik hastalıkları olan kişiler için hayati önem taşır.',
      image: '/assets/medikal-ayak-bakimi-cxovbie1.jpg',
      date: '12 Aralık 2025',
      readTime: '8 dakika'
    },
    {
      id: 'serum-kullanim-onemi',
      title: 'Ayak Serumu Kullanımının Önemi',
      excerpt: 'Ayak serumu, tırnak ve ayak sağlığı için özel olarak formüle edilmiş bir üründür. Düzenli kullanımı önemli faydalar sağlar.',
      image: '/assets/pedizone-serum-kullanimi-bpnsuod2.jpg',
      date: '11 Aralık 2025',
      readTime: '5 dakika'
    },
    {
      id: 'spor-sonrasi-ayak-bakimi',
      title: 'Spor Sonrası Ayak Bakımı',
      excerpt: 'Sporcu ayakları özel bakım gerektirir. Spor sonrası doğru bakım rutini, yaralanmaları ve sorunları önler.',
      image: '/assets/spor-blog-kapak-gorseli-3d-0502k.jpg',
      date: '10 Aralık 2025',
      readTime: '6 dakika'
    },
    {
      id: 'tirnak-mantari-cesitleri',
      title: 'Tırnak Mantarı Çeşitleri ve Tedavi Yöntemleri',
      excerpt: 'Tırnak mantarı birçok çeşidi vardır ve her birinin farklı tedavi yöntemi gerekebilir.',
      image: '/assets/tirnak-mantari-cesitleri-cwb98cmj.jpg',
      date: '9 Aralık 2025',
      readTime: '7 dakika'
    }
  ];

  return (
    <>
      <Helmet>
        <title>PediZone Blog - Ayak Sağlığı Rehberi</title>
        <meta name="description" content="PediZone blog sayfasında ayak sağlığı, mantar tedavisi ve podoloji hakkında uzman yazıları okuyun." />
        <link rel="canonical" href="https://pedizone.com/blog" />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PediZone Blog</h1>
          <p className="text-xl text-red-100">Ayak Sağlığı Hakkında Uzman Yazıları</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 text-red-600 font-bold hover:text-red-700">
                    Devamını Oku →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
