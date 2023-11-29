<template>
  <div id="category">
    <button class="home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
      >
        <path
          d="M6.25 0.610214L10.75 3.83983V9.81316H8.25V6.4H4.25V9.81316L1.5 9.81333V3.84L6.25 0.610214ZM6.25 0L2.5 2.56L0 4.26667H1V7.68V10.24L4.75 10.2398V6.82649H7.75V10.2398L11.25 10.2398V4.26646L12 4.26667L6.25 0Z"
          fill="black"
        />
      </svg>
    </button>
    <!-- //home -->
    <CommonDropdown :dropdown-id="'depth1'" :menu-items="menuItems" />
    <!--//depth1 -->
    <CommonDropdown :dropdown-id="'depth2'" :menu-items="menuItems1" />
    <!-- //depth2 -->
  </div>
</template>

<script>
import CommonDropdown from '@/components/CommonDropdown.vue'

export default {
  components: {
    CommonDropdown,
  },
  data() {
    return {
      menuItems: [
        { to: '/about/overview', ko: '기업소개', en: 'About Us' },
      ],
      menuItems1: [
        { to: '/about/overview', ko: '회사개요', en: 'About Us' },
        { to: '/about/ceo', ko: 'CEO메시지', en: 'CEO Message' },
        { to: '/about/vision', ko: '비전', en: 'VISION' },
        { to: '/about/orghistory', ko: '연혁', en: 'History' },
        { to: '/about/patent', ko: '특허', en: 'Patent' },
        { to: '/about/award', ko: '주요수상', en: 'Major Award' },
        {
          to: '/about/certification',
          ko: '주요인증',
          en: 'Major Certification',
        },
        { to: '/about/welfare', ko: '복지제도', en: 'Welfare System' },
        { to: '/about/contact', ko: '오시는길', en: 'Contact' },
        // ... 다른 메뉴 아이템들
      ],
    }
  },
  mounted() {
    const currents = document.querySelectorAll('.current')
    const changes = document.querySelectorAll('.change')
    currents.forEach((current) => {
      current.addEventListener('click', () => {
        current.parentElement
          .querySelector('.droplist')
          .classList.toggle('active')
      })
    })
    changes.forEach((change) => {
      change.addEventListener('click', () => {
        change.parentElement.classList.toggle('active')
      })
    })
  },
}
</script>

<style scoped>
#category {
  @apply sticky top-[50px] left-0 border-t-[1px] border-[#f0f0f0] border-b-[1px] flex items-center bg-white z-20;
}
#category .home {
  @apply h-8 w-9 flex justify-center items-center;
}
#category div {
  @apply w-[calc((100%-36px)/2)] h-8 px-2.5 border-l-[1px] border-[#f0f0f0];
}
</style>
