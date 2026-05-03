import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platforma Online SSM – În dezvoltare',
  description:
    'Platforma online NEBO SAFETY pentru managementul instruirii SSM a angajaților. În curs de dezvoltare.',
}

const WA_LINK =
  'https://wa.me/40700000000?text=Buna%20ziua%2C%20as%20dori%20sa%20aflu%20mai%20multe%20despre%20platforma%20online%20SSM.'

const features = [
  { icon: '👥', label: 'Gestionare angajați', desc: 'Evidența completă a angajaților și statusul instruirilor lor.' },
  { icon: '📚', label: 'Instruire online', desc: 'Module de instruire SSM și PSI accesibile de pe orice dispozitiv.' },
  { icon: '📄', label: 'Documente digitale', desc: 'Toate documentele SSM centralizate și ușor de accesat.' },
  { icon: '🔔', label: 'Notificări scadențe', desc: 'Alerte automate când expiră instruirile sau documentele.' },
]

export default function OnlinePage() {
  return (
    <>
      <section className="bg-[#0A1628] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-[#00B6FF] font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse" />
            În dezvoltare
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Platforma online{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#00B6FF]">
              NEBO SAFETY
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Pregătim o soluție digitală prin care companiile vor putea gestiona instruirea SSM a angajaților, documentele și statusul instruirilor într-un mod simplu și eficient.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Ce va include platforma</h2>
            <p className="text-gray-500">Funcționalitățile planificate pentru viitoarea platformă online.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {features.map((f) => (
              <div key={f.label} className="card text-center opacity-75 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
                  În curând
                </div>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-[#0A1628] mb-1">{f.label}</h3>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0A1628] rounded-2xl p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Ești interesat de platformă?</h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Înscrie-te în lista de așteptare sau contactează-ne pentru a afla când va fi disponibilă platforma.
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
