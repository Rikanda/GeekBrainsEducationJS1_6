// код для первого задания

var images = document.querySelectorAll(".smallnote");
console.log(images);
for(var i = 0; i<images.length;i++){
    images[i].onclick=f;
}

function f(event) {
    document.querySelector(".big").innerHTML="";
    var bignote = document.createElement("img");
    bignote.src = event.target.src.replace("small","big");
    document.querySelector(".big").append(bignote);
    bignote.onerror = ImgErr;
}

function ImgErr() {
    document.querySelector(".big").innerHTML = "КАРТИНКА НЕ НАЙДЕНА!"
}

// код чтобы прятать и показывать первое задание по клику

document.querySelector(".show1").onclick = firstshow;


function firstshow() {
    document.querySelector(".big").innerHTML="";
    document.querySelector(".show1").style.display = "none";
    document.querySelector(".hid1").style.display = "block";
    document.querySelector(".first").style.display = "block";
    
}

document.querySelector(".hid1").onclick = firsthid;

function firsthid() {
    document.querySelector(".show1").style.display = "block";
    document.querySelector(".hid1").style.display = "none";
    document.querySelector(".first").style.display = "none";
   
}
