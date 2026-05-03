import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Platforma NEBO SAFETY – în dezvoltare.',
  robots: { index: false, follow: false },
}

export default function DashboardPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 text-sm text-yellow-700 font-medium mb-4">
          În dezvoltare
        </div>
        <h1 className="text-2xl font-bold text-[#0A1628] mb-3">Dashboard SSM</h1>
        <p className="text-gray-500 text-sm mb-6">
          Această secțiune va fi disponibilă odată cu lansarea platformei online NEBO SAFETY.
        </p>
        <Link href="/" className="btn-primary justify-center">
          Înapoi la site
        </Link>
      </div>
    </div>
  )
}
