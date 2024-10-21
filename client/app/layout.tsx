import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Wrapper from "@/components/common/Wrapper";

export const metadata: Metadata = {
  title: "yuki hashimoto",
  description: "yuki hashimoto's portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
