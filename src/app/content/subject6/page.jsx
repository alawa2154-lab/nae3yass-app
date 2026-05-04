import Link from 'next/link';

export default function SubjectPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-right" dir="rtl">
      <nav className="text-sm mb-4 text-slate-400 font-medium">
        المناعة في الكائنات الحية
      </nav>

      {/* العنوان الرئيسي باللون #6367FF */}
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#6367FF' }}>
        مراحل المناعة المكتسبة
      </h1>

      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
        
        {/* قسم الصورة */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img 
            src="/17.jpg" 
            alt="صورة توضيحية للمناعة"
            className="w-full h-auto object-cover block" 
          />
        </div>

        {/* كارت الهدف المضاف حديثاً */}
        <div className="mb-10 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <div className="py-2 px-6 font-bold text-lg" style={{ backgroundColor: '#FFDBFD', color: '#6367FF' }}>
            الهدف
          </div>
          <div className="p-5 bg-slate-50 text-xl text-black font-bold">
            أن يُعدد الطالب مراحل المناعة المكتسبة بالترتيب.
          </div>
        </div>

        {/* مقدمة */}
        <p className="text-xl leading-relaxed text-black font-normal mb-8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          عندما يصاب فرد ما بمرض معين مثل الحصبة، فإنه لا يصاب به مرة ثانية طوال حياته، هل تعرف لماذا؟ لأنه قد اكتسب مناعة لهذا المرض وهي تحدث على مرحلتين:
        </p>

        {/* المرحلة الأولى */}
        <div className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            المرحلة الأولى: الاستجابة المناعية الأولية
          </span>
          <p className="text-xl leading-relaxed text-black font-normal" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            عندما يلاقي الجهاز المناعي كائناً ممرضاً جديداً فإن الخلايا البائية والتائية تستجيب لأنتيجينات ذلك الكائن الممرض وتقوم بمهاجمته حتى تقضي عليه، وهذا يستغرق وقتاً؛ فهذه الخلايا الليمفاوية في حاجة إلى الوقت كي تتضاعف. ولذلك فإن الاستجابة الأولية تستغرق ما بين خمسة إلى عشرة أيام كي تصل إلى أقصى إنتاجية، وأثناء هذا الوقت يمكن أن تصبح العدوى واسعة الانتشار وتظهر أعراض المرض.
          </p>
        </div>

        {/* المرحلة الثانية */}
        <div className="mb-10">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            المرحلة الثانية: الاستجابة المناعية الثانوية
          </span>
          <p className="text-xl leading-relaxed text-black font-normal mb-8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            إذا ما أصيب ذلك الفرد مرة ثانية بنفس الكائن الممرض، فإن الاستجابة المناعية تكون سريعة جداً إلى الدرجة التي غالباً ما يتم فيها تدمير الكائن الممرض قبل أن تظهر أعراض المرض. وتعرف الخلايا المسؤولة عن ذلك بخلايا الذاكرة التي تتكون أثناء الاستجابة المناعية الأولية. 
            <br /><br />
            فبينما الخلايا البائية والتائية لا تعيش إلا أياماً محدودة، فإن خلايا الذاكرة تعيش عشرات السنين. وعند المجابهة الثانية، تستجيب هذه الخلايا فوراً وتنقسم سريعاً لإنتاج الخلايا البلازمية والأجسام المضادة في وقت قصير جداً، لأن أعدادها أكبر وتستغرق وقتاً أقل في التعرف على الكائن الممرض.
          </p>
        </div>

        {/* كارت اليوتيوب بالألوان الجديدة */}
        <div className="mb-10 p-6 rounded-2xl border border-pink-200 flex flex-col items-center shadow-sm" style={{ backgroundColor: '#FFDBFD' }}>
          <p className="text-lg font-bold mb-3" style={{ color: '#8494FF' }}>
            شاهد شرح توضيحي إضافي للمناعة المكتسبة:
          </p>
          <a 
            href="https://www.youtube.com/watch?v=rlbH6QwlL2I" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition-colors shadow-md"
          >
            <span className="text-2xl">▶</span>
            مشاهدة على YouTube
          </a>
        </div>

        {/* أزرار التنقل */}
        <div className="mt-12 flex justify-between items-center flex-row-reverse">
          <Link 
            href="/exam" 
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#6367FF' }}
          >
            ابدأ الاختبار
            <span className="mr-2"></span>
          </Link>

          <Link 
            href="/content/subject5" 
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