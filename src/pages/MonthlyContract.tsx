import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Dedicated PRO Support',
    description: 'A specialized team assigned to your company\u2019s continuous needs.',
  },
  {
    title: 'Residency & Visa Management',
    description: 'Full support for investor and employee visas, renewals, and cancellations.',
  },
  {
    title: 'MOHRE & Labour Services',
    description: 'Managing work permits, contracts, and labor files.',
  },
  {
    title: 'Trade License Support',
    description: 'Handling annual renewals, amendments, and updates seamlessly.',
  },
  {
    title: 'Special Approvals',
    description: 'Coordination for RTA, SIRA, and Municipality support.',
  },
  {
    title: 'Proactive Reminders',
    description: 'Automated deadline and expiry reminders to avoid penalties.',
  },
];

export default function MonthlyContract() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Monthly Corporate PRO Contract"
      subtitle="Let our expert team manage your complete government requirements on a monthly retainer, ensuring your business operations are never interrupted."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          Instead of handling every transaction separately, choose an ongoing PRO support contract.
          Let our expert team manage your complete government requirements on a monthly retainer.
          This ensures your business operations are never interrupted by expired documents or
          missed deadlines.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">Key Benefits</h2>
        <ul className="mt-5 space-y-4">
          {benefits.map((b) => (
            <li key={b.title} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
              <div>
                <p className="font-semibold text-navy-900">{b.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-navy-500">{b.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </ServiceLayout>
  );
}
