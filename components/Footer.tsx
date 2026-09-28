import React from "react";
import Link from "next/link";
import { CATEGORIES, AUTHORS } from "@/data/newsData";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-neutral-950 mt-16 pt-12 pb-16 text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top: Newspaper Masthead & Mission */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-neutral-200">
          <div className="space-y-2">
            <Link href="/" className="inline-block group">
              <span className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-neutral-950 group-hover:text-red-900 transition-colors">
                DOMMY
              </span>
            </Link>
            <p className="text-xs font-serif italic text-neutral-500 max-w-md">
              The Independent Journal of Record &amp; Global Intelligence. Dedicated to verified foreign correspondence, open-source intelligence, and cross-border investigative reporting.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-neutral-700">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-800 transition-colors">
              Twitter / X
            </a>
            <span className="text-neutral-300">·</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-800 transition-colors">
              LinkedIn
            </a>
            <span className="text-neutral-300">·</span>
            <Link href="/about/" className="hover:text-red-800 transition-colors">
              Editorial Board
            </Link>
            <span className="text-neutral-300">·</span>
            <Link href="/contact/" className="hover:text-red-800 transition-colors">
              Global Bureaus
            </Link>
          </div>
        </div>

        {/* 4 Broadsheet Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          {/* Col 1: News Desks */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-950 text-[11px] border-b border-neutral-900 pb-1">
              News Desks
            </h4>
            <ul className="space-y-2 text-neutral-600">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}/`} className="hover:text-red-800 transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Editorial Correspondents */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-950 text-[11px] border-b border-neutral-900 pb-1">
              Editorial Bureau
            </h4>
            <ul className="space-y-2 text-neutral-600">
              {Object.values(AUTHORS).map((author) => (
                <li key={author.slug}>
                  <Link href={`/author/${author.slug}/`} className="hover:text-red-800 transition-colors">
                    {author.name} <span className="text-[10px] text-neutral-400">({author.location.split(",")[0]})</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/about/" className="text-red-800 font-semibold hover:underline">
                  Full Newsroom Directory →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Standards & Governance */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-950 text-[11px] border-b border-neutral-900 pb-1">
              Ethics &amp; Standards
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <Link href="/editorial-policy/" className="hover:text-red-800 transition-colors">
                  Editorial Charter &amp; Code of Ethics
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="hover:text-red-800 transition-colors">
                  Fact-Checking &amp; Verification Protocol
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="hover:text-red-800 transition-colors">
                  Corrections Policy &amp; Archive
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="hover:text-red-800 transition-colors">
                  Source Protection Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-950 text-[11px] border-b border-neutral-900 pb-1">
              DOMMY Newsroom
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <Link href="/about/" className="hover:text-red-800 transition-colors">
                  About the Publication
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-red-800 transition-colors">
                  Press Inquiries &amp; Syndication
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-red-800 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-condition/" className="hover:text-red-800 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Broadsheet Copyright Rule */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 DOMMY Digital Media Inc. All rights reserved.</p>
          <p>Published daily from Geneva, London, Washington D.C., and Singapore.</p>
        </div>
      </div>
    </footer>
  );
}
