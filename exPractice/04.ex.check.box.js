// 상품 선택 페이지 만들기: HTML form에 여러
//  상품과 그 옆에 checkbox를 놓고, 사용자가 checkbox를
//   클릭하여 상품을 선택할 수 있도록 하세요. 그리고, '선택한 상품 보기' 
//   버튼을 누르면 선택한 상품의 목록이 alert 창이나 
// 페이지의 특정 부분에 표시되도록 JavaScript를 사용하여 구현하세요.
const form = document.querySelector("form");
const input = document.querySelectorAll("input");
// const arr = Array.form(input);
console.log();

const array = Array.from(input);

array.forEach(input => {
  
  input.addEventListener("change",() => {
    if(input.checked){
    const a = input.closest(".box")
      alert(`${a.textContent}를 구매하시겠습니까?`)
    }else{
      alert("체크해제")
    }
  })
  
  
});
