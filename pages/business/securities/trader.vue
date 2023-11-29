<template>
  <div id="securities">
    <CommonTop :top-items='topItems' />
    <!-- // -->
    <div class="cont">
      <img src="~/assets/image/securities/trader.png" alt="" />
    </div>
    <!-- // -->
    <div class="txt">
      <strong>AI-Trader</strong>
      <span class="ko">
        AI-로보트레이더(R4)는 시장 상황을 인지하고 시장에 적응적으로 대응하는,
        주문기술을 가진 로봇.
      </span>
      <span class="en"
        >AI-Robot Trader (R4) is a robot with ordering technology that
        recognizes market conditions and responds adaptively to the
        market.</span
      >
      <span class="pt-2 ko">
        AI-로보트레이더(R4)는 최적의 가격으로 매매(싸게 사 고 비싸게 팜)가
        되도록 하는 인공지능형 주문시스템으 로서 ‘RASSI’만의 고도의 주문기술
        로봇임
      </span>
      <span class="pt-2 en">
        AI-Robot Trader (R4) is an artificial intelligence ordering system that
        enables trading at the best price (buy low, sell high) and is a robot
        with advanced ordering technology unique to 'RASSI'.
      </span>
    </div>
    <!-- // -->
  </div>
</template>

<script>
import CommonTop from '@/components/CommonTop.vue'

export default {
  components: {
    CommonTop,
  },
  data() {
    return {
      topItems: {
        sm: 'AI Trader',
        ko: 'AI 트레이더',
        en: 'AI-Trader',
      },
    }
  },
}
</script>

<style scoped>
#securities .cont {
  @apply pt-0 mt-[35px] px-[38px];
}
#securities .txt {
  @apply pt-[50px];
}
</style>
