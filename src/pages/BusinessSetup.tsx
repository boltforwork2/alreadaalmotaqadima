import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Globe as Globe2,
  ArrowRight,
  Calculator,
  Check,
  Briefcase,
  ShoppingCart,
} from 'lucide-react';

type Jurisdiction = {
  name: string;
  path: string;
  icon: typeof Building2;
  description: string;
  features: string[];
  buttonText: string;
};

const jurisdictions: Jurisdiction[] = [
  {
    name: 'Mainland License',
    path: '/mainland',
    icon: Building2,
    description: 'For businesses that want to operate directly in the UAE local market.',
    features: [
      'Physical office required',
      'Wide range of business activities',
      'Operate in the UAE local market',
      'Investor and employee visa options',
    ],
    buttonText: 'Learn More',
  },
  {
    name: 'Free Zone License',
    path: '/free-zone',
    icon: Globe2,
    description: 'Flexible company setup without a physical office under our available packages.',
    features: [
      'No physical office required',
      'Up to 10 investor visas depending on the Free Zone and selected package',
      'Import & Export activities',
      'Sell products online / E-Commerce',
    ],
    buttonText: 'Learn More',
  },
  {
    name: 'Freelance License \u2013 Abu Dhabi',
    path: '/freelance-license-abu-dhabi',
    icon: Briefcase,
    description: 'Work independently in Abu Dhabi under an eligible freelance activity.',
    features: [
      'No physical office required',
      'One residence visa for the license holder',
      'Family sponsorship available subject to requirements',
      'Suitable for consultants, designers, and developers',
    ],
    buttonText: 'Check Your Eligibility',
  },
  {
    name: 'E-Trader License',
    path: '/e-trader-license',
    icon: ShoppingCart,
    description: 'Start your online business with a lower-cost setup.',
    features: [
      'No physical office required',
      'No residence visa included',
      'Lower-cost solution',
      'Sell through eligible online marketplaces such as Amazon and Noon, subject to platform and activity requirements.',
    ],
    buttonText: 'Check Your Activity',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function BusinessSetup() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-teal-500/5" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wide text-teal-400"
          >
            UAE Company Formation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 font-display text-4xl font-bold text-white lg:text-5xl"
          >
            Business Setup in Dubai & UAE Company Formation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-teal-400"
          >
            Explore the best Setups for your company.
          </motion.p>
        </div>
      </section>

      {/* Jurisdiction grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="text-center font-display text-3xl font-bold text-navy-900"
          >
            Choose Your Best Setup
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {jurisdictions.map((item) => (
              <motion.div
                key={item.path}
                variants={cardVariants}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50">
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
                  {item.buttonText}
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
            Not sure which jurisdiction fits your business?
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
              Compare Costs Now
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
