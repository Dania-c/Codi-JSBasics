const img1 = document.querySelector("#image1");
const img2 = document.querySelector("#image2");
const img3 = document.querySelector("#image3");
const img4 = document.querySelector("#image4");
const img5 = document.querySelector("#image5");

img1.addEventListener("mouseover", ()=>{changeImg("img1")} );
img2.addEventListener("mouseover", ()=>{changeImg("img2")} );
img3.addEventListener("mouseover", ()=>{changeImg("img3")} );
img4.addEventListener("mouseover", ()=>{changeImg("img4")} );
img5.addEventListener("mouseover", ()=>{changeImg("img5")} );



function changeImg (id){
    switch(id) {
        case "img1":
            img1.src = "images/image1_2.jpg";
          break;
        case "img2":
            img2.src = "images/image2_2.jpg";
          break;
        case "img3":
            img3.src = "images/image3_2.jpg";
            break;
        case "img4":
            img4.src = "images/image4_2.jpg";
          break;
        default:
            img5.src = "images/image5_2.jpg";
      }
}
