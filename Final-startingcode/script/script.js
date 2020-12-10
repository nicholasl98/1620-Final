//Nicholas Lai - ACIT 1620 - script.js

function imageloop(){
    var gallery = document.getElementById("Thumbnail")
    for (i = 0; i < imgArray.length; i++) {
        gallery.appendChild(imgArray[i])
    }
};

var imgArray = [

    {image: "one"},
    {image: "two"},
    {image: "three"},
    {image: "four"},
    {image: "five"}, 
];


document.getElementById("bottom").style.visibility = "hidden"
   
var hoveredimg = document.querySelector(".hoveredimage");
var displayedimg= document.querySelector(".displayed-img");
Array.from(document.querySelectorAll(".one")).forEach(item => {
item.addEventListener("mouseover", event => {
document.getElementById("bottom").style.visibility = "visible";
hoveredimg.style.display = "block";
displayedimg.src = event.target.src;});
});
Array.from(document.querySelectorAll(".two")).forEach(item => {
item.addEventListener("mouseover", event => {
document.getElementById("bottom").style.visibility = "visible";
hoveredimg.style.display = "block";
displayedimg.src = event.target.src;});
});
Array.from(document.querySelectorAll(".three")).forEach(item => {
item.addEventListener("mouseover", event => {
document.getElementById("bottom").style.visibility = "visible";
hoveredimg.style.display = "block";
displayedimg.src = event.target.src;});
});
Array.from(document.querySelectorAll(".four")).forEach(item => {
item.addEventListener("mouseover", event => {
document.getElementById("bottom").style.visibility = "visible";
hoveredimg.style.display = "block";
displayedimg.src = event.target.src;});
});
Array.from(document.querySelectorAll(".five")).forEach(item => {
item.addEventListener("mouseover", event => {
document.getElementById("bottom").style.visibility = "visible";
hoveredimg.style.display = "block";
displayedimg.src = event.target.src;});
});


let new_btn = document.getElementById('submit')
new_btn.addEventListener('click', submit) 

function submit(e){
    var x = document.getElementById("effect").value;
        if(x == "blur"){
        document.getElementById("effect").value = "";
        if(e.target.id=='one'){
            document.getElementById("one").src = "images/pic1B.jpg";
        }
        if(e.target.id =='two'){
            document.getElementById("two").src = "images/pic2B.jpg";
        }
        if(e.target.id =='three'){
            document.getElementById("three").src = "images/pic3B.jpg";
        }
        if(e.target.id =='four'){
            document.getElementById("four").src = "images/pic4B.jpg";
        }
        if(e.target.id =='five'){
            document.getElementById("five").src = "images/pic5B.jpg";
        }
    }
}
