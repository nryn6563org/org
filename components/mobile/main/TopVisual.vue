<template>
  <section>
    <div class="txt ko">
      <strong>
        투자금융 AI기업 <br />
        씽크풀
      </strong>
      <span>
        씽크풀은 데이터와 AI시대, <br />
        초지능형 과학적 의사결정을 지원하는 <br />
        지식기업입니다.
      </span>
    </div>

    <div class="txt en">
      <strong>
        AI company <br />
        Thinkpool
      </strong>
      <span>
        Thinkpool is a knowledge company, <br />
        that supports data and super-intelligent <br>
        scientific decision making <br />
        in the AI era.
      </span>
    </div>
    <!-- text -->
    <div class="scroll_text">
      <svg
        class="animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.52002"
          width="12"
          height="20"
          rx="6"
          stroke="white"
        />
        <rect x="6" y="4.02002" width="1" height="4" rx="0.5" fill="white" />
      </svg>
      <span>Scroll Down</span>
    </div>
    <!-- scroll image -->
    <div class="topVisualBackground">
      <img src="~/assets/image/mainVisual.png" alt="상단이미지" width="100%" />
    </div>
    <!-- visual image -->
  </section>
</template>

<style scoped>
section {
  @apply w-full h-fit overflow-hidden relative flex justify-center items-center float-left;
}
.topVisualBackground {
  @apply w-full block;
}
.txt {
  @apply flex flex-col gap-[26px] items-center justify-center z-30 absolute inset-0 w-full h-full;
}
.txt strong {
  @apply block text-center text-[32px] text-white font-bold leading-[48px];
}
.txt span {
  @apply block text-center text-[16px] leading-6 font-light text-white;
}
.scroll_text {
  @apply absolute bottom-[22px] w-full left-0 flex flex-col justify-center items-center gap-1  z-30;
}
.scroll_text span {
  @apply text-white block leading-[18px] text-[12px] font-light;
}
</style>
