export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.51d07a0e.js","imports":["_app/immutable/entry/start.51d07a0e.js","_app/immutable/chunks/index.bead85c3.js","_app/immutable/chunks/singletons.f300fedc.js","_app/immutable/chunks/index.5d96a4e7.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.cfad3d2d.js","imports":["_app/immutable/entry/app.cfad3d2d.js","_app/immutable/chunks/index.bead85c3.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};