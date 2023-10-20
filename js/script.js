let rowElem = document.querySelector(".row");
console.log(rowElem);

let gridstring = "";
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    let result = "BuzzFizz";
    console.log(result);
  } else if (i % 3 === 0) {
    let result = "Fizz";
    console.log(result);
  } else if (i % 5 === 0) {
    let result = "Buzz";
    console.log(result);
  } else {
    result = i;
    console.log(result);
  }
  /* gridstring += `<div class="${result}">${result}</div>`;
  console.log(gridstring); */
}
