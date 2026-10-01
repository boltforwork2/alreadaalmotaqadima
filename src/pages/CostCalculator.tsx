import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Briefcase, ShoppingCart, PenTool, User, UserPlus, Users, UserCheck, ArrowRight, ArrowLeft, CircleCheck as CheckCircle, Sparkles, RotateCcw, TrendingUp, type LucideIcon } from 'lucide-react';

type SetupType = 'Free Zone' | 'Dubai Mainland' | 'Dubai E-Trader' | 'Abu Dhabi Freelance';

type VisaOption = {
  id: string;
  label: string;
  icon: LucideIcon;
  price: { min: number; max: number };
};

type SetupConfig = {
  id: SetupType;
  icon: LucideIcon;
  desc: string;
  visas: VisaOption[];
};

const setupConfigs: SetupConfig[] = [
  {
    id: 'Free Zone',
    icon: Building2,
    desc: '100% foreign ownership, ideal for international trade',
    visas: [
      { id: '0', label: '0 Visas', icon: User, price: { min: 4000, max: 6000 } },
      { id: '1', label: '1 Visa', icon: UserPlus, price: { min: 9000, max: 12000 } },
      { id: '2', label: '2 Visas', icon: Users, price: { min: 12000, max: 14000 } },
      { id: '3', label: '3 Visas', icon: Users, price: { min: 16000, max: 18000 } },
      { id: '4', label: '4 Visas', icon: UserCheck, price: { min: 20000, max: 22000 } },
    ],
  },
  {
    id: 'Dubai Mainland',
    icon: Briefcase,
    desc: 'Trade anywhere in the UAE local market',
    visas: [
      { id: '0', label: '0 Visas', icon: User, price: { min: 12000, max: 18000 } },
      { id: '1', label: '1 Visa', icon: UserPlus, price: { min: 18000, max: 24000 } },
      { id: '2', label: '2 Visas', icon: Users, price: { min: 24000, max: 32000 } },
      { id: '3', label: '3 Visas', icon: Users, price: { min: 30000, max: 40000 } },
      { id: '4', label: '4 Visas', icon: UserCheck, price: { min: 36000, max: 48000 } },
    ],
  },
  {
    id: 'Dubai E-Trader',
    icon: ShoppingCart,
    desc: 'Low-cost online business. Sell on digital platforms',
    visas: [
      { id: 'no-visa', label: 'License Only - No Visa', icon: ShoppingCart, price: { min: 2000, max: 3000 } },
    ],
  },
  {
    id: 'Abu Dhabi Freelance',
    icon: PenTool,
    desc: 'For specialists & creatives. Family sponsorship',
    visas: [
      { id: '0', label: '0 Visas', icon: User, price: { min: 2000, max: 2000 } },
      { id: '1', label: '1 Visa', icon: UserPlus, price: { min: 10000, max: 12000 } },
    ],
  },
];

const steps = ['Setup', 'Visas'];

function formatPrice(min: number, max: number) {
  if (min === max) return `AED ${min.toLocaleString()}`;
  return `AED ${min.toLocaleString()} – ${max.toLocaleString()}`;
}

