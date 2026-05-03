import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prețuri servicii SSM și PSI',
  description:
    'Abonamente SSM de la 5 lei / lucrător / lună. Prețul final depinde de numărul de angajați, domeniu și servicii necesare. Cere ofertă rapidă pe WhatsApp.',
}

const WA_LINK =
  'https://wa.me/40700000000?text=Buna%20ziua%2C%20as%20dori%20o%20oferta%20pentru%20servicii%20SSM.'

const factors = [
  { label: 'Numărul de angajați', desc: 'Cu cât sunt mai mulți angajați, cu atât prețul per lucrător poate fi mai mic.' },
  { label: 'Domeniul de activitate', desc: 'Activitățile cu risc ridicat (construcții, producție) necesită documentație mai amplă.' },
  { label: 'Serviciile necesare', desc: 'Poți opta pentru un pachet complet sau doar pentru anumite servicii specifice.' },
  { label: 'Locația firmei', desc: 'Serviciile din București și împrejurimi sunt incluse în abonament. Național - online sau cu deplasare.' },
]

const included = [
  'Evaluarea riscurilor profesionale',
  'Planul de prevenire și protecție',
  'Instruirea angajaților',
  'Documentație SSM completă',
  'Fișe de post cu riscuri',
  'Consultanță lunară',
  'Suport și răspuns la întrebări',
  'Reprezentare ITM (dacă este cazul)',
]

export default function PreturiPage() {
  return (
    <>
      <section className="bg-[#0A1628] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Prețuri și Ofertă</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prețuri transparente, fără costuri ascunse. Abonamente SSM adaptate dimensiunii și nevoilor companiei tale.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A1628] to-[#0D2048] rounded-2xl p-10 text-white text-center mb-12">
            <p className="text-sm font-medium text-[#00B6FF] uppercase tracking-wider mb-3">Prețul de pornire</p>
            <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00B6FF] mb-2">
              5 lei
            </div>
            <p className="text-xl font-medium text-gray-200 mb-4">/ lucrător / lună</p>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Acesta este prețul minim de pornire pentru abonamentul SSM. Prețul final este personalizat în funcție de firma ta.
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
              Primește ofertă rapidă pe WhatsApp
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h2 className="text-xl font-bold text-[#0A1628] mb-4">Ce influențează prețul?</h2>
              <div className="space-y-4">
                {factors.map((f) => (
                  <div key={f.label} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B6FF] mt-2 shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-[#0A1628]">{f.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-blue-50 border-blue-100">
              <h2 className="text-xl font-bold text-[#0A1628] mb-4">Ce include abonamentul?</h2>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#00B6FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-[#0A1628] mb-2 text-center">Cere ofertă personalizată</h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              Scrie-ne pe WhatsApp sau completează formularul și te contactăm noi.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Numele firmei"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00B6FF]"
              />
              <input
                type="text"
                placeholder="Număr angajați"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00B6FF]"
              />
              <input
                type="text"
                placeholder="Domeniu activitate"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00B6FF]"
              />
              <input
                type="tel"
                placeholder="Telefon / WhatsApp"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00B6FF]"
              />
            </div>
            <p className="text-xs text-gray-400 text-center mb-4">
              Formularul este vizual. Pentru ofertă rapidă, contactează-ne direct pe WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center"
              >
                Trimite pe WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
