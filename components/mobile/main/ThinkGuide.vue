<template>
  <section>
    <div class="ko">
      씽크풀은 <br />
      총 <em>97건</em>의 <em>등록특허</em>와 <br />
      <em>11건</em>의 <em>특허출원</em>을 <br />
      보유하고 있습니다.
    </div>

    <div class="en">
      ThinkPool has a total of <br>
      <em>97 issued patents</em><br>
      and<br />
      <em>11 pending patent applications.</em>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply w-full h-[190px] flex bg-white justify-center items-center float-left clear-left;
}
section div {
  @apply w-full text-center text-[20px] text-neutral-900 leading-[30px] tracking-[-0.22px];
}
section div em {
  @apply font-bold text-[#5368FF];
}
</style>
