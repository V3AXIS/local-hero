import type { Metadata, Viewport } from "next";
import {  Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "../components/providers";
import Header from "../components/header";


const inter = Inter({ subsets: ["latin"] });


export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};


export const metadata: Metadata = {
  title: "local-hero",
  description: "local-hero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} antialiased`}
      >
        <Providers>
          <div>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
