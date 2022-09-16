let input = document.getElementById("input");
let from = document.getElementById("from");
let to = document.getElementById("to");
let result = document.getElementById("result");


document.getElementById("calc").addEventListener("submit", function (e) {
  e.preventDefault();

  let x = input.value;
  let y = 27;

  // convert to MMK
  let mmk = x * y;

  //convert to desired currency
  let final = mmk + 3500;

  // show result
  result.innerHTML = final + " kyats";
  input.focus();
});
  