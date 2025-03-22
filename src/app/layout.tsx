import type { Metadata } from "next";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import Header from "@/components/Header";
import { SWRProvider } from '../providers/SWRProvider';
import { NuqsAdapter } from "nuqs/adapters/next/app";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <SWRProvider>
          <HeroUIProvider>
            <NuqsAdapter>
              <Header />
              <main className="">{children}</main>
            </NuqsAdapter>
          </HeroUIProvider>
        </SWRProvider>
      </body>
    </html>
  );
}
