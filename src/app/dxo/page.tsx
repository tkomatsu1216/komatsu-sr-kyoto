import Link from "next/link";

export default function DxoPage() {
  const supports = [
    "DXO導入に向けた経営者との対話",
    "組織の現状診断と課題の見える化",
    "DXOワークショップのファシリテーション",
    "管理型組織から自律分散型組織への移行支援",
    "OKRや1on1との連携による実践サポート",
    "社員が安心して意見を出し合える対話の場づくり",
    "離職防止とエンゲージメント向上支援",
  ];

  const recommended = [
    "社長への依存度が高い",
    "管理職が疲弊している",
    "社員の主体性を高めたい",
    "離職を減らしたい",
    "組織の風通しを良くしたい",
    "次世代に引き継げる会社をつくりたい",
    "変化の激しい時代に対応できる組織にしたい",
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-4 text-center">
        自律分散型組織移行プログラム（DXO）
      </h1>
      <p className="text-center text-gray-500 mb-12 border-b pb-6">移行支援します</p>

      {/* 導入 */}
      <div className="bg-[#f8fbfd] border border-blue-50 rounded-lg p-6 mb-12">
        <p className="text-gray-700 leading-loose italic">
          「社長が頑張り続けないと会社が回らない」「社員にもっと主体的に動いてほしい」「管理を強めるほど、組織の活力が失われていく」
        </p>
      </div>

      <div className="space-y-5 text-gray-700 leading-loose mb-12">
        <p>
          そんな悩みを抱える経営者のために、私はDXO（自律分散型組織移行プログラム）のインストーラーとして、組織の"OS"をアップデートするお手伝いをしています。
        </p>
        <p>
          DXOとは、手放す経営ラボラトリーが開発した、自律分散型組織へ移行するための実践的なプログラムです。単なる組織改革やマネジメント手法ではなく、組織の意思決定の仕組みそのものを見直し、一人ひとりが主体的に考え、行動できる組織をつくるためのフレームワークです。
        </p>
        <p>
          私は社会保険労務士として6,000件を超える労務相談に携わる中で、多くの企業が抱える問題の根本原因は「人」ではなく「組織の仕組み」にあることを実感してきました。
        </p>
      </div>

      {/* 問題の根本 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-12">
        <p className="font-bold text-gray-800 mb-4">こうした問題は、社員の能力不足ではなく、組織のOS（意思決定の仕組み）が時代に合わなくなっているサインかもしれません。</p>
        <div className="grid grid-cols-2 gap-3">
          {["離職が続く", "指示待ち社員が増える", "管理職が疲弊する", "経営者に仕事が集中する"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-gray-700 bg-gray-50 rounded p-3">
              <span className="text-[#458bb7] font-bold">・</span>{item}
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-700 leading-loose">
          DXOでは、その組織OSを見直し、変化に強く、創造性あふれる組織へと進化させていきます。
        </p>
      </div>

      {/* 支援内容 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">私が支援できること</h2>
        <ul className="space-y-3">
          {supports.map((s) => (
            <li key={s} className="flex items-start gap-3 text-gray-700 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <span className="text-[#458bb7] font-bold mt-0.5">✓</span>{s}
            </li>
          ))}
        </ul>
      </div>

      {/* おすすめ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">こんな企業におすすめです</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recommended.map((r) => (
            <li key={r} className="flex items-start gap-2 text-gray-700 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <span className="text-[#458bb7] font-bold">・</span>{r}
            </li>
          ))}
        </ul>
      </div>

      {/* まとめ */}
      <div className="bg-[#f8fbfd] border border-blue-50 rounded-lg p-8 mb-12">
        <p className="text-gray-700 leading-loose mb-4">
          DXOは「社員を管理する方法」ではありません。一人ひとりの個性や強みが自然に活かされる環境を整え、組織そのものを進化させるための取り組みです。
        </p>
        <p className="text-gray-700 leading-loose mb-4">
          私は社労士としての制度・労務の専門知識と、チームビルディング支援の経験を活かしながら、経営者と社員がともに成長できる組織づくりを伴走支援します。
        </p>
        <p className="font-bold text-gray-800 text-center mt-6">
          「社長が頑張り続ける会社」から、<br />
          「社員一人ひとりが自ら考え動く会社」へ。
        </p>
        <p className="text-gray-600 text-center mt-2">DXOを通じて、持続可能でしなやかな組織づくりをご支援します。</p>
      </div>

      <div className="text-center">
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
