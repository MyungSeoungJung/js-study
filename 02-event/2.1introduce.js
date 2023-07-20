const btn = document.querySelector("button")

// 이벤트 수신기(함수) 추가 
// 매개변수 앞에 이벤트명 넣어줘야함
btn.addEventListener("click",() => {
  console.log(this);
  alert("클릭");
})

// // 함수의 이름은 함수본체의 대리자
// function sayThanks(){
//   alert("감사합니다")
//   // 이벤트 리스너 제거
//   btn.removeEventListener("click", sayThanks);
// }
// btn.addEventListener("click",sayThanks);
// // 올바른 방법
// btn.onclick = sayThanks;
// // 잘못된 방법, ()는 메소드 실행
// // btn.onclick = sayThanks();


// btn.addEventListener("click", function() {
//   console.log(this);
//   alert("클릭");
// })



