<template>
  <button @click="goBackPage">
    <img src="~/assets/image/headerClose.png" alt="" width="24">
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
h1 {
}
</style>
