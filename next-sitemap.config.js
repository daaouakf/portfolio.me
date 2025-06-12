/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://abdessamadpas.tech',
    generateRobotsTxt: true, // (optional)
    outDir : './out',
  }