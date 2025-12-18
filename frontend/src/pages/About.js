import React from 'react';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Hakkında | PediZone</title>
        <meta name="description" content="PediZone hakkında bilgi. Profesyonel ayak bakım ürünleri üreticisi." />
        <link rel="canonical" href="https://pedizone.com/hakkimizda" />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkında</h1>
          <p className="text-xl text-red-100">PediZone'un Hikayesi</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Biz Kimiz?</h2>
          <p className="text-lg text-gray-700 mb-6">
            PediZone, ayak sağlığı ve bakımı konusunda uzmanlaşmış, profesyonel ürünler üreten bir şirkettir. 
            Podologlar ve dermatologlarla işbirliği yaparak, bilimsel olarak kanıtlanmış formülasyonlar geliştiriyoruz.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Misyonumuz</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ayak sağlığını göz ardı etmeyen, bunu yaşam kalitesinin önemli bir parçası olarak gören insanların 
            sayısını artırmak. Profesyonel, etkili ve güvenli ürünler aracılığıyla, herkesin sağlıklı ve 
            bakımlı ayaklara sahip olmasını sağlamak.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Vizyonumuz</h2>
          <p className="text-lg text-gray-700 mb-6">
            Türkiye'de ve dünyada ayak sağlığı konusunda en güvenilir ve tercih edilen marka olmak. 
            Podologlar, dermatologlar ve sağlık profesyonelleri tarafından önerilen, bilimsel olarak 
            kanıtlanmış ürünler sunmak.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Değerlerimiz</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Kalite</h3>
              <p className="text-gray-700">En yüksek kalitede hammaddeler ve formülasyonlar kullanıyoruz.</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Güvenlik</h3>
              <p className="text-gray-700">Tüm ürünlerimiz dermatologik olarak test edilmiş ve güvenlidir.</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Bilim</h3>
              <p className="text-gray-700">Bilimsel araştırmalara dayanan, kanıtlanmış formülasyonlar.</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-700">Müşteri memnuniyeti bizim en yüksek önceliğimizdir.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Sertifikasyonlar</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>Dermatologik Test Onayı</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>GS1 Barkod Sertifikası</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>Marka Tescil Belgesi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✓</span>
              <span>Mikrobiyolojik Analiz Onayı</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
