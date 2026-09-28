"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchArticles, Article } from "@/data/newsData";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (query.trim().length > 0) {
      setResults(searchArticles(query));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="w-full max-w-5xl mx-auto py-4 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Front Page
        </Link>
        <span>›</span>
        <span className="text-red-800 font-semibold">Search Archive</span>
      </nav>

      {/* Search Header */}
      <div className="border-b-2 border-neutral-950 pb-6 space-y-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-800 block">
            DOMMY ARCHIVAL SEARCH
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-neutral-950">
            Search Newsroom Dispatches &amp; Intelligence
          </h1>
        </div>
        
        {/* Search input bar */}
        <div className="flex items-center border-2 border-neutral-900 bg-white p-2">
          <svg
            className="w-5 h-5 text-neutral-400 ml-2 mr-3 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keywords, regions, correspondents, treaties, or threat actors..."
            className="w-full text-sm sm:text-base text-neutral-900 placeholder-neutral-400 focus:outline-none font-serif"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-neutral-400 hover:text-neutral-900 px-3 text-xs font-sans uppercase font-bold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Results stats */}
      <div className="flex items-center justify-between text-xs text-neutral-500">
        <span>
          Showing <strong className="text-neutral-900 font-serif font-bold">{results.length}</strong> dispatches matching &ldquo;{query}&rdquo;
        </span>
      </div>

      {/* Results stream */}
      {results.length === 0 ? (
        <div className="py-16 text-center border border-neutral-200 bg-neutral-50 space-y-2">
          <p className="text-neutral-700 font-serif text-base">
            {query.trim().length === 0
              ? "Enter search terms above to query the DOMMY investigative database."
              : `No dispatches found matching "${query}".`}
          </p>
          <p className="text-xs text-neutral-500 font-serif italic">
            Suggested searches: &ldquo;Geneva&rdquo;, &ldquo;Sanctions&rdquo;, &ldquo;Cybersecurity&rdquo;, &ldquo;Red Sea&rdquo;, or &ldquo;Diana Reeves&rdquo;.
          </p>
        </div>
      ) : (
        <div className="space-y-6 divide-y divide-neutral-200">
          {results.map((art) => (
            <article key={art.id} className="pt-6 first:pt-0 space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
                <span className="font-bold text-red-800">{art.categoryLabel}</span>
                <span>·</span>
                <span>{art.publishedAt}</span>
                <span>·</span>
                <span>{art.readTime}</span>
              </div>

              <Link href={`/${art.category}/${art.slug}/`} className="group block">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-neutral-950 group-hover:text-red-800 transition-colors leading-snug">
                  {art.title}
                </h3>
              </Link>

              <p className="text-xs sm:text-sm text-neutral-600 font-serif leading-relaxed line-clamp-2">
                {art.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-neutral-500">
                <Link
                  href={`/author/${art.author.slug}/`}
                  className="font-semibold text-neutral-800 hover:underline"
                >
                  By {art.author.name}
                </Link>
                <Link
                  href={`/${art.category}/${art.slug}/`}
                  className="text-red-800 font-bold uppercase text-[11px] tracking-wider hover:underline"
                >
                  Read Story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-neutral-500 font-serif">Loading search engine...</div>}>
      <SearchContent />
    </Suspense>
  );
}
