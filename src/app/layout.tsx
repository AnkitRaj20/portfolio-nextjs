import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav2";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankit Raj | FullStack Developer",
  description: "Portfolio of Ankit Raj, a FullStack Developer specializing in Next.js, React, and Node.js. View my projects and timeline.",
  openGraph: {
    title: "Ankit Raj | FullStack Developer",
    description: "Portfolio of Ankit Raj, a FullStack Developer specializing in Next.js, React, and Node.js. View my projects and timeline.",
    url: "https://ankit.dev", // Replace with actual URL
    siteName: "Ankit Raj Portfolio",
    images: [
      {
        url: "/images/mine2.jpg", // Ensure this image path is correct/public
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Raj | FullStack Developer",
    description: "Portfolio of Ankit Raj, a FullStack Developer specializing in Next.js, React, and Node.js.",
    images: ["/images/mine2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
