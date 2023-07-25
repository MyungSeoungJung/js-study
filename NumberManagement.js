// (async()=> {
//   // fetch
// const response = await fetch("http://localhost:8080/contacts");
// const result = await response.json();

// })();

(()=> {
  // fetch(...)
  // http접속을 통해서 데이터를 가져오거나 보내
  // promise
  // promise 함수는 처리를 완료됐을 처리함수와 오류일 때 처리함수를 매개변수를 받는 함수
  // return new Promise(...)

  //1. UI를 처리하는 컨텍스트
  console.log(1);

  // 2.네트워크 요청을 처리하는 컨텍스트
    // 네트워크 요청이 완료되면 .then((respons)=> {}) then의 함수가 실행됨
    // 응답객체를 매개변수로 넘겨준다.
fetch("http://localhost:8080/contacts").then
// res.json() -> json 응답을 자바스크립트 객체(배열)로 변환

// 결과가 배열
(response => response.json()
.then((result)=> {console.log(result);

  const tbody = document.querySelector("tbody");

  // 배열 반복을 해서 tr만든 다음 tbody 가장 마지막 자식에 추가
for(let item of result){
  const template = `<tr data-name="${item.name}">
  <td>${item.name}</td>
  <td>${item.phone}</td>
  <td>${item.email}</td>
  </tr>`
  tbody.insertAdjacentHTML("afterbegin",template)
}

}));
// 객체(배열로 변환된 값을 사용)


  //3. UI를 처리하는 컨텍스트
  // 네트워크 요청처리는 처리시간이 길다
  // UI처리와 네트워크 처리를 같은 컨텍스트에서
  // 네트워크 요청처리가 끝날떄까지 브라우저는 
console.log(3);

// 함수 선언식
// async function asyncTask(){
// }

// 함수 표현식
// const asyncTask = async () => {

// }
// asyncTask ();

})();

// 추가폼
(() => {
  const form = document.forms[0];
  const inputs = form.querySelectorAll("input");

  const name = inputs[0];
  const phone = inputs[1];
  const email = inputs[2];

  const add = form.querySelector("button");

  add.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (phone.value === "") {
      alert("전화번호를 입력해주세요.");
      return;
    }

    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    // 삭제할 때 사용하려고 데이터 속성을 추가함
    tr.dataset.name = name.value;

    tr.innerHTML = `
    <td>
      ${name.value}
    </td>
    <td>
      ${phone.value}
    </td>
    <td>
      ${email.value}
    </td>`;

    tbody.prepend(tr);
    form.reset();
  });
})();

// 삭제폼
(() => {
  const form = document.forms[1];

  const name = form.querySelector("input");
  const del = form.querySelector("button");

  del.addEventListener("click", (e) => {
    e.preventDefault();
    const tr = document.querySelector(
      `tr[data-name="${name.value}"]`
    );

    if (!tr) {
      alert("해당 이름의 연락처 없습니다.");
      return;
    }

    tr.remove();

    form.reset();
  });
})();