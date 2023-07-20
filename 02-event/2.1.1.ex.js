   const title =  document.querySelector("h2")
   const list = document.querySelector("ul")
   const arrow = document.querySelector("i")

   title.addEventListener("click", () => {
    // 토글링?
    list.hidden = !list.hidden
    arrow.style.transform = !list.hidden ? "rotate(90deg)" : "rotate(0deg)";
   });
