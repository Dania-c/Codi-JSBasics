
// document.querySelector("#image1").addEventListener("mouseover",function(){
//   document.getElementById("image1").src ="./images/image1_2.jpg";});


  document.querySelector("#image1").addEventListener("mouseover",function(){
    
    var x =document.getElementById("image1").src;
    if (x.charAt(x.length-5) == "1") 
        {
            document.getElementById("image1").src = "./images/image1_2.jpg";
           
        }
        else 
        {
            document.getElementById("image1").src = "./images/image1.jpg";
           
        }});


// if (document.getElementById("image1").src == "./images/image1_2.jpg") 
//         {
//             document.getElementById("image1").src = "./images/image1_1.jpg";
//         }
//         else 
//         {
//             document.getElementById("image1").src = "./images/image1_2.jpg";
//         }