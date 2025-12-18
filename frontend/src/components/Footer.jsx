import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold">{siteInfo.name}</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Profesyonel podoloji ve ayak bakımı hizmetleri ile sağlıklı ayaklar için yanınızdayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hizmetler" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/ayak-analizi" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Ayak Analizi
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/kadromuz" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Kadromuz
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-blue-100 hover:text-white transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• Batık Tırnak Tedavisi</li>
              <li>• Tırnak Mantarı Tedavisi</li>
              <li>• Topuk Bakımı</li>
              <li>• Nasır Tedavisi</li>
              <li>• Medikal Ayak Bakımı</li>
              <li>• Evde Medikal Ayak Bakımı</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-300 mt-1 flex-shrink-0" />
                <span className="text-sm text-blue-100">{siteInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-300 flex-shrink-0" />
                <a href={`tel:${siteInfo.phoneLink}`} className="text-sm text-blue-100 hover:text-white transition-colors">
                  {siteInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-300 flex-shrink-0" />
                <a href={`mailto:${siteInfo.email}`} className="text-sm text-blue-100 hover:text-white transition-colors">
                  {siteInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-blue-300 mt-1 flex-shrink-0" />
                <span className="text-sm text-blue-100">{siteInfo.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-200 text-center md:text-left">
              © {new Date().getFullYear()} {siteInfo.fullName}. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link to="/gizlilik-politikasi" className="text-blue-200 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <span className="text-blue-400">•</span>
              <Link to="/kullanim-sartlari" className="text-blue-200 hover:text-white transition-colors">
                Kullanım Şartları
              </Link>
              <span className="text-blue-400">•</span>
              <Link to="/sikca-sorulan-sorular" className="text-blue-200 hover:text-white transition-colors">
                S.S.S
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
