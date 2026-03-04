import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basil Thai Kitchen | Authentic Thai Food in Champaign, IL",
  description: "Experience the best authentic Thai cuisine at Basil Thai Kitchen in Champaign, IL. Fresh ingredients, traditional recipes, and easy online ordering for takeout and delivery.",
  keywords: ["Thai food Champaign IL", "Basil Thai Kitchen", "Champaign restaurants", "Pad Thai Champaign", "Takeout Champaign IL", "North Neil Street food"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Basil Thai Kitchen",
    "image": "https://basilthaikitchenil.com/hero.jpg",
    "description": "Authentic Thai restaurant located in Champaign, Illinois offering dine-in, takeout, and delivery.",
    "servesCuisine": "Thai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2000 N Neil St",
      "addressLocality": "Champaign",
      "addressRegion": "IL",
      "postalCode": "61820",
      "addressCountry": "US"
    },
    "telephone": "+1-217-000-0000",
    "openingHours": "Mo-Su 10:00-21:00"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-stone-50 text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
