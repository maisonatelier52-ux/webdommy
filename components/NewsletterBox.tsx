"use client";

import React, { useState } from "react";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="border border-gray-200 bg-gray-50 p-6 text-center">
      <h3 className="text-base font-black font-serif text-gray-900 mb-2">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-xs text-gray-500 font-sans mb-4">
        Receive unredacted daily intelligence dossiers, threat advisories, and breaking geopolitical alerts directly in your inbox.
      </p>

      {subscribed ? (
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 font-serif">
          ✓ Thank you for subscribing to Dommy Intelligence. Check your inbox for confirmation.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Enter Your Email... *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 text-xs px-3 py-2.5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest py-2.5 font-sans uppercase transition-colors cursor-pointer"
          >
            Subscribe
          </button>
          <p className="text-gray-400 text-[10px] font-sans mt-1">
            *we respect your privacy. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
}
