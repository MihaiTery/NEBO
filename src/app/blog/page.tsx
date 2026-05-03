import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog SSM și PSI',
  description:
    'Articole utile despre obligațiile SSM, PSI și protecția muncii pentru firme din România. Ghiduri practice și sfaturi de conformitate.',
}

const posts = [
  {
    slug: 'obligatii-ssm-firma-angajati',
    title: 'Ce obligații SSM are o firmă cu angajați?',
    excerpt:
      'Orice angajator are, conform legii, obligația de a asigura securitatea și sănătatea angajaților la locul de muncă. Descoperă ce presupune asta în practică: evaluarea riscurilor, documentația necesară, instruirile obligatorii și sancțiunile pentru neconformare.',
    category: 'SSM',
    readTime: '5 min',
    date: '15 aprilie 2025',
  },
  {
    slug: 'diferenta-ssm-psi',
    title: 'Diferența dintre SSM și PSI',
    excerpt:
      'SSM (Securitate și Sănătate în Muncă) și PSI (Prevenirea și Stingerea Incendiilor) sunt două domenii distincte, dar complementare. Află care sunt obligațiile specifice fiecăruia și de ce firma ta are nevoie de ambele pentru conformitate legală completă.',
    category: 'PSI',
    readTime: '4 min',
    date: '2 mai 2025',
  },
  {
    slug: 'riscuri-documentatie-ssm-neactualizata',
    title: 'Ce riști dacă nu ai documentația SSM la zi?',
    excerpt:
      'Lipsa documentației SSM sau documentele neactualizate pot atrage amenzi de la ITM, suspendarea activității sau chiar răspundere penală în cazul unui accident de muncă. Află care sunt riscurile reale și cum te poți proteja.',
    category: 'SSM',
    readTime: '6 min',
    date: '20 mai 2025',
  },
]

const categoryColors: Record<string, string> = {
  SSM: 'bg-blue-100 text-blue-700',
  PSI: 'bg-orange-100 text-orange-700',
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0A1628] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog SSM și PSI</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Informații utile despre obligațiile legale SSM, PSI și protecția muncii pentru antreprenori și manageri din România.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="card group hover:border-[#00B6FF] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-xs text-gray-400">· {post.readTime} lectură</span>
                </div>
                <h2 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#0066CC] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-[#0066CC] hover:underline inline-flex items-center gap-1"
                >
                  Citește articolul →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-[#0A1628] rounded-xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Ai întrebări specifice despre SSM?</h3>
            <p className="text-gray-400 text-sm mb-5">
              Contactează-ne direct pe WhatsApp și îți răspundem rapid la orice întrebare legată de obligațiile SSM ale firmei tale.
            </p>
            <a
              href="https://wa.me/40700000000?text=Buna%20ziua%2C%20am%20o%20intrebare%20despre%20SSM."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Întreabă pe WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
