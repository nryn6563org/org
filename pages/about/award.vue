n<template>
  <div id="aboutus">
    <div class="title">
      <span>Award</span>
      <strong class="ko">주요수상</strong>
      <strong class="en">Award</strong>
    </div>
    <!-- //title -->

    <div class="content">
      <div class="award_list">
        <div>
          <strong>2022.12</strong>
          <img src="~/assets/image/award/list01.png" alt="" />
          <span class="ko">벤처창업진흥 유공포상<br />국무총리상 수상 </span>
          <span class="en">
            Received the Prime <br />Minister's Award for <br />
            Meritorious Contribution <br />
            to Venture Startup Promotion
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2016.12</strong>
          <img src="~/assets/image/award/list02.png" alt="" />
          <span class="ko"> 2016 전자 ICT <br />특허경영대상 금상 수상 </span>
          <span class="en">
            Won the Gold Medal at <br />
            the 2016 Electronic <br />
            ICT Patent <br />
            Management Awards
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2013.12</strong>
          <img src="~/assets/image/award/list03.png" alt="" />
          <span class="ko">미래창조과학부 <br />장관상 수상 </span>
          <span class="en">
            Minister of Science, <br />
            ICT and Future Planning <br />
            Award for Internet <br />
            Technology Leadership
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2012.12</strong>
          <img src="~/assets/image/award/list04.png" alt="" />
          <span class="ko">중소벤처유망LBS공모전<br />최우수상 수상 </span>
          <span class="en">
            Won the Grand Prize at <br />
            the MSIT's Promising <br />
            LBS Competition
          </span>
        </div>
        <!-- // -->
      </div>
      <!-- // -->

      <div class="text_list">
        <div>
          <strong>2022.12</strong>
          <span class="ko">벤처창업진흥 유공포상 국무총리상 수상</span>
          <span class="en">
            Received the Prime Minister's Award for Meritorious <br />
            Contribution to Venture Startup Promotion
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2016.12</strong>
          <span class="ko">2016 전자 ICT 특허경영대상 금상 수상</span>
          <span class="en">
            Won the Gold Medal at the 2016 Electronic <br />
            ICT Patent Management Awards
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2013.12</strong>
          <span class="ko">인터넷기술선도부문 미래창조과학부장관상 수상</span>
          <span class="en">
            Minister of Science, ICT and Future Planning <br />
            Award for Internet Technology Leadership
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>2012.12</strong>
          <span class="ko">방통위 중소벤처유망LBS공모전 최우수상 수상</span>
          <span class="en">
            Won the Grand Prize at the MSIT's <br />
            Promising LBS Competition
          </span>
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
