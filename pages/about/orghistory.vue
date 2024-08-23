<template>
  <div id="aboutus">
    <CommonTop :top-items="topItems" />
    <!-- //title -->

    <div class="content">
      <div
        class="swiper history_slide"
        role="group"
        aria-label="AI증권사 소개 스와이프"
      >
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <MobileHistorypageHistoryList03 />
          </div>
          <!-- // -->
          <div class="swiper-slide">
            <MobileHistorypageHistoryList02 />
          </div>
          <!-- // -->
          <div class="swiper-slide">
            <MobileHistorypageHistoryList01 />
          </div>
          <!-- // -->
        </div>
      </div>
    </div>
    <!-- //content -->
  </div>
</template>

<script scoped>
import CommonTop from '@/components/CommonTop.vue'

export default {

  components: {
    CommonTop,
  },
  data() {
    return {
      topItems: {
        sm: 'Milestones',
        ko: '연혁',
        en: 'Milestones',
      },
    }
  },
  mounted() {
    const paginationList = ['2015~창립', '2018~2016','현재~2019']
    const paginationListE = ['2015~Establish', '2018~2016', 'Now~2019']
    const script = document.createElement('script')
    script.src =
      'https://fastly.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const swiper = new Swiper('.history_slide', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        effect: 'fade',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (i, className) {
            return (
              '<div class="' +
              className +
              '"><span class="ko">' +
              paginationList[i] +
              '</span><span class="en">' + paginationListE[i] + '</span></div>'
            )
          },
        },
      }).mount()
      //
    }
  },
}
</script>

<style scoped>
.content{
  @apply pt-2.5
}
</style>
