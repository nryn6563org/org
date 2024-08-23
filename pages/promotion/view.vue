<template>
  <div id="promotion">
    <CommonTop :top-items="topItems" />

    <div id="news" class="board">
      <div class="view">
        <div class="obj">
          <strong>제29기 정기주주총회 소집공고</strong>
          <span>2023-03-10</span>
        </div>
        <!-- obj -->

        <div class="viewContent">
          2022년 10월 26일 주식회사 씽크풀(갑)과 주식회사 지웨어(을)는 각각 이사회에서 (갑)은 <br>
          (을)을 흡수합병하여 그 권리 의무를 승계하고 (을)은 해산하기로 결의하였으므로 이 합병 <br>
          결의에 이의가 있는 채권자께서는 아래 기간 내에 이의를 제출하기 바랍니다. <br> <br>
          - 아 래 –
          1. 이의제출 대상 채권자 : 공고일 현재 당사의 채권을 보유하신 분 <br>
          2. 이의제출 기간 : 2022년 10월 28일 ~ 2022년 11월 28일 <br>
          3. 이의제출 장소 : 서울특별시 영등포구 국제금융로 70, 15층 <br>
          2022년 10월 27일 <br>
          주식회사 씽 크 풀 <br>
          서울특별시 영등포구 국제금융로 70, 15층 <br>
          대표이사 김 동 진
        </div>
        <!-- viewContent -->

        <div class="prevnext">
          <dl>
            <dt>이전글</dt>
            <dd>
              <a href="#">소규모합병 공고</a>
            </dd>
            <!-- 이전글 -->
            <dt>다음글</dt>
            <dd>
              <a href="#">제29기 정기주주총회 소집공고</a>
            </dd>
            <!-- 다음글 -->
          </dl>
        </div>
        <!-- prevnext -->

        <div class="btn">
          <button>목록</button>
        </div>
      </div>
    </div>
    <!-- // -->
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

#news.board {
  @apply w-[calc(100%-40px)] border-t-[1px] border-[#444] mx-auto pb-[120px];
}
#news.board .list {
  @apply py-5 px-1 border-b-[1px] border-[#E6E6EB] text-left;
}
#news.board .list button {
  @apply flex flex-col items-start gap-[6px] w-full h-fit;
}
.board .list .obj {
  @apply text-[16px] text-[#141414] tracking-[-0.176px] truncate h-5 leading-5 p-0 m-0 text-left font-bold;
}
.board .list.fst .obj {
  @apply font-bold;
}
.board .list .cont {
  @apply text-[16px] text-[#444] leading-6 line-clamp-5 text-ellipsis  p-[14px_0_0] m-0 text-left;
}
.board .list .date {
  @apply text-left text-[12px] text-[#9395a1] tracking-[-0.132px];
}

.board .more {
  @apply w-full mt-[30px] flex justify-center;
}
.board .more button {
  @apply w-[175px] h-10 rounded-[5px] bg-[#f4f5f6] justify-center items-center text-[#141414] text-[14px] tracking-[-0.154px];
}

.board .view{
  @apply block w-full
}
.board .view .obj{
  @apply flex flex-col w-full py-5 gap-2
}
.board .view .obj strong{
  @apply text-[20px] font-bold text-[#141414] tracking-[-0.22px]
}
.board .view .obj span{
  @apply text-[12px] text-[#9395a1] tracking-[-0.132px]
}
.board .view .viewContent{
  @apply p-[40px_0_100px] w-full text-[16px] leading-6 tracking-[-0.176px] text-[#444] border-t-[1px] border-[#E6E6EB]
}
.board .view .prevnext dl{
  @apply flex flex-wrap w-full border-b-[1px] border-[#E6E6EB]
}
.board .view .prevnext dt{
  @apply w-[54px] px-[5px] pt-3 pb-3 border-t-[1px] border-[#e6e6eb] text-[16px] text-[#141414] font-bold tracking-[-0.176px]
}
.board .view .prevnext dd{
  @apply w-[calc(100%-54px)] px-[5px] pt-3 pb-3 border-t-[1px] border-[#e6e6eb] text-[#444] text-[16px] tracking-[-0.176px]
}
.board .view .btn{
  @apply flex w-full pt-[30px] pb-[70px] justify-center
}
.board .view .btn button{
  @apply w-[176px] h-10 rounded-[5px] bg-[#f4f5f6] flex justify-center items-center text-[#141414] text-[14px] tracking-[-0.154px]
}
</style>
