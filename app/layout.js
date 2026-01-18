import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TrasitionProvider from "@/components/TrasitionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manish's portfolio",
  description: "Manish's Animated Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TrasitionProvider>{children}</TrasitionProvider>
      </body>
    </html>
  );
}
