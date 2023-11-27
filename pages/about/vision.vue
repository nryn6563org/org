<template>
  <div id="aboutus">
    <div class="title">
      <span>Our Vision</span>
      <strong class="ko">비전</strong>
      <strong class="en">VISION</strong>
    </div>
    <!-- //title -->

    <div class="visual">
      <img src="~/assets/image/about/vi03.png" alt="ceo" />
    </div>
    <!-- //visual -->

    <div class="text">
      <div class="tit">
        <span class="ko after:left-[115px]">
          데이터와 AI시대, 초지능형 <br />
          과학적 의사결정을 지원하는 <br />
          지식기업
        </span>
        <span class="en after:left-[210px]">
          Knowledge enterprises supporting data, AI expectations, and
          super-intelligent scientific decision-making
        </span>
      </div>
      <!-- //tit -->
    </div>
    <!-- //text -->

    <div class="content">
      <div class="vision_list">
        <div>
          <strong>01</strong>
          <span class="ko">
            투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱
            발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.
          </span>
          <span class="en">
            We will further develop Thinkpool's unique technologies in the
            fields of investment banking and big data to grow into a global
            company with global competitiveness.
          </span>
        </div>
        <div>
          <strong>02</strong>
          <span class="ko">
            투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱
            발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.
          </span>
          <span class="en">
            We will further develop Thinkpool's unique technologies in the
            fields of investment banking and big data to grow into a global
            company with global competitiveness.
          </span>
        </div>
        <div>
          <strong>03</strong>
          <span class="ko">
            투자금융과 마이데이터 분야에서는 씽크풀만의 독자적인 기술을 더욱
            발전시켜 글로벌 경쟁력을 갖추고 글로벌 기업으로 성장해 나가겠습니다.
          </span>
          <span class="en">
            We will further develop Thinkpool's unique technologies in the
            fields of investment banking and big data to grow into a global
            company with global competitiveness.
          </span>
        </div>
      </div>
    </div>
    <!-- //content -->
  </div>
</template>

<style scoped>
.vision_list {
  @apply p-[8px_20px_120px] w-full flex flex-col gap-5;
}
.vision_list > div {
  @apply block w-full bg-[#fafafc] rounded-[20px] shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] p-[30px_20px_25px] flex flex-col gap-5;
}
.vision_list > div strong {
  @apply pl-1 text-[20px] leading-5 text-[#141414] font-bold;
}
.vision_list > div span {
  @apply text-[16px] text-[#444] leading-6 tracking-[-0.176px];
}
</style>
