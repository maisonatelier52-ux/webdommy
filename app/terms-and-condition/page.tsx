import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions — DOMMY",
  description: "Terms of use and legal agreements governing the DOMMY digital news network.",
};

export default function TermsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Front Page
        </Link>
        <span>›</span>
        <span className="text-red-800 font-semibold">Terms of Use</span>
      </nav>

      {/* Header */}
      <div className="border-b-2 border-neutral-950 pb-6 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-800 block">
          LEGAL TERMS &amp; SYNDICATION
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-neutral-950">
          Terms of Service &amp; Syndication
        </h1>
        <p className="text-sm text-neutral-600 font-serif italic max-w-2xl leading-relaxed">
          Legal terms governing access to DOMMY publications, dossiers, and wire feeds.
        </p>
      </div>

      {/* Body Content */}
      <div className="space-y-8 text-neutral-800 font-serif leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            1. Intellectual Property &amp; Quotation Rights
          </h2>
          <p className="drop-cap">
            All original dispatches, investigative dossiers, satellite telemetry maps, and graphics published by DOMMY are protected under international copyright conventions. Brief excerpts (under 100 words) may be cited provided clear attribution and direct hyperlinks to the original DOMMY dispatch are preserved.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            2. Research &amp; Risk Disclaimer
          </h2>
          <p>
            Intelligence briefings and geopolitical assessments published on this platform are for informational, risk-analysis, and academic purposes. DOMMY assumes no liability for commercial, tactical, or legal actions rendered based on published open-source information.
          </p>
        </section>
      </div>
    </div>
  );
}
