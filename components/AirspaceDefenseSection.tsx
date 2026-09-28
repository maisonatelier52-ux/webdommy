import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function AirspaceDefenseSection() {
  const items = [
    {
      article: getArticleBySlug("air-defense-networks-upgraded-eastern-flank") || ARTICLES[0],
      badge: "HYPERSONIC SHIELD",
    },
    {
      article: getArticleBySlug("covert-drone-strike-neutralizes-arms-depot-border-enclave") || ARTICLES[1],
      badge: "RADAR SUPPRESSION",
    },
    {
      article: getArticleBySlug("specialized-mountain-infantry-concludes-recon-exercises") || ARTICLES[2],
      badge: "ALPINE SPECIAL FORCES",
    },
    {
      article: getArticleBySlug("submarine-cable-security-task-force-deployed-baltic") || ARTICLES[3],
      badge: "SEABED ACOUSTICS",
    },
  ];

  return (
    <section aria-labelledby="airspace-defense-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Masthead Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Airspace Dominance &amp; Tactical Intercept
          </span>
          <h2 id="airspace-defense-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Airspace Defense: Phased-Array Batteries, Loitering Munitions &amp; Alpine Reconnaissance
          </h2>
        </div>
        <Link
          href="/war-conflict/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors shrink-0"
        >
          All Conflict Reports →
        </Link>
      </div>

      {/* 4-Column Photo Gallery Broadsheet (Model C) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
        {items.map(({ article, badge }, idx) => (
          <article
            key={article.id}
            className={`${idx > 0 ? "sm:pl-6 pt-6 sm:pt-0" : ""} flex flex-col justify-between space-y-3`}
          >
            <div className="space-y-3">
              <div className="relative w-full h-44 bg-neutral-100 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-neutral-900 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                  {badge}
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
                  <span className="font-bold text-red-800">{article.categoryLabel}</span>
                  <span>·</span>
                  <span>{article.publishedAt}</span>
                </div>

                <Link href={`/${article.category}/${article.slug}/`} className="group block">
                  <h3 className="text-base font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-xs text-neutral-600 font-serif line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-200 text-[11px] text-neutral-500 flex items-center justify-between">
              <Link href={`/author/${article.author.slug}/`} className="font-semibold text-neutral-800 hover:underline">
                By {article.author.name}
              </Link>
              <span>{article.readTime}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Airspace Telemetry & Tactical Readiness Banner */}
      <div className="mt-6 pt-3 border-t border-neutral-300 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600 bg-neutral-900 text-neutral-100 p-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="font-semibold text-white uppercase text-[10px] tracking-wider">Tactical Radar Grid:</span>
          <span className="text-neutral-300">Continuous telemetry sync active across 4 forward operating sectors.</span>
        </div>
        <span className="text-[11px] text-neutral-400 font-mono">SECTOR DEFCON: ELEVATED MONITORING</span>
      </div>
    </section>
  );
}
