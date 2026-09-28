import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

const benefits = [
  'New Emirates ID applications',
  'Renewal of existing IDs',
  'Replacement of lost or damaged cards',
  'Fast application follow-up',
];

export default function EmiratesId() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Emirates ID Services"
      subtitle="Comprehensive support for all your Emirates identity card requirements."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          The Emirates ID is a mandatory identity card for all UAE residents. We provide seamless
          assistance for new applications, renewals, and replacements, ensuring your ID is processed
          quickly and accurately without typing errors or delays.
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
