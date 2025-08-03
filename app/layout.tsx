import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Facebook - clone",
  description: "Facebook clone by @mohamed-montaser1 at github",
  keywords: [
    "facebook",
    "clone",
    "facebook clone",
    "facebook clone by mohamed montaser",
    "facebook clone by mohamed montaser at github",
  ],
  authors: [
    { name: "Mohamed Montaser", url: "https://github.com/mohamed-montaser1" },
  ],
  openGraph: {
    title: "Facebook - clone",
    description: "Facebook clone by @mohamed-montaser1 at github",
    url: "https://facebook-clone-mohamed-montaser1.vercel.app", // placeholder
    siteName: "Facebook - clone",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
