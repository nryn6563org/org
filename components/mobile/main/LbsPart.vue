<template>
  <section>
    <div class="mainTopTitle">
      <em>LBS Part</em>
      <strong>LBS</strong>
      <span class="ko">(위치기반서비스)</span>
      <span class="en">(Location-based services)</span>
    </div>
    <!-- mainTopTitle -->

    <div class="mainTopTitleGuide">
      <span class="ko">
        Protect your information and <br />
        pursue convenience with <br />
        location-based services.
      </span>
      <span class="en"></span>
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
