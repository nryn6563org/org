<template>
  <div id="aboutus">
    <CommonTop :top-items="topItems" />
    <!-- //title -->

    <div class="visual">
      <img class="ko" src="~/assets/image/vision.png" alt="테크비전" />
      <img class="en" src="~/assets/image/vision_en.png" alt="테크비전" />
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
      <div class="mx-auto w-[280px] p-[70px_0_40px]">
        <img class="ko" src="~/assets/image/vision2.png" alt="철학" width="280" />
        <img class="en" src="~/assets/image/vision2_en.png" alt="철학" width="280" />
      </div>
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
        sm: 'Our Vision',
        ko: '비전',
        en: 'Our Values',
      },
    }
  },
}
</script>

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
