import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'NEBO SAFETY – Servicii SSM și PSI pentru companii',
    template: '%s | NEBO SAFETY',
  },
  description:
    'NEBO SAFETY oferă servicii SSM, PSI/SU, RSVTI/ISCIR și medicina muncii pentru firme din București și online național. Abonamente SSM de la 5 lei / lucrător / lună.',
  keywords: [
    'servicii SSM',
    'servicii PSI',
    'SSM București',
    'PSI București',
    'protecția muncii',
    'consultanță SSM',
    'externalizare SSM',
    'documentație SSM',
    'servicii SSM și PSI pentru firme',
    'RSVTI',
    'ISCIR',
    'medicina muncii',
  ],
  authors: [{ name: 'NEBO SAFETY' }],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'NEBO SAFETY',
    title: 'NEBO SAFETY – Servicii SSM și PSI pentru companii',
    description:
      'Servicii SSM, PSI/SU și protecția muncii pentru companii. Abonamente de la 5 lei / lucrător / lună.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body>
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
