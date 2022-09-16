let input = document.getElementById("input");
let from = document.getElementById("from");
let to = document.getElementById("to");
let result = document.getElementById("result");

// function createOption(x, y, z) {
//   let opt = document.createElement("option");
//   let content = document.createTextNode(y);
//   opt.setAttribute("value", NumConverter(z));
//   opt.appendChild(content);
//   x.appendChild(opt);
// }

// function NumConverter(x) {
//   return Number(x.replace(",", ""));
// }

// for (x in rate.rates) {
//   createOption(from, x, rate.rates[x]);
//   createOption(to, x, rate.rates[x]);
// }

document.getElementById("calc").addEventListener("submit", function(e){
    e.preventDefault();

    let x = input.value;
    let y = from.value;

    // convert to MMK 
    let mmk = x * y;

    //convert to desired currency
    let final = mmk + 3500;
    
    // show result
    result.innerHTML = final + " kyats";
    input.focus();
    from.value= "27";
    to.value = "1";
})
  
