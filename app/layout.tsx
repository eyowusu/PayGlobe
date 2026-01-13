import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payglobe - Revolutionizing Digital Finance in Africa',
  description: 'Payglobe Limited is a Ghanaian fintech company offering mobile money aggregation, electronic banking, merchant payments, remittance, and cross-border payment solutions.',
  keywords: 'fintech, mobile money, payments, remittance, Ghana, Africa, SikaRemit, digital banking',
  icons: {
    icon: '/payglobe-logo.jpeg',
    shortcut: '/payglobe-logo.jpeg',
    apple: '/payglobe-logo.jpeg',
  },
  openGraph: {
    title: 'Payglobe - Revolutionizing Digital Finance in Africa',
    description: 'Empowering individuals and communities through secure, efficient, and accessible financial transactions.',
    type: 'website',
    images: [
      {
        url: '/payglobe-logo.jpeg',
        width: 400,
        height: 400,
        alt: 'Payglobe Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
