(window.webpackJsonp=window.webpackJsonp||[]).push([[23,3,5],{322:function(t,o,e){var content=e(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(38).default)("79a2cfac",content,!0,{sourceMap:!1})},323:function(t,o,e){"use strict";e.r(o);e(93),e(227),e(13),e(48);var n={props:{dropdownId:{type:String,default:"defaultDropdownId"},menuItems:{type:Array,default:function(){return[]}}},data:function(){return{currentContent:""}},watch:{$route:function(t){this.updateCurrentContent()}},mounted:function(){this.updateCurrentContent()},methods:{isActive:function(path){return this.$route.path.startsWith(path)},updateCurrentContent:function(t){var o=this,e=t||this.menuItems.find((function(t){return o.isActive(t.to)}));e&&(this.currentContent='<span class="ko">'.concat(e.ko,'</span><span class="en">').concat(e.en,"</span>"))},handleLinkClick:function(t){this.updateCurrentContent(t)}}},r=(e(325),e(12)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"dropdown",attrs:{id:t.dropdownId}},[o("button",{staticClass:"current"},[o("div",{domProps:{innerHTML:t._s(t.currentContent)}}),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M17 10L12 15L7 10",stroke:"#D9D9D9"}})])]),t._v(" "),o("div",{staticClass:"droplist"},t._l(t.menuItems,(function(e,n){return o("NuxtLink",{key:n,staticClass:"change",class:{active:t.isActive(e.to)},attrs:{to:e.to},on:{click:function(o){return t.handleLinkClick(e)}}},[o("span",{staticClass:"ko"},[t._v(t._s(e.ko))]),t._v(" "),o("span",{staticClass:"en"},[t._v(t._s(e.en))])])})),1)])}),[],!1,null,"7c7fbf0c",null);o.default=component.exports},324:function(t,o,e){var content=e(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(38).default)("db8d7aa2",content,!0,{sourceMap:!1})},325:function(t,o,e){"use strict";e(322)},326:function(t,o,e){var n=e(37)((function(i){return i[1]}));n.push([t.i,".dropdown[data-v-7c7fbf0c]{position:relative;width:100%}.dropdown>button[data-v-7c7fbf0c]{--tw-text-opacity:1;align-items:center;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));display:flex;font-size:12px;height:2rem;justify-content:space-between;letter-spacing:-.132px;line-height:2rem;width:100%}.droplist[data-v-7c7fbf0c]{--tw-border-opacity:1;--tw-bg-opacity:0.8;align-items:flex-start;background-color:hsla(0,0%,100%,.8);background-color:rgba(255,255,255,var(--tw-bg-opacity));border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-width:1px;display:none;flex-direction:column;gap:.5rem;left:0;padding-bottom:.625rem;padding-top:.625rem;position:absolute;top:2rem;width:100%;z-index:20}.droplist.active[data-v-7c7fbf0c]{display:flex}.droplist a[data-v-7c7fbf0c]{--tw-text-opacity:1;color:#141414;color:rgba(20,20,20,var(--tw-text-opacity));font-size:12px;height:1rem;letter-spacing:-.132px;line-height:1rem;padding-left:.75rem;padding-right:.75rem;text-align:left;width:100%}.droplist a[data-v-7c7fbf0c]:last-child{border-width:0}.droplist a.active[data-v-7c7fbf0c]{font-weight:700}.droplist a.lst[data-v-7c7fbf0c]{border-style:none}",""]),n.locals={},t.exports=n},327:function(t,o,e){"use strict";e(324)},328:function(t,o,e){var n=e(37)((function(i){return i[1]}));n.push([t.i,"#category[data-v-7a7872e0]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-bottom-width:1px;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-top-width:1px;left:0;position:sticky;top:50px;z-index:20}#category[data-v-7a7872e0],#category .home[data-v-7a7872e0]{align-items:center;display:flex}#category .home[data-v-7a7872e0]{height:2rem;justify-content:center;width:2.25rem}#category div[data-v-7a7872e0]{--tw-border-opacity:1;border-color:#f0f0f0;border-color:rgba(240,240,240,var(--tw-border-opacity));border-left-width:1px;height:2rem;padding-left:.625rem;padding-right:.625rem;width:calc(50% - 18px)}",""]),n.locals={},t.exports=n},339:function(t,o,e){"use strict";e.r(o);e(13),e(19);var n={components:{CommonDropdown:e(323).default},data:function(){return{menuItems:[{to:"/about/overview",ko:"기업소개",en:"About Us"},{to:"/business/",ko:"사업영역",en:"Business"},{to:"/corporate/",ko:"기업부설연구소",en:"Corporate Research Center"},{to:"/pr/",ko:"홍보센터",en:"PR"},{to:"/ir/",ko:"IR",en:"IR"},{to:"/careers/",ko:"채용정보",en:"Careers"}],menuItems1:[{to:"/about/overview",ko:"회사개요",en:"About Us"},{to:"/about/ceo",ko:"CEO메시지",en:"CEO Message"},{to:"/about/vision",ko:"비전",en:"VISION"},{to:"/about/orghistory",ko:"연혁",en:"History"},{to:"/about/patent",ko:"특허",en:"Patent"},{to:"/about/award",ko:"주요수상",en:"Major Award"},{to:"/about/certification",ko:"주요인증",en:"Major Certification"},{to:"/about/welfare",ko:"복지제도",en:"Welfare System"},{to:"/about/contact",ko:"오시는길",en:"Contact"}],menuItems2:[{to:"/about/overview",ko:"회사개요",en:"About Us"},{to:"/about/ceo",ko:"CEO메시지",en:"CEO Message"},{to:"/about/vision",ko:"비전",en:"VISION"},{to:"/about/orghistory",ko:"연혁",en:"History"},{to:"/about/patent",ko:"특허",en:"Patent"},{to:"/about/award",ko:"주요수상",en:"Major Award"},{to:"/about/certification",ko:"주요인증",en:"Major Certification"},{to:"/about/welfare",ko:"복지제도",en:"Welfare System"},{to:"/about/contact",ko:"오시는길",en:"Contact"}],menuItems3:[{to:"/about/overview",ko:"회사개요",en:"About Us"},{to:"/about/ceo",ko:"CEO메시지",en:"CEO Message"},{to:"/about/vision",ko:"비전",en:"VISION"},{to:"/about/orghistory",ko:"연혁",en:"History"},{to:"/about/patent",ko:"특허",en:"Patent"},{to:"/about/award",ko:"주요수상",en:"Major Award"},{to:"/about/certification",ko:"주요인증",en:"Major Certification"},{to:"/about/welfare",ko:"복지제도",en:"Welfare System"},{to:"/about/contact",ko:"오시는길",en:"Contact"}],menuItems4:[{to:"/about/overview",ko:"회사개요",en:"About Us"},{to:"/about/ceo",ko:"CEO메시지",en:"CEO Message"},{to:"/about/vision",ko:"비전",en:"VISION"},{to:"/about/orghistory",ko:"연혁",en:"History"},{to:"/about/patent",ko:"특허",en:"Patent"},{to:"/about/award",ko:"주요수상",en:"Major Award"},{to:"/about/certification",ko:"주요인증",en:"Major Certification"},{to:"/about/welfare",ko:"복지제도",en:"Welfare System"},{to:"/about/contact",ko:"오시는길",en:"Contact"}],menuItems5:[{to:"/about/overview",ko:"회사개요",en:"About Us"},{to:"/about/ceo",ko:"CEO메시지",en:"CEO Message"},{to:"/about/vision",ko:"비전",en:"VISION"},{to:"/about/orghistory",ko:"연혁",en:"History"},{to:"/about/patent",ko:"특허",en:"Patent"},{to:"/about/award",ko:"주요수상",en:"Major Award"},{to:"/about/certification",ko:"주요인증",en:"Major Certification"},{to:"/about/welfare",ko:"복지제도",en:"Welfare System"},{to:"/about/contact",ko:"오시는길",en:"Contact"}],menuItems6:[{to:"/about/overview",ko:"회사개요",en:"About Us"},{to:"/about/ceo",ko:"CEO메시지",en:"CEO Message"},{to:"/about/vision",ko:"비전",en:"VISION"},{to:"/about/orghistory",ko:"연혁",en:"History"},{to:"/about/patent",ko:"특허",en:"Patent"},{to:"/about/award",ko:"주요수상",en:"Major Award"},{to:"/about/certification",ko:"주요인증",en:"Major Certification"},{to:"/about/welfare",ko:"복지제도",en:"Welfare System"},{to:"/about/contact",ko:"오시는길",en:"Contact"}]}},mounted:function(){var t=document.querySelectorAll(".current"),o=document.querySelectorAll(".change");t.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.querySelector(".droplist").classList.toggle("active")}))})),o.forEach((function(t){t.addEventListener("click",(function(){t.parentElement.classList.toggle("active")}))}))}},r=(e(327),e(12)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"category"}},[o("button",{staticClass:"home"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 12 11",fill:"none"}},[o("path",{attrs:{d:"M6.25 0.610214L10.75 3.83983V9.81316H8.25V6.4H4.25V9.81316L1.5 9.81333V3.84L6.25 0.610214ZM6.25 0L2.5 2.56L0 4.26667H1V7.68V10.24L4.75 10.2398V6.82649H7.75V10.2398L11.25 10.2398V4.26646L12 4.26667L6.25 0Z",fill:"black"}})])]),t._v(" "),o("CommonDropdown",{attrs:{"dropdown-id":"depth1","menu-items":t.menuItems}}),t._v(" "),o("CommonDropdown",{attrs:{"dropdown-id":"depth2","menu-items":t.menuItems1}})],1)}),[],!1,null,"7a7872e0",null);o.default=component.exports;installComponents(component,{CommonDropdown:e(323).default})},378:function(t,o,e){"use strict";e.r(o);var n=e(12),component=Object(n.a)({},(function(){return(0,this._self._c)("MobileCategoryOrgIntro")}),[],!1,null,"3356bc5e",null);o.default=component.exports;installComponents(component,{MobileCategoryOrgIntro:e(339).default})}}]);