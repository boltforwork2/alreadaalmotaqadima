import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

const services = [
  'Power of Attorney (POA)',
  'Company Agreements',
  'MOA & Amendments',
  'Declarations & Undertakings',
  'Signature Attestation',
  'Legal Documents Notarization',
  'Civil & Commercial Agreements',
  'Affidavits & Declarations',
  'Translation & Notarization',
];

export default function NotaryServices() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Notary Public Services"
      subtitle="Fast and reliable notarization, attestation, and legal document services in the UAE."
    >
      <article>
        <img
          src="/images/pages/courts copy 2.jpg"
          alt="Dubai Courts building representing notary and legal document services"
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          Professional notary and attestation services are essential for legalizing your business
          and personal documents in the UAE. We provide expert, fast, and reliable support for
          drafting, attesting, and notarizing all legal documents to ensure your business
          operations remain fully compliant with UAE government regulations and judicial standards.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          Comprehensive Notary Services
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
              <span className="text-base leading-relaxed text-navy-600">{service}</span>
            </li>
          ))}
        </ul>
      </article>
    </ServiceLayout>
  );
}
