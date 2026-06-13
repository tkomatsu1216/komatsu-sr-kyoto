"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "ホーム" },
    { href: "/labor-consulting", label: "人事労務相談・就業規則" },
    { href: "/coaching", label: "コーチング・組織開発" },
    { href: "/1on1", label: "1on1研修" },
    { href: "/dxo", label: "DXO" },
    { href: "/anger-management", label: "アンガーマネジメント" },
    { href: "/profile", label: "プロフィール" },
    { href: "/fee", label: "料金案内" },
    { href: "/qa", label: "よくあるご質問" },
    { href: "/contact", label: "お問い合わせ" },
    { href: "/blog", label: "ブログ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold text-[#458bb7] hover:opacity-80 transition-opacity">
            小松社会保険労務士事務所
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#458bb7] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#458bb7]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg absolute w-full left-0">
          <ul className="flex flex-col space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-[#458bb7] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
