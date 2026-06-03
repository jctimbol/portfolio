import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaytimbol.tech"),
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
