import { motion } from 'framer-motion';
import {
  Headset,
  Stamp,
  FileText,
  Briefcase,
  ShieldCheck,
  CircleCheck,
  FileCheck,
  CalendarClock,
  RefreshCw,
  Check,
  ArrowRight,
  Crown,
  Users,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import ConsultationForm from '@/components/ConsultationForm';

/* ------------------------------------------------------------------ */
/* Benefits data                                                      */
/* ------------------------------------------------------------------ */

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Headset,
    title: 'Dedicated PRO Support',
    description: 'A specialized team for your ongoing needs.',
  },
  {
    icon: Stamp,
    title: 'Residency & Visa Management',
    description: 'Investor, employee & family visas, renewals and cancellations.',
  },
  {
    icon: FileText,
    title: 'Trade License Support',
    description: 'Renewals, amendments and company updates.',
  },
  {
    icon: Briefcase,
    title: 'MOHRE & Labour Services',
    description: 'Work permits, contracts and labour files.',
  },
  {
    icon: ShieldCheck,
    title: 'Government Approvals',
    description: 'Coordination with relevant authorities.',
  },
  {
    icon: CircleCheck,
    title: 'Special Approvals',
    description: 'Support for RTA, SIRA, Municipality and more.',
  },
  {
    icon: FileCheck,
    title: 'Attestation & Legal Documents',
    description: 'MOFA, embassy and legal documentation.',
  },
  {
    icon: CalendarClock,
    title: 'Deadline & Expiry Reminders',
    description: 'Proactive reminders to avoid penalties.',
  },
  {
    icon: RefreshCw,
    title: 'Daily Follow-Up & Support',
    description: 'Continuous follow-up on submitted applications.',
  },
];

/* ------------------------------------------------------------------ */
/* Packages data                                                      */
/* ------------------------------------------------------------------ */

type Package = {
  name: string;
  subtitle: string;
  icon: LucideIcon;
  features: string[];
  button: string;
  popular?: boolean;
};

const packages: Package[] = [
  {
    name: 'Basic Package',
    subtitle: 'Small Businesses',
    icon: Users,
    features: [
      'Up to 8 government transactions/month',
      'Essential PRO services',
      'Residency & visa support',
      'Trade license services',
      'Ongoing support & consultation',
    ],
    button: 'Get Started',
  },
  {
    name: 'Standard Package',
    subtitle: 'Growing Businesses',
    icon: Building2,
    features: [
      'Up to 20 government transactions/month',
      'All Basic Package services',
      'HR & labour services',
      'Government approvals',
      'Dedicated PRO officer',
      'Monthly reporting & follow-up',
    ],
    button: 'Get Started',
    popular: true,
  },
  {
    name: 'Premium Package',
    subtitle: 'Larger Companies',
    icon: Crown,
    features: [
      'Unlimited government transactions',
      'All Standard Package services',
      'Dedicated PRO account manager',
      'Priority & expedited support',
      'NOC, attestation & legal document support',
      'Monthly reports & customized solutions',
    ],
    button: 'Contact Us',
  },
];

/* ------------------------------------------------------------------ */
/* Animations                                                          */
/* ------------------------------------------------------------------ */

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function MonthlyContract() {
  return (
    <main className="pt-20">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent" />
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
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-teal-400">
              Corporate Service
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold text-white lg:text-5xl">
              Monthly Corporate PRO Contract
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Let our expert team manage your complete government requirements on a monthly
              retainer, ensuring your business operations are never interrupted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-lg font-medium leading-relaxed text-teal-700">
              Instead of handling every transaction separately, choose an ongoing PRO support
              contract. Let our expert team manage your complete government requirements on a
              monthly retainer. This ensures your business operations are never interrupted by
              expired documents or missed deadlines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Benefits Grid (3×3) ===== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              What You Get
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Key Benefits
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              Comprehensive PRO support covering every aspect of your government transactions.
            </p>
          </div>

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                  <benefit.icon className="h-6 w-6 text-teal-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Monthly PRO Packages ===== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              Pricing Plans
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Monthly PRO Packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              Flexible packages designed to support businesses of all sizes.
            </p>
          </div>

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={cardVariants}
                className={`group relative flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular
                    ? 'border-teal-400 bg-gradient-to-br from-teal-50 to-white shadow-xl shadow-teal-500/15 lg:scale-105'
                    : 'border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-900/5'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-teal-500/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${
                    pkg.popular
                      ? 'bg-teal-100 group-hover:bg-teal-200'
                      : 'bg-slate-100 group-hover:bg-teal-50'
                  }`}
                >
                  <pkg.icon
                    className={`h-7 w-7 ${pkg.popular ? 'text-teal-500' : 'text-slate-600 group-hover:text-teal-500'}`}
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-600">{pkg.subtitle}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          pkg.popular ? 'bg-teal-100' : 'bg-slate-100'
                        }`}
                      >
                        <Check
                          className={`h-3.5 w-3.5 ${pkg.popular ? 'text-teal-600' : 'text-slate-600'}`}
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-sm leading-relaxed text-navy-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40'
                      : 'border border-teal-300 bg-teal-50 text-teal-700 group-hover:bg-teal-500 group-hover:text-white'
                  }`}
                >
                  {pkg.button}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Consultation Form ===== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
