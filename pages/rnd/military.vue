<template>
  <div id="mil">
    <div class="top">
      <em class="ko">병역특례</em>
      <em class="en">National R&D</em>
      <span class="ko">
        기업부설연구소 <br>전문연구요원
      </span>
      <span class="en">
        Corporate research institute researchers
      </span>
    </div>
    <div class="visual">
      <p>
        <img src="~/assets/image/rnd/mil.png" alt="병역특례">
      </p>
      <strong class="ko">
        금융권서비스 분야 유일 <br>
        <em>병역특례 AI기술연구소</em> <br>
        보유 지식기업
      </strong>
      <strong class="en">
        The only knowledge company in the financial services sector with a special military service AI technology
        research center
      </strong>
    </div>

    <div class="cont">
      <div class="recu">
        <div class="txt">
          <strong class="ko">전문연구요원제도란?</strong>
          <strong class="en">What is the Specialized Research Service?</strong>
          <span class="ko">
            군복무 대체프로그램인 전문연구요원 제도는 자연계 석박사 졸업생들이 군복무기간을 대체하여 연구기관에서 연구개발 활동을 수행하는 제도입니다.
          </span>
          <span class="en">
            As an alternative to military service, the Professional Research Staff Program is a program for natural science graduates
            to perform research and development activities at research institutions as an alternative to military service.
          </span>
        </div>

        <button>
          <span class="ko">전문연구요원 채용공고 보러가기</span>
          <span class="en">View open positions</span>
        </button>
      </div>
      <strong class="ko">병역특례지정업체정보</strong>
      <strong class="en">Military Service Designee Information</strong>
      <dl>
        <dt>
          <span class="ko">업체명</span>
          <span class="en">Company name </span>
        </dt>
        <dd>
          <span class="ko">(주) 씽크풀 기업부설연구소</span>
          <span class="en">Thinkpool Corporate <br>Research Center</span>
        </dd>

        <dt>
          <span class="ko">주소</span>
          <span class="en">Address</span>
        </dt>
        <dd>
          <span class="ko">서울특별시 영등포구 국제금융로 70, <br>15층 1501호 (여의도동, 미원빌딩)</span>
          <span class="en">70, Gukje Financial Road, Yeongdeungpo-gu, Seoul, Korea, 15F, Room 1501 (Yeouido-dong, Mi-won Building)</span>
        </dd>

        <dt>
          <span class="ko">전화번호</span>
          <span class="en">Tel</span>
        </dt>
        <dd>02-2174-6401</dd>

        <dt>
          <span class="ko">팩스번호</span>
          <span class="en">Fax</span>
        </dt>
        <dd>02-2174-6306</dd>

        <dt>
          <span class="ko">업종</span>
          <span class="en">Industry</span>
        </dt>
        <dd>
          <span class="ko">벤처기업부설연구소</span>
          <span class="en">Venture Business Institute</span>
        </dd>

        <dt>
          <span class="ko">기업규모</span>
          <span class="en">Enterprise size</span>
        </dt>
        <dd>
          <span class="ko">중소기업</span>
          <span class="en">Small and medium-sized businesses</span>
        </dd>

        <dt>
          <span class="ko">연구분야</span>
          <span class="en">Research Areas</span>
        </dt>
        <dd>
          <span class="ko">지식서비스</span>
          <span class="en">Knowledge Services</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.top {
  @apply w-full py-[50px] flex flex-col items-center gap-2 px-5;
}

.top em {
  @apply text-[12px] text-[#9395a1] tracking-[-0.132px] leading-4;
}

.top span {
  @apply text-[32px] text-[#141414] tracking-[-0.352px] font-bold leading-10 text-center;
}

.visual {
  @apply relative w-full h-[341px] flex items-center flex-col justify-center gap-5;
}

.visual p {
  @apply absolute inset-0 z-10;
}

.visual span {
  @apply z-20 text-[16px] leading-5 text-white text-center;
}

.visual strong {
  @apply z-20 text-[32px] leading-10 font-bold text-white tracking-[-0.96px] text-center;
}

.visual strong em {
  @apply text-[#FF4471]
}

.cont {
  @apply w-full p-[40px_20px_0];
}

.cont .recu {
  @apply flex w-full flex-col gap-[35px] pb-10;
}

.cont .recu .txt {
  @apply flex w-full flex-col;
}

.cont .recu .txt strong {
  @apply text-[14px] text-[#141414] font-bold tracking-[-0.154px] leading-[22px];
}

.cont .recu .txt span {
  @apply text-[14px] text-[#444] tracking-[-0.154px] leading-[22px];
}

.cont .recu button {
  @apply w-full h-[45px] rounded-[6px] bg-[#5368ff] flex justify-center items-center
  text-[14px] text-white tracking-[-0.154px]
}

.cont > strong {
  @apply block w-full text-[20px] leading-6 font-bold tracking-[-0.22px] text-[#141414];
}

.cont dl {
  @apply flex flex-col mt-10 w-full gap-1 pb-[70px];
}

.cont dl dt {
  @apply text-[#141414] font-bold leading-[22px] text-[14px] tracking-[-0.154px];
}

.cont dl dd {
  @apply text-[#444] leading-[22px] text-[14px] tracking-[-0.154px];
}
</style>
