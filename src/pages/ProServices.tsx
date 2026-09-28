import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'End-to-End Processing',
    description: 'We manage government applications, document typing, and processing.',
  },
  {
    title: 'Authority Coordination',
    description: 'Seamless interaction with DED, MOHRE, GDRFA, and other municipal bodies.',
  },
  {
    title: 'Time & Cost Efficiency',
    description: 'Avoid fines, typing errors, and delays in your paperwork.',
  },
  {
    title: 'Company Transactions',
    description: 'Expert handling of company-related transactions, approvals, and NOCs.',
  },
  {
    title: 'Continuous Follow-up',
    description: 'We track your applications until final approval.',
  },
];

export default function ProServices() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Professional Government PRO Services"
      subtitle="We handle all your company's government transactions from start to finish, ensuring full compliance and eliminating administrative delays."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          Navigating government regulations in the UAE requires expertise. Our PRO services handle
          all your company's government transactions from start to finish, ensuring full compliance
          and eliminating administrative delays. We act as your dedicated government liaison.
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
