(function(e){function t(t){for(var r,n,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)n=o[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-21bf94a0":"5fb6bdcc","chunk-2d0ab43a":"3dee85dc","chunk-3e861062":"8a92a7c5","chunk-3fdfc446":"82978b51","chunk-59c65bae":"8c0d4053","chunk-6ca49a1e":"6800c665","chunk-d55d3ce2":"9a389021","chunk-2d0b2ec8":"ee39ea4e","chunk-2d228901":"189fc1cb","chunk-452696c7":"05c97086","chunk-71c50812":"7433e8dc","chunk-84cc821a":"81094615","chunk-91b19d5e":"01892caa","chunk-958bdcfa":"4eecf260"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-3e861062":1,"chunk-59c65bae":1,"chunk-91b19d5e":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-21bf94a0":"31d6cfe0","chunk-2d0ab43a":"31d6cfe0","chunk-3e861062":"ba1701af","chunk-3fdfc446":"31d6cfe0","chunk-59c65bae":"d427926d","chunk-6ca49a1e":"31d6cfe0","chunk-d55d3ce2":"31d6cfe0","chunk-2d0b2ec8":"31d6cfe0","chunk-2d228901":"31d6cfe0","chunk-452696c7":"31d6cfe0","chunk-71c50812":"31d6cfe0","chunk-84cc821a":"31d6cfe0","chunk-91b19d5e":"5dae9d19","chunk-958bdcfa":"31d6cfe0"}[e]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],p.parentNode.removeChild(p),a(i)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/forum-front-end-vue/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"024a":function(e,t,a){},"0ad8":function(e,t,a){},"12ab":function(e,t,a){},"219c":function(e,t,a){},2375:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],s=(a("6534"),a("2877")),i={},o=Object(s["a"])(i,r,n,!1,null,"81dc1146",null);t["a"]=o.exports},"2fa3":function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return l}));a("d3b7");var r=a("bc3a"),n=a.n(r),s=a("3d20"),i=a.n(s),o="http://localhost:3000/api/",c=n.a.create({baseURL:o});c.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var u=c,l=i.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},"33b8":function(e,t,a){},"412e":function(e,t,a){"use strict";a("219c")},"4cce":function(e,t,a){"use strict";var r=a("2fa3");t["a"]={getCurrentUser:function(){return r["b"].get("/get_current_user")},get:function(e){var t=e.userId;return r["b"].get("/users/".concat(t))},update:function(e){var t=e.userId,a=e.formData;return r["b"].put("/users/".concat(t),a)},addFavorite:function(e){var t=e.restaurantId;return r["b"].post("/favorite/".concat(t),null)},deleteFavorite:function(e){var t=e.restaurantId;return r["b"].delete("/favorite/".concat(t))},addLike:function(e){var t=e.restaurantId;return r["b"].post("/like/".concat(t),null)},deleteLike:function(e){var t=e.restaurantId;return r["b"].delete("/like/".concat(t))},getTopUsers:function(){return r["b"].get("/users/top")},addFollowing:function(e){var t=e.userId;return r["b"].post("/following/".concat(t),null)},deleteFollowing:function(e){var t=e.userId;return r["b"].delete("/following/".concat(t))}}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"restaurant-forum"}},[a("Navbar"),a("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[a("router-view")],1)],1)},s=[],i=(a("4989"),a("ab8b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v(" 餐廳評論網 ")]),e._m(0),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[a("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.isAdmin?a("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin"}},[e._v(" 管理員後台 ")]):e._e(),e.isAuthenticated?[a("router-link",{staticClass:"text-white mr-3",attrs:{to:"#"}},[e._v(" "+e._s(e.currentUser.name||"使用者")+" 您好 ")]),a("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:e.logout}},[e._v(" 登出 ")])]:e._e()],2)])],1)}),o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("5530"),u=a("2f62"),l={computed:Object(c["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}}},d=l,p=(a("6b37"),a("2877")),m=Object(p["a"])(d,i,o,!1,null,"579fa372",null),f=m.exports,g={name:"App",components:{Navbar:f}},b=g,v=(a("a57c"),Object(p["a"])(b,n,s,!1,null,"55e23aa7",null)),h=v.exports,k=a("1da1"),w=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("b0c0"),a("2532"),a("8c4f")),y=a("4cce");r["a"].use(u["a"]);var C=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(c["a"])(Object(c["a"])({},e.currentUser),t),e.isAuthenticated=!0,e.token=localStorage.getItem("token")},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,localStorage.removeItem("token"),e.token=""}},actions:{fetchCurrentUser:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,i,o,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,y["a"].getCurrentUser();case 4:return r=t.sent,n=r.data,s=n.id,i=n.name,o=n.email,c=n.image,u=n.isAdmin,a("setCurrentUser",{id:s,name:i,email:o,image:c,isAdmin:u}),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t["catch"](1),console.error(t.t0.message),a("revokeAuthentication"),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},modules:{}}),P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit(t)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signup"}},[e._v(" Sign Up ")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign In ")])])}],_=a("2fa3"),O={signIn:function(e){var t=e.email,a=e.password;return _["b"].post("/signin",{email:t,password:a})},signUp:function(e){return _["b"].post("/signup",Object(c["a"])({},e))}},j={data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.email&&e.password){t.next=3;break}return _["a"].fire({icon:"warning",title:"請填入 email 和 password"}),t.abrupt("return");case 3:return e.isProcessing=!0,t.prev=4,t.next=7,O.signIn({email:e.email,password:e.password});case 7:if(a=t.sent,r=a.data,"success"===r.status){t.next=11;break}throw new Error(r.message);case 11:localStorage.setItem("token",r.token),e.$store.commit("setCurrentUser",r.user),e.$router.push("/restaurants"),t.next=22;break;case 16:t.prev=16,t.t0=t["catch"](4),e.isProcessing=!1,e.password="",_["a"].fire({icon:"warning",title:"請確認您輸入了正確的帳號密碼"}),console.log("error",t.t0);case 22:case"end":return t.stop()}}),t,null,[[4,16]])})))()}}},I=j,E=Object(p["a"])(I,P,x,!1,null,null,null),R=E.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(t){t.target.composing||(e.passwordCheck=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit"}},[e._v(" "+e._s(e.isProcessing?"處理中...":"Submit")+" ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign Up ")])])}],N={name:"SignUp",data:function(){return{name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.name&&e.email&&e.password&&e.passwordCheck){t.next=3;break}return _["a"].fire({icon:"warning",title:"需填寫每個欄位資料"}),t.abrupt("return");case 3:if(e.password===e.passwordCheck){t.next=6;break}return _["a"].fire({icon:"warning",title:"兩次密碼輸入不相符，請再次確認"}),t.abrupt("return");case 6:return t.prev=6,e.isProcessing=!0,t.next=10,O.signUp({name:e.name,email:e.email,password:e.password,passwordCheck:e.passwordCheck});case 10:if(a=t.sent,r=a.data,"error"!==r.status){t.next=14;break}throw new Error(r.message);case 14:_["a"].fire({icon:"success",title:r.message}),e.$router.push("/signin"),t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](6),e.isProcessing=!1,_["a"].fire({icon:"warning",title:"註冊發生錯誤，請稍後再試"});case 22:case"end":return t.stop()}}),t,null,[[6,18]])})))()}}},U=N,A=Object(p["a"])(U,S,q,!1,null,null,null),L=A.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Not Found 🤷🏻‍♂️")])},F=[],T={},D=Object(p["a"])(T,$,F,!1,null,null,null),B=D.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTabs"),e.isLoading?a("Spinner"):[a("RestaurantsNavPills",{attrs:{categories:e.categories}}),a("div",{staticClass:"row"},e._l(e.restaurants,(function(e){return a("RestaurantCard",{key:e.id,attrs:{"initial-restaurant":e}})})),1),e.totalPage.length>1?a("RestaurantsPagination",{attrs:{"current-page":e.currentPage,"total-page":e.totalPage,"category-id":e.categoryId,"previous-page":e.previousPage,"next-page":e.nextPage}}):e._e(),e.restaurants.length<1?a("div",[e._v(" 此類別目前無餐廳資料 ")]):e._e()]],2)},J=[],z=a("8bb1"),H=a("2375"),K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4"},[a("div",{staticClass:"card mb-4"},[a("img",{staticClass:"card-img-top",attrs:{src:e.restaurant.image,alt:"Card image cap",width:"286px",height:"180px"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text title-wrap"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.restaurant.id}}}},[e._v(" "+e._s(e.restaurant.name)+" ")])],1),a("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.restaurant.Category?e.restaurant.Category.name:"未分類"))]),a("p",{staticClass:"card-text text-truncate"},[e._v(" "+e._s(e.restaurant.description)+" ")])]),a("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.deleteFavorite(e.restaurant.id)}}},[e._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.addFavorite(e.restaurant.id)}}},[e._v(" 加到最愛 ")]),e.restaurant.isLiked?a("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.deleteLike(e.restaurant.id)}}},[e._v(" Unlike ")]):a("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.addLike(e.restaurant.id)}}},[e._v(" Like ")])])])])},G=[],Q={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},methods:{addFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,y["a"].addFavorite({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(c["a"])(Object(c["a"])({},t.restaurant),{},{isFavorited:!0}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,_["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,y["a"].deleteFavorite({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(c["a"])(Object(c["a"])({},t.restaurant),{},{isFavorited:!1}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,_["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},addLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,y["a"].addLike({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(c["a"])(Object(c["a"])({},t.restaurant),{},{isLiked:!0}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,_["a"].fire({icon:"error",title:"無法將餐廳加入喜歡，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,y["a"].deleteLike({restaurantId:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.restaurant=Object(c["a"])(Object(c["a"])({},t.restaurant),{},{isLiked:!1}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,_["a"].fire({icon:"error",title:"無法將餐廳移除喜歡，請稍後再試"}),console.log("error",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},V=Q,W=(a("585f"),Object(p["a"])(V,K,G,!1,null,"8f65d2ee",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-pills mb-4"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants"}}},[e._v(" 全部 ")])],1),e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)},Z=[],ee={props:{categories:{type:Array,required:!0}}},te=ee,ae=(a("b94a"),Object(p["a"])(te,Y,Z,!1,null,"5462995e",null)),re=ae.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.previousPage,expression:"previousPage"}],class:["page-item",{disabled:1===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,(function(t){return a("li",{key:t,class:["page-item",{active:e.currentPage===t}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),a("li",{directives:[{name:"show",rawName:"v-show",value:e.nextPage,expression:"nextPage"}],class:["page-item",{disabled:e.currentPage===e.totalPage.length}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}},"aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)])},se=[],ie=(a("a9e3"),{props:{categoryId:{type:[String,Number],default:""},currentPage:{type:Number,default:1},totalPage:{type:Array,required:!0},previousPage:{type:Number,required:!0},nextPage:{type:Number,required:!0}}}),oe=ie,ce=(a("cd89"),Object(p["a"])(oe,ne,se,!1,null,"def5f48a",null)),ue=ce.exports,le=a("c4c3"),de={name:"Restaurants",components:{NavTabs:z["a"],RestaurantCard:X,RestaurantsNavPills:re,RestaurantsPagination:ue,Spinner:H["a"]},data:function(){return{restaurants:[],categories:[],categoryId:-1,currentPage:1,totalPage:[],previousPage:-1,nextPage:-1,isLoading:!0}},created:function(){var e=this.$route.query,t=e.page,a=void 0===t?"":t,r=e.categoryId,n=void 0===r?"":r;this.fetchRestaurants({queryPage:a,queryCategoryId:n})},beforeRouteUpdate:function(e,t,a){var r=e.query,n=r.page,s=void 0===n?"":n,i=r.categoryId,o=void 0===i?"":i;this.fetchRestaurants({queryPage:s,queryCategoryId:o}),a()},methods:{fetchRestaurants:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,o,c,u,l,d,p,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.queryPage,n=e.queryCategoryId,a.prev=1,t.isLoading=!0,a.next=5,le["a"].getRestaurants({page:r,categoryId:n});case 5:s=a.sent,i=s.data,o=i.restaurants,c=i.categories,u=i.categoryId,l=i.page,d=i.totalPage,p=i.prev,m=i.next,t.restaurants=o,t.categories=c,t.categoryId=u,t.currentPage=l,t.totalPage=d,t.previousPage=p,t.nextPage=m,t.isLoading=!1,a.next=22;break;case 17:a.prev=17,a.t0=a["catch"](1),t.isLoading=!1,console.log("error",a.t0),_["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 22:case"end":return a.stop()}}),a,null,[[1,17]])})))()}}},pe=de,me=Object(p["a"])(pe,M,J,!1,null,null,null),fe=me.exports;r["a"].use(w["a"]);var ge=function(e,t,a){var r=C.state.currentUser;if(r&&!r.isAdmin)return console.log("is not current user"),void a("/not-found");a()},be=[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"sign-in",component:R},{path:"/signup",name:"sign-up",component:L},{path:"/restaurants",name:"restaurants",component:fe},{path:"/restaurants/feeds",name:"restaurants-feeds",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-3e861062")]).then(a.bind(null,"9cab"))}},{path:"/restaurants/top",name:"restaurants-tops",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-6ca49a1e")]).then(a.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-59c65bae")]).then(a.bind(null,"ad68"))}},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:function(){return a.e("chunk-2d0b2ec8").then(a.bind(null,"25d3"))}},{path:"/users/top",name:"users-top",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-d55d3ce2")]).then(a.bind(null,"22ab"))}},{path:"/user/:id/edit",name:"user-edit",component:function(){return a.e("chunk-2d228901").then(a.bind(null,"da5c"))}},{path:"/user/:id",name:"user",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-2d0ab43a")]).then(a.bind(null,"1511"))}},{path:"/admin",exact:!0,redirect:"/admin/restaurants"},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return a.e("chunk-71c50812").then(a.bind(null,"73a3"))},beforeEnter:ge},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return a.e("chunk-84cc821a").then(a.bind(null,"2743"))},beforeEnter:ge},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:function(){return a.e("chunk-452696c7").then(a.bind(null,"6945"))},beforeEnter:ge},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-3fdfc446")]).then(a.bind(null,"f91c"))},beforeEnter:ge},{path:"/admin/categories",name:"admin-categories",component:function(){return a.e("chunk-91b19d5e").then(a.bind(null,"5652"))},beforeEnter:ge},{path:"/admin/users",name:"admin-users",component:function(){return a.e("chunk-958bdcfa").then(a.bind(null,"6135"))},beforeEnter:ge},{path:"*",name:"not-found",component:B}],ve=new w["a"]({linkExactActiveClass:"active",routes:be});ve.beforeEach(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,a,r){var n,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token"),s=C.state.token,i=C.state.isAuthenticated,!n||n===s){e.next=7;break}return e.next=6,C.dispatch("fetchCurrentUser");case 6:i=e.sent;case 7:if(o=["sign-up","sign-in"],i||o.includes(t.name)){e.next=11;break}return r("/signin"),e.abrupt("return");case 11:if(!i||!o.includes(t.name)){e.next=14;break}return r("/restaurants"),e.abrupt("return");case 14:r();case 15:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}());var he=ve;a("12ab");r["a"].config.productionTip=!1,new r["a"]({router:he,store:C,render:function(e){return e(h)}}).$mount("#app")},"585f":function(e,t,a){"use strict";a("d5b2")},6534:function(e,t,a){"use strict";a("df4d")},"6b37":function(e,t,a){"use strict";a("fe74")},"8bb1":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)},n=[],s=a("11c1"),i={data:function(){return{tabs:[{id:Object(s["v4"])(),title:"首頁",path:"/restaurants"},{id:Object(s["v4"])(),title:"最新動態",path:"/restaurants/feeds"},{id:Object(s["v4"])(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:Object(s["v4"])(),title:"美食達人",path:"/users/top"}]}}},o=i,c=(a("412e"),a("2877")),u=Object(c["a"])(o,r,n,!1,null,"3709375b",null);t["a"]=u.exports},a57c:function(e,t,a){"use strict";a("33b8")},b94a:function(e,t,a){"use strict";a("0ad8")},c4c3:function(e,t,a){"use strict";a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("25f0");var r=a("2fa3");t["a"]={getRestaurants:function(e){var t=e.page,a=e.categoryId,n=new URLSearchParams({page:t,categoryId:a});return r["b"].get("/restaurants?".concat(n.toString()))},getRestaurantsFeeds:function(){return r["b"].get("/restaurants/feeds")},getTopRestaurants:function(){return r["b"].get("/restaurants/top")},getRestaurant:function(e){var t=e.restaurantId;return r["b"].get("/restaurants/".concat(t))}}},cd89:function(e,t,a){"use strict";a("024a")},d5b2:function(e,t,a){},df4d:function(e,t,a){},fe74:function(e,t,a){}});
//# sourceMappingURL=app.dc72165d.js.map