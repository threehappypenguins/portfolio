import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Sarah Poulin",
  description:
    "Welcome to my portfolio. Check out my latest projects! | Full Stack Dev",
  icons: {
    icon: [
      { rel: "icon", url: "favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "favicon-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "favicon-512x512.png", sizes: "512x512" },
    ],
    apple: [{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Sarah Poulin",
    description:
      "Welcome to my portfolio. Check out my latest projects! | Full Stack Dev",
    url: "https://sarahpoulin.ca",
    siteName: "Sarah Poulin Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarah Poulin Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Poulin",
    description:
      "Welcome to my portfolio. Check out my latest projects! | Full Stack Dev",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${arimo.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
