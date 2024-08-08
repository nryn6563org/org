<template>
  <div class="top">
    <em>{{ topItems.sm }}</em>
    <span class="ko">{{ topItems.ko }}</span>
    <span class="en">{{ topItems.en }}</span>
  </div>
</template>

<script>
export default {
  props: {
    topItems: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>
.top {
  @apply w-full py-[50px] flex flex-col items-center gap-2;
}
.top em {
  @apply text-[12px] text-[#9395a1] tracking-[-0.132px] leading-4 w-full text-center
}
.top span {
  @apply text-[32px] text-[#141414] tracking-[-0.352px] font-bold leading-10 !w-full text-center
}
</style>
