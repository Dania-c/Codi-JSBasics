
// document.querySelector("#image1").addEventListener("mouseover",function(){
  
//   document.getElementById("image1").src = "./images/image1_2.jpg";
  
// });
// document.querySelector("#image2").addEventListener("mouseover",function(){
  
//   document.getElementById("image2").src = "./images/image2_2.jpg";
  
// });
// var i=1;
// var q="";
// for (i=1;i<6;i++){
  
//   document.querySelector("#image"+i.toString()).addEventListener("mouseover",function(){
//   q="image"+i.toString();
//   console.log(q);
//   console.log(i);
//     document.getElementById(q).src = "./images/image"+i+"_2.jpg";
    
//   });
// }
// switch ( document.activeElement.tagName.getElementById) {
//   case value:
    
//     break;

//   default:
//     break;
//}

// function f(idimg ){
// if (idimg=="image1"){
//     idimg.src="./images/image1_2.jpg";
// }
// }

var x = document.querySelectorAll("img");
var z;
x.forEach(myfunc(x.item,x.index));
function myfunc(item, index){
    document.querySelector("#"+item.index).addEventListener("mouseover",function(){
        document.getElementById(item).src ="./images/"+item.toString()+"_2.jpg";
    }); 
}

// for (i = 0; i < x.length; i++) {
    
//     console.log(i);
//     console.log(x[i].id.toString());
//     console.log(x[i].id);
//     // x[i].addEventListener("mouseover",function(){
//     //      //x[i].src="./images/image1_2.jpg";});
//     //      alert("hi "+document.getElementsByTagName(i).namedItem.toString);
         
//     //  x[i].id.toString().src="./images/image"+toString(i+1)+"_2.jpg";  // here i am struggling
//     //      });

//     // x[i].addEventListener("click",myfunc(x[i].id)); 
//      z=   x[i].id;
//      z1="#" + z;
//      console.log(z1);
//     x[i].querySelector(z1).addEventListener("mouseover",function(){
//         document.getElementById(z).src ="./images/"+z.toString()+"_2.jpg";
//     });        
    
//   }
//   function myfunc(imgid){
//    if (imgid ="image1"){
//        document.getElementById(imgid).src ="./images/"+imgid.toString()+"_2.jpg";
//    }
//   }