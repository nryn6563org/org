<template>
  <header>
    <MobileHeaderThinkLogo />
    <!-- logo -->

    <div class="ch-lang">
      <button :class="{ active: isKorActive }" @click="toggleKor">KR</button>
      <button :class="{ active: isEngActive }" @click="toggleEng">EN</button>
    </div>
    <!-- // languege choice -->
     
    <MobileHeaderSideMenuMobile />
    <!-- side menu button -->
  </header>
</template>

<script>
export default{  
  data() {
    return {
      isKorActive: true,
      isEngActive: false,
    }
  },
  methods: {
    toggleKor() {
      this.isKorActive = !this.isKorActive
      if (this.isKorActive) {
        this.isEngActive = false
        document.body.classList.remove('eng')
        document.body.classList.add('kor')
      } else {
        document.body.classList.remove('kor')
      }
    },
    toggleEng() {
      this.isEngActive = !this.isEngActive
      if (this.isEngActive) {
        this.isKorActive = false
        document.body.classList.remove('kor')
        document.body.classList.add('eng')
      } else {
        document.body.classList.remove('eng')
      }
    },
  },
}
</script>

<style scoped>
header {
  @apply w-full h-[50px] px-5 flex justify-between items-center fixed inset-0 
  z-50 bg-white max-w-xl mx-auto;
}
</style>
