import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ServiceGuidePage() {
  const services = [
    { title: "アンガーマネジメント研修", desc: "怒りの感情と上手に付き合うスキルを身につける「アンガーマネジメント」研修をします。ハラスメントの行為者等にアンガーマネジメントセッションも承っています。" },
    { title: "メンタルヘルスケアサービス", desc: "モチベーション維持、メンタルダウン防止のため、カウンセリングサービスをします。" },
    { title: "個人の目標達成支援", desc: "目標設定やアクションプランのフォローをします。" },
    { title: "個人セッション", desc: "1対1でのコーチングやカウンセリングを通じて、個人の課題解決や自己実現をサポートします。" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">個人の方へ</h1>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">サービス一覧</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex items-start">
              <CheckCircle className="text-[#458bb7] w-6 h-6 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f8fbfd] p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-[#458bb7] mb-4">お申し込み・ご相談</h2>
        <p className="text-gray-600 mb-8">
          個人向けサービスに関するお問い合わせやセッションのお申し込みはこちらからお願いいたします。
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
