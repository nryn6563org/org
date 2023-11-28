<template>
  <div id="securities">
    <div class="top">
      <em>AI Advisor System</em>
      <span class="ko">AI 어드바이저</span>
      <span class="en">AI-ADVISOR</span>
    </div>
    <!-- // -->
    <div class="cont">
      <div class="fst">
        <span class="ko">AI-Advisor 시스템</span>
        <span class="en">AI-Advisor System</span>
      </div>
      <div>
        <span>Step01</span>
        <span class="ko">
          투자 및 재무<br />
          조언 안내
        </span>
        <span class="en"> Investment and financial advice guidance </span>
      </div>
      <div>
        <span>Step02</span>
        <span class="ko">
          셀프 서비스<br />
          투자 및 재무 조언
        </span>
        <span class="en"> Self-service investment and financial advice </span>
      </div>
      <div>
        <span>Step03</span>
        <span class="ko">
          완전 자동화된<br />
          비재량 투자 조언
        </span>
        <span class="en">
          Fully automated non-discretionary investment advice
        </span>
      </div>
    </div>
    <!-- // -->
    <div class="txt">
      <strong>AI-Advisor</strong>
      <span class="ko">
        개인 특성 분석 및 특성에 적합한 개인맞춤형 포트폴리오를 자동으로
        관리해주는 시스템(PMS)
      </span>
      <span class="en">
        A system that analyzes your personal characteristics and automatically
        manages a personalized portfolio tailored to your needs.(PMS)
      </span>
      <span class="pt-2 ko">
        씽크풀의 로보어드바이저는 일반적인 로보어드바이저와 차별 (전종목 분석,
        실시간 시장 대응)
      </span>
      <span class="pt-2 en">
        ThinkPool's robot advisor is different from other robot advisors
        (full-scale analysis, real-time market response)
      </span>
    </div>
    <!-- // -->
    <div class="banner">
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr08.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr09.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr10.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr11.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr12.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr13.png" alt="" />
      </NuxtLink>
    </div>
    <!-- // -->
  </div>
</template>

<style scoped>
.cont {
  @apply mt-10 bg-[url('~/assets/image/securities/advisor.png')] bg-cover w-full h-[306px] mx-auto relative;
}
.cont > div{
    @apply absolute;
}
.cont > div.fst{
    @apply w-full text-center leading-5 top-[70px] text-[16px] text-[#5368ff] font-bold tracking-[-0.176px]
}
#securities .txt{
    @apply pt-[100px]
}
</style>