import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // Nodemailerのトランスポーター設定
    // 実際の運用時は環境変数からSMTPの認証情報を取得するようにします
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    // ユーザーへの自動返信メール
    const userMailOptions = {
      from: `"小松社会保険労務士事務所" <${process.env.SMTP_USER || "noreply@example.com"}>`,
      to: email,
      subject: "【小松社会保険労務士事務所】お問い合わせありがとうございます",
      text: `
${name} 様

この度は、小松社会保険労務士事務所にお問い合わせいただき誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

内容を確認次第、担当者よりご連絡いたしますので、今しばらくお待ちください。

--- お問い合わせ内容 ---
■ お名前：${name}
■ 会社名・組織名：${company || "未記入"}
■ メールアドレス：${email}

■ お問い合わせ内容：
${message}
-----------------------

※このメールは自動送信されています。
※お心当たりのない場合は、本メールは破棄していただきますようお願いいたします。

==============================
小松社会保険労務士事務所
〒612-8437 京都市伏見区深草小久保町308
Email：marikokomatsukyo@gmail.com
==============================
      `,
    };

    // 管理者宛の通知メール
    const adminMailOptions = {
      from: `"Webサイト お問い合わせフォーム" <${process.env.SMTP_USER || "noreply@example.com"}>`,
      to: "tkomatsu4work@gmail.com", // 暫定の送信先
      subject: `【Web問い合わせ】${name} 様より`,
      text: `
Webサイトのフォームから新しいお問い合わせがありました。

--- お問い合わせ内容 ---
■ お名前：${name}
■ 会社名・組織名：${company || "未記入"}
■ メールアドレス：${email}

■ お問い合わせ内容：
${message}
-----------------------
      `,
    };

    // 環境変数が設定されていない場合（開発中）は、送信せずに成功を返す（実際のメール送信はスキップ）
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP_USER or SMTP_PASS is not set. Skipping actual email sending.");
      console.log("Mock sending email to:", "tkomatsu4work@gmail.com");
      console.log("Content:", adminMailOptions.text);
      
      // テスト用に遅延を入れる
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      return NextResponse.json(
        { message: "お問い合わせを受け付けました（テスト環境のためメールは送信されていません）" },
        { status: 200 }
      );
    }

    // メール送信の実行
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json(
      { message: "お問い合わせを受け付けました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "メールの送信中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
