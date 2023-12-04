<template>
  <div id="lbs">
    <CommonTop :top-items="topItems" />

    <div class="cont">
      <p class="p-[55px_24px_0]">
        <img src="~/assets/image/lbs/prevention.png" alt="" />
      </p>
      <!-- // -->
      <div class="guide mt-[-4px]">
        <span class="ko">
          언제든지 발생할 수 있는 부정로그인 및 해킹을 <br />
          방지하는 위치기반 보안서비스 <br /><br />
          디지털 범죄로 인한 금전적 피해발생 시 보상보험 제공 (해킹, 피싱,
          스미싱, 불법 카드 사용 등) <br /><br />
          국내 3대 이통사와 함께 하는 이통사 부가서비스<br />
          (월1천원, 2021년 10월말 기준 60만명 이용)
        </span>
        <span class="en">
          Location-based security services to prevent fraudulent logins and
          hacks that can happen at any time. Provide insurance to cover
          financial losses due to digital crime
          <br /><br />
          Additional carrier services with the top 3 carriers in Korea
        </span>
      </div>
      <!-- // -->

      <div class="s-cont">
        <strong class="ko">주요 수상</strong>
        <strong class="en">Major Awards </strong>

        <div class="awardList">
          <div>
            <a href="https://www.msit.go.kr/index.do" target="_blank">
              <img src="~/assets/image/lbs/award1.png" alt="미래창조과학부" />
            </a>
            <span class="ko">미래창조과학부장관상 수상</span>
            <span class="en">
              Minister of Science, ICT and Future Planning Award
            </span>
          </div>
          <!-- // -->

          <div>
            <a href="https://www.kcc.go.kr/user.do" target="_blank">
              <img src="~/assets/image/lbs/award2.png" alt="방송통신위원회" />
            </a>
            <span class="ko">방송통신위원장상 수상</span>
            <span class="en">
              Chairman's Award for Broadcasting and Telecommunications
            </span>
          </div>
          <!-- // -->
        </div>
      </div>
      <!-- // -->

      <div class="s-cont">
        <strong class="ko">제휴사</strong>
        <strong class="en">Partners</strong>

        <span class="ko">
          KT / LG U+ / SKT / KB 국민카드 / 코스콤 / KORAIL / 넷마블 /
          하이플러스카드 /컬쳐랜드 / 넥슨 / 부산은행 / MBN / SK컴즈 / iMBC
          /인터파크 / OK캐시백 / 재무교육원 / 조세일보 / 싸이월드 / 부산대학교 /
          네이트 /한국전자인증 / 바른소프트 / 한국무역정보통신 / 다날
          /나이스평가정보 / 서경방송 / 열린사이버대학교 / 아시아경제 / 교보문고
          /빗썸 / SBS / 60여 업체 제휴
        </span>
        <span class="en">
          KT / LG U+ / SKT / KB Kookmin Card / KOSCOM / KORAIL / NET MABLE /
          HI-PLUS CARD / CULTURELAND / NEXON / BUSAN BANK / MBN / SK COMS / iMBC
          / INTERPARK / OK CASHBACK / Finance Institute / Tax Journal / cyworld
          / Pusan univ / Nate / Korean Electronic Certificate / VARNSOFT / KTNET
          / DANAL / NICEINFO / ISCS / OPEN CYBER UNIV / ASIA ECONOMY / KYOBO
          BOOK / Bithumb / SBS / Partnered with 60+ companies
        </span>
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
        sm: 'LBS Part',
        ko: '로그인 도용방지 시스템',
        en: 'Login Abuse Prevention System',
      },
    }
  },
}
</script>

<style scoped>
.guide {
  @apply w-[calc(100%-40px)] mx-auto rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] bg-white p-[25px_15px];
}
.guide span {
  @apply text-[14px] text-[#444] tracking-[-0.154px] leading-5;
}
.s-cont {
  @apply w-full mt-10 px-5;
}
.s-cont strong {
  @apply block w-full text-[14px] font-bold text-black leading-[18px];
}
.s-cont .awardList {
  @apply flex w-full gap-2 mt-1;
}
.s-cont .awardList > div {
  @apply w-[calc((100%-8px)/2)] flex flex-col items-center gap-1;
}
.s-cont .awardList > div span {
  @apply text-[12px] text-[#9395a1] leading-[18px];
}
.s-cont > span {
  @apply w-full block mt-1 text-[14px] text-[#444] tracking-[-0.154px] leading-6;
}
</style>
