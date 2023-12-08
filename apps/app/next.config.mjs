/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	/** Enables hot reloading for local packages without a build step */
	transpilePackages: ["@strukt/api", "@strukt/database"],
	typescript: { ignoreBuildErrors: true },
	experimental: {
		serverActions: true,
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};

export default config;
