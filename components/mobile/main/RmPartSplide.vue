<template>
  <div
    class="swiper MainPage__splide Rm__splide"
    role="group"
    aria-label="LBS소개 스와이프"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <NuxtLink to="/">
          <div>
            <div class="txt ko">
              <strong>RMS통제시스템</strong>
              <span>
                초개인화, 초지능화에 기반한 <br />스마트한 자산운용이
                시작됩니다.
              </span>
            </div>
            <div class="txt en">
              <strong>RMS Control System</strong>
              <span>
                Smart wealth management based <br />
                on hyper-personalization and <br />
                hyper-intelligence begins
              </span>
            </div>

            <div
              class="vi bg-[url('~/assets/image/main/rm/vi01.png')] bg-no-repeat bg-[length:96px_93px] ;"
            ></div>
          </div>
        </NuxtLink>
      </div>
      <!-- // -->
      <div class="swiper-slide">
        <NuxtLink to="/">
          <div>
            <div class="txt ko">
              <strong>소상공인 대출 <br />리스크관리 솔루션</strong>
              <span>
                박테이터와 AI에 기반하여 다양한 <br />리스크를 사전에 예측하고
                관리합니다.
              </span>
            </div>

            <div class="txt en">
              <strong
                >Small Business Lending <br />Risk Management Solutions</strong
              >
              <span>
                Proactively predict and manage <br />
                various risks based on big data <br />
                and AI
              </span>
            </div>
            <div
              class="vi bg-[url('~/assets/image/main/rm/vi02.png')] bg-no-repeat bg-[length:93px_93px] ;"
            ></div>
          </div>
        </NuxtLink>
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
      const swiper = new Swiper('.Rm__splide', {
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
