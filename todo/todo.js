const container = document.querySelector("#todo-container")

// 1번째 요구사항 use-case
// 입력창에 메모를 입력하고 추가버튼을 클릭하면 목록이 첫번째에 추가되기
// 입력창에 값이 초기화
// 엔터를 눌러도 추가가 되어야함



// 2번째 use-case
// 목록에서 항목을 클릭하면 클릭한 항목이 삭제



// 버튼을 클릭하면 입력창의 값을 가져온 후 
// 항목을 만들고 목록에 추가

const addItem = () => {
  // 버튼을 클릭하면 작동할 함수를 등록
  
    const input = container.querySelector("input");
    const value = input.value;
      // 입력값 가져오기
      // const value = container.querySelector("input").value;
      // li를 생성하고
      const item = document.createElement("li");
      // 입력값을 textContent로 넣기
      item.textContent = value;
      // item을 ul의 목록에 추가
      container.querySelector("ul").prepend(item);
    
      // 입력값 초기화
      input.value = "";
      
    //항목을 클릭하는 삭제하는 이벤트 핸들러 추가
    item.addEventListener("click", () => {
      item.remove();
    });
    }
    
  

container.querySelector("button").addEventListener("click", addItem);


// 입력창에서 키를 눌렀다가 똇을때 작동할 함수를 등록
container.querySelector("input").addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    addItem();
  }
});



