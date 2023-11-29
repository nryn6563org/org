<template>
  <CommonTop :top-items='topItems' />
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
        sm: 'LBS Part',
        ko: '노쇼노',
        en: 'No Show no Service',
      },
    }
  },
}
</script>
