import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function MentalHealthPage() {
  const worries = [
    "若手社員の離職が続いている",
    "管理職が部下への接し方に悩んでいる",
    "ハラスメントの相談が増えている",
    "職場の雰囲気が悪く、コミュニケーション不足を感じる",
    "メンタル不調による休職者が発生した",
    "ストレスチェックを実施しているが活用できていない",
    "復職支援の進め方が分からない",
  ];

  const services = [
    {
      title: "1. メンタルヘルス相談・労務アドバイス",
      desc: "休職・復職対応、長時間労働対策、メンタル不調者への対応方法などについて、法的リスクを踏まえてアドバイスします。"
    },
    {
      title: "2. ストレスチェック活用支援",
      desc: "実施だけで終わらせず、集団分析結果から職場の課題を見える化し、改善施策の提案まで行います。信頼できる提携先のご紹介も可能です。"
    },
    {
      title: "3. 管理職向けラインケア研修",
      desc: "部下の変化に気づき、適切に声をかけるための実践的な研修を実施します。パワハラを恐れず、伝わる指導方法も学べます。"
    },
    {
      title: "4. セルフケア研修",
      desc: "従業員自身がストレスと上手に付き合い、心身の健康を維持するための知識と対処法を習得します。"
    },
    {
      title: "5. ハラスメント防止対策",
      desc: "ハラスメントがメンタル不調の原因となるケースは少なくありません。予防研修、相談窓口、実態調査などを通じて安心して働ける職場づくりを支援します。"
    },
    {
      title: "6. チームビルディング支援",
      desc: "人間関係のストレスを減らし、互いの強みを活かしながら協力できる組織づくりをサポートします。"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        メンタルヘルスケアサービス
      </h1>

      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
          従業員が安心して働き続けられる職場づくりをサポートします
        </h2>
      </div>

      <div className="mb-14 space-y-5 text-gray-700 leading-loose">
        <p>
          近年、メンタルヘルス不調による休職や退職、職場内のコミュニケーション不全は、多くの企業にとって大きな経営課題となっています。特に中小企業では、一人の離職が職場全体に与える影響が大きく、生産性の低下や採用コストの増加にもつながります。
        </p>
        <p>
          小松社会保険労務士事務所では、単なる不調者対応にとどまらず、「メンタルヘルス不調を未然に防ぐ組織づくり」を重視しています。労務管理の専門家としての知識と、チームビルディング・コミュニケーション支援のノウハウを活かし、従業員が安心して働ける職場環境づくりを支援します。
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
          {services.map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-[#458bb7] mb-3">{s.title}</h4>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14 bg-[#f8fbfd] border border-blue-50 rounded-xl p-8">
        <h3 className="text-xl font-bold text-[#458bb7] mb-5 text-center">
          弊所の特徴
        </h3>
        <div className="space-y-5 text-gray-700 leading-loose text-center">
          <p>
            単なる「問題が起きてからの対応」ではなく、離職防止やエンゲージメント向上の視点から、組織全体の健康づくりを支援します。
          </p>
          <p className="font-semibold text-gray-800">
            労務管理・ハラスメント対策・チームビルディングを一体的にサポートできることが当事務所の強みです。
          </p>
          <p className="text-lg font-bold text-[#458bb7] mt-6">
            「社員が元気に働き続けられる会社づくり」<br />
            それが、私たちのメンタルヘルスケアサービスの目的です。
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
