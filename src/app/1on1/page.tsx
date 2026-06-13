import Link from "next/link";

export default function OneOnOnePage() {
  const learnings = [
    "1on1の目的と効果",
    "信頼関係を築くコミュニケーションの基本",
    "傾聴・質問・承認の技術",
    "部下のモチベーションを高める関わり方",
    "若手社員との世代間ギャップへの対応",
    "パワハラにならない指導とフィードバックの方法",
    "部下の成長を促す伝え方・関わり方",
    "成果につながる1on1の進め方",
    "面談でよくある失敗事例と改善方法",
  ];

  const recommended = [
    "若手社員の離職を減らしたい",
    "管理職のマネジメント力を高めたい",
    "社員とのコミュニケーションを改善したい",
    "ハラスメントを恐れて指導ができなくなっている",
    "部下との信頼関係を強化したい",
    "エンゲージメントの高い組織をつくりたい",
  ];

  const effects = [
    {
      category: "部下が辞めない組織づくり",
      items: ["上司と部下の信頼関係向上", "社員の定着率向上", "若手社員の離職防止", "働きがい・エンゲージメント向上"],
    },
    {
      category: "パワハラを恐れず伝わる指導",
      items: ["管理職の指導力向上", "必要な指導や注意を適切に伝えられる", "ハラスメントリスクの低減", "部下の主体性・自律性向上"],
    },
    {
      category: "組織力の向上",
      items: ["職場のコミュニケーション活性化", "チームワークの向上", "生産性向上", "離職防止と組織力強化"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <p className="text-center text-sm font-semibold tracking-widest text-[#458bb7] mb-4">中小企業の管理職のための実践型研修</p>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center leading-snug">
        部下が辞めない・パワハラを恐れず伝わる指導ができる
      </h1>
      <h2 className="text-xl md:text-2xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        中小企業の管理職のための実践型1on1研修
      </h2>

      <div className="mb-12">
        <p className="text-xl font-bold text-gray-800 mb-6 text-center">部下が自ら考え、動き、成長する組織へ</p>

        <div className="bg-[#f8fbfd] border border-blue-50 rounded-lg p-6 mb-8">
          <p className="text-gray-700 leading-loose italic">
            「何度言っても伝わらない」「若手社員がすぐ辞めてしまう」「注意や指導をしたいが、パワハラと言われないか不安」「管理職が部下との関わり方に悩んでいる」
          </p>
        </div>

        <div className="space-y-5 text-gray-700 leading-loose">
          <p>
            近年、社員の価値観は多様化し、一方的な指示や指導だけでは人材の定着や成長が難しくなっています。また、ハラスメントへの意識が高まる中で、「指導したいのにできない」「伝えるべきことを伝えられない」と悩む管理職も増えています。
          </p>
          <p>そこで注目されているのが、上司と部下が定期的に対話を行う「1on1ミーティング」です。</p>
          <p>しかし、単に面談の時間を設けるだけでは効果は出ません。</p>
          <p>
            当研修では、管理職が部下の話を引き出し、信頼関係を築きながら、必要なことはしっかり伝えられる実践的な1on1スキルを習得します。
          </p>
          <p className="font-semibold text-gray-800">
            部下が辞めない職場づくりと、パワハラを恐れず伝わる指導の両立を目指します。
          </p>
        </div>
      </div>

      {/* 研修で学べること */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">研修で学べること</h2>
        <ul className="space-y-3">
          {learnings.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <span className="text-[#458bb7] font-bold mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border border-gray-100">
          ロールプレイを中心に行うため、「知っている」ではなく「できる」を目指します。
        </p>
      </div>

      {/* おすすめ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">このような企業におすすめです</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recommended.map((r) => (
            <li key={r} className="flex items-start gap-2 text-gray-700 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <span className="text-[#458bb7] font-bold">・</span>{r}
            </li>
          ))}
        </ul>
      </div>

      {/* 期待できる効果 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">期待できる効果</h2>
        <div className="space-y-6">
          {effects.map((e) => (
            <div key={e.category} className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="font-bold text-[#458bb7] mb-4">・{e.category}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {e.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-gray-400 mt-0.5">▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* サポート */}
      <div className="mb-12 bg-[#f8fbfd] border border-blue-50 rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">チームビルディング専門の社会保険労務士がサポート</h2>
        <div className="space-y-4 text-gray-700 leading-loose">
          <p>
            現場では、「部下が辞める」「管理職が指導できない」「パワハラを恐れて注意できない」といった相談が年々増えています。
          </p>
          <p>
            だからこそ私は、1on1を単なる面談技術としてではなく、「社員が辞めない組織づくり」「パワハラを防ぎながら成長を促すマネジメント」「成果を生み出すチームづくり」の視点からお伝えしています。
          </p>
          <p className="font-semibold text-gray-800">管理職が変われば、組織は変わります。</p>
          <p>
            社員が安心して意見を言え、成長できる職場へ。そして、管理職が自信を持って部下を育成できる職場へ。
          </p>
          <p className="font-bold text-[#458bb7]">部下が辞めない組織づくりを、一緒に始めませんか。</p>
        </div>
      </div>

      <div className="text-center">
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
