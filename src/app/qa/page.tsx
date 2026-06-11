import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function QaPage() {
  const faqs = [
    {
      q: "相談や見積もりにお金はかかりますか？",
      a: "初回のご相談やお見積りは無料です。まずはお気軽にお問い合わせフォームからご連絡ください。"
    },
    {
      q: "就業規則はどれくらいの期間で作成できますか？",
      a: "ヒアリングを含め、通常1ヶ月〜2ヶ月程度のお時間をいただいております。お急ぎの場合はご相談ください。"
    },
    {
      q: "助成金の申請だけを依頼することは可能ですか？",
      a: "基本的には顧問契約をいただいているお客様を優先しておりますが、スポットでのご依頼が可能な助成金もございますので、一度ご相談ください。"
    },
    {
      q: "京都府外でも依頼可能ですか？",
      a: "はい、可能です。Zoom等のオンラインツールを使用して、全国の企業様への対応を行っております。"
    },
    {
      q: "アンガーマネジメント研修は数人の少人数でも開催できますか？",
      a: "はい、少人数でも開催可能です。人数に合わせて研修の進め方を工夫いたしますので、ご安心ください。"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">よくあるご質問</h1>
      
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
              <HelpCircle className="text-[#458bb7] w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
              <span>{faq.q}</span>
            </h3>
            <div className="pl-9 text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-md">
              <span className="font-bold text-gray-500 mr-2">A.</span>
              {faq.a}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f8fbfd] p-8 rounded-lg text-center mt-16 border border-blue-50">
        <h2 className="text-xl font-bold text-[#458bb7] mb-4">その他にご不明な点がございましたら</h2>
        <p className="text-gray-600 mb-6">
          上記以外のご質問につきましても、お気軽にお問い合わせください。
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
