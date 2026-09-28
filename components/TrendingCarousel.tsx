import React from "react";
import Link from "next/link";
import { AUTHORS } from "@/data/newsData";

export default function TrendingCarousel() {
  const columnists = [
    {
      author: AUTHORS.diana,
      title: "“Why Multilateral Ceasefire Frameworks Require Continuous On-Site Verification”",
      summary:
        "Without independent monitoring teams on the ground, fragile peace pacts remain vulnerable to miscalculation and sudden escalations.",
      link: "/geo-politics/high-stakes-diplomatic-envoy-meets-leaders-peace-framework/",
    },
    {
      author: AUTHORS.james,
      title: "“The Rapid Transformation of Coastal Escort Protocols in High-Risk Corridors”",
      summary:
        "How naval task forces are adopting synchronized electronic defense systems to protect international merchant vessels.",
      link: "/war-conflict/naval-task-forces-intercept-uncrewed-surface-vessels/",
    },
    {
      author: AUTHORS.claire,
      title: "“Protecting Open-Source Digital Infrastructure from Automated Vulnerability Probes”",
      summary:
        "Why developer consortiums must mandate cryptographic signature verification across public package managers.",
      link: "/cybersecurity/autonomous-ai-agent-infiltration-breaches-open-source-repositories/",
    },
  ];

  return (
    <section aria-labelledby="opinion-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      <div className="border-b-2 border-neutral-950 pb-2 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            The Forum
          </span>
          <h2 id="opinion-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Opinion &amp; Strategic Commentary
          </h2>
        </div>
        <p className="text-xs text-neutral-500 font-serif italic max-w-md">
          Independent perspectives and analytical commentaries from DOMMY senior correspondents
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-200">
        {columnists.map((col, idx) => (
          <article
            key={idx}
            className={`flex flex-col justify-between space-y-4 ${
              idx > 0 ? "md:pl-8" : ""
            } pb-6 md:pb-0 border-b md:border-b-0 border-neutral-200 last:border-b-0`}
          >
            <div className="space-y-3">
              {/* Columnist Header */}
              <div className="flex items-center gap-3">
                <Link href={`/author/${col.author.slug}/`}>
                  <img
                    src={col.author.avatar}
                    className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all ring-1 ring-neutral-300"
                    alt={`${col.author.name} portrait`}
                  />
                </Link>
                <div>
                  <Link
                    href={`/author/${col.author.slug}/`}
                    className="text-sm font-serif font-bold text-neutral-950 hover:text-red-800 transition-colors block leading-tight"
                  >
                    {col.author.name}
                  </Link>
                  <p className="text-[11px] text-neutral-500">{col.author.role}</p>
                </div>
              </div>

              {/* Column Title */}
              <Link href={col.link} className="group block">
                <h3 className="text-base sm:text-lg font-serif font-bold italic text-neutral-900 group-hover:text-red-900 transition-colors leading-snug">
                  {col.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="text-xs text-neutral-600 font-serif leading-relaxed line-clamp-3">
                {col.summary}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={col.link}
                className="text-xs font-bold uppercase tracking-wider text-red-800 hover:text-neutral-900 inline-flex items-center gap-1"
              >
                <span>Read Full Column</span>
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
