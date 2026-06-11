"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.message || "送信に失敗しました");
      }
    } catch (error: any) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage(error.message || "エラーが発生しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-[#458bb7] mb-8 text-center border-b pb-4">お問い合わせ</h1>
      
      <p className="mb-8 text-gray-700 leading-relaxed text-center">
        組織づくりや労務管理、各種研修に関するご相談はお気軽にお問い合わせください。<br />
        以下のフォームに必要事項をご入力の上、「送信する」ボタンをクリックしてください。
      </p>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center shadow-sm">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">送信完了</h2>
          <p>お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。</p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-6 px-6 py-2 bg-white border border-green-300 text-green-700 rounded-md hover:bg-green-50 transition-colors"
          >
            新しく送信する
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              お名前 <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#458bb7] focus:border-transparent"
              placeholder="山田 太郎"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
              会社名・組織名 <span className="text-gray-400 text-sm">（任意）</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#458bb7] focus:border-transparent"
              placeholder="株式会社〇〇"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              メールアドレス <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#458bb7] focus:border-transparent"
              placeholder="example@example.com"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              お問い合わせ内容 <span className="text-red-500 text-sm">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#458bb7] focus:border-transparent"
              placeholder="ご相談内容をご記入ください。"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className={`inline-flex items-center justify-center px-8 py-3 bg-[#458bb7] text-white font-bold rounded-md shadow-md hover:bg-[#3a769b] transition-colors w-full md:w-auto min-w-[200px] ${
                status === "loading" ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {status === "loading" ? (
                <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              {status === "loading" ? "送信中..." : "送信する"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
