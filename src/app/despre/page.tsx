import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre NEBO SAFETY',
  description:
    'NEBO SAFETY – partenerul tău pentru conformitate SSM și PSI. Externalizare servicii SSM pentru firme din București și online național.',
}

const WA_LINK =
  'https://wa.me/40700000000?text=Buna%20ziua%2C%20as%20dori%20o%20oferta%20pentru%20servicii%20SSM.'

const values = [
  {
    icon: '🎯',
    title: 'Profesionalism',
    desc: 'Specialiști certificați cu experiență practică în domeniu, nu consultanți generaliști.',
  },
  {
    icon: '⚡',
    title: 'Rapiditate',
    desc: 'Documentație în timp scurt, răspuns rapid la solicitări și urgențe rezolvate prioritar.',
  },
  {
    icon: '✅',
    title: 'Conformitate',
    desc: 'Cunoaștem legislația SSM la zi și ne asigurăm că firma ta respectă toate cerințele legale.',
  },
  {
    icon: '🤝',
    title: 'Parteneriat',
    desc: 'Nu suntem doar un furnizor – suntem partenerul care înțelege nevoile specifice ale afacerii tale.',
  },
]

export default function DesprePage() {
  return (
    <>
      <section className="bg-[#0A1628] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Despre NEBO SAFETY
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Suntem specialiști în securitate și sănătate în muncă, apărare împotriva incendiilor și servicii conexe. Misiunea noastră este să simplificăm conformitatea legală pentru companii.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">Cine suntem</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  NEBO SAFETY este o firmă specializată în servicii de securitate și sănătate în muncă (SSM), apărare împotriva incendiilor (PSI/SU), RSVTI/ISCIR și medicina muncii. Ne adresăm companiilor care vor să respecte legislația în vigoare fără să se ocupe personal de această birocrație.
                </p>
                <p>
                  Am înțeles că micii și medii antreprenori nu au timp și resurse să angajeze un specialist SSM intern. De aceea, oferim externalizarea completă a acestor servicii la un preț corect, starting de la 5 lei pe lucrător pe lună.
                </p>
                <p>
                  Activăm în București și online la nivel național, ceea ce înseamnă că indiferent unde ești în România, poți beneficia de serviciile noastre.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="card text-center">
                  <div className="text-3xl mb-2">{v.icon}</div>
                  <h3 className="font-semibold text-[#0A1628] mb-1">{v.title}</h3>
                  <p className="text-xs text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6 text-center">Misiunea noastră</h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed mb-10">
            Să fim partenerul de încredere al oricărei companii din România în domeniul SSM și PSI, oferind servicii de calitate, la prețuri corecte, cu o comunicare directă și transparentă.
          </p>
          <div className="bg-[#0A1628] rounded-2xl p-8 text-white text-center">
            <p className="text-lg mb-6">
              „Orice firmă cu angajați are obligații SSM. Noi ne asigurăm că le respectați, fără stres și fără surprize."
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Contactează-ne pe WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
