import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";

import AOS from "@/app/_components/next-components/AOS.next";

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
      <body>
        <TRPCReactProvider>
          <AOS>{children}</AOS>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
