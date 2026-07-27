/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.prod.website-files.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.simpleicons.org',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.hashnode.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.jsdelivr.net',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  