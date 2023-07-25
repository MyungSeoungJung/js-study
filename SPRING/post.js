(()=> {
  fetch("http://localhost:8080/posts")
  .then(response => response.json().then((result) => {
    console.log(result);
    // const li = document.querySelector("li");
    const ul = document.querySelector("ul");
    // const writer = document.querySelector("div");
    // const title = document.querySelector("h3");
    // const content = document.querySelector("p");
    // const time = document.querySelector("footer");

    for(let item of result){
      // document.createElement(li);
      const card = `
      <li>
      <div>${item.no}</div>
      <hr />
      <h3>${item.creatorName}</h3>
      <hr />
      <p>${item.content}</p>
        <hr />
      <footer>${item.createTime}</footer>
    </li>
      `
      ul.insertAdjacentHTML("beforebegin",card)
      // body.innerHTML = card;

    }
  }
  )
 )
})();