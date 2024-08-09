<template>
  <div id="careers">
    <CommonTop :top-items="topItems" />

    <div class="txt">
      <span class="ko">
        경력과 성과에 따른 합리적인 평가, 씽크풀의 복지제도를 안내합니다.
      </span>
      <span class="en">
        Reasonable evaluations based on experience and performance, as well as
        ThinkPool's welfare system.
      </span>
    </div>

    <div class="content">
      <img class="ko" src="~/assets/image/welfare.png" alt="">
      <img class="en" src="~/assets/image/welfare_en.png" alt="">
    </div>
    <!-- //content -->
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
        sm: 'Employee Benefits',
        ko: '복지제도',
        en: 'Employee Benefits',
      },
    }
  },
}
</script>

<style scoped>
#careers .txt {
  @apply px-5 mt-[35px] text-[14px] text-[#141414] tracking-[-0.154px];
}
.content {
  @apply mt-10 px-5 pb-[100px];
}
.welfare_list {
  @apply flex flex-col gap-5 pb-[120px];
}
.welfare_list > button {
  @apply relative w-full rounded-[12px] bg-[#F4F5F6] flex items-center min-h-[84px] pl-[80px] py-2.5;
}
.welfare_list > button span {
  @apply text-[14px] text-[#141414] tracking-[-0.154px] text-left;
}
/* .welfare_list > button span:last-child {
  @apply absolute top-1/2 mt-[-12px] right-[15px];
} */
</style>
