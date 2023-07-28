// 추가 함수
function creatLi(no,title,creatorName,content,createdTime,image){
const li = document.createElement("li");
li.dataset.no = no; 
li.innerHTML =
`
<div>
<p>게시물 번호 : ${no}</p>
<hr/>
<div>제목:${title}</div">
<hr />
<h3>${content}</h3>
<hr />
<div><img width="auto" height="30" src="${image}">${creatorName}</div>
  <hr />
<footer>${new Date(createdTime).toLocaleString()}</footer>
</div>
`;
return li;
}

// 서버 fetch
(async()=> {
  const response =await fetch("http://localhost:8080/posts");

  const result = await response.json();


    const ul = document.querySelector("ul");


    console.log(result);
    for(let item of result){
      ul.append(creatLi(item.no,
         item.title, 
         item.creatorName, 
         item.content, 
         item.createdTime,
         item.image,
         ));
    }
}
)();



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
})

//---------------강사님 풀이--------------------
// (async() => {
//   const body = document.body;
//   const url = "http://localhost:8080/posts";
//   1.fetch
//   const response = await fetch(url);
//   const result = response.json();
//   console.log(result);
//   // 배열 메서드를 사용하기 위해서
//   const data = Array.from(result);
//   console.log(data);

//   2. ---데이터 배열 반복문으로 html 문자열 만들고 컨테이너에 추가
//   data.forEach(item => {
//     const template = /*html */`
//     <div style ="width: 500px" data-no ="${item.no}">
//       <em> ${item.creatorName}</em>
//       <hr>
//       <h3>${item.tittle}</h3>
//       <p>${item.content}</p>
//       <hr>
//       <small>${item.createTime}</small>
//     </div>
// `;
// body.insertAdjacentHTML("afterbegin",item);
//   })
// })();