import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#458bb7] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">小松社会保険労務士事務所</h3>
          <div className="space-y-2 text-sm md:text-base opacity-90">
            <p>〒612-8437</p>
            <p>京都市伏見区深草小久保町３０８</p>
            <p>TEL： 080-6214-0097</p>
            <p>FAX：075-201-8724</p>
            <p>email：marikokomatsukyo@gmail.com</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2 inline-block">メニュー</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm opacity-90">
            <li><Link href="/" className="hover:underline">ホーム</Link></li>
            <li><Link href="/profile" className="hover:underline">プロフィール</Link></li>
            <li><Link href="/fee" className="hover:underline">料金案内</Link></li>
            <li><Link href="/qa" className="hover:underline">よくあるご質問</Link></li>
            <li><Link href="/contact" className="hover:underline">お問い合わせ</Link></li>
            <li><Link href="/blog" className="hover:underline">ブログ</Link></li>
            <li><Link href="/labor-consulting" className="hover:underline">人事労務相談・就業規則</Link></li>
            <li><Link href="/stress-check" className="hover:underline">ストレスチェック</Link></li>
            <li><Link href="/team-buildingkikinou-sokoage" className="hover:underline">チームビルディング・利き脳診断</Link></li>
            <li><Link href="/coaching" className="hover:underline">コーチング・組織開発</Link></li>
            <li><Link href="/1on1" className="hover:underline">1on1研修</Link></li>
            <li><Link href="/dxo" className="hover:underline">DXO</Link></li>
            <li><Link href="/anger-management" className="hover:underline">アンガーマネジメント</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-white/20 text-center text-sm opacity-80">
        <p>&copy; {new Date().getFullYear()} 小松社会保険労務士事務所 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