export default function CostCalculator() {
  const [step, setStep] = useState(1);
  const [setup, setSetup] = useState<SetupType | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<VisaOption | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSetup = (s: SetupType) => {
    setSetup(s);
    setSelectedVisa(null);
    setTimeout(() => setStep(2), 280);
  };

  const handleVisa = (v: VisaOption) => {
    setSelectedVisa(v);
    setTimeout(() => setShowResult(true), 300);
  };

  const handleStartOver = () => {
    setSetup(null);
    setSelectedVisa(null);
    setShowResult(false);
    setStep(1);
  };

  const progress = showResult ? 100 : (step / 2) * 100;
  const currentConfig = setupConfigs.find((c) => c.id === setup);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ===== Header ===== */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-500"
          >
            <Sparkles className="h-4 w-4" />
            Instant Estimate
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl"
          >
            Business Setup Cost Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base leading-relaxed text-slate-500"
          >
            Get an instant estimate for your UAE company formation in less than 30 seconds.
          </motion.p>
        </div>
      </section>

      {/* ===== Calculator Card ===== */}
      <section className="bg-slate-50 pb-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-2xl sm:p-10"
          >
            {/* Progress Bar */}
            {!showResult && (
              <div className="mb-10">
                <div className="mb-3 flex items-center justify-between">
                  {steps.map((s, i) => {
                    const idx = i + 1;
                    const isActive = step === idx;
                    const isDone = step > idx;
                    return (
                      <div
                        key={s}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                            isDone
                              ? 'bg-teal-500 text-white'
                              : isActive
                                ? 'bg-navy-900 text-white ring-4 ring-navy-900/10'
                                : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          {isDone ? <CheckCircle className="h-5 w-5" /> : idx}
                        </div>
                        <span
                          className={`hidden text-xs font-semibold sm:block ${
                            isActive || isDone ? 'text-navy-900' : 'text-slate-400'
                          }`}
                        >
                          {s}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* Step 1: Setup Type */}
              {step === 1 && !showResult && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    Choose Your Setup
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Select the type of UAE company formation that fits your business needs.
                  </p>
                  <div className="mt-6 space-y-4">
                    {setupConfigs.map((opt) => {
                      const selected = setup === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSetup(opt.id)}
                          className={`flex w-full items-center gap-4 rounded-xl border-2 p-5 text-left transition-all duration-200 ${
                            selected
                              ? 'border-teal-500 bg-teal-50 shadow-md shadow-teal-500/10'
                              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                              selected ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            <opt.icon className="h-6 w-6" strokeWidth={1.75} />
                          </div>
                          <div className="flex-1">
                            <p className="font-display text-base font-bold text-navy-900">
                              {opt.id}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                              {opt.desc}
                            </p>
                          </div>
                          {selected && (
                            <CheckCircle className="h-6 w-6 shrink-0 text-teal-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Visas */}
              {step === 2 && !showResult && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    Number of Visas Required
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    How many residency visas do you need for your team?
                  </p>
                  <div className={`mt-6 ${currentConfig && currentConfig.visas.length > 2 ? 'grid grid-cols-2 gap-4 sm:grid-cols-3' : 'space-y-4'}`}>
                    {currentConfig?.visas.map((opt) => {
                      const selected = selectedVisa?.id === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleVisa(opt)}
                          className={`flex flex-col items-center gap-3 rounded-xl border-2 p-6 text-center transition-all duration-200 ${
                            selected
                              ? 'border-teal-500 bg-teal-50 shadow-md shadow-teal-500/10'
                              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                              selected ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            <opt.icon className="h-6 w-6" strokeWidth={1.75} />
                          </div>
                          <span className="font-display text-sm font-bold text-navy-900">
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-navy-900"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Result Card */}
              {showResult && selectedVisa && currentConfig && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                    <TrendingUp className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">
                    Your Estimated Cost
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Based on your selections, here's your estimated setup cost:
                  </p>

                  {/* Price display */}
                  <div className="mt-6 rounded-2xl bg-gradient-to-br from-navy-900 to-slate-800 p-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-300">
                      Estimated Range
                    </p>
                    <p className="mt-2 font-display text-4xl font-bold text-teal-400">
                      {formatPrice(selectedVisa.price.min, selectedVisa.price.max)}
                    </p>
                    <p className="mt-3 text-xs text-slate-400">
                      Final pricing depends on activity type and additional government fees.
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 space-y-2 text-left">
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm">
                      <span className="text-slate-500">Setup Type</span>
                      <span className="font-semibold text-navy-900">{setup}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm">
                      <span className="text-slate-500">Visas</span>
                      <span className="font-semibold text-navy-900">{selectedVisa.label}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:bg-teal-600 hover:shadow-xl"
                  >
                    Talk to an Expert
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={handleStartOver}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Start Over
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
