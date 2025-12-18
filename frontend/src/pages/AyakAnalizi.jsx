import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { enrichedBlogPosts } from '../blog_content';

const AyakAnalizi = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const totalQuestions = 6;

  // İlgili blog yazılarını filtrele
  const getRelatedBlogs = (mainProblem) => {
    const blogKeywords = {
      'koku': ['Ayak Kokusu', 'Mantar'],
      'mantar': ['Tırnak Mantarı', 'Mantar', 'Ayak Kokusu'],
      'tirnak': ['Tırnak Batması', 'Batık Tırnak'],
      'nasir': ['Nasır', 'Topuk', 'Çatlak'],
      'sigil': ['Siğil', 'Nasır'],
      'bakim': ['Ayak Sağlığı', 'Podoloji']
    };

    const keywords = blogKeywords[mainProblem] || ['Ayak Sağlığı'];
    
    return enrichedBlogPosts
      .filter(blog => 
        keywords.some(keyword => 
          blog.title.includes(keyword) || blog.tags.some(tag => tag.includes(keyword))
        )
      )
      .slice(0, 3);
  };

  // Yeni Sonuç Algoritması (Manus.ai'den)
  const getPodologicalRecommendation = () => {
    const mainProblem = answers.q0;
    const sweating = answers.q1;
    const skinCondition = answers.q2;
    const shoeChoice = answers.q3;
    const history = answers.q4;
    const careTime = answers.q5;

    let result = {
      title: "Genel Ayak Sağlığı Değerlendirmesi",
      icon: "✨",
      podologicalAssessment: "Ayak sağlığınız genel anlamda iyi durumda görünmektedir. Mevcut sağlık düzeyinizi korumak ve ileriye dönük olası problemleri önlemek adına, koruyucu bakım rutinine odaklanmanız önerilmektedir. Düzenli hijyen, uygun ayakkabı seçimi ve periyodik profesyonel kontroller ile ayak sağlığınızı en üst seviyede tutabilirsiniz.",
      attentionPoints: [
        "Ayak hijyeninize özen göstermeye devam edin.",
        "Ayakkabı seçiminize dikkat edin, ayaklarınızı sıkmayan modeller tercih edin.",
        "Düzenli nemlendirme ile cilt bariyerinizi koruyun."
      ],
      productMention: "Pedizone Ayak Sağlığı Ürünleri bu yolda en büyük destekçiniz olacak.",
      relatedBlogs: getRelatedBlogs('bakim')
    };

    // --- Koku ve Mantar Senaryosu ---
    if (mainProblem === 'koku' || mainProblem === 'mantar' || skinCondition === 'kizarik' || skinCondition === 'pul' || history === 'sik' || history === 'nadiren') {
      result.title = "Tırnak ve Ayak Mantarı Sorunu Yaşıyorsunuz!";
      result.icon = "🚨";
      result.podologicalAssessment = "Medikal Ayak Bakımı'na ihtiyacınız bulunmaktadır. Podologlarımız, mantarlı bölgelerin hijyenik koşullarda temizlenmesi ve size özel olarak belirlenecek serum ve bakım protokollerinin detaylıca anlatılmasını sağlayacaktır. Tedavi süreci boyunca düzenli takip ile iyileşmenizin izlenmesi önerilmektedir.";
      result.attentionPoints = [
        "Ayaklarınızı her gün yıkayın ve parmak aralarını mutlaka kurulayın.",
        "Çoraplarınızı günlük değiştirin ve pamuklu/nefes alan malzemeleri tercih edin.",
        "Ayakkabılarınızı havalandırın ve mümkünse dezenfektan spreyler kullanın.",
        "Halka açık alanlarda (havuz, spor salonu) terlik kullanmaya özen gösterin."
      ];
      result.relatedBlogs = getRelatedBlogs('mantar');
    }

    // --- Tırnak Batması Senaryosu ---
    if (mainProblem === 'tirnak' || skinCondition === 'iltihap') {
      result.title = "Tırnak Batması Sorunu!";
      result.icon = "💅";
      result.podologicalAssessment = "Podolojik müdahale kapsamında Ortoniksi sistemlerinin (tırnak teli uygulaması) değerlendirilmesi gerekmektedir. Bu minimal invaziv yöntem ile tırnak yatağı düzeltilerek batık tırnak sorununuz kalıcı olarak çözüme kavuşturulur. Uzman podologlarımız tarafından tırnak çevresi hijyenik temizliği gerçekleştirilecek ve doğru tırnak kesim teknikleri hakkında detaylı eğitim verilecektir.";
      result.attentionPoints = [
        "Tırnaklarınızı düz kesin, köşeleri yuvarlamaktan kaçının.",
        "Dar ve sivri burunlu ayakkabılar giymekten kaçının.",
        "Batık bölgeyi zorlamayın ve iltihap varsa hemen bir uzmana başvurun."
      ];
      result.relatedBlogs = getRelatedBlogs('tirnak');
    }

    // --- Nasır ve Çatlaklar Senaryosu ---
    if (mainProblem === 'nasir' || skinCondition === 'catlak') {
      result.title = "Nasır ve Çatlak Sorunu!";
      result.icon = "🩹";
      result.podologicalAssessment = "Medikal Ayak Bakımı ve profesyonel küretaj (nasır temizliği) uygulaması ile hiperkeratoz bölgelerin (sertleşmiş deri) ve çatlakların steril koşullarda temizlenmesi gerekmektedir. Tedavi protokolünüz, düzenli nemlendirme programı ve baskı noktalarını azaltıcı özel silikon destekler ile desteklenecektir. Podologlarımız, sizin için kişiselleştirilmiş bir ayak bakım rutini oluşturacaktır.";
      result.attentionPoints = [
        "Ayaklarınızı her gün nemlendirin, özellikle üre içeren kremler kullanın.",
        "Sertleşen deriyi banyoda ıslak törpü yapmaktan kaçının. En doğrusu kuru törpü yapmaktır. Podologunuzun önerdiği şekilde kuru törpüyü haftada 1 kez nazikçe uygulayın.",
        "Uzun süre ayakta kalmaktan kaçının ve rahat ayakkabılar tercih edin."
      ];
      result.relatedBlogs = getRelatedBlogs('nasir');
    }

    // --- Plantar Siğil Senaryosu ---
    if (mainProblem === 'sigil') {
      result.title = "Plantar Siğil Riski!";
      result.icon = "🦠";
      result.podologicalAssessment = "Plantar siğil tedavisi için kliniğimizde uygulanan özel podolojik yöntemler (kriyoterapi ile dondurma tedavisi, kimyasal peeling veya profesyonel küretaj) değerlendirilecektir. Viral lezyonun yayılmasını önlemek ve kalıcı çözüm sağlamak adına erken müdahale kritik önem taşımaktadır. Uzman podologlarımız, lezyonun derinliği ve yaygınlığına göre size en uygun tedavi protokolünü belirleyecektir.";
      result.attentionPoints = [
        "Siğile dokunmaktan ve kaşımaktan kaçının.",
        "Siğil olan bölgeyi kapatın ve başkalarıyla temasını engelleyin.",
        "Halka açık ıslak zeminlerde (havuz, duş) terlik kullanın."
      ];
      result.relatedBlogs = getRelatedBlogs('sigil');
    }

    // --- Genel Bakım Senaryosu ---
    if (mainProblem === 'bakim' && skinCondition === 'saglikli' && history === 'hic_yasamadim') {
      result.title = "Ayak Sağlığınız Mükemmel!";
      result.icon = "✅";
      result.podologicalAssessment = "Ayak sağlığınızın mevcut optimal durumunu korumak adına, düzenli aralıklarla koruyucu ve önleyici medikal ayak bakımı seansları önerilmektedir. Periyodik podolojik kontroller, potansiyel problemlerin erken teşhis edilmesini ve müdahale gerektirmeden önlenmesini sağlayacaktır. Uzman podologlarımız, ayak sağlığınızı uzun vadede korumanız için size özel bakım programı oluşturacaktır.";
      result.attentionPoints = [
        "Ayak hijyeninize devam edin.",
        "Ayakkabılarınızı düzenli olarak havalandırın.",
        "Yılda en az bir kez podolojik kontrolden geçin."
      ];
      result.relatedBlogs = getRelatedBlogs('bakim');
    }

    // Bakım Süresi vurgusu
    if (careTime === 'gelebilirim') {
      result.podologicalAssessment += " 'Kendim Yapamam' tercihini belirtmeniz, profesyonel podolojik destek almanın sizin için en ideal çözüm yolu olacağını göstermektedir. Uzman ekibimiz, düzenli bakım seansları ile ayak sağlığınızı takip edecek ve gerekli tüm müdahaleleri gerçekleştirecektir.";
    }

    // Terleme uyarısı
    if (sweating === 'cok' && mainProblem !== 'koku' && mainProblem !== 'mantar') {
      result.attentionPoints.push("Yoğun terleme, mantar ve koku riskini artırır. Ayaklarınızı kuru tutmaya özen gösterin.");
    }

    return result;
  };

  // Sorular (Manus.ai'den)
  const questions = [
    {
      number: 1,
      text: "Ayaklarınızda en belirgin sorun nedir?",
      subtitle: "(Lütfen en çok sizi rahatsız edeni seçin)",
      options: [
        { value: "koku", label: "Koku (Bromodoz)" },
        { value: "mantar", label: "Mantar enfeksiyonu (Tinea Pedis)" },
        { value: "tirnak", label: "Tırnak batması" },
        { value: "nasir", label: "Nasır ve çatlamalar" },
        { value: "sigil", label: "Plantar Siğil" },
        { value: "bakim", label: "Genel bakım ve hijyen" }
      ]
    },
    {
      number: 2,
      text: "Ayaklarınız ne kadar terleme eğilimi gösteriyor?",
      options: [
        { value: "cok", label: "Çok fazla (Ayakkabılar ıslak kalıyor)" },
        { value: "orta", label: "Orta düzeyde (Normal)" },
        { value: "az", label: "Az (Kuru ayaklar)" }
      ]
    },
    {
      number: 3,
      text: "Ayak derisinin durumu nasıl?",
      options: [
        { value: "pul", label: "Pul pul dökülüyor (Ölü deri birikimi)" },
        { value: "kizarik", label: "Kızarık ve kaşıntılı" },
        { value: "catlak", label: "Çatlak ve sertleşmiş" },
        { value: "iltihap", label: "Batık tırnak kaynaklı iltihap var" },
        { value: "saglikli", label: "Sağlıklı görünüyor" }
      ]
    },
    {
      number: 4,
      text: "Ayakkabı seçimi ve giyim alışkanlıklarınız?",
      options: [
        { value: "kapali", label: "Kapalı ayakkabı giyiyorum (Spor ayakkabısı, bot vb.)" },
        { value: "acik", label: "Açık ayakkabı tercih ediyorum (Sandalet, terlik)" },
        { value: "topuklu", label: "İşim gereği topuklu ayakkabı giyiyorum" },
        { value: "degisken", label: "Değişken (Duruma göre değişiyor)" }
      ]
    },
    {
      number: 5,
      text: "Daha önce ayak mantarı veya koku sorunu yaşadınız mı?",
      options: [
        { value: "sik", label: "Evet, sık sık (Kronik sorun)" },
        { value: "nadiren", label: "Evet, ama nadiren" },
        { value: "ilk_kez", label: "Hayır, ilk kez" },
        { value: "hic_yasamadim", label: "Hiç yaşamadım" }
      ]
    },
    {
      number: 6,
      text: "Ayak bakımına ne kadar zaman ayırabilirsiniz?",
      options: [
        { value: "gunluk", label: "Günlük düzenli bakım (Her gün 5-10 dakika)" },
        { value: "haftalik", label: "Haftalık bakım (Haftada 1-2 kez)" },
        { value: "gelebilirim", label: "Kendim yapamam (Ayda 1 gelebilirim)" }
      ]
    }
  ];

  const handleOptionChange = (questionIndex, value) => {
    setAnswers(prev => ({
      ...prev,
      [`q${questionIndex}`]: value
    }));
  };

  const handleNext = () => {
    if (answers[`q${currentQuestion}`]) {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      alert('Lütfen bir seçenek seçiniz.');
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (answers[`q${currentQuestion}`]) {
      const result = getPodologicalRecommendation();
      setRecommendation(result);
      setShowResult(true);

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'quiz_completed', {
          'event_category': 'Ayak Analiz Aracı',
          'event_label': result.title,
          'value': 1
        });
      }
    } else {
      alert('Lütfen bir seçenek seçiniz.');
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setRecommendation(null);
    window.scrollTo(0, 0);
  };

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ayak Analizi - Medipodo | Kişiselleştirilmiş Değerlendirme</title>
        <meta name="description" content="Ayaklarınızı analiz edin ve size özel podolojik değerlendirme alın. 6 soruda ayak sağlığınızı keşfedin." />
        <link rel="canonical" href="https://medipodo.com/ayak-analizi" />
      </Helmet>

      <style>{`
        .ayak-analizi-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 80px 20px 40px;
        }

        .quiz-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 800px;
          width: 100%;
          padding: 40px;
        }

        .quiz-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .quiz-header h1 {
          color: #333;
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .quiz-header p {
          color: #666;
          font-size: 14px;
        }

        .progress-bar-container {
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 4px;
          margin-bottom: 30px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease-in-out;
        }

        .question-number {
          color: #667eea;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .question-text {
          font-size: 20px;
          color: #333;
          margin-bottom: 8px;
          font-weight: 600;
          line-height: 1.4;
        }

        .question-subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 25px;
        }

        .options-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
        }

        .option-wrapper {
          position: relative;
        }

        .option-input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .option-label {
          display: block;
          background-color: #f9f9f9;
          padding: 16px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #f9f9f9;
          font-size: 15px;
          color: #333;
        }

        .option-label:hover {
          background-color: #f0f4ff;
          border-color: #d0d8f0;
          transform: translateX(4px);
        }

        .option-input:checked + .option-label {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: #667eea;
          color: white;
          font-weight: 600;
          transform: translateX(8px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        .nav-button {
          padding: 14px 30px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          flex: 1;
        }

        .prev-button {
          background-color: #e0e0e0;
          color: #333;
        }

        .prev-button:hover:not(:disabled) {
          background-color: #d0d0d0;
          transform: translateY(-2px);
        }

        .prev-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .next-button, .submit-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .next-button:hover, .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        /* Result Styles */
        .result-container {
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .result-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .result-icon {
          font-size: 60px;
          margin-bottom: 15px;
          display: block;
        }

        .result-title {
          font-size: 26px;
          color: #667eea;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .result-section {
          margin-bottom: 30px;
          padding: 25px;
          background: #f8f9ff;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .result-section h3 {
          font-size: 18px;
          color: #333;
          font-weight: 700;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .result-section p {
          font-size: 15px;
          color: #555;
          line-height: 1.7;
        }

        .result-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0 0 0;
        }

        .result-section ul li {
          padding: 10px 0 10px 30px;
          position: relative;
          font-size: 15px;
          color: #555;
          line-height: 1.6;
        }

        .result-section ul li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 18px;
        }

        .product-mention {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          padding: 20px;
          border-left: none;
        }

        .product-mention p {
          color: white;
          font-size: 16px;
          margin: 0;
        }

        /* Blog Section - Professional Design */
        .blog-section {
          margin: 35px 0;
          padding: 30px;
          background: #f9fafb;
          border-radius: 12px;
        }

        .blog-section-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 20px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .blog-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .blog-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .blog-card-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          object-position: center;
        }

        .blog-card-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 48px;
        }

        .blog-card-excerpt {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 16px;
          flex: 1;
        }

        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 13px;
          color: #999;
          padding-top: 12px;
          border-top: 1px solid #f0f0f0;
        }

        .appointment-section {
          background: #fff5f0;
          border-left-color: #ff7a3d;
          text-align: center;
        }

        .contact-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 14px 40px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          margin-top: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .restart-button {
          width: 100%;
          background-color: #f0f0f0;
          color: #333;
          padding: 14px 30px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .restart-button:hover {
          background-color: #e0e0e0;
          transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .ayak-analizi-container {
            padding: 60px 15px 30px;
          }

          .quiz-card {
            padding: 25px 20px;
          }

          .quiz-header h1 {
            font-size: 22px;
          }

          .question-text {
            font-size: 18px;
          }

          .result-title {
            font-size: 22px;
          }

          .blog-cards {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .blog-card-image {
            height: 240px;
          }

          .blog-card-content {
            padding: 18px;
          }

          .blog-card-title {
            font-size: 16px;
          }

          .blog-card-excerpt {
            font-size: 14px;
          }

          .nav-button {
            padding: 12px 20px;
            font-size: 14px;
          }

          .result-section {
            padding: 20px;
          }
        }
      `}</style>

      <div className="ayak-analizi-container">
        <div className="quiz-card">
          {!showResult ? (
            <>
              <div className="quiz-header">
                <h1>🦶 Ayak Analiz Aracı</h1>
                <p>6 basit soruyla ayaklarınızı analiz edin ve podolojik değerlendirme alın</p>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>

              <div className="question-number">
                Soru {questions[currentQuestion].number} / {totalQuestions}
              </div>
              <div className="question-text">
                {questions[currentQuestion].text}
              </div>
              {questions[currentQuestion].subtitle && (
                <div className="question-subtitle">
                  {questions[currentQuestion].subtitle}
                </div>
              )}

              <div className="options-container">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="option-wrapper">
                    <input
                      type="radio"
                      id={`q${currentQuestion}_${index}`}
                      name={`q${currentQuestion}`}
                      value={option.value}
                      checked={answers[`q${currentQuestion}`] === option.value}
                      onChange={() => handleOptionChange(currentQuestion, option.value)}
                      className="option-input"
                    />
                    <label
                      htmlFor={`q${currentQuestion}_${index}`}
                      className="option-label"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>

              <div className="navigation-buttons">
                <button
                  className="nav-button prev-button"
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                >
                  ← Geri
                </button>
                
                {currentQuestion === totalQuestions - 1 ? (
                  <button
                    className="nav-button submit-button"
                    onClick={handleSubmit}
                  >
                    Sonuçları Gör
                  </button>
                ) : (
                  <button
                    className="nav-button next-button"
                    onClick={handleNext}
                  >
                    İleri →
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="result-container">
              <div className="result-header">
                <span className="result-icon">{recommendation.icon}</span>
                <h2 className="result-title">{recommendation.title}</h2>
              </div>

              <div className="result-section">
                <h3>📋 Podolojik Değerlendirme</h3>
                <p>{recommendation.podologicalAssessment}</p>
              </div>

              <div className="result-section">
                <h3>⚠️ Dikkat Etmeniz Gereken Hususlar</h3>
                <ul>
                  {recommendation.attentionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="result-section product-mention">
                <p><strong>{recommendation.productMention}</strong></p>
              </div>

              {/* İlgili Blog Yazıları - Profesyonel Tasarım */}
              {recommendation.relatedBlogs && recommendation.relatedBlogs.length > 0 && (
                <div className="blog-section">
                  <h3 className="blog-section-title">
                    📚 İlgili Blog Yazıları
                  </h3>
                  <div className="blog-cards">
                    {recommendation.relatedBlogs.map((blog, index) => (
                      <Link 
                        key={index} 
                        to={`/blog/${blog.slug}`}
                        className="blog-card"
                      >
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="blog-card-image"
                        />
                        <div className="blog-card-content">
                          <div className="blog-card-title">{blog.title}</div>
                          <div className="blog-card-excerpt">{blog.excerpt}</div>
                          <div className="blog-card-meta">
                            <span>📅 {blog.date}</span>
                            <span>⏱️ {blog.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="result-section appointment-section">
                <h3>📞 Randevu ve Bilgi</h3>
                <p>Uzman podologlarımızdan randevu almak veya daha detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
                <Link to="/iletisim" className="contact-button">
                  Randevu Alın
                </Link>
              </div>

              <button onClick={handleRestart} className="restart-button">
                🔄 Yeniden Analiz Yap
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AyakAnalizi;
