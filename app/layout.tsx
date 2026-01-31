import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contact us | Strug',
  description: 'Need to contact us?',
  robots: 'index, follow, noimageindex, nosnippet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="dc.title" content="Contact us | Strug" />
        <meta name="dc.description" content="Need to contact us?" />
      </head>
      <body>{children}</body>
    </html>
  )
}
