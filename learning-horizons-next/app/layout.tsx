import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Horizons | Empowering Young Minds Through Quality Learning",
  description:
    "Learning Horizons creates engaging educational books for schools across India. Trusted by 500+ schools and 1 million students. Quality content, curriculum-aligned, student-centric.",
  keywords: [
    "educational books India",
    "school textbooks",
    "CBSE books",
    "ICSE books",
    "West Bengal school books",
    "computer science books",
    "English language books",
    "primary education",
    "secondary education",
    "Learning Horizons",
  ],
  authors: [{ name: "Learning Horizons" }],
  creator: "Learning Horizons",
  publisher: "Learning Horizons",
  openGraph: {
    title: "Learning Horizons | Empowering Young Minds",
    description: "Quality educational books for schools across India.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Horizons",
    description: "Empowering Young Minds Through Quality Learning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
