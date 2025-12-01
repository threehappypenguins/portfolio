import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "./components/navbar";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${arimo.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
