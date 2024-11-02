
import type { Metadata } from "next";
import PrelineScript from "./components/PrelineScript";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Portoflio",
  description: "Portofolio Shafiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/images/code.png" />
      <body
        className={`${poppins.className} antialiased bg-charcoal`}
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
