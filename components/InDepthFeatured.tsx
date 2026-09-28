"use client";

import React, { useState } from "react";

export default function InDepthFeatured() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section
      id="newsletter"
      className="w-full bg-neutral-100 border-y-2 border-neutral-900 p-8 sm:p-12 mb-8"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-red-800 block">
            Direct to Your Inbox
          </span>
          <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-serif font-black text-neutral-950 leading-tight">
            The DOMMY Morning Intelligence Brief
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-serif leading-relaxed">
            Delivered at 06:00 GMT daily. Verified geopolitical developments, investigative previews, and primary document dossiers curated by our global correspondents.
          </p>
        </div>

        <div className="w-full md:w-auto shrink-0">
          {subscribed ? (
            <div className="bg-white border-2 border-neutral-900 text-neutral-900 px-6 py-4 text-xs font-serif font-bold text-center">
              ✓ You are subscribed to the DOMMY Morning Dispatch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="px-4 py-2.5 bg-white text-neutral-900 placeholder-neutral-400 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-900 w-full sm:w-72"
              />
              <button
                type="submit"
                className="bg-neutral-950 hover:bg-red-800 text-white text-xs font-bold px-6 py-2.5 uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
              >
                Subscribe Free
              </button>
            </form>
          )}
          <p className="text-[11px] text-neutral-500 mt-2 font-serif italic text-center sm:text-left">
            No advertising noise. Unsubscribe at any time with one click.
          </p>
        </div>
      </div>
    </section>
  );
}
