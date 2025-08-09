import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "../components/theme/providers";
import Header from "@/components/header/Headers";


const inter = Inter({ subsets: ["latin"] });


export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};


export const metadata: Metadata = {
  title: "local hero",
  description: "The heart of your community. Connect with neighbors, discover local events, and help make your town a better place.",
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
            <Header />
            {children}
        </Providers>
      </body>
    </html>
  );
}
