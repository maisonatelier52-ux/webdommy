"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "World", href: "/world/" },
    { label: "Conflict & Defense", href: "/war-conflict/" },
    { label: "Geo-Politics", href: "/geo-politics/" },
    { label: "Technology & AI", href: "/cybersecurity/" },
    { label: "Dark Web & Cyber", href: "/dark-web/" },
    { label: "Investigations", href: "/investigation/" },
    { label: "About DOMMY", href: "/about/" },
  ];

  return (
    <header className="w-full bg-white border-b border-neutral-300">
      {/* ==========================================
          1. TOP UTILITY & DATELINE BAR
          ========================================== */}
      <div className="border-b border-neutral-200 bg-neutral-50 text-[11px] text-neutral-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Live Date & Edition */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-neutral-900">
              Wednesday, September 16, 2026
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span className="hidden sm:inline text-neutral-600">
              Global Edition: Geneva · London · Washington · Singapore
            </span>
          </div>

          {/* Right: Market Indicators & Utility Links */}
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-2 text-neutral-700">
              <span className="font-medium text-[10px] uppercase tracking-wider text-neutral-500">Markets:</span>
              <span>S&amp;P 500 <strong className="text-emerald-700 font-semibold">+0.42%</strong></span>
              <span className="text-neutral-300">·</span>
              <span>Brent Crude <strong className="text-red-700 font-semibold">-0.18%</strong></span>
            </span>
            <span className="hidden md:inline text-neutral-300">|</span>
            <Link href="/editorial-policy/" className="hover:text-neutral-900 transition-colors">
              Editorial Standards
            </Link>
            <span className="text-neutral-300">·</span>
            <Link href="/contact/" className="hover:text-neutral-900 transition-colors">
              Bureaus
            </Link>
          </div>
        </div>
      </div>

      {/* ==========================================
          2. GRAND BROADSHEET MASTHEAD
          ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Newsroom Volume & Weather (Desktop) */}
          <div className="hidden lg:block text-left text-xs text-neutral-500 leading-tight">
            <p className="font-semibold text-neutral-800">Vol. XVIII, No. 248</p>
            <p className="mt-0.5">International Daily Edition</p>
            <p className="text-[11px] text-neutral-400 mt-1">ISSN 2490-8831</p>
          </div>

          {/* Center: Authoritative Serif Masthead */}
          <div className="text-center space-y-1">
            <Link href="/" className="inline-block group" aria-label="DOMMY - Return to Homepage">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight font-black text-neutral-950 group-hover:text-red-900 transition-colors">
                DOMMY
              </h1>
            </Link>
            <p className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] text-neutral-600 font-medium">
              The Independent Journal of Record &amp; Global Intelligence
            </p>
          </div>

          {/* Right: Subscribe & Search Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/search/"
              className="p-2 text-neutral-600 hover:text-neutral-950 border border-neutral-200 rounded hover:bg-neutral-50 transition-colors text-xs flex items-center gap-1.5"
              aria-label="Search dispatches"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search</span>
            </Link>

            <a
              href="#newsletter"
              className="bg-neutral-900 hover:bg-red-800 text-white text-xs font-semibold px-4 py-2 rounded transition-colors shadow-xs"
            >
              Subscribe Free
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-800 hover:bg-neutral-100 rounded border border-neutral-200"
              aria-label="Toggle main menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          3. SECTION NAVIGATION BAR (Double-ruled Broadsheet)
          ========================================== */}
      <nav
        className="border-t-2 border-neutral-950 border-b border-neutral-200 bg-white sticky top-0 z-40"
        aria-label="Primary news sections"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto scrollbar-none py-2 text-xs sm:text-[13px] font-semibold tracking-tight text-neutral-800 divide-x divide-neutral-200">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1 first:pl-0 whitespace-nowrap transition-colors hover:text-red-800 ${
                    isActive ? "text-red-700 font-bold border-b-2 border-red-700 -mb-[9px] pb-[7px]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-neutral-50 px-4 py-4 space-y-1 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-neutral-800 hover:bg-neutral-200/60 rounded"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-200 mt-2 space-y-1 text-xs text-neutral-600">
              <Link
                href="/about/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 hover:text-neutral-900"
              >
                About DOMMY &amp; Newsroom Staff
              </Link>
              <Link
                href="/editorial-policy/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 hover:text-neutral-900"
              >
                Editorial Charter &amp; Fact-Checking
              </Link>
              <Link
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 hover:text-neutral-900"
              >
                Contact Regional Bureaus
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ==========================================
          4. BREAKING NEWS WIRE BAR
          ========================================== */}
      <div className="border-b border-neutral-200 bg-neutral-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="bg-red-700 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-xs shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white live-indicator"></span>
              BREAKING WIRE
            </span>
            <Link
              href="/geo-politics/high-stakes-diplomatic-envoy-meets-leaders-peace-framework/"
              className="text-neutral-200 hover:text-white transition-colors truncate font-normal text-xs"
            >
              Geneva Summit: Envoys finalize preliminary framework for safe commercial maritime transit in contested waters.
            </Link>
          </div>

          <Link
            href="/geo-politics/"
            className="text-[11px] text-neutral-400 hover:text-white shrink-0 hidden sm:inline font-medium"
          >
            Developing Story →
          </Link>
        </div>
      </div>
    </header>
  );
}
