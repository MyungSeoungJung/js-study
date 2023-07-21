const a = document.querySelectorAll("a");

// a[0].addEventListener("click", (e) =>{
//   if(confirm("해당 링크로 이동하시겠습니까?")){
    
//   }else{
//     e.preventDefault();
//   }
// })

// a[1].addEventListener("click", (e) =>{
//   if(confirm("해당 링크로 이동하시겠습니까?")){
    
//   }else{
//     e.preventDefault();
//   }
// })

for(let href of a){
  href.addEventListener("click", (e) => {
    if(confirm("해당 링크로 이동하시겠습니까?")){

    }else{
      e.preventDefault();
    }
  })
}
