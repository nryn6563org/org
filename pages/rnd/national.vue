<template>
  
  <div id="rnd">
    <div class="swiper rnd_swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <CommonRnd :rnd-items="rndItems" />
          <div class="party-image">
            <span>
              <img
                src="~/assets/image/rnd/party01.png"
                alt="씽크풀"
                class="w-[116px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party02.png"
                alt="금융과행복네트워크"
                class="w-[120px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party03.png"
                alt="프로눔"
                class="w-[70px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party04.png"
                alt="한국전자통신연구원"
                class="w-[78px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party05.png"
                alt="상명대"
                class="w-[21px] h-auto"
              />
            </span>
          </div>
        </div>
        <!-- // -->
        <div class="swiper-slide">
          <CommonRnd :rnd-items="rndItems2" />
          <div class="party-image">
            <span>
              <img
                src="~/assets/image/rnd/party01.png"
                alt="씽크풀"
                class="w-[116px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party06.png"
                alt="텔레피스"
                class="w-[87px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party07.png"
                alt="딥하이"
                class="w-10 h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party08.png"
                alt="서울대학교"
                class="w-[95px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party09.png"
                alt="상명대학교"
                class="w-[37px] h-auto"
              />
            </span>
          </div>
        </div>
        <!-- // -->
        <div class="swiper-slide">
          <CommonRnd :rnd-items="rndItems3" />
          <div class="party-image">
            <span>
              <img
                src="~/assets/image/rnd/party01.png"
                alt="씽크풀"
                class="w-[116px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party08.png"
                alt="서울대학교"
                class="w-[95px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party07.png"
                alt="딥하이"
                class="w-10 h-auto"
              />
            </span>
          </div>
        </div>
        <!-- // -->
        <div class="swiper-slide">
          <CommonRnd :rnd-items="rndItems4" />
          <div class="party-image">
            <span>
              <img
                src="~/assets/image/rnd/party01.png"
                alt="씽크풀"
                class="w-[116px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party06.png"
                alt="텔레피스"
                class="w-[87px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party07.png"
                alt="딥하이"
                class="w-10 h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party08.png"
                alt="서울대학교"
                class="w-[95px] h-auto"
              />
            </span>
            <span>
              <img
                src="~/assets/image/rnd/party09.png"
                alt="상명대학교"
                class="w-[37px] h-auto"
              />
            </span>
          </div>
        </div>
        <!-- // -->
      </div>
      <!-- //wrapper -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import CommonRnd from '@/components/CommonRnd.vue'

export default {
  components: {
    CommonRnd,
  },
  data() {
    return {
      rndItems: {
        smk: '국가 R&D',
        sme: 'National R&D',
        ko: '서비스산업융합<br>고도화 사업',
        en: 'Login Abuse Prevention System',
        url: require('~/assets/image/rnd/rnd01.png'),
        imgTitle: '액티브 시니어 생애설계와<br>자기계발 지원을 위한',
        imgTitle2: '런케이션서비스 개발',
        title: '2023<br>지식서비스<br>서비스산업융합고도화 과제',
        date: '2023년 01월 ~ 2025년 11월',
        price: '30억원 투자',
        org: '(주)씽크풀',
        party:
          '(사)금융과 행복 네트워크<br>(주)프로눔<br>한국전기통신연구원<br>상명대 (시니어 휴먼 팩터 연구기관)',
      },
      rndItems2: {
        smk: '국가 R&D',
        sme: 'National R&D',
        ko: 'AI 기반 超 지능형<br>의사결정 지원 시스템',
        en: 'Login Abuse Prevention System',
        url: require('~/assets/image/rnd/rnd02.png'),
        imgTitle:
          '심볼릭 AI기반 미래 하이브리드戰 대응<br>합동지휘통제 (超)지능화 기술 개발',
        imgTitle2: '비정형 멀티 모달데이터<br>융합 다중가설 뉴로',
        title: '2021<br>미래도전 국방기술개발 사업',
        date: '2021년 11월 ~ 2026년 11월',
        price: '72.5억원 투자',
        org: '(주)씽크풀',
        party:
          '㈜텔레픽스(위성정보 분석)<br>㈜딥하이(자연어처리 전문기업)<br>서울대학교(최적화)<br>제주대학교(온톨로지 추론)',
      },
      rndItems3: {
        smk: '국가 R&D',
        sme: 'National R&D',
        ko: '우수기업연구소<br>육성사업(ATC+)',
        en: 'Login Abuse Prevention System',
        url: require('~/assets/image/rnd/rnd03.png'),
        imgTitle: '글로벌 과학적 투자 지원을 위한',
        imgTitle2: 'AI기반 서비스<br>시스템 개발',
        title: '2021<br>산업자원부 우수기업연구소육성사업<br>(ATC+) 선정',
        date: '2021년 ~ 2024년',
        price: '정부 지원금 20억원 포함<br>총 28억원 투자',
        org: '(주)씽크풀',
        party: '서울대학교<br>㈜딥하이(자연어처리(NLP) 전문기업)',
      },
      rndItems4: {
        smk: '국가 R&D',
        sme: 'National R&D',
        ko: '국가산업핵심기술<br>개발사업',
        en: 'Login Abuse Prevention System',
        url: require('~/assets/image/rnd/rnd04.png'),
        imgTitle: '',
        imgTitle2:
          '빅데이터 및<br>AI 기반의 투자 및<br>자산관리 지원 서비스 시스템 개발',
        title: '2018<br>제2차 국가산업핵심기술개발<br>사업 과제',
        date: '2018년 9월 ~ 2021년 8월',
        price: '정부 지원금 30억원 포함<br>총 42억원 투자',
        org: '(주)씽크풀',
        party:
          '한국전자통신연구원(ETRI),<br>서울대학교, KT, HAII(연세대학교<br>UX랩기업)',
      },
    }
  },
  mounted() {
    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const swiper = new Swiper('.rnd_swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }).mount()
      //
    }
  },
}
</script>
<style scoped>
.swiper-button-next,
.swiper-button-prev {
  @apply text-gray-300 text-[60px] font-bold top-[365px];
}
</style>
