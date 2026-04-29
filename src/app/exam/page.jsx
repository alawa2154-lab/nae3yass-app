"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ExamPage() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const questions = [
    { id: 1, q: "ما هو المكون المسؤول عن إنتاج جميع أنواع خلايا الدم البيضاء؟", options: ["الطحال", "نخاع العظام", "الغدة التيموسية", "العقد الليمفاوية"], correct: "نخاع العظام" },
    { id: 2, q: "أين تقع الغدة التيموسية في جسم الإنسان؟", options: ["خلف المعدة", "على القصبه الهوائية أعلى القلب", "تحت الإبط", "في تجويف البطن جهة اليسار"], correct: "على القصبه الهوائية أعلى القلب" },
    { id: 3, q: "ما هو الهرمون الذي يحفز نضج الخلايا الليمفاوية الجذعية إلى خلايا تائية؟", options: ["الأنسولين", "الثيروكسين", "التيموسين", "الأدرينالين"], correct: "التيموسين" },
    { id: 4, q: "يُعد 'مقبرة خلايا الدم الحمراء الهرمة' هو:", options: ["نخاع العظام", "اللوزتان", "الطحال", "بقع باير"], correct: "الطحال" },
    { id: 5, q: "تنتشر بقع باير في الغشاء المخاطي المبطن للجزء السفلي من:", options: ["المعدة", "الأمعاء الدقيقة", "المريء", "الأمعاء الغليظة"], correct: "الأمعاء الدقيقة" },
    { id: 6, q: "وظيفة العقد الليمفاوية الأساسية هي:", options: ["إنتاج الأجسام المضادة", "تنقية اللمف من الميكروبات", "تخزين خلايا الدم الحمراء", "إفراز الهيموجلوبين"], correct: "تنقية اللمف من الميكروبات" },
    { id: 7, q: "تظهر الأجسام المضادة على شكل حرف:", options: ["X", "Y", "Z", "H"], correct: "Y" },
    { id: 8, q: "يتم إنتاج الأجسام المضادة بواسطة الخلايا:", options: ["التائية المساعدة", "البلعمية الكبيرة", "البائية البلازمية", "التائية السامة"], correct: "البائية البلازمية" },
    { id: 9, q: "يرتبط الأنتيجين بالجسم المضاد بطريقة تشبه:", options: ["المغناطيس", "القفل والمفتاح", "التفاعل الكيميائي السريع", "الذوبان"], correct: "القفل والمفتاح" },
    { id: 10, q: "الجزء الذي يتغير شكله من جسم مضاد لآخر يسمى:", options: ["الجزء الثابت", "السلسلة الثقيلة", "الجزء المتغير", "الرابطة الكبريتيدية"], correct: "الجزء المتغير" },
    { id: 11, q: "أي مما يلي يعتبر من وسائل خط الدفاع الأول؟", options: ["الالتهاب", "الخلايا التائية", "الجلد والدموع", "الأجسام المضادة"], correct: "الجلد والدموع" },
    { id: 12, q: "مادة كيميائية تفرزها الأذن لقتل الميكروبات:", options: ["اللعاب", "المخاط", "الصملاغ", "الهيستامين"], correct: "الصملاغ" },
    { id: 13, q: "المسؤول عن حدوث الاستجابة بالالتهاب في خط الدفاع الثاني هي مادة:", options: ["الإنترفيرون", "الهيستامين", "الكيموكينات", "المتممات"], correct: "الهيستامين" },
    { id: 14, q: "المناعة التي تكتسبها من خلال الخلايا الليمفاوية التائية تسمى:", options: ["مناعة خلطية", "مناعة خلوية", "مناعة طبيعية", "مناعة فطرية"], correct: "مناعة خلوية" },
    { id: 15, q: "الجسم المضاد IgM يتميز بقدرته العالية على:", options: ["التعادل", "التلازن (الالتصاق)", "إبطال السموم", "التحلل"], correct: "التلازن (الالتصاق)" },
    { id: 16, q: "تعمل المتممات على تحليل أغلفة الأنتيجينات في طريقة:", options: ["التعادل", "الترسيب والتحلل", "منع الالتصاق", "الالتهاب"], correct: "الترسيب والتحلل" },
    { id: 17, q: "الاستجابة المناعية التي تستغرق 5-10 أيام للوصول لأقصى إنتاجية هي:", options: ["الأولية", "الثانوية", "الفطرية", "غير المتخصصة"], correct: "الأولية" },
    { id: 18, q: "الخلايا التي تعيش عشرات السنين وتمنع الإصابة بالمرض مرتين هي:", options: ["خلايا الدم الحمراء", "الخلايا البلازمية", "خلايا الذاكرة", "الخلايا الصارية"], correct: "خلايا الذاكرة" },
    { id: 19, q: "يرتبط حمض HCl بقتل الميكروبات في:", options: ["العين", "الأذن", "المعدة", "الجلد"], correct: "المعدة" },
    { id: 20, q: "ترتبط سلاسل الأجسام المضادة ببعضها عبر روابط:", options: ["هيدروجينية", "تساهمية", "كبريتيدية ثنائية", "أيونية"], correct: "كبريتيدية ثنائية" },
  ];

  const handleOptionChange = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
    setError(""); // مسح الخطأ بمجرد أن يختار الطالب إجابة
  };

  const calculateResult = () => {
    // التأكد من أن جميع الأسئلة تم الإجابة عليها
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < questions.length) {
      setError(`يرجى الإجابة على جميع الأسئلة. لقد أجبت على ${answeredCount} من أصل ${questions.length}`);
      return;
    }

    let currentScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setShowResult(true);
    setError("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-right" dir="rtl">
      <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#6367FF' }}>
        اختبار على المناعة
      </h2>

      {/* رسالة الخطأ في حال نسيان سؤال */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl font-bold text-center animate-bounce">
          {error}
        </div>
      )}

      {showResult && (
        <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-center animate-in fade-in duration-500">
          <h3 className="text-2xl font-bold text-green-700 mb-2">نتيجتك هي: {score} من {questions.length}</h3>
          <p className="text-gray-600">راجع إجاباتك في الأسفل (الإجابة الصحيحة محددة بالأخضر)</p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 rounded-xl font-bold text-lg text-white transition-all hover:scale-105 shadow-md"
              style={{ backgroundColor: '#6367FF' }}
            >
              إعادة الاختبار
            </button>
            <Link 
              href="/home" 
              className="px-8 py-3 rounded-xl font-bold text-lg border-2 transition-all hover:scale-105 text-center"
              style={{ borderColor: '#6367FF', color: '#6367FF' }}
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      )}

      <div className="space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {questions.map((q, index) => (
          <div key={q.id} className="p-4 border-b border-gray-50 last:border-0">
            <p className="font-bold mb-4 text-xl" style={{ color: '#8494FF' }}>
              {index + 1}. {q.q}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.options.map((opt) => (
                <label 
                  key={opt} 
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition border ${
                    showResult && opt === q.correct ? 'bg-green-100 border-green-500' : 
                    showResult && answers[q.id] === opt && opt !== q.correct ? 'bg-red-100 border-red-500' :
                    'hover:bg-gray-50 border-gray-100'
                  }`}
                >
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    disabled={showResult}
                    onChange={() => handleOptionChange(q.id, opt)}
                    className="w-5 h-5"
                    style={{ accentColor: '#6367FF' }}
                  />
                  <span className="text-black font-medium">{opt}</span>
                </label>
              ))}
            </div>
            {showResult && (
              <p className="mt-2 text-sm font-bold text-green-600">الإجابة الصحيحة: {q.correct}</p>
            )}
          </div>
        ))}

        {!showResult && (
          <button 
            onClick={calculateResult}
            className="w-full text-white py-4 rounded-xl font-bold text-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-100"
            style={{ backgroundColor: '#6367FF' }}
          >
            تسجيل الإجابات وعرض النتيجة
          </button>
        )}
      </div>
    </div>
  );
}