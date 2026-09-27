import { CircleCheck as CheckCircle2, Circle as XCircle, Shield } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

const benefits = [
  {
    title: 'No Physical Office Required',
    description: 'Operate flexibly without the mandatory expense of leasing commercial space.',
  },
  {
    title: '100% Foreign Ownership',
    description: 'Retain full control over your freelance practice and earnings.',
  },
  {
    title: 'Residency Options',
    description: 'Eligible to apply for a UAE residence visa for yourself and sponsor eligible dependents.',
  },
  {
    title: 'Cost-Effective Setup',
    description: 'Significantly lower setup and renewal costs compared to standard corporate licenses.',
  },
  {
    title: 'Work with Multiple Clients',
    description: 'Legally provide services to both individuals and corporate entities across the UAE.',
  },
];

const limitations = [
  {
    title: 'Restricted Activities',
    description: 'Limited to specific professional and creative activities; not suitable for general trading.',
  },
  {
    title: 'No Employee Sponsorship',
    description: 'Cannot hire employees or sponsor staff visas under this license type.',
  },
];

export default function FreelanceLicenseAbuDhabi() {
  return (
    <ServiceLayout
      eyebrow="Business Setup Jurisdiction"
      title="Freelance License \u2013 Abu Dhabi"
      subtitle="Work independently in Abu Dhabi under an eligible freelance activity."
    >
      <article>
        <img
          src="/images/pages/about.jpg"
          alt="Freelance professional working independently in Abu Dhabi"
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          The Abu Dhabi Freelance License is designed for skilled professionals looking to work
          independently in the UAE. Issued by the Abu Dhabi Department of Economic Development
          (ADDED), it provides a flexible and cost-effective way to offer your specialized services
          without the overhead of renting a physical office.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Whether you are a consultant, designer, developer, or creative professional, this license
          legally empowers you to work with clients across the UAE. It is an ideal stepping stone
          for individuals aiming to establish their personal brand and build a client base in a
          thriving economic hub.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
          <p className="text-sm leading-relaxed text-navy-700">
            <span className="font-semibold text-navy-900">One residence visa</span> for the license
            holder. Family sponsorship available for eligible wife and children, subject to
            applicable requirements.
          </p>
        </div>

        <Tabs
          tabs={[
            {
              id: 'benefits',
              label: 'Key Benefits',
              content: (
                <ul className="space-y-4">
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
              ),
            },
            {
              id: 'limitations',
              label: 'Potential Limitations',
              content: (
                <ul className="space-y-4">
                  {limitations.map((l) => (
                    <li key={l.title} className="flex gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <div>
                        <p className="font-semibold text-navy-900">{l.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-navy-500">{l.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
          className="mt-10"
        />

        <StatsBar />
      </article>
    </ServiceLayout>
  );
}
