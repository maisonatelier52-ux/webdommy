import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getLeadArticle, getFeaturedArticles, getPopularArticles } from "@/data/newsData";

export default function HeroSection() {
  const lead = getLeadArticle();
  const featured = getFeaturedArticles(2);
  const wireNews = getPopularArticles(3);

  return (
    <section aria-labelledby="lead-story-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      <h2 id="lead-story-heading" className="sr-only">
        Front Page Lead Stories
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* ==========================================
            1. LEFT 8 COLUMNS: MAIN BROADSHEET LEAD
            ========================================== */}
        <article className="lg:col-span-8 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Section Kicker */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-800">
                {lead.categoryLabel}
              </span>
              <span className="text-neutral-300">·</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                Exclusive Diplomatic Dispatch
              </span>
            </div>

            {/* Massive Serif Headline */}
            <Link href={`/${lead.category}/${lead.slug}/`} className="group block">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-serif font-black text-neutral-950 leading-[1.12] tracking-tight group-hover:text-red-900 transition-colors">
                {lead.title}
              </h1>
            </Link>

            {/* Lead Subdeck */}
            <p className="text-base sm:text-lg text-neutral-700 font-serif italic leading-snug">
              {lead.excerpt}
            </p>

            {/* Byline & Dateline Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 py-2 border-y border-neutral-200 text-xs text-neutral-600">
              <div className="flex items-center gap-2.5">
                <Link href={`/author/${lead.author.slug}/`} className="font-bold text-neutral-900 hover:text-red-800 transition-colors">
                  By {lead.author.name}
                </Link>
                <span className="text-neutral-300">·</span>
                <span>Geneva Bureau</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                <span>Published {lead.publishedAt}</span>
                <span className="text-neutral-300">·</span>
                <span className="font-semibold text-neutral-700">{lead.readTime}</span>
              </div>
            </div>

            {/* Hero Image with Journalistic Caption */}
            <div className="space-y-2 pt-1">
              <div className="relative w-full h-72 sm:h-96 md:h-[420px] bg-neutral-100 overflow-hidden">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              {lead.imageCaption && (
                <p className="text-xs text-neutral-500 italic flex items-center justify-between gap-4">
                  <span>{lead.imageCaption}</span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 not-italic shrink-0">Photo: DOMMY Wire</span>
                </p>
              )}
            </div>

            {/* Lead Narrative Summary */}
            <div className="pt-2 text-neutral-800 text-sm sm:text-base leading-relaxed space-y-3 font-serif">
              <p className="drop-cap">
                {lead.content[0]}
              </p>
              <p className="text-neutral-700 text-sm hidden sm:block">
                {lead.content[1]}
              </p>
            </div>
          </div>

          {/* Read Full Story Link */}
          <div className="pt-4 mt-4 border-t border-neutral-200 flex items-center justify-between">
            <Link
              href={`/${lead.category}/${lead.slug}/`}
              className="text-xs font-bold uppercase tracking-wider text-red-800 hover:text-neutral-950 inline-flex items-center gap-1.5"
            >
              <span>Read Complete Intelligence Dossier</span>
              <span>→</span>
            </Link>
            <span className="text-xs text-neutral-500 font-medium">Full Analysis &amp; Primary Documents</span>
          </div>
        </article>

        {/* ==========================================
            2. RIGHT 4 COLUMNS: THE BIG READ & WIRE
            ========================================== */}
        <aside className="lg:col-span-4 lg:border-l lg:border-neutral-200 lg:pl-8 space-y-6" aria-label="Featured analysis and wire">
          
          {/* Section Header */}
          <div className="border-b-2 border-neutral-900 pb-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              The Big Read &amp; Developing Wire
            </h3>
          </div>

          {/* Featured Stories 1 & 2 */}
          <div className="space-y-6 divide-y divide-neutral-200">
            {featured.map((article) => (
              <article key={article.id} className="pt-5 first:pt-0 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block">
                  {article.categoryLabel}
                </span>

                <Link href={`/${article.category}/${article.slug}/`} className="group block">
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-neutral-900 group-hover:text-red-900 transition-colors leading-snug">
                    {article.title}
                  </h4>
                </Link>

                <p className="text-xs text-neutral-600 font-serif leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2">
                  <Link href={`/author/${article.author.slug}/`} className="font-semibold text-neutral-800 hover:underline">
                    By {article.author.name}
                  </Link>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Fast Wire Dispatches Box */}
          <div className="bg-neutral-50 border border-neutral-200 p-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5 border-b border-neutral-200 pb-2">
              <span className="w-2 h-2 rounded-full bg-red-700"></span>
              Live Wire Dispatches
            </h4>

            <div className="space-y-3.5 divide-y divide-neutral-200">
              {wireNews.map((wire, idx) => (
                <div key={wire.id} className="pt-3 first:pt-0 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wide">
                    <span>{wire.categoryLabel}</span>
                    <span className="text-red-700 font-semibold">{idx === 0 ? "14m ago" : idx === 1 ? "42m ago" : "1h ago"}</span>
                  </div>
                  <Link
                    href={`/${wire.category}/${wire.slug}/`}
                    className="text-xs font-serif font-bold text-neutral-900 hover:text-red-800 transition-colors block leading-snug"
                  >
                    {wire.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </aside>
      </div>
    </section>
  );
}
