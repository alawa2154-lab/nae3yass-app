"use client"; 

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* رأس الصفحة */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-6" style={{ color: '#6367FF' }}>عن منصة نـوعـيـة التعليمية</h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          منصة متخصصة تهدف إلى تبسيط العلوم البيولوجية وتقديم محتوى تعليمي تفاعلي 
          يركز على دراسة أنظمة المناعة في الكائنات الحية.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="text-right" dir="rtl">
          <h2 className="text-3xl font-bold mb-5 border-r-8 pr-4" style={{ color: '#8494FF', borderColor: '#8494FF' }}>رؤيتنا</h2>
          <p className="text-gray-700 leading-8 text-lg">
            نسعى لأن نكون المرجع الأول للطلاب في فهم آليات الدفاع عن الحياة، 
            من خلال دمج التكنولوجيا الحديثة بالمنهج العلمي الرصين، مما يجعل التعلم 
            تجربة ممتعة وعميقة الأثر.
          </p>
        </div>
        
        {/* قسم الفيديو المعدل باسم الملف 2 */}
        <div className="rounded-3xl border shadow-2xl overflow-hidden aspect-video relative group" style={{ backgroundColor: '#000', borderColor: '#8494FF30' }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            {/* تم تغيير المسار ليتناسب مع اسم ملفك 2.mp4 */}
            <source src="/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
        </div>
      </div>

      {/* أهداف المحتوى */}
      <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 mb-16 relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-8 text-center relative z-10" style={{ color: '#6367FF' }}>ماذا نقدم؟</h2>
        
        <div className="grid sm:grid-cols-2 gap-8 text-right relative z-10" dir="rtl">
          {[
            { title: "شرح المناعة النباتية", desc: "تفصيل المناعة التركيبية والبيوكيميائية." },
            { title: "تشريح الجهاز المناعي", desc: "دراسة الأعضاء الليمفاوية وخلايا الدم البيضاء." },
            { title: "آليات الأجسام المضادة", desc: "فهم تخصص الأجسام المضادة وطرق عملها." },
            { title: "المناعة المكتسبة", desc: "شرح الاستجابات المناعية الأولية والثانوية." },
          ].map((item, index) => (
            <div key={index} className="p-4 hover:bg-gray-50 rounded-xl transition group">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#8494FF' }}>● {item.title}</h3>
              <p className="text-base text-gray-500 pr-6 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* تواصل معنا */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#6367FF' }}>هل لديك استفسار؟</h2>
        <p className="text-gray-600 mb-8 text-lg">نحن هنا لمساعدتك في رحلتك التعليمية</p>
        
        <Link 
          href="/developer" 
          className="inline-block text-white px-10 py-4 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
          style={{ backgroundColor: '#6367FF' }}
        >
          تواصل معنا الآن
        </Link>
      </section>
    </div>
  );
}