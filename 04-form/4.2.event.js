(()=> {
  const input = document.querySelector("input")
// 입력 요소를 클릭하여 프롬포트 활성화 됐을때
  input.addEventListener("focus",(e) => {
    console.log("focus");
    // console.log(e);
  })
// focus 상태에서 다른 요소나 다른 곳으로 focus가 이동됐을 이벤트 발생
input.addEventListener("blur",(e) =>{
console.log("blur");
// console.log(e);
  })
  // 입력창 입력중 input 이벤트 발생
  input.addEventListener("input",(e) => {
    console.log("input");
    // console.log(e);
  })
// blur가 될때 value 속성값이 바뀌면 발생
  input.addEventListener("change",() => {
    console.log("change");
  })

  // 클립보드에 있는 내용을 붙일 때
  // blur가 될때 value 속성값이 바뀌면 발생
  input.addEventListener("paste",(e) => {
    console.log("paste");
  })



})()