import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FEELY - Dein smartes Einkaufserlebnis',
  description: 'FEELY revolutioniert deinen Einkauf. Supermärkte, Hofläden, Gesundheitsanalysen und mehr in einer App. Spare Zeit, verstehe was du isst, lebe gesünder.',
  keywords: 'FEELY, Einkaufs-App, Supermarkt, Hofladen, Gesundheit, Ernährung, Allergien, Unverträglichkeiten, Budget, Lieferung, Deutschland',
  authors: [{ name: 'FEELY Team' }],
  openGraph: {
    title: 'FEELY - Dein smartes Einkaufserlebnis',
    description: 'Die All-in-One Plattform für bewussten Einkauf mit Gesundheitsfokus',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FEELY - Dein smartes Einkaufserlebnis',
    description: 'Die All-in-One Plattform für bewussten Einkauf mit Gesundheitsfokus',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
