import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function TechFrontiersSection() {
  // 1 Lead Story (Left 7 Cols)
  const leadStory =
    getArticleBySlug("eu-finalizes-directives-on-sovereign-ai-infrastructure") ||
    ARTICLES.find((a) => a.category === "cybersecurity") ||
    ARTICLES[0];

  // 4 Grid Stories (Right 5 Cols in 2x2 Layout)
  const gridStories = [
    getArticleBySlug("autonomous-ai-agent-infiltration-breaches-open-source-repositories"),
    getArticleBySlug("critical-telecom-switchboards-firmware-vulnerability"),
    getArticleBySlug("zero-knowledge-cryptography-mandated-sovereign-identity"),
    getArticleBySlug("medical-device-giant-paralyzed-by-ransomware-infiltration"),
  ].filter(Boolean);

  return (
    <section aria-labelledby="tech-frontiers-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Sovereign AI &amp; Infrastructure
          </span>
          <h2 id="tech-frontiers-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Technology Frontiers: AI Directives, Zero-Days &amp; Telecom Security
          </h2>
        </div>
        <Link
          href="/cybersecurity/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors"
        >
          All Technology Dispatches →
        </Link>
      </div>

      {/* Layout Model 1: 1 Big Hero Left + 4 in 2x2 Grid Right (5 News Total) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left 7 Columns: 1 Major Feature Story */}
        <article className="lg:col-span-7 space-y-4">
          <div className="relative w-full h-72 sm:h-96 bg-neutral-100 overflow-hidden">
            <Image
              src={leadStory.image}
              alt={leadStory.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <span className="absolute top-3 left-3 bg-red-800 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
              AI INFRASTRUCTURE DESK
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
              <span className="font-bold text-red-800">{leadStory.categoryLabel}</span>
              <span>·</span>
              <span>{leadStory.publishedAt}</span>
              <span>·</span>
              <span>{leadStory.readTime}</span>
            </div>

            <Link href={`/${leadStory.category}/${leadStory.slug}/`} className="group block">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 group-hover:text-red-900 transition-colors leading-tight">
                {leadStory.title}
              </h3>
            </Link>

            <p className="text-sm text-neutral-700 font-serif leading-relaxed">
              {leadStory.excerpt}
            </p>
          </div>

          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
            <Link
              href={`/author/${leadStory.author.slug}/`}
              className="font-semibold text-neutral-900 hover:underline"
            >
              By {leadStory.author.name} ({leadStory.author.location})
            </Link>
            <Link
              href={`/${leadStory.category}/${leadStory.slug}/`}
              className="font-bold uppercase tracking-wider text-red-800 hover:underline text-[11px]"
            >
              Read Full Analysis →
            </Link>
          </div>
        </article>

        {/* Right 5 Columns: 4 Stories in a Clean 2x2 Broadsheet Grid */}
        <div className="lg:col-span-5 lg:border-l lg:border-neutral-200 lg:pl-8 space-y-6">
          <div className="border-b border-neutral-900 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Cyber Defense &amp; Infrastructure Wire
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            {/* Sub-Column 1 (Stories 2 & 3) */}
            <div className="space-y-6">
              {gridStories.slice(0, 2).map((story, i) => (
                <article key={story!.id} className={`${i > 0 ? "pt-6 border-t border-neutral-200" : ""} space-y-2`}>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-red-800 block">
                    {story!.categoryLabel}
                  </span>

                  <Link href={`/${story!.category}/${story!.slug}/`} className="group block">
                    <h5 className="text-sm font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                      {story!.title}
                    </h5>
                  </Link>

                  <p className="text-xs text-neutral-600 font-serif line-clamp-2 leading-relaxed">
                    {story!.excerpt}
                  </p>

                  <div className="text-[10px] text-neutral-400 pt-1">
                    <span>{story!.publishedAt} · {story!.readTime}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Sub-Column 2 (Stories 4 & 5) */}
            <div className="sm:pl-6 space-y-6 pt-6 sm:pt-0">
              {gridStories.slice(2, 4).map((story, i) => (
                <article key={story!.id} className={`${i > 0 ? "pt-6 border-t border-neutral-200" : ""} space-y-2`}>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-red-800 block">
                    {story!.categoryLabel}
                  </span>

                  <Link href={`/${story!.category}/${story!.slug}/`} className="group block">
                    <h5 className="text-sm font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                      {story!.title}
                    </h5>
                  </Link>

                  <p className="text-xs text-neutral-600 font-serif line-clamp-2 leading-relaxed">
                    {story!.excerpt}
                  </p>

                  <div className="text-[10px] text-neutral-400 pt-1">
                    <span>{story!.publishedAt} · {story!.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
