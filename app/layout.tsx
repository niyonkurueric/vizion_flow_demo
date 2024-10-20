import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Vizionflow",
  description: "Visualize your data with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="autumn">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
