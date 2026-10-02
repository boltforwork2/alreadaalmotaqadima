import { CircleCheck as CheckCircle2, Circle as XCircle, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

export default function FreelanceLicenseAbuDhabi() {
  const { t } = useTranslation();

  const benefits = t('FreelanceLicenseAbuDhabi.benefits', { returnObjects: true }) as { title: string; description: string }[];
  const limitations = t('FreelanceLicenseAbuDhabi.limitations', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <ServiceLayout
      eyebrow={t('FreelanceLicenseAbuDhabi.eyebrow')}
      title={t('FreelanceLicenseAbuDhabi.title')}
      subtitle={t('FreelanceLicenseAbuDhabi.subtitle')}
    >
      <article>
        <img
          src="/images/pages/page3.jpg"
          alt={t('FreelanceLicenseAbuDhabi.title')}
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          {t('FreelanceLicenseAbuDhabi.p1')}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          {t('FreelanceLicenseAbuDhabi.p2')}
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
          <p className="text-sm leading-relaxed text-navy-700">
            {t('FreelanceLicenseAbuDhabi.visaNote')}
          </p>
        </div>

        <Tabs
          tabs={[
            {
              id: 'benefits',
              label: t('FreelanceLicenseAbuDhabi.benefitsTitle'),
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
              label: t('FreelanceLicenseAbuDhabi.limitationsTitle'),
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
