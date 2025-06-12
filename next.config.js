/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

// next.config.js
module.exports = {nextConfig,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    unoptimized: true,
    domains: ['gatsby-starter-portfolio-minimal.netlify.app', "sendatrack.com","scontent.ftng2-1.fna.fbcdn.net","github-production-user-asset-6210df.s3.amazonaws.com" ], // Add your domain here
  },
};