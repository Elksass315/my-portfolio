const siteUrl = "https://www.omarelksass.com";

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl,
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 5000,
    autoLastmod: true,
    exclude: ["/api/*"],
    robotsTxtOptions: {
        policies: [{ userAgent: "*", allow: "/" }],
        additionalSitemaps: [`${siteUrl}/sitemap.xml`],
    },
};

module.exports = config;
