<template>
  <div id="investor">
    <CommonTop :top-items="topItems" />

    <div id="ir">
      <strong class="boardTitle">공시</strong>
      <!-- // -->
      <div class="board">
        <div class="list">
          <button>
            <div class="obj">
              <span class="ko">
                [첨부정정] 주요사항보고서(자기주식취득결정)
              </span>
              <span class="en"></span>
            </div>
            <div class="date">2023-03-10</div>
            <!-- //date -->
          </button>
        </div>
        <!-- // -->
        <div class="list">
          <button>
            <div class="obj">
              <span class="ko">
                [첨부정정] 주요사항보고서(자기주식취득결정)
              </span>
              <span class="en"></span>
            </div>
            <div class="date">2023-03-10</div>
            <!-- //date -->
          </button>
        </div>
        <!-- // -->
        <div class="list">
          <button>
            <div class="obj">
              <span class="ko">
                [첨부정정] 주요사항보고서(자기주식취득결정)
              </span>
              <span class="en"></span>
            </div>
            <div class="date">2023-03-10</div>
            <!-- //date -->
          </button>
        </div>
        <!-- // -->
        <div class="list">
          <button>
            <div class="obj">
              <span class="ko">
                [첨부정정] 주요사항보고서(자기주식취득결정)
              </span>
              <span class="en"></span>
            </div>
            <div class="date">2023-03-10</div>
            <!-- //date -->
          </button>
        </div>
        <!-- // -->
        <div class="list">
          <button>
            <div class="obj">
              <span class="ko">
                [첨부정정] 주요사항보고서(자기주식취득결정)
              </span>
              <span class="en"></span>
            </div>
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
        sm: 'Investor Realations',
        ko: 'IR',
        en: 'IR',
      },
    }
  },
}
</script>

<style scoped>
#investor > .top {
  @apply pb-9;
}
#ir {
  @apply w-full;
}
#ir strong {
  @apply block text-[20px] leading-6 font-bold tracking-[-0.22px] text-[#141414] pb-2.5 pl-5;
}
#ir .board {
  @apply w-[calc(100%-40px)] border-t-[1px] border-[#444] mx-auto pb-[120px];
}
#ir .board .list {
  @apply py-5 px-1 border-b-[1px] border-[#E6E6EB] text-left;
}
#ir .board .list button {
  @apply flex flex-col items-start gap-[6px] w-full h-fit;
}
#ir .board .list .obj {
  @apply text-[16px] text-[#141414] tracking-[-0.176px] truncate h-5 leading-5 p-0 m-0 text-left font-bold;
}
#ir .board .list.fst .obj {
  @apply font-bold;
}
#ir .board .list .cont {
  @apply text-[16px] text-[#444] leading-6 line-clamp-5 text-ellipsis  p-[14px_0_0] m-0 text-left;
}
#ir .board .list .date {
  @apply text-left text-[12px] text-[#9395a1] tracking-[-0.132px];
}

.board .more {
  @apply w-full mt-[30px] flex justify-center;
}
.board .more button {
  @apply w-[175px] h-10 rounded-[5px] bg-[#f4f5f6] justify-center items-center text-[#141414] text-[14px] tracking-[-0.154px];
}
</style>
