import Link from 'next/link';

export default function SubjectPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-right" dir="rtl">
      <nav className="text-sm mb-4 text-slate-400 font-medium">
        المناعة في الكائنات الحية
      </nav>

      {/* العنوان الرئيسي */}
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#6367FF' }}>
        المناعة في النبات
      </h1>

      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
        
        {/* الصورة الرئيسية */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img 
            src="/4.png" 
            alt="المناعة في النبات"
            className="w-full h-auto object-cover block" 
          />
        </div>

        {/* المقدمة */}
        <p 
          className="text-xl leading-relaxed text-black font-normal mb-8"
          style={{ textAlign: 'justify', textJustify: 'inter-word' }}
        >
          تحمى النباتات نفسها من الكائنات المسببة للمرض من خلال طريقين الأول انجاز بعض الآليات من خلال تراكيب تمتلكها فيما يعرف بالمناعة التركيبية والثاني عن طريق استجابات لإفراز مواد كيميائية فيما يعرف بالمناعة البيوكيميائية.
        </p>

        {/* القسم الأول: المناعة التركيبية */}
        <div className="mb-10 text-xl leading-relaxed text-black font-normal">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            أولاً: المناعة التركيبية
          </span>
          <p className="mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            تمثل خط الدفاع الأول لمنع المسببات المرضيه من الدخول إلى النبات وانتشاره بداخله وهي عبارة عن حواجز طبيعية وهي تشمل نوعين هما: وسائل مناعية تركيبية موجودة أصلا في النبات، ووسائل مناعية تركيبية تتكون كاستجابة للإصابة.
          </p>

          <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
            ١- الأدمة الخارجية لسطح النبات:
          </span>
          <p className="mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            تتغطى أدمة السيقان الخضراء والأوراق بطبقة شمعية من مادة الكيوتين فلا يستقر عليها الماء، وبالتالي لا تتوافر البيئة الصالحة لنمو وتكاثر الفطريات والبكتريا، وقد يكسو الأدمة شعيرات أو أشواك مما يحول دون أكلها من حيوانات الرعي.
          </p>

          <div className="mb-8 rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img src="/5.png" alt="الأدمة الخارجية" className="w-full h-auto block" />
          </div>

          <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
            ٢- الجدار الخلوي:
          </span>
          <p className="mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            يمثل الجدار الخلوي دعامة وحماية إضافية لجميع الخلايا النباتية وهو يتركب أساسا من السليلوز وبعد تغلظه بمزيد من السليلوز أو بمواد أخرى كاللجنين أو السوبرين أو الكيوتين يصبح من الصعب على الكائنات الممرضة اختراقه.
          </p>

          <div className="mb-10 rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img src="/6.png" alt="الجدار الخلوي" className="w-full h-auto block" />
          </div>
        </div>

        {/* القسم الثاني: المناعة البيوكيميائية */}
        <div className="mb-10 text-xl leading-relaxed text-black font-normal">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            ثانياً: المناعة البيوكيميائية
          </span>
          <p className="mb-6">وتتضمن الآليات المناعية التالية:</p>

          {/* 1- المستقبلات */}
          <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
            ١- المستقبلات:
          </span>
          <p className="mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            التي تدرك وجود الميكروب وتنشط دفاعات النبات؛ هذه المركبات توجد في النباتات السليمة والمصابة على حد سواء إلا أن تركيزها يزيد في النباتات عقب الإصابة، ووظيفة تلك المركبات في تحفيز وسائل جهاز المناعة الموروثة في النبات.
          </p>

          {/* 2- مواد كيميائية مضادة */}
          <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
            ٢- مواد كيميائية مضادة للكائنات الدقيقة:
          </span>
          <p className="mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            قوم بعض النباتات بإفراز مركبات كيميائية تقاوم بها الكائنات الممرضة، وهذه المركبات إما أن تكون موجودة أصلاً في النبات قبل حدوث الإصابة أو تؤدى الإصابة إلى تكوينها. ومن هذه المركبات:
            <br />
            <span className="font-bold">الفينولات والجليكوزيدات:</span> وهي مركبات كيميائية سامة تقتل الكائنات الممرضة مثل البكتيريا أو تثبط نموها.
          </p>
        </div>

        {/* أزرار التنقل (سابق وتالي) */}
        <div className="mt-12 flex justify-between items-center flex-row-reverse">
          {/* زر الدرس التالي */}
          <Link 
            href="/content/subject3" 
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#6367FF' }}
          >
            الدرس التالي
            <span className="mr-2">←</span>
          </Link>

          {/* زر الدرس السابق */}
          <Link 
            href="/content/subject1" 
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