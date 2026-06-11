import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ToCompanyPage() {
  const services = [
    { title: "就業規則見直し・作成", desc: "就業規則の新規作成、法律改正対応、会社オリジナルの制度に対応した就業規則の作成をいたします。" },
    { title: "人事・労務相談", desc: "こんな時はどうしたらいいのか？～トラブル予防のためどうしておけばいいか？までご相談にのります。" },
    { title: "雇用関係の助成金の手続代行", desc: "助成金の代行手続きをします。" },
    { title: "経営者コーチング", desc: "現状の整理や把握、ビジョン、社員をどう活かすか？などについて定期セッションを持つことで課題を把握し速い決断と効果的な打ち手につながります。" },
    { title: "人材育成サービス", desc: "自律型社員の育成のお手伝いをします。" },
    { title: "組織開発・チームビルディング", desc: "社員の強みを活かし生産性が向上し続ける組織づくりをご支援します。" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">法人・事業主の方へ</h1>
      
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
        <h2 className="text-2xl font-bold text-[#458bb7] mb-4">まずはお気軽にご相談ください</h2>
        <p className="text-gray-600 mb-8">
          貴社の状況に合わせた最適なサポートをご提案いたします。
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
