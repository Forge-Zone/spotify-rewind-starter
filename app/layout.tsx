import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Spotify Rewind | forge zone",
  description:
    "Spotify Rewind  allows you to visualize your Spotify listening history build by Forge.",

  // having a favicon for dark and light mode
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/black-icon.png",
        href: "/favicon/black-icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/white-icon.png",
        href: "/favicon/white-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
