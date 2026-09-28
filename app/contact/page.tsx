"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", secureDrop: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-4 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Front Page
        </Link>
        <span>›</span>
        <span className="text-red-800 font-semibold">Bureaus &amp; Secure Tips</span>
      </nav>

      {/* Header */}
      <div className="border-b-2 border-neutral-950 pb-6 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-800 block">
          COMMUNICATIONS &amp; INTELLIGENCE SUBMISSIONS
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-neutral-950">
          Newsroom Bureaus &amp; Whistleblower Desk
        </h1>
        <p className="text-sm text-neutral-600 font-serif italic max-w-2xl leading-relaxed">
          Encrypted channels for confidential tips, press inquiries, syndication requests, and rights of reply.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Col: Bureaus & PGP Key */}
        <div className="md:col-span-1 space-y-6">
          <div className="p-5 bg-neutral-50 border border-neutral-300 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1">
              Editorial Inquiries
            </h3>
            <div className="text-xs text-neutral-600 space-y-1">
              <p className="font-semibold text-neutral-800">General Newsroom:</p>
              <p className="font-mono text-neutral-900 font-bold">bureau@dommy.news</p>
            </div>
            <div className="text-xs text-neutral-600 space-y-1 pt-2">
              <p className="font-semibold text-neutral-800">Confidential Tips:</p>
              <p className="font-mono text-red-800 font-bold">tips@dommy.news</p>
            </div>
          </div>

          <div id="reply" className="p-5 bg-neutral-50 border border-neutral-300 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1">
              Right of Reply
            </h3>
            <p className="text-xs text-neutral-600 font-serif leading-relaxed">
              Parties mentioned in DOMMY investigations wishing to submit on-the-record statements or legal rebuttals may contact our compliance desk directly at <span className="font-mono font-bold text-neutral-900">legal@dommy.news</span>.
            </p>
          </div>

          <div className="p-5 bg-neutral-900 text-white border border-neutral-800 space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-red-400">
              PGP Public Key
            </h3>
            <p className="text-[11px] font-mono text-neutral-300 break-all leading-relaxed">
              4B89 21F0 98AA D19C 3012 8EF5 CC77 9104 22A1 5E39
            </p>
          </div>
        </div>

        {/* Right Col: Secure Tip Form */}
        <div className="md:col-span-2">
          {submitted ? (
            <div className="p-8 bg-neutral-50 border-2 border-neutral-900 text-center space-y-3">
              <h3 className="text-xl font-bold font-serif text-neutral-950">
                Transmission Received
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-serif max-w-md mx-auto leading-relaxed">
                Your dispatch has been encrypted and routed to the duty investigative editor. If your tip warrants further corroboration, our correspondents will reach out via your provided contact channel.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-red-800 transition-colors cursor-pointer"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-neutral-300 p-6 sm:p-8 bg-white space-y-4">
              <h3 className="text-lg font-serif font-bold text-neutral-950 border-b border-neutral-200 pb-2">
                Submit an Investigative Lead or Inquest
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Name (Optional / Pseudonym)
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Anonymous Source"
                    className="w-full border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 font-serif"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Contact Email / Signal ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="source@proton.me"
                    className="w-full border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 font-serif"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Subject / Bureau Desk *
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Documentation regarding maritime sanctions evasion"
                  className="w-full border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 font-serif"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Dispatch Message / Evidence Summary *
                </label>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Provide verifiable facts, dates, coordinates, or document references..."
                  className="w-full border border-neutral-300 px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 font-serif leading-relaxed"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="secure"
                  checked={form.secureDrop}
                  onChange={(e) => setForm({ ...form, secureDrop: e.target.checked })}
                  className="accent-red-800"
                />
                <label htmlFor="secure" className="text-xs text-neutral-600 font-serif cursor-pointer">
                  Request end-to-end PGP key exchange prior to sensitive document upload
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-950 hover:bg-red-800 text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors cursor-pointer"
              >
                Transmit to Editorial Desk
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
