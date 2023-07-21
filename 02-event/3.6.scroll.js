// 즉시 실행함수
// IIFE(Immediately Invoked function Expression)

// 1. 이름없이 함수를 생성후 바로 실행하고자 할 때
// function func {....}
//  func()
//  ->
// (function(){....}) ()

// 2. 변수나 함수명의 범위를 제한하고자 할 때
(() => {
  console.log("run");
let count = 3;
window.addEventListener("scroll", (e) => {
  // 문서의 전체 높이
  document.body.clientHeight;
  //window.scrollY:  스크롤된 y축 크기
  //window.innerHeight: 브라우저의 뷰포트 높이

const offset = document.body.clientHeight -( window.scrollY + window.innerHeight);

  
document.querySelector("div").innerHTML = 
 document.body.clientHeight - (window.scrollY + window.innerHeight);

if (offset < 50 ){
console.log("끝점에 가깝다");
// 요소 생성
const div = document.createElement("div");
// 속성 설정
const red = Math.floor(Math.random() * 255);
const green = Math.floor(Math.random() * 255);
const blue = Math.floor(Math.random() * 255);
div.className = ".box";
div.style.backgroundColor = `${red}, ${green}, ${blue}`;
div.innerHTML = count++;  //new sDate().toLocaleString();

// 어떤 위치에 append
document.body.append(div);
}
})
}) ();
