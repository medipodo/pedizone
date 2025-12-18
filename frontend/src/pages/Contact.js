import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi. En kısa zamanda sizinle iletişime geçeceğiz.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>İletişim | PediZone</title>
        <meta name="description" content="PediZone ile iletişime geçin. Sorularınız ve önerileriniz için bize yazın." />
        <link rel="canonical" href="https://pedizone.com/iletisim" />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-xl text-red-100">Bize Ulaşın</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-lg mb-2">Adres</h3>
              <p className="text-gray-600">
                Bağlıca Mah. Mert Cad. No 4/2<br />
                Etimesgut, Ankara<br />
                Türkiye
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2">Telefon</h3>
              <p className="text-gray-600">
                <a href="tel:+905068860326" className="hover:text-red-600">
                  +90 506 886 0326
                </a>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="font-bold text-lg mb-2">E-posta</h3>
              <p className="text-gray-600">
                <a href="mailto:info@pedizone.com" className="hover:text-red-600">
                  info@pedizone.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Mesaj Gönderin</h2>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label className="block font-bold mb-2">Adınız</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                placeholder="Adınız ve soyadınız"
              />
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">E-posta</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                placeholder="E-posta adresiniz"
              />
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">Konu</label>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                placeholder="Mesajınızın konusu"
              />
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">Mesaj</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                placeholder="Mesajınızı yazın..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
            >
              Mesaj Gönder
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Sık Sorulan Sorular</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Ürünler ne kadar sürede teslim edilir?</h3>
              <p className="text-gray-700">Türkiye genelinde 2-3 iş günü içinde teslimat yapılır.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">İade politikanız nedir?</h3>
              <p className="text-gray-700">Ürün açılmamışsa 30 gün içinde iade kabul edilir.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Ürünler güvenli midir?</h3>
              <p className="text-gray-700">Evet, tüm ürünlerimiz dermatologik olarak test edilmiş ve güvenlidir.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Toplu sipariş yapabilir miyim?</h3>
              <p className="text-gray-700">Evet, toplu siparişler için lütfen bize yazın.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
