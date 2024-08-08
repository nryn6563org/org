<template>
  <section>
    <div class="mainTopTitle">
      <strong class="ko">위치기반솔루션</strong>
      <strong class="en">Location-based services</strong>
    </div>
    <!-- mainTopTitle -->

    <div class="mainTopTitleGuide">

      <span class="ko">
        위치기반서비스를 통해 고객의 정보를<br>
        보호하고 편의성을 추구합니다.
      </span>
      <span class="en">
        We use location-based services to <br>
        protect your information and provide <br>
        convenience.
      </span>
    </div>
    <!-- mainTopTitleGuide -->

    <div class="mainTopCardSlider">
      <MobileMainLbsPartSplide />
    </div>
  </section>
</template>

<style scoped>
section {
  @apply w-full h-fit flex bg-[#DEE3EA] float-left flex-col justify-center items-center gap-7
  pt-[50px] pb-[40px];
}
</style>
