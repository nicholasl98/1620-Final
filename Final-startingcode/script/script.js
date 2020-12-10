//Nicholas Lai - ACIT 1620 - script.js

// function imageloop(){
//     var gallery = document.getElementById("Thumbnail")
//     for (i = 0; i < imgArray.length; i++) {
//         gallery.appendChild(imgArray[i])
//     }
// };

// var imgArray = [

//     {image: "one"},
//     {image: "two"},
//     {image: "three"},
//     {image: "four"},
//     {image: "five"}, 
// ];


document.getElementById("bottom").style.visibility = "hidden"
   
var hoveredimg = document.querySelector(".hoveredimage");
var displayedimg= document.querySelector(".displayed-img");

Array.from(document.querySelectorAll(".img")).forEach(item => {
item.addEventListener("mouseover", event => {
document.getElementById("bottom").style.visibility = "visible";
hoveredimg.style.display = "block";
displayedimg.src = event.target.src;});
});

let submit_btn = document.getElementById('submit')
submit_btn.addEventListener('click', submit)


function submit(){
    var x = document.getElementById("effect").value;
        if(x == "blur"){
            document.getElementById("effect").value = "";
            if(displayedimg.src = "images/pic1.jpg"){
                displayedimg.src = "images/pic1B.jpg";
            }
            if(displayedimg.src = "images/pic2.jpg"){
                displayedimg.src = "images/pic2B.jpg";
            }
            if(displayedimg.src = "images/pic3.jpg"){
                displayedimg.src = "images/pic3B.jpg";
            }
            if(displayedimg.src = "images/pic4.jpg"){
                displayedimg.src = "images/pic4B.jpg";
            }
            if(displayedimg.src = "images/pic5.jpg"){
                displayedimg.src = "images/pic5B.jpg";
            }
        } 
        else{
            alert("Error, Please try again.");
        }     
}       