<template>
  <div id="aboutus">
    <div class="title">
      <span>CEO Message</span>
      <strong class="ko">CEO메시지</strong>
      <strong class="en">CEO Message</strong>
    </div>
    <!-- //title -->

    <div class="visual">
      <img src="~/assets/image/about/vi02.png" alt="ceo" />
    </div>
    <!-- //visual -->

    <div class="text">
      <div class="tit">
        <span class="ko after:left-[160px]">
          안녕하세요, <br />
          씽크풀 대표이사 <br />
          김동진입니다.
        </span>
        <span class="en after:left-[220px]">
          Hello, I'm Dongjin Kim, CEO of Thinkpool.
        </span>
      </div>
      <!-- //tit -->

      <div class="txt">
        <span class="ko">
          투자금융과 마이데이터 분야에서 씽크풀만의 독자적인 기술을 더욱
          발전시켜 글로벌 경쟁력을 갖춘 기업으로 성장해 나가겠습니다.
        </span>
        <span class="en">
          We will grow into a globally competitive company by further developing
          Thinkpool's unique technology in the fields of investment finance and
          big data.
        </span>
      </div>
      <!-- //txt -->
    </div>
    <!-- //text -->

    <div class="content">
      <div class="ceo_con ko">
        <div>
          <strong>주요경력</strong>
          <span>한국은행, 은행감독원</span>
        </div>
        <!-- // -->
        <div>
          <strong>방송활동</strong>
          <span>
            &lt;손에 잡히는 경제&gt; 등 고정 게스트 <br />
            (1995~1999 MBC, KBS, SBS, CBS 등)
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>주요수상</strong>
          <span
            class="before:content-['-'] before:absolute relative pl-2.5 before:top-0 before:left-0"
            >2022년 국무총리 표창장 <br />
            (벤처창업진흥 유공포상)</span
          >
          <span
            class="before:content-['-'] before:absolute relative pl-2.5 before:top-0 before:left-0"
            >2016년 특허경영대상 특허청장 표창장<br />
            (특허경영 금상)</span
          >
          <span
            class="before:content-['-'] before:absolute relative pl-2.5 before:top-0 before:left-0"
            >2013년 산업통상자원부장관 표창장<br />
            (벤처활성화 유공포상)</span
          >
          <span
            class="before:content-['-'] before:absolute relative pl-2.5 before:top-0 before:left-0"
          >
            2013년 미래창조과학부장관 표창장<br />
            (인터넷 대상 - 기술선도부문)
          </span>
        </div>
        <!-- // -->
      </div>
      <!-- korea -->
      <div class="ceo_con en">
        <div>
          <strong>Career Highlights</strong>
          <span>Bank of Korea, Banking Supervision</span>
        </div>
        <!-- // -->
        <div>
          <strong>Broadcast Activity </strong>
          <span>
            Permanent guests such as 'economy in your hands' <br />
            (1995~1999 MBC, KBS, SBS, CBS, etc.)
          </span>
        </div>
        <!-- // -->
        <div>
          <strong>Major Awards </strong>
          <span class="before:content-['●'] relative before:absolute before:inset-0 pl-4 before:text-[11px]">
            Prime Minister's Citation 2022 (Meritorious Achievement Award for
            Venture Startup Promotion)
          </span>
          <span class="before:content-['●'] relative before:absolute before:inset-0 pl-4 before:text-[11px]">
            Patent Commissioner's Citation for the 2016 Patent Management Award
            (Gold Medal for Patent Management)
          </span>
          <span class="before:content-['●'] relative before:absolute before:inset-0 pl-4 before:text-[11px]">
            2013 Minister of Trade, Industry and Energy Citation (Meritorious
            Award for Venture Activation)
          </span>
          <span class="before:content-['●'] relative before:absolute before:inset-0 pl-4 before:text-[11px]">
            2013 Minister of Science, ICT and Future Planning Award (Internet
            Award - Technology Leading)
          </span>
        </div>
        <!-- // -->
      </div>
      <!-- english -->
    </div>
    <!-- //content -->
  </div>
</template>

<style scoped>
.ceo_con {
  @apply w-full p-[20px_20px_60px] bg-[#FAFAFC];
}
.ceo_con > div {
  @apply w-full py-5 border-b-[1px] border-[#E6E6EB] flex flex-col gap-4 last:border-none;
}
.ceo_con > div strong {
  @apply text-[16px] text-[#141414] font-bold leading-6 tracking-[-0.176px];
}
.ceo_con > div span {
  @apply text-[#444] text-[14px] leading-5 tracking-[-0.154px];
}
</style>
