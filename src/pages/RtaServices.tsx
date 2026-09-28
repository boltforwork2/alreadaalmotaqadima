import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

const benefits = [
  'RTA-related company transactions',
  'Vehicle-related government procedures',
  'Commercial transport approvals',
  'Fast application follow-up',
];

export default function RtaServices() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="RTA Services & Approvals"
      subtitle="Smooth processing of transport authority approvals and vehicle procedures."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          For businesses requiring commercial vehicles, delivery fleets, or transport-related
          approvals, dealing with the Roads and Transport Authority (RTA) is essential. We
          facilitate all RTA-related corporate transactions and NOCs.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">Key Benefits</h2>
        <ul className="mt-5 space-y-4">
          {benefits.map((b) => (
            <li key={b} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
              <span className="text-base leading-relaxed text-navy-600">{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </ServiceLayout>
  );
}
