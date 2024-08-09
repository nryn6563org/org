<template>
  <div id="ir">
    <CommonTop :top-items="topItems" />

    <div id="finance">
      <div class="tblbox">
        <div class="top">
          <strong class="ko">재무상태표</strong>
          <strong class="en">Statement of <br>financial position</strong>
          <em class="ko">(단위 : 백만원)</em>
          <em class="en">(Unit : Million KRW)</em>
        </div>
        <!-- // -->
         
        <div class="tbl">
          <div class="w-[186px]">
            <table width="100%">
              <colgroup>
                <col width="56">
                <col width="*">
              </colgroup>
              <thead>
                <tr>
                  <th colspan="2">
                    <span class="ko">과목</span>
                    <span class="en">Accounting categories</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowspan="3">
                    <span class="ko">자산</span>
                    <span class="en">Assets</span>
                  </th>
                  <td>
                    <span class="ko">유동자산</span>
                    <span class="en">Current assets</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="ko">비유동자산</span>
                    <span class="en">Non-current assets</span>
                  </td>
                </tr>
                <tr class="gubun">
                  <td>
                    <span class="ko">자산총계</span>
                    <span class="en">Total assets</span>
                  </td>
                </tr>
                <tr>
                  <th rowspan="3">
                    <span class="ko">부채</span>
                    <span class="en">Liabilities</span>
                  </th>
                  <td>
                    <span class="ko">유동부채</span>
                    <span class="en">Current liabilities</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="ko">비유동부채</span>
                    <span class="en">Non-current <br>liabilities</span>
                  </td>
                </tr>
                <tr class="gubun">
                  <td>
                    <span class="ko">부채총계</span>
                    <span class="en">Total liabilities</span>
                  </td>
                </tr>
                <tr>
                  <th rowspan="6">
                    <span class="ko">자본</span>
                    <span class="en">Equity</span>
                  </th>
                  <td>
                    <span class="ko">자본금</span>
                    <span class="en">Issued capital</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="ko">자본잉여금</span>
                    <span class="en">Capital surplus</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="ko">기타자본항목</span>
                    <span class="en">Elements of other <br>stockholder's equity</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="ko">기타포괄손익누계액</span>
                    <span class="en">Other Comprehensive income/loss accumulated amount</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="ko">이잉잉여금(결손금)</span>
                    <span class="en">Retained earnings (deficit)</span>
                  </td>
                </tr>
                <tr class="gubun">
                  <td>
                    <span class="ko">자본총계</span>
                    <span class="en">Total equity</span>
                  </td>
                </tr>
                <tr class="gubun">
                  <th>
                    <span class="ko"></span>
                    <span class="en"></span>
                  </th>
                  <td>
                    <span class="ko">부채와 자본총계</span>
                    <span class="en">Total equity and liabilities</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="w-[calc(100%-186px)] overflow-x-auto">
            <table width="240px">
              <colgroup>
                <col width="80">
                <col width="80">
                <col width="*">
              </colgroup>
              <thead>
                <tr>
                  <th>2023</th>
                  <th>2022</th>
                  <th>2021</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr class="gubun">
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr class="gubun">
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr class="gubun">
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
                <tr class="gubun">
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                  <td class="text-end">11,587</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- // -->
      </div>

      <div class="tblbox">
        <div class="top">
          <strong class="ko">포괄손익계산서</strong>
          <strong class="en">
            Statement of comprehensive income
          </strong>
          <em class="ko">(단위 : 백만원)</em>
          <em class="en">(Unit : Million KRW)</em>
        </div>
        <!-- // -->
         
        <div class="tbl">
          <div class="w-[130px]">
            <table width="100%" class="nogubun">
              <colgroup>
                <col width="130">
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <span class="ko">과목</span>
                    <span class="en">Accounting categories</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <span class="ko">영업수익</span>
                    <span class="en">Revenue</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">영업비용</span>
                    <span class="en">Operating expense</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">영업이익(손실)</span>
                    <span class="en">Operating income(loss)</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">금융수익</span>
                    <span class="en">Finance income</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">금융원가</span>
                    <span class="en">Finance costs</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">영업외수익</span>
                    <span class="en">non-operating income</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">영업외비용</span>
                    <span class="en">non-operating expenses</span>
                  </th>
                </tr>
                <tr class="">
                  <th>
                    <span class="ko">관계기업투자관련 <br>이익(손실)</span>
                    <span class="en">Other income (expense) from subsidiaries, jointly controlled entities and associates</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">법인세비용차감전<br>순이익(손실)</span>
                    <span class="en">Profit (loss) 
                      before tax</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">법인세비용(수익)</span>
                    <span class="en">Tax expense (income)</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">당기순이익(손실)</span>
                    <span class="en">Profit (loss)</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">기타포괄손익</span>
                    <span class="en"></span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">확정급여제도의<br>재측정요소</span>
                    <span class="en">Other comprehensive income</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">기타포괄손익 공정<br>가치측정 금융자산</span>
                    <span class="en">Remeasurement of net defined benefit liabilities, net of tax</span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span class="ko">총포괄손익</span>
                    <span class="en">Changes in reserve of gains and losses on financial assets measured at fair value through other comprehensive income</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="w-[calc(100%-130px)] overflow-x-auto">
            <table width="240px">
              <colgroup>
                <col width="80">
                <col width="80">
                <col width="*">
              </colgroup>
              <thead>
                <tr>
                  <th>2023</th>
                  <th>2022</th>
                  <th>2021</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
                <tr>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                  <td class="text-end">11,581</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- // -->

        <div class="dwn">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.4974 11.6666C17.2764 11.6666 17.0644 11.7544 16.9081 11.9107C16.7519 12.067 16.6641 12.2789 16.6641 12.5V15.8333C16.6641 16.0543 16.5763 16.2663 16.42 16.4225C16.2637 16.5788 16.0517 16.6666 15.8307 16.6666H4.16406C3.94305 16.6666 3.73109 16.5788 3.57481 16.4225C3.41853 16.2663 3.33073 16.0543 3.33073 15.8333V12.5C3.33073 12.2789 3.24293 12.067 3.08665 11.9107C2.93037 11.7544 2.71841 11.6666 2.4974 11.6666C2.27638 11.6666 2.06442 11.7544 1.90814 11.9107C1.75186 12.067 1.66406 12.2789 1.66406 12.5V15.8333C1.66406 16.4963 1.92745 17.1322 2.3963 17.6011C2.86514 18.0699 3.50102 18.3333 4.16406 18.3333H15.8307C16.4938 18.3333 17.1297 18.0699 17.5985 17.6011C18.0673 17.1322 18.3307 16.4963 18.3307 15.8333V12.5C18.3307 12.2789 18.2429 12.067 18.0867 11.9107C17.9304 11.7544 17.7184 11.6666 17.4974 11.6666ZM9.40573 13.0916C9.48498 13.1675 9.57844 13.227 9.68073 13.2666C9.78048 13.3107 9.88834 13.3335 9.9974 13.3335C10.1065 13.3335 10.2143 13.3107 10.3141 13.2666C10.4164 13.227 10.5098 13.1675 10.5891 13.0916L13.9224 9.75829C14.0793 9.60137 14.1675 9.38854 14.1675 9.16663C14.1675 8.94471 14.0793 8.73188 13.9224 8.57496C13.7655 8.41804 13.5526 8.32988 13.3307 8.32988C13.1088 8.32988 12.896 8.41804 12.7391 8.57496L10.8307 10.4916V2.49996C10.8307 2.27895 10.7429 2.06698 10.5867 1.9107C10.4304 1.75442 10.2184 1.66663 9.9974 1.66663C9.77638 1.66663 9.56442 1.75442 9.40814 1.9107C9.25186 2.06698 9.16406 2.27895 9.16406 2.49996V10.4916L7.25573 8.57496C7.17803 8.49726 7.08579 8.43563 6.98427 8.39358C6.88275 8.35153 6.77395 8.32988 6.66406 8.32988C6.55418 8.32988 6.44537 8.35153 6.34385 8.39358C6.24234 8.43563 6.15009 8.49726 6.0724 8.57496C5.9947 8.65266 5.93306 8.7449 5.89101 8.84642C5.84896 8.94794 5.82732 9.05674 5.82732 9.16663C5.82732 9.27651 5.84896 9.38532 5.89101 9.48683C5.93306 9.58835 5.9947 9.68059 6.0724 9.75829L9.40573 13.0916Z" fill="#B5B5B6"/>
            </svg>
            <span class="ko">결산공고.pdf</span>
          </button>
        </div>
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
        sm: 'Financials',
        ko: '재무정보',
        en: 'Financials',
      }
    }
  }
}
</script>

