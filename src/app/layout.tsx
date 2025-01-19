import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import type { Metadata } from "next"
import { Source_Serif_4 } from "next/font/google"
import "./globals.css"

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Cast Press",
  description: "Cast Press",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
