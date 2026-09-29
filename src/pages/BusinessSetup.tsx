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
  FileText,
  ClipboardCheck,
  CircleDollarSign,
  CircleCheck,
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
    buttonText: 'Learn More',
  },
  {
    name: 'E-Trader License - Dubai',
    path: '/e-trader-license',
    icon: ShoppingCart,
    description: 'Start your online business with a lower-cost setup.',
    features: [
      'No physical office required',
      'No residence visa included',
      'Lower-cost solution',
      'Sell through eligible online marketplaces such as Amazon and Noon, subject to platform and activity requirements.',
    ],
    buttonText: 'Learn More',
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

type ProcessStep = {
  number: string;
  icon: typeof FileText;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    number: '1',
    icon: FileText,
    title: 'Choose Your Setup',
    description: 'Select the best option for your business.',
  },
  {
    number: '2',
    icon: ClipboardCheck,
    title: 'Prepare Documents',
    description: 'We guide you with the required documents.',
  },
  {
    number: '3',
    icon: CircleDollarSign,
    title: 'Submit & Approvals',
    description: 'We handle all government submissions and follow-ups.',
  },
  {
    number: '4',
    icon: CircleCheck,
    title: 'Receive Your Trade License',
    description: 'Start your business with confidence.',
  },
];

export default function BusinessSetup() {
  return (
    <main>
      {/* Banner */}
      <section className="relative overflow-hidden bg-[#f8fafc]">
        <div className="mx-auto grid min-h-[31rem] max-w-7xl grid-cols-1 lg:min-h-[19rem] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-12 lg:py-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600 sm:text-sm">
                UAE Company Formation
              </span>
              <h1 className="mt-2 max-w-xl font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
                Business Setup in Dubai & <span className="text-teal-600">UAE Company Formation</span>
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-600 sm:text-base">
                Explore the best setups for your company.
              </p>

              <div className="mt-6 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-2 lg:mt-5 lg:gap-2.5">
                {jurisdictions.map((item) => {
                  const SetupIcon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                        <SetupIcon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0 text-xs font-semibold leading-tight text-navy-800 sm:text-sm">
                        {item.name}
                      </span>
                      <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-teal-500 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div
            className="relative min-h-[13rem] bg-cover bg-center lg:min-h-0"
            style={{ backgroundImage: "url('/images/pages/image.png')" }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 to-transparent lg:bg-gradient-to-r lg:from-[#f8fafc] lg:via-[#f8fafc]/10 lg:to-transparent" />
          </div>
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

      {/* Simple process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              A Simple <span className="text-teal-500">Process</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-500 sm:text-base">
              We make company setup in the UAE simple and hassle-free.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-5 lg:gap-8"
          >
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={cardVariants}
                  className="relative flex items-start gap-4 md:block"
                >
                  <div className="flex shrink-0 items-center gap-3 md:gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 font-display text-lg font-bold text-navy-900 shadow-md shadow-teal-500/20">
                      {index === processSteps.length - 1 ? (
                        <Check className="h-5 w-5" strokeWidth={3} />
                      ) : (
                        step.number
                      )}
                    </span>
                    <StepIcon className="h-7 w-7 text-teal-500" strokeWidth={1.8} />
                  </div>

                  <div className="md:mt-4">
                    <h3 className="font-display text-base font-bold leading-snug text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-[15rem] text-sm leading-relaxed text-navy-500">
                      {step.description}
                    </p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <ArrowRight className="absolute -right-5 top-3 hidden h-5 w-5 text-navy-300 md:block lg:-right-7" />
                  )}
                </motion.div>
              );
            })}
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
            Not sure which Setup fits your business?
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
