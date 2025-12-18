import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('medipodo_cookie_consent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('medipodo_cookie_consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    // Here you would initialize analytics and marketing scripts
    initializeScripts(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('medipodo_cookie_consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('medipodo_cookie_consent', JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowSettings(false);
    initializeScripts(savedPreferences);
  };

  const initializeScripts = (prefs) => {
    // Initialize analytics scripts based on preferences
    if (prefs.analytics) {
      // Initialize Google Analytics or other analytics tools
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing/advertising scripts
      console.log('Marketing cookies enabled');
    }
  };

  const handlePreferenceChange = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
        <div className="bg-white shadow-2xl border-t-4 border-blue-700">
          <div className="container mx-auto px-4 py-6 max-w-7xl">
            {!showSettings ? (
              // Main Banner
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Cookie className="text-blue-700" size={32} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    🍪 Çerez Kullanımı ve Gizliliğiniz
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Web sitemizde, deneyiminizi kişiselleştirmek, site trafiğini analiz etmek ve reklamları optimize etmek için çerezler kullanıyoruz. 
                    KVKK ve GDPR uyarınca, çerez tercihlerinizi belirlemeniz gerekmektedir.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Link to="/gizlilik-politikasi" className="text-blue-700 hover:underline font-medium">
                      Gizlilik Politikası
                    </Link>
                    <span className="text-gray-400">•</span>
                    <Link to="/kullanim-sartlari" className="text-blue-700 hover:underline font-medium">
                      Kullanım Şartları
                    </Link>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 border border-gray-300"
                    data-testid="cookie-settings-btn"
                  >
                    <Settings size={18} />
                    Ayarlar
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-all border border-gray-300"
                    data-testid="cookie-reject-btn"
                  >
                    Reddet
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg"
                    data-testid="cookie-accept-btn"
                  >
                    Tümünü Kabul Et
                  </button>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Settings className="text-blue-700" size={28} />
                    Çerez Tercihleri
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    data-testid="cookie-settings-close-btn"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">Zorunlu Çerezler</h4>
                        <p className="text-sm text-gray-600">
                          Web sitesinin temel işlevlerini yerine getirmesi için gereklidir. Bu çerezler devre dışı bırakılamaz.
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-6 bg-blue-700 rounded-full flex items-center px-1 cursor-not-allowed">
                          <div className="w-4 h-4 bg-white rounded-full transform translate-x-6 transition-transform"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Analytics Cookies */}
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">Analitik Çerezler</h4>
                        <p className="text-sm text-gray-600">
                          Site kullanımını analiz etmemize ve kullanıcı deneyimini iyileştirmemize yardımcı olur (Google Analytics, Google Search Console).
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handlePreferenceChange('analytics')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.analytics ? 'bg-blue-700' : 'bg-gray-300'
                          }`}
                          data-testid="analytics-toggle"
                        >
                          <div
                            className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                              preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></div>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Marketing Cookies */}
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">Pazarlama ve Reklam Çerezleri</h4>
                        <p className="text-sm text-gray-600">
                          Size daha alakalı reklamlar göstermek için kullanılır (Google AdSense ve üçüncü taraf reklam ağları).
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handlePreferenceChange('marketing')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.marketing ? 'bg-blue-700' : 'bg-gray-300'
                          }`}
                          data-testid="marketing-toggle"
                        >
                          <div
                            className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                              preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-all"
                    data-testid="cookie-reject-all-btn"
                  >
                    Tümünü Reddet
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg"
                    data-testid="cookie-save-preferences-btn"
                  >
                    Tercihleri Kaydet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CookieBanner;