import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";

import AOS from "@/app/_components/next-components/AOS.next";
import CSSVaraibles from "../../tailwind/plugins";
import { GoogleAnalytics } from "@next/third-parties/google";
export const metadata = {
  title: "Mothmankiller",
  description: "Bringing back the 00s sound. SOFIA | BULGARIA",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">{CSSVaraibles}</style>
        <GoogleAnalytics gaId="G-9XF47FL1PM" />
      </head>
      <body>
        <TRPCReactProvider>
          <AOS>{children}</AOS>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
