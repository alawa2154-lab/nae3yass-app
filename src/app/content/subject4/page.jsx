import Link from 'next/link';

export default function SubjectPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-right" dir="rtl">
      <nav className="text-sm mb-4 text-slate-400 font-medium">
        المناعة في الكائنات الحية
      </nav>

      {/* العنوان باللون #6367FF */}
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#6367FF' }}>
        شكل وتركيب الأجسام المضادة
      </h1>

      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
        
        {/* الصورة الرئيسية */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
          <img 
            src="/13.jpg" 
            alt="صورة توضيحية للأجسام المضادة"
            className="w-full h-auto object-cover block" 
          />
        </div>

        {/* الفقرة الأولى */}
        <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          الأجسام المضادة عبارة عن جلوبيولينات مناعية تظهر على شكل حرف Y وتوجد بالدم والليمف في الحيوانات الفقارية والإنسان، ويتم إنتاجها بواسطة الخلايا البائية البلازمية. تقع المواقع على حدوث الارتباط المحدد بين الأنتيجين والجسم المضاد الملائم له بطريقة تشبه القفل والمفتاح، ويؤدى هذا الارتباط إلى تكوين مركب معقد من الأنتيجين والجسم المضاد. ويعرف موقع ارتباط الأنتيجين على الجسم المضاد بالجزء المتغير لأن شكله يتغير من جسم مضاد لآخر، أما الجزء المتبقى من الجسم المضاد فيعرف بالجزء الثابت حيث أنه ثابت الشكل والتركيب في جميع أنواع الأجسام المضادة.
        </p>

        {/* إضافة الصورة رقم 16 */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <img 
            src="/16.png" 
            alt="تركيب الجسم المضاد"
            className="w-full h-auto object-cover block" 
          />
        </div>

        {/* الفقرة الثانية */}
        <p className="text-xl leading-relaxed text-black font-normal mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          ويتحدد تخصص كل جسم مضاد من خلال تشكيل الأحماض الأمينية المكونة للسلسلة الببتيدية (تتابع الأحماض الأمينية، وأنواعها، وشكلها الفراغي) وذلك في موقع الارتباط بالأنتيجين أي في الجزء المتغير من تركيب الجسم المضاد. يتكون الجسم المضاد من زوجين من السلاسل البروتينية؛ اثنان منهما طويلة وتسمى بالسلاسل الثقيلة، والاثنان الآخريتان قصيرتان وتسمى بالسلاسل الخفيفة. وترتبط السلاسل ببعضها عبر رابطة كبريتيدية ثنائية، ولكل جسم مضاد موقعان متماثلان لارتباط الأنتيجين.
        </p>

        {/* طرق عمل الأجسام المضادة */}
        <div className="text-xl leading-relaxed text-black font-normal mt-10 mb-6">
          <span className="block font-black mb-4 text-2xl" style={{ color: '#8494FF' }}>
            طرق عمل الأجسام المضادة:
          </span>
          <p className="mb-8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            الأجسام المضادة ثنائية الارتباط، أما الأنتيجينات فلها مواقع ارتباط متعددة، مما يجعل الارتباط بين الأجسام المضادة والأنتيجينات أمراً مؤكداً. وتقوم الأجسام المضادة بإيقاف عمل الأنتيجينات بإحدى الطرق التالية:
          </p>

          {/* 1. التعادل */}
          <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
            ١. التعادل:
          </span>
          <p className="mb-8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            إن أهم وظيفة تقوم بها الأجسام المضادة في مقاومة الفيروسات هي تحييد الفيروسات وإيقاف نشاطها. ويتم ذلك بأن تقوم الأجسام المضادة بالارتباط بالأغلفة الخارجية للفيروسات؛ وهذا يمنعها من الالتصاق بأغشية الخلايا والانتشار أو النفاذ إلى داخلها. وإن حدث وارتبط الفيروس بغشاء الخلية، فإن الأجسام المضادة تمنع الحمض النووي الفيروسي من الخروج بإبقائها الغلاف مغلقاً.
          </p>

          {/* 2. التلازن */}
          <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
            ٢. التلازن (الالتصاق):
          </span>
          <p className="mb-8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            ارتباط الأنتيجينات مع الأجسام المضادة يحفز عملية البلعمية (ابتلاع الميكروب). بعض الأجسام المضادة مثل الجسم المضاد IgM تحتوي على العديد من مواقع الارتباط مع الأنتيجينات، وبالتالي يرتبط الجسم المضاد الواحد منها بأكثر من ميكروب، مما يؤدى إلى تجمع الميكروبات على نفس الجسم المضاد، مما يجعلها أكثر ضعفا وعرضة لالتهامها بالخلايا البلعمية.
          </p>

          {/* 3. الترسيب */}
          <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
            ٣. الترسيب والتحلل:
          </span>
          <p className="mb-8" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            ويحدث عادة في الأنتيجينات الذائبة؛ حيث يؤدى ارتباط الأجسام مع هذه الأنتيجينات إلى تكوين مركبات من الأنتيجين والجسم المضاد غير ذائبة وتكون هذه المتراكبات راسباً، وبذا يسهل على الخلايا البلعمية التهام هذا الراسب. كما ينشط اتحاد الأجسام المضادة مع الأنتيجينات بروتينات وإنزيمات خاصة هي المتممات، فتقوم بتحليل أغلفة الأنتيجينات وإذابة محتوياتها؛ فيسهل التخلص منها بواسطة الخلايا البلعمية.
          </p>

          {/* 4. إبطال مفعول السموم */}
          <span className="block font-bold mb-2 text-xl" style={{ color: '#8494FF' }}>
            ٤. إبطال مفعول السموم:
          </span>
          <p className="mb-6" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            تقوم الأجسام المضادة بالارتباط بالسموم وتكوين مركبات من الأجسام المضادة والسموم. هذه المركبات تنشط المتممات فتتفاعل معها تفاعلاً متسلسلاً، يؤدى إلى إبطال مفعولها، مما يساعد على التهامها من قبل الخلايا البلعمية.
          </p>
        </div>

        {/* أزرار التنقل (سابق وتالي) */}
        <div className="mt-12 flex justify-between items-center flex-row-reverse">
          {/* زر الدرس التالي */}
          <Link 
            href="/content/subject5" 
            className="inline-flex items-center px-8 py-3 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#6367FF' }}
          >
            الدرس التالي
            <span className="mr-2">←</span>
          </Link>

          {/* زر الدرس السابق */}
          <Link 
            href="/content/subject3" 
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