'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ModusWcButton,
  ModusWcCard,
  ModusWcIcon,
  ModusWcTypography,
} from '@trimble-oss/moduswebcomponents-react';
import { ORG_NAME, PROJECT_NAME } from '@/components/app-shell';

export default function ProjectSetupPage() {
  const router = useRouter();

  return (
    <div className="page-section">
      <section className="page-section">
        <div className="flex w-full min-w-0 flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <ModusWcTypography hierarchy="h1" size="2xl" weight="semibold" label="Project setup" />
            <ModusWcTypography
              hierarchy="p"
              size="md"
              customClass="!m-0 text-[var(--modus-wc-color-base-content-low-contrast)]"
              label={`${ORG_NAME} · ${PROJECT_NAME}. Configure ALCS policy before closeout capture begins.`}
            />
          </div>
          <Link href="/spec-alignment" className="shrink-0 no-underline">
            <ModusWcButton
              variant="outlined"
              color="tertiary"
              size="sm"
              onButtonClick={() => router.push('/spec-alignment')}
            >
              Define Spec Alignments (AM-A02) →
            </ModusWcButton>
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="min-w-0">
          <ModusWcCard bordered={true} padding="comfortable">
            <div slot="title" className="flex w-full min-w-0 items-center justify-start gap-2">
              <ModusWcIcon name="settings" decorative />
              <ModusWcTypography hierarchy="h2" size="md" weight="semibold" label="AM-A02 Spec alignment" />
            </div>
            <ModusWcTypography
              hierarchy="p"
              size="md"
              label="Map CSI MasterFormat sections to ALCS asset classes and close GAP-AM-012 governed inclusion gaps."
            />
            <div
              slot="footer"
              className="flex justify-end px-[var(--modus-wc-spacing-md)] pt-[var(--modus-wc-spacing-md)] pb-[var(--modus-wc-spacing-md)]"
            >
              <ModusWcButton
                variant="filled"
                color="primary"
                size="sm"
                onButtonClick={() => router.push('/spec-alignment')}
              >
                <ModusWcIcon name="settings" size="xs" decorative />
                Open spec alignment
              </ModusWcButton>
            </div>
          </ModusWcCard>
        </div>
        <div className="min-w-0">
          <ModusWcCard bordered={true} padding="comfortable">
            <div slot="title" className="flex w-full min-w-0 items-center justify-start gap-2">
              <ModusWcIcon name="info" decorative />
              <ModusWcTypography hierarchy="h2" size="md" weight="semibold" label="Trimble Identity" />
            </div>
            <ModusWcTypography hierarchy="p" size="md" label="Signed in as Alex Rivera (alex.rivera@trimble.com)." />
            <ModusWcTypography
              hierarchy="p"
              size="sm"
              customClass="!m-0 text-[var(--modus-wc-color-base-content-low-contrast)]"
              label="Organization and project context stay visible in the navbar on every screen."
            />
          </ModusWcCard>
        </div>
      </div>
    </div>
  );
}
