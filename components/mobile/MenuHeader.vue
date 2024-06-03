<template>
  <header>
    <MobileHeaderThinkLogo />
    <!-- logo -->
    <MobileHeaderSideClose />
    <!-- side menu button -->
  </header>
</template>

<style scoped>
header {
  @apply w-full h-[50px] px-5 flex justify-between items-center fixed inset-0 
  z-30 bg-white max-w-xl mx-auto;
}
</style>
