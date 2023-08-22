/** @type {import('next').NextConfig} */

module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/data",
				destination: "http://localhost:8000/api/data",
			},
            {
                source: '/api/data/:number', 
                destination: 'http://localhost:8000/api/data/:number', 
              },
		];
	},
};
