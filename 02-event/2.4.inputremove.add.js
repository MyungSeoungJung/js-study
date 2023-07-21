const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.textContent = prompt("게시글 제목을 입력해주세요", " ");
  document.body.append(div);
})