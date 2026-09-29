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
  image: string;
  imageAlt: string;
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
    image: 'https://images.pexels.com/photos/25309271/pexels-photo-25309271.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Dubai skyline with modern business towers',
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
    image: 'https://images.pexels.com/photos/4115457/pexels-photo-4115457.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Modern warehouse facility for free zone operations',
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
    image: 'https://images.pexels.com/photos/30349399/pexels-photo-30349399.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Freelancer working in a modern home office',
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
    image: 'https://images.pexels.com/photos/7289719/pexels-photo-7289719.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Online seller packing products for an ecommerce business',
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
      {/* Business setup hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <img
          src="https://images.pexels.com/photos/25309271/pexels-photo-25309271.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Dubai skyline viewed from a modern business office"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/20" />

        <div className="mx-auto grid min-h-[35rem] max-w-7xl items-center px-5 py-16 sm:px-8 lg:min-h-[38rem] lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 sm:text-sm">
              Your trusted
            </span>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Business Setup
              <span className="block">Partner <span className="text-teal-400">in Dubai</span></span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
              Complete business setup and government services for investors, entrepreneurs and companies in the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cost-calculator"
                className="group inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-lg shadow-teal-500/25 transition-all hover:bg-teal-400 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-teal-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 border-t border-white/15 pt-5 sm:grid-cols-4">
              {['Reliable & Professional', 'End-to-End Support', 'Transparent Process', 'Dedicated Consultant'].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs font-semibold leading-tight text-white">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jurisdiction grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">UAE company formation</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Explore Your <span className="text-teal-600">Business Setup</span> Options
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-500 sm:text-base">
              Choose the right setup for your business goals. Compare the options and get started with expert support.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {jurisdictions.map((item) => (
              <motion.div
                key={item.path}
                variants={cardVariants}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950/85 text-teal-300 backdrop-blur-sm">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold leading-tight text-navy-900">
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
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:bg-teal-400"
                  >
                    {item.buttonText}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
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
