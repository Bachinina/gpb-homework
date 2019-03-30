// Task 1
function recurtionTask1(el) {
  function drawEyellowBorder(el) {
    el.style.borderBottom = "5px solid yellow";
  }

  function decorateParent(el) {
    drawEyellowBorder(el);
    var parent = el.parentNode;
    var id = el.getAttribute("id");

    if (!id) {
      setTimeout(() => {
        drawEyellowBorder(parent);
        decorateParent(parent);
        blockName.textContent += " " + parent.tagName;
      }, 300);
    }
  }
  decorateParent(el);
}

var deepChild = document.querySelector(".deepChildTask1");
var blockName = document.querySelector(".blockName");
recurtionTask1(deepChild);

// Task 2
function recurtionTask2(el) {
  function drawRedBorder(el) {
    el.style.borderBottom = "5px solid red";
  }

  function drawGreenBorder(el) {
    el.style.borderTop = "5px solid blue";
  }

  function decorateChild(el) {
    drawGreenBorder(el);
    var child = el.children[0];

    if (child) {
      setTimeout(() => {
        drawGreenBorder(child);
        decorateChild(child);
      }, 100);
    }
  }

  function decorateParent(el) {
    drawRedBorder(el);
    var parent = el.parentNode;
    var className = el.getAttribute("class");

    if (className !== "sibling first") {
      setTimeout(() => {
        drawRedBorder(parent);
        decorateParent(parent);
      }, 100);
    } else {
      decorateChild(el.nextElementSibling);
    }
  }
  decorateParent(el);
}

var deepChild = document.querySelector(".deepChildTask2");
recurtionTask2(deepChild);

// Task 3
const dataTable = [
  {
    name: "name1",
    value: "1"
},
  {
    name: "name2",
    value: "2"
},
  {
    name: "name3",
    value: "3"
},
  {
    name: "name4",
    value: "4"
},
];

var table = document.querySelector(".table");
for (var i = 0; i <= dataTable.length - 1; i++) {
  table.innerHTML += "<tr>" + "<td>" + dataTable[i].name + "</td>" + "<td>" + dataTable[i].value + "</td>" + "</tr>";
}
