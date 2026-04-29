import Link from 'next/link';

export default function SubjectPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-right" dir="rtl">
      <nav className="text-sm mb-4 text-slate-400 font-medium">
        المناعة في الكائنات الحية
      </nav>

      <h1 className="text-4xl font-bold mb-8" style={{ color: '#6367FF' }}>
        المناعة في الإنسان
      </h1>

      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
        
        {/* الصورة الرئيسية */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img 
            src="/7.jpg" 
            alt="المناعة في الإنسان"
            className="w-full h-auto object-cover block" 
          />
        </div>

        {/* المقدمة */}
        <p className="text-xl leading-relaxed text-black font-normal mb-8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          يتكون الجهاز المناعي في الإنسان من أعضاء وأنسجة وخلايا ومواد كيميائية تعمل معا للدفاع عن الجسم ضد مسببات الأمراض. ويعد الجهاز الليمفاوي هو المكون الرئيسي للجهاز المناعي وهو يتكون من سائل الليمف، أوعية ليمفاوية وأعضاء ليمفاوية. أما باقي مكونات الجهاز المناعي فتشمل خلايا الدم البيضاء ومواد كيميائية مساعدة وأجسام مضادة.
        </p>

        {/* 1. الأعضاء الليمفاوية */}
        <div className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            الأعضاء الليمفاوية:
          </span>
          <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            وهي المكون الرئيسي للجهاز الليمفاوي، وهي تنقسم إلى أعضاء ليمفاوية أولية يتم فيها إنتاج ونضج وتمايز الخلايا الليمفاوية وهما نخاع العظام والغدد التيموسية، وأعضاء ليمفاوية ثانوية تشمل الطحال واللوزتين وبقع باير والزائدة الدودية والعقد الليمفاوية.
          </p>
        </div>

        {/* أولاً: نخاع العظام */}
        <div className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            أولاً: نخاع العظام
          </span>
          <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            هو نسيج يوجد داخل العظام المسطحة مثل الترقوة والقص والجمجمة والعمود الفقرى والضلوع والكتف والحوض، ورؤوس العظام الطويلة كعظام الفخد والساق والعضد، وهو المسؤول عن إنتاج جميع انواع خلايا الدم البيضاء.
          </p>
          <div className="mb-6 rounded-xl overflow-hidden shadow-sm border">
            <img src="/8.png" alt="نخاع العظام" className="w-full h-auto block" />
          </div>
        </div>

        {/* ثانياً: الغدة التيموسية */}
        <div className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            ثانياً: الغدة التيموسية
          </span>
          <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            توقع على القصبة الهوائية أعلى القلب وخلف عظمة القص وتفرز هرمون التيموسين الذي يحفز نضج الخلايا الليمفاوية الجذعية إلى خلايا تائية وتمايزها إلى أنواعها المختلفة داخل الغدة.
          </p>
          <div className="mb-6 rounded-xl overflow-hidden shadow-sm border">
            <img src="/9.png" alt="الغدة التيموسية" className="w-full h-auto block" />
          </div>
        </div>

        {/* ثالثاً: الطحال */}
        <div className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            ثالثاً: الطحال
          </span>
          <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            عضو ليمفاوي صغير يقع في الجانب العلوي الأيسر من تجويف البطن، يحتوي على الخلايا البلعمية الكبيرة التي تلتقط الميكروبات والخلايا الهرمة وتفتتها، كما يحتوي على خلايا ليمفاوية.
          </p>
          <div className="mb-6 rounded-xl overflow-hidden shadow-sm border">
            <img src="/10.png" alt="الطحال" className="w-full h-auto block" />
          </div>
        </div>

        {/* رابعاً: اللوزتان وبقع باير */}
        <div className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            رابعاً: اللوزتان وبقع باير
          </span>
          <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            اللوزتان تلتقطان أي ميكروب يدخل مع الطعام أو الهواء. أما بقع باير فهي عقد صغيرة تنتشر في الغشاء المخاطي المبطن للجزء السفلي من الأمعاء الدقيقة وتلعب دوراً هاماً في الاستجابة المناعية بالأمعاء.
          </p>
          <div className="mb-6 rounded-xl overflow-hidden shadow-sm border">
            <img src="/11.png" alt="اللوزتان وبقع باير" className="w-full h-auto block" />
          </div>
        </div>

        {/* خامساً: العقد الليمفاوية */}
        <div className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            خامساً: العقد الليمفاوية
          </span>
          <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            تقوم بتنقية اللمف من الميكروبات وتتواجد على طول شبكة الأوعية الليمفاوية مثل تحت الإبطين وأعلى الفخذ. تنقسم من الداخل إلى جيوب ممتلئة بالخلايا الليمفاوية والبلعمية لتخليص اللمف من الجراثيم.
          </p>
          <div className="mb-6 rounded-xl overflow-hidden shadow-sm border">
            <img src="/12.png" alt="العقد الليمفاوية" className="w-full h-auto block" />
          </div>
        </div>

        {/* أزرار التنقل (سابق وتالي) */}
        <div className="mt-12 flex justify-between items-center flex-row-reverse">
          {/* زر الدرس التالي */}
          <Link 
            href="/content/subject4" 
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#6367FF' }}
          >
            الدرس التالي
            <span className="mr-2">←</span>
          </Link>

          {/* زر الدرس السابق */}
          <Link 
            href="/content/subject2" 
            className="inline-flex items-center px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 border-2"
            style={{ borderColor: '#6367FF', color: '#6367FF' }}
          >
            <span className="ml-2">→</span>
            الدرس السابق
          </Link>
        </div>
      </div>
    </div>
  );
}