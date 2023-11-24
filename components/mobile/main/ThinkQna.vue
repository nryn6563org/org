<template>
  <section>
    <div class="w-full text-center">
      <em
        class="text-white text-[20px] leading-[30px] tracking-[-0.22px] block"
      >
        Talk to
      </em>
      <span
        class="text-white text-[32px] leading-[120%] tracking-[-0.352px] font-bold"
      >
        THINKPOOL
      </span>
    </div>

    <div class="w-full text-center ko"><!-- ko -->
      <span class="text-white text-[16px] leading-6 tracking-[-0.176px]">
        씽크풀에 오신 것을 환영합니다! <br />무엇을 도와드릴까요?
      </span>
    </div>
    
    <div class="w-full text-center en"><!-- en -->
      <span class="text-white text-[16px] leading-6 tracking-[-0.176px]">
        Welcome to Thinkpool! <br />How can we help you?
      </span>
    </div>
    <!--  -->

    <button
      class="mt-[14px] w-[207px] h-[43px] border-[1px] rounded-[50px] border-white text-[14px] font-bold tracking-[-0.154px] text-white hover:bg-white hover:text-[#5368ff] transition-all duration-500"
    >
      <span class="ko">문의하기</span>
      <span class="en">Contact us</span>
    </button>
  </section>
</template>

<style scoped>
section {
  @apply w-full h-fit flex flex-col bg-[#5368FF] justify-center items-center float-left clear-left py-10 gap-[14px];
}
</style>
