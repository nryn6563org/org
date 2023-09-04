<template>
  <section>
    <div class="mainTopTitle ko">
      <em>AI Part</em>
      <strong>AI 증권사</strong>
    </div>

    <div class="mainTopTitle en">
      <em>AI Part</em>
      <strong>AI Securities Company</strong>
    </div>
    <!-- mainTopTitle -->
    <div class="mainTopTitleGuide ko">
      <span>
        빅데이터, AI에 기반한
        <em
          >초개인화, <br />
          초지능화</em
        >
        투자지원 서비스를 제공합니다.
      </span>
    </div>

    <div class="mainTopTitleGuide en">
      <span>
        It provides investment <br />
        support services based on
        <em
          >big data, <br />
          AI, <br />
          super personalization, <br />
          and super intelligence
        </em>
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
