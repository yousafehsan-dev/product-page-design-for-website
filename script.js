let productimg = document.getElementById("productimg");
let btn = document.getElementsByClassName("btn");

// change img function 
btn[0].onclick = function(){
    productimg.src = "img/front.png"
}
btn[1].onclick = function(){
    productimg.src = "img/side.png"
}
btn[2].onclick = function(){
    productimg.src = "img/back.png"
}
