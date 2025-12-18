import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AyakAnalizi = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  // Toplam soru sayısı
  const totalQuestions = 6;

  // Yeni Sonuç Algoritması
  const getPodologicalRecommendation = () => {
    const mainProblem = answers.q0; // koku, mantar, tirnak, nasir, sigil, bakim
    const sweating = answers.q1;    // cok, orta, az
    const skinCondition = answers.q2; // pul, kizarik, catlak, iltihap, saglikli
    const shoeChoice = answers.q3;  // kapali, acik, topuklu, degisken
    const history = answers.q4;     // sik, nadiren, ilk_kez, hic_yasamadim
    const careTime = answers.q5;    // gunluk, haftalik, gelebilirim

    let result = {
      title: "Genel Ayak Sağlığı Değerlendirmesi",
      icon: "✨",
      podologicalAssessment: "Ayaklarınız genel olarak sağlıklı görünüyor. Koruyucu ve önleyici bakıma odaklanmalısınız.",
      attentionPoints: [
        "Ayak hijyeninize özen göstermeye devam edin.",
        "Ayakkabı seçiminize dikkat edin, ayaklarınızı sıkmayan modeller tercih edin.",
        "Düzenli nemlendirme ile cilt bariyerinizi koruyun."
      ],
      blogLink: "https://medipodo.com/blog/baglica-podolog-hizmetleri",
      blogTitle: "Başlıca Podolog Hizmetleri",
      productMention: "Pedizone Ayak Sağlıgı Ürünleri bu yolda en büyük destekçiniz olacak."
    };

    // --- Koku (Bromodoz) ve Mantar Enfeksiyonu (Tinea Pedis) Senaryosu ---
    if (mainProblem === 'koku' || mainProblem === 'mantar' || skinCondition === 'kizarik' || skinCondition === 'pul' || history === 'sik' || history === 'nadiren') {
      result.title = "Tırnak ve Ayak Mantarı Sorunu Yaşıyorsunuz!";
      result.icon = "🚨";
      result.podologicalAssessment = "Medikal Ayak Bakımına ihtiyacınız var. Podologumuz tarafından mantarlı bölgelerin temizlenmesi ve uygulamanız gereken serum vb. yöntemlerin size tarif edilmesi gerekir.";
      result.attentionPoints = [
        "Ayaklarınızı her gün yıkayın ve parmak aralarını mutlaka kurulayın.",
        "Çoraplarınızı günlük değiştirin ve pamuklu/nefes alan malzemeleri tercih edin.",
        "Ayakkabılarınızı havalandırın ve mümkünse dezenfektan spreyler kullanın.",
        "Halka açık alanlarda (havuz, spor salonu) terlik kullanmaya özen gösterin."
      ];
      result.blogLink = "https://medipodo.com/blog/ayak-analizi"; // Genel blog linki
      result.blogTitle = "Ayak Analizi";
    }

    // --- Tırnak Batması Senaryosu ---
    if (mainProblem === 'tirnak' || skinCondition === 'iltihap') {
      result.title = "Tırnak Batması Sorunu!";
      result.icon = "💅";
      result.podologicalAssessment = "Ortoniksi sistemlerinin (tel uygulaması) uygulanması gerekebilir. Bu yöntemle tırnak yatağı düzeltilerek batık sorunu kalıcı olarak çözülür. Ayrıca, tırnak çevresi temizliği ve doğru tırnak kesimi konusunda eğitim almanız önemlidir.";
      result.attentionPoints = [
        "Tırnaklarınızı düz kesin, köşeleri yuvarlamaktan kaçının.",
        "Dar ve sivri burunlu ayakkabılar giymekten kaçının.",
        "Batık bölgeyi zorlamayın ve iltihap varsa hemen bir uzmana başvurun."
      ];
      result.blogLink = "https://medipodo.com/blog/tirnakbatmasi";
      result.blogTitle = "Tırnak Batması";
    }

    // --- Nasır ve Çatlaklar Senaryosu ---
    if (mainProblem === 'nasir' || skinCondition === 'catlak') {
      result.title = "Nasır ve Çatlak Sorunu!";
      result.icon = "🩹";
      result.podologicalAssessment = "Medikal ayak bakımı ve küretaj (nasır temizliği) ile sertleşmiş ve çatlamış bölgelerin profesyonelce temizlenmesi gerekir. Düzenli nemlendirme ve baskıyı azaltıcı uygulamalar (silikon destekler) önemlidir.";
      result.attentionPoints = [
        "Ayaklarınızı her gün nemlendirin, özellikle üre içeren kremler kullanın.",
        "Sertleşmiş deriyi törpülemekten kaçının, bu daha fazla sertleşmeye neden olabilir.",
        "Uzun süre ayakta kalmaktan kaçının ve rahat ayakkabılar tercih edin."
      ];
      result.blogLink = "https://medipodo.com/blog/kis-aylarinda-catlak-topuk-tedavisi";
      result.blogTitle = "Kış Aylarında Çatlak Topuk Tedavisi";
    }

    // --- Plantar Siğil Senaryosu ---
    if (mainProblem === 'sigil') {
      result.title = "Plantar Siğil Riski!";
      result.icon = "🦠";
      result.podologicalAssessment = "Siğil tedavisi için özel podolojik yöntemler (kriyoterapi, kimyasal peeling veya küretaj) uygulanması gerekebilir. Siğilin yayılmasını önlemek için acil müdahale önemlidir.";
      result.attentionPoints = [
        "Siğile dokunmaktan ve kaşımaktan kaçının.",
        "Siğil olan bölgeyi kapatın ve başkalarıyla temasını engelleyin.",
        "Halka açık ıslak zeminlerde (havuz, duş) terlik kullanın."
      ];
      result.blogLink = "https://medipodo.com/blog/nasir-sigil-farklari"; // Varsayılan siğil blogu
      result.blogTitle = "Nasır ve Siğil";
    }

    // --- Genel Bakım ve Hijyen Senaryosu (Varsayılanı günceller) ---
    if (mainProblem === 'bakim' && skinCondition === 'saglikli' && history === 'hic_yasamadim') {
      result.title = "Ayak Sağlığınız Mükemmel!";
      result.icon = "✅";
      result.podologicalAssessment = "Ayaklarınızın sağlığını korumak için düzenli olarak koruyucu medikal ayak bakımı yaptırmanız önerilir. Bu, olası sorunları erken aşamada tespit etmemizi sağlar.";
      result.attentionPoints = [
        "Ayak hijyeninize devam edin.",
        "Ayakkabılarınızı düzenli olarak havalandırın.",
        "Yılda en az bir kez podolojik kontrolden geçin."
      ];
      result.blogLink = "https://medipodo.com/blog/baglica-podolog-hizmetleri";
      result.blogTitle = "Başlıca Podolog Hizmetleri";
    }

    // Bakım Süresi "Kendim Yapamam" ise randevu vurgusu
    if (careTime === 'gelebilirim') {
      result.podologicalAssessment += " **Özellikle 'Kendim Yapamam' seçeneğini işaretlemeniz, profesyonel podolojik desteğin sizin için en uygun çözüm olduğunu göstermektedir.**";
    }

    // Terleme yoğunsa koku/mantar uyarısı ekle
    if (sweating === 'cok' && mainProblem !== 'koku' && mainProblem !== 'mantar') {
      result.attentionPoints.push("Yoğun terleme, mantar ve koku riskini artırır. Ayaklarınızı kuru tutmaya özen gösterin.");
    }

    return result;
  };

  // Sorular
  const questions = [
    {
      number: 1,
      text: "Ayaklarınızda en belirgin sorun nedir? (Lütfen en çok sizi rahatsız edeni seçin)",
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
        { value: "hic_yasamadim", label: "Hiç Yaşamadım" }
      ]
    },
    {
      number: 6,
      text: "Ayak bakımına ne kadar zaman ayırabilirsiniz?",
      options: [
        { value: "gunluk", label: "Günlük düzenli bakım (Her gün 5-10 dakika)" },
        { value: "haftalik", label: "Haftalık bakım (Haftada 1-2 kez)" },
        { value: "gelebilirim", label: "Kendim Yapamam (Ayda 1 Gelebilirim)" }
      ]
    }
  ];

  // Akıllı öneri algoritması
  const getRecommendation = () => {
    return getPodologicalRecommendation();
  };

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
      const result = getRecommendation();
      setRecommendation(result);
      setShowResult(true);

      // Google Analytics tracking (Mevcut koddan korundu)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'quiz_completed_revised', {
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

  // Blog Kartı Bileşeni
  const BlogCard = ({ link, title }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="blog-card-link">
      <div className="blog-card">
        <p className="blog-card-title">İlgili Blog Yazısı: {title}</p>
        <span className="blog-card-read-more">Hemen Oku &rarr;</span>
      </div>
    </a>
  );

  // Sonuç Kartı Bileşeni
  const ResultCard = ({ result }) => (
    <div className="result-card">
      <div className="result-header">
        <span className="result-icon">{result.icon}</span>
        <h2>{result.title}</h2>
      </div>

      <div className="result-section">
        <h3>Podolojik Açıdan Değerlendirme</h3>
        <p>{result.podologicalAssessment}</p>
      </div>

      <div className="result-section">
        <h3>Dikkat Etmeniz Gereken Acil Hususlar</h3>
        <ul>
          {result.attentionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="result-section product-mention">
        <p><strong>{result.productMention}</strong></p>
      </div>

      <BlogCard link={result.blogLink} title={result.blogTitle} />

      <div className="result-section appointment-info">
        <h3>Randevu ve Bilgi</h3>
        <p>Uzman podologlarımızdan randevu almak veya daha detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
        <a href="/contact" className="contact-button">Randevu Alın</a>
      </div>

      <button onClick={handleRestart} className="restart-button">
        Yeniden Analiz Yap
      </button>
    </div>
  );

  // Mevcut JSX yapısının geri kalanı (stil ve genel yapı)
  return (
    <>
      <Helmet>
        <title>Ayak Analizi - Medipodo</title>
        <meta name="description" content="Ayaklarınızı analiz edin ve size özel podolojik değerlendirme alın." />
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
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          max-width: 700px;
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
        }

        .progress-bar-container {
          height: 8px;
          background-color: #eee;
          border-radius: 4px;
          margin-bottom: 30px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background-color: #667eea;
          transition: width 0.3s ease-in-out;
        }

        .question-text {
          font-size: 20px;
          color: #333;
          margin-bottom: 25px;
          font-weight: 600;
        }

        .options-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .option-label {
          display: block;
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          border: 2px solid #f9f9f9;
        }

        .option-label:hover {
          background-color: #f0f0f0;
        }

        .option-input:checked + .option-label {
          background-color: #e6e9ff;
          border-color: #667eea;
          font-weight: 600;
          color: #333;
        }

        .option-input {
          display: none;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .nav-button {
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.2s;
        }

        .prev-button {
          background-color: #ccc;
          color: #333;
        }

        .prev-button:hover {
          background-color: #bbb;
        }

        .next-button, .submit-button {
          background-color: #667eea;
          color: white;
        }

        .next-button:hover, .submit-button:hover {
          background-color: #556cd6;
        }

        .submit-button {
          width: 100%;
        }

        /* Result Card Styles */
        .result-card {
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #fff;
        }

        .result-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .result-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 10px;
        }

        .result-header h2 {
          color: #667eea;
          font-size: 24px;
        }

        .result-section {
          margin-bottom: 25px;
          padding: 15px;
          border-left: 4px solid #667eea;
          background-color: #f9f9ff;
        }

        .result-section h3 {
          color: #333;
          margin-top: 0;
          font-size: 18px;
          border-bottom: 1px solid #eee;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }

        .result-section ul {
          list-style-type: disc;
          padding-left: 20px;
          margin: 0;
        }

        .result-section li {
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .product-mention {
          text-align: center;
          background-color: #e6ffe6;
          border-left-color: #4CAF50;
          font-size: 16px;
        }

        .blog-card-link {
          text-decoration: none;
          display: block;
          margin-bottom: 25px;
        }

        .blog-card {
          background-color: #fff3cd;
          border: 1px solid #ffeeba;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          transition: background-color 0.2s;
        }

        .blog-card:hover {
          background-color: #ffeeba;
        }

        .blog-card-title {
          color: #856404;
          font-weight: 600;
          margin: 0;
        }

        .blog-card-read-more {
          color: #856404;
          font-size: 14px;
          display: block;
          margin-top: 5px;
        }

        .appointment-info {
          text-align: center;
          background-color: #f0f8ff;
          border-left-color: #007bff;
        }

        .contact-button {
          display: inline-block;
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          margin-top: 10px;
          font-weight: 600;
          transition: background-color 0.2s;
        }

        .contact-button:hover {
          background-color: #0056b3;
        }

        .restart-button {
          background-color: #dc3545;
          color: white;
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.2s;
          margin-top: 20px;
          width: 100%;
        }

        .restart-button:hover {
          background-color: #c82333;
        }

        @media (max-width: 768px) {
          .quiz-card {
            padding: 20px;
          }
          .quiz-header h1 {
            font-size: 24px;
          }
          .question-text {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="ayak-analizi-container">
        <div className="quiz-card">
          {!showResult ? (
            <>
              <div className="quiz-header">
                <h1>Ayak Analizi</h1>
                <p>Ayak sağlığınız hakkında size özel podolojik değerlendirme alın.</p>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>

              <div className="question-content">
                <p className="question-text">
                  {questions[currentQuestion].number} / {totalQuestions} - {questions[currentQuestion].text}
                </p>
                <div className="options-container">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value}>
                      <input
                        type="radio"
                        id={`q${currentQuestion}-${option.value}`}
                        name={`q${currentQuestion}`}
                        value={option.value}
                        checked={answers[`q${currentQuestion}`] === option.value}
                        onChange={() => handleOptionChange(currentQuestion, option.value)}
                        className="option-input"
                      />
                      <label htmlFor={`q${currentQuestion}-${option.value}`} className="option-label">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="navigation-buttons">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className="nav-button prev-button"
                >
                  &larr; Geri
                </button>
                {currentQuestion < totalQuestions - 1 ? (
                  <button onClick={handleNext} className="nav-button next-button">
                    İleri &rarr;
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="nav-button submit-button">
                    Sonuçları Gör
                  </button>
                )}
              </div>
            </>
          ) : (
            <ResultCard result={recommendation} />
          )}
        </div>
      </div>
    </>
  );
};

export default AyakAnalizi;
