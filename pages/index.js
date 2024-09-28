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
    <div >
        <iframe className=""
src="https://udify.app/chat/sTmEPXY76Ri2t1dD"
style={{ width: "100%", height: "100%", minHeight: "800px" }}
          frameBorder="0"
          allow="microphone"
        ></iframe>
    </div>
  );
}
