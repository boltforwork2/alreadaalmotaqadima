import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, ShieldCheck, Check, CircleCheck as CheckCircle, Phone, Building2, Globe as Globe2, Archive, Award, Stamp, UserCheck, Landmark, Plane, ShoppingCart, ChevronDown } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

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
    name: 'E-Trader License - Dubai ',
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

const jurisdictionContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const jurisdictionCardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const formationBenefits = [
  '100% Foreign Ownership',
  'Investors Rights & Protection',
  'No Corporate or Personal Tax',
  'Advantageous Geographical Location',
  'Secure & Quality Lifestyle',
  'Exceptional Government Support',
  'Easy Visa Obtaining Process',
];

const services = [
  {
    icon: Building2,
    title: 'Company Formation in Dubai',
    description:
      'Starting a Dubai company involves tons of paperwork. Let us do our job and you can focus on your business.',
  },
  {
    icon: Archive,
    title: 'Company Liquidation',
    description:
      'Expert company liquidation advice and opinion best liquidation approach, Dubai liquidators.',
  },
  {
    icon: Award,
    title: 'Business License',
    description: "We are UAE's Leading business setup & company formation company.",
  },
  {
    icon: Stamp,
    title: 'PRO & Visa Services',
    description:
      'Commercial License, Employee Visas, Attestations, Translation & Immigration Services.',
  },
  {
    icon: UserCheck,
    title: 'Corporate Sponsor & Nominee',
    description:
      "Establish your company with Dubai's leading corporate nominee services.",
  },
  {
    icon: Landmark,
    title: 'Bank Liaison & Assistance',
    description:
      'We can help you set up such a structure which can later be transformed into a subsidiary or branch office.',
  },
  {
    icon: ShieldCheck,
    title: 'Government Services',
    description:
      'With direct access to Government Departments and Ministries, we can get your job done in very timely manner.',
  },
  {
    icon: Plane,
    title: 'Immigration & Labour',
    description:
      'We undertake all kinds of Labor & Immigration Registration in Dubai, UAE for individuals and company.',
  },
];

const stats = [
  { endValue: 2500, suffix: '+', label: 'Clients Helped' },
  { endValue: 12, suffix: '+', label: 'Years Experience' },
  { endValue: 25, suffix: '+', label: 'Expert Consultants' },
  { endValue: 97, suffix: '%', label: 'Client Satisfaction' },
];

const faqs = [
  {
    q: 'Why should someone set up a mainland business in the UAE?',
    a: 'The UAE is a prime destination offering myriad business opportunities. Location of target market and business activities should guide the choice between Dubai and Abu Dhabi.',
  },
  {
    q: 'How can a foreigner start a business in Dubai?',
    a: 'The CCL permits 100% foreign ownership. Steps: determine entity type, select company name, apply for a business license, get pre-approvals, register your business, and get your license.',
  },
  {
    q: 'What is the best free zone to open a company in Dubai?',
    a: 'Key factors include location, chosen business activities, and office space requirements. Contact our experts to find the perfect fit.',
  },
  {
    q: 'Which business license should I choose?',
    a: 'It depends on your business activity, office requirements, visa needs and budget. Contact us and we\u2019ll help you identify the suitable option.',
  },
  {
    q: 'Do I need an office for a Mainland company?',
    a: 'A physical office or business premises is generally required, subject to the activity and applicable regulations.',
  },
  {
    q: 'Do I need an office for a Free Zone company?',
    a: 'Our available Free Zone packages can be established without a physical office. Requirements vary depending on the Free Zone and package.',
  },
  {
    q: 'Can I get a Free Zone license without a residence visa?',
    a: 'Yes, selected packages can be issued without a residence visa.',
  },
  {
    q: 'How many investor visas can I get with a Free Zone company?',
    a: 'Visa capacity depends on the Free Zone and selected package and can reach up to 10 investor visas in applicable packages.',
  },
  {
    q: 'Can I open a company as a Freelancer?',
    a: 'Eligible professionals may be able to obtain a Freelance license depending on their activity and qualifications.',
  },
  {
    q: 'Can you handle my visa after setting up the company?',
    a: 'Yes. We provide visa and immigration-related services as part of our business support.',
  },
  {
    q: 'Do you provide license renewal services?',
    a: 'Yes. We assist with license renewal and various license amendments.',
  },
  {
    q: 'Do you provide trademark registration?',
    a: 'Yes. We provide support with trademark registration procedures in the UAE.',
  },
  {
    q: 'Do you provide Municipality services?',
    a: 'Yes. We assist with municipality permits and approvals required for eligible business activities and premises.',
  },
];

