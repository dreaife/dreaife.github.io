if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const d=e=>c(e,s),f={module:{uri:s},exports:n,require:d};i[s]=Promise.all(a.map((e=>f[e]||d(e)))).then((e=>(r(...e),n)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/10/08/AcWingBasic01/index.html",revision:"229d5de1484c3a2c217bdb1075cc9481"},{url:"2022/10/08/AcWingBasic02/index.html",revision:"f95b0a7317f6bd12d15d4c8c7732c074"},{url:"2022/10/08/Linux-xju-report01/index.html",revision:"53c31862165b4d4038152058892b03c4"},{url:"2022/10/09/test/index.html",revision:"f2026aa437b1751e151f4f9e8a8ce180"},{url:"archives/2022/10/index.html",revision:"d0ae687d1baad2e7da7ce414e2f96874"},{url:"archives/2022/index.html",revision:"bb2cc348611dd3d7cebf5d045865b292"},{url:"archives/index.html",revision:"f757af879468e5ad5770a9da63250945"},{url:"categories/AcWingBasic/index.html",revision:"caa561e4766a0d750a91c95ea1fae469"},{url:"categories/uncategorized/index.html",revision:"d5c121f6a9d22ab191fe87a6105f60c2"},{url:"categories/xju-Linux/index.html",revision:"8c4a3a519de4693b2240176086af7c94"},{url:"css/index.css",revision:"f2b1b8478bfd23474091ce830777caab"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/pwaicons/144.png",revision:"3e46fcef419e0cb95edad606c2ad205f"},{url:"images/pwaicons/192.png",revision:"af1bb077775fa5686a96bfe8f06ba6af"},{url:"images/pwaicons/36.png",revision:"4e964b21b12d116426e71a90df0b317f"},{url:"images/pwaicons/48.png",revision:"ef6e02e6fa34bdcc22b9c3f7f1cffda4"},{url:"images/pwaicons/512.png",revision:"15ff57cdc5e8fabaa3b7530ec648746c"},{url:"images/pwaicons/72.png",revision:"be5cc2e56b445cded8fc420f9e13a0ce"},{url:"images/pwaicons/96.png",revision:"0444abf8221075845cc262b3403372af"},{url:"img/16.png",revision:"194429bc66ff43c35964319c6c30e4b4"},{url:"img/32.png",revision:"66f075afb468c6bc2a7fd506e58f4b4a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/dreaifeIcon.png",revision:"6f1883fcdd41afedf104bcf30650240f"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/favIcon.svg",revision:"a38bb0988ecc6d821583a9fbc1ae86aa"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ccbfcac8b1b3e774d9a28dbb9b58d727"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"tags/AcWing/index.html",revision:"9b2e47a4036e5581eb6d12b42511f3cb"},{url:"tags/algorithm/index.html",revision:"37b3ffd9f310e8823780112b2d97f7d9"},{url:"tags/binary-search/index.html",revision:"9ac083f3b6f095513981c9194a1b127a"},{url:"tags/Linux/index.html",revision:"2801700987edf23b7c17b60a053649b1"},{url:"tags/report/index.html",revision:"bd26f81b90686aeb5e9bcd0d3c2031a6"},{url:"tags/sort/index.html",revision:"3cd2b9e0e7fdc4d9d4a5b1c45e97ac20"},{url:"tags/untagged/index.html",revision:"bcdfea8fd500386c71f54bd0f0b85267"},{url:"tags/xju/index.html",revision:"b09813591f452f272545475eb90c5dd4"}],{})}));
//# sourceMappingURL=service-worker.js.map
