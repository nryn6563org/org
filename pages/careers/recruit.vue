<template>
  <div id="careers">
    <CommonTop :top-items="topItems" />

    <div class="txt">
      <span>
        AI, 빅데이터 시대를 함께 이끌어 갈<br />
        인재를 모집합니다.
      </span>
    </div>

    <div class="p-[35px_20px_0]">
      <strong>채용절차</strong>

      <p class="pt-5">
        <img class="ko" src="~/assets/image/recruit.png" alt="채용절차" />
        <img class="en" src="~/assets/image/recruit_en.png" alt="채용절차" />
      </p>
    </div>
    <!--  -->

    <div id="recruit" class="board">
      <div>
        <strong>상시채용</strong>
        <button class="list">
          <div class="obj">
            <span>상시채용 모집 중</span>
          </div>
          <div class="date">
            <span>2023-01-26~2023-06-30</span>
          </div>
        </button>
        <!-- // -->

        <button class="list">
          <div class="obj">
            <span>상시채용 모집 중</span>
          </div>
          <div class="date">
            <span>2023-01-26~2023-06-30</span>
          </div>
        </button>
      </div>
      <!-- // -->

      <div>
        <strong>공개채용</strong>
        <button class="list">
          <div class="obj">
            <span class="ko">00사업팀 서비스기획자 구인 공고</span>
          </div>
          <div class="date">
            <span>2023-01-26~2023-06-30</span>
          </div>
        </button>
        <!-- // -->

        <button class="list">
          <div class="obj">
            <span>00사업팀 서비스기획자 구인 공고</span>
          </div>
          <div class="date">
            <span>2023-01-26~2023-06-30</span>
          </div>
        </button>
      </div>
      <!-- // -->
    </div>

    <div class="view">
      <div class="title">
        <div class="obj">
          <span>제29기 정기주주총회 소집공고</span>
        </div>
        <!-- // -->

        <div class="date">2023-03-10</div>
        <!-- // -->
      </div>
      <!-- // -->
      <div class="viewContent">
        <span>
          지원자격 <br />
          경력 : 신입/경력 (년수무관)(연구원, 주임연구원,팀원급) <br />
          사용언어 : python, C, C++, C# RDBMS : Mysql, Oracle <br />
          <br />
          우대사항<br />
          컴퓨터/ 시스템공학, 수학/통계학<br />
          금융데이터 분석 경험 / 증권사 API사용 경험 <br />
          <br />
          근무조건 <br />
          근무형태 : 정규직 (수습기간) 3개월 <br />
          근무일시 : 주 5일 (월~금) 오전8시 30분 ~오후 5시 30분 <br />
          근무지역 : 서울 영등포구 여의도동 미원빌딩 15층 <br />
          <br />
          접수기간 및 방법<br />
          2023년 1월 26일 ~2023년 4월 30일 <br />
          접수방법 : 이메일 접수 recruit@thinkpool.com <br />
          제출서류 <br />
          이력서, 경력기술서 <br />
          <br />
          문의사항 <br />
          02-2174-0000 (금융공학팀) <br />
        </span>
      </div>
      <!-- // -->
      <div class="pnList">
        <dl>
          <dt>
            <span class="ko">이전글</span>
            <span class="en">PREV</span>
          </dt>
          <dd>
            <span>소규모합병 공고</span>
          </dd>
          <!-- // -->

          <dt>
            <span class="ko">다음글</span>
            <span class="en">NEXT</span>
          </dt>
          <dd>
            <span class="ko">제29기 정기주주총회 소집공고</span>
          </dd>
          <!-- // -->
        </dl>
      </div>
      <div class="more">
        <button>목록</button>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTop from '@/components/CommonTop.vue'

export default {
  components: {
    CommonTop,
  },
  data() {
    return {
      topItems: {
        sm: 'Recruit',
        ko: '채용공고',
        en: 'Recruit',
      },
    }
  },
}
</script>

<style scoped>
#careers > .top {
  @apply pb-0;
}
#careers > .txt {
  @apply mt-2.5 w-full text-[14px] tracking-[-0.154px] text-center leading-[18px];
}
#recruit.board {
  @apply w-[calc(100%-40px)] border-t-[1px] border-[#444] mx-auto mt-9 pb-[120px];
}
#recruit.board > div {
  @apply w-full pt-6 pb-10;
}

#recruit.board div strong {
  @apply w-full  pb-4 block;
}
#recruit.board div button {
  @apply rounded-[12px] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] w-full py-6 px-5 mt-2.5 text-left block;
}
#recruit.board div button .obj {
  @apply text-[16px] text-[#141414] leading-6 tracking-[-0.176px];
}
#recruit.board div button .date {
  @apply pt-1 text-[12px] text-[#9395a1] tracking-[-0.132px] leading-4;
}

.board .more {
  @apply w-full mt-[30px] flex justify-center;
}
.board .more button {
  @apply w-[175px] h-10 rounded-[5px] bg-[#f4f5f6] justify-center items-center text-[#141414] text-[14px] tracking-[-0.154px];
}

.view {
  @apply w-[calc(100%-40px)] block border-t-[1px] border-[#444] mx-5 pb-[120px];
}
.view .title {
  @apply border-b-[1px] border-[#e6e6e6] py-5 flex flex-col gap-2;
}
.view .title .obj {
  @apply text-[#141414] text-[20px] font-bold tracking-[-0.22px];
}
.view .viewContent {
  @apply py-10 text-[16px] text-[#444] tracking-[-0.176px] leading-6;
}

.pnList {
  @apply w-full;
}
.pnList dl {
  @apply border-t-[1px] border-[#E6E6EB] w-full overflow-hidden;
}
.pnList dl dt {
  @apply float-left clear-left w-[65px] pl-1 py-[14px] border-b-[1px] border-[#E6E6EB] text-[16px] text-[#141414] font-bold tracking-[-0.176px];
}
.pnList dl dd {
  @apply float-left w-[calc(100%-65px)] py-[14px] border-b-[1px] border-[#E6E6EB] text-[16px] text-[#444] tracking-[-0.176px];
}
.view .more {
  @apply w-full pt-[30px] flex justify-center;
}
.view .more button {
  @apply w-[175px] h-10 rounded-[5px] bg-[#f4f5f6] justify-center items-center text-[#141414] text-[14px] tracking-[-0.154px];
}
</style>
