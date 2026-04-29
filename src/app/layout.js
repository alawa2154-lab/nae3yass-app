"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // دالة مساعدة لتحديد شكل الرابط إذا كان هو الصفحة الحالية
  const isActive = (path) => pathname === path;

  const navLinks = [
    { name: "عن المنصة", href: "/about" },
    { name: "الرئيسية", href: "/home" },
    { name: "المحتوى", href: "/content" },
    { name: "الأختبار", href: "/exam" },
    { name: "المطور", href: "/developer" },
  ];

  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 text-gray-900 antialiased font-sans">
        {/* شريط التنقل بخلفية #C9BEFF */}
        <nav className="p-4 shadow-md sticky top-0 z-50 transition-all" style={{ backgroundColor: '#C9BEFF' }}>
          <div className="container mx-auto flex justify-between items-center">
            
            {/* الشعار - تم إزالة italic ليصبح النص مستقيماً */}
            <h1 className="text-2xl font-black" style={{ color: '#462C7D' }}>منصة نوعية تعليمية</h1>
            
            {/* القائمة */}
            <div className="flex items-center gap-x-2 md:gap-x-4 text-sm md:text-base">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl font-bold transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-white shadow-sm scale-105" // الخلفية البيضاء للرابط النشط
                      : "hover:bg-white/30" // تأثير عند تمرير الماوس
                  }`}
                  // تحكم في لون النص: لو نشط يبقى 8494FF، لو مش نشط يبقى 462C7D
                  style={{ color: isActive(link.href) ? '#8494FF' : '#462C7D' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        {/* الفوتور باللون #C9BEFF مع تغيير لون النص ليكون واضحاً */}
        <footer className="text-center p-6 mt-12 shadow-inner" style={{ backgroundColor: '#C9BEFF', color: '#462C7D' }}>
          <p className="font-bold">جميع الحقوق محفوظة &copy; 2026 - منصة نوعية التعليمية</p>
        </footer>
      </body>
    </html>
  );
}