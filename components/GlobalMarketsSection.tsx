import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function GlobalMarketsSection() {
  // 1 Panoramic Lead (Top Wide Banner)
  const topLeadStory =
    getArticleBySlug("global-summit-explores-currency-swaps-de-dollarization") ||
    ARTICLES.find((a) => a.category === "geo-politics") ||
    ARTICLES[0];

  // 4 Horizontal Row Stories (Bottom 4 Columns)
  const rowStories = [
    getArticleBySlug("strategic-trade-corridor-central-asia-mediterranean"),
    getArticleBySlug("critical-minerals-pact-established-southern-hemisphere"),
    getArticleBySlug("bilateral-semiconductor-export-pacts-eu-asia"),
    getArticleBySlug("investigation-unmasks-clandestine-maritime-ghost-fleet"),
  ].filter(Boolean);

  return (
    <section aria-labelledby="global-markets-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Geo-Economics &amp; Commodity Trade
          </span>
          <h2 id="global-markets-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Global Markets: Energy Transition, Currency Pacts &amp; Sanctions
          </h2>
        </div>
        <Link
          href="/geo-politics/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors"
        >
          All Market Dispatches →
        </Link>
      </div>

      {/* Layout Model 2: 1 Top Wide Panoramic Feature + 4-Column Broadsheet Row Beneath (5 News Total) */}
      <div className="space-y-8">
        
        {/* 1. TOP WIDE PANORAMIC LEAD STORY (1 Story) */}
        <article className="border border-neutral-300 bg-neutral-50 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block">
                SPECIAL REPORT · GLOBAL MONETARY ACCORD
              </span>

              <Link href={`/${topLeadStory.category}/${topLeadStory.slug}/`} className="group block">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 group-hover:text-red-900 transition-colors leading-tight">
                  {topLeadStory.title}
                </h3>
              </Link>

              <p className="text-sm text-neutral-700 font-serif leading-relaxed line-clamp-3">
                {topLeadStory.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-neutral-500">
                <Link href={`/author/${topLeadStory.author.slug}/`} className="font-semibold text-neutral-900 hover:underline">
                  By {topLeadStory.author.name} ({topLeadStory.author.location})
                </Link>
                <Link
                  href={`/${topLeadStory.category}/${topLeadStory.slug}/`}
                  className="font-bold uppercase tracking-wider text-red-800 hover:underline text-[11px]"
                >
                  Read Treaty Details →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full h-56 sm:h-72 bg-neutral-200 overflow-hidden">
                <Image
                  src={topLeadStory.image}
                  alt={topLeadStory.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </article>

        {/* 2. BOTTOM 4-COLUMN BROADSHEET ROW (4 Stories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          {rowStories.map((story, idx) => (
            <article key={story!.id} className={`${idx > 0 ? "sm:pl-6" : ""} pt-6 sm:pt-0 space-y-3 flex flex-col justify-between`}>
              <div className="space-y-2">
                <div className="relative w-full h-36 bg-neutral-100 overflow-hidden">
                  <Image
                    src={story!.image}
                    alt={story!.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block">
                  {story!.categoryLabel}
                </span>

                <Link href={`/${story!.category}/${story!.slug}/`} className="group block">
                  <h4 className="text-base font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                    {story!.title}
                  </h4>
                </Link>

                <p className="text-xs text-neutral-600 font-serif line-clamp-2 leading-relaxed">
                  {story!.excerpt}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200 text-[11px] text-neutral-500 flex items-center justify-between">
                <span>By {story!.author.name}</span>
                <span>{story!.readTime}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
