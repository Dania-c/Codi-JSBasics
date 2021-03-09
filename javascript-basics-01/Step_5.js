

function validating(){
    
    var n1 = document.getElementById("first_number").value ;
 
    var n2 = document.getElementById("second_number").value ;
  
    if (n1 !="" && n2 !="" ){
        if (!isNaN(n1)  && !isNaN(n2)){
        alert("the product of the 2 entered numbers is :\n" + n1*n2 );}
        else {alert ('kindly  enter 2 valid numbers' );}

    }
    else {
        alert ('kindly  enter 2  numbers' );
    }
   
}
//document.getElementById("validate").addEventListener("click", validating());