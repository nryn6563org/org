<template>
  <section>
    <div class="TopTitleButton">
      <button @click="goToNotice">
        <strong class="ko">공지사항</strong>
        <strong class="en">Announcements</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.54089 3.2317L18 11.5L8.54089 19.7683C8.19536 20.0712 7.62718 20.078 7.27182 19.7835C6.93517 19.5044 6.91029 19.0551 7.2024 18.751L7.25402 18.7017L15.4964 11.5L7.25402 4.2983C6.92668 4.01133 6.9166 3.56154 7.2186 3.26456L7.27182 3.21653C7.60848 2.9375 8.13614 2.92891 8.48454 3.18634L8.54089 3.2317Z"
            fill="#858B91"
            stroke="#858B91"
            stroke-width="0.4"
          />
        </svg>
      </button>
    </div>
    <!-- //TopTitleButton -->

    <div class="MainNewsList">
      <button class="list" @click="goToNotice">
        <div class="top">
          <span class="ko">
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고 저쩌고
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고
          </span>
          <span class="en">
            Won the Prime Minister's Award for MeritoriWon the Prime Minister's Award for MeritoriWon 
            the Prime Minister's Award for MeritoriWon the Prime Minister's Award for Meritori
          </span>
        </div>
        <!-- top -->
        <div class="btm">
          <span>2023.01.01</span>
        </div>
        <!-- date -->
      </button>
      <!-- list -->

      <button class="list" @click="goToNotice">
        <div class="top">
          <span class="ko">
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고 저쩌고
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고
          </span>
          <span class="en">
            Won the Prime Minister's Award for MeritoriWon the Prime Minister's Award for MeritoriWon 
            the Prime Minister's Award for MeritoriWon the Prime Minister's Award for Meritori
          </span>
        </div>
        <!-- top -->
        <div class="btm">
          <span>2023.01.01</span>
        </div>
        <!-- date -->
      </button>
      <!-- list -->

      <button class="list" @click="goToNotice">
        <div class="top">
          <span class="ko">
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고 저쩌고
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고
          </span>
          <span class="en">
            Won the Prime Minister's Award for MeritoriWon the Prime Minister's Award for MeritoriWon 
            the Prime Minister's Award for MeritoriWon the Prime Minister's Award for Meritori
          </span>
        </div>
        <!-- top -->
        <div class="btm">
          <span>2023.01.01</span>
        </div>
        <!-- date -->
      </button>
      <!-- list -->

      <button class="list" @click="goToNotice">
        <div class="top">
          <span class="ko">
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고 저쩌고
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고
          </span>
          <span class="en">
            Won the Prime Minister's Award for MeritoriWon the Prime Minister's Award for MeritoriWon 
            the Prime Minister's Award for MeritoriWon the Prime Minister's Award for Meritori
          </span>
        </div>
        <!-- top -->
        <div class="btm">
          <span>2023.01.01</span>
        </div>
        <!-- date -->
      </button>
      <!-- list -->

      <button class="list" @click="goToNotice">
        <div class="top">
          <span class="ko">
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고 저쩌고
            2022 벤처창업진흥 유공포상 국무총리상 수상 수상소감 어쩌고
          </span>
          <span class="en">
            Won the Prime Minister's Award for MeritoriWon the Prime Minister's Award for MeritoriWon 
            the Prime Minister's Award for MeritoriWon the Prime Minister's Award for Meritori
          </span>
        </div>
        <!-- top -->
        <div class="btm">
          <span>2023.01.01</span>
        </div>
        <!-- date -->
      </button>
      <!-- list -->
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToNotice(){
      this.$router.push('/promotion/notice')
    }
  }
}
</script>

<style scoped>
section {
  @apply w-full h-fit flex bg-[#FAFAFC] float-left flex-col justify-center items-center gap-6
  pt-[50px] pb-[40px];
}
</style>
