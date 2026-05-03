import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii SSM și PSI',
  description:
    'Servicii SSM, PSI/SU, RSVTI/ISCIR, medicina muncii, verificare stingătoare și instruire SSM/PSI pentru firme din București și online național.',
}

const WA_LINK =
  'https://wa.me/40700000000?text=Buna%20ziua%2C%20as%20dori%20o%20oferta%20pentru%20servicii%20SSM.'

const services = [
  {
    id: 'ssm',
    icon: '🛡️',
    title: 'Servicii SSM',
    subtitle: 'Securitate și sănătate în muncă',
    desc: 'Externalizarea serviciului de securitate și sănătate în muncă este soluția optimă pentru firmele care nu doresc să angajeze un specialist intern. NEBO SAFETY preia complet obligațiile legale SSM ale companiei tale.',
    benefits: [
      'Evaluarea riscurilor profesionale',
      'Elaborarea documentației SSM complete',
      'Instruirea introductiv-generală a angajaților',
      'Planul de prevenire și protecție',
      'Fișele de post cu riscuri specifice',
      'Reprezentare în relația cu ITM',
    ],
  },
  {
    id: 'psi',
    icon: '🔥',
    title: 'Servicii PSI / SU',
    subtitle: 'Prevenirea și stingerea incendiilor',
    desc: 'Conformitatea cu normele de apărare împotriva incendiilor este obligatorie pentru orice firmă. Specialiștii noștri elaborează toată documentația PSI necesară și asigură instruirea angajaților.',
    benefits: [
      'Documentație completă PSI/SU',
      'Planuri de evacuare și intervenție',
      'Instruire apărare împotriva incendiilor',
      'Audit de securitate la incendiu',
      'Semnalizare și marcare căi de evacuare',
      'Elaborare permise de lucru cu foc',
    ],
  },
  {
    id: 'rsvti',
    icon: '⚙️',
    title: 'RSVTI / ISCIR',
    subtitle: 'Responsabil cu supravegherea tehnică',
    desc: 'Dacă firma ta deține instalații sau echipamente supuse supravegherii ISCIR (lifturi, cazane, recipiente sub presiune, stivuitoare etc.), ai nevoie de un RSVTI autorizat. NEBO SAFETY pune la dispoziție specialiști autorizați.',
    benefits: [
      'Responsabil cu supravegherea tehnică (RSVTI) autorizat',
      'Monitorizare scadențe inspecții ISCIR',
      'Asistență la inspecțiile tehnice periodice',
      'Gestionarea registrelor și documentației ISCIR',
      'Consiliere privind conformitatea instalațiilor',
    ],
  },
  {
    id: 'medicina',
    icon: '🏥',
    title: 'Medicina Muncii',
    subtitle: 'Examinări medicale angajați',
    desc: 'Examinările medicale de medicina muncii sunt obligatorii pentru toți angajații. Colaborăm cu cabinete de medicina muncii autorizate pentru a-ți oferi o soluție completă și convenabilă.',
    benefits: [
      'Examinare medicală la angajare',
      'Control medical periodic',
      'Examinare la reluarea activității',
      'Fișe de aptitudine',
      'Coordonare cu medicul de medicina muncii',
    ],
  },
  {
    id: 'stingatoare',
    icon: '🧯',
    title: 'Verificare Stingătoare',
    subtitle: 'Întreținere și reîncărcare',
    desc: 'Stingătoarele de incendiu trebuie verificate și reîncărcate periodic conform normelor legale. Efectuăm verificări tehnice la sediul firmei tale și emitem documentele de confirmare.',
    benefits: [
      'Verificare tehnică conform normativelor',
      'Reîncărcare stingătoare',
      'Etichetare și marcare conformă',
      'Registru de evidență stingătoare',
      'Deplasare la sediul clientului',
    ],
  },
  {
    id: 'instruire',
    icon: '📋',
    title: 'Instruire SSM și PSI',
    subtitle: 'Formare și conștientizare angajați',
    desc: 'Instruirea angajaților în domeniul SSM și PSI este o obligație legală. Realizăm instruirile la sediul firmei tale sau online, cu completarea tuturor documentelor necesare.',
    benefits: [
      'Instruire introductiv-generală',
      'Instruire la locul de muncă',
      'Instruire periodică SSM',
      'Instruire PSI / apărare împotriva incendiilor',
      'Completare fișe de instruire',
      'Teste de verificare a cunoștințelor',
    ],
  },
]

export default function ServiciiPage() {
  return (
    <>
      <section className="bg-[#0A1628] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servicii SSM și PSI
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Soluții complete de securitate și sănătate în muncă pentru firme din orice domeniu. De la documentație la instruire, gestionăm totul pentru tine.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`card flex flex-col lg:flex-row gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h2 className="text-2xl font-bold text-[#0A1628] mb-1">{s.title}</h2>
                <p className="text-[#0066CC] font-medium text-sm mb-4">{s.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Cere ofertă pentru {s.title}
                </a>
              </div>
              <div className="lg:w-1/2 bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-[#0A1628] uppercase tracking-wider mb-4">
                  Ce include serviciul
                </h3>
                <ul className="space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#00B6FF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0A1628] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Nu ești sigur de ce servicii ai nevoie?
          </h2>
          <p className="text-gray-300 mb-6">
            Scrie-ne pe WhatsApp și îți spunem exact ce obligații are firma ta. Consultanța inițială este gratuită.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base"
          >
            Consultanță gratuită pe WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
