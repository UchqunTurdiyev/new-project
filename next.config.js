/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'image.tmdb.org',
			'rb.gy',
			'images.unsplash.com',
			'avatars.mds.yandex.net',
			'i.gifer.com',
			'i.pinimg.com',
			'yandex.ru',
		],
	},
};

module.exports = nextConfig;
