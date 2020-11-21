var pic = document.querySelector(".picture");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

// создаем массив картинок
var pictures = [];
for(var j=1; j<=7;j++) {
    var picture = document.createElement("img");
    picture.src = "img/slider/"+j+".png";
    pictures.push(picture);
    
}
var i = 0;
pic.appendChild(pictures[i]);

next.onclick = f_next;
prev.onclick = f_prev;

function f_next () {
    pic.innerHTML="";
    i++;
    if(i>=pictures.length)
    i=0;
    pic.appendChild(pictures[i]);
}

function f_prev() {
    pic.innerHTML="";
    i--;
    if(i<0)
    i=(pictures.length-1);
    pic.appendChild(pictures[i]);
}

// код чтобы прятать и показывать третье задание по клику

document.querySelector(".show3").onclick = threeshow;


function threeshow() {
  
    document.querySelector(".show3").style.display = "none";
    document.querySelector(".hid3").style.display = "block";
    document.querySelector(".three").style.display = "block";
    
}

document.querySelector(".hid3").onclick = threehid;

function threehid() {
    document.querySelector(".show3").style.display = "block";
    document.querySelector(".hid3").style.display = "none";
    document.querySelector(".three").style.display = "none";
   
}
