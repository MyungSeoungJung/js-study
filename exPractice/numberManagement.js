(()=> {
  // fetch
const response = await fetch("http://localhost:8080/contacts");
const result = response.json();

})();

const nameInput = document.querySelector("div input:nth-of-type(1)");
const phone = document.body.querySelector("div input:nth-of-type(2)");
const email = document.body.querySelector("div input:nth-of-type(3)");
const addBtn = document.querySelector("button:nth-of-type(1)");
const removeBtn = document.querySelector("#remove");
const removeInput = document.querySelector("#removeContactName");

const arr = [];
addBtn.addEventListener("click", () => {
 const li = document.createElement("li");
//  li.textContent = `${nameInput.value},${phone.value},${email.value}`;
user = {
  name: nameInput.value,
  phone: phone.value,
  email: email.value
}
arr.push(user)
li.innerHTML = `${user.name} | ${user.phone} | ${user.email}`;
// li.setAttribute("liUser", JSON.stringify(user));
 document.querySelector("ul").prepend(li);
 li.setAttribute("data-name",user.name)
})



removeBtn.addEventListener("click",() => {
const li = document.querySelectorAll("li")
li.forEach(li => {
  if(li.getAttribute("data-name") === removeInput.value){
    li.remove();
  }
});

// arr = arr.filter((arr) => arr.name === removeInput.value);

// arr.forEach(arr => {
//     // const liContactInfo = JSON.parse(li.getAttribute("liUser"));
//     if(arr.name === removeInput.value){
//       li.remove();
//     }
//   });
})
