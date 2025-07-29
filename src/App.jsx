import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Phone, Mail, MapPin, Star, Award, Shield, Users, Menu, X } from 'lucide-react'
import './App.css'

// Ürün görselleri - Optimize edilmiş WebP formatları
import productSerum from './assets/IMG_7570_optimized.webp'
import productFoam from './assets/pedizone_foam.png'
import productSerum2 from './assets/IMG_7572_optimized.webp'
import productSerum3 from './assets/IMG_7574_optimized.webp'
import productSerum4 from './assets/IMG_7575_optimized.webp'
import productBox1 from './assets/IMG_8135.jpeg'
import productBox2 from './assets/IMG_8137.jpeg'

// Ayak sorunları görselleri
import footFungus from './assets/foot-fungus-problem.jpg'
import footCallus from './assets/foot-callus-problem.jpg'
import footCrack from './assets/foot-crack-problem.jpg'
import footOdor from './assets/foot-odor-problem.jpg'

// Logo
import pedizoneLogo from './assets/pedizone-logo.png'

// Blog görselleri
import blogAyakMantari from './assets/ayak-mantari-tedavi.webp'
import blogTirnakMantari from './assets/tirnak-mantari-cesitleri.jpg'
import blogSerumKullanimi from './assets/pedizone-serum-kullanimi.jpg'

