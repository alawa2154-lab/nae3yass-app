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
    { name: "التعليمات", href: "/instructions" }, // تم إضافة الرابط هنا
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
            
            {/* الشعار */}
            <h1 className="text-2xl font-black" style={{ color: '#462C7D' }}>منصة نوعية تعليمية</h1>
            
            {/* القائمة - تم تحديث الفراغات لتناسب إضافة الرابط الجديد */}
            <div className="flex items-center gap-x-1 md:gap-x-3 text-xs md:text-base">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl font-bold transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-white shadow-sm scale-105" 
                      : "hover:bg-white/30" 
                  }`}
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

        {/* الفوتور */}
        <footer className="text-center p-6 mt-12 shadow-inner" style={{ backgroundColor: '#C9BEFF', color: '#462C7D' }}>
          <p className="font-bold">جميع الحقوق محفوظة &copy; 2026 - منصة نوعية التعليمية</p>
        </footer>
      </body>
    </html>
  );
}
