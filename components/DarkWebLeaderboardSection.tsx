import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function DarkWebLeaderboardSection() {
  // 5 Darknet & Cyber Dispatches
  const topFive = [
    getArticleBySlug("law-enforcement-seizes-darknet-marketplace"),
    getArticleBySlug("underground-data-broker-syndicate-doxxed"),
    getArticleBySlug("major-dark-web-syndicate-doxxed-database-leak"),
    getArticleBySlug("encrypted-messaging-zero-day-sold-private-auction"),
    getArticleBySlug("decentralized-escrow-protocol-exploit-discloses-wallets"),
  ].filter(Boolean);

  const leftFeatures = topFive.slice(0, 2);
  const rightList = topFive.slice(2, 5);

  return (
    <section aria-labelledby="darkweb-leaderboard-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Underground Markets &amp; Threat Intelligence
          </span>
          <h2 id="darkweb-leaderboard-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Dark Web Dossiers: Top 5 Threat Intelligence Briefs
          </h2>
        </div>
        <Link
          href="/dark-web/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors"
        >
          All Dark Web Dispatches →
        </Link>
      </div>

      {/* Layout Model 3: Numbered Top 5 Leaderboard Split (2 Prominent Left + 3 Ranked List Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left 7 Columns: 2 Major Features with Rank Badges 01 & 02 */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          {leftFeatures.map((story, i) => (
            <article key={story!.id} className={`${i > 0 ? "sm:pl-6 pt-6 sm:pt-0" : ""} space-y-3 flex flex-col justify-between`}>
              <div className="space-y-3">
                <div className="relative w-full h-44 bg-neutral-100 overflow-hidden">
                  <Image
                    src={story!.image}
                    alt={story!.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-neutral-950 text-white font-serif font-black text-xs px-2 py-0.5">
                    0{i + 1}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block">
                  {story!.categoryLabel}
                </span>

                <Link href={`/${story!.category}/${story!.slug}/`} className="group block">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                    {story!.title}
                  </h3>
                </Link>

                <p className="text-xs text-neutral-600 font-serif line-clamp-3 leading-relaxed">
                  {story!.excerpt}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200 text-[11px] text-neutral-500 flex items-center justify-between">
                <span>By {story!.author.name}</span>
                <Link
                  href={`/${story!.category}/${story!.slug}/`}
                  className="font-bold text-red-800 uppercase tracking-wider text-[10px] hover:underline"
                >
                  View File →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Right 5 Columns: 3 Ranked Horizontal List Items with 03, 04, 05 */}
        <div className="lg:col-span-5 lg:border-l lg:border-neutral-200 lg:pl-8 space-y-5">
          <div className="border-b border-neutral-900 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Verified Takedowns &amp; Data Leaks
            </h4>
          </div>

          <div className="space-y-4 divide-y divide-neutral-200">
            {rightList.map((story, i) => (
              <article key={story!.id} className="pt-4 first:pt-0 flex items-start gap-4 group">
                <span className="text-2xl sm:text-3xl font-serif font-black text-neutral-300 group-hover:text-red-800 transition-colors shrink-0">
                  0{i + 3}
                </span>

                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 block">
                    {story!.categoryLabel} · {story!.publishedAt}
                  </span>

                  <Link href={`/${story!.category}/${story!.slug}/`} className="block">
                    <h4 className="text-sm font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                      {story!.title}
                    </h4>
                  </Link>

                  <p className="text-xs text-neutral-600 font-serif line-clamp-2 leading-relaxed">
                    {story!.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
