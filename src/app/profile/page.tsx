import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">プロフィール</h1>

      {/* 代表者紹介 */}
      <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="https://komatsusrkyoto.main.jp/wp-content/uploads/2021/05/%E5%B0%8F%E6%9D%BE%E9%BA%BB%E5%88%A9%E5%AD%90%E5%86%99%E7%9C%9F-1-683x1024.jpg"
              alt="小松麻利子"
              width={200}
              height={300}
              className="rounded object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">小松 麻利子 <span className="text-lg font-normal text-gray-600 ml-2">(Komatsu Mariko)</span></h2>
            <p className="text-[#458bb7] font-semibold mb-6">特定社会保険労務士 / 産業カウンセラー</p>

            <p className="text-gray-700 leading-relaxed">
              会社員、日本語教師を経て社会保険労務士事務所勤務後、平成20年小松社会保険労務士事務所開業。中小企業の労務管理支援、人材育成、チームビルディング（人材開発・組織開発）、ハラスメント防止対策など社員の強みが活きモチベーション高く働ける職場づくりを支援をしている。従業員10名未満から300名前後の中小企業への研修やコンサルティング等の支援実績多数。令和3年～イーリスハラスメントコンサルティング合同会社をパートナー社労士と共同経営、ハラスメント研修を多数実施、ハラスメント外部相談窓口は、中小企業から大企業まで継続してご依頼を頂いている。
            </p>
          </div>
        </div>
      </div>

      {/* 保有資格 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">保有資格</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>特定社会保険労務士</li>
          <li>産業カウンセラー</li>
          <li>最強のチームビルディング®コンサルタント</li>
          <li>DXOインストーラー</li>
          <li>アンガーマネジメントファシリテーター</li>
          <li>メンタルヘルス・マネジメント検定Ⅱ級</li>
          <li>コーチング資格（ALコーチ・マーコードモデル）</li>
          <li>医療労務コンサルタント</li>
          <li>ハラスメント防止コンサルタント</li>
          <li>イクメンコンサルタント</li>
          <li>JITCO外国人技能実習生制度講師資格</li>
        </ul>
      </div>

      {/* 講師・事業参画実績 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">講師・事業参画実績</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 leading-relaxed">
          <li>コンサル会社、弁護士事務所、司法書士事務所、印刷会社、美容室、飲食店、メーカー、旅館、電気工事組合、ソフトウェア会社、学習塾、建材商社、建築会社、福祉施設、美容商材製造卸会社等にてハラスメント及びチームビルディング研修講師</li>
          <li>京都府マザーズジョブカフェ・ハローワークにて「女性労働者向け社会保険・労働法基礎知識」講師</li>
          <li>ラボール学園「女性の働き方」「アンガーマネジメント講座」等講師</li>
          <li>市民向け講座・公的団体・企業でのセミナー講師多数</li>
          <li>京都府社会保険労務士会ワークサポート事業、NPO法人派遣による高校生・大学生向け「働くこと・生きること」授業講師</li>
          <li>京都府女性活躍推進・WLB支援事業、守口市働き方改革支援、滋賀県甲賀市イクボス事業等に参画</li>
          <li>厚生労働省育児プランナー</li>
        </ul>
      </div>

      {/* 事務所概要 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">事務所概要</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 bg-gray-50 w-1/3 font-semibold text-gray-700">事務所名</th>
                <td className="py-4 px-4 text-gray-600">小松社会保険労務士事務所</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">代表</th>
                <td className="py-4 px-4 text-gray-600">小松 麻利子（特定社会保険労務士）</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">所在地</th>
                <td className="py-4 px-4 text-gray-600">〒612-8437 京都市伏見区深草小久保町308</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">TEL</th>
                <td className="py-4 px-4 text-gray-600">080-6214-0097</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">FAX</th>
                <td className="py-4 px-4 text-gray-600">075-201-8724</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">Email</th>
                <td className="py-4 px-4 text-gray-600">marikokomatsukyo@gmail.com</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">対応地域</th>
                <td className="py-4 px-4 text-gray-600">京都府・大阪府・滋賀県・奈良県・兵庫県（主に関西エリア）<br />セミナー・コンサルティング講演は全国対応</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
