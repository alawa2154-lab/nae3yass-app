const subjects = [
  { id: 1, title: "مقدمة تمهيدية", desc: "تعريف المناعة والأنظمة الأساسية", img: "/20.png" },
  { id: 2, title: "المناعة في النبات", desc: "المناعة التركيبية والبيوكيميائية", img: "/21.jfif" },
  { id: 3, title: "المناعة في الإنسان", desc: "الأعضاء الليمفاوية وخلايا الدم", img: "/22.png" },
  { id: 4, title: "الأجسام المضادة", desc: "التركيب، الأنواع، وطرق العمل", img: "/23.png" },
  { id: 5, title: "آلية عمل الجهاز المناعي", desc: "المناعة الطبيعية والمكتسبة", img: "/24.png" },
  { id: 6, title: "مراحل المناعة المكتسبة", desc: "الاستجابة الأولية والثانوية", img: "/25.png" },
];

export default function ContentPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl text-right" dir="rtl">
      {/* العنوان الرئيسي */}
      <h2 
        className="text-4xl font-bold mb-10 border-r-8 pr-4" 
        style={{ color: '#6367FF', borderColor: '#6367FF' }}
      >
        المحتوى التعليمي
      </h2>

      <div className="grid gap-6">
        {subjects.map((sub) => (
          <a 
            key={sub.id} 
            href={`/content/subject${sub.id}`} 
            className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border-r-4 border-transparent hover:border-[#8494FF] group"
          >
            {/* قسم الصورة - يبدأ من 20.png */}
            <div className="w-24 h-24 shrink-0 bg-gray-50 rounded-xl overflow-hidden ml-6 border border-gray-100 transition-transform group-hover:scale-105">
              <img 
                src={sub.img} 
                alt={sub.title} 
                className="w-full h-full object-contain" 
              />
            </div>

            {/* قسم النص */}
            <div className="grow">
              <div className="flex items-center gap-3">
                <span 
                  className="text-3xl font-black" 
                  style={{ color: '#8494FF', opacity: 0.2 }}
                >
                  {sub.id}
                </span>
                <h3 className="text-2xl font-bold" style={{ color: '#8494FF' }}>
                  {sub.title}
                </h3>
              </div>
              <p className="text-gray-500 text-lg mt-1 mr-10">
                {sub.desc}
              </p>
            </div>

            {/* سهم الانتقال */}
            <div className="text-gray-300 group-hover:text-[#6367FF] transition-colors pl-4">
              <span className="text-2xl">←</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}