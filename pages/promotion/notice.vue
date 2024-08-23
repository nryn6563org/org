<template>
  <div id="promotion">
    <CommonTop :top-items="topItems" />

    <div id="notice" class="board">
      <div class="list fst">
        <button>
          <div class="obj">
            <span >제29기 정기주주총회 소집공고</span>
          </div>
          <!-- //obj -->
          <div class="cont">
            <span >
              제 29기 정기주주총회 소집 공고 주주님의 건승과 댁내의 평안을
              기원합니다. 당사는 상법 제 363조와 정관 제 23조에 의거 제 29기
              정기주주총회를 아래와 같이 소집하오니 참석하여 주시기 바랍니다.
              또한 제 29기 정기주주총회 소집 공고 주주님의 건승과 댁내의 평안을
              정기주주총회를 아래와 같이 소집하오니 참석하여 주시기 바랍니다.
            </span>
          </div>
          <!-- //cont -->
          <div class="date">2023-03-10</div>
          <!-- //date -->
        </button>
      </div>
      <!-- // -->

      <div class="list">
        <button>
          <div class="obj">
            <span > 제29기 정기주주총회 소집공고 </span>
          </div>
          <!-- //obj -->
          <div class="date">2023-03-10</div>
          <!-- //date -->
        </button>
      </div>
      <!-- // -->

      <div class="list">
        <button>
          <div class="obj">
            <span > 제29기 정기주주총회 소집공고 </span>
          </div>
          <!-- //obj -->
          <div class="date">2023-03-10</div>
          <!-- //date -->
        </button>
      </div>
      <!-- // -->

      <div class="list">
        <button>
          <div class="obj">
            <span > 제29기 정기주주총회 소집공고 </span>
          </div>
          <!-- //obj -->
          <div class="date">2023-03-10</div>
          <!-- //date -->
        </button>
      </div>
      <!-- // -->

      <div class="list">
        <button>
          <div class="obj">
            <span > 제29기 정기주주총회 소집공고 </span>
          </div>
          <!-- //obj -->
          <div class="date">2023-03-10</div>
          <!-- //date -->
        </button>
      </div>
      <!-- // -->

      <div class="more">
        <button>더보기</button>
      </div>
    </div>
    <!-- // -->

    <div class="view">
      <div class="title">
        <div class="obj">
          <span >제29기 정기주주총회 소집공고</span>
        </div>
        <!-- // -->

        <div class="date">2023-03-10</div>
        <!-- // -->
      </div>
      <!-- // -->
      <div class="viewContent">
        <span >
          2022년 10월 26일 주식회사 씽크풀(갑)과 주식 <br />
          회사 지웨어(을)는 각각 이사회에서 (갑)은 <br />
          (을)을 흡수합병하여 그 권리 의무를 승계하고 (을)은 <br />
          해산하기로 결의하였으므로 이 합병 <br />
          결의에 이의가 있는 채권자께서는 아래 기간 내에 <br />
          이의를 제출하기 바랍니다. <br />
          - 아 래 – <br />
          1. 이의제출 대상 채권자 : 공고일 현재 당사의 채권을 보유하신 분 <br />
          2. 이의제출 기간 : 2022년 10월 28일 ~ 2022년 11월 28일 <br />
          3. 이의제출 장소 : 서울특별시 영등포구 국제금융로 70, 15층 <br />
          2022년 10월 27일 <br />
          주식회사 씽 크 풀 <br />
          서울특별시 영등포구 국제금융로 70, 15층 <br />
          대표이사 김 동 진
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
            <span >소규모합병 공고</span>
          </dd>
          <!-- // -->

          <dt>
            <span class="ko">다음글</span>
            <span class="en">NEXT</span>
          </dt>
          <dd>
            <span>제29기 정기주주총회 소집공고</span>
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
        sm: 'Notice',
        ko: '공지사항',
        en: 'Notice',
      },
    }
  },
}
</script>

<style scoped>
#promotion > .top {
  @apply pb-[50px];
}

#notice.board {
  @apply w-[calc(100%-40px)] border-t-[1px] border-[#444] mx-auto pb-[120px];
}
#notice.board .list {
  @apply py-5 px-1 border-b-[1px] border-[#E6E6EB] text-left;
}
#notice.board .list button {
  @apply flex flex-col items-start gap-2.5 w-full h-fit;
}
#notice.board .list .obj {
  @apply text-[16px] text-[#141414] tracking-[-0.176px] truncate h-5 leading-5 p-0 m-0 text-left;
}
#notice.board .list.fst .obj {
  @apply font-bold;
}
#notice.board .list .cont {
  @apply text-[16px] text-[#444] leading-6 line-clamp-5 text-ellipsis  p-0 m-0 text-left;
}
#notice.board .list .date {
  @apply text-left text-[12px] text-[#9395a1] tracking-[-0.132px];
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
