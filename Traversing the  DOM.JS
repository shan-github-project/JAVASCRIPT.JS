function changeText () {
 
var parent = document.getElementById('main');

//var child = parent.lastElementChild;
//child.style.color = "blue";

var child = parent.childNodes[1];
child.style.color = "red";
var child = parent.childNodes[3];
child.style.color = "red";
var child = parent.childNodes[5];
child.style.color = "red";

//child.style.color = "red";


//var child = parent.firstElementChild;
//child.style.color = "red";
//var child = parent.lastElementChild;
//child.style.color = "red";

}
