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
        smk: '기업부설연구소',
        sme: '',
        ko: '병역특례',
        en: 'Military Service Exemption',
      },
    }
  },
}
</script>
