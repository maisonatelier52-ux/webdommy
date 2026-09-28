import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy & Data Protection Policy — DOMMY",
  description: "Our privacy standards, minimal telemetry tracking, and confidential reader protections.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Front Page
        </Link>
        <span>›</span>
        <span className="text-red-800 font-semibold">Privacy Policy</span>
      </nav>

      {/* Header */}
      <div className="border-b-2 border-neutral-950 pb-6 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-800 block">
          LEGAL &amp; READER SECURITY
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-neutral-950">
          Privacy &amp; Data Minimization Policy
        </h1>
        <p className="text-sm text-neutral-600 font-serif italic max-w-2xl leading-relaxed">
          Zero intrusive trackers, cryptographic confidentiality, and strict reader privacy standards.
        </p>
      </div>

      {/* Body Content */}
      <div className="space-y-8 text-neutral-800 font-serif leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            1. Reader Anonymity &amp; Zero Behavioral Tracking
          </h2>
          <p className="drop-cap">
            DOMMY believes free access to investigative reporting must not compromise reader safety. We do not sell reader data, fingerprint browsing environments, or deploy third-party advertising tracking pixels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            2. Newsletter Registry &amp; Encryption
          </h2>
          <p>
            Email addresses submitted for DOMMY Morning Intelligence dispatches are encrypted with AES-256 and used exclusively for delivery of requested editorial content. We never syndicate subscriber registries.
          </p>
        </section>
      </div>
    </div>
  );
}
