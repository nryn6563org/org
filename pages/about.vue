<template>
  <div id="container" class="sub">
    <SubPage />
    <NuxtChild />
  </div>
</template>

<script>
export default {
  layout: 'custom',
}
</script>

<style scoped>
#container {
  @apply w-full block pt-[50px] snap-y relative;
}
</style>
