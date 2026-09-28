import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPopularArticles, ARTICLES } from "@/data/newsData";

export default function EditorialGrid() {
  const briefings = getPopularArticles(4);
  const investigations = ARTICLES.filter(
    (a) => a.category === "investigation" || a.category === "cybersecurity" || a.category === "dark-web"
  ).slice(0, 3);

  return (
    <div className="w-full space-y-12 pb-8 mb-8 border-b-2 border-neutral-950">
      
      {/* ==========================================
          1. SECTION 1: GLOBAL INVESTIGATIONS GRID (3 Columns, No Cards)
          ========================================== */}
      <section aria-labelledby="investigations-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
              Forensic Reporting
            </span>
            <h2 id="investigations-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
              Featured Investigations &amp; Special Despatches
            </h2>
          </div>
          <Link
            href="/investigation/"
            className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors"
          >
            All Investigations →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-200">
          {investigations.map((item, idx) => (
            <article
              key={item.id}
              className={`flex flex-col justify-between space-y-4 ${
                idx > 0 ? "md:pl-8" : ""
              } pb-6 md:pb-0 border-b md:border-b-0 border-neutral-200 last:border-b-0`}
            >
              <div className="space-y-3">
                {/* Photo */}
                <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block">
                  {item.categoryLabel}
                </span>

                <Link href={`/${item.category}/${item.slug}/`} className="group block">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-neutral-900 group-hover:text-red-900 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-xs text-neutral-600 font-serif leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
                <Link
                  href={`/author/${item.author.slug}/`}
                  className="font-semibold text-neutral-800 hover:underline"
                >
                  By {item.author.name}
                </Link>
                <span>{item.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================
          2. SECTION 2: SCANNABLE INTEL BRIEFS (4 Horizontal Columns)
          ========================================== */}
      <section aria-labelledby="briefings-heading" className="space-y-4 pt-2">
        <div className="border-b border-neutral-900 pb-2 flex items-center justify-between">
          <h3 id="briefings-heading" className="text-xs font-bold uppercase tracking-wider text-neutral-900">
            Intelligence Briefings Around the World
          </h3>
          <span className="text-[11px] text-neutral-400">Continuous 24/7 Monitoring</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          {briefings.map((story, i) => (
            <article
              key={story.id}
              className={`space-y-2 ${
                i > 0 ? "sm:pl-6" : ""
              } pt-4 sm:pt-0 first:pt-0`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                {story.categoryLabel}
              </span>
              <Link href={`/${story.category}/${story.slug}/`} className="group block">
                <h4 className="text-sm font-serif font-bold text-neutral-900 group-hover:text-red-800 transition-colors leading-snug">
                  {story.title}
                </h4>
              </Link>
              <p className="text-[11px] text-neutral-600 font-serif line-clamp-2 leading-relaxed">
                {story.excerpt}
              </p>
              <div className="text-[10px] text-neutral-400 pt-1">
                <span>{story.publishedAt}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
