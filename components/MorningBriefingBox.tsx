"use client";

import React, { useState } from "react";

export default function MorningBriefingBox() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="bg-neutral-50 border border-neutral-300 p-5 space-y-3">
      <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block border-b border-neutral-200 pb-1">
        DAILY DISPATCH
      </span>
      <h4 className="text-base font-serif font-bold text-neutral-950 leading-snug">
        DOMMY Morning Intelligence
      </h4>
      <p className="text-xs text-neutral-600 font-serif leading-relaxed">
        The essential global events, diplomatic analysis, and investigative journalism delivered to your inbox every morning.
      </p>

      {subscribed ? (
        <div className="bg-white border border-neutral-900 text-neutral-900 p-3 text-xs font-serif font-bold text-center">
          ✓ Subscribed to Morning Brief
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2 pt-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email for daily brief..."
            required
            className="w-full px-3 py-2 bg-white text-neutral-900 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-900 placeholder-neutral-400"
          />
          <button
            type="submit"
            className="w-full bg-neutral-900 hover:bg-red-800 text-white text-xs font-bold py-2 uppercase tracking-wider transition-colors cursor-pointer"
          >
            Get Daily Brief
          </button>
        </form>
      )}
    </div>
  );
}
