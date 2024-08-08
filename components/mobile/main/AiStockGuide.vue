<template>
  <section>
    <div class="mainTopTitle">
      <NuxtLink to="/axrassi/rassi#sec01" class="ko">
        AX 라씨
      </NuxtLink>
      <NuxtLink to="/axrassi/rassi#sec01" class="en">
        AX RASSI
      </NuxtLink>
      <!-- 링크되었을때 스크롤 되도록 scrollTop 의 위치가 0 이 아니라 84px 만큼 - 되어야 함 -->
    </div>
    <!-- mainTopTitle -->
    <div class="mainTopTitleGuide ko">
      <span>
        AI증권사를 위한 씽크풀의 <br>AI통합지원 시스템
      </span>
    </div>

    <div class="mainTopTitleGuide en">
      <span>
        ThinkPool’s AI Integration <br>
        Support System for AI <br>
        Securities Firms
      </span>
    </div>
    <!-- mainTopTitleGuide -->

    <div class="mainTopCardSlider">
      <MobileMainAiStockGuideSplide />
    </div>
    <!-- mainTopCardSlider -->
  </section>
</template>

<style scoped>
section {
  @apply w-full h-fit flex bg-white float-left flex-col justify-center items-center gap-7
  pt-[50px] pb-[40px];
}
</style>
