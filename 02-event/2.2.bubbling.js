const div = document.querySelector("div");
const p = document.querySelector("p");


div.addEventListener("click",(e) => {
  console.log("---click---");
// event .target : 실제로 이벤트를 발생시킨 요소
  console.log(e.target);
  // evnet.currentTarget: 이벤트 헨들러 실행시킨 요소
  console.log(e.currentTarget);
})

p.addEventListener("click", (event) => {
   // 이벤트를 전파하지 않음
   event.stopPropagation();

  console.log("--p----click---");
  console.log(event.target);
  console.log(event.currentTarget);
 
})