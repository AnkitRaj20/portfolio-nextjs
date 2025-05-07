"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { formatDate } from "@/lib/dateFormatter";

const Page = ({ params }: any) => {
  const slug = params.id;
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  const host =
    tag === "development"
      ? "development-with-ankit.hashnode.dev"
      : "dsa-with-ankit.hashnode.dev";

  interface BlogData {
    title: string;
    coverImage?: { url?: string };
    content?: { html?: string };
    publishedAt?: string;
    author?: { name: string };
  }

  const [blogData, setBlogData] = useState<BlogData | null>(null);

  const fetchBlogsBySlug = async (host: string, slug: string) => {
    if (!host || !slug) return;

    try {
      const response = await axios.get("/api/hashnode-post", {
        params: { host, slug },
      });
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching blog post:", error);
    }
  };

  useEffect(() => {
    fetchBlogsBySlug(host, slug);
  }, [host, slug]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-gray-500 dark:via-slate-700 dark:to-zinc-900">
      <Head>
        <title>{blogData?.title || "Blog"}</title>
        <meta name="description" content={`Read blog on ${tag}`} />
        <meta property="og:image" content="/brand/og.png" />
      </Head>

      <article className="py-24 mx-auto w-full">
        <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            {blogData?.coverImage?.url ? (
              <Image
                src={blogData.coverImage.url}
                alt={blogData.title || "Blog cover"}
                fill
                className="object-fill rounded-lg"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                No image available
              </div>
            )}
          </div>

          <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
            {tag}
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">
            {blogData?.title}
          </h1>

          {(blogData?.publishedAt || blogData?.author) && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {blogData?.publishedAt && (
                <>Published on  {formatDate(blogData?.publishedAt)} </>
              )}
              {blogData?.author?.name && (
                <> by <span className="font-medium">{blogData.author.name}</span></>
              )}
            </p>
          )}
        </div>

        {blogData?.content?.html && (
          <div
            className="w-full mx-auto prose prose-zinc dark:prose-invert md:w-3/4 lg:w-1/2"
            dangerouslySetInnerHTML={{ __html: blogData.content.html }}
          />
        )}
      </article>
    </div>
  );
};

export default Page;
