import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function ForensicFinanceSection() {
  const leadStory =
    getArticleBySlug("international-cartels-laundered-synthetic-minerals") || ARTICLES[5];
  const midStory1 =
    getArticleBySlug("parliamentary-probe-expands-covert-drug-trials-data-exfiltration") || ARTICLES[1];
  const midStory2 =
    getArticleBySlug("forensic-audit-uncovers-aviation-procurement-contracts") || ARTICLES[2];
  const wireStory1 =
    getArticleBySlug("offshore-registry-leak-exposes-hidden-real-estate") || ARTICLES[3];
  const wireStory2 =
    getArticleBySlug("secret-swiss-offshore-accounts-uncovered-sanctions-evasion") || ARTICLES[4];
  const wireStory3 =
    getArticleBySlug("decentralized-escrow-protocol-exploit-discloses-wallets") || ARTICLES[0];

  return (
    <section aria-labelledby="forensic-finance-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Masthead Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Financial Crime &amp; Forensic Audit
          </span>
          <h2 id="forensic-finance-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Forensic Finance: Illicit Capital Flows, Shell Networks &amp; Procurement Probes
          </h2>
        </div>
        <Link
          href="/investigation/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors shrink-0"
        >
          All Investigations →
        </Link>
      </div>

      {/* Asymmetric 3-Column Broadsheet Grid (Model B) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column (5 cols): Lead Deep-Dive Feature with Metrics Box */}
        <div className="md:col-span-12 lg:col-span-5 space-y-4">
          <article className="space-y-3">
            <div className="relative w-full h-56 sm:h-64 bg-neutral-100 overflow-hidden">
              <Image
                src={leadStory.image}
                alt={leadStory.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-800 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                FORENSIC CASEFILE
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
              <span className="font-bold text-red-800">{leadStory.categoryLabel}</span>
              <span>·</span>
              <span>{leadStory.publishedAt}</span>
            </div>

            <Link href={`/${leadStory.category}/${leadStory.slug}/`} className="group block">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-neutral-950 group-hover:text-red-800 transition-colors leading-tight">
                {leadStory.title}
              </h3>
            </Link>

            <p className="text-sm text-neutral-700 font-serif leading-relaxed">
              {leadStory.excerpt}
            </p>

            {/* Financial Intelligence Metrics Ledger */}
            <div className="p-3 bg-neutral-50 border border-neutral-200 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block border-b border-neutral-200 pb-1">
                Audit Telemetry Summary
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-neutral-900">
                <div className="p-1.5 bg-white border border-neutral-200">
                  <span className="text-[9px] text-neutral-500 uppercase block font-semibold">Tracked Sum</span>
                  <span className="text-xs font-mono font-bold text-red-800">$2.1B USD</span>
                </div>
                <div className="p-1.5 bg-white border border-neutral-200">
                  <span className="text-[9px] text-neutral-500 uppercase block font-semibold">Jurisdictions</span>
                  <span className="text-xs font-mono font-bold">3 Sovereign</span>
                </div>
                <div className="p-1.5 bg-white border border-neutral-200">
                  <span className="text-[9px] text-neutral-500 uppercase block font-semibold">Modus</span>
                  <span className="text-xs font-mono font-bold">Over-Invoicing</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
              <Link href={`/author/${leadStory.author.slug}/`} className="font-semibold text-neutral-900 hover:underline">
                By {leadStory.author.name}
              </Link>
              <span>{leadStory.readTime}</span>
            </div>
          </article>
        </div>

        {/* Middle Column (4 cols): Dual Stacked Dossiers */}
        <div className="md:col-span-6 lg:col-span-4 lg:pl-6 lg:border-l border-neutral-200 space-y-6">
          {/* Stacked Story 1 */}
          <article className="space-y-2.5 pb-6 border-b border-neutral-200">
            <div className="relative w-full h-40 bg-neutral-100 overflow-hidden">
              <Image
                src={midStory1.image}
                alt={midStory1.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
              <span className="font-bold text-red-800">{midStory1.categoryLabel}</span>
              <span>·</span>
              <span>{midStory1.publishedAt}</span>
            </div>
            <Link href={`/${midStory1.category}/${midStory1.slug}/`} className="group block">
              <h4 className="text-base sm:text-lg font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                {midStory1.title}
              </h4>
            </Link>
            <p className="text-xs text-neutral-600 font-serif line-clamp-3 leading-relaxed">
              {midStory1.excerpt}
            </p>
            <div className="text-[11px] text-neutral-500 pt-1">
              <Link href={`/author/${midStory1.author.slug}/`} className="font-semibold text-neutral-800 hover:underline">
                By {midStory1.author.name}
              </Link>
            </div>
          </article>

          {/* Stacked Story 2 */}
          <article className="space-y-2.5">
            <div className="relative w-full h-40 bg-neutral-100 overflow-hidden">
              <Image
                src={midStory2.image}
                alt={midStory2.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
              <span className="font-bold text-red-800">{midStory2.categoryLabel}</span>
              <span>·</span>
              <span>{midStory2.publishedAt}</span>
            </div>
            <Link href={`/${midStory2.category}/${midStory2.slug}/`} className="group block">
              <h4 className="text-base sm:text-lg font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                {midStory2.title}
              </h4>
            </Link>
            <p className="text-xs text-neutral-600 font-serif line-clamp-3 leading-relaxed">
              {midStory2.excerpt}
            </p>
            <div className="text-[11px] text-neutral-500 pt-1">
              <Link href={`/author/${midStory2.author.slug}/`} className="font-semibold text-neutral-800 hover:underline">
                By {midStory2.author.name}
              </Link>
            </div>
          </article>
        </div>

        {/* Right Column (3 cols): Fast Wire Ledger */}
        <div className="md:col-span-6 lg:col-span-3 lg:pl-6 lg:border-l border-neutral-200">
          <div className="border-b border-neutral-900 pb-1.5 mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-red-800 inline-block"></span>
              Forensic Wire Ledger
            </h4>
          </div>

          <div className="divide-y divide-neutral-200 space-y-4">
            {[wireStory1, wireStory2, wireStory3].map((item, idx) => (
              <article key={item.id} className={`${idx > 0 ? "pt-4" : ""} space-y-1.5`}>
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-wider text-neutral-400">
                  <span className="text-red-800 font-bold font-mono">FILE #{item.id.replace("art-", "0")}</span>
                  <span>·</span>
                  <span>{item.publishedAt}</span>
                </div>
                <Link href={`/${item.category}/${item.slug}/`} className="group block">
                  <h5 className="text-sm font-serif font-bold text-neutral-900 group-hover:text-red-800 transition-colors leading-snug">
                    {item.title}
                  </h5>
                </Link>
                <p className="text-[11px] text-neutral-600 font-serif line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="text-[10px] text-neutral-400 font-medium">
                  Ledger: {item.categoryLabel}
                </div>
              </article>
            ))}
          </div>

          {/* Whistleblower Submissions Notice */}
          <div className="mt-6 p-3 bg-neutral-100 border-l-2 border-neutral-900 text-[11px] text-neutral-700">
            <span className="font-bold text-neutral-900 block mb-0.5">Confidential Whistleblower Desk</span>
            Encrypted Tor submission keys and PGP public certificates are verified daily by the investigative board.
          </div>
        </div>
      </div>
    </section>
  );
}
