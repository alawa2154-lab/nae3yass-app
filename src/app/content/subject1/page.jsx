import Link from 'next/link';

export default function SubjectPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-right" dir="rtl">
      <nav className="text-sm mb-4 text-slate-400 font-medium">
        المناعة في الكائنات الحية
      </nav>

      {/* العنوان باللون #6367FF */}
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#6367FF' }}>
        المقدمة
      </h1>

      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
        
        {/* قسم الصورة رقم 3 من مجلد public */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img 
            src="/3.jfif" 
            alt="صورة توضيحية للمناعة"
            className="w-full h-auto object-cover block" 
          />
        </div>

        {/* الفقرة باللون الأسود مع خاصية text-justify */}
        <p 
          className="text-xl leading-relaxed text-black font-normal"
          style={{ textAlign: 'justify', textJustify: 'inter-word' }}
        >
          تتعرض حياة أي كائن حى لتهديد مستمر من مسببات الأمراض كبعض الحشرات والأوليات الحيوانية والفطريات والبكتريا والفيروسات وفي المقابل فإن كل نوع من انواع الكائنات الحية يطور من آليات الدفاع عن نفسه من اجل البقاء مما سبق يمكن تعريف المناعة بأنها مقدرة الجسم من خلال الجهاز المناعي على مقاومة مسببات المرض سواء كان ذلك من خلال منع دخول مسببات المرض إلى جسم الكائن الحي أو عن طريق مهاجمة مسببات العرض والأجسام الغريبة والقضاء عليها عند دخولها جسم الكائن الحي يعمل الجهاز المناعي وفق نظامين هما المناعة الفطرية أو الموروثة والمناعة المكتسبة أو التكيفي وهذان النظامان المناعيان يعملان بتعاون وتنسيق مع بعضهما إذ أن المناعة الفطرية اساسية لأداء المناعة المكتسبة عملها بنجاح والعكس صحيح.
        </p>

        {/* أزرار التنقل */}
        <div className="mt-12 flex justify-between items-center flex-row-reverse">
          {/* زر الدرس التالي */}
          <Link 
            href="/content/subject2" 
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#6367FF' }}
          >
            الدرس التالي
            <span className="mr-2">←</span>
          </Link>

          {/* زر السابق (للعودة للرئيسية) */}
          <Link 
            href="/home" 
            className="inline-flex items-center px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 border-2"
            style={{ borderColor: '#6367FF', color: '#6367FF' }}
          >
            <span className="ml-2">→</span>
            الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}