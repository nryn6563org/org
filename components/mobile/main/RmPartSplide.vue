<template>
  <div
    class="splide MainPage__splide rm__splide"
    role="group"
    aria-label="AI증권사 소개 스와이프"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide rm non-bg">
          <div>
            <div
              class="vi bg-[url('~/assets/image/main/rm/vi01.png')] bg-no-repeat bg-[length:101px_87px] ;"
            ></div>

            <div class="txt ko">
              <span>
                액티브시니어 생애설계와 자기계발 <br />
                지원을 위한 런케이션 서비스 개발
              </span>
            </div>

            <div class="txt en">
              <span>
                Development of Running <br />
                Service for Life Design and <br />
                Self-Development <br />
                Support for Active Senior
              </span>
            </div>
          </div>
        </li>
        <!-- // -->

        <li class="splide__slide rm non-bg">
          <div>
            <div
              class="vi bg-[url('~/assets/image/main/rm/vi02.png')] bg-no-repeat bg-[length:92px_94px] ;"
            ></div>

            <div class="txt ko">
              <span> 우수기업연구소 <br />육성사업(ATC+) </span>
            </div>

            <div class="txt en">
              <span>
                Excellent Enterprise <br />
                Research Institute <br />
                Nurturing project(ATC+)
              </span>
            </div>
          </div>
        </li>
        <!-- // -->

        <li class="splide__slide rm non-bg">
          <div>
            <div
              class="vi bg-[url('~/assets/image/main/rm/vi03.png')] bg-no-repeat bg-[length:92px_85px] ;"
            ></div>

            <div class="txt ko">
              <span>
                빅데이터및 AI기반의 투자 및 <br />자산관리지원 서비스 시스템
                개발
              </span>
            </div>

            <div class="txt en">
              <span>
                Development of an investment <br />
                and asset management support service <br />
                system based on big data and AI
              </span>
            </div>
          </div>
        </li>
        <!-- // -->
      </ul>
    </div>
  </div>
</template>

<script scoped>
export default {
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      const splide = new Splide('.rm__splide', {
        fixedWidth: '273',
        fixedHeight: '226',
        type: 'slide',
        gap: '20px',
        padding: '20px',
        focus: 'center',
      })
      splide.mount()
    })
  },
}
</script>
