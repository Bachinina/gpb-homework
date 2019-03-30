var everySecond = false;

function throughOnce(fn) {
  return fn.bind(this);
}

var logThroughOnce = throughOnce(function(text) {
  if(everySecond) {
    console.log(text);
  }
  everySecond = !everySecond;
});

logThroughOnce("Hello World!"); 
logThroughOnce("Hello World!"); 
logThroughOnce("Hello World!"); 
logThroughOnce("Hello World!"); 
