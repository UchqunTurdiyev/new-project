/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy', 'images.unsplash.com', 'avatars.mds.yandex.net'],
  },
}

module.exports = nextConfig
