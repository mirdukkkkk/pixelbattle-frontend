if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const l=e=>i(e,a),o={module:{uri:a},exports:c,require:l};s[a]=Promise.all(n.map((e=>o[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"cba4e7cc371e560f44b9652c13a81af8"},{url:"assets/main-De64pEs1.css",revision:null},{url:"assets/main-DmEDFPQH.js",revision:null},{url:"assets/Place-CCdJ0iqm.css",revision:null},{url:"assets/Place-DQiV3Z4P.js",revision:null},{url:"assets/preact-DoPIZWeU.js",revision:null},{url:"assets/render-D473Hyb3.js",revision:null},{url:"assets/snapshot-C2HsqeCW.js",revision:null},{url:"assets/Snow-BJfsKG8O.css",revision:null},{url:"assets/Snow-DXuoSi8v.js",revision:null},{url:"assets/TopBar-DCAcvf6E.js",revision:null},{url:"assets/TopBar-DvYkkDv6.css",revision:null},{url:"index.html",revision:"373f7e2b5d621169edbdfb76e7deb04b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa/favicon_114x114.png",revision:"e119071e2b1f65fe567f20adb43519fa"},{url:"pwa/favicon_120x120.png",revision:"23c1218dd54abe8cf869dd5a53e1e497"},{url:"pwa/favicon_144x144.png",revision:"ca748b102bc759d1ec4c14f6c828c6cd"},{url:"pwa/favicon_152x152.png",revision:"0d58fdab1b2b0b1d82a78e27ea7883ac"},{url:"pwa/favicon_180x180.png",revision:"08c6413bf8db5112164dd66959307613"},{url:"pwa/favicon_192x192.png",revision:"0e8adc64d3882e77cdae16c03cc7ed33"},{url:"pwa/favicon_57x57.png",revision:"0e9bba17b6f4406ccdf13b5bfc262d3a"},{url:"pwa/favicon_700x700.png",revision:"7a4aeb5055c25892e7cc069706f70f14"},{url:"pwa/favicon_72x72.png",revision:"738f016ae8ff373841b77ad2d2150fa5"},{url:"pwa/favicon_76x76.png",revision:"f2011f47877d01292b327a2b9167fc05"},{url:"manifest.webmanifest",revision:"cdc6a7508eecdcf684a6b2d180ebea95"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
