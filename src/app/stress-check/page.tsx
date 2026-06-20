import Link from "next/link";
import { Lock, Mail, ClipboardCheck, BarChart3, CheckCircle2 } from "lucide-react";

export default function StressCheckPage() {
  const features = [
    {
      icon: Lock,
      title: "匿名性に配慮した安心運用",
      items: ["個人情報は企業へ共有しません", "受験者へ直接結果を通知", "プライバシーに配慮した運用"],
    },
    {
      icon: Mail,
      title: "オンライン完結 メールで結果通知",
      items: ["WEB回答で完結", "結果はメールでお届け"],
    },
    {
      icon: ClipboardCheck,
      title: "研修修了看護師が監修",
      items: ["スコアの確認", "高ストレス者へのご案内", "安心できる結果フィードバック"],
    },
    {
      icon: BarChart3,
      title: "集団分析結果を活用した職場改善支援",
      items: ["集団分析で課題を可視化", "改善提案で次のアクションへ", "健康経営の取り組みを支援"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* タグ */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {["法令対応", "職場改善", "健康経営"].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-[#eaf3f9] text-[#458bb7] text-xs font-semibold rounded-full border border-[#458bb7]/30">
            {tag}
          </span>
        ))}
      </div>

      {/* ヒーロー */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
          ストレスチェックで<br />
          <span className="text-[#458bb7]">職場を変える、未来をつくる。</span>
        </h1>
        <p className="text-gray-500 mb-6">〜従業員の心の健康が、企業の成長力になる〜</p>
        <p className="text-gray-700 leading-loose max-w-2xl mx-auto">
          政府は「健康経営」を推進し、人的資本経営の実現に向け心身の健康を経営課題とする企業を後押ししています。
          ストレスチェックは、働きやすい職場づくり・生産性向上・離職防止の第一歩。法令対応にとどまらない取り組みです。
        </p>
      </div>

      {/* 法令対応ボックス */}
      <div className="bg-[#f8fbfd] border border-[#458bb7]/30 rounded-xl p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#458bb7] mb-2">📋 法令対応としても重要</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              労働安全衛生法に基づき、常時50人以上の労働者がいる事業所ではストレスチェックの実施が義務化されています。
              さらに、<strong>50人未満事業所への義務化拡大が検討</strong>されています。
            </p>
          </div>
          <div className="flex-shrink-0 bg-[#458bb7] text-white rounded-lg px-5 py-4 text-center">
            <p className="text-xs mb-1 opacity-90">「まだ対象ではないから関係ない」ではなく</p>
            <p className="text-lg font-bold">今から備える時代です。</p>
          </div>
        </div>
      </div>

      {/* 当事務所からの一言 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
        <p className="text-gray-700 leading-loose mb-3">
          当事務所では、ストレスチェック制度の導入・運用に関するご相談をはじめ、結果を活かした職場環境改善のサポートを行っています。
        </p>
        <p className="font-semibold text-[#458bb7]">
          このたび、ストレスチェック実施機関企業（合同会社人財エンゲージラボ）と提携しました。<br />
          「メンタル不調者を出さない職場づくり」を目指し、予防から改善まで継続的にサポートいたします。
        </p>
      </div>

      {/* サービスの特長 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">サービスの特長</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#eaf3f9] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#458bb7]" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm leading-snug">{f.title}</h3>
                </div>
                <ul className="space-y-2">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#458bb7] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* サービスの内容 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">サービスの内容</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: "ストレスチェック実施",
              items: ["WEB回答フォームのご提供", "回答回収／スコア集計", "研修修了看護師が監修"],
            },
            {
              step: "2",
              title: "個人結果フィードバック",
              items: ["受検者へ結果をメールで通知", "個人結果レポート", "看護師によるコメント付きフィードバック", "高ストレス者へのご案内"],
              note: "※高ストレス者は企業へ共有しません",
            },
            {
              step: "3",
              title: "集団分析レポート",
              items: ["集団分析・傾向レポート", "課題提案・改善提案", "集団報告書に向けた具体的なヒントをご提案"],
            },
          ].map((s) => (
            <div key={s.step} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#458bb7] text-white text-sm font-bold flex items-center justify-center mb-3">
                {s.step}
              </div>
              <h3 className="font-bold text-gray-800 mb-3 text-sm">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-xs">
                    <span className="text-[#458bb7] font-bold mt-0.5">・</span>{item}
                  </li>
                ))}
              </ul>
              {s.note && <p className="text-xs text-red-500 mt-3">{s.note}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* 料金 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">料金プラン</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 基本料金 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">料金プラン（税別）</h3>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 text-gray-600">基本料金</td>
                  <td className="py-3 text-right font-semibold text-gray-800">30,000円</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600">受験料</td>
                  <td className="py-3 text-right font-semibold text-gray-800">1名あたり 300円</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600">集団分析レポート</td>
                  <td className="py-3 text-right font-semibold text-gray-800">5,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 料金例 */}
          <div className="bg-[#eaf3f9] border border-[#458bb7]/20 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">料金例（60名の場合）</h3>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-[#458bb7]/10">
                <tr>
                  <td className="py-3 text-gray-600">基本料金</td>
                  <td className="py-3 text-right font-semibold text-gray-800">30,000円</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600">受験料（300円×60名）</td>
                  <td className="py-3 text-right font-semibold text-gray-800">18,000円</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-600">集団分析</td>
                  <td className="py-3 text-right font-semibold text-gray-800">5,000円</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-gray-800">合計</td>
                  <td className="py-3 text-right font-bold text-[#458bb7] text-lg">53,000円<span className="text-xs text-gray-500 ml-1">（税別）</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* こんな企業に */}
      <div className="mb-12 bg-[#f8fbfd] border border-blue-50 rounded-xl p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-5">こんな企業様におすすめです</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "法令対応としてストレスチェックを実施したい",
            "社員の健康維持を図りたい",
            "生産性の向上を図りたい",
            "働きやすい環境づくりをしたい",
            "健康経営の取り組みを始めたい",
            "離職率を下げたい",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#458bb7] flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
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
