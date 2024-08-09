<template>
  <div id="lbs">
    <CommonTop :top-items="topItems" />

    <div class="cont">
      <p class="px-5">
        <img class="ko" src="~/assets/image/lbs/safekeeper.png" alt="" />
        <img class="en" src="~/assets/image/lbs/safekeeper_en.png" alt="" />
      </p>

      <div class="s-cont">
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

        <div>
          <strong>부정접속 즉시알림</strong>
          <span>PC가 켜지면 안심키퍼가 내 휴대폰으로 SMS 알람을 주고 즉시 접속을 차단 할 수 있습니다.</span>
        </div>
        <div>
          <strong>회사/자녀PC 원격통제</strong>
          <span>우리 아이의 게임, 인터넷 등 과다 PC사용이 걱정되는 부모라면 PC 예약종료 기능으로 약속한 시간만큼만 이용할 수 있습니다.</span>
        </div>
        <div>
          <strong>보상보험으로 한번 더 안심</strong>
          <span>안심키퍼 서비스 가입 고객님께 피싱, 해킹, 스미싱 등 금융사기로 인한 금전적 손해 발생 시 보상보험을 제공합니다.</span>
        </div>
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
        sm: 'SafeKeeper Service',
        ko: '안심키퍼서비스',
        en: 'SafeKeeper Service',
      },
    }
  },
}
</script>

<style scoped>
#lbs{
  @apply w-full bg-[#EFF2FB]
}
.s-cont {
  @apply w-full px-5 mt-[70px] flex flex-col gap-[30px]
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
.s-cont > div {
  @apply flex flex-col gap-2.5
}
.s-cont > div strong{
  @apply text-[16px] text-[#5368ff] font-bold
}
.s-cont > div span{
  @apply text-[14px] text-[#444] leading-[18px] tracking-[-0.22px]
}
</style>
