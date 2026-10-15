function btn(a) {
  var input = document.getElementById("input");

  input.value += a;
}

function equal() {
  var input = document.getElementById("input");

  // console.log(eval(input.value));

  input.value = eval(input.value);
}

function clr() {
  var input = document.getElementById("input");

  input.value = " ";
}

function x() {
  var input = document.getElementById("input");
   input.value = input.value.slice(0,-1);
}
