import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import { FacebookPixel } from "@/components/facebook-pixel"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Pintura ao vivo em casamentos | Thai Lago",
  description: "Transforme momentos especiais do seu casamento em obras de arte únicas com aquarela ao vivo. Pintura dos noivos e convidados. Arte em casamento em Salvador e região.",
  keywords: [
    "pintura ao vivo",
    "casamento",
    "aquarela",
    "pintura de casamento",
    "arte em casamento",
    "pintura dos noivos",
    "pintura ao vivo casamento",
    "aquarela casamento",
    "arte casamento Salvador",
    "pintura convidados casamento",
  ],
  authors: [{ name: "Thai Lago" }],
  creator: "Thai Lago",
  publisher: "Thai Lago",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thailago.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pintura ao vivo em casamentos | Thai Lago",
    description: "Transforme momentos especiais do seu casamento em obras de arte únicas com aquarela ao vivo",
    type: "website",
    locale: "pt_BR",
    siteName: "Thai Lago",
    images: [
      {
        url: "/about-thai-lago.png",
        width: 1200,
        height: 630,
        alt: "Thai Lago - Pintura ao vivo em casamentos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pintura ao vivo em casamentos | Thai Lago",
    description: "Transforme momentos especiais do seu casamento em obras de arte únicas com aquarela ao vivo",
    images: ["/about-thai-lago.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <FacebookPixel />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
