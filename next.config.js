/** @type {import('next').NextConfig} */

module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/data",
				destination: "/db.json",
			},
		];
	},
};
