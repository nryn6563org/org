(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{342:function(t,o,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("041792d2",content,!0,{sourceMap:!1})},382:function(t,o,n){"use strict";n(342)},383:function(t,o,n){var e=n(31)((function(i){return i[1]}));e.push([t.i,"#container[data-v-71afcba7]{display:block;min-height:calc(100% - 301px);padding-top:90px;position:relative;scroll-snap-type:y var(--tw-scroll-snap-strictness);width:100%}.depth1>span[data-v-71afcba7]{font-size:20px}.depth1>span[data-v-71afcba7],.depth1>span.en[data-v-71afcba7]{--tw-text-opacity:1;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));font-weight:700;letter-spacing:-.22px}.depth1>span.en[data-v-71afcba7]{font-size:18px}.depth2>NuxtLink[data-v-71afcba7],.depth2>span[data-v-71afcba7],.depth2Part>strong[data-v-71afcba7]{--tw-text-opacity:1;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));font-size:14px;height:21px;letter-spacing:-.154px}.depth2>span[data-v-71afcba7],.depth2Part>strong[data-v-71afcba7]{font-weight:700;line-height:21px}.depth2Part>button[data-v-71afcba7]{--tw-text-opacity:1;color:#171717;color:rgba(23,23,23,var(--tw-text-opacity));font-size:14px;height:21px;letter-spacing:-.154px;padding-left:1.25rem}",""]),e.locals={},t.exports=e},460:function(t,o,n){"use strict";n.r(o);n(12),n(19);var e={data:function(){return{isKorActive:!0,isEngActive:!1}},mounted:function(){document.querySelectorAll(".depth1").forEach((function(t){t.addEventListener("click",(function(o){document.querySelectorAll(".mn").forEach((function(div){div.classList.remove("active")})),t.parentElement.classList.add("active")}))}))},methods:{toggleKor:function(){this.isKorActive=!this.isKorActive,this.isKorActive?(this.isEngActive=!1,document.body.classList.remove("eng"),document.body.classList.add("kor")):document.body.classList.remove("kor")},toggleEng:function(){this.isEngActive=!this.isEngActive,this.isEngActive?(this.isKorActive=!1,document.body.classList.remove("kor"),document.body.classList.add("eng")):document.body.classList.remove("eng")}}},r=(n(382),n(8)),component=Object(r.a)(e,(function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"container"}},[o("div",{staticClass:"ch-lang"},[o("button",{class:{active:t.isKorActive},on:{click:t.toggleKor}},[t._v("KR")]),t._v(" "),o("button",{class:{active:t.isEngActive},on:{click:t.toggleEng}},[t._v("EN")])]),t._v(" "),o("div",{staticClass:"globalNavigation"},[o("div",{staticClass:"mn"},[o("button",{staticClass:"depth1"},[o("span",{staticClass:"ko"},[t._v("회사소개")]),t._v(" "),o("span",{staticClass:"en"},[t._v("About Us")]),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8",stroke:"#D0D0D0","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("div",{staticClass:"depth2"},[o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/overview"}},[t._v("회사개요")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/overview"}},[t._v("Corporate Overview")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/ceo"}},[t._v("CEO메시지")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/ceo"}},[t._v("CEO Message")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/vision"}},[t._v("비전")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/vision"}},[t._v("VISION")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/orghistory"}},[t._v("연혁")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/orghistory"}},[t._v("Milestones")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/patent"}},[t._v("특허")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/patent"}},[t._v("Patent")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/award"}},[t._v("수상")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/award"}},[t._v("Award")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/certification"}},[t._v("인증")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/certification"}},[t._v("Certification")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/welfare"}},[t._v("복지제도")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/welfare"}},[t._v("Welfare System")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/value"}},[t._v("인재상")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/value"}},[t._v("Our Values")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/about/contact"}},[t._v("오시는 길")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/about/contact"}},[t._v("Contact")])],1)]),t._v(" "),o("div",{staticClass:"mn"},[o("button",{staticClass:"depth1"},[o("span",{staticClass:"ko"},[t._v("ThinkPool AI")]),t._v(" "),o("span",{staticClass:"en"},[t._v("ThinkPool AI")]),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8",stroke:"#D0D0D0","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("div",{staticClass:"depth2"},[o("NuxtLink",{attrs:{to:"/axrassi/rassi"}},[t._v("AX RASSI ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/axrassi/algorithms"}},[t._v("ThinkPool AI Algorithm")])],1)]),t._v(" "),o("div",{staticClass:"mn"},[o("button",{staticClass:"depth1"},[o("span",{staticClass:"ko"},[t._v("위치기반서비스")]),t._v(" "),o("span",{staticClass:"en"},[t._v("LBS")]),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8",stroke:"#D0D0D0","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("div",{staticClass:"depth2"},[o("NuxtLink",{staticClass:"ko",attrs:{to:"/business/lbs/location"}},[t._v("로그인보호서비스")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/business/lbs/location"}},[t._v("Login Protection Services")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/business/lbs/prevention"}},[t._v("안심키퍼서비스")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/business/lbs/prevention"}},[t._v("SafeKeeper Service")])],1)]),t._v(" "),o("div",{staticClass:"mn"},[o("button",{staticClass:"depth1"},[o("span",{staticClass:"ko"},[t._v("리스크관리솔루션")]),t._v(" "),o("span",{staticClass:"en"},[t._v("RMS")]),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8",stroke:"#D0D0D0","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("div",{staticClass:"depth2"},[o("NuxtLink",{staticClass:"ko",attrs:{to:"/business/rm/rms"}},[t._v("RMS통제시스템")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/business/rm/rms"}},[t._v("RMS Control System")])],1)]),t._v(" "),o("div",{staticClass:"mn"},[o("button",{staticClass:"depth1"},[o("span",{staticClass:"ko"},[t._v("기업부설연구소")]),t._v(" "),o("span",{staticClass:"en"},[t._v("R&D Center")]),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8",stroke:"#D0D0D0","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("div",{staticClass:"depth2"},[o("NuxtLink",{staticClass:"ko",attrs:{to:"/rnd/national"}},[t._v("국가R&D")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/rnd/national"}},[t._v("National R&D")]),t._v(" "),o("NuxtLink",{staticClass:"ko",attrs:{to:"/rnd/military"}},[t._v("병역특례")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/rnd/military"}},[t._v("Mil. Service Exemption")])],1)]),t._v(" "),o("div",{staticClass:"mn"},[o("button",{staticClass:"depth1"},[o("span",{staticClass:"ko"},[t._v("홍보센터")]),t._v(" "),o("span",{staticClass:"en"},[t._v("PR")]),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8",stroke:"#D0D0D0","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("div",{staticClass:"depth2"},[o("NuxtLink",{staticClass:"ko",attrs:{to:"/promotion/notice"}},[t._v("공지사항")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/promotion/notice"}},[t._v("Notice")]),t._v(" "),o("NuxtLink",{attrs:{to:"/promotion/news"}},[t._v("News")])],1)]),t._v(" "),o("div",{staticClass:"mn"},[o("button",{staticClass:"depth1"},[o("span",{staticClass:"ko"},[t._v("IR")]),t._v(" "),o("span",{staticClass:"en"},[t._v("IR")]),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8",stroke:"#D0D0D0","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("div",{staticClass:"depth2"},[o("NuxtLink",{staticClass:"ko",attrs:{to:"/ir"}},[t._v("IR 바로 가기")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/ir"}},[t._v("IR")])],1)]),t._v(" "),o("div",{staticClass:"mn"},[o("button",{staticClass:"depth1"},[o("span",{staticClass:"ko"},[t._v("채용정보")]),t._v(" "),o("span",{staticClass:"en"},[t._v("Careers")]),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[o("path",{attrs:{d:"M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8",stroke:"#D0D0D0","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),o("div",{staticClass:"depth2"},[o("NuxtLink",{staticClass:"ko",attrs:{to:"/careers/recruit"}},[t._v("채용공고")]),t._v(" "),o("NuxtLink",{staticClass:"en",attrs:{to:"/careers/recruit"}},[t._v("Recruit")])],1)])])])}),[],!1,null,"71afcba7",null);o.default=component.exports}}]);