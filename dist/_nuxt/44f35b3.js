(window.webpackJsonp=window.webpackJsonp||[]).push([[56,3,12],{324:function(t,e,o){var content=o(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("7f007a70",content,!0,{sourceMap:!1})},327:function(t,e,o){"use strict";o.r(e);o(93),o(230),o(12),o(48);var n={props:{dropdownId:{type:String,default:"defaultDropdownId"},menuItems:{type:Array,default:function(){return[]}}},data:function(){return{currentContent:""}},watch:{$route:function(t){this.updateCurrentContent()}},mounted:function(){this.updateCurrentContent()},methods:{isActive:function(path){return this.$route.path.startsWith(path)},updateCurrentContent:function(t){var e=this,o=t||this.menuItems.find((function(t){return e.isActive(t.to)}));o&&(this.currentContent='<span class="ko">'.concat(o.ko,'</span><span class="en">').concat(o.en,"</span>"))},handleLinkClick:function(t){this.updateCurrentContent(t)}}},r=(o(328),o(11)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown",attrs:{id:t.dropdownId}},[e("button",{staticClass:"current"},[e("div",{domProps:{innerHTML:t._s(t.currentContent)}}),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[e("path",{attrs:{d:"M17 10L12 15L7 10",stroke:"#D9D9D9"}})])]),t._v(" "),e("div",{staticClass:"droplist"},t._l(t.menuItems,(function(o,n){return e("NuxtLink",{key:n,staticClass:"change",class:{active:t.isActive(o.to)},attrs:{to:o.to},on:{click:function(e){return t.handleLinkClick(o)}}},[e("span",{staticClass:"ko"},[t._v(t._s(o.ko))]),t._v(" "),e("span",{staticClass:"en"},[t._v(t._s(o.en))])])})),1)])}),[],!1,null,"7c7fbf0c",null);e.default=component.exports},328:function(t,e,o){"use strict";o(324)},329:function(t,e,o){var n=o(35)((function(i){return i[1]}));n.push([t.i,".dropdown[data-v-7c7fbf0c]{position:relative;width:100%}.dropdown>button[data-v-7c7fbf0c]{--tw-text-opacity:1;align-items:center;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));display:flex;font-size:12px;height:2rem;justify-content:space-between;letter-spacing:-.132px;line-height:2rem;width:100%}.droplist[data-v-7c7fbf0c]{--tw-border-opacity:1;--tw-bg-opacity:0.8;align-items:flex-start;background-color:hsla(0,0%,100%,.8);background-color:rgba(255,255,255,var(--tw-bg-opacity));border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-width:1px;display:none;flex-direction:column;gap:.5rem;left:0;padding-bottom:.625rem;padding-top:.625rem;position:absolute;top:2rem;width:100%;z-index:20}.droplist.active[data-v-7c7fbf0c]{display:flex}.droplist a[data-v-7c7fbf0c]{--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity));font-size:12px;height:1rem;letter-spacing:-.132px;line-height:1rem;padding-left:.75rem;padding-right:.75rem;text-align:left;width:100%}.droplist a[data-v-7c7fbf0c]:last-child{border-width:0}.droplist a.active[data-v-7c7fbf0c]{font-weight:700}.droplist a.lst[data-v-7c7fbf0c]{border-style:none}",""]),n.locals={},t.exports=n},333:function(t,e,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("41316289",content,!0,{sourceMap:!1})},361:function(t,e,o){"use strict";o(333)},362:function(t,e,o){var n=o(35)((function(i){return i[1]}));n.push([t.i,"#category[data-v-6621aa8f]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-bottom-width:1px;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-top-width:1px;left:0;position:sticky;top:50px;z-index:20}#category[data-v-6621aa8f],#category .home[data-v-6621aa8f]{align-items:center;display:flex}#category .home[data-v-6621aa8f]{height:2rem;justify-content:center;width:2.25rem}#category div[data-v-6621aa8f]{--tw-border-opacity:1;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-left-width:1px;height:2rem;padding-left:.625rem;padding-right:.625rem;width:calc(50% - 18px)}.dropdown[data-v-6621aa8f]{position:relative;width:100%}.dropdown>button[data-v-6621aa8f]{--tw-text-opacity:1;align-items:center;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));display:flex;font-size:12px;height:2rem;justify-content:space-between;letter-spacing:-.132px;line-height:18px;width:100%}",""]),n.locals={},t.exports=n},405:function(t,e,o){var content=o(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("fc96177a",content,!0,{sourceMap:!1})},417:function(t,e,o){"use strict";o.r(e);o(12),o(19);var n={components:{CommonDropdown:o(327).default},data:function(){return{menuItems1:[{to:"/rnd/national",ko:"국가R&D",en:"National R&D"},{to:"/rnd/military",ko:"병역혜택",en:"Military Service Exemption"}]}},mounted:function(){var t=document.querySelectorAll(".current"),e=document.querySelectorAll(".change");t.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.querySelector(".droplist").classList.toggle("active")}))})),e.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.classList.toggle("active")}))}))}},r=(o(361),o(11)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"category"}},[e("button",{staticClass:"home"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 12 11",fill:"none"}},[e("path",{attrs:{d:"M6.25 0.610214L10.75 3.83983V9.81316H8.25V6.4H4.25V9.81316L1.5 9.81333V3.84L6.25 0.610214ZM6.25 0L2.5 2.56L0 4.26667H1V7.68V10.24L4.75 10.2398V6.82649H7.75V10.2398L11.25 10.2398V4.26646L12 4.26667L6.25 0Z",fill:"black"}})])]),t._v(" "),e("div",{staticClass:"dropdown",attrs:{id:"depth1"}},[e("button",[e("span",{staticClass:"ko"},[t._v("혁신R&D")]),t._v(" "),e("span",{staticClass:"en"},[t._v("Company-affiliated research center")]),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[e("path",{attrs:{d:"M17 10L12 15L7 10",stroke:"#D9D9D9"}})])])]),t._v(" "),e("CommonDropdown",{attrs:{"dropdown-id":"depth2","menu-items":t.menuItems1}})],1)}),[],!1,null,"6621aa8f",null);e.default=component.exports;installComponents(component,{CommonDropdown:o(327).default})},492:function(t,e,o){"use strict";o(405)},493:function(t,e,o){var n=o(35)((function(i){return i[1]}));n.push([t.i,"#container[data-v-3a621afe]{display:block;padding-top:50px;position:relative;scroll-snap-type:y var(--tw-scroll-snap-strictness);width:100%}",""]),n.locals={},t.exports=n},533:function(t,e,o){"use strict";o.r(e);var n={layout:"custom"},r=(o(492),o(11)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"sub",attrs:{id:"container"}},[t("MobileCategoryRndCategory"),this._v(" "),t("NuxtChild")],1)}),[],!1,null,"3a621afe",null);e.default=component.exports;installComponents(component,{MobileCategoryRndCategory:o(417).default})}}]);