import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({
  variable: "--font-open-sans",
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
    <html lang="en" className={OpenSans.className}>
      <body>{children}</body>
    </html>
  );
}
