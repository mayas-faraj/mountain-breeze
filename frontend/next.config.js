/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "ar-SY", "it-IT"],
    defaultLocale: "en-US"
  }
}

module.exports = nextConfig
