<template>
  <div v-if="isVisible" class="mkModal">
    
    <img
      src="~/assets/image/modal/nv_cloud.png"
      alt="씽크풀X네이버클라우드"
      usemap="#mkUrl"
      width="100%"
    />
    <map name="mkUrl">
      <area
        shape="rect"
        coords="211,432,490,514"
        href="https://www.mk.co.kr/news/it/11406060"
        alt="자세히보기"
        target="_blank"
      />
    </map>

    <div class="todayClose">
      <button @click="closeModalToday">오늘하루 그만보기</button>
      <button @click="closeModal">&times; 닫기</button>
    </div>
  </div>
</template>
<script>
import imageMapResizer from 'image-map-resizer'

export default {
  data() {
    return {
      isVisible: true,
    }
  },
  mounted() {
    // 1. 모달이 DOM에 마운트된 후, imageMapResizer() 함수를 직접 호출합니다.
    imageMapResizer()

    // 2. 이후에 기존에 작성했던 로컬 스토리지 관련 로직을 실행합니다.
    const hideUntil = localStorage.getItem('hide-modal-until')

    if (hideUntil && new Date().getTime() < Number(hideUntil)) {
      this.isVisible = true
    }
  },
  methods: {
    closeModal() {
      this.isVisible = false
    },
    closeModalToday() {
      const oneDay = 24 * 60 * 60 * 1000
      const hideUntil = new Date().getTime() + oneDay
      localStorage.setItem('hide-modal-until', hideUntil)
      this.isVisible = false
    },
  },
}
</script>
<style scoped>
.mkModal {
  @apply fixed inset-0 h-full w-full max-w-[36rem] z-[100] bg-black bg-opacity-70 flex flex-col items-center justify-center px-5 gap-1;
}
.todayClose {
  @apply w-full flex justify-between gap-5;
}
.todayClose button {
  @apply text-white text-[16px] h-[32px] flex items-center opacity-80;
  ;
}
</style>
