

function validating(){
    
    var n1 = document.getElementById("age").value ;
 
      
    if (n1 !=""  ){
        if (!isNaN(n1) ){
                if(n1>18){
                    alert("you are over 18" );
                }
                 else{
                    alert("You are under 18" );}
                }
        else {alert ('kindly  enter a valid number' );}

        }
    else {
        alert ('kindly  enter your age' );
    }
   
}
//document.getElementById("validate").addEventListener("click", validating());