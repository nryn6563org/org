(window.webpackJsonp=window.webpackJsonp||[]).push([[31,3,10],{326:function(t,e,o){var content=o(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("62bb36e6",content,!0,{sourceMap:!1})},327:function(t,e,o){"use strict";o.r(e);o(93),o(230),o(12),o(48);var n={props:{dropdownId:{type:String,default:"defaultDropdownId"},menuItems:{type:Array,default:function(){return[]}}},data:function(){return{currentContent:""}},watch:{$route:function(t){this.updateCurrentContent()}},mounted:function(){this.updateCurrentContent()},methods:{isActive:function(path){return this.$route.path.startsWith(path)},updateCurrentContent:function(t){var e=this,o=t||this.menuItems.find((function(t){return e.isActive(t.to)}));o&&(this.currentContent='<span class="ko">'.concat(o.ko,'</span><span class="en">').concat(o.en,"</span>"))},handleLinkClick:function(t){this.updateCurrentContent(t)}}},r=(o(328),o(11)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown",attrs:{id:t.dropdownId}},[e("button",{staticClass:"current"},[e("div",{domProps:{innerHTML:t._s(t.currentContent)}}),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[e("path",{attrs:{d:"M17 10L12 15L7 10",stroke:"#D9D9D9"}})])]),t._v(" "),e("div",{staticClass:"droplist"},t._l(t.menuItems,(function(o,n){return e("NuxtLink",{key:n,staticClass:"change",class:{active:t.isActive(o.to)},attrs:{to:o.to},on:{click:function(e){return t.handleLinkClick(o)}}},[e("span",{staticClass:"ko"},[t._v(t._s(o.ko))]),t._v(" "),e("span",{staticClass:"en"},[t._v(t._s(o.en))])])})),1)])}),[],!1,null,"0eba5204",null);e.default=component.exports},328:function(t,e,o){"use strict";o(326)},329:function(t,e,o){var n=o(35)((function(i){return i[1]}));n.push([t.i,".dropdown[data-v-0eba5204]{position:relative;width:100%}.dropdown>button[data-v-0eba5204]{--tw-text-opacity:1;align-items:center;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));display:flex;font-size:12px;height:2rem;justify-content:space-between;letter-spacing:-.132px;line-height:1rem;width:100%}.droplist[data-v-0eba5204]{--tw-border-opacity:1;--tw-bg-opacity:0.8;align-items:flex-start;background-color:hsla(0,0%,100%,.8);background-color:rgba(255,255,255,var(--tw-bg-opacity));border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-width:1px;display:none;flex-direction:column;gap:.5rem;left:0;padding-bottom:.625rem;padding-top:.625rem;position:absolute;top:2rem;width:100%;z-index:20}.droplist.active[data-v-0eba5204]{display:flex}.droplist a[data-v-0eba5204]{--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity));font-size:12px;height:1rem;letter-spacing:-.132px;line-height:1rem;padding-left:.75rem;padding-right:.75rem;text-align:left;width:100%}.droplist a[data-v-0eba5204]:last-child{border-width:0}.droplist a.active[data-v-0eba5204]{font-weight:700}.droplist a.lst[data-v-0eba5204]{border-style:none}",""]),n.locals={},t.exports=n},330:function(t,e,o){var content=o(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("01ab6c3e",content,!0,{sourceMap:!1})},352:function(t,e,o){"use strict";o(330)},353:function(t,e,o){var n=o(35)((function(i){return i[1]}));n.push([t.i,"#category[data-v-7af580a2]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-bottom-width:1px;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-top-width:1px;left:0;position:sticky;top:50px;z-index:20}#category[data-v-7af580a2],#category .home[data-v-7af580a2]{align-items:center;display:flex}#category .home[data-v-7af580a2]{height:2rem;justify-content:center;width:2.25rem}#category div[data-v-7af580a2]{--tw-border-opacity:1;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-left-width:1px;height:2rem;padding-left:.625rem;padding-right:.625rem;width:calc(50% - 18px)}.dropdown[data-v-7af580a2]{position:relative;width:100%}.dropdown>button[data-v-7af580a2]{--tw-text-opacity:1;align-items:center;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));display:flex;font-size:12px;height:2rem;justify-content:space-between;letter-spacing:-.132px;line-height:2rem;width:100%}",""]),n.locals={},t.exports=n},396:function(t,e,o){var content=o(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("0a05eb8e",content,!0,{sourceMap:!1})},427:function(t,e,o){"use strict";o.r(e);o(12),o(19);var n={components:{CommonDropdown:o(327).default},data:function(){return{menuItems1:[{to:"/about/overview",ko:"회사개요",en:"About Us"},{to:"/about/ceo",ko:"CEO메시지",en:"CEO Message"},{to:"/about/vision",ko:"비전",en:"VISION"},{to:"/about/orghistory",ko:"연혁",en:"History"},{to:"/about/patent",ko:"특허",en:"Patent"},{to:"/about/award",ko:"주요수상",en:"Major Award"},{to:"/about/certification",ko:"주요인증",en:"Major Certification"},{to:"/about/welfare",ko:"복지제도",en:"Welfare System"},{to:"/about/contact",ko:"오시는길",en:"Contact"}]}},mounted:function(){var t=document.querySelectorAll(".current"),e=document.querySelectorAll(".change");t.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.querySelector(".droplist").classList.toggle("active")}))})),e.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.classList.toggle("active")}))}))}},r=(o(352),o(11)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"category"}},[e("button",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 12 11",fill:"none"}},[e("path",{attrs:{d:"M6.25 0.610214L10.75 3.83983V9.81316H8.25V6.4H4.25V9.81316L1.5 9.81333V3.84L6.25 0.610214ZM6.25 0L2.5 2.56L0 4.26667H1V7.68V10.24L4.75 10.2398V6.82649H7.75V10.2398L11.25 10.2398V4.26646L12 4.26667L6.25 0Z",fill:"black"}})])]),t._v(" "),e("div",{staticClass:"dropdown",attrs:{id:"depth1"}},[e("button",[e("span",{staticClass:"ko"},[t._v("기업소개")]),t._v(" "),e("span",{staticClass:"en"},[t._v("About Us")]),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[e("path",{attrs:{d:"M17 10L12 15L7 10",stroke:"#D9D9D9"}})])])]),t._v(" "),e("CommonDropdown",{attrs:{"dropdown-id":"depth2","menu-items":t.menuItems1}})],1)}),[],!1,null,"7af580a2",null);e.default=component.exports;installComponents(component,{CommonDropdown:o(327).default})},446:function(t,e,o){"use strict";o(396)},447:function(t,e,o){var n=o(35)((function(i){return i[1]}));n.push([t.i,"#container[data-v-3dc45dea]{display:block;padding-top:50px;position:relative;scroll-snap-type:y var(--tw-scroll-snap-strictness);width:100%}",""]),n.locals={},t.exports=n},544:function(t,e,o){"use strict";o.r(e);var n={layout:"custom"},r=(o(446),o(11)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"sub",attrs:{id:"container"}},[t("MobileCategoryOrgCategory"),this._v(" "),t("NuxtChild")],1)}),[],!1,null,"3dc45dea",null);e.default=component.exports;installComponents(component,{MobileCategoryOrgCategory:o(427).default})}}]);