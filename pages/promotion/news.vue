<template>
  <div id="promotion">
    <CommonTop :top-items="topItems" />

    <div id="news" class="board">
      <div class="list">
        <button>
          <div class="obj">
            <span> 2022 벤처창업진흥 유공포상 국무총리 표창 수상 </span>
          </div>
          <div class="date">2023-03-10</div>
          <!-- //date -->
          <!-- //obj -->
          <div class="cont">
            <span>
              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상
              시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.
            </span>
          </div>
          <!-- //cont -->
          <div class="more">
            <a href="#">View More</a>
          </div>
        </button>
      </div>
      <!-- // -->

      <div class="list">
        <button>
          <div class="obj">
            <span> 2022 벤처창업진흥 유공포상 국무총리 표창 수상 </span>
          </div>
          <div class="date">2023-03-10</div>
          <!-- //date -->
          <!-- //obj -->
          <div class="cont">
            <span>
              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상
              시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.
            </span>
          </div>
          <!-- //cont -->
          <div class="more">
            <a href="#">View More</a>
          </div>
        </button>
      </div>
      <!-- // -->

      <div class="list">
        <button>
          <div class="obj">
            <span> 2022 벤처창업진흥 유공포상 국무총리 표창 수상 </span>
          </div>
          <div class="date">2023-03-10</div>
          <!-- //date -->
          <!-- //obj -->
          <div class="cont">
            <span>
              금융 AI 전문기업 '씽크풀'이 '2022 벤처창업진흥 유공 포상
              시상식'에서 벤처 활성화 부문의 국무총리 표창을 수상했다.
            </span>
          </div>
          <!-- //cont -->
          <div class="more">
            <a href="#">View More</a>
          </div>
        </button>
      </div>
      <!-- // -->

      <div class="more">
        <button>더보기</button>
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
        sm: 'News',
        ko: '뉴스',
        en: 'News',
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
.board .list .more{
  @apply block w-full h-4 leading-4 mt-0 text-start
}
.board .list .more a{
  @apply text-[12px] text-[#444] tracking-[-0.132px] underline
}

.board .more {
  @apply w-full mt-[30px] flex justify-center;
}
.board .more button {
  @apply w-[175px] h-10 rounded-[5px] bg-[#f4f5f6] justify-center items-center text-[#141414] text-[14px] tracking-[-0.154px];
}
</style>
