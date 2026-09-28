import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

const benefits = [
  'SIRA portal applications',
  'Security and CCTV approvals',
  'NOC procedures for specific business activities',
  'Security-related licensing procedures',
  'Application follow-up',
];

export default function SiraServices() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="SIRA Services & Approvals"
      subtitle="Securing necessary safety and security approvals for your business premises."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          The Security Industry Regulatory Agency (SIRA) regulates security compliance in Dubai. We
          assist businesses that require SIRA approvals, ensuring your commercial premises meet all
          CCTV licensing and security regulations.
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
