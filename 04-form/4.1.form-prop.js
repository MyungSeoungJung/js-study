(() => {
  const ageForm = document.querySelector("form");
  const checkedFruits = ageForm.querySelectorAll("input[name = 'fruits']:checked ");
  console.log(checkedFruits);

  const ages = ageForm.querySelectorAll("input[name = 'age']");
  console.log(ages);
  // 셀렉터로 체크된 입력 요소만 이름속성을 탐색
  const checkedAge = ageForm.querySelector("input[name = 'age']:checked");
  // 선택된 값 배열로 변환
  const values = Array.from(checkedFruits).map(check => check.value);



// input[name = 'age']:checked = css 선택자
  // 반복문으로 체크된 요소를 탐색
  for(let age of ages){
    if(age.checked){
      console.log(checkedAge.value);
    }
  }
})
  // DOM API 탐색해서 라디오 값을 조회
  // 라디오 값: 그룹목록중에서 선택된 라디오의 값
  // document.forms[0].element.age
// const ageForm = document.forms[0]
// const ages = ageForm.elements["age"]
// console.log(ages);
