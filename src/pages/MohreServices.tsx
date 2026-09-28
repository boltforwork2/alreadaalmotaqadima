import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

const benefits = [
  'Processing work permits',
  'Drafting and attestation of employment contracts',
  'Labour-related transactions',
  'Company labour file setup and services',
  'Employee-related government procedures',
];

export default function MohreServices() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Ministry of Human Resources Services"
      subtitle="Complete management of Ministry of Human Resources and labour files."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          Managing labor relations and MOHRE compliance is critical for any business with employees.
          We efficiently handle your company's labor file, work permits, and employment contracts to
          keep your business fully compliant with UAE labor laws.
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
