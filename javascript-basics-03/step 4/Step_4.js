function checkPassword(){
  
    
    var pass = document.getElementById("password");
    var confpass = document.getElementById("confirmation");
    
    
    
 if (pass.value!=confpass.value) {

 alert("password input and confirmation input don't match");

    document.getElementById('confirmation').style.border = "3px solid red";
}
else{
    alert("great!");
    document.getElementById('confirmation').style.border = "1px solid black";
}

}