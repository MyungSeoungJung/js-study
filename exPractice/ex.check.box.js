/*
선호하는 프로그래밍 언어 설문조사 만들기
: HTML form에 "당신이 좋아하는 프로그래밍 언어를 선택하세요."라는
 질문을 던지고,
  "Python", "JavaScript", "Java", "C++" 등의 
 항목을 radio button으로 제공하세요. 
 그리고, '제출' 버튼을 누르면 선택한 프로그래밍 
 언어가 alert 창이나 페이지의 특정 부분에 
 표시되도록 JavaScript를 사용하여 구현하세요.
*/

const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const btn = document.querySelector("button");

// 체크된 배열

  
  btn.addEventListener("click", () => {
    // 버튼 클릭을 실행할때 셀렉터로 input의 checked된 애들을 선택
    const checkInput = document.querySelectorAll("input:checked");
    // 그 다음 for문으로 check된 애들만 이미 뽑아져 있는 상태니까
    // 2개이상이면 for으로 2번 출력
  for(let check of checkInput){
    alert(`${check.value}를 선택하셨습니다`)
  }
})




