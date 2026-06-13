import Link from "next/link";

export default function LaborConsultingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        人事労務相談と就業規則作成・改正
      </h1>

      {/* 労務相談 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">労務相談</h2>

        <div className="bg-[#f8fbfd] border border-blue-50 rounded-lg p-6 mb-8">
          <p className="text-gray-700 leading-relaxed italic">
            「社員が定着しない」「問題社員への対応に悩んでいる」「ハラスメントの相談を受けたがどう対応すればよいかわからない」
          </p>
        </div>

        <div className="space-y-5 text-gray-700 leading-loose">
          <p>
            労務管理の悩みは、法律だけで解決できるものではありません。
          </p>
          <p>
            私は長年、労働局や自治体の労働相談窓口において、労働者・使用者双方から延べ5,000件以上の相談を受け、数多くの労使トラブルの解決支援に携わってきました。
          </p>
          <p>
            その経験から感じるのは、同じ出来事でも立場によって見え方が大きく異なるということです。だからこそ、一方的な判断ではなく、双方の考えや感情を整理しながら、問題の本質を見極めることを大切にしています。
          </p>
          <p>
            また、産業カウンセラーやアンガーマネジメントファシリテーターとしての知識を活かし、法律面だけでなく心理面にも配慮したサポートを行っています。
          </p>
          <p className="font-semibold text-gray-800">
            「問題が起きてから対応する」のではなく、「問題が起きにくい職場をつくる」。
          </p>
          <p>
            労務相談を通じて、社員が安心して働ける環境づくりと、経営者が本業に専念できる組織づくりをお手伝いします。
          </p>
        </div>
      </div>

      {/* 就業規則 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">就業規則作成・改正</h2>

        <div className="space-y-5 text-gray-700 leading-loose">
          <p className="font-semibold text-gray-800 text-lg">
            就業規則は、単なる会社のルールブックではありません。
          </p>
          <p>
            会社の理念や価値観を社員に伝え、同じ方向を向いて働くための「組織づくりの設計図」です。
          </p>
          <p>
            私はこれまでの労働相談経験を通じて、多くの労使トラブルを見てきました。その多くは、ルールがないことではなく、「ルールが曖昧」「現場で運用できていない」ことが原因でした。
          </p>
          <p>そのため、私が作成する就業規則は、法律を守るためだけのものではありません。</p>
        </div>

        <ul className="my-6 space-y-3 ml-4">
          {[
            "経営者の想いを反映する",
            "実際の現場で運用できる内容にする",
            "トラブルを未然に防ぐ仕組みを盛り込む",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700">
              <span className="text-[#458bb7] font-bold mt-0.5">・</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="space-y-5 text-gray-700 leading-loose">
          <p>
            また、育児や介護と仕事の両立を支援したい企業、多様な価値観や働き方を受け入れたい企業に向けて、それぞれの会社の実情に合わせた制度設計も得意としています。
            「子育て中でも働き続けられる職場にしたい」「介護離職を防ぎたい」「優秀な人材に長く活躍してほしい」といった経営者の想いを制度として形にし、社員が安心して働ける環境づくりをサポートします。
          </p>
          <p>
            さらに、キャリアアップ助成金や両立支援等助成金をはじめとする各種助成金制度に対応した就業規則の整備・改定にも豊富な経験があります。助成金申請のためだけではなく、会社の成長や人材定着につながる制度づくりを意識してご提案いたします。
          </p>
          <p>
            法改正への対応はもちろん、社員の定着、採用力向上、組織力強化につながる「生きた就業規則」を通じて、経営者のビジョン実現をサポートいたします。
          </p>
        </div>
      </div>

      <div className="bg-[#f8fbfd] p-8 rounded-lg text-center border border-blue-50">
        <h2 className="text-xl font-bold text-[#458bb7] mb-4">まずはお気軽にご相談ください</h2>
        <p className="text-gray-600 mb-6">初回のご相談・お見積りは無料です。</p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
