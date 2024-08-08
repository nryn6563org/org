<template>
  <div id="axrasi">
    <section id="sec01" class="section01">
    <CommonTop :top-items="topItem1"></CommonTop>
    <div class="stxt">
      <span class="ko">AI증권사를 위한 씽크풀의 AI통합지원 시스템</span>
      <span class="en">ThinkPool's AI Integration Support System for AI Securities Firms</span>
    </div>

    <div class="vi">
      <img src="~/assets/image/axrassi/rassi.png" alt="" width="320" class="mx-auto">
    </div>
    </section>
    <!-- // -->

    
    <section id="sec02">
      <div class="rassi_tab">
        <button :class="{active : activeTab === 'tab1'}" @click="showTab('tab1')">PMS</button>
        <button :class="{active : activeTab === 'tab2'}" @click="showTab('tab2')">SMS</button>
        <button :class="{active : activeTab === 'tab3'}" @click="showTab('tab3')">TMS</button>
      </div>
      <!-- // -->

      <div class="rassi_tabContent">
        <div v-if="activeTab === 'tab1'" class="tabCont">
          <div class="vi"><img src="~/assets/image/axrassi/pms.png" alt="pms"></div>

          <div class="txt">
            <div class="top">
              <em>AXR 1</em>
              <strong>PMS</strong>
            </div>
            <!-- //top -->

            <div class="cont">
              <span class="ko">
                투자자가 종목 또는 포트폴리오를 선택할 수 있도록 지원하는 시스템 <br>
                개인별 투자 성향이나 투자 목표에 따라 다양한 형태로 구성 가능 <br>
                기본적 분석 기반의 알고리즘, 차트/수급 기술적 분석 기반의 알고리즘, 다양한 형태의 AI알고리즘까지 수용 가능한 오픈형 시스템
              </span>

              <span>*PMS( Picking & Portfolio Management System)</span>
              
              <div class="cnc">
                <a href="#"><img src="~/assets/image/cnc/cnc4.png" width="99" alt="현대차증권"></a>
                <a href="#"><img src="~/assets/image/cnc/cnc5.png" width="87" alt="키움증권"></a>
                <a href="#"><img src="~/assets/image/cnc/cnc6.png" width="82" alt="대신증권"></a>
                <a href="#"><img src="~/assets/image/cnc/cnc7.png" width="100" alt="DB금융투자"></a>
              </div>
              <!-- // -->
            </div>
            <!-- // -->
          </div>
        </div>
        <!-- // -->
         
        <div v-if="activeTab === 'tab2'" class="tabCont">
          <div class="vi"><img src="~/assets/image/axrassi/sms.png" alt="pms"></div>

            <div class="txt">
              <div class="top">
                <em>AXR 2</em>
                <strong>SMS</strong>
              </div>
              <!-- //top -->

              <div class="cont">
                <span class="ko">
                  국내 전종목 및 ETF를 대상으로 최적의 매매 타이밍을 잡아주는<br>
                  종목별 AI시그널 생성 및 운영 시스템<br>
                  SBS 2021년 신년특집 ‘AIvs인간’ 주식 AI대표로 출연 <br>
                  (주식시장 대비 연율 42% 초과수익 달성) <br>
                  투자자문사 등 맞춤형 투자 시스템 제공 <br>
                  (웰스투자자문 2021년부터 2023년말까지 운용수익 92% 달성) <br>
                  NH자산운용 AI엔진 운용 사모펀드 출시 (100억원, 2024.03)
                </span>

                <span>*SMS( Signal Management System)</span>
                
                <div class="cnc">
                  <a href="#"><img src="~/assets/image/cnc/cnc8.png" width="103" alt="블랙넘버스"></a>
                  <a href="#"><img src="~/assets/image/cnc/cnc9.png" width="132" alt="웰스투자자문"></a>
                </div>
                <!-- // -->
              </div>
              <!-- // -->
            </div>
        </div>
        <!-- // -->
         
        <div v-if="activeTab === 'tab3'" class="tabCont">
          <div class="vi"><img src="~/assets/image/axrassi/tms.png" alt="pms"></div>

            <div class="txt">
              <div class="top">
                <em>AXR 3</em>
                <strong>TMS</strong>
              </div>
              <!-- //top -->

              <div class="cont">
                <span class="ko">
                  국내 전종목 및 ETF를 대상으로 최적의 매매 타이밍을 잡아주는<br>
                  종목별 AI시그널 생성 및 운영 시스템<br>
                  SBS 2021년 신년특집 ‘AIvs인간’ 주식 AI대표로 출연 <br>
                  (주식시장 대비 연율 42% 초과수익 달성) <br>
                  투자자문사 등 맞춤형 투자 시스템 제공 <br>
                  (웰스투자자문 2021년부터 2023년말까지 운용수익 92% 달성) <br>
                  NH자산운용 AI엔진 운용 사모펀드 출시 (100억원, 2024.03)
                </span>

                <span>*SMS( Signal Management System)</span>
                
                <div class="cnc">
                  <a href="#"><img src="~/assets/image/cnc/cnc5.png" width="87" alt="키움증권"></a>
                  <a href="#"><img src="~/assets/image/cnc/cnc10.png" width="87" alt="이베스트"></a>
                </div>
                <!-- // -->
              </div>
              <!-- // -->
            </div>
        </div>
        <!-- // -->
      </div>
    </section>
  </div>
</template>
<script>
import CommonTop from '@/components/CommonTop.vue'

export default {
  components: {
    CommonTop
  },
  data () {
    return {
      topItem1 : {
        sm: "AI",
        ko: "AX 라씨",
        en: "AX RASSI"
      },
      activeTab : 'tab1'
    }
  },
  methods: {
    showTab(tab){
      this.activeTab = tab
    }
  }
}
</script>
<style scoped>
.section01, .section03{
  @apply bg-[#EFF2FB] w-full
}
section{
  @apply px-5 pb-[50px]
}
section .top{
  @apply pb-[26px]
}
.stxt{
  @apply w-full text-center pb-[90px] text-[#444] text-[14px]
}
#sec02{
  @apply w-full p-[16px_0_200px]
}
.rassi_tab{
  @apply flex w-full justify-center gap-10
}
.rassi_tab button{
  @apply w-[80px] h-[50px] flex justify-center items-center text-[16px] text-[#9395a1]
}
.rassi_tab button.active{
  @apply border-b-[2px] border-black text-black
}
.rassi_tabContent{
  @apply w-full px-5 mt-[45px]
}
.tabCont{
  @apply w-full 
}
.tabCont .txt{
  @apply w-full pt-[30px]
}
.tabCont .txt .top{
  @apply flex flex-col gap-1 p-0
}
.tabCont .txt .top em{
  @apply text-[12px] text-[#9395a1] indent-[2px]
}
.tabCont .txt .top strong{
  @apply text-[32px] leading-10 font-bold text-black
}
.tabCont .txt .cont{
  @apply mt-3 text-[14px] leading-5 text-[#444] flex flex-col gap-2.5
}
.tabCont .txt .cont .cnc{
  @apply flex w-full flex-wrap gap-2 mt-[25px]
}
.tabCont .txt .cont .cnc a{
  @apply w-[156px] h-[45px] border-[1px] border-[#f0f0f0] rounded-[6px] justify-center items-center flex
}
</style>
