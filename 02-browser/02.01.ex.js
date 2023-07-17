console.log("run");

// let table = document.getElementById('age-table')
const ageTable = document.getElementById("age-table");
console.log(ageTable);
// agetable.getElementsByTagName('label')
const allLable = ageTable.querySelectorAll("label")
console.log(allLable);
const firstTd = ageTable.querySelectorAll("table > tbody tr:first-of-type > td:first-child");
console.log(firstTd);

const nameSearch = document.getElementsByName("search");
console.log(nameSearch);

const firstInput = document.querySelectorAll("form:first-of-type");
console.log(firstInput);
const lastInput = document.querySelectorAll("form:last-of-type");
