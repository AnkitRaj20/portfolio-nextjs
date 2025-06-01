import { NextResponse } from "next/server";
import axios from "axios";

const HASHNODE_API = "https://gql.hashnode.com/";

const createQuery = (host: string) => `
  query {
    publication(host: "${host}") {
      posts(first: 10) {
        edges {
          node {
            title
            slug
            brief
            publishedAt
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const hosts = {
    development: "development-with-ankit.hashnode.dev",
    dsa: "dsa-with-ankit.hashnode.dev",
  };

  try {
    const [devResponse, dsaResponse] = await Promise.all([
      axios.post(
        HASHNODE_API,
        { query: createQuery(hosts.development) },
        { headers: { "Content-Type": "application/json" } }
      ),
      axios.post(
        HASHNODE_API,
        { query: createQuery(hosts.dsa) },
        { headers: { "Content-Type": "application/json" } }
      ),
    ]);

    interface PostNode {
      title: string;
      slug: string;
      brief: string;
      publishedAt: string;
      coverImage: {
        url: string;
      };
      tag?: string;
    }

    interface PostEdge {
      node: PostNode;
    }

    interface PublicationResponse {
      data: {
        publication: {
          posts: {
            edges: PostEdge[];
          };
        };
      };
    }

    const development = (
      devResponse.data as PublicationResponse
    ).data.publication.posts.edges.map((edge) => {
      edge.node.tag = "development";
      return edge.node;
    });

    const dsa = (
      dsaResponse.data as PublicationResponse
    ).data.publication.posts.edges.map((edge: PostEdge) => {
      edge.node.tag = "dsa";
      return edge.node;
    });

    return new NextResponse(JSON.stringify({ development, dsa }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store", // 🚫 Prevent caching
      },
    });
  } catch (error: any) {
    console.error(
      "Hashnode API error:",
      error?.response?.data || error.message
    );
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch posts from Hashnode." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store", // Optional: no cache on error too
        },
      }
    );
  }
}
