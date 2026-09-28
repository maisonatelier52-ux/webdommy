import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function WorldDiplomacySection() {
  const worldStories = [
    getArticleBySlug("global-food-security-accord-grain-corridors") || ARTICLES[0],
    getArticleBySlug("critical-minerals-pact-established-southern-hemisphere") || ARTICLES[1],
    getArticleBySlug("international-climate-tribunal-flood-mitigation") || ARTICLES[2],
    getArticleBySlug("hydroelectric-dam-modernization-accord-southeast-asia") || ARTICLES[3],
  ];

  const diplomaticBriefs = [
    { title: "Arctic Continental Shelf Accord Enters Formal Depository with UN Law of the Sea Commission", time: "2h ago", slug: "sovereignty-treaty-signed-arctic-boundary-dispute" },
    { title: "Central Asian Railway Corridor Links Final Gauge Switching Station at Caspian Sea", time: "4h ago", slug: "strategic-trade-corridor-central-asia-mediterranean" },
    { title: "Bilateral Semiconductor Foundry Export Verification Protocols Synchronized", time: "6h ago", slug: "bilateral-semiconductor-export-pacts-eu-asia" },
  ];

  return (
    <section aria-labelledby="world-diplomacy-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Multilateral Affairs &amp; Global Desks
          </span>
          <h2 id="world-diplomacy-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            World Dispatches: Treaties, Trade Accords &amp; Global Policy
          </h2>
        </div>
        <Link
          href="/world/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors"
        >
          All World Dispatches →
        </Link>
      </div>

      {/* 2x2 Grid of World Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
        
        {/* Left Column (Stories 1 & 2) */}
        <div className="space-y-8">
          {worldStories.slice(0, 2).map((art, idx) => (
            <article key={art.id} className={`${idx > 0 ? "pt-8 border-t border-neutral-200" : ""} space-y-3`}>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <div className="sm:col-span-7 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
                    <span className="font-bold text-red-800">{art.categoryLabel}</span>
                    <span>·</span>
                    <span>{art.publishedAt}</span>
                  </div>

                  <Link href={`/${art.category}/${art.slug}/`} className="group block">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                      {art.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-neutral-600 font-serif line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-500">
                    <Link href={`/author/${art.author.slug}/`} className="font-semibold text-neutral-800 hover:underline">
                      By {art.author.name}
                    </Link>
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <div className="relative w-full h-36 bg-neutral-100 overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Column (Stories 3 & 4) */}
        <div className="md:pl-8 space-y-8 pt-8 md:pt-0">
          {worldStories.slice(2, 4).map((art, idx) => (
            <article key={art.id} className={`${idx > 0 ? "pt-8 border-t border-neutral-200" : ""} space-y-3`}>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <div className="sm:col-span-7 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
                    <span className="font-bold text-red-800">{art.categoryLabel}</span>
                    <span>·</span>
                    <span>{art.publishedAt}</span>
                  </div>

                  <Link href={`/${art.category}/${art.slug}/`} className="group block">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                      {art.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-neutral-600 font-serif line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-500">
                    <Link href={`/author/${art.author.slug}/`} className="font-semibold text-neutral-800 hover:underline">
                      By {art.author.name}
                    </Link>
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <div className="relative w-full h-36 bg-neutral-100 overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Diplomatic Wire Bar */}
      <div className="mt-8 pt-4 border-t border-neutral-300 bg-neutral-50 p-4">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-red-800 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-800"></span>
          <span>Diplomatic Wire &amp; Sovereign Accords:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          {diplomaticBriefs.map((brief, i) => (
            <div key={i} className={`${i > 0 ? "sm:pl-4" : ""} pt-2 sm:pt-0 first:pt-0 space-y-1`}>
              <Link
                href={`/geo-politics/${brief.slug}/`}
                className="font-serif text-neutral-900 hover:text-red-800 transition-colors block leading-snug font-medium"
              >
                {brief.title}
              </Link>
              <span className="text-[10px] text-neutral-400 block">{brief.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
