import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://blunt-technology.netlify.app/'),
  title: "BLUNT Technology — Built for Africa's next Founders.",
  description: "At BLUNT Technology, we don’t just teach tech — we build people, systems, and scalable digital solutions that shape the future of Africa.",
  openGraph: {
    title: "BLUNT Technology — Built for Africa's next Founders.",
    description: "At BLUNT Technology, we don’t just teach tech — we build people, systems, and scalable digital solutions that shape the future of Africa.",
    url: 'https://blunt-technology.netlify.app/',
    siteName: 'BLUNT Technology',
    images: [
      {
        url: 'image/preview.png',
        width: 1200,
        height: 630,
        alt: 'BLUNT Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: 'BLUNT Technology - Built for Africa\'s next Founders.',
    description: 'At BLUNT Technology, we don’t just teach tech — we build people, systems, and scalable digital solutions that shape the future of Africa.',
    images: ["/image/preview.png"], // same image as above
  },
  generator: "v0.app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
