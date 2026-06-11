export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">プロフィール</h1>

      <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 flex-shrink-0 overflow-hidden">
            <span className="text-sm">プロフィール画像</span>
            {/* 実際の画像に差し替えてください */}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">小松 麻利子 <span className="text-lg font-normal text-gray-600 ml-2">(Komatsu Mariko)</span></h2>
            <p className="text-[#458bb7] font-semibold mb-6">特定社会保険労務士 / キャリアコンサルタント</p>

            <p className="text-gray-700 leading-relaxed mb-6">
              京都府生まれ。大学卒業後、一般企業での人事・総務業務を経て、社会保険労務士試験に合格。
              労働問題の解決や就業規則の作成だけでなく、「人がいきいきと働ける組織づくり」をモットーに、
              チームビルディングやアンガーマネジメントを用いた研修・コンサルティングを行っています。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">保有資格</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>特定社会保険労務士</li>
          <li>国家資格 キャリアコンサルタント</li>
          <li>アンガーマネジメントファシリテーター</li>
          <li>ソコアゲ診断士 / 効き脳診断士</li>
        </ul>
      </div>

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
                <th className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">所在地</th>
                <td className="py-4 px-4 text-gray-600">〒612-8437 京都市伏見区深草小久保町３０８</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
