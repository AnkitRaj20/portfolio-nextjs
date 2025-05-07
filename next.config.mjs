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
          hostname: 'cdn.hashnode.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  