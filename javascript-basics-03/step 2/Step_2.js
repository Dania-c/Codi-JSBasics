function showorhide(){
  
    var hideLink = document.getElementById("hide");
    var showLink = document.getElementById("show");
    var pDivTag = document.getElementById("texte");

    // hideLink.onclick = function() {
    //     pDivTag.style.display="none";
    // };
        
    // showLink.onclick = function() {
    //     pDivTag.style.display="block";
    // };
if (document.activeElement === hideLink) {pDivTag.style.display="none";}
else if( document.activeElement === showLink) {pDivTag.style.display="block";}

}

