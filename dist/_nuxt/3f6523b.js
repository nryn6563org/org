(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{321:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("7f007a70",content,!0,{sourceMap:!1})},322:function(t,e,n){"use strict";n.r(e);n(93),n(229),n(12),n(48);var o={props:{dropdownId:{type:String,default:"defaultDropdownId"},menuItems:{type:Array,default:function(){return[]}}},data:function(){return{currentContent:""}},watch:{$route:function(t){this.updateCurrentContent()}},mounted:function(){this.updateCurrentContent()},methods:{isActive:function(path){return this.$route.path.startsWith(path)},updateCurrentContent:function(t){var e=this,n=t||this.menuItems.find((function(t){return e.isActive(t.to)}));n&&(this.currentContent='<span class="ko">'.concat(n.ko,'</span><span class="en">').concat(n.en,"</span>"))},handleLinkClick:function(t){this.updateCurrentContent(t)}}},r=(n(323),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown",attrs:{id:t.dropdownId}},[e("button",{staticClass:"current"},[e("div",{domProps:{innerHTML:t._s(t.currentContent)}}),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[e("path",{attrs:{d:"M17 10L12 15L7 10",stroke:"#D9D9D9"}})])]),t._v(" "),e("div",{staticClass:"droplist"},t._l(t.menuItems,(function(n,o){return e("NuxtLink",{key:o,staticClass:"change",class:{active:t.isActive(n.to)},attrs:{to:n.to},on:{click:function(e){return t.handleLinkClick(n)}}},[e("span",{staticClass:"ko"},[t._v(t._s(n.ko))]),t._v(" "),e("span",{staticClass:"en"},[t._v(t._s(n.en))])])})),1)])}),[],!1,null,"7c7fbf0c",null);e.default=component.exports},323:function(t,e,n){"use strict";n(321)},324:function(t,e,n){var o=n(35)((function(i){return i[1]}));o.push([t.i,".dropdown[data-v-7c7fbf0c]{position:relative;width:100%}.dropdown>button[data-v-7c7fbf0c]{--tw-text-opacity:1;align-items:center;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));display:flex;font-size:12px;height:2rem;justify-content:space-between;letter-spacing:-.132px;line-height:2rem;width:100%}.droplist[data-v-7c7fbf0c]{--tw-border-opacity:1;--tw-bg-opacity:0.8;align-items:flex-start;background-color:hsla(0,0%,100%,.8);background-color:rgba(255,255,255,var(--tw-bg-opacity));border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-width:1px;display:none;flex-direction:column;gap:.5rem;left:0;padding-bottom:.625rem;padding-top:.625rem;position:absolute;top:2rem;width:100%;z-index:20}.droplist.active[data-v-7c7fbf0c]{display:flex}.droplist a[data-v-7c7fbf0c]{--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity));font-size:12px;height:1rem;letter-spacing:-.132px;line-height:1rem;padding-left:.75rem;padding-right:.75rem;text-align:left;width:100%}.droplist a[data-v-7c7fbf0c]:last-child{border-width:0}.droplist a.active[data-v-7c7fbf0c]{font-weight:700}.droplist a.lst[data-v-7c7fbf0c]{border-style:none}",""]),o.locals={},t.exports=o}}]);