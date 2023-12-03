<template>
  <div id="lbs">
    <CommonTop :top-items="topItems" />

    <div class="cont">
      <p class="p-[24px_45px_0]">
        <img src="~/assets/image/lbs/safekeeper.png" alt="" />
      </p>

      <div class="s-cont">
        <strong class="ko">안심키퍼서비스</strong>
        <strong class="en">SafeKeeper Service</strong>
        <em class="ko">24시간 PC접속 감시</em>
        <em class="en">24-hour PC access monitoring </em>

        <span class="ko">
          안심키퍼 서비스는 타인이 나의 PC로 접속을 시도할 경우 SMS 문자를 통해
          알람을 주고 이용자가 즉시 차단 또는 예약 종료를 할 수 있는 개인정보
          보호서비스입니다.
        </span>
        <span class="en">
          The SafeKeeper service is a privacy protection service that alerts you
          via SMS when someone tries to access your PC and allows you to block
          or cancel the reservation immediately.
        </span>
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
        sm: 'LBS Part',
        ko: '안심키퍼 서비스',
        en: 'SafeKeeper Service',
      },
    }
  },
}
</script>

<style scoped>
.s-cont {
  @apply w-full px-5 mt-[70px];
}
.s-cont strong {
  @apply block w-full text-[16px] font-bold text-black leading-[21px];
}
.s-cont > em {
  @apply block w-full text-[14px] text-black leading-[21px] mt-1;
}
.s-cont > span {
  @apply w-full block mt-2 text-[14px] text-[#444] tracking-[-0.154px] leading-[21px];
}
</style>
