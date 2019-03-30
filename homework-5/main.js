var cube = document.querySelector(".dragElement");
cube.onmousedown = function(evt) {
//  расчет координат
  var coords = getCoords(cube);
  var shiftX = evt.pageX - coords.left;
  var shiftY = evt.pageY - coords.top;
//  позиционирование, перемещение в body
  cube.style.position = "absolute";
  document.body.appendChild(cube);
  cube.style.zIndex = 100;
  move(evt);
  
  function move(evt) {    
    cube.style.left = evt.pageX - shiftX + "px"; cube.style.top = evt.pageY - shiftY + "px";
    
//    отключить дефолтное перемещение
    cube.ondragstart = function(evt) {
      return false;  
    }
//    перемещение
    document.onmousemove = function(evt) {
      move(evt);
    }
//    закончить перемещение
    cube.onmouseup = function() {
      document.onmousemove = null;
      cube.onmouseup = null;
    }
  }
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  }
}