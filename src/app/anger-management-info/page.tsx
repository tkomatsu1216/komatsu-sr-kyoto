import Link from "next/link";
import { Flame } from "lucide-react";

export default function AngerManagementPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        アンガーマネジメント講座情報
      </h1>
      
      <div className="mb-12">
        <div className="flex items-center justify-center mb-8">
          <Flame className="text-orange-500 w-16 h-16 mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">怒りの感情と上手につきあうために</h2>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          アンガーマネジメントとは、怒らないことを目的とするのではなく、「怒る必要のあることは上手に怒れ、怒る必要のないことは怒らなくて済むようになる」ことを目指す心理トレーニングです。
          <br /><br />
          職場でのパワハラ防止やコミュニケーションの改善、生産性の向上に大きな効果が期待できます。
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">ご提供中の講座・研修</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#458bb7] mb-3">アンガーマネジメント入門講座</h3>
            <p className="text-gray-600 mb-4">
              アンガーマネジメントの基本である、怒りの感情のメカニズムや、衝動のコントロール、思考のコントロール、行動のコントロールの3つの暗号を学ぶ90分の基礎講座です。
            </p>
            <div className="text-sm bg-gray-50 p-3 rounded text-gray-700">
              対象：どなたでも（新入社員から管理職まで）
            </div>
          </div>

          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#458bb7] mb-3">管理職向け パワハラ防止・叱り方研修</h3>
            <p className="text-gray-600 mb-4">
              アンガーマネジメントの理論をベースに、パワーハラスメントにならない適切な「叱り方（指導法）」を学ぶ実践的な研修です。
            </p>
            <div className="text-sm bg-gray-50 p-3 rounded text-gray-700">
              対象：管理職・リーダー・経営層
            </div>
          </div>

          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#458bb7] mb-3">個別セッション（ハラスメント行為者向け等）</h3>
            <p className="text-gray-600 mb-4">
              感情コントロールに課題を抱える方への1対1での個別セッションです。ハラスメント問題の再発防止プログラムとしてもご活用いただけます。
            </p>
            <div className="text-sm bg-gray-50 p-3 rounded text-gray-700">
              対象：特定の課題を持つ個人
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8fbfd] p-8 rounded-lg text-center border border-blue-50">
        <h2 className="text-xl font-bold text-[#458bb7] mb-4">研修のご相談・お申し込み</h2>
        <p className="text-gray-600 mb-6">
          社内研修としてのご依頼や、個人でのセッションご希望については、お問い合わせフォームよりご連絡ください。
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