function App() {
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
    
    try {
      // Create mailto link
      const subject = encodeURIComponent('PediZone İletişim Formu')
      const body = encodeURIComponent(`
Ad Soyad: ${formData.name}
E-posta: ${formData.email}

Mesaj:
${formData.message}
      `)
      
      const mailtoLink = `mailto:info@pedizone.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      alert('E-posta uygulamanız açılacak. Mesajınızı gönderebilirsiniz.')
    } catch (error) {
      alert('Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const content = {
    tr: {
      nav: {
        home: 'Ana Sayfa',
        products: 'Ürünler',
        about: 'Hakkımızda',
        solutions: 'Çözümler',
        contact: 'İletişim'
      },
      hero: {
        title: 'Profesyonel Ayak Bakım Çözümleri',
        subtitle: 'Pedizone®',
        description: 'Podologların önerileri ve beklentilerine yönelik hazırlanan etkili ayak bakım ürünleri',
        cta: 'Ürünleri Keşfedin',
        ctaSecondary: 'Uzman Desteği'
      },
      products: {
        title: 'Ürün Portföyümüz',
        subtitle: 'Her ayak sorunu için özel olarak geliştirilmiş çözümler',
        items: [
          {
            name: 'PediZone® Mantar Karşıtı Serum',
            description: 'Ayak ve tırnak mantarı için özel formül',
            features: ['Hızlı etki', 'Doğal içerik', 'Günlük kullanım', 'Podolog onaylı'],
            image: productSerum,
            badge: 'En Popüler'
          },
          {
            name: 'PediZone® Temizleme Köpüğü',
            description: 'Derinlemesine temizlik ve koruma',
            features: ['Antibakteriyel', 'Koku giderici', 'Yumuşak formül', 'Günlük bakım'],
            image: productFoam,
            badge: 'Yeni'
          },
          {
            name: 'PediZone® Bakım Serumu',
            description: 'Genel ayak bakımı ve nemlendirme',
            features: ['Nemlendirici', 'Onarıcı', 'Koruyucu', 'Tüm cilt tipleri'],
            image: productSerum2,
            badge: 'Önerilen'
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
            image: footFungus,
            solutions: ['Antifungal serum', 'Temizleme köpüğü', 'Koruyucu bakım']
          },
          {
            title: 'Nasır ve Kalınlaşma',
            description: 'Sert deri tabakalarını yumuşatan özel formüller',
            image: footCallus,
            solutions: ['Yumuşatıcı krem', 'Peeling serum', 'Nemlendirici']
          },
          {
            title: 'Çatlak ve Kuruluk',
            description: 'Kuru ve çatlak ayaklar için onarıcı bakım',
            image: footCrack,
            solutions: ['Onarıcı krem', 'Yoğun nemlendirici', 'Gece bakımı']
          },
          {
            title: 'Koku ve Terleme',
            description: 'Aşırı terleme ve koku problemleri için çözümler',
            image: footOdor,
            solutions: ['Deodorant serum', 'Antibakteriyel köpük', 'Terleme önleyici']
          }
        ]
      },
      about: {
        title: 'Neden PediZone®?',
        subtitle: 'Ayak sağlığında güvenilir çözüm ortağınız',
        features: [
          {
            icon: Award,
            title: 'Podolog Onaylı',
            description: 'Tüm ürünlerimiz ayak sağlığı uzmanları tarafından test edilmiş ve onaylanmıştır.'
          },
          {
            icon: Shield,
            title: 'Klinik Testli',
            description: 'Laboratuvar ortamında yapılan testlerle etkinliği kanıtlanmış formüller.'
          },
          {
            icon: Star,
            title: 'Doğal İçerikler',
            description: 'Doğal ve güvenli aktif bileşenlerle hazırlanmış, yan etki riski minimum.'
          },
          {
            icon: Users,
            title: 'Uzman Desteği',
            description: '7/24 uzman ekibimizden destek alabilir, sorularınızı yanıtlayabilirsiniz.'
          }
        ]
      },
      blog: {
        title: 'PediZone Blog',
        subtitle: 'Ayak sağlığı rehberi ve uzman tavsiyeleri',
        posts: [
          {
            id: 'ayak-mantari-nedir',
            title: 'Ayak Mantarı Nedir, Neden Olur?',
            excerpt: 'Ayak mantarı, özellikle ayak parmak aralarında oluşan ve kaşıntı, kızarıklık, kötü koku gibi belirtilerle kendini gösteren bulaşıcı bir cilt enfeksiyonudur.',
            image: blogAyakMantari,
            readTime: '5 dakika',
            tags: ['ayak mantarı', 'ayak sağlığı', 'podoloji', 'tedavi']
          },
          {
            id: 'tirnak-mantari-cesitleri',
            title: 'Tırnak Mantarı Çeşitleri Nelerdir?',
            excerpt: 'Tırnak mantarı, hem estetik görünümü bozan hem de ciddi rahatsızlıklara yol açabilen yaygın bir enfeksiyondur. Onikomikoz olarak bilinen bu hastalığın farklı çeşitleri bulunmaktadır.',
            image: blogTirnakMantari,
            readTime: '6 dakika',
            tags: ['tırnak mantarı', 'onikomikoz', 'tırnak hastalıkları', 'podoloji']
          },
          {
            id: 'serum-kullanim-onemi',
            title: 'Mantar İçin Serum Kullanmanın Önemi',
            excerpt: 'Mantar enfeksiyonlarında doğru ürünle yapılan topikal tedavi, iyileşme sürecini doğrudan etkiler. PediZone 50 Ml Serum ile serum formundaki ürünlerin avantajlarını keşfedin.',
            image: blogSerumKullanimi,
            readTime: '7 dakika',
            tags: ['mantar serumu', 'PediZone', 'topikal tedavi', 'ayak bakımı']
          }
        ]
      },
      contact: {
        title: 'İletişime Geçin',
        subtitle: 'Sorularınız için buradayız',
        info: {
          address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
          phone: '05068860326',
          email: 'info@pedizone.com',
          instagram: '@pediz0ne'
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'About',
        solutions: 'Solutions',
        contact: 'Contact'
      },
      hero: {
        title: 'Professional Foot Care Solutions',
        subtitle: 'Pedizone®',
        description: 'Effective foot care products prepared according to podologists\' recommendations and expectations',
        cta: 'Explore Products',
        ctaSecondary: 'Expert Support'
      },
      products: {
        title: 'Our Product Portfolio',
        subtitle: 'Specially developed solutions for every foot problem',
        items: [
          {
            name: 'PediZone® Antifungal Serum',
            description: 'Special formula for foot and nail fungus',
            features: ['Fast action', 'Natural content', 'Daily use', 'Podologist approved'],
            image: productSerum,
            badge: 'Most Popular'
          },
          {
            name: 'PediZone® Cleansing Foam',
            description: 'Deep cleansing and protection',
            features: ['Antibacterial', 'Odor eliminator', 'Gentle formula', 'Daily care'],
            image: productFoam,
            badge: 'New'
          },
          {
            name: 'PediZone® Care Serum',
            description: 'General foot care and moisturizing',
            features: ['Moisturizing', 'Repairing', 'Protective', 'All skin types'],
            image: productSerum2,
            badge: 'Recommended'
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
            image: footFungus,
            solutions: ['Antifungal serum', 'Cleansing foam', 'Protective care']
          },
          {
            title: 'Callus and Thickening',
            description: 'Special formulas that soften hard skin layers',
            image: footCallus,
            solutions: ['Softening cream', 'Peeling serum', 'Moisturizer']
          },
          {
            title: 'Cracks and Dryness',
            description: 'Restorative care for dry and cracked feet',
            image: footCrack,
            solutions: ['Repair cream', 'Intensive moisturizer', 'Night care']
          },
          {
            title: 'Odor and Sweating',
            description: 'Solutions for excessive sweating and odor problems',
            image: footOdor,
            solutions: ['Deodorant serum', 'Antibacterial foam', 'Sweat preventer']
          }
        ]
      },
      about: {
        title: 'Why PediZone®?',
        subtitle: 'Your trusted solution partner in foot health',
        features: [
          {
            icon: Award,
            title: 'Podologist Approved',
            description: 'All our products have been tested and approved by foot health specialists.'
          },
          {
            icon: Shield,
            title: 'Clinically Tested',
            description: 'Formulas with proven effectiveness through laboratory tests.'
          },
          {
            icon: Star,
            title: 'Natural Ingredients',
            description: 'Prepared with natural and safe active ingredients, minimum side effect risk.'
          },
          {
            icon: Users,
            title: 'Expert Support',
            description: 'You can get support from our expert team 7/24 and get your questions answered.'
          }
        ]
      },
      blog: {
        title: 'PediZone Blog',
        subtitle: 'Foot health guide and expert advice',
        posts: [
          {
            id: 'ayak-mantari-nedir',
            title: 'What is Foot Fungus and Why Does it Occur?',
            excerpt: 'Foot fungus is a contagious skin infection that occurs especially between the toes and manifests itself with symptoms such as itching, redness, and bad odor.',
            image: blogAyakMantari,
            readTime: '5 minutes',
            tags: ['foot fungus', 'foot health', 'podology', 'treatment']
          },
          {
            id: 'tirnak-mantari-cesitleri',
            title: 'What are the Types of Nail Fungus?',
            excerpt: 'Nail fungus is a common infection that both spoils the aesthetic appearance and can lead to serious discomfort. This disease, known as onychomycosis, has different types.',
            image: blogTirnakMantari,
            readTime: '6 minutes',
            tags: ['nail fungus', 'onychomycosis', 'nail diseases', 'podology']
          },
          {
            id: 'serum-kullanim-onemi',
            title: 'The Importance of Using Serum for Fungus',
            excerpt: 'Topical treatment with the right product in fungal infections directly affects the healing process. Discover the advantages of serum-form products with PediZone 50 Ml Serum.',
            image: blogSerumKullanimi,
            readTime: '7 minutes',
            tags: ['fungus serum', 'PediZone', 'topical treatment', 'foot care']
          }
        ]
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'We are here for your questions',
        info: {
          address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
          phone: '05068860326',
          email: 'info@pedizone.com',
          instagram: '@pediz0ne'
        }
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        products: 'المنتجات',
        about: 'حولنا',
        solutions: 'الحلول',
        contact: 'اتصل بنا'
      },
      hero: {
        title: 'حلول احترافية لعناية القدم',
        subtitle: 'Pedizone®',
        description: 'منتجات عناية فعالة للقدم محضرة وفقاً لتوصيات وتوقعات أطباء الأقدام',
        cta: 'استكشف المنتجات',
        ctaSecondary: 'دعم الخبراء'
      },
      products: {
        title: 'محفظة منتجاتنا',
        subtitle: 'حلول مطورة خصيصاً لكل مشكلة في القدم',
        items: [
          {
            name: 'PediZone® مصل مضاد للفطريات',
            description: 'تركيبة خاصة لفطريات القدم والأظافر',
            features: ['فعالية سريعة', 'محتوى طبيعي', 'استخدام يومي', 'معتمد من أطباء الأقدام'],
            image: productSerum,
            badge: 'الأكثر شعبية'
          },
          {
            name: 'PediZone® رغوة التنظيف',
            description: 'تنظيف عميق وحماية',
            features: ['مضاد للبكتيريا', 'مزيل الرائحة', 'تركيبة لطيفة', 'عناية يومية'],
            image: productFoam,
            badge: 'جديد'
          },
          {
            name: 'PediZone® مصل العناية',
            description: 'عناية عامة للقدم وترطيب',
            features: ['مرطب', 'مصلح', 'واقي', 'جميع أنواع البشرة'],
            image: productSerum2,
            badge: 'موصى به'
          }
        ]
      },
      solutions: {
        title: 'حلول لمشاكل القدم',
        subtitle: 'نهج علاجية مستهدفة مطورة مع فريق الخبراء لدينا',
        items: [
          {
            title: 'العدوى الفطرية',
            description: 'حلول علاجية فعالة لفطريات القدم والأظافر',
            image: footFungus,
            solutions: ['مصل مضاد للفطريات', 'رغوة التنظيف', 'عناية واقية']
          },
          {
            title: 'الكالو والسماكة',
            description: 'تركيبات خاصة تنعم طبقات الجلد الصلبة',
            image: footCallus,
            solutions: ['كريم منعم', 'مصل التقشير', 'مرطب']
          },
          {
            title: 'التشققات والجفاف',
            description: 'عناية ترميمية للأقدام الجافة والمتشققة',
            image: footCrack,
            solutions: ['كريم الإصلاح', 'مرطب مكثف', 'عناية ليلية']
          },
          {
            title: 'الرائحة والتعرق',
            description: 'حلول للتعرق المفرط ومشاكل الرائحة',
            image: footOdor,
            solutions: ['مصل مزيل العرق', 'رغوة مضادة للبكتيريا', 'مانع التعرق']
          }
        ]
      },
      about: {
        title: 'لماذا PediZone®؟',
        subtitle: 'شريكك الموثوق في صحة القدم',
        features: [
          {
            icon: Award,
            title: 'معتمد من أطباء الأقدام',
            description: 'جميع منتجاتنا تم اختبارها واعتمادها من قبل أخصائيي صحة القدم.'
          },
          {
            icon: Shield,
            title: 'مختبر سريرياً',
            description: 'تركيبات ذات فعالية مثبتة من خلال الاختبارات المعملية.'
          },
          {
            icon: Star,
            title: 'مكونات طبيعية',
            description: 'محضرة بمكونات فعالة طبيعية وآمنة، مخاطر آثار جانبية قليلة.'
          },
          {
            icon: Users,
            title: 'دعم الخبراء',
            description: 'يمكنك الحصول على الدعم من فريق الخبراء لدينا 7/24 والحصول على إجابات لأسئلتك.'
          }
        ]
      },
      blog: {
        title: 'مدونة PediZone',
        subtitle: 'دليل صحة القدم ونصائح الخبراء',
        posts: [
          {
            id: 'ayak-mantari-nedir',
            title: 'ما هو فطر القدم ولماذا يحدث؟',
            excerpt: 'فطر القدم هو عدوى جلدية معدية تحدث خاصة بين أصابع القدم وتظهر بأعراض مثل الحكة والاحمرار والرائحة الكريهة.',
            image: blogAyakMantari,
            readTime: '5 دقائق',
            tags: ['فطر القدم', 'صحة القدم', 'طب الأقدام', 'العلاج']
          },
          {
            id: 'tirnak-mantari-cesitleri',
            title: 'ما هي أنواع فطر الأظافر؟',
            excerpt: 'فطر الأظافر هو عدوى شائعة تفسد المظهر الجمالي ويمكن أن تؤدي إلى مضايقات خطيرة. هذا المرض المعروف باسم فطار الأظافر له أنواع مختلفة.',
            image: blogTirnakMantari,
            readTime: '6 دقائق',
            tags: ['فطر الأظافر', 'فطار الأظافر', 'أمراض الأظافر', 'طب الأقدام']
          },
          {
            id: 'serum-kullanim-onemi',
            title: 'أهمية استخدام المصل للفطريات',
            excerpt: 'العلاج الموضعي بالمنتج المناسب في العدوى الفطرية يؤثر مباشرة على عملية الشفاء. اكتشف مزايا المنتجات في شكل مصل مع PediZone 50 مل مصل.',
            image: blogSerumKullanimi,
            readTime: '7 دقائق',
            tags: ['مصل الفطريات', 'PediZone', 'العلاج الموضعي', 'عناية القدم']
          }
        ]
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'نحن هنا لأسئلتك',
        info: {
          address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
          phone: '05068860326',
          email: 'info@pedizone.com',
          instagram: '@pediz0ne'
        }
      }
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen bg-gray-50" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="pedizone-gradient shadow-xl sticky top-0 z-50">
        <div className="pedizone-container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={scrollToTop}
            >
              <span className="pedizone-logo text-3xl text-white relative">
                Pedizone<span className="relative text-red-200 text-lg ml-1">®</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.home}
              </a>
              <a href="#products" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.products}
              </a>
              <a href="#solutions" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.solutions}
              </a>
              <a href="#about" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-white hover:text-red-200 font-medium transition-colors">
                {t.nav.contact}
              </a>
            </nav>

            {/* Mobile Menu Button & Language Selector */}
            <div className="flex items-center space-x-2">
              {/* Language Selector - Desktop */}
              <div className="hidden md:flex items-center space-x-1">
                <Button
                  variant={currentLang === 'tr' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentLang('tr')}
                  className="text-white border-white/20 hover:bg-red-700"
                >
                  🇹🇷 TR
                </Button>
                <Button
                  variant={currentLang === 'en' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentLang('en')}
                  className="text-white border-white/20 hover:bg-red-700"
                >
                  🇺🇸 EN
                </Button>
                <Button
                  variant={currentLang === 'ar' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentLang('ar')}
                  className="text-white border-white/20 hover:bg-red-700"
                >
                  🇸🇦 AR
                </Button>
              </div>
              
              {/* Language Selector - Mobile (Compact) */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={() => setCurrentLang('tr')}
                  className={`w-10 h-8 rounded text-sm flex items-center justify-center transition-colors ${currentLang === 'tr' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}`}
                >
                  🇹🇷
                </button>
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`w-10 h-8 rounded text-sm flex items-center justify-center transition-colors ${currentLang === 'en' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}`}
                >
                  🇺🇸
                </button>
                <button
                  onClick={() => setCurrentLang('ar')}
                  className={`w-10 h-8 rounded text-sm flex items-center justify-center transition-colors ${currentLang === 'ar' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}`}
                >
                  🇸🇦
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:bg-red-700 p-3"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-red-700 border-t border-red-500">
              <nav className="py-4 space-y-2">
                <a 
                  href="#home" 
                  className="block px-4 py-2 text-white hover:bg-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.home}
                </a>
                <a 
                  href="#products" 
                  className="block px-4 py-2 text-white hover:bg-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.products}
                </a>
                <a 
                  href="#solutions" 
                  className="block px-4 py-2 text-white hover:bg-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.solutions}
                </a>
                <a 
                  href="#about" 
                  className="block px-4 py-2 text-white hover:bg-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.about}
                </a>
                <a 
                  href="#contact" 
                  className="block px-4 py-2 text-white hover:bg-red-600 transition-colors"
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
      <section id="home" className="pedizone-hero-bg pedizone-section hero-section">
        <div className="pedizone-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="pedizone-heading text-5xl lg:text-6xl text-gray-900">
                  {t.hero.title}
                </h1>
                <h2 className="pedizone-logo text-4xl text-red-600">
                  {t.hero.subtitle}
                </h2>
                <p className="pedizone-text text-xl text-gray-600 max-w-lg">
                  {t.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="pedizone-button text-lg">
                  {t.hero.cta}
                </Button>
                <Button variant="outline" className="pedizone-button-outline text-lg">
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
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
                  className="rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="pedizone-section bg-gray-50">
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
                  
                  <Button className="w-full pedizone-button">
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
                  <div className="md:w-1/3">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-48 md:h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="pedizone-text text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2">
                      {solution.solutions.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600">{item}</span>
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

          <div className="grid lg:grid-cols-2 gap-8">
            {t.about.features.map((feature, index) => (
              <Card key={index} className="pedizone-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  
                  <div>
                    <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="pedizone-text text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
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
            {t.blog.posts.map((post, index) => (
              <Card key={index} className="pedizone-card group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.readTime}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="pedizone-heading text-xl text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="pedizone-text text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full pedizone-button group-hover:bg-red-700 transition-colors"
                    onClick={() => window.open(`/blog/${post.id}.html`, '_blank')}
                  >
                    Devamını Oku →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pedizone-section bg-white">
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
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                  <p className="text-gray-600">{t.contact.info.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600">{t.contact.info.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                  <p className="text-gray-600">{t.contact.info.email}</p>
                </div>
              </div>
            </div>

            <Card className="pedizone-card">
              <h3 className="pedizone-heading text-xl text-gray-900 mb-6">
                Bize Ulaşın
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Adınızı girin"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="E-posta adresinizi girin"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Mesajınızı yazın"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full pedizone-button"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
              </form>
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
              <span className="pedizone-logo text-2xl">
                PediZone<span className="text-red-200">®</span>
              </span>
            </div>
            
            <p className="text-red-100 mb-6">
              Ayak sağlığınız için güvenilir çözüm ortağınız
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#home" className="text-red-200 hover:text-white transition-colors">Ana Sayfa</a>
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

export default App

