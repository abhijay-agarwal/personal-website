import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Abhijay Agarwal",
  description: "Abhijay Agarwal | UPenn M&T, Full-Stack Developer",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Abhijay Agarwal",
    description: "Abhijay Agarwal | UPenn M&T, Full-Stack Developer",
    images: [
      {
        url: "og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Abhijay Agarwal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijay Agarwal",
    description: "Abhijay Agarwal | UPenn M&T, Full-Stack Developer",
    images: ["og-preview.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
