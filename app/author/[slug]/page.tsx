import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllAuthors, getAuthorBySlug, getArticlesByAuthor, AUTHORS } from "@/data/newsData";
import SidebarNewsletter from "@/components/SidebarNewsletter";
import type { Metadata } from "next";

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic SEO metadata for author profile
export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: "Correspondent Not Found — DOMMY",
    };
  }

  return {
    title: `${author.name} — ${author.role} | DOMMY Newsroom`,
    description: author.bio,
    openGraph: {
      title: `${author.name} — DOMMY Editorial Staff`,
      description: author.bio,
      images: [{ url: author.avatar }],
    },
  };
}

// Enable 100% Static HTML Export (SSG) for all authors
export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorProfilePage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = getArticlesByAuthor(author.slug);

  return (
    <div className="w-full space-y-8">
      {/* ==========================================
          1. BREADCRUMB NAVIGATION
          ========================================== */}
      <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Front Page
        </Link>
        <span>›</span>
        <Link href="/about/" className="hover:text-neutral-900 transition-colors">
          Editorial Bureau
        </Link>
        <span>›</span>
        <span className="text-red-800 font-semibold">{author.name}</span>
      </nav>

      {/* ==========================================
          2. AUTHOR HERO PROFILE (Broadsheet Style, No Cards)
          ========================================== */}
      <section className="border-b-2 border-neutral-950 pb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <img
              src={author.avatar}
              alt={`${author.name} portrait`}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-2 ring-neutral-300 shadow-xs"
            />
          </div>

          {/* Details */}
          <div className="flex-1 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-800 block">
              DOMMY STAFF CORRESPONDENT
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-neutral-950 tracking-tight">
              {author.name}
            </h1>
            <p className="text-xs text-neutral-600 font-serif">
              <strong>{author.role}</strong> · Bureau: <span className="font-semibold text-neutral-900">{author.location}</span>
            </p>

            <p className="text-sm text-neutral-800 font-serif leading-relaxed max-w-3xl pt-1">
              {author.bio}
            </p>

            {/* Social / Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-300 hover:border-neutral-900 text-neutral-800 hover:text-neutral-950 transition-colors font-medium"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Follow on X</span>
                </a>
              )}
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-300 hover:border-neutral-900 text-neutral-800 hover:text-neutral-950 transition-colors font-medium"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64 0 .91.73 1.64 1.64 1.64.91 0 1.64-.73 1.64-1.64 0-.91-.73-1.64-1.64-1.64z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              )}
              <span className="text-[11px] text-neutral-500 py-1">
                {articles.length} Published Dispatches
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. MAIN CONTENT: AUTHOR'S ARTICLES & SIDEBAR
          ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-2">
        
        {/* Left 8 Columns: Articles Feed */}
        <div className="lg:col-span-8 space-y-6">
          <div className="border-b border-neutral-900 pb-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Published Dispatches by {author.name}
            </h2>
          </div>

          {articles.length === 0 ? (
            <p className="text-xs text-neutral-500 font-serif italic py-6">
              No dispatches currently listed for this correspondent.
            </p>
          ) : (
            <div className="space-y-8 divide-y divide-neutral-200">
              {articles.map((art) => (
                <article key={art.id} className="pt-8 first:pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                    
                    {/* Content (Cols 1-8) */}
                    <div className="sm:col-span-8 space-y-2 order-2 sm:order-1">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
                        <span className="font-bold text-red-800">{art.categoryLabel}</span>
                        <span>·</span>
                        <span>{art.publishedAt}</span>
                        <span>·</span>
                        <span>{art.readTime}</span>
                      </div>

                      <Link href={`/${art.category}/${art.slug}/`} className="group block">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-neutral-900 group-hover:text-red-800 transition-colors leading-snug">
                          {art.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-neutral-600 font-serif leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>

                      <div className="pt-2">
                        <Link
                          href={`/${art.category}/${art.slug}/`}
                          className="text-red-800 font-bold hover:underline uppercase text-[11px] tracking-wider"
                        >
                          Read Full Dispatch →
                        </Link>
                      </div>
                    </div>

                    {/* Image (Cols 9-12) */}
                    <div className="sm:col-span-4 order-1 sm:order-2">
                      <div className="relative w-full h-44 sm:h-36 bg-neutral-100 overflow-hidden">
                        <Image
                          src={art.image}
                          alt={art.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          className="object-cover"
                        />
                      </div>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Right 4 Columns: Other Correspondents & Standards */}
        <aside className="lg:col-span-4 lg:border-l lg:border-neutral-200 lg:pl-8 space-y-8 lg:sticky lg:top-24 lg:self-start" aria-label="Correspondent Sidebar">
          
          {/* Card 1: Meet the Editorial Bureau */}
          <div className="border-b border-neutral-200 pb-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1">
              DOMMY Editorial Bureau
            </h4>
            <div className="space-y-3 divide-y divide-neutral-200">
              {Object.values(AUTHORS)
                .filter((a) => a.slug !== author.slug)
                .map((peer) => (
                  <div key={peer.id} className="pt-3 first:pt-0 flex items-center gap-3">
                    <Link href={`/author/${peer.slug}/`}>
                      <img
                        src={peer.avatar}
                        alt={peer.name}
                        className="w-10 h-10 rounded-full object-cover ring-1 ring-neutral-300 hover:opacity-90"
                      />
                    </Link>
                    <div className="overflow-hidden">
                      <Link
                        href={`/author/${peer.slug}/`}
                        className="text-xs font-serif font-bold text-neutral-900 hover:text-red-800 transition-colors block truncate"
                      >
                        {peer.name}
                      </Link>
                      <p className="text-[11px] text-neutral-500 truncate">{peer.role}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Card 2: Standards Statement */}
          <div className="border-b border-neutral-200 pb-6 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1">
              Editorial Standards
            </h4>
            <p className="text-xs text-neutral-600 font-serif leading-relaxed">
              Every dispatch by DOMMY correspondents adheres to the highest tenets of independent journalism: multi-source verification, factual impartiality, and strict separation from commercial interests.
            </p>
            <Link
              href="/editorial-policy/"
              className="text-red-800 font-bold text-xs inline-block hover:underline pt-1"
            >
              Read our Editorial Charter →
            </Link>
          </div>

          {/* Card 3: Newsletter Box */}
          <SidebarNewsletter />

        </aside>
      </div>
    </div>
  );
}
