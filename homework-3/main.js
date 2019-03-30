//Task 1
var printWindowValues = function () {
  for (var key in window) {
      console.log(key, window[key]);
  }
}
printWindowValues();

//Task 2
var exp = 10;
var result = 1;

function expTen(number) {
  for (var i = 1; i <= exp; i++) {
    result = number * result;
  }
  console.log(number + "^10 = " + result);
}
expTen(5);

//Task 3
function getFuncRes(funct, value) {
  funct(value);
}
getFuncRes(console.log, "Hello World");
