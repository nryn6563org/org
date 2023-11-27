<template>
  <div id="depth2" class="dropdown">
    <button class="ko current">
      <span></span>
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
    <!-- // -->

    <button class="en current">
      <span></span>
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
        to="/about/overview"
        class="ko change"
        :class="{ active: isActive('/about/overview') }"
        >회사개요</NuxtLink
      >
      <NuxtLink
        to="/about/overview"
        class="en change"
        :class="{ active: isActive('/about/overview') }"
      >
        Corporate Overview
      </NuxtLink>
      <NuxtLink
        to="/about/ceo"
        class="ko change"
        :class="{ active: isActive('/about/ceo') }"
        >CEO메시지</NuxtLink
      >
      <NuxtLink
        to="/about/ceo"
        class="en change"
        :class="{ active: isActive('/about/ceo') }"
      >
        CEO Message
      </NuxtLink>
      <NuxtLink
        to="/about/vision"
        class="ko change"
        :class="{ active: isActive('/about/vision') }"
        >비전</NuxtLink
      >
      <NuxtLink
        to="/about/vision"
        class="en"
        :class="{ active: isActive('/about/vision') }"
        >VISION</NuxtLink
      >
      <NuxtLink
        to="/about/orghistory"
        class="ko change"
        :class="{ active: isActive('/about/orghistory') }"
        >연혁</NuxtLink
      >
      <NuxtLink
        to="/about/orghistory"
        class="en change"
        :class="{ active: isActive('/about/orghistory') }"
        >History</NuxtLink
      >
      <NuxtLink
        to="/about/patent"
        class="ko change"
        :class="{ active: isActive('/about/patent') }"
        >특허</NuxtLink
      >
      <NuxtLink
        to="/about/patent"
        class="en change"
        :class="{ active: isActive('/about/patent') }"
        >Patent</NuxtLink
      >
      <NuxtLink
        to="/about/award"
        class="ko change"
        :class="{ active: isActive('/about/award') }"
        >주요 수상</NuxtLink
      >
      <NuxtLink
        to="/about/award"
        class="en change"
        :class="{ active: isActive('/about/award') }"
      >
        Major Award
      </NuxtLink>
      <NuxtLink
        to="/about/certification"
        class="ko change"
        :class="{ active: isActive('/about/certification') }"
        >주요 인증</NuxtLink
      >
      <NuxtLink
        to="/about/certification"
        class="en change"
        :class="{ active: isActive('/about/certification') }"
      >
        Major Certification
      </NuxtLink>
      <NuxtLink
        to="/about/welfare"
        class="ko change"
        :class="{ active: isActive('/about/welfare') }"
        >복지제도</NuxtLink
      >
      <NuxtLink
        to="/about/welfare"
        class="en change"
        :class="{ active: isActive('/about/welfare') }"
      >
        Welfare System
      </NuxtLink>
      <NuxtLink
        to="/about/contact"
        class="ko lst change"
        :class="{ active: isActive('/about/contact') }"
      >
        오시는 길
      </NuxtLink>
      <NuxtLink
        to="/about/contact"
        class="en lst change"
        :class="{ active: isActive('/about/contact') }"
        >Contact</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate(to, from, next) {
    // 라우트가 업데이트될 때 currentContent를 업데이트합니다.
    this.updateCurrentContent()
    next()
  },
  mounted() {
    const current = document.querySelector('.current')
    const currentContent = current.querySelector('span')
    const showContent = document.querySelector('.droplist')
    const changeContents = document.querySelectorAll('.change')

    // 초기 경로에 따라 currentContent를 업데이트합니다.
    this.updateCurrentContent()

    current.addEventListener('click', () => {
      showContent.classList.toggle('active')
    })

    changeContents.forEach((changeContent) => {
      changeContent.addEventListener('click', () => {
        currentContent.innerText = changeContent.innerText
        showContent.classList.toggle('active')
      })
    })
  },
  methods: {
    isActive(path) {
      // 현재 경로가 주어진 경로로 시작하는지 확인
      return this.$route.path.startsWith(path)
    },
    updateCurrentContent() {
      // 현재 경로에 대한 NuxtLink 요소를 가져옵니다.
      const activeLink = document.querySelector('.change.active')

      // activeLink를 기반으로 currentContent를 업데이트합니다.
      if (activeLink) {
        const currentContent = document.querySelector('.current span')
        currentContent.innerText = activeLink.innerText
      }
    },
  },
}
</script>

<style scoped>
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
