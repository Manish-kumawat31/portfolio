/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.evbuc.com"
      }
    ]
  }
};

export default nextConfig;
