if (!self.define) {
	const e = e => {
			"require" !== e && (e += ".js");
			let i = Promise.resolve();
			return r[e] || (i = new Promise(async i => {
				if ("document" in self) {
					const r = document.createElement("script");
					r.src = e, document.head.appendChild(r), r.onload = i
				} else importScripts(e), i()
			})), i.then(() => {
				if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
				return r[e]
			})
		},
		i = (i, r) => {
			Promise.all(i.map(e)).then(e => r(1 === e.length ? e[0] : e))
		},
		r = {
			require: Promise.resolve(i)
		};
	self.define = (i, s, a) => {
		r[i] || (r[i] = Promise.resolve().then(() => {
			let r = {};
			const c = {
				uri: location.origin + i.slice(1)
			};
			return Promise.all(s.map(i => {
				switch (i) {
					case "exports":
						return r;
					case "module":
						return c;
					default:
						return e(i)
				}
			})).then(e => {
				const i = a(...e);
				return r.default || (r.default = i), r
			})
		}))
	}
}
define("./sw.js", ["./workbox-c0edb8fa"], (function(e) {
	"use strict";
	self.addEventListener("message", e => {
		e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
	}), e.precacheAndRoute([{
		url: "images/android-chrome-192x192.png",
		revision: "d5c386dcaabf5eff7043381855e47a0b"
	}, {
		url: "images/android-chrome-512x512.png",
		revision: "73d40f3aaaa316b30ab20c4fa6ee246b"
	}, {
		url: "images/apple-touch-icon.png",
		revision: "e2e5490eab4d4d6861bb585c0bcf7d1b"
	}, {
		url: "images/favicon-16x16.png",
		revision: "fc4b702543daf8f592bd62da861d7854"
	}, {
		url: "images/favicon-32x32.png",
		revision: "abd68082f7b406880f497035cbd4fbac"
	}, {
		url: "images/favicon.ico",
		revision: "6d60a4139a594f0b8c1a5348d07fbcb6"
	}, {
		url: "images/logo.png",
		revision: "bcb34304182345a6b582577dc1895a80"
	}, {
		url: "images/profile.jpg",
		revision: "ecabea61d325dbfe12cdbb12dc94ca42"
	}, {
		url: "index.html",
		revision: "01a5128f637e8d3c643696395741b261"
	}, {
		url: "main.js",
		revision: "7a9076d6d94e62c13d641aa71f19ae8e"
	}, {
		url: "site.webmanifest",
		revision: "471c9a5b05d72cc0a2fec7e6b899a834"
	}, {
		url: "style.css",
		revision: "5bf1d9f15f8157c4999527b5897ae0c4"
	}], {})
}));
//# sourceMappingURL=sw.js.map