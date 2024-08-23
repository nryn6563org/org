<template>
  <div id="promotion">
    <CommonTop :top-items="topItems" />

    <div id="social">
      <div class="social_tab">
        <button
          :class="{ active: activeTab === 'tab1' }"
          @click="showTab('tab1')"
        >
          <span class="ko">유투브</span>
          <span class="en">Youtube</span>
        </button>
        <button
          :class="{ active: activeTab === 'tab2' }"
          @click="showTab('tab2')"
        >
          <span class="ko">블로그</span>
          <span class="en">Blog</span>
        </button>
        <button
          :class="{ active: activeTab === 'tab3' }"
          @click="showTab('tab3')"
        >
          <span class="ko">텔레그램</span>
          <span class="en">Telegram</span>
        </button>
      </div>
      <!-- // -->

      <div class="social_tabContent">
        <div v-if="activeTab === 'tab1'" class="tabCont">
          <div class="media_list">
            <div class="list">
              <a href="#">
                <img src="~/assets/image/mediaThumb.png" alt="소셜썸네일" />
                <div class="txt">
                  <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                  <em>2024-01-01</em>
                </div>
              </a>
            </div>
            <!-- // -->
            <div class="list">
              <a href="#">
                <img src="~/assets/image/mediaThumb.png" alt="소셜썸네일" />
                <div class="txt">
                  <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                  <em>2024-01-01</em>
                </div>
              </a>
            </div>
            <!-- // -->
            <div class="list">
              <a href="#">
                <img src="~/assets/image/mediaThumb.png" alt="소셜썸네일" />
                <div class="txt">
                  <span>주도주를 알아야 시장의 흐름이 보인다!</span>
                  <em>2024-01-01</em>
                </div>
              </a>
            </div>
            <!-- // -->
          </div>
          <button>
            <span class="ko">더보기</span>
            <span class="en">more</span>
          </button>
        </div>
        <div v-if="activeTab === 'tab2'" class="tabCont"></div>
        <div v-if="activeTab === 'tab3'" class="tabCont"></div>
      </div>
      <!-- // -->
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
        sm: 'Social Media',
        ko: '소셜미디어',
        en: 'Social Media',
      },
      activeTab: 'tab1',
    }
  },
  methods: {
    showTab(tab) {
      this.activeTab = tab
    },
  },
}
</script>

<style scoped>
#promotion > .top {
  @apply !pb-[50px];
}
#social {
  @apply w-full pt-[50px] relative;
}
.social_tab {
  @apply w-full h-[50px] flex justify-between px-5 bg-white shadow-social border-b-[1px] border-[#fafafc] absolute inset-0 z-20;
}
.social_tab button {
  @apply w-[80px] h-[50px] text-[16px] text-[#9395a1];
}
.social_tab button.active {
  @apply border-b-[2px] border-black text-[#141414];
}
.social_tabContent {
  @apply bg-[#fafafc] w-full p-[25px_20px_100px] relative;
}
.tabCont .media_list {
  @apply flex flex-col w-full gap-[30px];
}
.tabCont .media_list .list a {
  @apply flex flex-col w-full gap-4;
}
.tabCont .media_list .list .txt {
  @apply flex flex-col w-full gap-[5px];
}
.tabCont .media_list .list .txt span {
  @apply text-[16px] font-bold text-[#141414] leading-[22px] truncate;
}
.tabCont .media_list .list .txt em {
  @apply text-[14px] text-[#9395a1] leading-[18px];
}
.tabCont > button {
  @apply w-[175px] h-[40px] rounded-[5px] bg-[#ededed] flex justify-center items-center text-[14px] text-[#141414] m-[30px_auto_0];
}
</style>
