<template>
  <div id="axrasi">
    <section class="section01">
    <CommonTop :top-items="topItem1"></CommonTop>
    <div class="stxt">
      <span class="ko">AI증권사를 위한 씽크풀의 AI통합지원 시스템</span>
      <span class="en"></span>
    </div>

    <div class="vi">
      <img src="~/assets/image/axrassi.png" alt="" width="100%">
    </div>
    </section>

    <section class="section02">
      <CommonTop :top-items="topItem2"></CommonTop>
      <div class="stxt">
        <span class="ko">Picking & Portfolio Management System</span>
        <span class="en">Picking & Portfolio Management System</span>
      </div>

      <div class="vi">
        <img src="~/assets/image/pms.png" alt="" width="100%">
      </div>

      <div class="vi_txt">
        <span class="ko">
          투자자가 종목 또는 포트폴리오를 선택할 수 <br>있도록 지원하는 시스템
        </span>
        <span class="en"></span>
      </div>

      <div class="bnrList">
        <a href="#"><img src="~/assets/image/axrassi/bnr01.png" alt="" width="80"></a>
        <a href="#"><img src="~/assets/image/axrassi/bnr02.png" alt="" width="80"></a>
        <a href="#"><img src="~/assets/image/axrassi/bnr03.png" alt="" width="88"></a>
        <a href="#"><img src="~/assets/image/axrassi/bnr04.png" alt="" width="90"></a>
      </div>
    </section>

    <section class="section03">
      <CommonTop :top-items="topItem3"></CommonTop>
      <div class="stxt">
        <span class="ko">Signal  Management System</span>
        <span class="en">Signal  Management System</span>
      </div>

      <div class="vi">
        <img src="~/assets/image/sms.png" alt="" width="100%">
        <span class="ko">&lt;SBS 신년특집 AI vs 인간 출연&gt;</span>
        <span class="en"></span>
      </div>

      <div class="vi_txt">
        <span class="ko">국내 전종목 및 ETF를 대상으로 매매타이밍을 잡아주는 종목별 AI 시그널 시스템</span>
        <span class="en"></span>
      </div>

      <div class="bnrList">
        <a href="#"><img src="~/assets/image/axrassi/bnr05.png" alt="" width="85"></a>
        <a href="#"><img src="~/assets/image/axrassi/bnr06.png" alt="" width="88"></a>
      </div>
    </section>

    <section class="section04">
      <CommonTop :top-items="topItem4"></CommonTop>
      <div class="stxt">
        <span class="ko">Trading Management System</span>
        <span class="en">Trading Management System</span>
      </div>

      <div class="vi">
        <img src="~/assets/image/tms.png" alt="" width="100%">
      </div>

      <div class="vi_txt">
        <span class="ko">종목별 호가,체결 상태 등 주식 시장의 힘을 AI가 학습하여 싸게 사고 비싸게 팔 수 있도록 지원하는 시스템</span>
        <span class="en">A system that enables AI to learn stock market forces, such as quotes and execution status, to buy low and sell high</span>
      </div>

      <div class="bnrList">
        <a href="#"><img src="~/assets/image/axrassi/bnr02.png" alt="" width="80"></a>
        <a href="#"><img src="~/assets/image/axrassi/bnr07.png" alt="" width="72"></a>
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
  data() {
    return {
      topItem1: {
        sm: 'ThinkPool AI',
        ko: 'AX RASSI',
        en: 'AX RASSI'
      },
      topItem2: {
        sm: 'AXR 1',
        ko: 'PMS',
        en: 'PMS'
      },
      topItem3: {
        sm: 'AXR 2',
        ko: 'SMS',
        en: 'SMS'
      },
      topItem4: {
        sm: 'AXR 3',
        ko: 'TMS',
        en: 'TMS'
      }
    }
  }
}
</script>
<style scoped>
.section01, .section03{
  @apply bg-[#EFF2FB] w-full
}
section{
  @apply px-5 pb-[50px]
}
section .top{
  @apply pb-[26px]
}
.stxt{
  @apply w-full text-center pb-[90px] text-[#444] text-[14px]
}
.section02 .stxt{
  @apply pb-[30px]
}
.section03 .stxt, .section04 .stxt{
  @apply pb-10
}
.vi span{
  @apply block w-full text-center pt-2.5 text-[14px] text-[#444] tracking-[-0.154px] leading-5
}
.vi_txt{
  @apply pt-9 w-full text-center text-[14px] text-[#444] leading-5 font-Inter
}
.section04 .vi_txt{
  @apply text-start
}
.bnrList{
  @apply pt-[45px] flex flex-wrap gap-2
}
.bnrList a{
  @apply rounded-[6px] w-[156px] h-[45px] overflow-hidden border-[1px] border-[#f0f0f0] flex justify-center items-center bg-white
}
</style>
