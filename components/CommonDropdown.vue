<!-- components/CommonDropdown.vue -->
<template>
  <div :id="dropdownId" class="dropdown">
    <button class="current">
      <div v-html="currentContent"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M17 10L12 15L7 10" stroke="#D9D9D9" />
      </svg>
    </button>

    <div class="droplist">
      <NuxtLink
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.to"
        class="change"
        :class="{ active: isActive(item.to) }"
        @click="handleLinkClick(item)"
      >
        <span class="ko">{{ item.ko }}</span>
        <span class="en">{{ item.en }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dropdownId: {
      type: String,
      default: 'defaultDropdownId', // 적절한 기본값으로 변경
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentContent: '', // 현재 페이지에 대한 내용을 담을 변수
    }
  },
  watch: {
    $route(to) {
      // 라우트가 변경될 때마다 currentContent 업데이트
      this.updateCurrentContent()
    },
  },
  mounted() {
    // 초기 경로에 따라 currentContent를 설정합니다.
    this.updateCurrentContent()
  },
  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path)
    },
    updateCurrentContent(item) {
      // 클릭한 메뉴 항목이 주어진 경우 해당 내용을 사용하고, 그렇지 않으면 현재 경로에 대한 내용을 설정합니다.
      const activeLink =
        item || this.menuItems.find((item) => this.isActive(item.to))

      if (activeLink) {
        // 여기서 span을 포함한 HTML을 currentContent에 설정합니다.
        this.currentContent = `<span class="ko">${activeLink.ko}</span><span class="en">${activeLink.en}</span>`
      }
    },
    handleLinkClick(item) {
      this.updateCurrentContent(item)
    },
  },
}
</script>

<style scoped>
/* 스타일 정의 */
.dropdown {
  @apply w-full relative;
}
.dropdown > button {
  @apply h-8 leading-8 w-full flex justify-between items-center text-[12px] text-neutral-900 tracking-[-0.132px];
}
.droplist {
  @apply py-2.5 border-[#f0f0f0] border-[1px] absolute top-8 left-0 bg-white z-20 hidden flex-col items-start w-full gap-2 bg-opacity-80;
}
.droplist.active {
  @apply flex;
}
.droplist a {
  @apply w-full px-3 h-4 leading-4 text-[12px] text-[#141414] text-left last:border-0 tracking-[-0.132px];
}
.droplist a.active {
  @apply font-bold;
}
.droplist a.lst {
  @apply border-none;
}
</style>
