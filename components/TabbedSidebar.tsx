"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getLatestArticles, getPopularArticles } from "@/data/newsData";

export default function TabbedSidebar() {
  const [activeTab, setActiveTab] = useState<"latest" | "popular">("latest");
  const latest = getLatestArticles(5);
  const popular = getPopularArticles(5);

  const displayArticles = activeTab === "latest" ? latest : popular;

  return (
    <div className="w-full flex flex-col">
      {/* Tab Switchers */}
      <div className="flex items-center gap-6 border-b border-gray-200 mb-4">
        <button
          onClick={() => setActiveTab("latest")}
          className={`pb-2 text-sm font-bold font-serif tracking-wide transition-colors cursor-pointer ${
            activeTab === "latest"
              ? "text-black border-b-2 border-black font-black"
              : "text-gray-400 hover:text-gray-700"
          }`}
          style={{ marginBottom: "-1px" }}
        >
          Latest
        </button>
        <button
          onClick={() => setActiveTab("popular")}
          className={`pb-2 text-sm font-bold font-serif tracking-wide transition-colors cursor-pointer ${
            activeTab === "popular"
              ? "text-black border-b-2 border-black font-black"
              : "text-gray-400 hover:text-gray-700"
          }`}
          style={{ marginBottom: "-1px" }}
        >
          Popular
        </button>
      </div>

      {/* Stories list */}
      <div className="flex flex-col divide-y divide-gray-200">
        {displayArticles.map((art) => (
          <div key={art.id} className="py-3.5 first:pt-0 last:pb-0">
            <Link
              href={`/${art.category}/${art.slug}`}
              className="flex gap-3 group items-start"
              title={art.title}
            >
              <div className="w-[85px] h-[65px] shrink-0 overflow-hidden bg-gray-200 relative">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="85px"
                  className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-[10px] font-sans tracking-wide uppercase mb-1">
                  {art.publishedAt}
                </p>
                <h4 className="text-gray-900 text-xs md:text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                  {art.title}
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
