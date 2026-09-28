import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/newsData";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 md:py-24 text-center max-w-2xl mx-auto space-y-6">
      {/* 404 Headline */}
      <div className="space-y-2">
        <span className="text-6xl sm:text-8xl font-serif font-black text-neutral-300 block">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950">
          Page or Dispatch Not Found
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 font-serif leading-relaxed">
          The dispatch, category, or archival dossier you requested does not exist or has been relocated.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center pt-2">
        <Link
          href="/"
          className="bg-neutral-950 hover:bg-red-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition-colors"
        >
          ← Return to Front Page
        </Link>
        <Link
          href="/world/"
          className="border border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition-colors"
        >
          Browse World Desk
        </Link>
      </div>

      {/* Quick Sections */}
      <div className="pt-6 border-t border-neutral-200 w-full space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block">
          Explore News Desks
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}/`}
              className="border border-neutral-300 hover:border-neutral-900 hover:text-red-800 text-neutral-700 text-xs px-3 py-1 font-medium transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
