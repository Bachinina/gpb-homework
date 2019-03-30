//Task 1
var numbers = [1, 7, 4, 77, 73, 157];

var getSevenCol = function (arr) {
//склеивание массива в строку и разделение на элементы
  var newArr = arr.join("").split("");
//преобразоввание массива строк в массив чисел
  for(var i = 0; i < newArr.length; i++){
    newArr[i] = parseInt(newArr[i]);
  }
//подсчет количества 7-ок в массиве
  var count = 0;
  for(var j = 0; j < newArr.length; j++){
    if(newArr[j] === 7) {
      count++;
    }
  }
  return console.log(count);
}
getSevenCol(numbers);

//Task 2
var symbols = ["a", "b", "c", "d", "e", "f"];

var arrToStr = function(strings) {
//копирование исходного массива, чтобы его не изменить
  var arr =  strings.concat();
  
//склеивание строки из первого и последнего элементов массива, последний элемент удаляется
  var string = "";
  for(var i = 0; i < arr.length; i++) {
//проверка на случай нечетного количества элементов в массиве
    if(arr.length !== (i + 1)){
      string += arr[i] + arr[arr.length - 1];
      arr.splice(arr.length - 1, 1); 
    }
    else string += arr[i];
  }
  return console.log(string);
}

arrToStr(symbols);
