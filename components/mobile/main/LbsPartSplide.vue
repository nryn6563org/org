<template>
  <div
    class="splide MainPage__splide lbs__splide"
    role="group"
    aria-label="LBS소개 스와이프"
  >
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide non-bg">
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
              <strong>Login Protection Service</strong>
              <span>
                By comparing the location of <br />
                the PC with the location of the mobile phone, <br />
                it determines illegal logins and prevents hacking.
              </span>
            </div>

            <div
              class="vi bg-[url('~/assets/image/main/lbs/vi01.png')] bg-no-repeat bg-[length:96px_93px] ;"
            ></div>
          </div>
        </li>
        <!-- // -->
        <li class="splide__slide non-bg">
          <div>
            <div class="txt ko">
              <strong>안심키퍼 서비스</strong>
              <span>
                PC의 부정접속을 차단하고 <br />
                자녀의 과다한 PC사용을 통제합니다.
              </span>
            </div>

            <div class="txt en">
              <strong>Safe Keeper Service</strong>
              <span>
                Block unauthorized access <br />
                to your PC and control your child's <br />
                excessive use of your PC.
              </span>
            </div>
            <div
              class="vi bg-[url('~/assets/image/main/lbs/vi02.png')] bg-no-repeat bg-[length:93px_93px] ;"
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
      const splide = new Splide('.lbs__splide', {
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
