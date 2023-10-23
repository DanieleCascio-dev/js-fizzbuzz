let rowElem = document.querySelector(".row");
console.log(rowElem);

let gridstring = "";
for (let i = 1; i <= 100; i++) {
  let result = "";
  let className = "";
  if (i % 3 === 0 && i % 5 === 0) {
    result = "BuzzFizz";
    className = "BuzzFizz";
  } else if (i % 3 === 0) {
    result = "Fizz";
    className = "Fizz";
  } else if (i % 5 === 0) {
    result = "Buzz";
    className = "Buzz";
  } else {
    result = i;
  }
  gridstring += `<div class="box ${className}">${result}</div>`;

  // console.log(gridstring);
}

rowElem.innerHTML = gridstring;
