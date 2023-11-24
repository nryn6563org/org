<template>
  <div
    class="swiper MainPage__splide lbs__splide"
    role="group"
    aria-label="LBS소개 스와이프"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide non-bg">
          <div>
            <div class="txt ko">
              <strong>로그인 보호 서비스</strong>
              <span>
                PC위치와 휴대폰 위치 비교를 통해 <br />
                부정로그인을 판별하고 해킹을 <br />
                방지합니다.
              </span>
            </div>
            <div class="txt en">
              <strong>Login Identity Protection Services</strong>
              <span>
                Detect fraudulent logins and <br>
                prevent hacking by comparing PC <br>
                and phone locations. 
              </span>
            </div>

            <div
              class="vi bg-[url('~/assets/image/main/lbs/vi01.png')] bg-no-repeat bg-[length:96px_93px] ;"
            ></div>
          </div>
        </div>
        <!-- // -->
        <div class="swiper-slide non-bg">
          <div>
            <div class="txt ko">
              <strong>안심키퍼 서비스</strong>
              <span>
                PC의 부정접속을 차단하고 <br />
                자녀의 과다한 PC사용을 통제합니다.
              </span>
            </div>

            <div class="txt en">
              <strong>SafeKeeper Service </strong>
              <span>
                Block unauthorized access to your PC and <br>
                control your child's excessive PC use. 
              </span>
            </div>
            <div
              class="vi bg-[url('~/assets/image/main/lbs/vi02.png')] bg-no-repeat bg-[length:93px_93px] ;"
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
      const swiper = new Swiper('.lbs__splide', {
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
