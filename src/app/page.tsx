import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NEBO SAFETY – Servicii SSM și PSI pentru companii',
  description:
    'Servicii SSM și PSI pentru companii din București și online național. Abonamente SSM de la 5 lei / lucrător / lună. Cere ofertă rapidă pe WhatsApp.',
}

const WA_LINK =
  'https://wa.me/40700000000?text=Buna%20ziua%2C%20as%20dori%20o%20oferta%20pentru%20servicii%20SSM.'

const services = [
  {
    icon: '🛡️',
    title: 'Servicii SSM',
    desc: 'Evaluare riscuri, documentație completă, instruire angajați și suport permanent pentru conformitate SSM.',
  },
  {
    icon: '🔥',
    title: 'Servicii PSI / SU',
    desc: 'Planuri de evacuare, documentație PSI, instruire apărare împotriva incendiilor și audit de securitate la incendiu.',
  },
  {
    icon: '⚙️',
    title: 'RSVTI / ISCIR',
    desc: 'Responsabil cu supravegherea și verificarea tehnică a instalațiilor ISCIR. Autorizare și monitorizare echipamente.',
  },
  {
    icon: '🏥',
    title: 'Medicina Muncii',
    desc: 'Examinări medicale la angajare, periodice și la reluarea activității. Colaborare cu medici de medicina muncii autorizați.',
  },
  {
    icon: '🧯',
    title: 'Verificare Stingătoare',
    desc: 'Verificare, reîncărcare și întreținere stingătoare de incendiu conform normelor legale în vigoare.',
  },
  {
    icon: '📋',
    title: 'Instruire SSM și PSI',
    desc: 'Instruire introductiv-generală, la locul de muncă și periodică. Completare fișe de instruire și teste de verificare.',
  },
]

const benefits = [
  { icon: '📄', label: 'Documentație completă' },
  { icon: '💬', label: 'Consultanță specializată' },
  { icon: '⚡', label: 'Răspuns rapid' },
  { icon: '🗺️', label: 'București și online național' },
]

const reasons = [
  {
    title: 'Expertiză dovedită',
    desc: 'Specialiști certificați cu experiență în SSM și PSI pentru firme din toate domeniile de activitate.',
  },
  {
    title: 'Fără birocrație inutilă',
    desc: 'Gestionăm toată documentația necesară, astfel încât tu să te poți concentra pe afacerea ta.',
  },
  {
    title: 'Prețuri transparente',
    desc: 'Abonamente clare, fără costuri ascunse. Plătești doar pentru ce ai nevoie.',
  },
  {
    title: 'Suport continuu',
    desc: 'Suntem disponibili pentru întrebări, clarificări și urgențe pe toată durata contractului.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #00FFFF 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-[#00B6FF] font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse" />
              De la 5 lei / lucrător / lună
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Servicii SSM și PSI pentru companii,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00B6FF]">
                rapid și fără stres
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              NEBO SAFETY te ajută să respecți obligațiile legale în domeniul SSM, PSI/SU și protecția muncii, cu servicii clare, rapide și adaptate companiei tale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cere ofertă pe WhatsApp
              </a>
              <Link href="/servicii" className="btn-secondary text-base">
                Vezi serviciile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className="text-2xl">{b.icon}</span>
                <span className="text-sm font-medium text-gray-700">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Serviciile noastre</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Oferim soluții complete de SSM, PSI și protecția muncii pentru firme din orice domeniu de activitate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card group hover:border-[#00B6FF]">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#0066CC] hover:underline inline-flex items-center gap-1"
                >
                  Cere ofertă →
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/servicii" className="btn-primary">
              Toate serviciile
            </Link>
          </div>
        </div>
      </section>

      {/* Why NEBO */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">De ce NEBO SAFETY?</h2>
              <p className="section-subtitle mb-8">
                Suntem mai mult decât un furnizor de servicii SSM. Suntem partenerul care îți gestionează conformitatea legală astfel încât tu să nu ai griji.
              </p>
              <div className="space-y-6">
                {reasons.map((r) => (
                  <div key={r.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#00FFFF] to-[#00B6FF] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#0A1628] mb-1">{r.title}</h4>
                      <p className="text-sm text-gray-600">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A1628] rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00B6FF] mb-2">
                5 lei
              </div>
              <p className="text-lg font-medium mb-2">/ lucrător / lună</p>
              <p className="text-gray-400 text-sm mb-6">
                Prețul de pornire pentru abonament SSM. Prețul final depinde de numărul de angajați și serviciile necesare.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                Primește ofertă personalizată
              </a>
              <Link href="/preturi" className="block text-center text-sm text-gray-400 hover:text-white mt-3 underline">
                Vezi structura prețurilor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform teaser */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A1628] to-[#0D2048] rounded-2xl p-10 md:p-14 text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-[#00B6FF] font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse" />
              În dezvoltare
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platforma Online NEBO SAFETY</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              Pregătim o soluție digitală prin care companiile vor putea gestiona instruirea SSM a angajaților, documentele și statusul instruirilor, totul dintr-un singur loc.
            </p>
            <Link href="/online" className="btn-secondary">
              Află mai multe
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">Ai angajați? Ai nevoie de SSM și PSI.</h2>
          <p className="section-subtitle mb-8">
            Orice firmă cu angajați are obligații legale în materie de securitate și sănătate în muncă. Scrie-ne pe WhatsApp și primești o ofertă personalizată în cel mai scurt timp.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Scrie-ne pe WhatsApp pentru ofertă
          </a>
        </div>
      </section>
    </>
  )
}
