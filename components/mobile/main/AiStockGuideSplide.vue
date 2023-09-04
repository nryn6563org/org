<template>
  <div
    class="splide MainPage__splide aistock__splide"
    role="group"
    aria-label="AI증권사 소개 스와이프"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <div>
            <div class="txt ko">
              <strong>R1. AI 기자</strong>
              <span>
                AI기자가 누구보다 빠르고 정확하게 <br />
                뉴스를 전달합니다.
              </span>
            </div>

            <div class="txt en">
              <strong>R1. AI Editor</strong>
              <span>
                The AI reporter delivers <br>
                the news quickly and accurately.
              </span>
            </div>
            <div
              class="vi bg-[url('~/assets/image/main/aistock/vi01.png')] bg-no-repeat bg-[length:61px_93px] ;"
            ></div>
          </div>
        </li>
        <!-- // -->
        <li class="splide__slide">
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
                Superintelligent to generate<br />
                investment information
              </span>
            </div>
            <div
              class="vi bg-[url('~/assets/image/main/aistock/vi02.png')] bg-no-repeat bg-[length:90px_81px] ;"
            ></div>
          </div>
        </li>
        <!-- // -->
        <li class="splide__slide">
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
                Super personalization with <br />
                customized investment information
              </span>
            </div>
            <div
              class="vi bg-[url('~/assets/image/main/aistock/vi03.png')] bg-no-repeat bg-[length:85px_81px] ;"
            ></div>
          </div>
        </li>
        <!-- // -->
        <li class="splide__slide">
          <div>
            <div class="txt">
              <strong>R4. AI 트레이더</strong>
              <span>
                초지능화로 시장반응형 <br />
                매매기술을 제공합니다.
              </span>
            </div>
            <div
              class="vi bg-[url('~/assets/image/main/aistock/vi01.png')] bg-no-repeat bg-[length:81px_93px] ;"
            ></div>
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
      const splide = new Splide('.aistock__splide', {
        fixedWidth: '256px',
        fixedHeight: '246px',
        type: 'slide',
        gap: '20px',
        padding: '25px',
        focus: 'center',
      })
      splide.mount()
    })
  },
}
</script>
