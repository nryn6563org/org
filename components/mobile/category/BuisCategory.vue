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
    <CommonDropdown
      :dropdown-id="'depth1'"
      :menu-items="menuItems"
      @menu-items-click="handleMenuItemClick"
    />
    <!--//depth1 -->
    <CommonDropdown :dropdown-id="'depth2'" :menu-items="currentSubMenuItems" />
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
        {
          id: 'axrassi',
          to: '/axrassi/rassi',
          ko: 'ThinkPool AI',
          en: 'ThinkPool AI',
        },
        { id: 'lbs', to: '/business/lbs/location', ko: '위치기반솔루션', en: 'LBS' },
        { id: 'rms', to: '/business/rm/rms', ko: '리스크관리솔루션', en: 'RMS' },
      ],
      menuItems1: [
        {
          to: '/axrassi/rassi',
          ko: 'AX RASSi',
          en: 'AX RASSi',
        },
        {
          to: '/axrassi/algorithms',
          ko: 'AI Algorithms',
          en: 'AI Algorithms',
        }
      ],
      menuItems2: [
        {
          to: '/business/lbs/location',
          ko: '로그인보호서비스',
          en: 'Login Protection Services',
        },
        { to: '/business/lbs/prevention', ko: '안심키퍼서비스', en: 'Prevention' }
      ],
      menuItems3: [
        {
          to: '/business/rm/rms',
          ko: 'RMS통제시스템',
          en: 'RMS System',
        },
      ],
      currentSubMenuItems: [],
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      // 라우팅이 변경될 때마다 처리
      this.handleMenuItemClick(newRoute)
    },
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
    this.handleMenuItemClick(this.$route)
  },
  methods: {
    handleMenuItemClick(route) {
      const selectedMenuItem = this.menuItems.find((item) =>
        route.path.includes(item.id)
      )

      if (selectedMenuItem.id === 'axrassi') {
        this.currentSubMenuItems = this.menuItems1
      } else if (selectedMenuItem.id === 'lbs') {
        this.currentSubMenuItems = this.menuItems2
      } else if (selectedMenuItem.id === 'rms') {
        this.currentSubMenuItems = this.menuItems3
      } else {
        // 다른 경우에 대한 처리 또는 필요 시 기본 하위 메뉴 설정
        this.currentSubMenuItems = []
      }
    },
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
