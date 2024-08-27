<template>
  <div id="aboutus">
    <CommonTop :top-items="topItems" />
    <!-- //title -->

    <div class="content">
      <div class="map">
        <img src="~/assets/image/map.png" alt="맵 데모 이미지" class="ko" />
        <img src="~/assets/image/map_en.png" alt="맵 데모 이미지" class="en" />
      </div>
      <!-- // -->

      <div class="txt">
        <span class="ko">
          지하철 5호선/9호선 여의도역 하차 5번출구 <br>
          (KRX한국거래소 방향)로 나와서 10분거리. <br>
          지하철 9호선 샛강역 하차 2번출구 <br>
          (KBS별관 방향)로 나와서 8분 거리.
          <br><br>
          <a href="https://m.place.naver.com/place/12115898/location" target="_blank" class="underline">씽크풀 - 네이버지도</a>
        </span>
        <span class="en">
          Take Subway Line 5 / Subway Line 9 Yeouido Station Exit 5 (KRX Korea
          Exchange direction) and walk for 10 minutes <br />
          Get off at Saetgang Station on Subway Line 9 and take Exit 2 (toward
          KBS Annex) for 8 minutes
        </span>
      </div>

      <div class="addrs_txt">
        <dl class="ko">
          <dt>주소</dt>
          <dd>
            서울특별시 영등포구 국제금융로 70 <br />
            (여의도동 43 미원빌딩 15층)
          </dd>

          <dt>대표전화</dt>
          <dd>
            <a href="tel:1600-6300">1666-6300</a>
          </dd>

          <dt>FAX</dt>
          <dd>02)2174-6305</dd>
        </dl>

        <dl class="en">
          <dt>Address</dt>
          <dd>
            15, 70, Gukje Finance-ro, Yeongdeungpo-gu, Seoul, Korea <br />
            ( Yeouido-dong Mi-won Bldg )
          </dd>
          <!-- // -->
          <dt>Representative number</dt>
          <dd>
            <a href="tel:+82-1600-6300">+82-1600-6300</a>
          </dd>
          <!-- // -->
          <dt>FAX</dt>
          <dd>+82 02)2174-6306</dd>
        </dl>
      </div>
    </div>
    <!-- //content -->
  </div>
</template>

<script>
import CommonTop from '@/components/CommonTop.vue'

export default {
  components: {
    CommonTop,
  },
  data() {
    return {
      topItems: {
        sm: 'Contact',
        ko: '오시는 길',
        en: 'Contact',
      },
    }
  },
}
</script>

<style scoped>
.content {
  @apply mt-[50px] px-[14px] pb-[30px];
}
.txt {
  @apply block w-full mt-5 text-[14px] text-[#444] leading-5 tracking-[-0.154px];
}
.addrs_txt {
  @apply block w-full mt-5;
}
.addrs_txt dl {
  @apply flex w-full flex-col items-start;
}
.addrs_txt dl dt {
  @apply text-[14px] font-bold text-[#141414] leading-5;
}
.addrs_txt dl dd {
  @apply text-[14px] text-[#444] leading-5 pb-5;
}
</style>
