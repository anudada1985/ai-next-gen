/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/(.*)", // apply to all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com;
              connect-src 'self' https://firestore.googleapis.com https://firebase.googleapis.com https://www.googleapis.com https://www.google-analytics.com;
              img-src 'self' data: https:;
              style-src 'self' 'unsafe-inline';
              font-src 'self' data:;
            `.replace(/\s{2,}/g, " "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
