import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'history.scrollRestoration="manual";window.scrollTo(0,0);' }} />

      </head>
      <body>{children}</body>
    </html>
  );
}
