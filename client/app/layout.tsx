import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Navigation from "@/components/layout/Navigation";
import Wrapper from "@/components/common/Wrapper";

export const metadata: Metadata = {
 title: "yuki hashimoto",
 description: "yuki hashimoto's portfolio site",
 icons: [{ rel: "icon", url: "/images/profile.png" }],
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="ja">
   <body className={inter.className}>
    <Navigation />
    <Wrapper>{children}</Wrapper>
   </body>
  </html>
 );
}
