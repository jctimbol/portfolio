import "./globals.css";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "JAY TIMBOL",
  description: "Portfolio of Jay Timbol",
  openGraph: {
    title: "JAY TIMBOL",
    description: "Portfolio of Jay Timbol",
    images: [
      {
        url: "/share.png",
        width: 2400,
        height: 1262,
        alt: "Jay Timbol portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAY TIMBOL",
    description: "Portfolio of Jay Timbol",
    images: ["/share.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'history.scrollRestoration="manual";window.scrollTo(0,0);',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
