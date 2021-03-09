
var x = document.createElement("DIV");
x.id ="myDiv";
x.innerHTML = "dania";
document.body.appendChild(x);
  
  document.querySelector("#name").addEventListener("change",function(){
    
    document.querySelector("#myDiv").innerHTML=document.querySelector("#name").value;});

