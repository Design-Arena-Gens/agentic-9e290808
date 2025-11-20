import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faceless Video Affiliate - AI Video Generator",
  description: "Create engaging faceless videos with AI and earn through affiliate marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
