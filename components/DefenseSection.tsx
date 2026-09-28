import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES } from "@/data/newsData";

export default function DefenseSection() {
  // Select 3 defense and maritime security stories
  const defenseStories = ARTICLES.filter(
    (a) => a.category === "war-conflict"
  ).slice(0, 3);

  return (
    <section aria-labelledby="defense-heading" className="w-full pb-8 mb-8 border-b-2 border-neutral-950">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-neutral-950 pb-2 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
            Tactical Theatre &amp; Defense Intelligence
          </span>
          <h2 id="defense-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950">
            Conflict, Maritime Security &amp; Airspace Defense
          </h2>
        </div>
        <Link
          href="/war-conflict/"
          className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-red-800 transition-colors"
        >
          All Defense Dispatches →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-200">
        {defenseStories.map((item, idx) => (
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
  );
}
