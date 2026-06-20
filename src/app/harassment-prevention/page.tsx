import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function HarassmentPreventionPage() {
  const worries = [
    "パワハラと言われるのが怖くて部下指導ができない",
    "社員同士の人間関係が悪く、離職が続いている",
    "ハラスメント相談があったが、どう対応すればよいか分からない",
    "管理職の指導力を向上させたい",
    "ハラスメント防止研修が形だけになっている",
    "外部相談窓口を設置したい",
    "カスタマーハラスメント対策を進めたい",
    "問題が起きる前に予防したい",
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        ハラスメント防止サービス
      </h1>

      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
          「ハラスメントが起こらない職場」ではなく、<br className="hidden md:block" />「安心して働ける職場」をつくるために
        </h2>
      </div>

      <div className="mb-14 space-y-5 text-gray-700 leading-loose">
        <p>
          ハラスメントは、従業員の心身の健康を損なうだけでなく、離職、生産性低下、企業イメージの悪化、訴訟リスクなど、企業経営に大きな影響を与えます。
        </p>
        <p>
          近年では、パワーハラスメント防止措置が企業に義務付けられ、さらにカスタマーハラスメント対策も求められるようになっています。しかし、「どこまでが指導で、どこからがハラスメントなのか分からない」「相談があったときの対応に自信がない」と悩む経営者や管理職は少なくありません。
        </p>
        <p className="font-semibold text-gray-800">
          小松社会保険労務士事務所では、ハラスメントを単なる法令遵守の問題として捉えるのではなく、社員が安心して働き、力を発揮できる職場づくりの一環として支援しています。
        </p>
      </div>

      <div className="mb-14">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">
          このようなお悩みはありませんか？
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {worries.map((w) => (
            <li key={w} className="flex items-start gap-2 text-gray-700 bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#458bb7] flex-shrink-0 mt-0.5" />
              {w}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-14">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">
          サービス内容
        </h3>
        <div className="space-y-6">
          {/* ハラスメント防止研修 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-[#458bb7] mb-3">ハラスメント防止研修</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              管理職向け、一般社員向け、新入社員向けなど対象に合わせた研修を実施します。単なる法律説明ではなく、現場で活かせる内容を重視しています。
            </p>
            <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>指導とハラスメントの違い</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>グレーゾーン事例の検討</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>アンコンシャス・バイアス（思い込み）</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>コミュニケーション改善</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>パワハラを恐れない伝わる指導方法</li>
            </ul>
          </div>

          {/* 外部相談窓口サービス */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-[#458bb7] mb-3">外部相談窓口サービス</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              ハラスメントの早期発見と適切な対応のため、イーリスハラスメントコンサルティング合同会社と共同で外部相談窓口サービスを提供しています。<br />
              社内では相談しづらい悩みや不安を、第三者の専門家に安心して相談できる環境を整えることで、問題の深刻化を防ぎます。<br />
              また、相談内容に応じて以下をサポートし、「相談窓口を設置しているだけ」の状態ではなく、実際に機能する相談体制づくりを支援します。
            </p>
            <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>相談者への対応支援</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>事業主への助言</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>再発防止策の提案</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>ハラスメント調査への連携</li>
            </ul>
          </div>

          {/* ハラスメント調査・事実確認 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-[#458bb7] mb-3">ハラスメント調査・事実確認</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              ハラスメントの申告があった際には、公平・中立な立場で対応を支援します。
            </p>
            <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>ヒアリング</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>事実関係の整理</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>報告書作成</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>再発防止策の提案</li>
            </ul>
          </div>

          {/* 規程・マニュアル整備 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-[#458bb7] mb-3">規程・マニュアル整備</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              企業の実態に合わせて以下を支援します。
            </p>
            <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>ハラスメント防止規程</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>相談窓口運用マニュアル</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>調査対応フロー</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>懲戒対応の整備</li>
            </ul>
          </div>

          {/* カスタマーハラスメント対策 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-[#458bb7] mb-3">カスタマーハラスメント対策</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              顧客や取引先からの暴言、威圧的な要求、過度なクレームなどから従業員を守るための対策を実施します。
            </p>
            <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>カスハラ方針策定</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>対応マニュアル作成</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>管理職研修</li>
              <li className="flex items-start gap-2"><span className="text-[#458bb7] font-bold">・</span>従業員研修</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 弊所の強み */}
      <div className="mb-14">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">
          小松社会保険労務士事務所の強み
        </h3>
        <div className="space-y-5 text-gray-700 leading-loose">
          <p>
            当事務所は、労働法の専門家としての知識だけでなく、チームビルディングやアンガーマネジメントの視点を取り入れた支援を行っています。
          </p>
          <p>
            ハラスメント問題の多くは、「悪意」よりも「コミュニケーションの行き違い」や「価値観の違い」から生まれます。<br />
            そのため、問題が起きた後の対応だけでなく、組織風土の改善や管理職のコミュニケーション力向上を通じて、ハラスメントが起こりにくい職場づくりを支援します。
          </p>
          <p>
            さらに、イーリスハラスメントコンサルティング合同会社との連携により、研修・相談窓口・調査対応・再発防止までワンストップで対応できる体制を整えています。
          </p>
        </div>
      </div>

      {/* メッセージ */}
      <div className="mb-14 bg-[#f8fbfd] border border-blue-50 rounded-xl p-8">
        <h3 className="text-xl font-bold text-[#458bb7] mb-5 text-center">
          ハラスメント対策は「守り」だけではありません
        </h3>
        <div className="space-y-5 text-gray-700 leading-loose text-center">
          <p>
            ハラスメント対策は、企業を守るためだけのものではありません。<br />
            社員が安心して働き、自分の力を発揮できる環境を整えることは、離職防止、生産性向上、採用力強化にもつながります。
          </p>
          <p className="text-lg font-bold text-gray-800 mt-6">
            「パワハラを恐れない、伝わる指導力」<br />
            「安心して意見を言える職場づくり」
          </p>
          <p className="font-semibold mt-4 text-[#458bb7]">
            小松社会保険労務士事務所は、ハラスメント防止を通じて、強くしなやかな組織づくりをサポートします。
          </p>
        </div>
      </div>

      <div className="bg-[#f8fbfd] p-8 rounded-lg text-center border border-blue-50">
        <h2 className="text-xl font-bold text-[#458bb7] mb-4">まずはお気軽にご相談ください</h2>
        <p className="text-gray-600 mb-6">貴社の状況に合わせた最適な支援をご提案いたします。</p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
