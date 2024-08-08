<template>
  <section>
    <div class="ko">
      <span>
        씽크풀은 <em>99</em>건의 등록특허와<br>
        <em>6</em>건의 상표권을 보유하고 있으며 <br>
        <em>20</em>건의 특허 출원을 <br>
        진행 중인 지식기업입니다.
      </span>
      
      <span>2024.05.31 현재</span>
    </div>

    <div class="en">
      ThinkPool has a total of <br />
      <em>97 issued patents</em><br />
      and<br />
      <em>11 pending patent applications.</em>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply w-full h-[250px] flex bg-white justify-center items-center float-left clear-left;
}
section div {
  @apply w-full tracking-[-0.22px] flex flex-col gap-8 items-center;
}
section div span{
  @apply text-[#141414] text-[20px] leading-[30px] text-center
}
section div span em {
  @apply font-bold text-[#5368FF];
}
section div span:last-child{
  @apply text-[14px] leading-5 text-black
}
</style>
