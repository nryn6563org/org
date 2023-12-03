<template>
  <div id="aboutus">
    <div class="title">
      <span>Major Certification</span>
      <strong class="ko">주요인증</strong>
      <strong class="en">Major Certification</strong>
    </div>
    <!-- //title -->

    <div class="content">
      <div class="award_list">
        <div>
          <strong>2015.07</strong>
          <img src="~/assets/image/certification/list01.png" alt="" />
          <span class="ko">기술혁신형 중소기업<br />(INNO-BIZ) 인증</span>
          <span class="en">
            Technologically Innovative <br />
            Small Business <br />
            (INNO-BIZ) Certification
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2015.07</strong>
          <img src="~/assets/image/certification/list02.png" alt="" />
          <span class="ko">ETRI 1실1기업 맞춤형 <br />기술지원 기업 선정</span>
          <span class="en">
            ETRI One-on-One Personalized <br />
            Technical Support <br />
            Enterprise Line
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2012.10</strong>
          <img src="~/assets/image/certification/list03.png" alt="" />
          <span class="ko">연구개발기업으로<br />벤처기업 등록</span>
          <span class="en">
            Registered venture as <br />
            an R&D company
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2012.04</strong>
          <img src="~/assets/image/certification/list04.png" alt="" />
          <span class="ko">기업부설연구소<br />인정</span>
          <span class="en">
            Recognition of <br />
            Corporate Research Centers
          </span>
        </div>
        <!-- // -->
      </div>
      <!-- // -->

      <div class="text_list">
        <div>
          <strong>2015.07</strong>
          <span class="ko">기술혁신형 중소기업 (INNO-BIZ) 인증</span>
          <span class="en">
            Technologically Innovative Small Business <br />
            (INNO-BIZ) Certification
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2015.07</strong>
          <span class="ko">ETRI 1실1기업 맞춤형 기술지원 기업 선정</span>
          <span class="en">
            ETRI One-on-One Personalized <br />
            Technical Support Enterprise Line
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2012.10</strong>
          <span class="ko">연구개발기업으로 벤처기업 등록</span>
          <span class="en">Registered venture as an R&D company </span>
        </div>
        <!-- // -->
        <div>
          <strong>2012.04</strong>
          <span class="ko">기업부설연구소 인정</span>
          <span class="en">Recognition of Corporate Research Centers </span>
        </div>
        <!-- // -->

        <button>더보기</button>
      </div>
    </div>
    <!-- //content -->
  </div>
</template>

<style scoped>
.content {
  @apply mt-[60px] px-5;
}
.award_list {
  @apply w-full flex justify-between gap-2.5 flex-wrap;
}
.award_list > div {
  @apply w-[calc((100%-10px)/2)] flex flex-col py-5 justify-start items-center bg-[#fafafc] rounded-[12px];
}
.award_list > div strong {
  @apply text-[16px] text-[#141414] leading-[18px] font-bold  pb-[28px];
}
.award_list > div img {
  @apply w-[90px];
}
.award_list > div span {
  @apply pt-4 text-[12px] text-[#444] tracking-[-0.132px] text-center;
}

.text_list {
  @apply mt-[30px] w-full flex flex-col gap-5 pb-[120px];
}
.text_list > div {
  @apply w-full flex flex-col;
}
.text_list > div strong {
  @apply text-[#141414] text-[14px] font-bold leading-[22px] tracking-[-0.154px];
}
.text_list > div span {
  @apply text-[14px] text-[#444] leading-[22px] tracking-[-0.154px];
}
.text_list > button {
  @apply w-[175px] h-10 flex justify-center items-center rounded-[5px] text-[14px] text-[#141414] tracking-[-0.154px] mx-auto bg-[#f4f5f6] mt-2.5;
}
</style>
