import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      {/* العنوان الرئيسي باللون #6367FF */}
      <h2 className="text-5xl font-extrabold mb-8" style={{ color: '#6367FF' }}>
        مرحباً بك في فصل المناعة
      </h2>
      
      <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
        اكتشف كيف تحمي الكائنات الحية نفسها من خلال الأنظمة المناعية المعقدة، من النباتات البسيطة إلى جسم الإنسان المذهل.
      </p>

      {/* عرض البطاقات */}
      <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
        {[
          { 
            title: "المحتوى العلمي", 
            desc: "دروس تفصيلية مدعمة بالصور", 
            link: "/content", 
            image: "/18.png" // المسار للصورة 18
          },
          { 
            title: "الاختبار", 
            desc: "اختبر مدى فهمك للدروس", 
            link: "/exam", 
            image: "/19.png" // المسار للصورة 19
          },
        ].map((item, i) => (
          <Link 
            key={i} 
            href={item.link} 
            className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center"
          >
            {/* عرض الصور بدلاً من الإيقونات */}
            <div className="w-32 h-32 mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-contain" 
              />
            </div>

            {/* العناوين باللون #8494FF */}
            <h3 className="text-2xl font-bold mb-3 transition-colors" style={{ color: '#8494FF' }}>
              {item.title}
            </h3>
            <p className="text-gray-500 text-lg">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}