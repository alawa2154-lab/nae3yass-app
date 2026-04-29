import Link from 'next/link';

export default function SubjectPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-right" dir="rtl">
      <nav className="text-sm mb-4 text-slate-400 font-medium">
        المناعة في الكائنات الحية
      </nav>

      {/* العنوان الرئيسي */}
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#6367FF' }}>
        آليات عمل الجهاز المناعي
      </h1>

      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
        
        {/* الصورة الرئيسية */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img 
            src="/15.jfif" 
            alt="آليات المناعة"
            className="w-full h-auto object-cover block" 
          />
        </div>

        <p className="text-xl leading-relaxed text-black font-normal mb-8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          يعمل الجهاز المناعي وفق نظامين مناعيين: المناعة الطبيعية والمناعة المكتسبة. هذين النظامين على الرغم من أنهما مختلفان إلا أنهما يعملان بتعاون وتنسيق مع بعضهما، وهذا يسمح للجسم بالتعامل بنجاح مع الكائنات الممرضة.
        </p>

        {/* أولاً: المناعة الطبيعية */}
        <section className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            أولاً: المناعة الطبيعية (غير المتخصصة أو الفطرية)
          </span>
          <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            هي مجموعة الوسائل الدفاعية التي تحمى الجسم، وتتميز باستجابة سريعة وفعالة لمقاومة وتحليل أي ميكروب يحاول دخول الجسم، وهي غير متخصصة ضد نوع معين من الميكروبات.
          </p>

          {/* خط الدفاع الأول */}
          <span className="block font-bold mb-4 text-xl" style={{ color: '#8494FF' }}>
            خط الدفاع الأول:
          </span>
          <p className="mb-6 text-lg text-black font-medium">يتمثل في مجموعة من الحواجز الطبيعية ووظيفته الأساسية منع دخول الكائنات الممرضة:</p>

          <div className="space-y-6 mr-4 text-black">
            <div>
              <span className="block font-bold" style={{ color: '#8494FF' }}>1. الجلد:</span>
              <p className="text-black">يتميز بطبقة قرنية صلبة وعرق مالح يقتل الميكروبات.</p>
            </div>
            <div>
              <span className="block font-bold" style={{ color: '#8494FF' }}>2. الدموع:</span>
              <p className="text-black">تحتوي مواد محللة للميكروبات تحمي العين.</p>
            </div>
            <div>
              <span className="block font-bold" style={{ color: '#8494FF' }}>3. الصملاغ (شمع الأذن):</span>
              <p className="text-black">مادة تفرزها الأذن لقتل الميكروبات وحمايتها.</p>
            </div>
            <div>
              <span className="block font-bold" style={{ color: '#8494FF' }}>4. المخاط بالممرات التنفسية:</span>
              <p className="text-black">سائل لزج تلتصق به الأجسام الغريبة وتقوم الأهداب بطرده للخارج.</p>
            </div>
            <div>
              <span className="block font-bold" style={{ color: '#8494FF' }}>5. اللعاب وإفرازات المعدة:</span>
              <p className="text-black">يحتوي اللعاب أنزيمات مذيبة، وتفرز المعدة حمض HCl القوي الذي يقتل الميكروبات.</p>
            </div>
          </div>
          
          <div className="mt-8 mb-8 rounded-xl overflow-hidden shadow-sm border">
            <img src="/14.png" alt="وسائل الدفاع" className="w-full h-auto block" />
          </div>
        </section>

        {/* خط الدفاع الثاني */}
        <section className="mb-10 text-black">
          <span className="block font-black mb-4 text-xl" style={{ color: '#8494FF' }}>
            خط الدفاع الثاني:
          </span>
          <p className="text-xl leading-relaxed text-black mb-4" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            نظام دفاعي داخلي يستخدم عمليات غير متخصصة تحيط بالميكروبات لمنع انتشارها إذا فشل الخط الأول، وتبدأ بحدوث "الاستجابة بالالتهاب".
          </p>
          <p className="bg-gray-50 p-4 rounded-lg border-r-4 text-black" style={{ borderColor: '#8494FF' }}>
            <span className="font-bold" style={{ color: '#8494FF' }}>الاستجابة بالالتهاب:</span> تفاعل دفاعي غير تخصصي يؤدي لتمدد الأوعية الدموية بسبب مادة "الهيستامين" مما يسمح لخلايا الدم البيضاء بمحاربة العدوى.
          </p>
        </section>

        {/* ثانياً: المناعة المكتسبة */}
        <section className="mb-10 text-black">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            ثانياً: المناعة المكتسبة (المتخصصة أو التكيفية)
          </span>
          <p className="text-xl leading-relaxed text-black mb-6">تتمثل في خط الدفاع الثالث (الخلايا الليمفاوية) وتعمل عبر آليتين:</p>

          {/* 1. المناعة الخلطية */}
          <div className="mb-8">
            <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
              1. المناعة الخلطية (بالأجسام المضادة):
            </span>
            <p className="text-lg leading-relaxed text-black" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              تختص بالدفاع عن الجسم ضد الانتجينات والكائنات الممرضة في سوائل الجسم بواسطة الأجسام المضادة. تتعرف الخلايا البائية (B) على الأنتيجين وتعرضه على سطحها مع بروتين التوافق النسيجي (MHC)، ثم تنشطها الخلايا التائية المساعدة (TH) لإفراز الأجسام المضادة.
            </p>
          </div>

          {/* 2. المناعة الخلوية */}
          <div className="mb-8">
            <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
              2. المناعة الخلوية (بالخلايا الوسيطة):
            </span>
            <p className="text-lg leading-relaxed text-black" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              تقوم بها الخلايا الليمفاوية التائية (T) بواسطة المستقبلات الموجودة على أغشيتها. تبتلع الخلايا البلعمية الميكروب وتعرض أنتيجيناته، فترتبط بها الخلايا التائية المساعدة وتفرز "الإنترلوكينات" لتنشيط الاستجابة المناعية وتكوين خلايا ذاكرة.
            </p>
          </div>
        </section>

        {/* أزرار التنقل (سابق وتالي) */}
        <div className="mt-12 flex justify-between items-center flex-row-reverse">
          {/* تم تعديل الرابط هنا ليوجه إلى subject6 */}
          <Link 
            href="/content/subject6" 
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#6367FF' }}
          >
            الدرس التالي
            <span className="mr-2">←</span>
          </Link>

          {/* زر الدرس السابق */}
          <Link 
            href="/content/subject4" 
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