import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const figTree = localFont({
  src: "./assets/fonts/Figtree-VariableFont_wght.ttf",
  variable: "--font-fig-tree",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Blog Preview Card",
  description: "This is a Figma design file for a Frontend Mentor challenge. Figma is a  design tool professional teams use to collaborate on projects. Need help  using Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figTree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
