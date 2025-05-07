// app/api/hashnode-post/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const HASHNODE_API = "https://gql.hashnode.com/";

const createPostQuery = (host: string, slug: string) => `
  query {
    publication(host: "${host}") {
      post(slug: "${slug}") {
        title
        slug
        brief
        publishedAt
        coverImage {
          url
        }
        author {
          name
          profilePicture
        }
        content {
          html
          markdown
          text
        }
      }
    }
  }
`;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const host = searchParams.get("host");
  const slug = searchParams.get("slug");

  console.log("API Request - Host:", host, "Slug:", slug);

  if (!host || !slug) {
    return NextResponse.json(
      { error: "Missing required query parameters: host and slug." },
      { status: 400 }
    );
  }

  try {
    const response = await axios.post(
      HASHNODE_API,
      { query: createPostQuery(host, slug) },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("Hashnode response:", response.data);

    const post = response.data.data.publication.post;

    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error:any) {
    console.error("Hashnode API error:", error?.response?.data || error.message);
    return NextResponse.json(
      { error: "Failed to fetch post from Hashnode." },
      { status: 500 }
    );
  }
}
