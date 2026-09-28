"use client";

import React, { useState } from "react";

export default function SidebarNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="bg-neutral-50 border border-neutral-300 p-5 space-y-3">
      <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block border-b border-neutral-200 pb-1">
        WEEKLY DESK DIGEST
      </span>
      <h4 className="text-base font-serif font-bold text-neutral-950 leading-snug">
        The DOMMY Intelligence Brief
      </h4>
      <p className="text-xs text-neutral-600 font-serif leading-relaxed">
        Key investigative filings, sanctions data, and field correspondence delivered directly to your inbox every Friday.
      </p>

      {subscribed ? (
        <div className="bg-white border border-neutral-900 text-neutral-900 p-3 text-xs font-serif font-bold text-center">
          ✓ Subscribed to Desk Digest
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2 pt-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your work email..."
            required
            className="w-full px-3 py-2 bg-white text-neutral-900 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-900 placeholder-neutral-400"
          />
          <button
            type="submit"
            className="w-full bg-neutral-900 hover:bg-red-800 text-white text-xs font-bold py-2 uppercase tracking-wider transition-colors cursor-pointer"
          >
            Subscribe Free
          </button>
        </form>
      )}
    </div>
  );
}
