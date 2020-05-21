function conversionToDecimal() {
  // Grab the value entered which is a string
  let input = document.getElementById("input").value;
  let base = document.getElementById("base").value;

  // make sure the input isn't empty
  if (input === "") {
    return alert("Please enter a number");
  }

  input = input.split("");
  let sum = 0;

  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] < 0 || input[i] >= base) {
      alert("Each number must be between Zero and the Base");
      return;
    }
    sum += parseInt(input[i] * Math.pow(base, input.length - 1 - i));
  }

  let output = document.getElementById("output");
  output.value = sum;
}

// function binaryToDecimal() {
//     // Grab the value entered which is a string
//     let input = document.getElementById("input").value;

//     // make sure the input isn't empty
//     if (input === "") {
//         return alert("Please enter a number");
//     }
//     input = input.split("");

//     let sum = 0;
//     for (let i = input.length - 1; i >= 0; i--) {
//         if (input[i] < 0 || input[i] > 1) {
//             alert("Numbers must only be Zeros and Ones");
//         }
//         sum += parseInt(input[i] * Math.pow(2, input.length - 1 - i));
//     }

//     let output = document.getElementById("output");
//     output.value = sum;
// }
