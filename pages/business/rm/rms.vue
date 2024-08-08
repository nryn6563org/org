<template>
  <div id="rm">
    <CommonTop :top-items="topItems" />

    <div class="cont pt-[15px]">
      <div class="rms">
        <div class="top-[8px] left-[110px]">
          <span class="ko">
            증권 <em>12</em>사,<br />
            대출기관 <em>22</em>사,<br />
            상품 <em>75</em>개
          </span>
          <span class="en"> <em>75</em> products </span>
        </div>
        <!-- // -->

        <div class="bottom-[16px] left-[11px]">
          <span class="ko">
            신규대출 취급액<br />
            <em>3</em>조 <em>5,000</em>억원
          </span>
          <span class="en">
            LB <br />
            <em>1.2 T</em> KRW
          </span>
        </div>
        <!-- // -->

        <div class="bottom-[16px] right-[11px]">
          <span class="ko">
            우량상품 <br />
            개발 및 자판구조 <br />
            확대 중
          </span>
          <span class="en"> Service expansion in progress </span>
        </div>
        <!-- // -->

        <div class="lst">
          <span class="ko">
            금융기관간 <br />
            전과정 <br />
            완전 자동화 <br />
            최초 개발
          </span>
          <span class="en">
            First to fully <br />
            automate the entire <br />
            interbank process
          </span>
        </div>
        <!-- // -->
      </div>
      <!-- // -->

      <div class="txt">
        <span class="ko">
          2005년 국내최초로 대우증권과 KB저축은행(구, 제일저축은행)에 시스템을
          개발/제공 <br /><br />
          증권 12개사, 대출기관 22개사, 상품 총 75개
        </span>
        <span class="en">
          Developed and provided systems to Daewoo Securities and KB Savings
          Bank for the first time in Korea in 2005 <br /><br />
          12 securities firms, 22 lenders, 75 products in total
        </span>

        <div class="cnc">
          <a href="#"><img width="122" src="~/assets/image/cnc/cnc11.png" alt=""></a>
          <a href="#"><img width="115" src="~/assets/image/cnc/cnc12.png" alt=""></a>
          <a href="#"><img width="113" src="~/assets/image/cnc/cnc13.png" alt=""></a>
          <a href="#"><img width="79" src="~/assets/image/cnc/cnc5.png" alt=""></a>
          <a href="#"><img width="101" src="~/assets/image/cnc/cnc14.png" alt=""></a>
          <a href="#"><img width="82" src="~/assets/image/cnc/cnc6.png" alt=""></a>
          <a href="#"><img width="61" src="~/assets/image/cnc/cnc15.png" alt=""></a>
          <a href="#"><img width="128" src="~/assets/image/cnc/cnc16.png" alt=""></a>
          <a href="#"><img width="128" src="~/assets/image/cnc/cnc17.png" alt=""></a>
          <a href="#"><img width="119" src="~/assets/image/cnc/cnc18.png" alt=""></a>
          <a href="#"><img width="106" src="~/assets/image/cnc/cnc19.png" alt=""></a>
          <a href="#"><img width="99" src="~/assets/image/cnc/cnc20.png" alt=""></a>
        </div>
      </div>
    </div>
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
        sm: '리스크관리솔루션',
        ko: 'RMS통제시스템',
        en: 'RMS System',
      },
    }
  },
}
</script>

<style scoped>
#rm{
  @apply bg-[#EFF2FB]
}
.rms {
  @apply w-[324px] h-[334px] mx-auto bg-[url(~/assets/image/rm/rms.png)] bg-cover relative;
}
.rms > div {
  @apply absolute w-[100px] h-[100px] flex justify-center items-center text-center text-[12px] text-black leading-[18px];
}
.rms > div em {
  @apply font-bold;
}
.rms > div.lst {
  @apply w-[262px] h-[262px] flex justify-center items-center text-center bottom-[16px] left-[50%] ml-[-131px] leading-6 text-[20px] tracking-[-0.22px] font-bold text-[#5368ff];
}

.txt {
  @apply w-full mt-[50px] text-[14px] text-[#444] leading-4 px-5;
}
.txt span {
  @apply block pb-5;
}

.cnc{
  @apply w-full flex gap-2 flex-wrap
}
.cnc a{
  @apply w-[156px] h-[45px] rounded-[6px] bg-white flex justify-center items-center
}
</style>
