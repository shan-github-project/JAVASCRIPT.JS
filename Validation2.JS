function validateTextbox() {
 var box = document.getElementById("name");
 var box2 = document.getElementById("address");
var box3 = document.getElementById("Phone");
 
if (box.value == "" || box2.value == "" || box3.value == "" ) 
{
 alert("The field marked cannot be blank");
 return false;
}
 
}
