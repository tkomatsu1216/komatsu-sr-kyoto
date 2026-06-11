import Link from "next/link";

export default function BlogJinjiPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-6">
        <Link href="/blog" className="text-[#458bb7] hover:underline">← ブログ一覧へ戻る</Link>
      </div>
      
      <article className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
        <header className="mb-8 border-b pb-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span className="mr-4">2020.12.04</span>
            <span className="bg-[#458bb7] text-white px-2 py-0.5 rounded text-xs">コラム</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            育児・介護休業法の改正
          </h1>
        </header>
        
        <div className="prose max-w-none text-gray-700 leading-loose">
          <p>
            （※この記事は過去のブログ記事からの移行コンテンツです。）
          </p>
          <p>
            育児・介護休業法が改正され、企業には柔軟な働き方を促進するための環境整備が求められています。
            男性の育児休業取得促進や、育児・介護と仕事の両立支援に関する規定の見直しが必要です。
          </p>
          <p>
            就業規則の改定や、社内制度の周知など、対応に不安がある場合はお気軽にご相談ください。
          </p>
        </div>
      </article>
    </div>
  );
}
