<template>
  <div id="promotion">
    <CommonTop :top-items="topItems" />

    <div id="csr">
      <div class="vi"><img src="~/assets/image/csr.png" alt="사회공헌활동"></div>

      <div class="csr_list">
        <div class="list">
          <strong>봉사및후원</strong>
          <div>
            <em>2013.07</em>
            <span class="ko">탈북청소년 대안학교 후원 ((사)여명학교, 2013.7~2016.9)</span>
            <span class="en">탈북청소년 대안학교 후원 ((사)여명학교, 2013.7~2016.9)</span>
          </div>
        </div>
        <!-- // -->
        <div class="list">
          <strong>메세나</strong>
          <div>
            <em>2015</em>
            <span class="ko">문화예술활동 후원(앙상블공간, 한국문화예술위원회)</span>
            <span class="en">문화예술활동 후원(앙상블공간, 한국문화예술위원회)</span>
          </div>
        </div>
        <!-- // -->
      </div>
    </div>
    <!-- // -->
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
        sm: '홍보센터',
        ko: '사회공헌활동',
        en: 'Social Media',
      }
    }
  }
}
</script>

<style scoped>
#promotion > .top {
  @apply !pb-[35px]
}
#csr{
  @apply w-full px-5 pb-[100px]
}
.csr_list{
  @apply w-full pt-6 flex flex-col gap-10
}
.csr_list .list{
  @apply flex flex-col w-full gap-2
}
.csr_list .list strong{
  @apply text-[16px] text-black font-bold
}
.csr_list .list div{
  @apply w-full flex items-start
}
.csr_list .list div em{
  @apply w-[70px] text-[14px] leading-[18px] text-black font-bold
}
.csr_list .list div span{
  @apply w-[calc(100%-70px)] text-[14px] leading-[18px] text-black
}
</style>