export default function Home() {
  const [form, setForm] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setSubmitted(true);
    setForm({ name: '', contact: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative flex min-h-[calc(100dvh-5rem)] flex-col justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="/images/home.jpg"
          alt="Dubai skyline"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-950/85 to-navy-900/75" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            {/* Left: copy */}
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300"
              >
                <span className="flex h-2 w-2 rounded-full bg-teal-400" />
                Your Trusted Dubai Business Setup Partner
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Business Setup in Dubai &{' '}
                <span className="bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                  UAE Company Formation & PRO Services
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
              >
                Start, manage and grow your business in the UAE with professional business setup and government services. Whether you need a Mainland or Free Zone company, trade licence, visa services, PRO services or government approvals, our team is here to make the process simple and straightforward.{' '}
                <span className="font-semibold text-white">WE CAN HELP!</span>
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-7 flex flex-wrap items-center gap-4"
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-3.5 text-base font-semibold text-navy-900 shadow-xl shadow-teal-500/25 transition-all duration-200 hover:shadow-2xl hover:shadow-teal-500/40 hover:brightness-105"
                >
                  Contact Us Now
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/97150257774"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-400/60 px-7 py-3.5 text-base font-medium text-slate-100 transition-colors duration-200 hover:border-teal-500/50 hover:text-teal-300"
                >
                  <Phone className="h-5 w-5" />
                  +971 50 257 774
                </a>
              </motion.div>
            </div>

            {/* Right: Quote Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full"
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <h3 className="font-display text-xl font-bold text-white">Request a Free Quote</h3>
                <p className="mt-1.5 text-sm text-slate-300">
                  Tell us a little about your business goals.
                </p>
                <div className="mt-5 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-navy-200">Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-navy-400 transition-colors focus:border-teal-500/50 focus:bg-white/10 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy-200">Email / Phone</label>
                    <input
                      type="text"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      placeholder="Email or phone number"
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-navy-400 transition-colors focus:border-teal-500/50 focus:bg-white/10 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="group inline-flex h-[46px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 text-base font-semibold text-navy-900 shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-105"
                  >
                    {submitted ? (
                      <>
                        <Check className="h-5 w-5" />
                        Sent!
                      </>
                    ) : (
                      <>
                        Request A Free Quote
                        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </div>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-teal-300"
                  >
                    Thank you! One of our consultants will reach out to you shortly.
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Choose Your Business Jurisdiction ===== */}
      <section className="bg-white pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              UAE Company Formation
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Choose Your Best Setup
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              Explore the best setups for your company. Each option offers unique advantages tailored to different business needs.
            </p>
          </motion.div>

          <motion.div
            variants={jurisdictionContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {jurisdictions.map((item) => (
              <motion.div
                key={item.path}
                variants={jurisdictionCardVariants}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/5"
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
                  {item.buttonText}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Company Formation Intro ===== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
                Business Setup in Dubai
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900">
                Company Formation in Dubai UAE
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Central Hub is here to ensure Investors, Entrepreneurs, and Business Owners no longer
                lose sleep worrying about the complexities and red tape involved with the business
                setup process. We do all the heavy lifting by taking care of all the technical,
                administrative, and financial aspects of setting up a business in the UAE.
              </p>
            </motion.div>

            {/* Right: Benefits List */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col gap-4"
            >
              {formationBenefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show: (delay: number) => ({
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, delay: delay * 0.08 },
                    }),
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-6 w-6 shrink-0 text-teal-500" strokeWidth={2} />
                  <span className="text-base font-medium text-slate-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              Dubai Business Setup Services
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Services We Provide to Set Up Your Company in Dubai UAE
            </h2>
          </div>

          {/* Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                  <service.icon className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats / Social Proof Banner ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl font-bold text-teal-500">
                  <AnimatedCounter endValue={stat.endValue} suffix={stat.suffix} />
                </div>
                <div className="mt-3 text-lg text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ / SEO Content ===== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          {/* Header */}
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Everything you need to know about setting up your business in Dubai.
            </p>
          </div>

          {/* Accordion */}
          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-xl border bg-white transition-colors duration-200 ${
                    isOpen ? 'border-teal-300' : 'border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`font-display text-base font-semibold sm:text-lg ${
                        isOpen ? 'text-teal-600' : 'text-slate-900'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-teal-500' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-base text-slate-700">Still have questions?</p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-3.5 text-base font-semibold text-navy-900 shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-105"
            >
              Contact us today for a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
