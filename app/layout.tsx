import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Whatsapp from "./componants/Whatsapp";
import { siteMeta } from "@/seo.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.title}`,
  },
  description: siteMeta.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },  
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Premium Maids",
      image: siteMeta.image,
      telephone: siteMeta.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteMeta.address.street,
        addressLocality: siteMeta.address.locality,
        addressCountry: siteMeta.address.country,
      },
      url: siteMeta.url,
    }),
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
        <Whatsapp />
      </body>
    </html>
  );
}
