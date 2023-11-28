<template>
  <div id="securities">
    <div class="top">
      <em>AI Analyst</em>
      <span class="ko">AI 애널리스트</span>
      <span class="en"> AI-Robo Analist </span>
    </div>
    <!-- // -->
    <div class="cont">
      <div class="top-[76px] left-[146px] w-[100px]">
        <span class="ko">
          투자전략<br />
          시스템
        </span>
        <span class="en">
          Investment <br />
          Strategy System
        </span>
      </div>
      <div class="top-1/2 left-[22px] w-[100px] mt-2.5">
        <span class="ko">
          자동매매<br />
          시스템
        </span>
        <span class="en">
          Automated <br />
          Trading Systems
        </span>
      </div>
      <div class="bottom-[100px] right-[50px] w-[100px]">
        <span class="ko">
          자산배분<br />
          시스템
        </span>
        <span class="en">
          Asset <br />
          Allocation System
        </span>
      </div>
      <div class="lst">
        <span class="ko">
          씽크풀<br />
          AI-로보어드바이저<br />
          플랫폼
        </span>
        <span class="en">
          Thinkpool <br />
          AI-Robo advisor <br />
          Platform
        </span>
      </div>
    </div>
    <!-- // -->
    <div class="txt">
      <strong>AI-Robo Analist</strong>
      <span class="ko">
        키움증권, 미래에셋증권, 한국투자증권 등 <br />
        6개 증권사와 제휴
      </span>
      <span class="en">
        Six securities firms, including Kiwoom Securities, Mirae Asset
        Securities, and Korea Investment & Securities Co.
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
  @apply mt-[30px] bg-[url('~/assets/image/securities/analyst.png')] bg-cover w-full h-[397px] mx-auto relative;
}
.cont > div {
  @apply absolute text-white text-[14px] tracking-[-0.154px] text-center leading-[18px];
}
.cont > div.lst {
  @apply text-[#5368FF] text-[15px] font-bold leading-5 w-[148px] h-[148px] top-1/2 left-1/2 ml-[-74px] mt-[-74px] flex items-center justify-center;
}
</style>
