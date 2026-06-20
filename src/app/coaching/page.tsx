import Link from "next/link";

export default function CoachingPage() {
  const teamBuildingProgram = [
    "一人ひとりの強み、弱みを知る（利き脳診断活用）",
    "組織の目的・目標",
    "組織目標と個人目標",
    "関係力（コミュニュケーション力）向上　コーチングベース",
    "リーダーシップについて",
    "強みを活かす",
    "組織力とコミュニュケーション",
    "ミッション",
  ];

  const okrWorries = [
    "社員が指示待ちになっている",
    "部署ごとにバラバラな方向を向いている",
    "目標が数字だけでやらされ感がある",
    "評価のための目標設定になっている",
    "社員の主体性を高めたい",
    "経営理念やビジョンが現場まで浸透していない",
  ];

  const okrEffects = [
    { title: "組織の方向性が揃う", desc: "経営者の想いと現場の行動がつながり、全員が同じ目標に向かって進めます。" },
    { title: "社員の主体性が高まる", desc: "「やらされる仕事」から「自ら考えて行動する仕事」へ変わります。" },
    { title: "コミュニケーションが活性化する", desc: "定期的な振り返りを通じて、上司と部下、チーム内の対話が増えます。" },
    { title: "成長スピードが上がる", desc: "小さな改善と挑戦を繰り返しながら成果につなげます。" },
  ];

  const okrSupport = [
    "経営理念・ビジョンの整理",
    "組織課題の見える化",
    "OKR設計支援",
    "定期的な振り返りミーティング",
    "管理職への運用サポート",
    "社員の主体性向上支援",
  ];

  const okrRecommended = [
    "従業員10〜50名程度の中小企業",
    "社員の主体性を高めたい会社",
    "離職率を下げたい会社",
    "管理職を育成したい会社",
    "チームワークを向上させたい会社",
    "経営理念を浸透させたい会社",
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        経営者コーチング・チームと個人の目標達成支援、OKR
      </h1>

      {/* 概要 */}
      <div className="mb-14 space-y-5 text-gray-700 leading-loose">
        <p>
          近年は市場環境や働き方が急速に変化し、企業には変化に柔軟に対応しながら、スピーディーに成果を生み出す組織づくりが求められています。経営者だけが頑張る時代ではなく、社員一人ひとりが主体的に考え、行動し、変化に挑戦できる組織風土が企業の成長を左右します。
        </p>
        <p>
          そのためには、経営者が会社のミッション・ビジョンを明確に示し、組織全体が同じ方向を向いて目標達成に取り組める状態をつくることが重要です。また、メンバー一人ひとりの成長と組織の成果を両立させることができます。
        </p>
        <p>
          私は、経営者コーチングを通じて経営者の意思決定や組織づくりを支援するとともに、チームと個人の目標達成支援、組織開発・チームビルディングを通じて、社員同士が互いの違いや強みを理解し、協力し合いながら成果を生み出す組織づくりをサポートします。
        </p>
        <p className="font-semibold text-gray-800">
          一人ひとりが主体的に力を発揮し、会社の目的・目標の達成に向かって成長し続けるチームをつくること。それが私の考える組織開発・チームビルディングです。
        </p>
      </div>

      {/* チームビルディングプログラム */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">
          チームビルディング（連続研修）のプログラム例
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {teamBuildingProgram.map((item, i) => (
            <div key={i} className={`flex items-start gap-4 px-6 py-4 ${i < teamBuildingProgram.length - 1 ? "border-b border-gray-100" : ""}`}>
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#458bb7] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border border-gray-100">
          ＊リーダー育成とチームビルディングを叶えるアクションラーニング形式をおすすめします。
        </p>
      </div>

      {/* OKR */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">OKR</h2>

        <div className="bg-[#f8fbfd] border border-blue-50 rounded-lg p-6 mb-8">
          <p className="text-gray-700 leading-loose">
            <span className="font-bold">OKR（Objectives and Key Results）</span>とは、会社やチーム、個人が「何を目指すのか」と「どのような成果を出すのか」を明確にし、組織全体が同じ方向を向いて成長していくための目標管理手法です。
            Googleをはじめ、多くの成長企業で導入されており、近年は中小企業でも活用が広がっています。
          </p>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-4">このようなお悩みはありませんか？</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {okrWorries.map((w) => (
            <li key={w} className="flex items-start gap-2 text-gray-700 bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
              <span className="text-[#458bb7] font-bold">・</span>{w}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-gray-800 mb-4">OKRの仕組み</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm font-semibold text-[#458bb7] mb-2">Objective（目標）</p>
            <p className="font-bold text-gray-800 mb-3">「何を実現したいのか」</p>
            <p className="text-gray-600 text-sm mb-3">社員がワクワクし、挑戦したくなる目標を設定します。</p>
            <div className="text-sm text-gray-500 space-y-1 bg-gray-50 p-3 rounded">
              <p>・お客様から最も信頼される店舗になる</p>
              <p>・働きがいのある職場をつくる</p>
              <p>・地域で選ばれる会社になる</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm font-semibold text-[#458bb7] mb-2">Key Results（成果指標）</p>
            <p className="font-bold text-gray-800 mb-3">「目標達成をどのように測るのか」</p>
            <p className="text-gray-600 text-sm mb-3">目標が達成できたかを判断する具体的な成果指標です。</p>
            <div className="text-sm text-gray-500 space-y-1 bg-gray-50 p-3 rounded">
              <p>・顧客満足度90％以上</p>
              <p>・リピート率20％向上</p>
              <p>・社員満足度80％以上</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-4">OKR導入で得られる効果</h3>
        <div className="space-y-4 mb-10">
          {okrEffects.map((e, i) => (
            <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#458bb7] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p className="font-bold text-gray-800 mb-1">{e.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-4">弊所のOKR導入支援</h3>
        <p className="text-gray-700 mb-4 leading-loose">単に目標設定の方法をお伝えするだけではありません。チームビルディングを専門とする社会保険労務士として、まで伴走しながらサポートします。</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {okrSupport.map((s) => (
            <li key={s} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#458bb7] font-bold mt-0.5">✓</span>{s}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-gray-800 mb-4 mt-8">こんな企業におすすめです</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {okrRecommended.map((r) => (
            <li key={r} className="flex items-start gap-2 text-gray-700 bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
              <span className="text-[#458bb7] font-bold">・</span>{r}
            </li>
          ))}
        </ul>

        <div className="bg-[#f8fbfd] border border-blue-50 rounded-lg p-6">
          <p className="font-bold text-gray-800 mb-3">「目標管理」から「組織づくり」へ</p>
          <p className="text-gray-700 leading-loose">
            OKRは単なる目標管理制度ではありません。社員一人ひとりが会社の目指す未来を理解し、自分の役割に誇りを持ちながら成長するための仕組みです。
            「社員が自ら考え、行動し、成果を生み出す組織づくり」の第一歩として、OKRを活用してみませんか。
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
