import type { Metadata } from "next";
import "./globals.css";
import { SWRProvider } from '../providers/SWRProvider';
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/providers/HeroUIProvider";

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
      <body className="h-full m-0">
        <SWRProvider>
            <NuqsAdapter>
                <Providers>
                  <main>{children}</main>
                </Providers>
                <Toaster />
            </NuqsAdapter>
        </SWRProvider>
      </body>
    </html>
  );
}
