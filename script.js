let productimg = document.getElementById("productimg");
let btn = document.getElementsByClassName("btn");

// change img function 
btn[0].onclick = function(){
    productimg.src = "img/front.png"
    for(bt of btn ){
        bt.classList.remove("active");
     }
     this.classList.add("active");
}
btn[1].onclick = function(){
    productimg.src = "img/side.png"
     for(bt of btn ){
        bt.classList.remove("active");
     }
     this.classList.add("active");
}
    
btn[2].onclick = function(){
    productimg.src = "img/back.png"
     for(bt of btn ){
        bt.classList.remove("active");
     }
     this.classList.add("active");
}

