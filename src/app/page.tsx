import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  FileText,
  MessageSquare,
  Award,
  Target,
  Users,
  Network,
  Goal,
  BarChart3,
  Clock,
  ShieldCheck,
  Flame,
  HeartPulse,
} from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string; href: string }[] = [
  { icon: FileText, title: "就業規則見直し・作成", href: "/labor-consulting", desc: "就業規則の新規作成、法律改正対応、会社オリジナルの制度に対応した就業規則の作成をいたします。" },
  { icon: MessageSquare, title: "人事・労務相談", href: "/labor-consulting", desc: "こんな時はどうしたらいいのか？〜トラブル予防のためどうしておけばいいか？までご相談にのります。" },
  { icon: Award, title: "助成金の手続代行", href: "/labor-consulting", desc: "雇用関係の助成金の代行手続きをします。" },
  { icon: Target, title: "経営者コーチング", href: "/coaching", desc: "現状の整理や把握、ビジョン、社員をどう活かすか？などについて定期セッションを持つことで課題を把握し、速い決断と効果的な打ち手につながります。" },
  { icon: Users, title: "人材育成サービス", href: "/coaching", desc: "自律型社員の育成のお手伝いをします。" },
  { icon: Network, title: "組織開発・チームビルディング", href: "/coaching", desc: "社員の強みを活かし生産性が向上し続ける組織づくりをご支援します。" },
  { icon: Goal, title: "チームと個人の目標達成支援", href: "/coaching", desc: "目標設定やアクションプランのフォローをします。" },
  { icon: BarChart3, title: "診断ツールの提供", href: "/coaching", desc: "画期的な組織診断「ソコアゲ診断」で人材力・組織力・関係力が見える化、ハーマンモデルをベースにした「効き脳診断」で個人の強みを把握します。" },
  { icon: Clock, title: "自律分散型組織移行プログラム（DXO）", href: "/dxo", desc: "自律分散型組織移行プログラム（DXO）のワークショップ開催。社員が意思決定できるプログラム導入などを支援します。" },
  { icon: ShieldCheck, title: "ハラスメント防止サービス", href: "/anger-management", desc: "ハラスメント防止研修、ハラスメント規程作成、ハラスメント防止法への対応をサポートします。" },
  { icon: Flame, title: "アンガーマネジメント研修", href: "/anger-management", desc: "怒りの感情と上手に付き合うスキルを身につける研修をします。ハラスメントの行為者等への個人セッションも承っています。" },
  { icon: HeartPulse, title: "メンタルヘルスケアサービス", href: "/coaching", desc: "社員のモチベーション維持、メンタルダウン防止のため、カウンセリングサービスをします。" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[82vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
          alt="チームで協力するビジネスシーン"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c3a52]/90 via-[#23506e]/75 to-[#458bb7]/40" />

        <div className="relative z-10 container mx-auto px-6 md:px-8">
          <div className="max-w-2xl text-white">
            <p className="inline-block text-sm font-medium tracking-widest mb-5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              京都の社会保険労務士事務所
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-wide drop-shadow-sm">
              成果があがる組織づくり、<br className="hidden md:block" />
              何からはじめる？
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-xl">
              労務管理から人材育成・組織開発まで。社員の強みが活き、モチベーション高く働ける職場づくりを、京都の社労士が伴走してご支援します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/labor-consulting" className="px-7 py-3.5 bg-white text-[#23506e] font-semibold rounded-md shadow-lg hover:bg-gray-50 hover:-translate-y-0.5 transition-all">
                人事労務相談・就業規則
              </Link>
              <Link href="/coaching" className="px-7 py-3.5 bg-transparent text-white border border-white/70 font-semibold rounded-md hover:bg-white/10 transition-colors">
                コーチング・組織開発
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Concept Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="チームミーティングの様子"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-[#458bb7] mb-4">CONCEPT</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-snug">
                「人」の力で、<br />会社の未来をひらく。
              </h2>
              <p className="text-gray-600 leading-loose mb-5">
                変化の激しい時代に成果をあげ続けるには、「人材力」「組織力」「関係力」の3つをバランスよく高めることが欠かせません。
              </p>
              <p className="text-gray-600 leading-loose mb-8">
                当事務所は、労務管理の専門家としての確かな手続き対応に加え、コーチングやチームビルディングを通じて、社員一人ひとりの強みが活きる組織づくりを伴走支援します。
              </p>
              <Link href="/profile" className="inline-flex items-center gap-2 text-[#458bb7] font-semibold hover:gap-3 transition-all">
                代表プロフィールを見る
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#f6f9fb]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest text-[#458bb7] mb-3">SERVICE</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 relative inline-block pb-4">
              主なサービス
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#458bb7] rounded" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-white p-7 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#eaf3f9] flex items-center justify-center mb-5 group-hover:bg-[#458bb7] transition-colors">
                    <Icon className="w-7 h-7 text-[#458bb7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
          alt="明るいオフィス空間"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#23506e]/85" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">お問い合わせ・ご相談はこちらから</h2>
          <p className="text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            組織づくりや労務管理、研修などに関するご相談はお気軽にお問い合わせください。初回のご相談・お見積りは無料です。
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-[#23506e] font-bold rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300">
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </>
  );
}
