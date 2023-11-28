<template>
  <div id="securities">
    <div class="top">
      <em>AI Reporter</em>
      <span class="ko">AI 기자</span>
      <span class="en">AI-Robo Reporter</span>
    </div>
    <!-- // -->
    <div class="cont">
      <div class="top-[7px] left-[104px]">
        <span class="ko">데이터<br />수집</span>
        <span class="en">
          Collect <br />
          Data
        </span>
      </div>
      <div class="bottom-4 left-[10px]">
        <span class="ko">콘텐츠<br />생성</span>
        <span class="en">
          Create <br />
          Content
        </span>
      </div>
      <div class="right-0 bottom-4">
        <span class="ko">데이터<br />분석</span>
        <span class="en">
          Data <br />
          Analytics
        </span>
      </div>
      <div class="cnt top-[86px] left-[65px]">
        <span class="ko">
          씽크풀<br />
          AI-로보뉴스 <br />
          콘텐츠 플랫폼
        </span>
        <span class="en">
          Thinkpool <br />
          AI-Robo news <br />
          contents Platform
        </span>
      </div>
    </div>
    <!-- // -->
    <div class="txt">
      <strong>AI-Robo Reporter</strong>
      <span class="ko">9개 주요 신문사 및 방송사에 AI-로보뉴스 제공</span>
      <span class="en">
        Powering AI robo-news for 9 major newspapers and broadcasters
      </span>
    </div>
    <!-- // -->
    <div class="banner">
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr01.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr02.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr03.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr04.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr05.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr06.png" alt="" />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/image/securities/bnr07.png" alt="" />
      </NuxtLink>
    </div>
    <!-- // -->
  </div>
</template>
<style scoped>
.cont {
  @apply mt-[50px] bg-[url('~/assets/image/securities/reporter.png')] bg-cover w-[298px] h-[331px] mx-auto relative;
}
.cont > div {
  @apply absolute text-[14px] leading-[18px] tracking-[-0.154px] text-[#141414]  w-[104px] h-[104px] flex text-center justify-center items-center;
}
.cont > div.cnt {
  @apply text-white text-[16px] font-bold tracking-[-0.176px] leading-6 w-[182px] h-[182px];
}
</style>
