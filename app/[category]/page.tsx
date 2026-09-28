import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CATEGORIES, getArticlesByCategory, getPopularArticles, ARTICLES, AUTHORS } from "@/data/newsData";
import SidebarNewsletter from "@/components/SidebarNewsletter";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = CATEGORIES.find(
    (c) => c.slug.toLowerCase() === category.toLowerCase()
  );

  if (!categoryInfo) {
    return {
      title: "Section Not Found — DOMMY",
    };
  }

  return {
    title: `${categoryInfo.label} — DOMMY Intelligence & Reporting`,
    description: categoryInfo.description,
  };
}

// Enable 100% Static HTML Export (SSG) for all categories
export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = CATEGORIES.find(
    (c) => c.slug.toLowerCase() === category.toLowerCase()
  );

  if (!categoryInfo) {
    notFound();
  }

  // Retrieve category articles & trending data
  const articles = getArticlesByCategory(category);
  const leadStory = articles.find((a) => a.isLead) || articles[0];
  const otherStories = leadStory ? articles.filter((a) => a.id !== leadStory.id) : articles;
  const trending = getPopularArticles(3);

  // Global archival dispatches from other beats to populate the lower wire section
  const globalWire = ARTICLES.filter((a) => a.category !== category).slice(0, 3);

  // Determine primary beat reporter for this category
  const primaryAuthor =
    leadStory?.author ||
    (category === "cybersecurity" || category === "dark-web"
      ? AUTHORS.claire
      : category === "war-conflict" || category === "world"
      ? AUTHORS.james
      : category === "investigation"
      ? AUTHORS.marcus
      : AUTHORS.diana);

  return (
    <div className="w-full space-y-8">
      {/* ==========================================
          1. BROADSHEET SECTION HEADER (No Cards)
          ========================================== */}
      <section className="border-b-2 border-neutral-950 pb-4 space-y-2">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-[11px] font-medium text-neutral-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Front Page
          </Link>
          <span>›</span>
          <span className="text-red-800 font-semibold">{categoryInfo.label}</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-800 block">
              DOMMY EDITORIAL DESK
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-neutral-950 tracking-tight">
              {categoryInfo.label}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-neutral-700 bg-neutral-100 px-3 py-1 border border-neutral-300">
              {articles.length} Verified Dispatches
            </span>
            <p className="text-xs sm:text-sm text-neutral-600 font-serif italic max-w-md hidden sm:block">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. LEAD SECTION STORY (Broadsheet Hero, No Cards)
          ========================================== */}
      {leadStory && (
        <article className="border-b-2 border-neutral-950 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Photo */}
            <div className="lg:col-span-7 space-y-2">
              <div className="relative w-full h-72 sm:h-96 md:h-[420px] bg-neutral-100 overflow-hidden">
                <Image
                  src={leadStory.image}
                  alt={leadStory.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              {leadStory.imageCaption && (
                <p className="text-xs text-neutral-500 italic flex justify-between gap-4">
                  <span>{leadStory.imageCaption}</span>
                  <span className="text-[10px] uppercase text-neutral-400 not-italic shrink-0">Photo: DOMMY Wire</span>
                </p>
              )}
            </div>

            {/* Right Headline & Meta */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 block">
                  LEAD INVESTIGATION &amp; DISPATCH
                </span>

                <Link href={`/${leadStory.category}/${leadStory.slug}/`} className="group block">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950 group-hover:text-red-900 transition-colors leading-tight">
                    {leadStory.title}
                  </h2>
                </Link>

                <p className="text-sm text-neutral-700 font-serif leading-relaxed">
                  {leadStory.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600">
                <Link
                  href={`/author/${leadStory.author.slug}/`}
                  className="font-bold text-neutral-900 hover:text-red-800 transition-colors"
                >
                  By {leadStory.author.name} ({leadStory.author.location.split(",")[0]})
                </Link>
                <div className="flex items-center gap-3">
                  <span>{leadStory.publishedAt}</span>
                  <Link
                    href={`/${leadStory.category}/${leadStory.slug}/`}
                    className="font-bold uppercase tracking-wider text-red-800 hover:underline"
                  >
                    Read Story →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* ==========================================
          3. MAIN FEED + SIDEBAR (Full News Stories)
          ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-2">
        
        {/* Left 8 Columns: Multi-Story Newspaper List */}
        <div className="lg:col-span-8 space-y-8">
          <div className="border-b-2 border-neutral-900 pb-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Recent Dispatches in {categoryInfo.label}
            </h3>
          </div>

          <div className="space-y-8 divide-y divide-neutral-200">
            {otherStories.map((art) => (
              <article key={art.id} className="pt-8 first:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  
                  {/* Story Details (Cols 1-8) */}
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

                    <p className="text-xs sm:text-sm text-neutral-600 font-serif leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <Link
                        href={`/author/${art.author.slug}/`}
                        className="font-semibold text-neutral-800 hover:underline"
                      >
                        By {art.author.name}
                      </Link>
                      <Link
                        href={`/${art.category}/${art.slug}/`}
                        className="text-red-800 font-bold hover:underline uppercase text-[11px] tracking-wider"
                      >
                        Full Report →
                      </Link>
                    </div>
                  </div>

                  {/* Story Thumbnail (Cols 9-12) */}
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

          {/* Additional Cross-Beat Wire Section */}
          <div className="pt-8 border-t-2 border-neutral-900 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-300 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Related Global Newsroom Wire
              </h4>
              <span className="text-[10px] text-neutral-500 uppercase">Cross-Desk Intelligence</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
              {globalWire.map((wire, idx) => (
                <div key={wire.id} className={`space-y-2 ${idx > 0 ? "sm:pl-6" : ""} pt-4 sm:pt-0 first:pt-0`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block">
                    {wire.categoryLabel}
                  </span>
                  <Link href={`/${wire.category}/${wire.slug}/`} className="group block">
                    <h5 className="text-xs font-serif font-bold text-neutral-900 group-hover:text-red-800 transition-colors leading-snug">
                      {wire.title}
                    </h5>
                  </Link>
                  <p className="text-[11px] text-neutral-500 font-serif line-clamp-2">
                    {wire.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Broadsheet Pagination */}
          <nav className="flex items-center justify-between pt-6 border-t border-neutral-200 text-xs" aria-label="Pagination">
            <span className="text-neutral-400 font-semibold cursor-not-allowed">
              ← Previous Page
            </span>
            <div className="flex items-center gap-2 font-serif font-bold text-neutral-900">
              <span className="px-2.5 py-1 border-b-2 border-neutral-900">Page 1</span>
              <span className="px-2.5 py-1 text-neutral-400 hover:text-neutral-900 cursor-pointer">2</span>
              <span className="px-2.5 py-1 text-neutral-400 hover:text-neutral-900 cursor-pointer">3</span>
            </div>
            <span className="text-neutral-900 font-semibold hover:text-red-800 cursor-pointer">
              Next Page →
            </span>
          </nav>
        </div>

        {/* Right 4 Columns: Desk Sidebar (No Cards) */}
        <aside className="lg:col-span-4 lg:border-l lg:border-neutral-200 lg:pl-8 space-y-8 lg:sticky lg:top-24 lg:self-start" aria-label="Desk Sidebar">
          
          {/* Box 1: Lead Beat Correspondent */}
          <div className="border-b border-neutral-200 pb-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1">
              Beat Correspondent
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <Link href={`/author/${primaryAuthor.slug}/`}>
                <img
                  src={primaryAuthor.avatar}
                  className="w-14 h-14 rounded-full object-cover ring-1 ring-neutral-300 hover:opacity-90"
                  alt={primaryAuthor.name}
                />
              </Link>
              <div>
                <Link
                  href={`/author/${primaryAuthor.slug}/`}
                  className="text-sm font-serif font-bold text-neutral-950 hover:text-red-800 transition-colors block"
                >
                  {primaryAuthor.name}
                </Link>
                <p className="text-xs text-neutral-500">{primaryAuthor.role}</p>
                <p className="text-[11px] text-neutral-400">📍 {primaryAuthor.location}</p>
              </div>
            </div>
            <p className="text-xs text-neutral-600 font-serif leading-relaxed">
              {primaryAuthor.bio}
            </p>
            <Link
              href={`/author/${primaryAuthor.slug}/`}
              className="text-xs font-bold uppercase tracking-wider text-red-800 hover:underline block pt-1"
            >
              View All Dispatches by {primaryAuthor.name} →
            </Link>
          </div>

          {/* Box 2: Most Read Intelligence */}
          <div className="border-b border-neutral-200 pb-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-900 pb-1">
              Most Read Intelligence
            </h4>
            <div className="space-y-4 divide-y divide-neutral-200">
              {trending.map((art, idx) => (
                <div key={art.id} className="pt-3 first:pt-0 flex items-start gap-3 group">
                  <span className="text-lg font-serif font-black text-neutral-400 group-hover:text-red-800 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase text-neutral-500 block">
                      {art.categoryLabel}
                    </span>
                    <Link
                      href={`/${art.category}/${art.slug}/`}
                      className="text-xs font-serif font-bold text-neutral-900 group-hover:text-red-800 transition-colors leading-snug block"
                    >
                      {art.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: Sidebar Newsletter */}
          <SidebarNewsletter />

        </aside>
      </div>

    </div>
  );
}
