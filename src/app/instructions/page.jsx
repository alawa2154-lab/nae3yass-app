"use client";
import Link from 'next/link';

export default function InstructionsPage() {
  const instructions = [
    { 
      id: 1, 
      text: "عزيزي الطالب، يمكنك استخدام الشريط العلوي للتنقل السريع والسهل بين كافة صفحات الموقع.", 
      icon: "🧭" 
    },
    { 
      id: 2, 
      text: "استخدم الأسهم الموجودة داخل المحتوى للتنقل بسلاسة بين الدروس السابقة والتالية.", 
      icon: "↔️" 
    },
    { 
      id: 3, 
      text: "بإمكانك العودة دائماً للصفحة الرئيسية، فهي نقطة الانطلاق للابحار في المحتوى التعليمي والاختبارات.", 
      icon: "🏠" 
    },
    { 
      id: 4, 
      text: "عند انتهائك من دراسة المحتوى، توجه للاختبار وتأكد من الإجابة على جميع الأسئلة لتتمكن من رؤية نتيجتك.", 
      icon: "📝" 
    },
    { 
      id: 5, 
      text: "إذا واجهت أي مشكلة، تفضل بزيارة صفحة 'المطور' للتواصل معه مباشرة عبر منصات التواصل الاجتماعي المتاحة بنقرة واحدة.", 
      icon: "👨‍💻" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-12 text-right" dir="rtl">
      <div className="w-full max-w-3xl mx-auto pt-8 px-4">
        
        {/* الهيدر */}
        <div className="rounded-2xl shadow-md mb-8 bg-white p-6 border-b-4" style={{ borderColor: '#6367FF' }}>
          <h1 className="text-3xl font-bold text-center" style={{ color: '#6367FF' }}>
            دليلك لاستخدام المنصة
          </h1>
        </div>

        {/* كارت التعليمات */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-xl font-bold mb-8 border-r-4 pr-4" style={{ borderColor: '#8494FF', color: '#8494FF' }}>
            عزيزي الطالب، إليك بعض النصائح لتحقيق أقصى استفادة:
          </h2>

          <div className="space-y-6">
            {instructions.map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100 group">
                <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <p className="text-lg leading-relaxed pt-1 text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* أزرار الحركة - تم الإبقاء على الزر الرئيسي فقط */}
          <div className="mt-12 flex flex-col items-center">
            <Link 
              href="/home" 
              className="w-full md:w-64 text-center text-white py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-lg shadow-indigo-100"
              style={{ backgroundColor: '#6367FF' }}
            >
              ابدأ رحلتك الآن
            </Link>
          </div>
        </div>

        {/* رسالة تشجيعية */}
        <p className="text-center mt-8 text-gray-400 text-sm italic">
          نحن هنا لنسهل عليك طريق النجاح.. رحلة ممتعة! ✨
        </p>
      </div>
    </div>
  );
}