"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPopularArticles } from "@/data/newsData";

export default function MostPopularRanked() {
  const popularArticles = getPopularArticles(5);
  const topArticle = popularArticles[0];

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-xl font-black font-serif tracking-wide inline-block border-b-2 border-red-600 pb-1">
          Most Popular
        </h2>
      </div>

      <div className="border border-gray-300 divide-y divide-gray-300">
        {/* Top featured image banner */}
        {topArticle && (
          <div className="w-full h-[160px] overflow-hidden relative bg-gray-900">
            <Image
              src={topArticle.image}
              alt={topArticle.title}
              fill
              sizes="300px"
              className="object-cover grayscale"
            />
          </div>
        )}

        {/* Numbered 1 to 5 items */}
        {popularArticles.map((art, idx) => (
          <Link
            key={art.id}
            href={`/${art.category}/${art.slug}`}
            className="flex items-start gap-4 px-4 py-4 group hover:bg-gray-50 transition-colors"
            title={art.title}
          >
            <span className="text-gray-300 text-3xl font-black font-serif leading-none shrink-0 w-6 text-center group-hover:text-red-600 transition-colors">
              {idx + 1}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 text-xs md:text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                {art.title}
              </h3>
              <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wide mt-1 block">
                {art.categoryLabel}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
