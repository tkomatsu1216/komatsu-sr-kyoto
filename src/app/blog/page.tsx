import Link from "next/link";

export default function BlogIndexPage() {
  const posts = [
    {
      id: "start",
      title: "「成果があがる組織づくり、何からスタートしたらいい？」",
      date: "2023.08.13",
      category: "メルマガ",
      href: "/2023/08/13/start",
      excerpt: "小さな会社でも実践できる！組織づくり、人材育成に役立つ情報をお届けします！",
    },
    {
      id: "jinji",
      title: "育児・介護休業法の改正",
      date: "2020.12.04",
      category: "コラム",
      href: "/2020/12/04/jinji",
      excerpt: "育児・介護休業法の改正について、企業が対応すべきポイントを解説します。",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        ブログ
      </h1>
      
      <div className="mb-12">
        <p className="text-gray-700 text-center mb-8">
          小さな会社でも実践できる！組織づくり、人材育成に役立つ情報をお届けします！
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="mr-4">{post.date}</span>
              <span className="bg-[#458bb7] text-white px-2 py-0.5 rounded text-xs">
                {post.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              <Link href={post.href} className="hover:text-[#458bb7] transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-right">
              <Link href={post.href} className="text-[#458bb7] font-semibold hover:underline">
                続きを読む →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
