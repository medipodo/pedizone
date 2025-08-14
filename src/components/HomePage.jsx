import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

// Import images
import productSerum from '../assets/IMG_7571_optimized.webp'
import productFoam from '../assets/Pedizone Foot Foam.jpg'
import productSerum2 from '../assets/pedizone-urea-cream.jpg'
import solutionImage1 from '../assets/ayak-mantari-tedavi.webp'
import solutionImage2 from '../assets/foot-callus-problem.jpg'
import solutionImage3 from '../assets/foot-crack-problem.jpg'
import solutionImage4 from '../assets/foot-odor-problem.jpg'
import blogAyakMantari from '../assets/ayak-mantari-tedavi.webp'
import blogTirnakMantari from '../assets/tirnak-mantari-cesitleri.jpg'
import blogSerumKullanimi from '../assets/pedizone-serum-kullanimi.jpg'

const HomePage = () => {
  const navigate = useNavigate()
  const [currentLang, setCurrentLang] = useState('tr')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Mesajınız başarıyla gönderildi!')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  // Content translations
  const content = {
    tr: {
      nav: {
        home: 'Ana Sayfa',
        products: 'Ürünler',
        solutions: 'Çözümler',
        about: 'Hakkımızda',
        contact: 'İletişim'
      },
      hero: {
        badge: 'Podolog Onaylı',
        title: 'Profesyonel Ayak Bakım Çözümleri',
        brand: 'Pedizone®',
        subtitle: 'Podologların önerileri ve beklentilerine yönelik hazırlanan etkili ayak bakım ürünleri',
        cta1: 'Ürünleri Keşfedin',
        cta2: 'Uzman Desteği'
      },
      products: {
        title: 'Ürün Portföyümüz',
        subtitle: 'Her ayak sorunu için özel olarak geliştirilmiş çözümler',
        items: [
          {
            id: 'mantar-karsiti-serum',
            name: 'PediZone® Mantar Karşıtı Serum',
            description: 'Ayak ve tırnak mantarı için özel formül',
            image: productSerum,
            badge: 'En Popüler',
            features: ['Hızlı etki', 'Doğal içerik', 'Günlük kullanım', 'Podolog onaylı']
          },
          {
            id: 'temizleme-kopugu',
            name: 'PediZone® Ayak Temizleme Köpüğü',
            description: 'Derinlemesine temizlik ve koruma',
            image: productFoam,
            badge: 'Yeni',
            features: ['Antibakteriyel', 'Koku giderici', 'Yumuşak formül', 'Günlük bakım']
          },
          {
            id: 'bakim-serumu',
            name: 'PediZone® %15 Üreli Çatlak Topuk ve Ayak Kremi',
            description: 'Genel ayak bakımı ve nemlendirme',
            image: productSerum2,
            badge: 'Önerilen',
            features: ['Nemlendirici', 'Onarıcı', 'Koruyucu', 'Tüm cilt tipleri']
          }
        ]
      },
      solutions: {
        title: 'Ayak Sorunlarına Çözümler',
        subtitle: 'Uzman ekibimizle geliştirilen hedefli tedavi yaklaşımları',
        items: [
          {
            title: 'Mantar Enfeksiyonları',
            description: 'Ayak ve tırnak mantarı için etkili tedavi çözümleri',
            features: ['Antifungal serum', 'Temizleme köpüğü', 'Koruyucu bakım'],
            image: solutionImage1
          },
          {
            title: 'Nasır ve Kalınlaşma',
            description: 'Sert deri tabakalarını yumuşatan özel formüller',
            features: ['Yumuşatıcı krem', 'Peeling serum', 'Nemlendirici'],
            image: solutionImage2
          },
          {
            title: 'Çatlak ve Kuruluk',
            description: 'Kuru ve çatlak ayaklar için onarıcı bakım',
            features: ['Onarıcı krem', 'Yoğun nemlendirici', 'Gece bakımı'],
            image: solutionImage3
          },
          {
            title: 'Koku ve Terleme',
            description: 'Aşırı terleme ve koku problemleri için çözümler',
            features: ['Deodorant serum', 'Antibakteriyel köpük', 'Terleme önleyici'],
            image: solutionImage4
          }
        ]
      },
      about: {
        title: 'Neden PediZone®?',
        subtitle: 'Ayak sağlığında güvenilir çözüm ortağınız',
        items: [
          {
            title: 'Podolog Onaylı',
            description: 'Tüm ürünlerimiz ayak sağlığı uzmanları tarafından test edilmiş ve onaylanmıştır.'
          },
          {
            title: 'Klinik Testli',
            description: 'Laboratuvar ortamında yapılan testlerle etkinliği kanıtlanmış formüller.'
          },
          {
            title: 'Doğal İçerikler',
            description: 'Doğal ve güvenli aktif bileşenlerle hazırlanmış, yan etki riski minimum.'
          },
          {
            title: 'Uzman Desteği',
            description: '7/24 uzman ekibimizden destek alabilir, sorularınızı yanıtlayabilirsiniz.'
          }
        ]
      },
      blog: {
        title: 'PediZone Blog',
        subtitle: 'Ayak sağlığı rehberi ve uzman tavsiyeleri',
        items: [
          {
            title: 'Ayak Mantarı Nedir, Neden Olur?',
            excerpt: 'Ayak mantarı, özellikle ayak parmak aralarında oluşan ve kaşıntı, kızarıklık, kötü koku gibi belirtilerle kendini gösteren bulaşıcı bir cilt enfeksiyonudur.',
            readTime: '5 dakika',
            tags: ['ayak mantarı', 'ayak sağlığı', 'podoloji'],
            image: blogAyakMantari,
            link: '/blog/ayak-mantari-nedir.html'
          },
          {
            title: 'Tırnak Mantarı Çeşitleri Nelerdir?',
            excerpt: 'Tırnak mantarı, hem estetik görünümü bozan hem de ciddi rahatsızlıklara yol açabilen yaygın bir enfeksiyondur. Onikomikoz olarak bilinen bu hastalığın farklı çeşitleri bulunmaktadır.',
            readTime: '6 dakika',
            tags: ['tırnak mantarı', 'onikomikoz', 'tırnak hastalıkları'],
            image: blogTirnakMantari,
            link: '/blog/tirnak-mantari-cesitleri.html'
          },
          {
            title: 'Mantar İçin Serum Kullanmanın Önemi',
            excerpt: 'Mantar enfeksiyonlarında doğru ürünle yapılan topikal tedavi, iyileşme sürecini doğrudan etkiler. PediZone 50 Ml Serum ile serum formundaki ürünlerin avantajlarını keşfedin.',
            readTime: '7 dakika',
            tags: ['mantar serumu', 'PediZone', 'topikal tedavi'],
            image: blogSerumKullanimi,
            link: '/blog/serum-kullanim-onemi.html'
          }
        ]
      },
      contact: {
        title: 'İletişime Geçin',
        subtitle: 'Sorularınız için buradayız',
        address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: '05068860326',
        email: 'info@pedizone.com',
        form: {
          title: 'Bize Ulaşın',
          name: 'Ad Soyad',
          email: 'E-posta',
          message: 'Mesaj',
          submit: 'Mesaj Gönder',
          namePlaceholder: 'Adınızı girin',
          emailPlaceholder: 'E-posta adresinizi girin',
          messagePlaceholder: 'Mesajınızı yazın'
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        solutions: 'Solutions',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        badge: 'Podologist Approved',
        title: 'Professional Foot Care Solutions',
        brand: 'Pedizone®',
        subtitle: 'Effective foot care products prepared according to podologists\' recommendations and expectations',
        cta1: 'Explore Products',
        cta2: 'Expert Support'
      },
      products: {
        title: 'Our Product Portfolio',
        subtitle: 'Specially developed solutions for every foot problem',
        items: [
          {
            id: 'mantar-karsiti-serum',
            name: 'PediZone® Antifungal Serum',
            description: 'Special formula for foot and nail fungus',
            image: productSerum,
            badge: 'Most Popular',
            features: ['Fast acting', 'Natural content', 'Daily use', 'Podologist approved']
          },
          {
            id: 'temizleme-kopugu',
            name: 'PediZone® Foot Cleansing Foam',
            description: 'Deep cleansing and protection',
            image: productFoam,
            badge: 'New',
            features: ['Antibacterial', 'Odor eliminating', 'Gentle formula', 'Daily care']
          },
          {
            id: 'bakim-serumu',
            name: 'PediZone® 15% Urea Cracked Heel and Foot Cream',
            description: 'General foot care and moisturizing',
            image: productSerum2,
            badge: 'Recommended',
            features: ['Moisturizing', 'Repairing', 'Protective', 'All skin types']
          }
        ]
      },
      solutions: {
        title: 'Solutions for Foot Problems',
        subtitle: 'Targeted treatment approaches developed with our expert team',
        items: [
          {
            title: 'Fungal Infections',
            description: 'Effective treatment solutions for foot and nail fungus',
            features: ['Antifungal serum', 'Cleansing foam', 'Protective care'],
            image: solutionImage1
          },
          {
            title: 'Callus and Thickening',
            description: 'Special formulas that soften hard skin layers',
            features: ['Softening cream', 'Peeling serum', 'Moisturizer'],
            image: solutionImage2
          },
          {
            title: 'Cracks and Dryness',
            description: 'Restorative care for dry and cracked feet',
            features: ['Repair cream', 'Intensive moisturizer', 'Night care'],
            image: solutionImage3
          },
          {
            title: 'Odor and Sweating',
            description: 'Solutions for excessive sweating and odor problems',
            features: ['Deodorant serum', 'Antibacterial foam', 'Anti-perspirant'],
            image: solutionImage4
          }
        ]
      },
      about: {
        title: 'Why PediZone®?',
        subtitle: 'Your reliable solution partner in foot health',
        items: [
          {
            title: 'Podologist Approved',
            description: 'All our products have been tested and approved by foot health specialists.'
          },
          {
            title: 'Clinically Tested',
            description: 'Formulas with proven effectiveness through laboratory testing.'
          },
          {
            title: 'Natural Ingredients',
            description: 'Prepared with natural and safe active ingredients, minimal risk of side effects.'
          },
          {
            title: 'Expert Support',
            description: 'You can get support from our expert team 24/7 and get answers to your questions.'
          }
        ]
      },
      blog: {
        title: 'PediZone Blog',
        subtitle: 'Foot health guide and expert advice',
        items: [
          {
            title: 'What is Foot Fungus, Why Does It Occur?',
            excerpt: 'Foot fungus is a contagious skin infection that occurs especially between the toes and manifests itself with symptoms such as itching, redness, and bad odor.',
            readTime: '5 min',
            tags: ['foot fungus', 'foot health', 'podology'],
            image: blogAyakMantari
          },
          {
            title: 'What are the Types of Nail Fungus?',
            excerpt: 'Nail fungus is a common infection that both spoils the aesthetic appearance and can lead to serious discomfort. This disease, known as onychomycosis, has different types.',
            readTime: '6 min',
            tags: ['nail fungus', 'onychomycosis', 'nail diseases'],
            image: blogTirnakMantari
          },
          {
            title: 'The Importance of Using Serum for Fungus',
            excerpt: 'Topical treatment with the right product in fungal infections directly affects the healing process. Discover the advantages of serum-form products with PediZone 50 Ml Serum.',
            readTime: '7 min',
            tags: ['fungus serum', 'PediZone', 'topical treatment'],
            image: blogSerumKullanimi
          }
        ]
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'We are here for your questions',
        address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: '05068860326',
        email: 'info@pedizone.com',
        form: {
          title: 'Contact Us',
          name: 'Full Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send Message',
          namePlaceholder: 'Enter your name',
          emailPlaceholder: 'Enter your email address',
          messagePlaceholder: 'Write your message'
        }
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        products: 'المنتجات',
        solutions: 'الحلول',
        about: 'حولنا',
        contact: 'اتصل بنا'
      },
      hero: {
        badge: 'معتمد من أطباء الأقدام',
        title: 'حلول احترافية لرعاية القدم',
        brand: 'بيديزون®',
        subtitle: 'منتجات فعالة لرعاية القدم معدة وفقاً لتوصيات وتوقعات أطباء الأقدام',
        cta1: 'استكشف المنتجات',
        cta2: 'دعم الخبراء'
      },
      products: {
        title: 'محفظة منتجاتنا',
        subtitle: 'حلول مطورة خصيصاً لكل مشكلة في القدم',
        items: [
          {
            id: 'mantar-karsiti-serum',
            name: 'بيديزون® مصل مضاد للفطريات',
            description: 'تركيبة خاصة لفطريات القدم والأظافر',
            image: productSerum,
            badge: 'الأكثر شعبية',
            features: ['سريع المفعول', 'محتوى طبيعي', 'للاستخدام اليومي', 'معتمد من أطباء الأقدام']
          },
          {
            id: 'temizleme-kopugu',
            name: 'بيديزون® رغوة تنظيف القدم',
            description: 'تنظيف عميق وحماية',
            image: productFoam,
            badge: 'جديد',
            features: ['مضاد للبكتيريا', 'مزيل للرائحة', 'تركيبة لطيفة', 'رعاية يومية']
          },
          {
            id: 'bakim-serumu',
            name: 'بيديزون® كريم القدم والكعب المتشقق بـ 15% يوريا',
            description: 'رعاية عامة للقدم وترطيب',
            image: productSerum2,
            badge: 'موصى به',
            features: ['مرطب', 'مصلح', 'واقي', 'لجميع أنواع البشرة']
          }
        ]
      },
      solutions: {
        title: 'حلول لمشاكل القدم',
        subtitle: 'نهج علاجية مستهدفة طورها فريق خبرائنا',
        items: [
          {
            title: 'العدوى الفطرية',
            description: 'حلول علاجية فعالة لفطريات القدم والأظافر',
            features: ['مصل مضاد للفطريات', 'رغوة التنظيف', 'رعاية واقية'],
            image: solutionImage1
          },
          {
            title: 'الكالو والسماكة',
            description: 'تركيبات خاصة تنعم طبقات الجلد الصلبة',
            features: ['كريم منعم', 'مصل التقشير', 'مرطب'],
            image: solutionImage2
          },
          {
            title: 'التشققات والجفاف',
            description: 'رعاية ترميمية للأقدام الجافة والمتشققة',
            features: ['كريم الإصلاح', 'مرطب مكثف', 'رعاية ليلية'],
            image: solutionImage3
          },
          {
            title: 'الرائحة والتعرق',
            description: 'حلول لمشاكل التعرق المفرط والرائحة',
            features: ['مصل مزيل العرق', 'رغوة مضادة للبكتيريا', 'مضاد للتعرق'],
            image: solutionImage4
          }
        ]
      },
      about: {
        title: 'لماذا بيديزون®؟',
        subtitle: 'شريكك الموثوق في صحة القدم',
        items: [
          {
            title: 'معتمد من أطباء الأقدام',
            description: 'جميع منتجاتنا تم اختبارها واعتمادها من قبل أخصائيي صحة القدم.'
          },
          {
            title: 'مختبر سريرياً',
            description: 'تركيبات ذات فعالية مثبتة من خلال الاختبارات المعملية.'
          },
          {
            title: 'مكونات طبيعية',
            description: 'معدة بمكونات فعالة طبيعية وآمنة، مخاطر آثار جانبية قليلة.'
          },
          {
            title: 'دعم الخبراء',
            description: 'يمكنك الحصول على الدعم من فريق خبرائنا على مدار الساعة والحصول على إجابات لأسئلتك.'
          }
        ]
      },
      blog: {
        title: 'مدونة بيديزون',
        subtitle: 'دليل صحة القدم ونصائح الخبراء',
        items: [
          {
            title: 'ما هي فطريات القدم، لماذا تحدث؟',
            excerpt: 'فطريات القدم هي عدوى جلدية معدية تحدث خاصة بين أصابع القدم وتظهر بأعراض مثل الحكة والاحمرار والرائحة الكريهة.',
            readTime: '5 دقائق',
            tags: ['فطريات القدم', 'صحة القدم', 'طب الأقدام'],
            image: blogAyakMantari
          },
          {
            title: 'ما هي أنواع فطريات الأظافر؟',
            excerpt: 'فطريات الأظافر هي عدوى شائعة تفسد المظهر الجمالي ويمكن أن تؤدي إلى إزعاج خطير. هذا المرض المعروف باسم فطار الأظافر له أنواع مختلفة.',
            readTime: '6 دقائق',
            tags: ['فطريات الأظافر', 'فطار الأظافر', 'أمراض الأظافر'],
            image: blogTirnakMantari
          },
          {
            title: 'أهمية استخدام المصل للفطريات',
            excerpt: 'العلاج الموضعي بالمنتج المناسب في العدوى الفطرية يؤثر مباشرة على عملية الشفاء. اكتشف مزايا المنتجات في شكل مصل مع بيديزون 50 مل.',
            readTime: '7 دقائق',
            tags: ['مصل الفطريات', 'بيديزون', 'العلاج الموضعي'],
            image: blogSerumKullanimi
          }
        ]
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'نحن هنا لأسئلتك',
        address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: '05068860326',
        email: 'info@pedizone.com',
        form: {
          title: 'اتصل بنا',
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          submit: 'إرسال الرسالة',
          namePlaceholder: 'أدخل اسمك',
          emailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
          messagePlaceholder: 'اكتب رسالتك'
        }
      }
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pedizone-gradient text-white sticky top-0 z-40">
        <div className="pedizone-container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer" 
              onClick={scrollToTop}
            >
              <span className="text-2xl font-bold">Pedizone</span>
              <span className="text-sm relative -top-2">®</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-red-200 transition-colors">{t.nav.home}</a>
              <a href="#products" className="text-white hover:text-red-200 transition-colors">{t.nav.products}</a>
              <a href="#solutions" className="text-white hover:text-red-200 transition-colors">{t.nav.solutions}</a>
              <a href="#about" className="text-white hover:text-red-200 transition-colors">{t.nav.about}</a>
              <a href="#contact" className="text-white hover:text-red-200 transition-colors">{t.nav.contact}</a>
            </nav>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop Language Selector */}
              <div className="hidden lg:flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentLang('tr')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    currentLang === 'tr' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">🇹🇷</span>
                  <span className="text-sm">TR</span>
                </button>
                <button 
                  onClick={() => setCurrentLang('en')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    currentLang === 'en' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span className="text-sm">EN</span>
                </button>
                <button 
                  onClick={() => setCurrentLang('ar')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    currentLang === 'ar' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">🇸🇦</span>
                  <span className="text-sm">AR</span>
                </button>
              </div>

              {/* Mobile Language Selector */}
              <div className="lg:hidden flex items-center space-x-1">
                <button 
                  onClick={() => setCurrentLang('tr')}
                  className={`p-2 rounded-lg transition-colors ${
                    currentLang === 'tr' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">🇹🇷</span>
                </button>
                <button 
                  onClick={() => setCurrentLang('en')}
                  className={`p-2 rounded-lg transition-colors ${
                    currentLang === 'en' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">🇺🇸</span>
                </button>
                <button 
                  onClick={() => setCurrentLang('ar')}
                  className={`p-2 rounded-lg transition-colors ${
                    currentLang === 'ar' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  <span className="text-xl">🇸🇦</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-red-400/30">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.home}
                </a>
                <a 
                  href="#products" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.products}
                </a>
                <a 
                  href="#solutions" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.solutions}
                </a>
                <a 
                  href="#about" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.about}
                </a>
                <a 
                  href="#contact" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.contact}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section bg-gray-50">
        <div className="pedizone-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-red-100 text-red-800 px-4 py-2 text-sm font-medium">
                  {t.hero.badge}
                </Badge>
                
                <h1 className="pedizone-heading text-5xl lg:text-6xl text-gray-900 leading-tight">
                  {t.hero.title}
                </h1>
                
                <div className="space-y-2">
                  <h2 className="text-4xl font-bold text-red-600">
                    {t.hero.brand}
                  </h2>
                  <p className="pedizone-text text-xl text-gray-600 max-w-lg">
                    {t.hero.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="pedizone-button text-lg px-8 py-4">
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="text-lg px-8 py-4 border-red-600 text-red-600 hover:bg-red-50">
                  {t.hero.cta2}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img 
                  src={productSerum} 
                  alt="PediZone Serum" 
                  className="rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  fetchpriority="high"
                  loading="eager"
                />
                <img 
                  src={productFoam} 
                  alt="PediZone Köpük" 
                  className="rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8 md:mt-0"
                  loading="lazy"
                />
                <img 
                  src={productSerum2} 
                  alt="PediZone Bakım Serumu" 
                  className="rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 col-span-2 md:col-span-1 mt-4 md:mt-8"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="pedizone-section bg-white">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.products.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600 max-w-3xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.products.items.map((product, index) => (
              <Card key={index} className="pedizone-card relative overflow-hidden">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                    {product.badge}
                  </Badge>
                )}
                
                <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <CardContent className="p-0">
                  <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="pedizone-text text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full pedizone-button"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Detayları İncele
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="pedizone-section bg-white">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.solutions.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600 max-w-3xl mx-auto">
              {t.solutions.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {t.solutions.items.map((solution, index) => (
              <Card key={index} className="pedizone-card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-48 md:h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="pedizone-text text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pedizone-section bg-gray-50">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.items.map((item, index) => (
              <Card key={index} className="pedizone-card text-center">
                <CardContent className="p-8">
                  <h3 className="pedizone-heading text-xl text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="pedizone-text text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="pedizone-section bg-white">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.blog.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600 max-w-3xl mx-auto">
              {t.blog.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.blog.items.map((post, index) => (
              <Card key={index} className="pedizone-card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-red-600 font-medium">{post.readTime}</span>
                  </div>
                  
                  <h3 className="pedizone-heading text-lg text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="pedizone-text text-gray-600 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    Devamını Oku →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pedizone-section bg-gray-50">
        <div className="pedizone-container">
          <div className="text-center mb-16">
            <h2 className="pedizone-heading text-4xl text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="pedizone-text text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="pedizone-heading text-lg text-gray-900 mb-2">Adres</h3>
                    <p className="pedizone-text text-gray-600">{t.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="pedizone-heading text-lg text-gray-900 mb-2">Telefon</h3>
                    <p className="pedizone-text text-gray-600">{t.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="pedizone-heading text-lg text-gray-900 mb-2">E-posta</h3>
                    <p className="pedizone-text text-gray-600">{t.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="pedizone-card">
              <CardContent className="p-8">
                <h3 className="pedizone-heading text-xl text-gray-900 mb-6">
                  {t.contact.form.title}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder={t.contact.form.messagePlaceholder}
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full pedizone-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : t.contact.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pedizone-gradient text-white py-12">
        <div className="pedizone-container">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold">Pedizone®</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#products" className="text-red-200 hover:text-white transition-colors">Ürünler</a>
              <a href="#solutions" className="text-red-200 hover:text-white transition-colors">Çözümler</a>
              <a href="#about" className="text-red-200 hover:text-white transition-colors">Hakkımızda</a>
              <a href="#contact" className="text-red-200 hover:text-white transition-colors">İletişim</a>
            </div>
            
            <div className="border-t border-red-400/30 pt-6">
              <p className="text-red-200 text-sm">
                © 2024 PediZone®. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

