<template>
  <div
    class="swiper MainPage__splide aistock__splide"
    role="group"
    aria-label="AI증권사 소개 스와이프"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div>
          <div class="txt ko">
            <strong>AXR1. PMS</strong>
            <span>
              투자자가 종목 또는 포트폴리오를 <br>
              선택할 수 있도록 지원하는 시스템
            </span>
          </div>

          <div class="txt en">
            <strong>AXR1. PMS</strong>
            <span>
              Systems that allow investors to <br>
              select stocks or portfolios
            </span>
          </div>
          <div
            class="vi bg-[url('~/assets/image/main/aistock/vi01.png')] bg-no-repeat bg-[length:61px_93px] ;"
          ></div>
        </div>
      </div>
      <!-- // -->
      <div class="swiper-slide">
        <div>
          <div class="txt ko">
            <strong>AXR2. SMS</strong>
            <span>
              국내 전 종목 및 ETF를 대상으로 <br>
              최적의 매매타이밍을 잡아주는 종 <br>
              목별 AI시그널 생성, 운영 시스템
            </span>
          </div>
          <div class="txt en">
            <strong>AXR2. SMS</strong>
            <span>
              AI signals system for optimal trade <br>
              timing for all domestic stocks and <br>
              ETFs by sector
            </span>
          </div>
          <div
            class="vi bg-[url('~/assets/image/main/aistock/vi03.png')] bg-no-repeat bg-[length:85px_81px] ;"
          ></div>
        </div>
      </div>
      <!-- // -->
      <div class="swiper-slide">
        <div>
          <div class="txt ko">
            <strong>AXR3. TMS</strong>
            <span>
              종목별 호가, 체결상태 등 주식시장 <br>
              의 힘을 AI가 학습하여 싸게 사고 비 <br>
              싸게 팔 수 있도록 지원하는 시스템
            </span>
          </div>

          <div class="txt en">
            <strong>AXR3. TMS</strong>
            <span>
              A system that enables AI to learn <br>
              stock market forces, such as <br>
              quotes and execution status, to <br>
              buy low and sell high.
            </span>
          </div>

          <div
            class="vi bg-[url('~/assets/image/main/aistock/vi01.png')] bg-no-repeat bg-[length:81px_93px] ;"
          ></div>
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
      'https://fastly.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const swiper = new Swiper('.aistock__splide', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }).mount()
      //
    }
  }
}
</script>
