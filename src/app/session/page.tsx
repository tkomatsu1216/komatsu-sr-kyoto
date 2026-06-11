import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function SessionPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        個人セッション
      </h1>
      
      <div className="mb-12">
        <p className="text-gray-700 leading-relaxed mb-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
          経営層の孤独な決断から、個人のキャリアの悩みまで。<br/>
          「対話」を通じて頭と心を整理し、次の一歩を踏み出すための1対1のセッションをご提供しています。
        </p>
      </div>

      <div className="mb-16 space-y-10">
        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-10">
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-[#458bb7] mb-2 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2" />
              経営者コーチング
            </h2>
            <p className="text-gray-500 font-medium">対象：経営者・役員・起業家</p>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 leading-relaxed mb-4">
              経営者は常に重大な決断を迫られており、誰かに相談しにくい孤独な立場にあります。
              定期的なコーチングセッションを通じて、経営課題の整理、ビジョンの明確化、
              社員とのコミュニケーション課題などについて対話し、思考の壁打ち相手となります。
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>会社の方向性やビジョンの再確認</li>
              <li>組織課題・人材課題の解決策の検討</li>
              <li>自身のリーダーシップスタイルの振り返り</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-10">
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-[#458bb7] mb-2 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2" />
              キャリアカウンセリング
            </h2>
            <p className="text-gray-500 font-medium">対象：ビジネスパーソン全般</p>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 leading-relaxed mb-4">
              国家資格キャリアコンサルタントとして、今後のキャリアパスや働き方の悩みについてカウンセリングを行います。
              「このままでいいのか不安」「自分の強みがわからない」といったモヤモヤを整理し、
              自分らしい働き方を見つけるサポートをします。
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>キャリアの棚卸しと強みの発見</li>
              <li>転職・独立の相談</li>
              <li>ワークライフバランスの相談</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#f8fbfd] p-8 rounded-lg text-center border border-blue-50">
        <h2 className="text-xl font-bold text-[#458bb7] mb-4">セッションのお申し込み</h2>
        <p className="text-gray-600 mb-6">
          セッションはオンライン（Zoom）または対面での実施が可能です。<br/>
          料金や日程の詳細については、以下よりお問い合わせください。
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
