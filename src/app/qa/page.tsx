import Link from "next/link";

export default function QaPage() {
  const faqs = [
    {
      q: "Q1.社会保険労務士へ依頼するメリットは何ですか？",
      a: (
        <>
          <p className="font-semibold text-gray-800 mb-3">A1.専門家の知識、ノウハウを活用できます。</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            社会保険労務士は、「ひと」に関する人事・労務コンサルティングや労働・社会保険の事務代行を通じて、企業の健全な発展をお手伝いする唯一の国家資格者です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            労働・社会保険に関する法律や労働関連の法律は毎年改正を重ねております。労働者の意識も変わってきており、また雇用形態も様々になり、以前なら、トラブルにならなかったことも、労使トラブルになることが増えてきています。頻繁な法改正に迅速、適切に対応することはもちろん、従業員との不要なトラブルの防止、そして会社に必要な人材への育成サポートをお手伝いいたします。
          </p>
        </>
      ),
    },
    {
      q: "Q2.他の社労士事務所との違いは何ですか。",
      a: (
        <>
          <p className="font-semibold text-gray-800 mb-3">A2.コーチングで依頼者の「目指す組織、会社」への実現をサポートします。</p>
          <p className="text-gray-700 leading-relaxed">
            コーチングとは、対話によって問題解決や課題達成、目標の実現など、さまざまな課題を解決し、ビジョンや目標を具体的な「形」にしていくために、柔軟な思考と行動をサポートするための手法です。人や組織の可能性を開き、成長を支援するツールです。事業主さまの「こうなったら」という「理想」を明確にし、具体的な行動計画を立て、行動を支援します。
          </p>
        </>
      ),
    },
    {
      q: "Q３.手続き業務は自社でします。「労務相談」だけお願いできますか？",
      a: (
        <>
          <p className="font-semibold text-gray-800 mb-3">A３.もちろんです。</p>
          <p className="text-gray-700 leading-relaxed">
            労務相談全般を対応いたします。具体的な報酬額は、料金表に掲載していないため別途お見積りいたします。また、労務相談顧問契約をして頂くと、様々な研修やコーチングなどの料金が「顧問契約価格」になります。組織活性や変革に是非、活用ください。
          </p>
        </>
      ),
    },
    {
      q: "Q４.チームビルディングコンサルティングは具体的に役に立ちますか？",
      a: (
        <>
          <p className="font-semibold text-gray-800 mb-3">A４.はい。成果をあげられる組織になるために必要不可欠です。</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            変化の激しい予測がしにくいビジネス環境においては、益々、「人材力」（＝社員一人一人の能力）「組織力」（＝ビジョンや目的、制度や仕組み）「関係力」（＝コミュニケーション）の3つをバランス良く高めていくことが、成果をあげられる組織です。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            具体的な施策として、まずは御社の現状をトップヒアリング、社員アンケート、社員ヒアリング、「ソコアゲ診断」などを組み合わせてアセスメントさせていただき、どんな打ち手が良いかご提案いたします。
          </p>
          <p className="text-gray-700 leading-relaxed">
            小規模な事業所様では、経営者コーチングの定期セッションを持ちながら、必要な打ち手のご提案をし、随時必要な研修や社員コーチング、会議支援等をさせていただき、ビジョン実現のため伴走します。
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">よくあるご質問</h1>

      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#458bb7] px-6 py-4">
              <p className="text-white font-semibold text-lg">{faq.q}</p>
            </div>
            <div className="px-6 py-6">{faq.a}</div>
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
