import Image from "next/image";
import Link from "next/link";
import { Users, BrainCircuit, BarChart3 } from "lucide-react";

export default function TeamBuildingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-[#458bb7] mb-12 text-center border-b pb-6">
        チームビルディングと利き脳診断・ソコアゲ診断
      </h1>
      
      <div className="mb-12">
        <p className="text-gray-700 leading-relaxed mb-6">
          「社員のモチベーションが上がらない」「チームの連携がうまくいっていない」など、
          組織やチームに関するお悩みはありませんか？当事務所では、客観的なデータに基づくアプローチで、
          強いチーム作りをサポートします。
        </p>
      </div>

      <div className="space-y-12 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
            <Users className="w-10 h-10 text-[#458bb7]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">チームビルディング研修</h2>
            <p className="text-gray-600 leading-relaxed">
              単なる仲良しグループではなく、お互いの強みや弱みを理解し、目標達成に向けて協力できる
              「成果を出すチーム」へと導くための実践的な研修プログラムを提供します。
              コミュニケーションの活性化や、心理的安全性の構築など、組織の課題に合わせたカスタマイズが可能です。
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
            <BrainCircuit className="w-10 h-10 text-[#458bb7]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">利き脳診断（ハーマンモデル）</h2>
            <p className="text-gray-600 leading-relaxed">
              利き手と同じように、脳にも「効き脳（思考のクセ）」があります。
              全米で開発された「ハーマンモデル」をベースにした診断ツールを使用し、
              社員一人ひとりの強みやコミュニケーションの傾向を見える化します。
              自己理解・他者理解を深めることで、チームの連携が劇的に改善します。
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
            <BarChart3 className="w-10 h-10 text-[#458bb7]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ソコアゲ診断</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              組織の「現状」を数値化し、目に見えない課題を明らかにする画期的な組織診断ツールです。
              人材力・組織力・関係力の3つの観点から組織の状態を分析し、
              どこに手を打てば組織が良くなるのか、具体的なアクションプランの策定に役立てます。
            </p>
            <div className="mt-4">
              <Image
                src="/sokoa-ge-diagram.png"
                alt="組織強化に必須の3つの視点で見える化 — 人材力・組織力・関係力のスパイラル図"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg border border-gray-100 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8fbfd] p-8 rounded-lg text-center border border-blue-50">
        <h2 className="text-xl font-bold text-[#458bb7] mb-4">診断や研修のご相談・お見積り</h2>
        <p className="text-gray-600 mb-6">
          会社規模や目的に合わせた最適なプランをご提案します。まずは現状のお悩みをお聞かせください。
        </p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md hover:bg-[#3a769b] transition-colors">
          お問い合わせはこちら
        </Link>
      </div>
    </div>
  );
}
