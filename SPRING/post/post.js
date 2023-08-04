// 템플릿
function creatLi(no,title,creatorName,content,createdTime,image){
const li = document.createElement("li");
li.dataset.no = no; 
li.innerHTML =
`
<div>
<p>게시물 번호 : ${no} <button class ="modifybutton">수정</button></p>
<hr/>
<p>제목 </p><div>${title}</div>
<hr>
<h3>${content}</h3>
<hr />
<div><img width="auto" height="30" src="${image}">${creatorName}</div>
  <hr />
<footer>${new Date(createdTime).toLocaleString()}</footer>
</div>
`;
return li;
}

let currentPage = 0; // 현재 페이지 번호
let isLastPage = false; // 마지막 페이지 인지 여부
const PAGE_SIZE = 9; // 고정된 페이지 사이즈
let currentQuery = ""; // 현재 검색 키워드

async function getPagedList(page, query) {
  let url = "";
  // 검색 조건이 있다.
  if (query) { // query로 url특정해도 어떻게 되는지
    url = `http://localhost:8080/posts/paging/search?page=${page}&size=${PAGE_SIZE}&query=${query}`;
  } else {
    url = `http://localhost:8080/posts/paging?page=${page}&size=${PAGE_SIZE}`;
  }
  
  const response = await fetch(url);
  console.log(response);
  const result = await response.json();
  console.log(result);
 
  const ul = document.querySelector("ul");

    // 목록 초기화
    ul.innerHTML = "";
    for (let item of result.content) {
      ul.append(
       creatLi(
        item.no,
         item.title, 
         item.creatorName, 
         item.content, 
         item.createdTime,
         item.image,
        )
      );
    }
    currentPage = result.number; // 현재 페이지 설정
    isLastPage = result.last; // 마지막 페이지 여부
  

  // 이전/다음 버튼 활성화 처리
  setBtnActive();
}


// 이전/다음 버튼 활성화 여부 처리
function setBtnActive() {
  const buttons =
   document.querySelectorAll("#pageBtn button");
  

  const btnPrev = buttons[0];
  const btnNext = buttons[1];
  // 첫번째 페이지이면 이전 버튼 비활성화
  if (currentPage === 0) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
  // 마지막 페이지이면 다음 버튼 비활성화
  if (isLastPage) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}


(() => {
  window.addEventListener(
    "DOMContentLoaded",
    () => {
      // 첫번째 페이지 조회
      getPagedList(0);
    }
  );
})();


// 이전/다음 페이징
(() => {
  // 이전/다음 버튼 선택
  const buttons =
  document.querySelectorAll("#pageBtn button");
 
  const btnPrev = buttons[0];
  const btnNext = buttons[1];

  // 이전 버튼
  btnPrev.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage > 0 &&
      getPagedList(currentPage - 1, currentQuery);
  });
  // 다음 버튼
  btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    !isLastPage &&
      getPagedList(currentPage + 1, currentQuery);
  });
})();

// 검색 기능
(() => {
  const txtQuery =
    document.querySelector("#search input");
  const btnSearch =
    document.querySelector("#search button");
  btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    currentQuery = txtQuery.value;
    getPagedList(0, currentQuery);
  });

  txtQuery.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.key.toLocaleLowerCase() === "enter") {
      currentQuery = txtQuery.value;
      getPagedList(0, currentQuery);
    }
  });
})();

// // 검색조건 초기화
// (() => {
//   const btnReset =
//     document.forms[2].querySelectorAll(
//       "button"
//     )[1];
//   btnReset.addEventListener("click", (e) => {
//     e.preventDefault();

//     // 검색조건 입력박스 초기화
//     document.forms[2].reset();

//     // 검색조건값 초기화
//     currentQuery = "";

//     // 검색조건이 초기화되면 0번페이지에서 다시 조회
//     getPagedList(0, currentQuery);
//   });
// })();


// get 이벤트 ---------------------
// (async()=> {
//   const response =await fetch("http://localhost:8080/posts");

//   const result = await response.json();


//     const ul = document.querySelector("ul");


