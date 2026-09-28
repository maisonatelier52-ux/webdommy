import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Editorial Policy & Standards — DOMMY",
  description: "DOMMY's journalistic ethics, source protection protocols, corrections policy, and advertising guidelines.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Front Page
        </Link>
        <span>›</span>
        <span className="text-red-800 font-semibold">Editorial Standards</span>
      </nav>

      {/* Header */}
      <div className="border-b-2 border-neutral-950 pb-6 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-800 block">
          NEWSROOM GOVERNANCE &amp; ETHICS
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-neutral-950">
          Editorial Charter &amp; Verification Protocol
        </h1>
        <p className="text-sm text-neutral-600 font-serif italic max-w-2xl leading-relaxed">
          The principles governing DOMMY’s investigative reporting, source protection, factual corroboration, and corrections standards.
        </p>
      </div>

      {/* Body Content */}
      <div className="space-y-8 text-neutral-800 font-serif leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 id="methodology" className="text-xl font-serif font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            1. Source Methodology &amp; Multi-Tiered Verification
          </h2>
          <p className="drop-cap">
            DOMMY applies strict open-source intelligence (OSINT) and field-investigation standards. We distinguish unequivocally between corroborated factual findings, intelligence analysis, and unverified allegations. Wherever possible, dispatches provide verifiable data points including flight transponder logs, satellite imagery timestamps, public contract registries, and cryptographic checksums.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            2. Confidential Sources &amp; Whistleblower Protection
          </h2>
          <p>
            We grant confidentiality to sources only when there is an overwhelming public interest and when disclosure of their identity poses severe risks of retaliation. We never fabricate quotes or create composite characters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 id="corrections" className="text-xl font-serif font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            3. Corrections &amp; Public Transparency Policy
          </h2>
          <p>
            When factual errors occur, DOMMY corrects them promptly and transparently. Substantive corrections are appended directly to the article header detailing what was updated, the exact timestamp, and why the correction was required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 id="advertising" className="text-xl font-serif font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            4. Absolute Commercial &amp; Political Independence
          </h2>
          <p>
            Editorial autonomy is absolute. Advertisers, underwriters, and foundation supporters exert zero influence over story selection, investigative targets, or editorial conclusions.
          </p>
        </section>
      </div>
    </div>
  );
}
