<template>
  <div id="depth1" class="dropdown">
    <button class="ko" @click="toggleContent">
      <span>기업소개</span>
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
    <button class="en" @click="toggleContent">
      <span>기업소개</span>
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
        <button class="ko">기업소개</button>
        <button class="en">About Us</button>
        <button class="ko">사업영역</button>
        <button class="en">Business</button>
        <button class="ko">기업부설연구소</button>
        <button class="en">Corporate Research Center</button>
        <button class="ko">홍보센터</button>
        <button class="en">PR</button>
        <button class="ko">IR</button>
        <button class="en">IR</button>
        <button class="ko">채용정보</button>
        <button class="en">Careers</button>
    </div>
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