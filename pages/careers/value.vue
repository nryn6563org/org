<template>
  <div id="careers">
    <CommonTop :top-items="topItems" />
    <!-- //title -->

    <div class="values">
      <img class="ko" src="~/assets/image/value.png" alt="인재상">
      <img class="en" src="~/assets/image/value_en.png" alt="인재상">
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
        sm: 'Our Values',
        ko: '인재상',
        en: 'Our Values',
      },
    }
  },
}
</script>

<style scoped>
.values {
  @apply w-full px-5 pt-[35px] pb-[100px]
}
</style>
