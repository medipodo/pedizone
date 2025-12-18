import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, ExternalLink } from 'lucide-react';
import { faqData } from '../mock';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // JSON-LD Schema for Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Sık Sorulan Sorular - Medipodo Podoloji | Ayak Sağlığı Hakkında Merak Edilenler</title>
        <meta name="description" content="Podoloji, batık tırnak, tırnak mantarı, nasır, ayak analizi ve daha fazlası hakkında sık sorulan sorular ve uzman cevapları. Medipodo Ankara Bağlıca." />
        <meta name="keywords" content="podoloji sss, ayak sağlığı sorular, batık tırnak tedavisi, tırnak mantarı, medipodo faq" />
        <link rel="canonical" href="https://medipodo.com/sikca-sorulan-sorular" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-800 bg-opacity-50 rounded-full mb-6">
                <HelpCircle size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sık Sorulan Sorular
              </h1>
              <p className="text-xl text-blue-100">
                Ayak sağlığı ve podoloji hakkında merak ettiğiniz her şey
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                      aria-expanded={openId === faq.id}
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">
                          {faq.id}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openId === faq.id ? (
                          <ChevronUp className="text-blue-700" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={24} />
                        )}
                      </div>
                    </button>
                    
                    {openId === faq.id && (
                      <div className="px-6 pb-6 pt-2 animate-fadeIn">
                        <div className="pl-12">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                          
                          {faq.link && (
                            <Link
                              to={faq.link.url}
                              className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold text-sm"
                            >
                              <ExternalLink size={16} className="mr-1" />
                              {faq.link.text}
                            </Link>
                          )}
                          
                          {faq.category && (
                            <div className="mt-3">
                              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                {faq.category}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 text-center">
                <h2 className="text-2xl font-bold text-blue-950 mb-4">
                  Sorunuza Cevap Bulamadınız mı?
                </h2>
                <p className="text-gray-700 mb-6">
                  Uzman ekibimiz size yardımcı olmaktan mutluluk duyar
                </p>
                <Link to="/iletisim">
                  <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors">
                    Bize Ulaşın
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FAQ;
