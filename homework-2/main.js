//Task 1
var age = 15;

if (1 <= age && age <= 17) {
  console.log("Учеба");
}
else if (18 <= age && age <= 64) {
  console.log("Работа");
}
else if (65 <= age && age <= 100) {
  console.log("Пенсия");
}
else console.log("Столько не живут");


//Task  2
var arr = [1,2,3,4,5,6,7,8,9];
 for(var i = 0; i <= arr.length - 1; i++) {
  switch (arr[i]) {
    case 1: console.log(arr[i] + " разработчик"); break;
    case 2: 
    case 3: 
    case 4: 
      console.log(arr[i] + " разработчика"); break;
    case 5: 
    case 6: 
    case 7:
    case 8:
    case 9:
      console.log(arr[i] + " разработчиков"); break;    
  }
 }