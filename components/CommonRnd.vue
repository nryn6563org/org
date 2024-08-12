<template>
  <div class="rnd-content">
    <div class="top">
      <em class="ko">{{ rndItems.smk }}</em>
      <em class="en">{{ rndItems.sme }}</em>
      <span class="ko" v-html="rndItems.ko"></span>
      <span class="en" v-html="rndItems.en"></span>
    </div>
    <!-- //top -->

    <div class="visual">
      <p>
        <img :src="rndItems.url" alt="비주얼이미지" />
      </p>
      <div>
        <span class="ko" v-html="rndItems.imgTitle"></span>
        <strong class="ko" v-html="rndItems.imgTitle2"></strong>
        <strong class="en" v-html="rndItems.imgTitleEN"></strong>
      </div>
    </div>
    <!-- //visual -->

    <div class="cont">
      <strong class="ko" v-html="rndItems.title"></strong>
      <strong class="en" v-html="rndItems.titleEN"></strong>

      <dl>
        <dt>
          <span class="ko">개발기간</span>
          <span class="en">Development Period</span>
        </dt>
        <dd>
          <span class="ko">{{ rndItems.date }}</span>
          <span class="en">{{ rndItems.dateEN }}</span>
        </dd>
        <!-- // -->

        <dt class="mt-5">
          <span class="ko">개발예산</span>
          <span class="en">Development budget </span>
        </dt>
        <dd>
          <span class="ko" v-html="rndItems.price"></span>
          <span class="en" v-html="rndItems.priceEN"></span>
        </dd>
        <!-- // -->

        <dt class="mt-5">
          <span class="ko">주관기관</span>
          <span class="en">Organizing Authority </span>
        </dt>
        <dd>
          <span class="ko">{{ rndItems.org }}</span>
          <span class="en">{{ rndItems.orgEN }}</span>
        </dd>
        <!-- // -->

        <dt class="mt-5">
          <span class="ko">참여기관</span>
          <span class="en">Participating organizations </span>
        </dt>
        <dd>
          <span class="ko" v-html="rndItems.party"></span>
          <span class="en" v-html="rndItems.partyEN"></span>
        </dd>
        <!-- // -->
      </dl>
    </div>
    <!-- //cont -->
  </div>
</template>

<script>
export default {
  props: {
    rndItems: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.top {
  @apply w-full py-[50px] flex flex-col items-center gap-2 px-5;
}
.top em {
  @apply text-[12px] text-[#9395a1] tracking-[-0.132px] leading-4;
}
.top span {
  @apply text-[32px] text-[#141414] tracking-[-0.352px] font-bold leading-10 text-center;
}
.visual {
  @apply relative w-full min-h-[341px];
}
.visual p {
  @apply w-full
}
.visual div{
  @apply absolute inset-0 w-full h-full flex items-center flex-col justify-center gap-5;
}
.visual span {
  @apply z-20 text-[16px] leading-5 text-white text-center;
}
.visual strong {
  @apply z-20 text-[32px] leading-10 font-bold text-white tracking-[-0.96px] text-center;
}
.cont {
  @apply w-full p-[40px_20px_0];
}
.cont strong {
  @apply block w-full text-[20px] leading-6 font-bold tracking-[-0.22px] text-[#141414];
}
.cont dl {
  @apply flex flex-col mt-10 w-full gap-1;
}
.cont dl dt {
  @apply text-[#141414] font-bold leading-[22px] text-[14px] tracking-[-0.154px];
}
.cont dl dd {
  @apply text-[#444] leading-[22px] text-[14px] tracking-[-0.154px];
}
.party-image {
  @apply w-full flex flex-wrap justify-between gap-x-[9px] gap-y-2.5 px-5 mt-[50px] pb-[120px];
}
.party-image span {
  @apply bg-white border-[1px] border-[#f0f0f0] rounded-[6px] w-[calc((100%-9px)/2)] h-[45px] justify-center items-center flex;
}
</style>
