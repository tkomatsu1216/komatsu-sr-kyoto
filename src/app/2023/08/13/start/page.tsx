import Link from "next/link";

export default function BlogStartPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-6">
        <Link href="/blog" className="text-[#458bb7] hover:underline">← ブログ一覧へ戻る</Link>
      </div>
      
      <article className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
        <header className="mb-8 border-b pb-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span className="mr-4">2023.08.13</span>
            <span className="bg-[#458bb7] text-white px-2 py-0.5 rounded text-xs">メルマガ</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            「成果があがる組織づくり、何からスタートしたらいい？」
          </h1>
        </header>
        
        <div className="prose max-w-none text-gray-700 leading-loose">
          <p>
            （※この記事は過去のブログ記事からの移行コンテンツです。）
          </p>
          <p>
            小さな会社でも実践できる！組織づくり、人材育成に役立つ情報をお届けします。
          </p>
          <p>
            成果が上がる組織を作るためには、まず「現状の可視化」から始めることが重要です。
            自社の強み・弱み、社員のモチベーションなどを把握した上で、適切な打ち手を考えることが近道となります。
          </p>
          <div className="my-8 p-6 bg-gray-50 border border-gray-200 rounded text-center">
            <h3 className="font-bold text-gray-800 mb-4">メルマガ登録のご案内</h3>
            <p className="text-sm text-gray-600 mb-4">
              組織づくりに役立つ情報を定期的に配信しています。
            </p>
            <Link href="/contact" className="inline-block px-6 py-2 bg-[#458bb7] text-white rounded font-medium hover:bg-[#3a769b]">
              メルマガに登録する（お問い合わせフォーム）
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
