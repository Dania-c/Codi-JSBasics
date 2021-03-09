

function validating(){
    
    var n1 = document.getElementById("shoe_size").value ;
 
    var n2 = document.getElementById("year").value ;
  
    if (n1 !="" && n2 !="" ){
        if (!isNaN(n1)  && !isNaN(n2)){
            resultnb=(((n1*2) + 5) * 50) - n2 + 1766;
        alert("the result is :\n" + resultnb );
    }
        else {alert ('kindly  enter 2 valid numbers' );}

    }
    else {
        alert ('kindly  enter you Shoe size and your birth year' );
    }
   
}
//document.getElementById("validate").addEventListener("click", validating());