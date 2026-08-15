"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import DonateCTA from "@/components/shared/DonateCTA";

interface BlogDoc {
  _id: string;
  slug: string;
  title: string;
  thumbnail: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  readTimeMinutes: number;
}

function BlogCard({ blog }: { blog: BlogDoc }) {
  const router = useRouter();
  return (
    <article
      onClick={() => router.push(`/blogs/${blog.slug}`)}
      className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition group"
    >
      <div className="overflow-hidden h-52 relative">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full border border-sky-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug group-hover:text-sky-700 transition-colors">
          {blog.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">{blog.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{blog.author}</span>
          <span>{new Date(blog.date).toDateString()} · {blog.readTimeMinutes} min read</span>
        </div>
      </div>
    </article>
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <Skeleton className="w-full h-52" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-between pt-1">
          <Skeleton className="h-3 w-1/4" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    const url = activeTag ? `/api/blogs?tag=${encodeURIComponent(activeTag)}` : "/api/blogs";
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((data) => setBlogs(data.blogs ?? []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, [activeTag]);

  // Collect all unique tags across loaded blogs
  const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags ?? [])));

  return (
    <main className="w-full bg-white">
      {/* ── Desktop ── */}
      <div className="max-sm:hidden py-16">
        {/* Header */}
        <div className="grid grid-cols-8 mb-10">
          <div className="col-span-1 flex items-center justify-end pr-2">
            <span className="w-16 h-0.5 bg-black" />
          </div>
          <div className="col-span-6">
            <h1 className="text-3xl font-bold tracking-wide">BLOG</h1>
            <p className="text-sm text-slate-500 mt-2">
              Stories, updates and insights from Saptasindhu NGO.
            </p>
          </div>
        </div>

        {/* Tag filter */}
        {!loading && allTags.length > 0 && (
          <div className="grid grid-cols-8 mb-10">
            <div className="col-span-1" />
            <div className="col-span-6 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  activeTag === null
                    ? "bg-sky-500 text-white border-sky-500"
                    : "border-slate-300 text-slate-600 hover:border-sky-400"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                    activeTag === tag
                      ? "bg-sky-500 text-white border-sky-500"
                      : "border-slate-300 text-slate-600 hover:border-sky-400"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-8">
          <div className="col-span-1" />
          <div className="col-span-6">
            {loading ? (
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => <CardSkeleton key={i} />)}
              </div>
            ) : blogs.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                {blogs.map((b) => <BlogCard key={b._id} blog={b} />)}
              </div>
            ) : (
              <p className="text-sm text-slate-500 italic">No blog posts yet. Check back soon!</p>
            )}
          </div>
          <div className="col-span-1" />
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-10 h-0.5 bg-black" />
          <h1 className="text-2xl font-bold tracking-wide">BLOG</h1>
        </div>
        <p className="text-sm text-slate-500 mb-6">Stories and updates from Saptasindhu NGO.</p>

        {/* Tag filter */}
        {!loading && allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                activeTag === null ? "bg-sky-500 text-white border-sky-500" : "border-slate-300 text-slate-600"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                  activeTag === tag ? "bg-sky-500 text-white border-sky-500" : "border-slate-300 text-slate-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => <CardSkeleton key={i} />)}
          </div>
        ) : blogs.length > 0 ? (
          <div className="space-y-6">
            {blogs.map((b) => <BlogCard key={b._id} blog={b} />)}
          </div>
        ) : (
          <p className="text-sm text-slate-500 italic">No blog posts yet. Check back soon!</p>
        )}
      </div>

      <DonateCTA />
    </main>
  );
}
