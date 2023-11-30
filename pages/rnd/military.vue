<template>
  <CommonTop :top-items="topItems" />
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
        smk: '국가 R&D',
        sme: 'National R&D',
        ko: '로그인 도용방지 시스템',
        en: 'Login Abuse Prevention System',
      },
    }
  },
}
</script>
