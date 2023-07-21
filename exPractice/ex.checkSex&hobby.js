// 성별과 취미 선택 설문조사 만들기: HTML form에 "당신의 성별은 무엇인가요?"라는 질문을 던지고, 
// "남성", "여성" 항목을 radio button으로 제공하세요.
//  또한 "당신의 취미를 선택하세요."라는 질문을 던지고,
//   "독서", "운동", "음악 감상", "영화 감상" 등의 항목을 checkbox로 제공하세요
//   그리고, '제출' 버튼을 누르면 선택한 성별과 취미가 alert 창이나 페이지의 특정 부분에 표시되도록
//    JavaScript를 사용하여 구현하세요.

const form = document.querySelectorAll("form");
const input = document.querySelectorAll("input");
const btn = document.querySelector("button");
const containDiv = document.querySelector("div:last-of-type")
console.log(containDiv);
btn.addEventListener("click",() => {
  // checked된 애들만 가져오기
  // 라디오 타입만
  const radioInput = document.querySelectorAll("input[type='radio']:checked");
  // alert(radioInput)
  console.log(radioInput);
  // checkbox타입만
  const checkInput = form[1].querySelectorAll("input:checked");
  // alert(checkInput)
  // 체크라디오 배열
  const radioarr = Array.from(radioInput);
 // 체크박스 배열
  const checkarr = Array.from(checkInput);


  // 밑에 선택된 애들 밀어 넣기
  const div = document.createElement("div");

  for (let i = 0; i < checkarr.length; i++) {
    const checkedItem = checkarr[i].value;
    const radioValue = radioarr[i] ? radioarr[i].value : "";
    div.textContent = `${checkedItem} & ${radioValue}`;
    containDiv.appendChild(div.cloneNode(true));
  }
});