import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-gray-100 flex items-center justify-center overflow-hidden">
        {/* Simplified Hero Background (Replace with an actual Carousel if needed later) */}
        <div className="absolute inset-0 bg-[#458bb7] opacity-10"></div>
        <div className="z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide leading-tight">
            小松社会保険労務士事務所
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            成果があがる組織づくり、何からスタートしたらいい？<br/>
            京都の社労士が、あなたの会社の組織開発・人材育成をサポートします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/to-company" className="px-6 py-3 bg-[#458bb7] text-white font-semibold rounded-md shadow-md hover:bg-[#3a769b] transition-colors">
              法人・事業主の方へ
            </Link>
            <Link href="/service-guide" className="px-6 py-3 bg-white text-[#458bb7] border border-[#458bb7] font-semibold rounded-md shadow-sm hover:bg-gray-50 transition-colors">
              個人の方へ
            </Link>
          </div>
        </div>
      </section>

      {/* Services PR Blocks */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#458bb7] mb-12 relative pb-4">
            主なサービス
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#458bb7] rounded"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">就業規則見直し・作成</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                就業規則の新規作成、法律改正対応、会社オリジナルの制度に対応した就業規則の作成をいたします。
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">人事・労務相談</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                こんな時はどうしたらいいのか？～トラブル予防のためどうしておけばいいか？までご相談にのります。
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">助成金の手続代行</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                雇用関係の助成金の代行手続きをします。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">経営者コーチング</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                現状の整理や把握、ビジョン、社員をどう活かすか？などについて定期セッションを持つことで課題を把握し速い決断と効果的な打ち手につながります。
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">人材育成サービス</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                自律型社員の育成のお手伝いをします。
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">組織開発・チームビルディング</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                社員の強みを活かし生産性が向上し続ける組織づくりをご支援します。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">チームと個人の目標達成支援</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                目標設定やアクションプランのフォローをします。
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">診断ツールの提供</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                画期的な組織診断「ソコアゲ診断」で人材力・組織力・関係力が見える化、ハーマンモデルをベースにした「効き脳診断」で個人の強みを把握します。
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">働き方改革の支援</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ワークライフバランスの研修やワークライフバランス、働き方改革の導入のサポートをします。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 text-center">
              <h3 className="text-lg font-bold text-[#458bb7] mb-3 border-b border-[#458bb7] pb-2 inline-block">ハラスメント防止サービス</h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                ハラスメント防止研修、ハラスメント規程作成、ハラスメント防止法への対応をサポートします。
              </p>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-lg font-bold text-[#458bb7] mb-3 border-b border-[#458bb7] pb-2 inline-block">アンガーマネジメント研修</h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                怒りの感情と上手に付き合うスキルを身につける「アンガーマネジメント」研修をします。ハラスメントの行為者等にアンガーマネジメントセッションも承っています。
              </p>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-lg font-bold text-[#458bb7] mb-3 border-b border-[#458bb7] pb-2 inline-block">メンタルヘルスケアサービス</h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                社員のモチベーション維持、メンタルダウン防止のため、カウンセリングサービスをします。
              </p>
            </div>
          </div>

        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-[#f8fbfd] border-t border-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">お問い合わせ・ご相談はこちらから</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            組織づくりや労務管理、研修などに関するご相談はお気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-[#458bb7] text-white font-bold rounded-full shadow-lg hover:bg-[#3a769b] hover:-translate-y-1 transition-all duration-300">
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </>
  );
}
