

  
  document.querySelector("BUTTON").addEventListener("click",function(){
    
    if (confirm("are you sure you want to clear the boxes?")){
      document.getElementById("name").value = "";
      document.getElementById("surname").value = "";
      document.getElementById("city").value = "";

    } 
});

