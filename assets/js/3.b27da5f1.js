(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{227:function(t,e,n){},228:function(t,e,n){},230:function(t,e,n){},231:function(t,e,n){},232:function(t,e,n){},233:function(t,e,n){},234:function(t,e,n){},235:function(t,e,n){},236:function(t,e,n){},237:function(t,e,n){},239:function(t,e,n){},269:function(t,e,n){"use strict";var i=n(227);n.n(i).a},275:function(t,e,n){"use strict";var i=n(228);n.n(i).a},286:function(t,e,n){"use strict";var i=n(230);n.n(i).a},287:function(t,e,n){"use strict";var i=n(231);n.n(i).a},288:function(t,e,n){"use strict";var i=n(232);n.n(i).a},289:function(t,e,n){"use strict";var i=n(233);n.n(i).a},290:function(t,e,n){"use strict";var i=n(234);n.n(i).a},291:function(t,e,n){"use strict";var i=n(235);n.n(i).a},292:function(t,e,n){"use strict";var i=n(236);n.n(i).a},293:function(t,e,n){"use strict";var i=n(237);n.n(i).a},295:function(t,e,n){"use strict";var i=n(239);n.n(i).a},298:function(t,e,n){"use strict";n.r(e);n(129),n(249),n(261),n(262),n(263),n(264);var i=n(31),a=n.n(i),s=(n(217),n(265),n(245),n(97)),r=n.n(s),o=(n(91),n(39),n(60),n(55),n(267),n(20)),l=n.n(o),c=(n(225),n(226),/#.*$/),u=/\.(md|html)$/,h=/\/$/,p=/^(https?:|mailto:|tel:)/;function d(t){return decodeURI(t).replace(c,"").replace(u,"")}function f(t){return p.test(t)}function v(t){if(f(t))return t;var e=t.match(c),n=e?e[0]:"",i=d(t);return h.test(i)?t:i+".html"+n}function m(t,e){var n=t.hash,i=function(t){var e=t.match(c);if(e)return e[0]}(e);return(!i||n===i)&&d(t.path)===d(e)}function g(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=d(e),a=0;a<t.length;a++)if(d(t[a].regularPath)===i)return l()({},t[a],{type:"page",path:v(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function b(t,e,n,i){var a=n.pages,s=n.themeConfig,o=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){var e=_(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var c=o.sidebar||s.sidebar;if(c){var u=function(t,e){if(r()(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,c),h=u.base,p=u.config;return p?p.map(function(t){return function t(e,n,i,a){if("string"==typeof e)return g(n,e,i);if(r()(e))return l()(g(n,e[0],i),{title:e[1]});a&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[];return{type:"group",title:e.title,children:s.map(function(e){return t(e,n,i,!0)}),collapsable:!1!==e.collapsable}}(t,a,h)}):[]}return[]}function _(t){var e;return(t=t.map(function(t){return l()({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function k(t){return l()(t,{type:t.items&&t.items.length?"links":"link"})}var C={props:{item:{required:!0}},computed:{link:function(){return v(this.item.link)},exact:function(){var t=this;return this.$site.locales?a()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:f,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},$=n(34),x=Object($.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,L={components:{NavLink:x},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},w=(n(269),Object($.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),S=n(270),y=n.n(S),T=(n(275),Object($.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),E=n(297),N=(n(280),n(49)),O={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},I=(n(286),Object($.a)(O,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null).exports),j={components:{NavLink:x,DropdownTransition:I},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},H=(n(287),{components:{NavLink:x,DropdownLink:Object($.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&a()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:a()(e).map(function(a){var r,o=e[a],l=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,a),i.some(function(t){return t.path===r})||(r=a)),{text:l,link:r}})};return[].concat(Object(N.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return l()(k(t),{items:(t.items||[]).map(k)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),W=(n(288),Object($.a)(H,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function D(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var M={components:{SidebarButton:T,NavLinks:W,SearchBox:E.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=y()(D(this.$el,"paddingLeft"))+y()(D(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},U=(n(289),Object($.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}}):t._e(),t._v(" "),n("span",{staticClass:"logo"},[t._v("CoderBot")]),t._v(" "),n("span",{staticClass:"subtitle"},[t._v("documentazione")])]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function B(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(N.a)(t.children||[])):i.push(t)});for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[a+n]}}var G={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?g(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,B(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?g(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,B(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,s=t.docsBranch,r=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o,c=d(this.$page.path);return h.test(c)?c+="README.md":c+=".md",l&&n?this.createEditLink(e,l,a,r,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(p.test(e)?e:t).replace(h,"")+"/".concat(i)+(n?"/"+n.replace(h,""):"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(p.test(e)?e:"https://github.com/".concat(e)).replace(h,"")+"/edit/".concat(i)+(n?"/"+n.replace(h,""):"")+a}}},P=(n(290),Object($.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports);function A(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function R(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var r=m(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[A(t,n+"#"+e.slug,e.title,r),R(t,e.children,n,i,a,s+1)])}))}var z={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,a=n.$site,s=n.$route,r=e.props.item,o=m(s,r.path),l="auto"===r.type?o||r.children.some(function(t){return m(s,r.basePath+"#"+t.slug)}):o,u=A(t,r.path,r.title||r.path,l),h=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:a.themeConfig.sidebarDepth,p=null==h?1:h,d=!!a.themeConfig.displayAllHeaders;return"auto"===r.type?[u,R(t,r.children,r.basePath,s,p)]:(l||d)&&r.headers&&!c.test(r.path)?[u,R(t,_(r.headers),r.path,s,p)]:u}},V=(n(291),Object($.a)(z,void 0,void 0,!1,null,null,null).exports),q={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:V,DropdownTransition:I}};n(292);var J={components:{SidebarGroup:Object($.a)(q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null).exports,SidebarLink:V,NavLinks:W},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return m(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return m(this.$route,t.regularPath)}}},X=(n(293),{components:{Home:w,Page:P,Sidebar:Object($.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:U},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return b(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),Y=(n(294),n(295),Object($.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=Y.exports}}]);