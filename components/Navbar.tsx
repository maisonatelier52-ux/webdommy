"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/data/newsData";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    ...CATEGORIES.map((cat) => ({
      label: cat.label,
      href: `/${cat.slug}`,
    })),
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="w-full border-b border-gray-300 bg-white sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold tracking-wide font-serif transition-colors relative py-1 ${
                    active
                      ? "text-red-600 font-black"
                      : "text-gray-800 hover:text-gray-500"
                  }`}
                >
                  {link.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-3 left-0 right-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      active ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile active category indicator */}
          <div className="md:hidden flex items-center">
            <span className="text-sm font-bold text-black font-serif relative">
              {navLinks.find((l) => isActive(l.href))?.label || "Home"}
              <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-red-600" />
            </span>
          </div>

          {/* Right Action Icons: Search & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 text-red-600 hover:text-red-700 transition-colors cursor-pointer p-1"
              aria-label="Open search"
              title="Search news"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
              </svg>
              <span className="hidden md:inline text-xs font-serif font-bold text-gray-700 hover:text-red-600">
                Search
              </span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-800 hover:text-red-600 transition-colors p-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] text-white border-t border-gray-800 animate-fadeIn">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-6 py-3.5 border-b border-gray-800 font-serif font-bold text-sm tracking-wide transition-colors ${
                    active ? "text-red-500 bg-black/40" : "text-gray-200 hover:text-red-400"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-red-500" />}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
