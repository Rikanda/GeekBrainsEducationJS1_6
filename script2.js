
// код корзины товаров
// njdfhs
var i1 = {
    Name: "Товар 1",
    Price: 4800
}
var i2 = {
    Name: "Товар 2",
    Price: 3200
}
var i3 = {
    Name: "Товар 3",
    Price: 5400
}
var i4 = {
    Name: "Товар 4",
    Price: 9700
}
var i5 = {
    Name: "Товар 5",
    Price: 1350
}

var items = [i1,i2,i3,i4,i5];
var sum = 0;



var summa=document.createElement("span");
var cart = document.querySelector(".cart");
cart.appendChild(summa);
var clear = document.querySelector(".clear");
clear.onclick = f_clear;
var catalog = document.querySelector(".catalog");


function init() {

var i, item, itembutton;
for(i=0; i<items.length;i++){
    item = document.createElement("div");
    item.className = "div_item";
    item.appendChild(document.createTextNode(items[i].Name));
    item.appendChild(document.createTextNode(" Цена "+items[i].Price + " \u20bd"));
itembutton = document.createElement("button");
itembutton.textContent = "Купить";
// использовала метод bind чтобы с функцией передать параметр товара (индекс в массиве)
itembutton.onclick = AddItem.bind(null,i);
item.appendChild(itembutton);
catalog.appendChild(item);
}
}

// добавление товара в корзину
function AddItem(i){
var selectedItem = document.createElement("p");
selectedItem.className = "p_cart";
selectedItem.appendChild(document.createTextNode(items[i].Name + " сумма " +items[i].Price));
sum+=items[i].Price;
cart.appendChild(selectedItem);
summa.innerHTML = "Сумма всей корзины: " + sum + " \u20bd";

}

//очистка корзины
function f_clear(){
    cart.innerHTML="";
    summa.innerText="";
    sum=0; 
    cart.appendChild(summa);
}


window.onload = init;

// код чтобы прятать и показывать второе задание по клику

document.querySelector(".show2").onclick = secondshow;


function secondshow() {
  
    document.querySelector(".show2").style.display = "none";
    document.querySelector(".hid2").style.display = "block";
    document.querySelector(".second").style.display = "block";
    
}

document.querySelector(".hid2").onclick = secondhid;

function secondhid() {
    document.querySelector(".show2").style.display = "block";
    document.querySelector(".hid2").style.display = "none";
    document.querySelector(".second").style.display = "none";
   
}