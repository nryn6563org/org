<template>
  <div
    class="swiper MainPage__splide rm__splide"
    role="group"
    aria-label="AI증권사 소개 스와이프"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide rm non-bg">
        <div>
          <div
            class="vi bg-[url('~/assets/image/main/rnd/vi01.png')] bg-no-repeat bg-[length:101px_87px] ;"
          ></div>

          <div class="txt ko">
            <span>
              액티브시니어 생애설계와 자기계발 <br />
              지원을 위한 런케이션 서비스 개발
            </span>
          </div>
          <!-- ko -->

          <div class="txt en">
            <span>
              Developing execution services to <br />
              support active senior life planning <br />
              and self-development
            </span>
          </div>
          <!-- en -->
        </div>
      </div>
      <!-- // -->

      <div class="swiper-slide rm non-bg">
        <div>
          <div
            class="vi bg-[url('~/assets/image/main/rnd/vi02.png')] bg-no-repeat bg-[length:92px_94px] ;"
          ></div>

          <div class="txt ko">
            <span> 우수기업연구소 <br />육성사업(ATC+) </span>
          </div>
          <!-- ko -->

          <div class="txt en">
            <span>
              Advanced Technology <br />
              Center Plus (ATC+)
            </span>
          </div>
          <!-- en -->
        </div>
      </div>
      <!-- // -->

      <div class="swiper-slide rm non-bg">
        <div>
          <div
            class="vi bg-[url('~/assets/image/main/rnd/vi03.png')] bg-no-repeat bg-[length:92px_85px] ;"
          ></div>

          <div class="txt ko">
            <span>
              빅데이터및 AI기반의 투자 및 <br />자산관리지원 서비스 시스템 개발
            </span>
          </div>
          <!-- ko -->

          <div class="txt en">
            <span>
              Developed a big data and AI-based <br />
              investment and asset management <br />
              support service system
            </span>
          </div>
          <!-- en -->
        </div>
      </div>
      <!-- // -->
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script scoped>
export default {
  mounted() {
    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const swiper = new Swiper('.rm__splide', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }).mount()
      //
    }
  },
}
</script>
