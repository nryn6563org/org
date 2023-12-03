<template>
  <div id="container">
    <div class="ch-lang">
      <button :class="{ active: isKorActive }" @click="toggleKor">KOR</button>
      <button :class="{ active: isEngActive }" @click="toggleEng">ENG</button>
    </div>
    <!-- // languege choice -->

    <div class="globalNavigation">
      <div class="mn">
        <button class="depth1">
          <span class="ko">기업소개</span>
          <span class="en">About Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8"
              stroke="#D0D0D0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <!-- depth1 -->
        <div class="depth2">
          <NuxtLink to="/about/overview" class="ko">회사개요</NuxtLink>
          <NuxtLink to="/about/overview" class="en"
            >Corporate Overview</NuxtLink
          >
          <NuxtLink to="/about/ceo" class="ko">CEO메시지</NuxtLink>
          <NuxtLink to="/about/ceo" class="en">CEO Message</NuxtLink>
          <NuxtLink to="/about/vision" class="ko">비전</NuxtLink>
          <NuxtLink to="/about/vision" class="en">VISION</NuxtLink>
          <NuxtLink to="/about/orghistory" class="ko">연혁</NuxtLink>
          <NuxtLink to="/about/orghistory" class="en">History</NuxtLink>
          <NuxtLink to="/about/patent" class="ko">특허</NuxtLink>
          <NuxtLink to="/about/patent" class="en">Patent</NuxtLink>
          <NuxtLink to="/about/award" class="ko">주요 수상</NuxtLink>
          <NuxtLink to="/about/award" class="en">Major Award</NuxtLink>
          <NuxtLink to="/about/certification" class="ko">주요 인증</NuxtLink>
          <NuxtLink to="/about/certification" class="en"
            >Major Certification</NuxtLink
          >
          <NuxtLink to="/about/welfare" class="ko">복지제도</NuxtLink>
          <NuxtLink to="/about/welfare" class="en">Welfare System</NuxtLink>
          <NuxtLink to="/about/contact" class="ko">오시는 길</NuxtLink>
          <NuxtLink to="/about/contact" class="en">Contact</NuxtLink>
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">사업영역</span>
          <span class="en">Business</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8"
              stroke="#D0D0D0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <!-- depth1 -->
        <div class="depth2">
          <span class="en">AI Securities Company</span>
          <div class="depth2Part">
            <strong class="ko">AI증권사 Part</strong>
            <strong class="en">PART</strong>
            <NuxtLink to="/business/securities/reporter" class="ko"
              >R1. AI-기자</NuxtLink
            >
            <NuxtLink to="/business/securities/reporter" class="en"
              >R1. AI-Reporter</NuxtLink
            >
            <NuxtLink to="/business/securities/analyst" class="ko"
              >R2. AI-애널리스트</NuxtLink
            >
            <NuxtLink to="/business/securities/analyst" class="en"
              >R2. AI-Analysts</NuxtLink
            >
            <NuxtLink to="/business/securities/advisor" class="ko"
              >R3. AI-PMS(Advisor) 시스템</NuxtLink
            >
            <NuxtLink to="/business/securities/advisor" class="en"
              >R3. AI-PMS System</NuxtLink
            >
            <NuxtLink to="/business/securities/trader">R4. AI-Trader</NuxtLink>
          </div>

          <!-- //depth2Part -->

          <div class="depth2Part">
            <strong class="ko">LBS Part</strong>
            <strong class="en">LBS PART</strong>
            <NuxtLink to="/business/lbs/location" class="ko"
              >위치기반 로그인 도용방지 시스템</NuxtLink
            >
            <NuxtLink to="/business/lbs/location" class="en"
              >Location-based login theft</NuxtLink
            >
            <NuxtLink to="/business/lbs/prevention" class="ko"
              >안심키퍼서비스</NuxtLink
            >
            <NuxtLink to="/business/lbs/prevention" class="en"
              >prevention system</NuxtLink
            >
            <NuxtLink to="/business/lbs/noshowno" class="ko">노쇼노</NuxtLink>
            <NuxtLink to="/business/lbs/noshowno" class="en"
              >NO show no</NuxtLink
            >
          </div>
          <!-- //depth2Part -->

          <div class="depth2Part">
            <strong class="ko">RM Part</strong>
            <strong class="en">RM PART</strong>
            <NuxtLink to="/business/rm/rms" class="ko"
              >RMS(자동대출)통제시스템</NuxtLink
            >
            <NuxtLink to="/business/rm/rms" class="en">RMS System</NuxtLink>
          </div>
          <!-- //depth2Part -->
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">혁신R&D</span>
          <span class="en">Corporate Research Center</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8"
              stroke="#D0D0D0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <!-- depth1 -->
        <div class="depth2">
          <NuxtLink to="/rnd/national" class="ko">국가R&D</NuxtLink>
          <NuxtLink to="/rnd/national" class="en">National R&D</NuxtLink>
          <NuxtLink to="/rnd/military" class="ko">병역특례</NuxtLink>
          <NuxtLink to="/rnd/military" class="en"
            >Mil. Service Exemption</NuxtLink
          >
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">홍보센터</span>
          <span class="en">PR</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8"
              stroke="#D0D0D0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <!-- depth1 -->
        <div class="depth2">
          <NuxtLink to="/promotion/notice" class="ko">공지사항</NuxtLink>
          <NuxtLink to="/promotion/notice" class="en">Notice</NuxtLink>
          <NuxtLink to="/promotion/news">News</NuxtLink>
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">IR</span>
          <span class="en">IR</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8"
              stroke="#D0D0D0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <!-- depth1 -->
        <div class="depth2">
          <NuxtLink to="/ir" class="ko">IR 바로 가기</NuxtLink>
          <NuxtLink to="/ir" class="en">IR</NuxtLink>
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">채용정보</span>
          <span class="en">Careers</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 8L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L5 8"
              stroke="#D0D0D0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <!-- depth1 -->
        <div class="depth2">
          <NuxtLink to="/careers/recruit" class="ko">채용공고</NuxtLink>
          <NuxtLink to="/careers/recruit" class="en">Recruit</NuxtLink>
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->
    </div>
    <!-- //navigation -->
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      isKorActive: true,
      isEngActive: false,
    }
  },
  mounted() {
    const depth1Menu = document.querySelectorAll('.depth1')

    depth1Menu.forEach((depth1) => {
      depth1.addEventListener('click', (e) => {
        const prDiv = document.querySelectorAll('.mn')
        prDiv.forEach((div) => {
          div.classList.remove('active')
        })
        depth1.parentElement.classList.add('active')
      })
    })
  },
  methods: {
    toggleKor() {
      this.isKorActive = !this.isKorActive
      if (this.isKorActive) {
        this.isEngActive = false
        document.body.classList.remove('eng')
        document.body.classList.add('kor')
      } else {
        document.body.classList.remove('kor')
      }
    },
    toggleEng() {
      this.isEngActive = !this.isEngActive
      if (this.isEngActive) {
        this.isKorActive = false
        document.body.classList.remove('kor')
        document.body.classList.add('eng')
      } else {
        document.body.classList.remove('eng')
      }
    },
  },
}
</script>
<style scoped>
#container {
  @apply w-full min-h-[calc(100%-301px)] block pt-[90px] snap-y relative;
}
.depth1 > span {
  @apply text-neutral-900 text-[20px] font-bold tracking-[-0.22px];
}
.depth1 > span.en {
  @apply text-neutral-900 text-[18px] font-bold tracking-[-0.22px];
}
.depth2 > NuxtLink {
  @apply text-neutral-900 text-[14px] tracking-[-0.154px] h-[21px];
}
.depth2Part > strong,
.depth2 > span {
  @apply text-neutral-900 text-[14px] tracking-[-0.154px] h-[21px] leading-[21px] font-bold;
}
.depth2Part > button {
  @apply text-neutral-900 text-[14px] tracking-[-0.154px] h-[21px] pl-5;
}
</style>
