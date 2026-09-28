import { CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

const benefits = [
  {
    title: 'Lower-Cost Solution',
    description: 'Highly affordable setup designed specifically to empower solo entrepreneurs.',
  },
  {
    title: 'No Physical Office Required',
    description: 'Completely legitimate operation from home without commercial leasing requirements.',
  },
  {
    title: 'Online Marketplaces',
    description: 'Sell through eligible online marketplaces such as Amazon and Noon, subject to platform and activity requirements.',
  },
  {
    title: 'Digital & Social Media Services',
    description: 'Ideal for providing consultancy, digital marketing, and professional online services.',
  },
  {
    title: 'Quick Setup',
    description: 'Streamlined approval process to get your business up and running rapidly.',
  },
];

const limitations = [
  {
    title: 'No Residence Visa Included',
    description: 'This license type does not provide residency visa eligibility.',
  },
  {
    title: 'No Physical Shop or Staff',
    description: 'Cannot open a physical shop or hire staff.',
  },
  {
    title: 'Trading Activity Restrictions',
    description: 'Commercial trading activities (selling physical goods) may have specific nationality restrictions depending on the issuing authority.',
  },
];

export default function ETraderLicense() {
  return (
    <ServiceLayout
      eyebrow="Business Setup Jurisdiction"
      title="E-Trader License - Dubai"
      subtitle="Start your online business with a lower-cost setup."
    >
      <article>
        <img
          src="/images/pages/page1.jpg"
          alt="Online entrepreneur managing an e-commerce business"
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          The E-Trader License is a specialized initiative aimed at supporting home-based
          businesses and digital entrepreneurs. It allows individuals to conduct business online,
          offering a regulated framework to sell services or products through social media and
          digital platforms without the need for a physical storefront.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          This setup is the perfect launchpad for startups, digital professionals, and online
          service providers looking for a low-cost entry into the UAE market. It ensures consumer
          confidence by giving your online business a legitimate, government-registered status.
        </p>

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
