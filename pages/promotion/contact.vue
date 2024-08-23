<template>
  <div id="promotion">
    <CommonTop :top-items="topItems" />

    <div id="contact">
      <div class="txt">
        <span class="ko">
          씽크풀에 궁금한 점이 있으신가요? <br>
          문의사항을 등록해 주시면, 담당자 확인 후 안내해 드리겠습니다.
        </span>
      </div>
      <!-- // -->

      <div class="user_i_list">
        <div class="top">
          <strong>문의사항 등록하기</strong>
          <em>* 표시는 필수 입력 사항입니다. </em>
        </div>
        <!-- top -->

        <div class="list-w">
          <div class="list">
            <strong>분류</strong>
            <div class="rdoList">
              <label for="ct1">
                <input id="ct1" type="radio" name="cat" checked>
                <span>제휴문의</span>
              </label>
              <label for="ct2">
                <input id="ct2" type="radio" name="cat">
                <span>IR문의</span>
              </label>
              <label for="ct3">
                <input id="ct3" type="radio" name="cat">
                <span>채용문의</span>
              </label>
              <label for="ct4">
                <input id="ct4" type="radio" name="cat">
                <span>서비스문의</span>
              </label>
              <label for="ct5">
                <input id="ct5" type="radio" name="cat">
                <span>기타문의</span>
              </label>
            </div>
          </div>
          <!-- list -->

          <div class="list">
            <strong>성명</strong>
            <div>
              <input id="" type="text" name="" placeholder="성명을 입력해주세요.">
            </div>
          </div>
          <!-- list -->

          <div class="list">
            <strong>소속회사</strong>
            <div>
              <input id="" type="text" name="" placeholder="소속회사명을 입력해주세요.">
            </div>
          </div>
          <!-- list -->

          <div class="list">
            <strong>전화번호</strong>
            <div>
              <input id="" type="text" name="" placeholder="전화번호를 입력해주세요.">
            </div>
          </div>
          <!-- list -->

          <div class="list">
            <strong>이메일</strong>
            <div>
              <input type="text" placeholder="답변 받을 메일주소를 입력해주세요.">
            </div>
          </div>
          <!-- list -->

          <div class="list">
            <strong>제목</strong>
            <div>
              <input type="text" placeholder="제목을 입력해주세요.">
            </div>
          </div>
          <!-- list -->

          <div class="list">
            <strong>문의사항</strong>
            <div>
              <textarea id="" name="" cols="30" rows="10" placeholder="문의사항을 입력해주세요."></textarea>
            </div>
          </div>
          <!-- list -->
        </div>
        <!-- list-w -->
         <div class="agree">
          <label for="">
            <input id="" type="checkbox" name="">
            <div>
              <span>씽크풀의 개인정보 처리방침에 동의 합니다.</span>
              <a href="#">자세히보기</a>
            </div>
          </label>
          <label for="">
            <input id="" type="checkbox" name="">
            <div>
              <span>[선택] 마케팅 이용 및 뉴스레터 수신에 동의합니다.</span>
            </div>
          </label>
         </div>
         <!-- agree -->
      </div>

      <button>등록하기</button>
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
        sm: 'Inquiry',
        ko: '문의하기',
        en: 'Inquiry',
      }
    }
  }
}
</script>

<style scoped>
#promotion > .top {
  @apply !pb-[50px]
}
#contact{
  @apply w-full px-5 pb-[100px]
}
#contact .txt{
  @apply w-full text-[14px] leading-[18px] text-[#141414] pb-[35px]
}
#contact .list-w{
  @apply w-full border-t-[1px] border-t-black mt-2.5 flex flex-col pb-5 border-b-[1px] border-b-[#e6e6eb]
}
#contact .user_i_list .top{
  @apply flex w-full justify-between items-center
}
#contact .user_i_list .top strong{
  @apply text-black text-[16px] font-bold
}
#contact .user_i_list .top em{
  @apply text-[#FF1818] text-[14px] !block
}
#contact .list-w .list{
  @apply pt-5 flex items-start
}
#contact .list-w .list:first-child strong{
  background:none;
}
#contact .list-w .list strong{
  @apply w-[120px] h-[35px] leading-[35px] text-[16px] text-black font-bold flex gap-2.5
  after:bg-[url('~/assets/image/input_bullet.png')] after:bg-no-repeat after:bg-[0_12px] after:bg-[length:8px_8px] after:content-[''] after:w-5 after:h-[35px]
}
#contact .list-w .list div{
  @apply w-[calc(100%-120px)]
}
.rdoList{
  @apply flex flex-wrap w-full gap-x-[30px] gap-y-2.5 py-[3px]
}
.rdoList label{
  @apply flex gap-[6px] items-center
}
#contact .list-w .list div input[type="text"]{
  @apply w-[calc(100%-20px)] border-[1px] border-[#E6E6EB] rounded-[8px] p-2.5 placeholder:text-[14px] placeholder:text-[#9395a1] text-[14px] text-black
}
#contact .list-w .list div textarea{
  @apply w-[calc(100%-20px)] h-[80px] border-[1px] border-[#E6E6EB] rounded-[8px] p-2.5 placeholder:text-[14px] placeholder:text-[#9395a1] text-[14px] text-black
}
.agree{
  @apply pt-5 w-full flex flex-col gap-2.5
}
.agree label{
  @apply w-full flex gap-3 items-start
}
.agree label input{
  @apply mt-[3px]
}
.agree label div{
  @apply flex flex-col
}
.agree label div span{
  @apply text-[14px] leading-[18px] text-[#1e1e1e]
}
.agree label div a{
  @apply underline text-[14px] text-[#9395a1] leading-[18px]
}

#contact button{
  @apply w-[174px] h-10 bg-[#5365ff] text-[16px] text-white m-[30px_auto_0] flex justify-center items-center rounded-[8px]
}
</style>
