import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug, getRelatedArticles } from "@/data/newsData";
import ShareButtons from "@/components/ShareButtons";
import MorningBriefingBox from "@/components/MorningBriefingBox";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate dynamic SEO metadata for article
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Dispatch Not Found — DOMMY",
    };
  }

  return {
    title: `${article.title} — DOMMY Intelligence`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

// Enable 100% Static HTML Export (SSG) for all article routes
export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.category !== category) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.id, article.category, 3);

  return (
    <article className="w-full">
      {/* ==========================================
          1. BREADCRUMB NAVIGATION
          ========================================== */}
      <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Front Page
        </Link>
        <span>›</span>
        <Link href={`/${article.category}/`} className="hover:text-neutral-900 transition-colors">
          {article.categoryLabel}
        </Link>
        <span>›</span>
        <span className="text-red-800 font-semibold truncate max-w-xs">{article.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* ==========================================
            2. LEFT 8 COLUMNS: MAIN ARTICLE BODY (No Cards)
            ========================================== */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Category Kicker */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-800">
              {article.categoryLabel}
            </span>
            <span className="text-neutral-300">·</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
              Verified Newsroom Intelligence
            </span>
          </div>

          {/* Stately Serif Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-neutral-950 leading-[1.12] tracking-tight">
            {article.title}
          </h1>

          {/* Subdeck */}
          <p className="text-base sm:text-xl text-neutral-700 font-serif italic leading-relaxed">
            {article.excerpt}
          </p>

          {/* Byline & Share Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-y border-neutral-200 text-xs">
            <div className="flex items-center gap-3">
              <Link href={`/author/${article.author.slug}/`} className="shrink-0">
                <img
                  src={article.author.avatar}
                  className="w-11 h-11 rounded-full object-cover ring-1 ring-neutral-300"
                  alt={`${article.author.name} portrait`}
                />
              </Link>
              <div>
                <Link
                  href={`/author/${article.author.slug}/`}
                  className="font-bold text-neutral-900 hover:text-red-800 transition-colors text-sm font-serif"
                >
                  By {article.author.name}
                </Link>
                <p className="text-[11px] text-neutral-500">
                  {article.author.role} · <span className="font-medium text-neutral-700">{article.author.location}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4 text-[11px] text-neutral-500">
              <span>{article.publishedAt}</span>
              <span className="text-neutral-300">|</span>
              <ShareButtons title={article.title} />
            </div>
          </div>

          {/* Hero Photograph with Journalistic Caption */}
          <div className="space-y-2 pt-2">
            <div className="relative w-full h-72 sm:h-96 md:h-[440px] bg-neutral-100 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            {article.imageCaption && (
              <p className="text-xs text-neutral-500 italic flex justify-between gap-4">
                <span>{article.imageCaption}</span>
                <span className="text-[10px] uppercase text-neutral-400 not-italic shrink-0">Photo: DOMMY Wire</span>
              </p>
            )}
          </div>

          {/* Intelligence Takeaways Box (Broadsheet Style, Red Left Border) */}
          <div className="bg-neutral-50 border-l-4 border-red-800 p-5 sm:p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-800"></span>
              KEY TAKEAWAYS &amp; STRATEGIC IMPLICATIONS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 font-serif">
              <li className="flex items-start gap-2">
                <span className="text-red-800 font-bold">•</span>
                <span>
                  <strong>Primary Documentation:</strong> Reporting corroborated through direct records, satellite telemetry, and field accounts.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-800 font-bold">•</span>
                <span>
                  <strong>Regional Impact:</strong> Commercial and defense analysts predict lasting adjustments across supply routes and regulatory compliance.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-800 font-bold">•</span>
                <span>
                  <strong>Upcoming Timeline:</strong> Bilateral verification commissions are scheduled to convene in Vienna next week.
                </span>
              </li>
            </ul>
          </div>

          {/* Narrative Body Text (Classic Broadsheet Typography) */}
          <div className="prose prose-neutral max-w-none text-neutral-900 space-y-6 text-base sm:text-[17px] leading-relaxed font-serif">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "drop-cap leading-relaxed" : "leading-relaxed"}>
                {paragraph}
              </p>
            ))}

            {/* Pullout Quote in Broadsheet Style */}
            <div className="my-8 py-6 border-y-2 border-neutral-900 text-center space-y-2">
              <p className="text-lg sm:text-xl font-serif italic text-neutral-950 max-w-2xl mx-auto leading-snug">
                “Independent verification on the ground remains the only durable remedy against diplomatic miscalculation and regional escalation.”
              </p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-red-800">
                — DOMMY DIPLOMATIC BUREAU DOSSIER
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-neutral-200 text-xs">
            <span className="font-bold uppercase tracking-wider text-neutral-500 mr-2 text-[10px]">
              Filed Under:
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom Share Toolbar */}
          <div className="border-y border-neutral-200 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Share this Dispatch:
            </span>
            <ShareButtons title={article.title} />
          </div>

          {/* Author Bio Box (Broadsheet Style) */}
          <div className="border border-neutral-300 bg-neutral-50 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link href={`/author/${article.author.slug}/`}>
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full object-cover ring-1 ring-neutral-300"
                  />
                </Link>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block">
                    ABOUT THE CORRESPONDENT
                  </span>
                  <Link href={`/author/${article.author.slug}/`}>
                    <h3 className="text-base font-serif font-bold text-neutral-950 hover:text-red-800 transition-colors">
                      {article.author.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-neutral-500">
                    {article.author.role} · <strong className="text-neutral-700">{article.author.location}</strong>
                  </p>
                </div>
              </div>

              <Link
                href={`/author/${article.author.slug}/`}
                className="bg-neutral-900 hover:bg-red-800 text-white text-xs font-bold px-4 py-2 uppercase tracking-wider transition-colors shrink-0"
              >
                View Full Dossier &amp; Bio →
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 font-serif leading-relaxed border-t border-neutral-200 pt-3">
              {article.author.bio}
            </p>
          </div>

        </div>

        {/* ==========================================
            3. RIGHT 4 COLUMNS: SIDEBAR (No Cards)
            ========================================== */}
        <aside className="lg:col-span-4 lg:border-l lg:border-neutral-200 lg:pl-8 space-y-8 lg:sticky lg:top-24 lg:self-start" aria-label="Article Sidebar">
          
          {/* Card 1: Story Intelligence Overview */}
          <div className="border-b border-neutral-200 pb-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1">
              Dispatch Metadata
            </h4>
            <div className="space-y-2 text-xs divide-y divide-neutral-100">
              <div className="flex justify-between pt-1.5 first:pt-0">
                <span className="text-neutral-500">Dateline:</span>
                <span className="font-semibold text-neutral-900">{article.author.location}</span>
              </div>
              <div className="flex justify-between pt-1.5">
                <span className="text-neutral-500">Desk:</span>
                <span className="font-semibold text-neutral-900">{article.categoryLabel}</span>
              </div>
              <div className="flex justify-between pt-1.5">
                <span className="text-neutral-500">Verification:</span>
                <span className="font-semibold text-emerald-700">Corroborated by Newsroom</span>
              </div>
              <div className="flex justify-between pt-1.5">
                <span className="text-neutral-500">Estimated Reading:</span>
                <span className="font-semibold text-neutral-900">{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Related Dispatches */}
          <div className="border-b border-neutral-200 pb-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1">
              Related Dispatches
            </h4>
            <div className="space-y-4 divide-y divide-neutral-200">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((rel, index) => (
                  <div key={rel.id} className="pt-3 first:pt-0 flex items-start gap-3 group">
                    <span className="text-lg font-serif font-black text-neutral-400 group-hover:text-red-800 transition-colors">
                      0{index + 1}
                    </span>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold uppercase text-neutral-500 block">
                        {rel.categoryLabel}
                      </span>
                      <Link
                        href={`/${rel.category}/${rel.slug}/`}
                        className="text-xs font-serif font-bold text-neutral-900 group-hover:text-red-800 transition-colors leading-snug block"
                      >
                        {rel.title}
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-neutral-400 font-serif italic">No additional dispatches listed in this beat.</p>
              )}
            </div>
          </div>

          {/* Card 3: Morning Briefing Box */}
          <MorningBriefingBox />

        </aside>
      </div>
    </article>
  );
}
