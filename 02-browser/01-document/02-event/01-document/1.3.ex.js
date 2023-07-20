const tbody = document.querySelector("tbody");


for(let tr of tbody.children){
  let i = Array.from(tbody.children).indexOf(tr)
 const td = tr.children[i].style.backgroundColor = "red";
}
