<template>
  <div id="aboutus">
    <div class="title">
      <span>Corporate Overview</span>
      <strong class="ko">회사 개요</strong>
      <strong class="en">Corporate Overview</strong>
    </div>
    <!-- //title -->

    <div class="visual">
      <img src="~/assets/image/about/vi01.png" alt="회사개요" />
    </div>
    <!-- //visual -->

    <div class="text">
      <div class="tit">
        <span class="ko after:left-[113px]">
          데이터와 AI시대, 초지능형 <br />
          과학적 의사결정을 지원하는 <br />
          지식기업
        </span>
        <span class="en after:left-[113px]">
          In the age of data and AI, knowledge machines <br />
          enable superintelligent <br />
          scientific decision-making
        </span>
      </div>
      <!-- //tit -->

      <div class="txt">
        <span class="ko">
          투자금융과 마이데이터 분야에서 씽크풀만의 독자 적인 기술을 더욱
          발전시켜 글로벌 경쟁력을 갖춘 기업으로 성장해 나가겠습니다.
        </span>
        <span class="en">
          We will grow into a globally competitive company by further developing
          Thinkpool's unique technology in the fields of investment finance and
          big data.
        </span>
      </div>
      <!-- //txt -->
    </div>
    <!-- //text -->

    <div class="content">
      <dl class="pb-[60px]">
        <dt>
          <span class="ko">회사명</span>
          <span class="en">Company Name</span>
        </dt>
        <dd>
          <span class="ko">㈜ 씽크풀 (ThinkPool.co.Ltd.)</span>
          <span class="en">ThinkPool.co., Ltd.</span>
        </dd>
        <!-- // -->
        <dt>
          <span class="ko">대표이사</span>
          <span class="en">C E O</span>
        </dt>
        <dd>
          <span class="ko">김 동 진</span>
          <span class="en">Kim Dong-jin</span>
        </dd>
        <!-- // -->
        <dt>
          <span class="ko">설립연월</span>
          <span class="en">Founded</span>
        </dt>
        <dd>
          <span class="ko">1994.1월</span>
          <span class="en">Jan. 1994</span>
        </dd>
        <!-- // -->
        <dt>
          <span class="ko">자본금</span>
          <span class="en">Capital Stock</span>
        </dt>
        <dd>
          <span class="ko">35.7억 원 [자본총계 170억원]</span>
          <span class="en">35.7 billion</span>
        </dd>
        <!-- // -->
        <dt>
          <span class="ko">종업원수</span>
          <span class="en">Number of employees</span>
        </dt>
        <dd>
          <span class="ko">71명</span>
          <span class="en">71</span>
        </dd>
        <!-- // -->
        <dt>
          <span class="ko">사업분야</span>
          <span class="en">Business Area / Number of members</span>
        </dt>
        <dd>
          <span class="ko">
            빅데이터ㆍAI 기반의 투자금융 부문등 <br />컨텐츠 생산/ 알고리즘
          </span>
          <span class="en">
            Produce content for big data, AI-powered investment banking, etc. /
            Algorithm development / Build and operate platforms, decision
            support systems / 600K members
          </span>
        </dd>
        <!-- // -->
        <dt>
          <span class="ko">특허현황</span>
          <span class="en">Patents</span>
        </dt>
        <dd>
          <span class="ko">등록 97건 출원 11건</span>
          <span class="en">
            Registered Patents 95, Patent applications 70 <br />
            ( As of the end of 2022 )
          </span>
        </dd>
        <!-- // -->
        <dt>
          <span class="ko">회사위치</span>
          <span class="en">Location</span>
        </dt>
        <dd>
          <span class="ko">
            서울시 영등포구 국제금융로 70 15층<br />
            (여의도동 미원빌딩)
          </span>
          <span class="en">
            15F, 70, Gukje Finance-ro, Yeongdeungpo-gu, Seoul, Korea <br />
            (Yeouido-dong, Mi-won Building)
          </span>
        </dd>
        <!-- // -->
        <dt>
          <span class="ko">기타</span>
          <span class="en">Others</span>
        </dt>
        <dd>
          <span class="ko"
            >기술벤처기업(스타벤처) <br />
            이노비즈 기업부설연구소</span
          >
          <span class="en">
            Tech startups (Star Ventures), Innobiz, Corporate Research Center
            (Selected as an ATC+ Excellent Company Research Center by the
            Ministry of Trade, Industry and Energy, AI Division)
          </span>
        </dd>
        <!-- // -->
      </dl>
    </div>
    <!-- //content -->
  </div>
</template>

<style scoped>
/* overview */
.content dl {
  @apply w-[calc(100%-40px)] mx-5 border-t-[1px] border-t-[#8c8c8c] flex flex-wrap items-center;
}
.content dl dt {
  @apply w-[115px] flex min-h-[42px] items-center py-3;
}
.content dl dt span {
  @apply text-[12px] text-[#141414] font-bold pl-5;
}
.content dl dt span.en {
  @apply px-2.5;
}
.content dl dd {
  @apply w-[calc(100%-115px)] flex min-h-[42px] items-center py-3 relative
  after:content-[''] after:w-[calc(100%+115px)] after:absolute after:bottom-0 after:left-[-115px] after:h-[1px] after:bg-[#f0f0f0];
}
.content dl dd span {
  @apply text-[12px] font-Inter text-black leading-[18px];
}
</style>
