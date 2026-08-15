"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import DonateCTA from "@/components/shared/DonateCTA";

interface BlogDoc {
  _id: string;
  slug: string;
  title: string;
  thumbnail: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  readTimeMinutes: number;
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const [blog, setBlog] = useState<BlogDoc | null>(null);
  const [related, setRelated] = useState<BlogDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    Promise.all([
      fetch(`/api/blogs/${slug}`).then((r) => r.json()),
      fetch(`/api/blogs?limit=4`).then((r) => r.json()),
    ])
      .then(([detail, others]) => {
        if (!detail.blog) { setLoading(false); return; }
        setBlog(detail.blog);
        setRelated((others.blogs ?? []).filter((b: BlogDoc) => b.slug !== slug).slice(0, 3));
      })
      .catch(() => setBlog(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="py-16 grid grid-cols-8 bg-white">
        <div className="col-span-1" />
        <div className="col-span-6 space-y-6">
          <Skeleton className="w-full h-[420px] rounded-3xl" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        <div className="col-span-1" />
      </main>
    );
  }

  if (!blog) return (
    <main className="py-28 flex items-center justify-center bg-white">
      <p className="text-slate-500">Blog post not found.</p>
    </main>
  );

  return (
    <>
      {/* ══ DESKTOP ══ */}
      <main className="py-16 bg-white max-sm:hidden">
        <div className="grid grid-cols-8">
          <div className="col-span-1" />
          <div className="col-span-6">
            {/* Cover */}
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden mb-8">
              <Image src={blog.thumbnail} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" priority />
            </div>

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl font-bold leading-tight mb-4">{blog.title}</h1>

            <div className="flex items-center gap-3 text-sm text-slate-500 mb-10">
              <span>{blog.author}</span>
              <span>·</span>
              <span>{new Date(blog.date).toDateString()}</span>
              <span>·</span>
              <span>{blog.readTimeMinutes} min read</span>
            </div>

            {/* Content */}
            <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed whitespace-pre-line text-base">
              {blog.content}
            </div>
          </div>
          <div className="col-span-1" />
        </div>

        {/* Related blogs */}
        {related.length > 0 && (
          <div className="mt-20 grid grid-cols-8">
            <div className="col-span-1 flex items-center justify-end pr-2">
              <span className="w-16 h-0.5 bg-black" />
            </div>
            <div className="col-span-6">
              <h2 className="text-2xl font-bold tracking-wide mb-8">MORE FROM THE BLOG</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {related.map((b) => (
                  <article
                    key={b._id}
                    onClick={() => router.push(`/blogs/${b.slug}`)}
                    className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition group"
                  >
                    <div className="overflow-hidden h-44 relative">
                      <Image
                        src={b.thumbnail}
                        alt={b.title}
                        fill
                        sizes="33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-slate-500 mb-2">{new Date(b.date).toDateString()}</p>
                      <h3 className="text-base font-semibold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                        {b.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-span-1" />
          </div>
        )}
      </main>

      {/* ══ MOBILE ══ */}
      <main className="py-6 bg-white px-4 md:hidden">
        <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6">
          <Image src={blog.thumbnail} alt={blog.title} fill sizes="100vw" className="object-cover" priority />
        </div>

        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.map((tag) => (
              <span key={tag} className="text-xs bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full border border-sky-200">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-2xl font-bold leading-tight mb-3">{blog.title}</h1>

        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-8">
          <span>{blog.author}</span>
          <span>·</span>
          <span>{new Date(blog.date).toDateString()}</span>
          <span>·</span>
          <span>{blog.readTimeMinutes} min read</span>
        </div>

        <div className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-0.5 bg-black" />
              <h2 className="text-lg font-bold tracking-wide">MORE FROM THE BLOG</h2>
            </div>
            <div className="space-y-5">
              {related.map((b) => (
                <article
                  key={b._id}
                  onClick={() => router.push(`/blogs/${b.slug}`)}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden active:scale-[0.98] transition"
                >
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image src={b.thumbnail} alt={b.title} fill sizes="100vw" className="object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-1">{new Date(b.date).toDateString()}</p>
                    <h3 className="text-sm font-semibold text-slate-900">{b.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </main>

      <DonateCTA />
    </>
  );
}
