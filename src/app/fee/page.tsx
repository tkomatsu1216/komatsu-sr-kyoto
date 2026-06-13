import Link from "next/link";

export default function FeePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">料金案内</h1>

      <p className="text-gray-700 mb-10 text-center">
        当事務所の基本的な料金表です。実際の料金は、会社の規模やご依頼の内容によりお見積りいたしますので、まずはお気軽にご相談ください。
        <br />
        （表示はすべて税別です）
      </p>

      {/* 月額顧問契約 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">社会保険労務士業　月額顧問契約料金</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="bg-[#458bb7] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold border-b border-gray-200">従業員数</th>
                <th className="py-3 px-4 font-semibold border-b border-gray-200">月額（税別）</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-white">
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1〜5名</td>
                <td className="py-3 px-4">1.5万円</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">6〜10名</td>
                <td className="py-3 px-4">2.5万円</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">11〜20名</td>
                <td className="py-3 px-4">3.5万円</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">21〜30名</td>
                <td className="py-3 px-4">5万円</td>
              </tr>
              <tr>
                <td className="py-3 px-4">31名以上</td>
                <td className="py-3 px-4">別途協議</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg mt-6">
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            <span className="font-semibold text-gray-800">【顧問契約の業務内容】</span><br />
            人事労務相談、出勤簿・賃金台帳チェック、ハローワーク手続き、各保険の手続き、労災保険手続き、36協定作成、労働安全衛生法対応など
          </p>
          <div className="border-t border-gray-100 pt-4">
            <p className="font-semibold text-gray-800 mb-3">給与計算料金</p>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3">
              <span className="text-gray-700">顧問契約あり</span>
              <span className="font-bold text-[#458bb7]">1名 3,000円／月</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">顧問契約なし</span>
              <span className="font-bold text-[#458bb7]">1名 6,000円／月</span>
            </div>
          </div>
        </div>
      </div>

      {/* スポット業務 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">社労士業　スポット業務料金</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="bg-[#458bb7] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold border-b border-gray-200">業務内容</th>
                <th className="py-3 px-4 font-semibold border-b border-gray-200">顧問契約あり</th>
                <th className="py-3 px-4 font-semibold border-b border-gray-200">顧問契約なし</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-white">
              {[
                ["就業規則作成", "20万円", "25万円"],
                ["就業規則部分改定", "別途見積", "別途見積"],
                ["労働保険新規適用", "3万円〜", "5万円〜"],
                ["社会保険新規適用", "3万円〜", "5万円〜"],
                ["社会保険算定基礎届", "月次顧問報酬額", "従業員数により見積"],
                ["労働保険年度更新", "月次顧問報酬額", "従業員数により見積"],
                ["助成金申請代行", "成功報酬15%", "着手金2〜3万円・成功報酬25〜30%"],
                ["各種手続き代行", "1件1万円〜", "1件1万円〜"],
                ["人事労務相談", "0円", "1回8,000円"],
                ["行政機関調査立ち合い", "0円", "1時間3.5万円〜"],
                ["あっせん代理", "着手金0円", "着手金3万円"],
                ["老齢年金請求", "2万円〜", "2万円〜"],
              ].map((row, i, arr) => (
                <tr key={i} className={i < arr.length - 1 ? "border-b border-gray-200" : ""}>
                  <td className="py-3 px-4">{row[0]}</td>
                  <td className="py-3 px-4">{row[1]}</td>
                  <td className="py-3 px-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 人材育成・組織力向上支援 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">人材育成・組織力向上支援報酬</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="bg-[#458bb7] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold border-b border-gray-200">業務内容</th>
                <th className="py-3 px-4 font-semibold border-b border-gray-200">顧問契約あり</th>
                <th className="py-3 px-4 font-semibold border-b border-gray-200">顧問契約なし</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-white">
              {[
                ["経営者・幹部コーチング", "2〜5万円／回", "3〜6万円／回"],
                ["会議ファシリテーション", "別途見積", "別途見積"],
                ["目標設定コーチング（50分）", "8,000円／名", "10,000円／名"],
                ["アンガーマネジメント個人セッション（50分）", "8,000円／名", "10,000円／名"],
                ["アンガーマネジメントグループ", "3万円／回", "6万円／回"],
                ["各種研修", "3万円〜／30分", "6万円〜／30分"],
                ["リフレクションワークショップ", "3万円〜／回", "6万円〜／回"],
                ["効き脳診断", "3,000円／人", "3,000円／人"],
                ["アンガーマネジメント診断", "2,000円／人", "2,000円／人"],
                ["ソコアゲ診断（40名まで月額）", "2.5万円", "4万円"],
                ["ハラスメント相談窓口代行", "別途見積", "1ヶ月3万円〜"],
                ["メンタルヘルスカウンセリング（50分）", "8,000円／名", "10,000円／名"],
              ].map((row, i, arr) => (
                <tr key={i} className={i < arr.length - 1 ? "border-b border-gray-200" : ""}>
                  <td className="py-3 px-4">{row[0]}</td>
                  <td className="py-3 px-4">{row[1]}</td>
                  <td className="py-3 px-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 組織づくりコンサルティング */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">組織づくりコンサルティング</h2>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            「成長し成果が上がる組織づくり」のコンサルティングです。料金は上記の各種報酬表をベースにお見積りいたします。
            プロジェクトサポートの方法として、ソコアゲ診断、キックオフミーティング、チームビルディング研修、定例会立ち合い、コーチング、発表会サポートなどを提供しております。
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          無料見積り・ご相談はこちら
        </Link>
      </div>
    </div>
  );
}
