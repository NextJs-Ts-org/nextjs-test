import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/presentation/styles/layout.scss";
import "@/presentation/styles/typography.scss";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product feedback",
  description: "Testing Next.js features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.className}>
      <body>{children}</body>
    </html>
  );
}
