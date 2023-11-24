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
            <strong>R1. AI 기자</strong>
            <span>
              AI기자가 누구보다 빠르고 정확하게 <br />
              뉴스를 전달합니다.
            </span>
          </div>

          <div class="txt en">
            <strong>R1. AI Reporter</strong>
            <span>
              AI reporters deliver news <br />
              faster and more accurately <br />
              than anyone else.
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
            <strong>R2. AI 애널리스트</strong>
            <span>
              초지능화로 집단지성을 뛰어넘는 <br />
              투자정보를 생성합니다.
            </span>
          </div>
          <div class="txt en">
            <strong>R2. AI Analyst</strong>
            <span>
              Superintelligence generates <br />
              investment information that <br />
              goes beyond collective <br />
              intelligence.
            </span>
          </div>
          <div
            class="vi bg-[url('~/assets/image/main/aistock/vi02.png')] bg-no-repeat bg-[length:90px_81px] ;"
          ></div>
        </div>
      </div>
      <!-- // -->
      <div class="swiper-slide">
        <div>
          <div class="txt ko">
            <strong>R3. AI 어드바이저</strong>
            <span>
              초개인화로 맞춤 투자정보를 <br />
              적시에 제공합니다.
            </span>
          </div>

          <div class="txt en">
            <strong>R3. AI Adviser</strong>
            <span>
              Hyper-personalization <br />
              delivers timely, personalized <br />
              investment information.
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
            <strong>R4. AI 트레이더</strong>
            <span>
              초지능화로 시장반응형 <br />
              매매기술을 제공합니다.
            </span>
          </div>

          <div class="txt en">
            <strong>R4. AI Trader</strong>
            <span>
              AI trader buys low and <br />
              sells high on stocks
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
      'https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const swiper = new Swiper('.aistock__splide', {
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
