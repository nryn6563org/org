<template>
  <div class="family_site_select">
    <div v-if="showContent" class="dropMenu">
      <button class="ko">
        <nuxt-link to="/">라씨매매비서</nuxt-link>
      </button>
      <button class="en">
        <nuxt-link to="/">Rassi Sales Secretary</nuxt-link>
      </button>
      <button class="ko">
        <nuxt-link to="/">AI 증권사</nuxt-link>
      </button>
      <button class="en">
        <nuxt-link to="/">AI Stock</nuxt-link>
      </button>
    </div>
    <!-- dropMenu -->

    <button @click="toggleContent">
      <span>Family Site</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M7 14L12 9L17 14" stroke="#A2A5BC" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent
    },
  },
}
</script>

<style scoped>
.family_site_select {
  @apply absolute bottom-[33px] w-[calc(100%-40px)] left-5 py-2.5 px-5 border-[1px] border-gray-400 rounded-[5px] z-10 bg-gray-800;
}
.family_site_select > button {
  @apply w-full flex justify-between h-[22px] items-center text-[14px] text-gray-400 tracking-[-0.154px];
}
.family_site_select .dropMenu {
  @apply w-full flex-col gap-[2px] pt-[4px] pb-[9px] border-b-[1px] border-gray-400 mb-[10px] flex transition-all duration-100;
}
.family_site_select .dropMenu.active {
  @apply flex;
}
.family_site_select .dropMenu button {
  @apply h-[22px] w-full block text-gray-400 text-[14px] tracking-[-0.154px] text-left;
}
</style>
