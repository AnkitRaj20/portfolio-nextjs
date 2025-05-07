"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Card from "@/components/shared/Card";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const detailsPage = (slug: string, tag: string) => {
    router.push(`/blogs/${slug}?tag=${tag}`);
  };
  const [blogs, setBlogs] = useState({ development: [], dsa: [] });

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/hashnode");
      console.log("response", response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const renderBlogs = (filterTag: string | null = null) => {
    let filteredBlogs: any = [];

    if (filterTag === "all") {
      filteredBlogs = [...blogs.development, ...blogs.dsa];
    } else if (filterTag === "development") {
      filteredBlogs = blogs.development;
    } else if (filterTag === "dsa") {
      filteredBlogs = blogs.dsa;
    }

    return (
      // <div className="space-y-6 px-6 lg:px-24 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mx-8 sm:mx-12 md:mx-24 text-center mb-8">
        {filteredBlogs?.map((post: any, index: any) => (
          <div key={index} onClick={() => detailsPage(post.slug,post.tag)}>
            <Card
              id={post.slug}
              name={post.title}
              description={post?.brief}
              publishedAt={post?.publishedAt}
              image={post?.coverImage?.url}
              tag={post.tag}
              isBlog={true}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.2] relative flex justify-center flex-wrap py-8">
      <span className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 flex items-center justify-center ">
        My Blogs
      </span>
      <Tabs defaultValue="all">
        <TabsList className="lg:mx-24 mx-6 my-2 text-black dark:bg-zinc-900 dark:text-white">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="dsa">DSA</TabsTrigger>
        </TabsList>

        <TabsContent value="all">{renderBlogs("all")}</TabsContent>
        <TabsContent value="development">
          {renderBlogs("development")}
        </TabsContent>
        <TabsContent value="dsa">{renderBlogs("dsa")}</TabsContent>
      </Tabs>
    </div>
  );
}
