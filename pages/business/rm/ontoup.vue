<template>
  <div id="rm">
    <CommonTop :top-items="topItems" />

    <div class="cont pt-[15px]">
      <div class="vi">
        <img src="~/assets/image/ontoup.png" alt="온투업" />
      </div>
      <div class="txt">

        <span>
          온라인연계신용대출상품의 기관투자자를 대상으로 채권(대출)투자를 안정적으로 관리할 수 있도록 도와주는 Fin-Tech 시스템 <br><br>
          대형 신용평가사보다 우수한 성능의 자체 신용평가모델 보유 <br><br>
          * 온투업 (온라인투자연계금융업, 옛 P2P)
        </span>

        
        <div class="cnc">
          <a href="#"
            ><img width="122" src="~/assets/image/cnc/cnc21.png" alt=""
          /></a>
          <a href="#"
            ><img width="115" src="~/assets/image/cnc/cnc22.png" alt=""
          /></a>
          <a href="#"
            ><img width="113" src="~/assets/image/cnc/cnc23.png" alt=""
          /></a>
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
        ko: '온투업RMS시스템',
        en: 'RMS System',
      },
    }
  },
}
</script>

<style scoped>
#rm {
  @apply bg-[#EFF2FB];
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
.vi{
  @apply px-5
}
.txt {
  @apply w-full mt-[50px] text-[14px] text-[#444] leading-4 px-5;
}
.txt span {
  @apply block pb-5;
}

.cnc {
  @apply w-full flex gap-2 flex-wrap pb-[100px];
}
.cnc a {
  @apply w-[156px] h-[45px] rounded-[6px] bg-white flex justify-center items-center;
}
</style>
