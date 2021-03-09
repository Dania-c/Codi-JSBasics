
function validating(){
    
    var pname = document.getElementById("name").value ;
 
    var surname = document.getElementById("surname").value ;
    var city = document.getElementById("city").value ;
    
    if (city != "" && pname !="" && surname != ""){
        alert("Nom :" + pname +"\nPrénom :" + surname + "\nVille : " + city);

    }
    else {
        alert ('kindly  enter all 3 values : your name , surname and city' );
    }
}
//document.getElementById("validate").addEventListener("click", validating());