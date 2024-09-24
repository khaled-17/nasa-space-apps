import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [showIframe, setShowIframe] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // للتحكم في تأثير الاختفاء

  useEffect(() => {
    // مؤقت لبدء التأثير بعد 5 ثوانٍ
    const timer = setTimeout(() => {
      setFadeOut(true); // بدء تأثير الاختفاء
      setTimeout(() => {
        setShowIframe(true); // إظهار الـ iframe بعد الاختفاء
      }, 100); // مدة الاختفاء (1 ثانية)
    }, 500); // مدة العرض (5 ثوانٍ)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!showIframe ? (
        <div
          className={`bg-white h-screen w-screen flex flex-col items-center justify-center transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
           <Image className="m-4 p-9" src="/first_img.png" width={300} height={300} />
           <div className="loader mt-4 animate-pulse text-lg text-gray-600">Loading...</div>
        </div>
      ) : (
        <iframe
          src="https://udify.app/chatbot/ZTRcBBe68IovALiF"
          style={{ width: "100%", height: "100%", minHeight: "700px" }}
          frameBorder="0"
          allow="microphone"
        ></iframe>
      )}
    </div>
  );
}
