(window.webpackJsonp=window.webpackJsonp||[]).push([[25,3,6],{314:function(t,o,e){var content=e(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(34).default)("7f007a70",content,!0,{sourceMap:!1})},315:function(t,o,e){"use strict";e.r(o);e(116),e(220),e(13),e(51);var n={props:{dropdownId:{type:String,default:"defaultDropdownId"},menuItems:{type:Array,default:function(){return[]}}},data:function(){return{currentContent:""}},watch:{$route:function(t){this.updateCurrentContent()}},mounted:function(){this.updateCurrentContent()},methods:{isActive:function(path){return this.$route.path.startsWith(path)},updateCurrentContent:function(t){var o=this,e=t||this.menuItems.find((function(t){return o.isActive(t.to)}));e&&(this.currentContent='<span class="ko">'.concat(e.ko,'</span><span class="en">').concat(e.en,"</span>"))},handleLinkClick:function(t){this.updateCurrentContent(t)}}},r=(e(316),e(10)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"dropdown",attrs:{id:t.dropdownId}},[o("button",{staticClass:"current"},[o("div",{domProps:{innerHTML:t._s(t.currentContent)}}),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M17 10L12 15L7 10",stroke:"#D9D9D9"}})])]),t._v(" "),o("div",{staticClass:"droplist"},t._l(t.menuItems,(function(e,n){return o("NuxtLink",{key:n,staticClass:"change",class:{active:t.isActive(e.to)},attrs:{to:e.to},on:{click:function(o){return t.handleLinkClick(e)}}},[o("span",{staticClass:"ko"},[t._v(t._s(e.ko))]),t._v(" "),o("span",{staticClass:"en"},[t._v(t._s(e.en))])])})),1)])}),[],!1,null,"7c7fbf0c",null);o.default=component.exports},316:function(t,o,e){"use strict";e(314)},317:function(t,o,e){var n=e(33)((function(i){return i[1]}));n.push([t.i,".dropdown[data-v-7c7fbf0c]{position:relative;width:100%}.dropdown>button[data-v-7c7fbf0c]{--tw-text-opacity:1;align-items:center;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));display:flex;font-size:12px;height:2rem;justify-content:space-between;letter-spacing:-.132px;line-height:2rem;width:100%}.droplist[data-v-7c7fbf0c]{--tw-border-opacity:1;--tw-bg-opacity:0.8;align-items:flex-start;background-color:hsla(0,0%,100%,.8);background-color:rgba(255,255,255,var(--tw-bg-opacity));border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-width:1px;display:none;flex-direction:column;gap:.5rem;left:0;padding-bottom:.625rem;padding-top:.625rem;position:absolute;top:2rem;width:100%;z-index:20}.droplist.active[data-v-7c7fbf0c]{display:flex}.droplist a[data-v-7c7fbf0c]{--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity));font-size:12px;height:1rem;letter-spacing:-.132px;line-height:1rem;padding-left:.75rem;padding-right:.75rem;text-align:left;width:100%}.droplist a[data-v-7c7fbf0c]:last-child{border-width:0}.droplist a.active[data-v-7c7fbf0c]{font-weight:700}.droplist a.lst[data-v-7c7fbf0c]{border-style:none}",""]),n.locals={},t.exports=n},318:function(t,o,e){var content=e(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(34).default)("130eb8aa",content,!0,{sourceMap:!1})},334:function(t,o,e){"use strict";e(318)},335:function(t,o,e){var n=e(33)((function(i){return i[1]}));n.push([t.i,"#category[data-v-4e01c3d0]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-bottom-width:1px;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-top-width:1px;left:0;position:sticky;top:50px;z-index:20}#category[data-v-4e01c3d0],#category .home[data-v-4e01c3d0]{align-items:center;display:flex}#category .home[data-v-4e01c3d0]{height:2rem;justify-content:center;width:2.25rem}#category div[data-v-4e01c3d0]{--tw-border-opacity:1;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-left-width:1px;height:2rem;padding-left:.625rem;padding-right:.625rem;width:calc(50% - 18px)}",""]),n.locals={},t.exports=n},359:function(t,o,e){var content=e(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(34).default)("0a05eb8e",content,!0,{sourceMap:!1})},372:function(t,o,e){"use strict";e.r(o);e(13),e(20);var n={components:{CommonDropdown:e(315).default},data:function(){return{menuItems:[{to:"/about/overview",ko:"기업소개",en:"About Us"}],menuItems1:[{to:"/about/overview",ko:"회사개요",en:"About Us"},{to:"/about/ceo",ko:"CEO메시지",en:"CEO Message"},{to:"/about/vision",ko:"비전",en:"VISION"},{to:"/about/orghistory",ko:"연혁",en:"History"},{to:"/about/patent",ko:"특허",en:"Patent"},{to:"/about/award",ko:"주요수상",en:"Major Award"},{to:"/about/certification",ko:"주요인증",en:"Major Certification"},{to:"/about/welfare",ko:"복지제도",en:"Welfare System"},{to:"/about/contact",ko:"오시는길",en:"Contact"}]}},mounted:function(){var t=document.querySelectorAll(".current"),o=document.querySelectorAll(".change");t.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.querySelector(".droplist").classList.toggle("active")}))})),o.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.classList.toggle("active")}))}))}},r=(e(334),e(10)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"category"}},[o("button",{staticClass:"home"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 12 11",fill:"none"}},[o("path",{attrs:{d:"M6.25 0.610214L10.75 3.83983V9.81316H8.25V6.4H4.25V9.81316L1.5 9.81333V3.84L6.25 0.610214ZM6.25 0L2.5 2.56L0 4.26667H1V7.68V10.24L4.75 10.2398V6.82649H7.75V10.2398L11.25 10.2398V4.26646L12 4.26667L6.25 0Z",fill:"black"}})])]),t._v(" "),o("CommonDropdown",{attrs:{"dropdown-id":"depth1","menu-items":t.menuItems}}),t._v(" "),o("CommonDropdown",{attrs:{"dropdown-id":"depth2","menu-items":t.menuItems1}})],1)}),[],!1,null,"4e01c3d0",null);o.default=component.exports;installComponents(component,{CommonDropdown:e(315).default})},387:function(t,o,e){"use strict";e(359)},388:function(t,o,e){var n=e(33)((function(i){return i[1]}));n.push([t.i,"#container[data-v-3dc45dea]{display:block;padding-top:50px;position:relative;scroll-snap-type:y var(--tw-scroll-snap-strictness);width:100%}",""]),n.locals={},t.exports=n},436:function(t,o,e){"use strict";e.r(o);var n={layout:"custom"},r=(e(387),e(10)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"sub",attrs:{id:"container"}},[t("MobileCategoryOrgCategory"),this._v(" "),t("NuxtChild")],1)}),[],!1,null,"3dc45dea",null);o.default=component.exports;installComponents(component,{MobileCategoryOrgCategory:e(372).default})}}]);