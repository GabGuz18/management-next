/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			},
			{
				protocol: 'https',
				hostname: 'tailwindui.com'
			},
			{
				protocol: 'http',
				hostname: 'localhost:8000'
			},
		]
	}
}

module.exports = nextConfig
