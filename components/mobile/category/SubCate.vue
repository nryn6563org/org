<template>
  <div id="depth1" class="dropdown">
    <button class="ko" @click="toggleContent">
      <span>{{ currentContent }}</span>
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

    <button class="en" @click="toggleContent">
      <span>{{ currentContent }}</span>
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

    <div v-if="showContent" class="droplist">
      <NuxtLink to="/about/" class="ko" @click="changeContent('기업소개')"
        >기업소개</NuxtLink
      >
      <NuxtLink to="/about/" class="en" @click="changeContent('About Us')"
        >About Us</NuxtLink
      >
      <NuxtLink to="/" class="ko" @click="changeContent('사업영역')"
        >사업영역</NuxtLink
      >
      <NuxtLink to="/" class="en" @click="changeContent('Business')"
        >Business</NuxtLink
      >
      <NuxtLink to="/" class="ko" @click="changeContent('기업부설연구소')">
        기업부설연구소
      </NuxtLink>
      <NuxtLink
        to="/"
        class="en"
        @click="changeContent('Corporate Research Center')"
      >
        Corporate Research Center
      </NuxtLink>
      <NuxtLink to="/" class="ko" @click="changeContent('홍보센터')"
        >홍보센터</NuxtLink
      >
      <NuxtLink to="/" class="en" @click="changeContent('PR')">PR</NuxtLink>
      <NuxtLink to="/" class="ko" @click="changeContent('IR')">IR</NuxtLink>
      <NuxtLink to="/" class="en" @click="changeContent('IR')">IR</NuxtLink>
      <NuxtLink to="/" class="ko lst" @click="changeContent('채용정보')"
        >채용정보</NuxtLink
      >
      <NuxtLink to="/" class="en lst" @click="changeContent('Careers')"
        >Careers</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
      currentContent: '', // 초기 내용
    }
  },
  mounted() {
    // 페이지가 로드될 때 각 버튼의 클래스에 따라 초기 currentContent를 설정합니다.
    this.setCurrentContent()
  },
  methods: {
    toggleContent() {
      // droplist를 숨기거나 보이게 토글
      this.showContent = !this.showContent
    },
    changeContent(content) {
      // 버튼을 누를 때 내용을 변경하고 droplist를 숨김
      this.currentContent = content
      this.showContent = false
    },
    setCurrentContent() {
      // 페이지가 로드될 때 각 버튼의 클래스에 따라 초기 currentContent를 설정합니다.
      const lang = document.querySelector('.ko') ? 'ko' : 'en'
      this.currentContent = lang === 'ko' ? '기업소개' : 'About Us'
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
  @apply py-2.5 border-[#f0f0f0] border-[1px] absolute top-8 left-0 bg-white z-20 flex flex-col items-start w-full gap-2 bg-opacity-80;
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
