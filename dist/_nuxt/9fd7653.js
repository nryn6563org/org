(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{331:function(t,e,o){var content=o(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("62bb36e6",content,!0,{sourceMap:!1})},332:function(t,e,o){"use strict";o.r(e);o(93),o(230),o(12),o(48);var n={props:{dropdownId:{type:String,default:"defaultDropdownId"},menuItems:{type:Array,default:function(){return[]}}},data:function(){return{currentContent:""}},watch:{$route:function(t){this.updateCurrentContent()}},mounted:function(){this.updateCurrentContent()},methods:{isActive:function(path){return this.$route.path.startsWith(path)},updateCurrentContent:function(t){var e=this,o=t||this.menuItems.find((function(t){return e.isActive(t.to)}));o&&(this.currentContent='<span class="ko">'.concat(o.ko,'</span><span class="en">').concat(o.en,"</span>"))},handleLinkClick:function(t){this.updateCurrentContent(t)}}},r=(o(335),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown",attrs:{id:t.dropdownId}},[e("button",{staticClass:"current"},[e("div",{domProps:{innerHTML:t._s(t.currentContent)}}),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[e("path",{attrs:{d:"M17 10L12 15L7 10",stroke:"#D9D9D9"}})])]),t._v(" "),e("div",{staticClass:"droplist"},t._l(t.menuItems,(function(o,n){return e("NuxtLink",{key:n,staticClass:"change",class:{active:t.isActive(o.to)},attrs:{to:o.to},on:{click:function(e){return t.handleLinkClick(o)}}},[e("span",{staticClass:"ko"},[t._v(t._s(o.ko))]),t._v(" "),e("span",{staticClass:"en"},[t._v(t._s(o.en))])])})),1)])}),[],!1,null,"0eba5204",null);e.default=component.exports},335:function(t,e,o){"use strict";o(331)},336:function(t,e,o){var n=o(31)((function(i){return i[1]}));n.push([t.i,".dropdown[data-v-0eba5204]{position:relative;width:100%}.dropdown>button[data-v-0eba5204]{--tw-text-opacity:1;align-items:center;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));display:flex;font-size:12px;height:2rem;justify-content:space-between;letter-spacing:-.132px;line-height:1rem;width:100%}.droplist[data-v-0eba5204]{--tw-border-opacity:1;--tw-bg-opacity:0.8;align-items:flex-start;background-color:hsla(0,0%,100%,.8);background-color:rgba(255,255,255,var(--tw-bg-opacity));border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-width:1px;display:none;flex-direction:column;gap:.5rem;left:0;padding-bottom:.625rem;padding-top:.625rem;position:absolute;top:2rem;width:100%;z-index:20}.droplist.active[data-v-0eba5204]{display:flex}.droplist a[data-v-0eba5204]{--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity));font-size:12px;height:1rem;letter-spacing:-.132px;line-height:1rem;padding-left:.75rem;padding-right:.75rem;text-align:left;width:100%}.droplist a[data-v-0eba5204]:last-child{border-width:0}.droplist a.active[data-v-0eba5204]{font-weight:700}.droplist a.lst[data-v-0eba5204]{border-style:none}",""]),n.locals={},t.exports=n},454:function(t,e,o){var content=o(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("617c438e",content,!0,{sourceMap:!1})},595:function(t,e,o){"use strict";o(454)},596:function(t,e,o){var n=o(31)((function(i){return i[1]}));n.push([t.i,"#category[data-v-f0f01d4c]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-bottom-width:1px;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-top-width:1px;left:0;position:sticky;top:50px;z-index:20}#category[data-v-f0f01d4c],#category .home[data-v-f0f01d4c]{align-items:center;display:flex}#category .home[data-v-f0f01d4c]{height:2rem;justify-content:center;width:2.25rem}#category div[data-v-f0f01d4c]{--tw-border-opacity:1;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-left-width:1px;height:2rem;padding-left:.625rem;padding-right:.625rem;width:calc(50% - 18px)}",""]),n.locals={},t.exports=n},638:function(t,e,o){"use strict";o.r(e);o(12),o(19),o(230),o(62),o(94);var n={components:{CommonDropdown:o(332).default},data:function(){return{menuItems:[{id:"axrassi",to:"/axrassi/rassi",ko:"ThinkPool AI",en:"ThinkPool AI"},{id:"lbs",to:"/business/lbs/location",ko:"위치기반서비스",en:"LBS"},{id:"rms",to:"/business/rm/rms",ko:"리스크관리솔루션",en:"RMS"}],menuItems1:[{to:"/axrassi/rassi",ko:"AX RASSi",en:"AX RASSi"},{to:"/axrassi/algorithms",ko:"AI Algorithms",en:"AI Algorithms"}],menuItems2:[{to:"/business/lbs/location",ko:"로그인보호서비스",en:"Login Protection Services"},{to:"/business/lbs/prevention",ko:"안심키퍼서비스",en:"Prevention"}],menuItems3:[{to:"/business/rm/rms",ko:"RMS통제시스템",en:"RMS System"}],currentSubMenuItems:[]}},watch:{$route:function(t,e){this.handleMenuItemClick(t)}},mounted:function(){var t=document.querySelectorAll(".current"),e=document.querySelectorAll(".change");t.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.querySelector(".droplist").classList.toggle("active")}))})),e.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.classList.toggle("active")}))})),this.handleMenuItemClick(this.$route)},methods:{handleMenuItemClick:function(t){var e=this.menuItems.find((function(e){return t.path.includes(e.id)}));"axrassi"===e.id?this.currentSubMenuItems=this.menuItems1:"lbs"===e.id?this.currentSubMenuItems=this.menuItems2:"rms"===e.id?this.currentSubMenuItems=this.menuItems3:this.currentSubMenuItems=[]}}},r=(o(595),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"category"}},[e("button",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 12 11",fill:"none"}},[e("path",{attrs:{d:"M6.25 0.610214L10.75 3.83983V9.81316H8.25V6.4H4.25V9.81316L1.5 9.81333V3.84L6.25 0.610214ZM6.25 0L2.5 2.56L0 4.26667H1V7.68V10.24L4.75 10.2398V6.82649H7.75V10.2398L11.25 10.2398V4.26646L12 4.26667L6.25 0Z",fill:"black"}})])]),t._v(" "),e("CommonDropdown",{attrs:{"dropdown-id":"depth1","menu-items":t.menuItems},on:{"menu-items-click":t.handleMenuItemClick}}),t._v(" "),e("CommonDropdown",{attrs:{"dropdown-id":"depth2","menu-items":t.currentSubMenuItems}})],1)}),[],!1,null,"f0f01d4c",null);e.default=component.exports;installComponents(component,{CommonDropdown:o(332).default})}}]);