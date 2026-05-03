import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00B6FF] mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-[#0A1628] mb-3">Pagina nu a fost găsită</h1>
        <p className="text-gray-500 mb-8">Pagina pe care o cauți nu există sau a fost mutată.</p>
        <Link href="/" className="btn-primary">
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  )
}
