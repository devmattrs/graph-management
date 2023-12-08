const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ef471264.js","app":"_app/immutable/entry/app.543b00ad.js","imports":["_app/immutable/entry/start.ef471264.js","_app/immutable/chunks/scheduler.d23b7513.js","_app/immutable/chunks/singletons.13c62b57.js","_app/immutable/chunks/index.0d243ee4.js","_app/immutable/entry/app.543b00ad.js","_app/immutable/chunks/public.11294112.js","_app/immutable/chunks/index.f2bc2b55.js","_app/immutable/chunks/index.0d243ee4.js","_app/immutable/chunks/scheduler.d23b7513.js","_app/immutable/chunks/index.dfb5f55f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-113479cb.js')),
			__memo(() => import('./chunks/1-51e3bc68.js')),
			__memo(() => import('./chunks/2-a0f5e829.js')),
			__memo(() => import('./chunks/3-0f81ecb0.js')),
			__memo(() => import('./chunks/4-be66dcf9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
