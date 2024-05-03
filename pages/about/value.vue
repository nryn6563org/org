<template>
  <div id="aboutus">
    <div class="title">
      <span>Our Values</span>
      <strong class="ko">인재상</strong>
      <strong class="en">Our Values</strong>
    </div>
    <!-- //title -->

    <div class="values">
      <div>
        <div class="vi">
          <img src="~/assets/image/values/vi01.png" alt="" width="87">
        </div>

        <div class="txt">
          <strong class="ko">열정을 발하는 人</strong>
          <strong class="en">People with passion</strong>
          <span class="ko">
            자신의 삶과 일에 열정을 가지고 미래에 도전하며, <br>그 열정이 동료에게 전달되는 사람
          </span>
          <span class="en">
            Someone who is passionate about their life and work, challenging the future, and conveying that passion to their coworkers
          </span>
        </div>

      </div>

      <div>
        <div class="vi">
          <img src="~/assets/image/values/vi02.png" alt="" width="87">
        </div>

        <div class="txt">
          <strong class="ko">전략적 사고를 하는 人</strong>
          <strong class="en">Strategic thinkers</strong>
          <span class="ko">
            최고의 성과를 만들기 위해서 전략적 요소를 <br>분석하고 모색하여 실행하는 사람
          </span>
          <span class="en">
            Someone who analyzes, identifies, and executes strategic elements to produce the best results
          </span>
        </div>

      </div>

      <div>
        <div class="vi">
          <img src="~/assets/image/values/vi03.png" alt="" width="87">
        </div>

        <div class="txt">
          <strong class="ko">소통을 잘하는 人</strong>
          <strong class="en">A good communicator</strong>
          <span class="ko">
            동료 간 적극적으로 소통하고 서로의 성장 <br>과 발전을 위해 끊임없이 노력하는 사람
          </span>
          <span class="en">
            People who actively engage with coworkers and constantly strive to help each other grow and develop
          </span>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
</script>

<style scoped>
.values{
  @apply flex flex-col gap-[50px] pb-[100px] pt-[50px]
}
.values > div{
  @apply flex flex-col justify-center items-center gap-5
}
.values > div .txt{
  @apply flex flex-col justify-center items-center gap-[15px]
}
.values > div .txt strong{
  @apply text-[16px] text-[#141414] font-bold tracking-[-0.176px]
}
.values > div .txt span{
  @apply text-[14px] text-[#141414] tracking-[-0.154px] text-center
}
</style>
