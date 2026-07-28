import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav2";
import Footer from "@/components/Footer";
import { readContent } from "@/lib/json-cms";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ankitcodes.tech"),
  title: {
    default: "Ankit Raj | FullStack Developer & Node.js Specialist",
    template: "%s | Ankit Raj",
  },
  description: "Portfolio of Ankit Raj, a FullStack Developer specializing in Node.js, Next.js, and System Architecture. View my projects and timeline.",
  keywords: [
    "Ankit Raj",
    "FullStack Developer",
    "Node.js",
    "Next.js",
    "System Architect",
    "React",
    "Best Backend Developer",
    "Top Node.js Developer",
    "Backend Architecture",
    "API Developer",
    "Web Development",
    "Software Engineer"
  ],
  authors: [{ name: "Ankit Raj", url: "https://ankitcodes.tech" }],
  creator: "Ankit Raj",
  verification: {
    google: "cDbZEv9CfOg3T0aRalC9l6tJV01kHVxZWLPix4-0FL4",
  },
  openGraph: {
    title: "Ankit Raj | FullStack Developer",
    description: "Portfolio of Ankit Raj, a FullStack Developer specializing in Node.js, Next.js, and System Architecture. View my projects and timeline.",
    url: "https://ankitcodes.tech",
    siteName: "Ankit Raj Portfolio",
    images: [
      {
        url: "/images/mine2.jpg", // Ensure this image path is correct/public
        width: 800,
        height: 600,
        alt: "Ankit Raj Portfolio Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Raj | FullStack Developer",
    description: "Portfolio of Ankit Raj, a FullStack Developer specializing in Node.js, Next.js, and System Architecture.",
    images: ["/images/mine2.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await readContent();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav navbarData={content?.navbar} />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
