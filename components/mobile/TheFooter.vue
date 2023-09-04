<template>
  <footer>
    <div class="flogo">
      <img src="~/assets/image/flogo.png" alt="" width="100%" />
    </div>
    <!-- //flogo -->
    <address>
      주식회사 씽크풀 대표이사 : 김동진 <br />
      서울특별시 영등포구 국제금융로 70, 15층 <br />
      (여의도동, 미원빌딩) <br />
      대표번호 : <a href="tel:1666-6300">1666-6300</a>
      <a href="mailto:help@thinkpool.com">help@thinkpool.com</a> <br />
      사업자등록번호 : 116-81-54775 <br />
      Copyright ©2023 ThinkPool Co.,Ltd. <br />
      All Rights Reserved
    </address>

    <MobileFooterFamilySiteSelect />
  </footer>
</template>

<style scoped>
footer {
  @apply relative pt-[37px] pb-[104px] px-5 bg-gray-800 clear-left;
}
.flogo {
  @apply w-[110px] block;
}
address {
  @apply w-full text-[13px] leading-5 tracking-[-0.143px] text-gray-400 not-italic mt-5;
}
</style>
