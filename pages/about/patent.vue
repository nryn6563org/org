<template>
  <div id="aboutus">
    <div class="title">
      <span>Patent</span>
      <strong class="ko">특허</strong>
      <strong class="en">Patent</strong>
    </div>
    <!-- //title -->

    <div class="text-center txt">
      <span class="ko">
        씽크풀은 총 <em>97</em>건의 등록특허와 <br />
        <em>11</em>건의 특허출원을 보유하고 <br />
        있습니다.
      </span>
      <span class="en">
        ThinkPool has a total of <em>97</em><br />
        registered patents and <em>11</em><br />
        patent applications.
      </span>
    </div>
    <!-- //txt -->

    <div class="content">
      <div class="patent_con">
        <div>
          <strong class="ko">RASSI</strong>
          <strong class="en">RASSI</strong>
          <span class="guide ko"
            >인공지능 기반의 종목연관 키워드 결정방법 및 그 <br />시스템</span
          >
          <span class="guide ko">주문전략 제공방법 및 그 시스템</span>
          <span class="guide ko">지능형 이벤트 정보 제공방법 및 그 시스템</span>
          <span class="guide ko"
            >혼합 포트폴리오 관리 시스템 및 그 제공방법</span
          >
          <span class="guide ko"
            >투자 어드바이스 제공 방법 및 투자 어드바이스 제공 <br />서버</span
          >
          <span class="guide en"
            >Method for determining keywords related to stocks based on
            artificial intelligence and its system</span
          >
          <span class="guide en"
            >Order strategy delivery methods and systems</span
          >
          <span class="guide en"
            >Methods and systems for providing intelligent event information
          </span>
          <span class="guide en"
            >Blended portfolio management systems and how they are delivered
          </span>
          <span class="guide en"
            >How investment advice is delivered and where it is delivered
          </span>
        </div>
        <!-- // -->
        <div>
          <strong class="ko">로그인도용방지</strong>
          <strong class="en">Login Abuse Prevention System </strong>
          <span class="guide ko">지능형 로그인 인증 시스템 및 그 방법</span>
          <span class="guide ko">스마트폰 도용방지 서비스 방법 및 시스템</span>
          <span class="guide ko">위치기반의 서비스 보안 시스템 및 그 방법</span>
          <span class="guide en"
            >Intelligent login authentication systems and how they work
          </span>
          <span class="guide en"
            >Smartphone anti-theft service methods and systems
          </span>
          <span class="guide en"
            >Services security systems for location devices and how they work
          </span>
        </div>
        <!-- // -->
        <div>
          <strong class="ko">RMS</strong>
          <strong class="en">RMS</strong>
          <span class="guide ko"
            >온라인 주식 거래 및 대출을 위한 실시간 리스크 관리/ 통제 시스템 및
            그 방법</span
          >
          <span class="guide ko"
            >반대매매 관리시스템, 계좌운영 시스템 및 그 방법</span
          >
          <span class="guide en"
            >Real-time risk management/control system for online stock trading
            and lending, and method thereof
          </span>
          <span class="guide en"
            >Countertrade management system, account management system, and
            method thereof
          </span>
        </div>
        <!-- // -->
        <div>
          <strong class="ko">특허경영대상 수상</strong>
          <strong class="en">Patent Management Award Winner</strong>
          <span class="">
            <img src="~/assets/image/patent.png" alt="특허경영대상" />
          </span>
        </div>
        <!-- // -->
      </div>
      <!-- // -->

      <div class="h-[120px]"></div>
    </div>
  </div>
</template>

<style scoped>
#aboutus .txt {
  @apply mt-[30px] text-[20px] text-[#141414] leading-6 tracking-[-0.22px] font-normal;
}
#aboutus .txt em {
  @apply text-[#5368ff] font-bold;
}

.patent_con {
  @apply w-full px-5 pt-[70px] flex flex-col gap-[50px];
}
.patent_con > div {
  @apply flex flex-col w-full;
}
.patent_con > div strong {
  @apply text-[16px] text-[#141414] font-bold pb-2.5 leading-5;
}
.patent_con > div span.guide {
  @apply pl-4 text-[#444] tracking-[-0.154px] text-[14px] before:content-['ㆍ'] before:absolute relative before:left-0;
}
</style>
