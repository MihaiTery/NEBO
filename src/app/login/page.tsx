import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Autentificare',
  description: 'Autentifică-te în platforma NEBO SAFETY.',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0A1628] mb-2">Autentificare</h1>
          <p className="text-gray-500 text-sm">Platforma NEBO SAFETY – în dezvoltare</p>
        </div>
        <div className="card text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 text-sm text-yellow-700 font-medium mb-4">
            În dezvoltare
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Platforma online pentru managementul SSM este în curs de dezvoltare. Revino în curând sau contactează-ne.
          </p>
          <Link href="/" className="btn-primary justify-center w-full">
            Înapoi la site
          </Link>
        </div>
      </div>
    </div>
  )
}
