(()=> {
  const form = document.forms[1];
  const engine = form.querySelector("select");

const actionUrl = {
  google:"https://www.google.com/search",
  daum : "https://search.daum.net/search",
  bing : "https://www.bing.com/search"
}

  form.addEventListener("submit",(e)=>{
    console.log(e);
    // 기본 제출 동작을 막음.
    e.preventDefault();
    // url 설정
   form.action = actionUrl[engine.value];
   form.submit();
  //  form내부의 입력 요소에 입력값을 초기화
   form.reset();

    console.log(engine.value);
  })

})()


//     https://www.google.com/search
//     https://search.daum.net/search
//     https://www.bing.com/search