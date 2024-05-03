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
          <span class="ko">회사소개</span>
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
          <NuxtLink to="/about/award" class="ko">수상</NuxtLink>
          <NuxtLink to="/about/award" class="en">Award</NuxtLink>
          <NuxtLink to="/about/certification" class="ko">인증</NuxtLink>
          <NuxtLink to="/about/certification" class="en"
            >Certification</NuxtLink
          >
          <NuxtLink to="/about/welfare" class="ko">복지제도</NuxtLink>
          <NuxtLink to="/about/welfare" class="en">Welfare System</NuxtLink>
          <NuxtLink to="/about/value" class="ko">인재상</NuxtLink>
          <NuxtLink to="/about/value" class="en">Our Values</NuxtLink>
          <NuxtLink to="/about/contact" class="ko">오시는 길</NuxtLink>
          <NuxtLink to="/about/contact" class="en">Contact</NuxtLink>
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">ThinkPool AI</span>
          <span class="en">ThinkPool AI</span>
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
          <NuxtLink to="/axrassi/rassi" class="">AX RASSI </NuxtLink>
          <NuxtLink to="/axrassi/algorithms" class="">ThinkPool AI Algorithm</NuxtLink>
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">위치기반서비스</span>
          <span class="en">LBS</span>
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
          <NuxtLink to="/business/lbs/location" class="ko">로그인보호서비스</NuxtLink>
          <NuxtLink to="/business/lbs/location" class="en">Login Identity Protection Services</NuxtLink>
          <NuxtLink to="/business/lbs/prevention" class="ko">안심키퍼서비스</NuxtLink>
          <NuxtLink to="/business/lbs/prevention" class="en">SafeKeeper Service</NuxtLink>
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">리스크관리솔루션</span>
          <span class="en">RMS</span>
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
          <NuxtLink to="/business/rm/rms" class="ko">RMS통제시스템</NuxtLink>
          <NuxtLink to="/business/rm/rms" class="en">RMS Control System</NuxtLink>
        </div>
        <!-- depth2 -->
      </div>
      <!-- mn -->

      <div class="mn">
        <button class="depth1">
          <span class="ko">기업부설연구소</span>
          <span class="en">R&D Center</span>
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
