import React from "react";
import Link from "next/link";
import { AUTHORS } from "@/data/newsData";

export const metadata = {
  title: "About DOMMY — The Journal of Record & Global Intelligence",
  description: "Learn about DOMMY's editorial mission, independent reporting methodology, and global foreign correspondents.",
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Front Page
        </Link>
        <span>›</span>
        <span className="text-red-800 font-semibold">About the Publication</span>
      </nav>

      {/* Header Banner */}
      <section className="border-b-2 border-neutral-950 pb-6 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-800 block">
          NEWSROOM MISSION &amp; GOVERNANCE
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-neutral-950 tracking-tight">
          About DOMMY
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-serif italic max-w-2xl leading-relaxed">
          The Independent Journal of Record &amp; Global Intelligence, providing verified reporting on international diplomacy, economic policy, conflict intelligence, and investigative accountability.
        </p>
      </section>

      {/* Main Narrative (Broadsheet Typography) */}
      <div className="space-y-8 text-neutral-800 font-serif leading-relaxed text-sm sm:text-base">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            Our Mission &amp; Editorial Independence
          </h2>
          <p className="drop-cap">
            Founded as an independent digital news organization, <strong>DOMMY</strong> delivers rigorous, multi-source journalism covering global flashpoints, cyber warfare, diplomatic negotiations, and institutional corruption.
          </p>
          <p>
            Every dispatch undergoes multi-tiered verification across official registries, field witnesses, and cross-border documentary archives. We operate with strict editorial autonomy, free from state subsidies, political affiliations, or commercial influence.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 border-b border-neutral-900 pb-1">
            Verification Protocol &amp; Standards
          </h2>
          <p>
            In an era of rapid information diffusion and disinformation campaigns, our correspondents adhere to primary-source documentation principles:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Cross-Verification:</strong> Crucial investigative claims require minimum two independent, corroborated documentary sources.</li>
            <li><strong>Transparency:</strong> Whenever security conditions permit, primary datasets, satellite imagery, and archival records are linked for public scrutiny.</li>
            <li><strong>Right of Reply:</strong> Any individual or entity subject to investigative scrutiny is provided reasonable advance notice and formal opportunity to respond.</li>
          </ul>
        </div>

        {/* Editorial Bureau / Correspondents (No Cards, Clean Newspaper List) */}
        <div className="space-y-6 pt-4">
          <div className="border-b-2 border-neutral-950 pb-2 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-serif font-black text-neutral-950">
              Editorial Bureau &amp; Staff Correspondents
            </h2>
            <span className="text-xs text-red-800 font-bold uppercase tracking-wider">
              {Object.keys(AUTHORS).length} Foreign Bureaus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            {Object.values(AUTHORS).map((author, idx) => (
              <div
                key={author.id}
                className={`space-y-3 ${idx % 2 === 1 ? "sm:pl-8" : ""} pt-6 sm:pt-0 first:pt-0`}
              >
                <div className="flex items-center gap-3">
                  <Link href={`/author/${author.slug}/`}>
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-14 h-14 rounded-full object-cover ring-1 ring-neutral-300 hover:opacity-90"
                    />
                  </Link>
                  <div>
                    <Link
                      href={`/author/${author.slug}/`}
                      className="text-base font-serif font-bold text-neutral-950 hover:text-red-800 transition-colors block"
                    >
                      {author.name}
                    </Link>
                    <p className="text-xs text-neutral-500 font-sans">{author.role}</p>
                    <p className="text-[11px] text-neutral-400 font-sans">📍 {author.location}</p>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 font-serif leading-relaxed line-clamp-3">
                  {author.bio}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/author/${author.slug}/`}
                    className="text-xs font-bold uppercase tracking-wider text-red-800 hover:underline"
                  >
                    View Bureau Profile &amp; Dispatches →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
