import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read technical articles and insights by Ankit Raj.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
