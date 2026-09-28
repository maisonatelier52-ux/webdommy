import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function MaritimeChokepointsSection() {
  const stories = [
    getArticleBySlug("strategic-maritime-strait-reopening-deal-falls-short") || ARTICLES[0],
    getArticleBySlug("autonomous-electronic-countermeasure-drones-deployed") || ARTICLES[1],
    getArticleBySlug("island-nation-extends-maritime-buffer-zones") || ARTICLES[2],
  ];

  return (
    <section aria-labelledby="maritime-chokepoints-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Littoral Surveillance &amp; Chokepoint Security
          </span>
          <h2 id="maritime-chokepoints-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Maritime Corridors: Strait Escorts, Autonomous Patrols &amp; Reef Buffers
          </h2>
        </div>
        <Link
          href="/war-conflict/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors"
        >
          All Maritime Files →
        </Link>
      </div>

      {/* 3 Horizontal Split Cards (Model A) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
        {stories.map((story, idx) => (
          <article
            key={story.id}
            className={`${idx > 0 ? "lg:pl-6 pt-6 lg:pt-0" : ""} space-y-3 flex flex-col justify-between`}
          >
            <div className="space-y-3">
              <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-neutral-900 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                  NAVAL CORRIDOR
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
                  <span className="font-bold text-red-800">{story.categoryLabel}</span>
                  <span>·</span>
                  <span>{story.publishedAt}</span>
                </div>

                <Link href={`/${story.category}/${story.slug}/`} className="group block">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                    {story.title}
                  </h3>
                </Link>

                <p className="text-xs text-neutral-600 font-serif line-clamp-3 leading-relaxed">
                  {story.excerpt}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-200 text-[11px] text-neutral-500 flex items-center justify-between">
              <Link href={`/author/${story.author.slug}/`} className="font-semibold text-neutral-800 hover:underline">
                By {story.author.name}
              </Link>
              <span>{story.readTime}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Naval Telemetry Footer Ticker */}
      <div className="mt-6 pt-3 border-t border-neutral-300 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600 bg-neutral-50 p-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span className="font-semibold text-neutral-900 uppercase text-[10px] tracking-wider">Acoustic Net:</span>
          <span>Active coastal hydrophone monitoring operational across Bab-el-Mandeb and Hormuz straits.</span>
        </div>
        <span className="text-[11px] text-neutral-400 font-mono">STATUS: ESCORT READINESS 100%</span>
      </div>
    </section>
  );
}
