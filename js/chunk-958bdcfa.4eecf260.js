(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958bdcfa"],{6135:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminNav"),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),r("td",[t._v(t._s(e.email))]),r("td",[t._v(t._s(e.isAdmin?"admin":"user"))]),r("td",[t.currentUser.id!==e.id?r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleUserRole(e.id,e.isAdmin)}}},[t._v(" "+t._s(e.isAdmin?"set as user":"set as admin")+" ")]):t._e()])])})),0)])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v(" # ")]),r("th",{attrs:{scope:"col"}},[t._v(" Email ")]),r("th",{attrs:{scope:"col"}},[t._v(" Role ")]),r("th",{attrs:{scope:"col",width:"140"}},[t._v(" Action ")])])])}],s=r("1da1"),c=r("5530"),i=(r("d81d"),r("96cf"),r("2f62")),u=r("be6c"),o=r("2fa3"),d=r("e04c"),l={name:"AdminUsers",components:{AdminNav:d["a"]},data:function(){return{users:[]}},created:function(){this.fetchUsers()},computed:Object(c["a"])({},Object(i["b"])(["currentUser"])),methods:{fetchUsers:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].users.get();case 3:if(r=e.sent,n=r.data,"error"!==n.status){e.next=7;break}throw new Error(n.message);case 7:t.users=n.users,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),o["a"].fire({icon:"error",title:"取得使用者錯誤，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},toggleUserRole:function(t,e){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u["a"].users.update({userId:t,isAdmin:!e});case 3:if(a=n.sent,s=a.data,"error"!==s.status){n.next=7;break}throw new Error(s.message);case 7:r.users=r.users.map((function(r){return r.id===t?Object(c["a"])(Object(c["a"])({},r),{},{isAdmin:!e}):r})),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log(n.t0),o["a"].fire({icon:"error",title:"設定錯誤，請稍後再試"});case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}},m=l,f=r("2877"),v=Object(f["a"])(m,n,a,!1,null,null,null);e["default"]=v.exports},be6c:function(t,e,r){"use strict";r("b0c0");var n=r("2fa3");e["a"]={users:{get:function(){return n["b"].get("/admin/users")},update:function(t){var e=t.userId,r=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:r})}},categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.name;return n["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,r=t.name;return n["b"].put("/admin/categories/".concat(e),{name:r})},delete:function(t){var e=t.categoryId;return n["b"].delete("/admin/categories/".concat(e))}},restaurants:{getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},get:function(){return n["b"].get("/admin/restaurants")},delete:function(t){var e=t.restaurantId;return n["b"].delete("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,r=t.formData;return n["b"].put("/admin/restaurants/".concat(e),r)}}}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),c=s("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h1",[t._v("餐廳後台")]),r("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},a=[],s=r("2877"),c={},i=Object(s["a"])(c,n,a,!1,null,null,null);e["a"]=i.exports}}]);
//# sourceMappingURL=chunk-958bdcfa.4eecf260.js.map