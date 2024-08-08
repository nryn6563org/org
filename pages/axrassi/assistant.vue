<template>
  <div id="assistant">
    <section id="sec01" class="section01">
      <CommonTop :top-items="topItem1"></CommonTop>
      <div class="stxt">
        <span class="ko">압도적 1위, 대한민국 대표 주식 AI 앱</span>
        <span class="en">'AI trading signal' to maximize profits and minimize losses</span>
      </div>
      <!-- //stxt -->

      <div class="vi">
        <img src="~/assets/image/assistant.png" alt="비주얼" width="371px">
      </div>
      <!-- // -->

      <div class="txt">
        <div>
          <strong>금융부분 최고 매출</strong>
          <span>
            구글 플레이스토어 주식 정보 앱 중<br>
            압도적 매출 1위<br>
            구글플레이스토어 + 애플앱스토어 25만 다운로드 <br>
            평균 별점 4점대, 리뷰 500여건 이상
          </span>
        </div>
        <!-- // -->

        <div>
          <strong>우수한 매매 성과</strong>
          <span>
            승률 83%, 종목 당 연 평균 수익률 18.7% 기록 <br>
            5년 10억건 이상의 빅데이터 기반 <br>
            10만번 이상의 매매로 데이터 신뢰성 확보 <br>
            상승구간 집중 매매로 수익 극대화 <br>
            하락구간 포지션 미보유로 위험 우선 관리
          </span>
        </div>
        <!-- // -->

        <div>
          <strong>개인화된 종목관리</strong>
          <span>
            개인별 매수가에 맞춘 맞춤형 AI매도신호 제공 <br>
            개인별 종목 포켓 제공 및 다양한 AI정보 제공
          </span>
        </div>
        <!-- // -->
      </div>
       
    </section>
  </div>
</template>
<script>
import CommonTop from '@/components/CommonTop.vue'

export default {
  components: {
    CommonTop
  },
  data () {
    return {
      topItem1 : {
        sm: "AI",
        ko: "라씨매매비서",
        en: "RASSI Trading Assistant"
      }
    }
  },
}
</script>

<style scoped>
.section01{
  @apply bg-[#EFF2FB] w-full
}
section .top{
  @apply pb-[26px]
}
.stxt{
  @apply w-full text-center text-[#444] text-[14px] pb-[50px]
}
.txt{
  @apply w-full px-5 flex flex-col gap-4 pb-[100px] pt-5
}
.txt div{
  @apply bg-white w-full shadow-ass rounded-[10px] p-[18px_15px] flex flex-col gap-2.5
}
.txt div strong{
  @apply leading-5 text-[16px] text-[#5368ff] font-bold
}
.txt div span{
  @apply text-[14px] leading-4 text-[#444]
}
</style>