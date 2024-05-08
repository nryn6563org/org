<template>
  <div class="share-list">
    <p>(주)씽크풀의 다양한 소식을 만나보세요</p>
    <div class="shareBtnList">
      <button><img src="~/assets/image/share/sh_01.png" alt="유투브" width="40"></button>
      <button><img src="~/assets/image/share/sh_02.png" alt="네이버블로그" width="40"></button>
      <button><img src="~/assets/image/share/sh_03.png" alt="텔레그램" width="40"></button>
      <button><img src="~/assets/image/share/sh_04.png" alt="카카오톡" width="40"></button>
    </div>
  </div>
</template>
<style scoped>
.share-list{
  @apply mt-[25px]
}
.share-list p{
  @apply w-full text-[13px] text-[#a2a5bc] tracking-[-0.143px]
}
.shareBtnList{
  @apply flex w-full mt-2.5 gap-4 items-center
}
</style>