//     for(let item of result){
//       ul.append(creatLi(
//         item.no,
//          item.title, 
//          item.creatorName, 
//          item.content, 
//          item.createdTime,
//          item.image,
//          ));
//     }
// }
// )();



// 추가폼
const addInput = document.querySelector("button:nth-of-type(1)");
const removeBtn = document.querySelector("#removeBtn");
const remove = document.querySelector("#remove")
const title = document.querySelector("input:nth-of-type(1)")
const content = document.querySelector("textarea");
const file = document.querySelector("#file")
console.log(file);

//-----------추가버튼 POST이벤트 ---------------------------
addInput.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value === null || title.value == "") {
    alert("제목을 입력해주세요.");
    return;
  }else{
    if( content.value === null || content.value == ""){
      alert("내용을 입력해주세요.");
    return;
    }
  }
  const reader = new FileReader();
  reader.addEventListener("load", async(e) => {
    
  const image = e.target.result;
 // fetch로 보낸 response에 응답객체 반환
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      // 나 json이야
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: title.value,
      content: content.value,
      image,
    }),
  }
  );
  const result = await response.json();
  const { data } = result;
  const ul = document.querySelector("ul");

  ul.prepend(creatLi(
    data.no,
    data.title,
    data.creatorName,
    data.content,
    data.createdTime,
    data.image,
 ));

  title.value= "";
  content.value = "";

  })

   reader.readAsDataURL(file.files[0]);

}
);


// ------------------삭제 폼------------------------
removeBtn.addEventListener("click",async()=>{
  fetch(`http://localhost:8080/posts/${remove.value}`,{
    method: "DELETE",
  })
  const no = document.querySelector(`li[data-no="${remove.value}"]`);
if(!no){
  alert("일치하는 번호가 없습니다")
}
no.remove();
remove.value = "";
});

// ---------------수정 폼----------------------------
(()=>{
const ul = document.querySelector("ul");

ul.addEventListener("click",(e)=> {
  if(e.target.classList.contains("modifybutton")){
     // jsdoc type 힌트를 넣어줌 = 자동완성하기 위해
        /** @type {HTMLButtonElement} */
        // 클릭한 버튼의 부모 부모 부모 즉 li선택
    const selectCard = e.target.parentElement.parentElement.parentElement;
    console.log(selectCard);

    // 클릭한 버튼의 content값 가져오기
    const content = selectCard.querySelector("h3")
    const title = selectCard.querySelector("div > div")


    // [이벤트 위임]수정 클릭하면 보달모달 레이어 띄우기
        /** @type {HTMLDivElement} */
        const layer = document.querySelector("#modify-layer");
        layer.hidden = false;


        // 모달박스 입력창 접촉
   const modalTitleInput = document.querySelector("#modify-box input:nth-of-type(1)");
   const modalContentInput = document.getElementById("modi");
            // 왜 2번째 인풋 null이 뜨냐고
    //  const modalContentInput = document.querySelector("#modify-box input:nth-of-type(2)");
    //  console.log(modalContentInput);


    // 기존에 있던 값 모달창 입력창에 넣기
    modalTitleInput.value = title.textContent;
    modalContentInput.value = content.textContent;

    const button = layer.querySelectorAll("button");
    console.log(button[0]);
    console.log(button[1]);
    
    button[0].addEventListener("click", async(e) => {
      e.preventDefault();  //왜 e.target.preventDefault하면 Uncaught오류가 뜨는지
      title.textContent = modalTitleInput.value;
      content.textContent = modalContentInput.value;
      //데이터 특정하기 위한 li의 dataset.no속성 뽑아오기
      const no = document.querySelector("li").dataset.no;
      const response = await fetch(`http://localhost:8080/posts/${no}`,{
      method : "PUT",
      headers : {
        "content-type": "application/json",
      },
      body:JSON.stringify({
        title : title.textContent,
        content : content.textContent,
      }),
      });

      layer.hidden = true;
    })
}  //if문
});//ul.addEventListener
})(); // 즉시


// -------------------수정--------------------------

