import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function InvestigationsSpotlight() {
  // Feature story: Offshore Real Estate Leak
  const spotlightStory =
    getArticleBySlug("offshore-registry-leak-exposes-hidden-real-estate") ||
    ARTICLES.find((a) => a.category === "investigation") ||
    ARTICLES[0];

  // 4 side ledger dossiers
  const ledgerStories = [
    getArticleBySlug("secret-swiss-offshore-accounts-uncovered-sanctions-evasion"),
    getArticleBySlug("investigation-unmasks-clandestine-maritime-ghost-fleet"),
    getArticleBySlug("law-enforcement-seizes-darknet-marketplace"),
    getArticleBySlug("underground-data-broker-syndicate-doxxed"),
  ].filter(Boolean);

  return (
    <section aria-labelledby="spotlight-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Special Investigations &amp; Financial Forensics
          </span>
          <h2 id="spotlight-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            The Shadow Economy: Offshore Dossiers &amp; Cyber Cartels
          </h2>
        </div>
        <Link
          href="/investigation/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors"
        >
          All Investigative Dossiers →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* ==========================================
            1. LEFT 7 COLUMNS: LARGE SPOTLIGHT FEATURE
            ========================================== */}
        <article className="lg:col-span-7 space-y-4">
          <div className="relative w-full h-72 sm:h-96 bg-neutral-100 overflow-hidden">
            <Image
              src={spotlightStory.image}
              alt={spotlightStory.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <span className="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
              FORENSIC INVESTIGATION
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block">
              {spotlightStory.categoryLabel} · EXCLUSIVE
            </span>

            <Link href={`/${spotlightStory.category}/${spotlightStory.slug}/`} className="group block">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 group-hover:text-red-900 transition-colors leading-tight">
                {spotlightStory.title}
              </h3>
            </Link>

            <p className="text-sm text-neutral-700 font-serif leading-relaxed">
              {spotlightStory.excerpt}
            </p>
          </div>

          {/* Intelligence Highlights Box */}
          <div className="bg-neutral-50 border-l-3 border-neutral-900 p-4 space-y-2 text-xs font-serif text-neutral-700">
            <p className="font-bold text-neutral-950 uppercase text-[10px] tracking-wider font-sans">
              INVESTIGATION KEY METRICS:
            </p>
            <ul className="space-y-1">
              <li>• <strong>2.4 Million Records:</strong> Fiduciary incorporation logs decrypted across 4 offshore jurisdictions.</li>
              <li>• <strong>1,200 Properties Identified:</strong> Luxury commercial &amp; residential holdings mapped in major capitals.</li>
              <li>• <strong>Regulatory Inquests:</strong> European judicial compliance bodies have opened formal forensic audits.</li>
            </ul>
          </div>

          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
            <Link
              href={`/author/${spotlightStory.author.slug}/`}
              className="font-bold text-neutral-900 hover:text-red-800 transition-colors"
            >
              By {spotlightStory.author.name} ({spotlightStory.author.location})
            </Link>
            <Link
              href={`/${spotlightStory.category}/${spotlightStory.slug}/`}
              className="font-bold uppercase tracking-wider text-red-800 hover:underline text-[11px]"
            >
              Read Full Dossier →
            </Link>
          </div>
        </article>

        {/* ==========================================
            2. RIGHT 5 COLUMNS: VERTICAL DOSSIER LEDGER (Different Model)
            ========================================== */}
        <div className="lg:col-span-5 lg:border-l lg:border-neutral-200 lg:pl-8 space-y-6">
          <div className="border-b border-neutral-900 pb-2 flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Underground Intelligence &amp; Forensics
            </h4>
            <span className="text-[10px] text-neutral-400 uppercase">Classified Files</span>
          </div>

          <div className="space-y-5 divide-y divide-neutral-200">
            {ledgerStories.map((story, index) => (
              <article key={story!.id} className="pt-5 first:pt-0 space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-500">
                  <span className="font-bold text-red-800">{story!.categoryLabel}</span>
                  <span>{story!.readTime}</span>
                </div>

                <Link href={`/${story!.category}/${story!.slug}/`} className="group block">
                  <h5 className="text-base font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                    {story!.title}
                  </h5>
                </Link>

                <p className="text-xs text-neutral-600 font-serif line-clamp-2 leading-relaxed">
                  {story!.excerpt}
                </p>

                <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>By {story!.author.name}</span>
                  <Link
                    href={`/${story!.category}/${story!.slug}/`}
                    className="text-neutral-700 hover:text-red-800 font-semibold uppercase text-[10px] tracking-wider"
                  >
                    View File →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
