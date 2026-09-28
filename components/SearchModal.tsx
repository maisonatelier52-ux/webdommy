"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { searchArticles, Article } from "@/data/newsData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (query.trim().length > 1) {
      setResults(searchArticles(query));
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/60 backdrop-blur-xs transition-opacity">
      <div
        className="w-full max-w-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-200 bg-gray-50">
          <svg
            className="w-5 h-5 text-red-600 mr-3 shrink-0"
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
            placeholder="Search breaking stories, geopolitics, cybersecurity..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm md:text-base text-gray-900 placeholder-gray-400 focus:outline-none font-serif"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 transition-colors"
            aria-label="Close search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Live Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-gray-100">
          {query.trim().length > 1 && results.length === 0 && (
            <div className="py-8 text-center text-gray-500 font-serif text-sm">
              No matching intelligence files found for &quot;{query}&quot;.
            </div>
          )}

          {query.trim().length <= 1 && (
            <div className="py-6 px-2 text-xs text-gray-400 font-sans">
              <p className="font-semibold text-gray-600 uppercase tracking-wider mb-2">Popular search tags:</p>
              <div className="flex flex-wrap gap-2">
                {["Cyber Warfare", "Strait of Hormuz", "Sanctions", "Diplomacy", "Zero-Day", "Dark Web"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="border border-gray-300 hover:border-red-600 hover:text-red-600 px-2.5 py-1 text-xs text-gray-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.map((art) => (
            <Link
              key={art.id}
              href={`/${art.category}/${art.slug}`}
              onClick={onClose}
              className="block py-3 px-2 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest font-serif">
                  {art.categoryLabel}
                </span>
                <span className="text-gray-300 text-xs">·</span>
                <span className="text-[11px] text-gray-400">{art.publishedAt}</span>
              </div>
              <h4 className="text-sm font-serif font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                {art.title}
              </h4>
              <p className="text-xs text-gray-500 font-sans line-clamp-1 mt-1">
                {art.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* Footer info */}
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-400">
          <span>Press ESC to exit</span>
          <span>Dommy Real-time Search Index</span>
        </div>
      </div>
    </div>
  );
}
