import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CircleCheck as CheckCircle, Navigation } from 'lucide-react';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Office G83, Elegant Star Business Center, Deira, Dubai, UAE',
  },
  { icon: Phone, label: 'Call', value: '+971 50 250 7774' },
  { icon: Phone, label: 'WhatsApp', value: '+971 50 422 9389' },
  { icon: Mail, label: 'Email', value: 'info@alreyada-almotaqdima.ae' },
];

const WHATSAPP_NUMBER = '971502577774';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('fullName') as string)?.trim() ?? '';
    const phone = (formData.get('phone') as string)?.trim() ?? '';
    const email = (formData.get('email') as string)?.trim() ?? '';
    const subject = (formData.get('subject') as string)?.trim() ?? '';
    const message = (formData.get('message') as string)?.trim() ?? '';

    const lines = [
      'New Inquiry from Website:',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
    ];
    if (email) lines.push(`Email: ${email}`);
    if (subject) lines.push(`Subject: ${subject}`);
    lines.push('', 'Message:', message);

    const encodedMessage = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-950 to-navy-900 py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full border border-teal-500/10" />
          <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-bold tracking-tight text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg font-medium text-teal-300"
          >
            Let us help your business move forward. Get in touch with our experts today.
          </motion.p>
        </div>
      </section>

      {/* ===== Main Contact Section ===== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Column: Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
                Contact Information
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900">
                Get in Touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Whether you're setting up a new business or expanding an existing one, our team is
                ready to guide you through every step. Reach out and we'll respond within one
                business day.
              </p>

              <ul className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                      <item.icon className="h-6 w-6 text-teal-500" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map Embed */}
              <div className="mt-8 overflow-hidden rounded-xl shadow-lg ring-1 ring-slate-200">
                <iframe
                  title="Elegant Star Business Center, Deira, Dubai — Map"
                  src="https://www.google.com/maps?q=Elegant+Star+Business+Center,+Deira,+Dubai,+UAE&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Open in Maps Button */}
              <a
                href="https://maps.app.goo.gl/ZhXExybRQ7HZ5qFp7?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/40"
              >
                <Navigation className="h-4 w-4" />
                Open in Maps
              </a>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl"
            >
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle className="h-9 w-9 text-green-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">
                    Opening WhatsApp
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                    Your message has been prepared in WhatsApp. Just hit send there to reach our
                    team directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-teal-500 hover:text-teal-600"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Email Address <span className="font-normal text-slate-400">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30"
                      placeholder="+971 4 000 0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Subject <span className="font-normal text-slate-400">(Optional)</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30"
                      placeholder="Tell us about your business needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/30"
                  >
                    Send WhatsApp Message
                    <WhatsAppIcon className="h-5 w-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
