(function(t){function e(e){for(var n,s,c=e[0],l=e[1],u=e[2],m=0,f=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);o&&o(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var o=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3f68":function(t,e,a){},"52d2":function(t,e,a){},5452:function(t,e,a){"use strict";var n=a("af35"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600;1,700&display=swap",rel:"stylesheet"}}),a("Header"),a("div",{staticClass:"main",attrs:{id:"main"}},[a("Sidebar"),a("div",{staticClass:"main-right"},[a("div",{staticClass:"main-content"},[a("router-view")],1)])],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"header-logo",attrs:{to:{name:"page.home"}}},[n("img",{attrs:{src:a("cf05"),alt:"Logo"}}),n("span",[t._v("Document")])]),n("div",{staticClass:"header-nav"},[n("ul",[t._m(0),n("li",[n("router-link",{attrs:{to:{name:"page.article"}}},[n("i",{staticClass:"fas fa-pen"}),t._v(" Bài viết")])],1),n("li",[n("router-link",{attrs:{to:{name:"page.home"}}},[n("i",{staticClass:"fas fa-home"}),t._v(" Trang chủ")])],1)])])],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://www.youtube.com/channel/UCzloMZCKVhxiGKSVH7zJZkA",target:"_blank"}},[a("i",{staticClass:"fas fa-youtube"}),t._v("Youtube")])])}],l=(a("5452"),a("2877")),u={},o=Object(l["a"])(u,s,c,!1,null,null,null),m=o.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-left"},[a("ul",{staticClass:"menu-first"},t._l(t.listMenus,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:{name:"page.menu.item",params:{slug:e.mn_slug,id:e.id}}}},[t._v(t._s(e.mn_name))]),e.children?a("ul",{staticClass:"sub-menu"},t._l(e.children,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:{name:"page.menu.item",params:{slug:e.mn_slug,id:e.id}}}},[t._v(t._s(e.mn_name))])],1)})),0):t._e()],1)})),0)])},d=[],p=a("5530"),h=a("2f62"),g={methods:Object(p["a"])({},Object(h["b"])(["loadMenus"])),computed:Object(h["c"])(["listMenus"]),created:function(){this.loadMenus()}},v=g,_=(a("f203"),Object(l["a"])(v,f,d,!1,null,null,null)),b=_.exports,y={components:{Header:m,Sidebar:b},mounted:function(){}},A=y,w=(a("5c0b"),Object(l["a"])(A,r,i,!1,null,null,null)),O=w.exports,j=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-home"},[a("h1",[t._v("Đây là trang chủ")]),a("Articles",{attrs:{listArticles:t.listArticles},on:{nexPage:t.nexPage}})],1)},C=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-articles"},[t._l(t.listArticles.data,(function(e){return a("div",{key:e.id,staticClass:"item"},[t._m(0,!0),a("div",{staticClass:"item-content"},[a("h3",{staticClass:"item-title"},[a("router-link",{attrs:{to:{name:"page.article.detail",params:{slug:e.a_slug,id:e.id}}}},[t._v(t._s(e.a_name))])],1)]),a("div",{staticClass:"item-footer"},[t._m(1,!0),a("span",[a("i",{staticClass:"fas fa-clock"}),t._v(t._s(e.created_at))])])])})),a("div",{staticClass:"paginate"},[t.listArticles.prev_page_url?a("a",{staticClass:"btn btn-xs",attrs:{href:"#"},on:{click:t.prevPage}},[a("i",{staticClass:"fas fa-angle-double-left"}),t._v(" Trang trước")]):t._e(),t.listArticles.next_page_url?a("a",{staticClass:"btn btn-xs",attrs:{href:"#"},on:{click:t.nextPage}},[t._v("Trang sau "),a("i",{staticClass:"fas fa-angle-double-right"})]):t._e()])],2)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-header"},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fas fa-user"}),t._v("By Admin")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fas fa-eye"}),t._v(" 2")])}],k={props:{listArticles:{}},data:function(){return{page:1}},created:function(){},methods:{prevPage:function(){},nextPage:function(){this.$emit("nexPage",this.page++)}}},B=k,I=(a("7e00"),Object(l["a"])(B,D,M,!1,null,"022890d5",null)),P=I.exports,R={data:function(){return{paramsDefault:{page:1}}},metaInfo:function(){return{title:"Epiloge - Build your network in your field of interest",meta:[{name:"description",content:"Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work."},{property:"og:title",content:"Epiloge - Build your network in your field of interest"},{property:"og:site_name",content:"Epiloge"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},components:{Articles:P},methods:Object(p["a"])(Object(p["a"])({},Object(h["b"])(["loadArticles"])),{},{nexPage:function(t){this.paramsDefault.page=t,this.loadArticles(this.paramsDefault)}}),computed:Object(h["c"])(["listArticles"]),created:function(){this.loadArticles(this.paramsDefault)}},$=R,E=Object(l["a"])($,x,C,!1,null,null,null),S=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-list"},[a("h1",[t._v(t._s(t.menuDetail.mn_name)+" ")]),a("Articles",{attrs:{listArticles:t.articlesByMenu},on:{nexPage:t.nexPage}})],1)},H=[],J={data:function(){return{paramsDefault:{page:1,menuID:this.$route.params.id}}},components:{Articles:P},metaInfo:{title:"Danh mục bài viết",htmlAttrs:{lang:"vi",amp:!0}},methods:Object(p["a"])(Object(p["a"])({},Object(h["b"])(["getMenuDetail","getArticleByMenuId"])),{},{nexPage:function(t){this.paramsDefault.page=t,this.getArticleByMenuId(this.paramsDefault)}}),watch:{"$route.path":{handler:function(){this.paramsDefault.menuID=this.$route.params.id,this.getMenuDetail(this.$route.params.id),this.getArticleByMenuId(this.paramsDefault)},deep:!0}},computed:Object(h["c"])(["menuDetail","articlesByMenu"]),created:function(){this.getMenuDetail(this.$route.params.id),this.getArticleByMenuId(this.paramsDefault)}},z=J,K=Object(l["a"])(z,T,H,!1,null,null,null),L=K.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"articles"},[a("h1",[t._v("Danh sách bài viết")]),a("Articles",{attrs:{listArticles:t.listArticles},on:{nexPage:t.nexPage}})],1)},Z=[],q={data:function(){return{paramsDefault:{page:1}}},components:{Articles:P},metaInfo:{title:"Danh sách bài viết",htmlAttrs:{lang:"en",amp:!0}},methods:Object(p["a"])(Object(p["a"])({},Object(h["b"])(["loadArticles"])),{},{nexPage:function(t){this.paramsDefault.page=t,this.loadArticles(this.paramsDefault)}}),computed:Object(h["c"])(["listArticles"]),created:function(){this.loadArticles(this.paramsDefault)}},G=q,N=Object(l["a"])(G,V,Z,!1,null,null,null),U=N.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-detail"},[a("h1",[t._v(t._s(t.articlesById?t.articlesById.a_name:""))]),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.articlesById?t.articlesById.a_content:"")}}),a("h2",{staticClass:"title-heading-h2"},[t._v("Bài viết liên quan")]),a("div",{staticClass:"articles-ralate"},[a("div",{staticClass:"list"},t._l(t.articlesRelate,(function(e){return a("div",{key:e.id,staticClass:"item"},[a("h3",{staticClass:"item-title"},[a("a",{attrs:{href:""}},[t._v(t._s(e.a_name))])]),t._m(0,!0),a("div",{staticClass:"item-footer"},[t._m(1,!0),a("span",[a("i",{staticClass:"fas fa-clock"}),t._v(t._s(e.created_at))])])])})),0)])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{},[a("a",{attrs:{href:""}},[t._v("By Admin")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fas fa-eye"}),t._v(" 2")])}],Q={data:function(){return{}},methods:Object(p["a"])({},Object(h["b"])(["getArticleDetail","getArticleRelate"])),computed:Object(p["a"])(Object(p["a"])({},Object(h["c"])(["articlesById","articlesRelate"])),{},{getArticlesById:function(){return this.articlesById}}),watch:{getArticlesById:{immediate:!0,handler:function(t){null!=t&&this.getArticleRelate(t.a_menu_id)},deep:!0}},created:function(){this.getArticleDetail(this.$route.params.id)},mounted:function(){}},W=Q,X=(a("bcd8"),Object(l["a"])(W,Y,F,!1,null,"20cb7e30",null)),tt=X.exports;n["a"].use(j["a"]);var et=new j["a"]({mode:"history",routes:[{path:"/",name:"page.home",component:S},{path:"/bai-viet.htm",name:"page.article",component:U},{path:"/bai-viet/:slug-:id(\\d+).htm",name:"page.article.detail",component:tt},{path:"/danh-muc/:slug-:id(\\d+).htm",name:"page.menu.item",component:L}]}),at=(a("96cf"),a("1da1")),nt=a("bc3a"),rt=a.n(nt),it="http://support.phupt.net/api/",st={menu:{list:it+"menus/",detail:it+"menus/"},article:{list:it+"articles/",detail:it+"articles/",menu:it+"articles/menu/",relate:it+"articles/relate/"}},ct={state:{menus:[],menuDetail:{}},mutations:{setMenus:function(t,e){t.menus=e},setMenuItem:function(t,e){t.menuDetail=e}},getters:{listMenus:function(t){return t.menus},menuDetail:function(t){return t.menuDetail}},actions:{loadMenus:function(t){return Object(at["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,rt.a.get(st.menu.list);case 3:n=e.sent,console.log(st.menu.list),n.data&&a("setMenus",n.data);case 6:case"end":return e.stop()}}),e)})))()},getMenuDetail:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,console.log(st.menu.detail+e),a.next=4,rt.a.get(st.menu.detail+e);case 4:r=a.sent,r.data&&n("setMenuItem",r.data);case 6:case"end":return a.stop()}}),a)})))()}}},lt={state:{articles:[],articleByMenuId:[],articlesById:null,articlesRelate:{}},mutations:{setArticles:function(t,e){t.articles=e},setArticlesDetail:function(t,e){t.articlesById=e},setArticleByMenu:function(t,e){t.articleByMenuId=e},setArticlesRelate:function(t,e){t.articlesRelate=e}},getters:{listArticles:function(t){return t.articles},articlesById:function(t){return t.articlesById},articlesByMenu:function(t){return t.articleByMenuId},articlesRelate:function(t){return t.articlesRelate}},actions:{loadArticles:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.next=3,rt.a.get(st.article.list,{params:e});case 3:r=a.sent,console.log(st.article.list),r.data&&n("setArticles",r.data);case 6:case"end":return a.stop()}}),a)})))()},getArticleByMenuId:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.next=3,rt.a.get(st.article.menu+e.menuID,{params:e});case 3:r=a.sent,console.log(st.article.menu+e.menuID),r.data&&n("setArticleByMenu",r.data);case 6:case"end":return a.stop()}}),a)})))()},getArticleDetail:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,console.log(st.article.detail+e),a.next=4,rt.a.get(st.article.detail+e);case 4:r=a.sent,r.data&&n("setArticlesDetail",r.data);case 6:case"end":return a.stop()}}),a)})))()},getArticleRelate:function(t,e){return Object(at["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,console.log(st.article.relate+e),a.next=4,rt.a.get(st.article.relate+e);case 4:r=a.sent,r.data&&n("setArticlesRelate",r.data);case 6:case"end":return a.stop()}}),a)})))()}}};n["a"].use(h["a"]);var ut=new h["a"].Store({modules:{Menus:ct,Articles:lt}}),ot=a("58ca");a("15f5"),a("7051"),a("3f68");n["a"].use(ot["a"],{keyName:"head"}),n["a"].config.productionTip=!1,new n["a"]({router:et,store:ut,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"7e00":function(t,e,a){"use strict";var n=a("52d2"),r=a.n(n);r.a},9741:function(t,e,a){},"9c0c":function(t,e,a){},af35:function(t,e,a){},bcd8:function(t,e,a){"use strict";var n=a("ca37"),r=a.n(n);r.a},ca37:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},f203:function(t,e,a){"use strict";var n=a("9741"),r=a.n(n);r.a}});
//# sourceMappingURL=app.c155ba80.js.map