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

            <p className="text-gray-700 leading-relaxed mb-4">
              出身：愛知県。愛知県立時習館高校卒業、南山短期大学卒業、立命館大学卒業。デンソー勤務後、日本語教育能力検定試験に合格し外国人に日本語を教える日本語教師に。その後、社会保険労務士試験合格。京都市、大阪府、米国・フロリダ州などに転居後、現在京都市在住。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              社労士事務所勤務後、平成20年開業。平成24年特定社会保険労務士付記。長年労働局や自治体の労働相談所で労働者・使用者からの労働相談に従事し、延べ5,000件以上の相談に対応、労使トラブル解決支援に携わる。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              法律からのアプローチだけでなく心理的面からのサポートを目指し、産業カウンセラー、日本アンガーマネジメント協会各資格、コーチング等を取得。メンタルヘルス・モチベーション維持・目標達成支援を実施。アンガーマネジメントファシリテーターとして講座開講・ハラスメント防止・コミュニケーション向上研修を実施。
            </p>
            <p className="text-gray-700 leading-relaxed">
              事業主様への労務サポートとチームビルディング支援で会社ビジョン実現をサポート。個人向けには現在の問題・課題・困難さの解決支援を実施。セミナー講師経験多数で、わかりやすい説明が得意。
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
          <li>京都府マザーズジョブカフェ・ハローワークにて「女性労働者向け社会保険・労働法基礎知識」講師</li>
          <li>ラボール学園「女性の働き方」「アンガーマネジメント講座」等講師</li>
          <li>市民向け講座・公的団体・企業でのセミナー講師多数</li>
          <li>京都府社会保険労務士会ワークサポート事業、NPO法人派遣による高校生・大学生向け「働くこと・生きること」授業講師</li>
          <li>合同会社WLBC関西受託の京都府女性活躍推進・WLB支援事業、守口市働き方改革支援、滋賀県甲賀市イクボス事業等に参画</li>
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
                <td className="py-4 px-4 text-gray-600">京都府・大阪府・滋賀県・奈良県・兵庫県（主に関西エリア）<br />セミナー・講演は全国対応</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
