import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Circle as XCircle,
  Wallet,
  Plane,
  FileText,
  Award,
  Briefcase,
  CalendarCheck,
  Check,
  ArrowRight,
  Calculator,
  IdCard,
  Users as UsersIcon,
  Stamp,
  Car,
  ShieldCheck,
} from 'lucide-react';

type Service = {
  name: string;
  path: string;
  icon: typeof XCircle;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    name: 'Company Liquidation',
    path: '/services/liquidation',
    icon: XCircle,
    description: 'Professional closure and deregistration of your company in full compliance.',
    features: [
      'Official company deregistration',
      'Visa and establishment card closure',
      'Audit report & clearance letters',
      'Full compliance with UAE laws',
    ],
  },
  {
    name: 'Corporate Bank Account',
    path: '/services/bank-account',
    icon: Wallet,
    description: 'Fast-track corporate bank account opening with leading UAE banks.',
    features: [
      'Partnerships with top UAE banks',
      'Fast-track approval process',
      'Multi-currency account options',
      'Dedicated banking assistance',
    ],
  },
  {
    name: 'Immigration & Registration',
    path: '/services/immigration',
    icon: Plane,
    description: 'Visa processing, Emirates ID, and medical fitness for you and your staff.',
    features: [
      'Investor & employee visa processing',
      'Emirates ID applications & renewals',
      'Medical fitness test coordination',
      'Family sponsorship support',
    ],
  },
  {
    name: 'Trade License',
    path: '/services/trade-license',
    icon: FileText,
    description: 'New license issuance, renewal, and activity amendment handled end-to-end.',
    features: [
      'New license issuance',
      'Annual license renewal',
      'Business activity amendments',
      'Partner & manager updates',
    ],
  },
  {
    name: 'UAE Golden Visa',
    path: '/services/golden-visa',
    icon: Award,
    description: 'Long-term 10-year residency for investors, entrepreneurs, and talent.',
    features: [
      '10-year long-term residency',
      'For investors, talents & entrepreneurs',
      'No local sponsor required',
      'Family and domestic staff sponsorship',
    ],
  },
  {
    name: 'PRO Services',
    path: '/pro-services',
    icon: Briefcase,
    description: 'We handle your company and government transactions from start to finish.',
    features: [
      'Government applications & approvals',
      'Document processing & clearance',
      'Government authority coordination',
      'Fast application follow-up',
    ],
  },
  {
    name: 'Monthly PRO Contract',
    path: '/monthly-contract',
    icon: CalendarCheck,
    description: 'Complete ongoing government support and transaction management.',
    features: [
      'Dedicated PRO Support',
      'Residency & Visa Support',
      'Trade License & MOHRE Support',
      'Deadline & Expiry Reminders',
    ],
  },
  {
    name: 'Emirates ID Services',
    path: '/emirates-id',
    icon: IdCard,
    description: 'Comprehensive support for all your Emirates identity card requirements.',
    features: [
      'New Emirates ID applications',
      'ID Renewal procedures',
      'Replacement of lost cards',
      'Fast application follow-up',
    ],
  },
  {
    name: 'MOHRE Services',
    path: '/mohre-services',
    icon: UsersIcon,
    description: 'Complete management of Ministry of Human Resources and labour files.',
    features: [
      'Work permits issuance',
      'Employment contracts',
      'Company labour file services',
      'Employee government procedures',
    ],
  },
  {
    name: 'GDRFA Services',
    path: '/gdrfa-services',
    icon: Stamp,
    description: 'Expert handling of all immigration, visa, and residency transactions.',
    features: [
      'Residence & Entry permits',
      'Visa services & stamping',
      'Residence renewal',
      'Visa cancellation',
    ],
  },
  {
    name: 'RTA Services',
    path: '/rta-services',
    icon: Car,
    description: 'Smooth processing of transport authority approvals and vehicle procedures.',
    features: [
      'RTA-related transactions',
      'Vehicle government procedures',
      'Commercial transport approvals',
      'Application follow-up',
    ],
  },
  {
    name: 'SIRA Services',
    path: '/sira-services',
    icon: ShieldCheck,
    description: 'Securing necessary safety and security approvals for your business premises.',
    features: [
      'SIRA applications',
      'CCTV & Security approvals',
      'NOC procedures',
      'Security licensing procedures',
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Services() {
  const featured = services.find((s) => s.path === '/monthly-contract')!;
  const rest = services.filter((s) => s.path !== '/monthly-contract');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-teal-500/5" />
        <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl font-bold text-white"
          >
            Our Corporate Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-teal-400"
          >
            Comprehensive business setup and corporate services tailored for your success in the UAE.
          </motion.p>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="text-center font-display text-3xl font-bold text-navy-900"
          >
            Our Corporate Services
          </motion.h2>

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-4xl"
          >
            <div className="group flex flex-col rounded-2xl border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-white p-8 shadow-lg shadow-teal-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-100 transition-colors duration-300 group-hover:bg-teal-200">
                  <featured.icon className="h-9 w-9 text-teal-500" strokeWidth={1.75} />
                </div>
                <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Featured
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
                {featured.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-500">
                {featured.description}
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {featured.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
                      <Check className="h-3.5 w-3.5 text-teal-600" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-navy-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={featured.path}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-3 text-base font-semibold text-navy-900 shadow-lg shadow-teal-500/25 transition-all duration-200 group-hover:shadow-xl group-hover:shadow-teal-500/40"
              >
                Learn More
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Remaining services grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((item) => (
              <motion.div
                key={item.path}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                  <item.icon className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {item.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100">
                        <Check className="h-3 w-3 text-teal-600" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-navy-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={item.path}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-300 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 transition-colors duration-200 group-hover:bg-teal-500 group-hover:text-white"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-display text-3xl font-bold text-white md:text-4xl"
          >
            Ready to start your business in Dubai?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8"
          >
            <Link
              to="/cost-calculator"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-navy-800 hover:shadow-xl"
            >
              <Calculator className="h-5 w-5" />
              Calculate Your Cost Now
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
