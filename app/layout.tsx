import "./globals.css";

import type { Metadata, Viewport } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { ENV } from "@/src/shared/constant/env";
import { Provider } from "@/src/app/initialize/provider";
import { Analytics } from "@vercel/analytics/react";

import { SUIT } from "@/src/app/style/font/SUIT";

export const metadata: Metadata = {
  title: "chat school",
  description: "by quokka crew",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 배포시 콘솔 지우기
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }

  return (
    <html lang="ko">
      <body className={SUIT.className}>
        <Provider>{children}</Provider>
        <GoogleAnalytics gaId={ENV.gaId} />
        <GoogleTagManager gtmId={ENV.gtmId} />
        <Analytics />
      </body>
    </html>
  );
}
