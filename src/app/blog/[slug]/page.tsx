import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const WA_LINK =
  'https://wa.me/40700000000?text=Buna%20ziua%2C%20as%20dori%20o%20oferta%20pentru%20servicii%20SSM.'

const posts: Record<string, { title: string; date: string; category: string; content: string }> = {
  'obligatii-ssm-firma-angajati': {
    title: 'Ce obligații SSM are o firmă cu angajați?',
    date: '15 aprilie 2025',
    category: 'SSM',
    content: `
Conform Legii nr. 319/2006 privind securitatea și sănătatea în muncă, orice angajator are obligația de a lua toate măsurile necesare pentru protejarea securității și sănătății angajaților.

**Principalele obligații SSM ale unui angajator:**

1. **Evaluarea riscurilor profesionale** – Identificarea pericolelor și evaluarea riscurilor la locul de muncă este primul pas obligatoriu.

2. **Elaborarea documentației SSM** – Planul de prevenire și protecție, instrucțiunile proprii de securitate, fișele de post cu riscuri specifice.

3. **Instruirea angajaților** – Instruire introductiv-generală la angajare, instruire la locul de muncă și instruire periodică.

4. **Dotarea cu echipamente de protecție** – Angajatorul este obligat să asigure echipamentul individual de protecție (EIP) acolo unde este necesar.

5. **Supravegherea sănătății** – Examinări medicale de medicina muncii la angajare, periodice și la reluarea activității.

**Sancțiuni pentru neconformare:**

- Amenzi contravenționale de la 4.000 lei la 8.000 lei per abatere
- Suspendarea activității în cazuri grave
- Răspundere penală dacă are loc un accident de muncă din cauza nerespectării normelor SSM

**Concluzie:**

Nu lăsa SSM-ul pe ultimul loc. Costul unui abonament SSM este mult mai mic decât o amendă sau consecințele unui accident de muncă.
    `,
  },
  'diferenta-ssm-psi': {
    title: 'Diferența dintre SSM și PSI',
    date: '2 mai 2025',
    category: 'PSI',
    content: `
Mulți antreprenori confundă SSM cu PSI sau cred că sunt același lucru. În realitate, sunt două domenii distincte, reglementate de legi diferite, dar ambele obligatorii.

**SSM – Securitate și Sănătate în Muncă**

SSM vizează protejarea angajaților față de accidente de muncă și boli profesionale. Este reglementat de Legea nr. 319/2006 și se referă la:
- Condițiile de muncă
- Echipamentele de protecție
- Instruirea angajaților
- Evaluarea riscurilor

**PSI – Prevenirea și Stingerea Incendiilor**

PSI (sau SU – Situații de Urgență) vizează prevenirea și stingerea incendiilor. Este reglementat de Legea nr. 307/2006 și se referă la:
- Documentația de apărare împotriva incendiilor
- Planuri de evacuare
- Instruire PSI
- Echipamentele de stingere

**Ce au în comun?**

Ambele sunt obligatorii pentru orice firmă cu angajați. Nerespectarea atrage amenzi similare și pot fi verificate de inspectori diferiți (ITM pentru SSM, ISU pentru PSI).

**Recomandare:**

Externalizează ambele servicii la același furnizor pentru o abordare integrată și o comunicare simplă.
    `,
  },
  'riscuri-documentatie-ssm-neactualizata': {
    title: 'Ce riști dacă nu ai documentația SSM la zi?',
    date: '20 mai 2025',
    category: 'SSM',
    content: `
Documentația SSM nu este un moft birocratic. Este baza legală care demonstrează că ai luat toate măsurile necesare pentru protejarea angajaților tăi.

**Riscuri concrete:**

**1. Amenzi ITM**
Inspectorii de muncă pot controla firma ta oricând. Dacă documentația SSM lipsește sau este neactualizată, amendă minimă este de 4.000 lei pe abatere.

**2. Suspendarea activității**
În cazuri grave (lipsă totală a evaluării riscurilor, lipsa instruirilor), ITM poate suspenda activitatea până la remedierea problemelor.

**3. Accident de muncă – răspundere penală**
Dacă are loc un accident de muncă și documentația SSM nu este la zi, angajatorul poate fi acuzat de vătămare corporală din culpă sau, în cazuri extreme, de ucidere din culpă.

**4. Probleme cu asigurătorul**
Unele asigurări de răspundere civilă a angajatorului pot refuza acoperirea daunelor dacă obligațiile SSM nu au fost respectate.

**Cât costă să fii în regulă?**

Un abonament SSM complet pornește de la 5 lei / lucrător / lună – mai puțin decât o cafea pe zi pentru întreaga firmă.

**Concluzie:**

Riscul neconformității este mult mai mare decât costul unui abonament SSM. Acționează acum.
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.content.slice(0, 160).replace(/\*\*/g, '').trim(),
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) notFound()

  const lines = post.content.trim().split('\n')

  return (
    <>
      <section className="bg-[#0A1628] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-[#00B6FF] text-sm hover:underline mb-4 inline-block">
            ← Înapoi la Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            {lines.map((line, i) => {
              if (!line.trim()) return <div key={i} className="h-3" />
              if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
                return <h3 key={i} className="text-lg font-bold text-[#0A1628] mt-6 mb-2">{line.slice(2, -2)}</h3>
              }
              if (/^\d+\./.test(line)) {
                const text = line.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')
                return <p key={i} className="text-gray-700 leading-relaxed ml-4">• {text}</p>
              }
              const rendered = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              return <p key={i} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: rendered }} />
            })}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-[#0A1628] mb-2">Vrei să fii în regulă cu SSM-ul?</h3>
            <p className="text-gray-600 text-sm mb-5">
              Contactează-ne pe WhatsApp și primești o ofertă personalizată în câteva minute.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Cere ofertă pe WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
