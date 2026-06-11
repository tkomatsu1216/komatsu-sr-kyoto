import Link from "next/link";

export default function FeePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">料金案内</h1>
      
      <p className="text-gray-700 mb-10 text-center">
        当事務所の基本的な料金表です。実際の料金は、会社の規模やご依頼の内容によりお見積りいたしますので、まずはお気軽にご相談ください。
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">顧問契約（労務相談＋手続代行）</h2>
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
                <td className="py-3 px-4">4名以下</td>
                <td className="py-3 px-4">20,000円〜</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">5〜9名</td>
                <td className="py-3 px-4">30,000円〜</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">10〜19名</td>
                <td className="py-3 px-4">40,000円〜</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">20〜29名</td>
                <td className="py-3 px-4">50,000円〜</td>
              </tr>
              <tr>
                <td className="py-3 px-4">30名以上</td>
                <td className="py-3 px-4">別途お見積り</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">就業規則作成・見直し</h2>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
            <span className="text-lg text-gray-800 font-semibold">就業規則 新規作成</span>
            <span className="text-xl font-bold text-[#458bb7]">150,000円〜</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
            <span className="text-lg text-gray-800 font-semibold">就業規則 見直し・改定</span>
            <span className="text-xl font-bold text-[#458bb7]">100,000円〜</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-800 font-semibold">各種規程（賃金・育児介護等）</span>
            <span className="text-xl font-bold text-[#458bb7]">各50,000円〜</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#458bb7] pl-4">研修・各種セッション</h2>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <p className="text-gray-700 mb-4">
            アンガーマネジメント研修、チームビルディング、経営者コーチングなどの料金については、
            受講人数や時間、内容によりカスタマイズいたしますので、別途お問い合わせください。
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
