import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/data/newsData";

export default function ClimateSecuritySection() {
  const leadStory =
    getArticleBySlug("international-climate-tribunal-flood-mitigation") || ARTICLES[4];
  const sideStory1 =
    getArticleBySlug("hydroelectric-dam-modernization-accord-southeast-asia") || ARTICLES[0];
  const sideStory2 =
    getArticleBySlug("global-food-security-accord-grain-corridors") || ARTICLES[1];
  const sideStory3 =
    getArticleBySlug("sovereignty-treaty-signed-arctic-boundary-dispute") || ARTICLES[2];

  return (
    <section aria-labelledby="climate-security-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      {/* Section Masthead Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Transboundary Resources &amp; Climate Treaties
          </span>
          <h2 id="climate-security-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Ecological Security: River Basins, Grain Corridors &amp; Arctic Sovereignty
          </h2>
        </div>
        <Link
          href="/world/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors shrink-0"
        >
          All World Dispatches →
        </Link>
      </div>

      {/* Field Dispatch & Quote Spotlight (Model D) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (7 cols): Spotlight Quote + Lead Field Dispatch */}
        <div className="lg:col-span-7 space-y-6">
          {/* Pull Quote Spotlight Box */}
          <div className="p-4 sm:p-5 bg-neutral-50 border-l-4 border-red-800 border-y border-r border-neutral-200">
            <blockquote className="text-base sm:text-lg font-serif italic text-neutral-900 leading-relaxed">
              &ldquo;Industrialized economies share enforceable multilateral obligations to co-finance tidal barrier infrastructure for vulnerable delta regions.&rdquo;
            </blockquote>
            <cite className="block text-[11px] font-sans font-bold uppercase tracking-wider text-neutral-500 mt-2 not-italic">
              — The Hague Judicial Arbitration Panel, Environmental Ruling
            </cite>
          </div>

          {/* Lead Field Dispatch */}
          <article className="space-y-3">
            <div className="relative w-full h-56 sm:h-72 bg-neutral-100 overflow-hidden">
              <Image
                src={leadStory.image}
                alt={leadStory.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-neutral-900 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                TRIBUNAL MANDATE
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

            <div className="pt-2 border-t border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
              <Link href={`/author/${leadStory.author.slug}/`} className="font-semibold text-neutral-900 hover:underline">
                By {leadStory.author.name}
              </Link>
              <span>{leadStory.readTime}</span>
            </div>
          </article>
        </div>

        {/* Right Column (5 cols): 3-Story Vertical Dossier Ledger */}
        <div className="lg:col-span-5 lg:pl-6 lg:border-l border-neutral-200 space-y-5">
          <div className="border-b border-neutral-900 pb-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-red-800 inline-block"></span>
              Resource Corridors &amp; Water Security
            </h4>
          </div>

          <div className="divide-y divide-neutral-200 space-y-4">
            {[sideStory1, sideStory2, sideStory3].map((story, idx) => (
              <article key={story.id} className={`${idx > 0 ? "pt-4" : ""} flex gap-4 items-start`}>
                <div className="relative w-24 h-20 bg-neutral-100 shrink-0 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-neutral-500">
                    <span className="font-bold text-red-800">{story.categoryLabel}</span>
                    <span>·</span>
                    <span>{story.publishedAt}</span>
                  </div>

                  <Link href={`/${story.category}/${story.slug}/`} className="group block">
                    <h5 className="text-sm font-serif font-bold text-neutral-900 group-hover:text-red-800 transition-colors leading-snug line-clamp-2">
                      {story.title}
                    </h5>
                  </Link>

                  <div className="text-[10px] text-neutral-500">
                    <Link href={`/author/${story.author.slug}/`} className="hover:underline">
                      By {story.author.name}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Environmental Treaty Monitoring Note */}
          <div className="mt-6 p-3.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-900 block">
              Global Hydro-Telemetry Registry
            </span>
            <p className="text-[11px] font-serif leading-relaxed text-neutral-700">
              Cross-border river gauges and glacial melt telemetry stations feed directly into DOMMY’s environmental desk data hub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
