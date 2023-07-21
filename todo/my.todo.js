const container = document.querySelector("#container");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
//input의 값을 받아서  버튼 클릭하면 요소 추가
// 최신게 앞으로 오게
// 엔터로 추가

// li를 추가하는 함수를 만듬 매게변수로 호출할수 있게끔
const addItem = () => {
  const item = document.createElement("li")
  item.textContent = input.value;
  ul.prepend(item);

  input.value = "";

  
// 해당 li누르면 삭제
item.addEventListener("click", () => {
  item.remove();
})
}


// 버튼의 이벤트 추가 클릭하면 addItem 실행
btn.addEventListener("click",() => addItem)

const id = input.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    // keydown 누른 키가 Enter라면 addItem 함수 실행
  addItem();
  }
  
  })