<style scoped>
#ir > .top {
  @apply !pb-[35px]
}
#finance{
  @apply w-full flex flex-col gap-[30px] pb-[100px]
}
.tblbox{
  @apply w-full flex flex-col gap-4
}
.tblbox .top{
  @apply flex w-full justify-between items-center px-5
}
.tblbox .top strong{
  @apply text-black text-[16px]
}
.tblbox .top em{
  @apply text-[#9395a1] text-[14px]
}
.tblbox .tbl{
  @apply w-full pl-5 flex
}
.tblbox .tbl table thead th{
  @apply border-t-[1px] border-b-[1px] border-[#dcdcdc] bg-[#f0f0f0] text-[14px] text-[#999] font-normal leading-[18px] h-10
}
.tblbox .tbl table tbody th{
  @apply border-b-[1px] border-[#dcdcdc] bg-[#FAFAFC] text-[14px] leading-[18px] text-black h-[40px] font-normal
}
.tblbox .tbl table.nogubun tbody th{
  @apply border-[#f0f0f0] text-start pl-2
}
.tblbox .tbl table tbody td{
  @apply h-10 text-black border-b-[1px] border-[#f0f0f0] px-2 text-[13px]
}
.tblbox .tbl table tbody .gubun td{
  @apply border-b-[1px] border-[#dcdcdc]
}
.dwn{
  @apply w-[calc(100%-40px)] mx-5 mt-[30px] h-[40px] border-[1px] border-[#f0f0f0] rounded-[6px] px-4
}4
.dwn button{
  @apply flex gap-2 h-10 items-center text-[14px] text-black
}
</style>
