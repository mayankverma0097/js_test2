body = document.getElementsByTagName("body");
console.log(body);

btn = document.getElementById("btn");
console.log(btn);

btn1 = document.getElementById("btn1");

elem = document.getElementsByClassName("container");

console.log(elem);

img = document.getElementsByClassName("img1");

console.log(img);

btn.addEventListener('click', function () {
    console.log("button clicked");
    body[0].style.background = "black";
    btn.style.display = "none";
    btn1.style.display = "inline-block";
    elem[0].style.color = "white";
    elem[1].style.color = "white";
    last[0].style.color="white";


})
btn1.addEventListener('click', function () {
    console.log("button 2 clicked");
    body[0].style.background = "white";
    btn1.style.display = "none";
    btn.style.display = "inline-block";
    elem[0].style.color = "black";
    elem[1].style.color = "black";
    last[0].style.color="black";
})

last = document.getElementsByClassName("last");
console.log(last);

setInterval(inter1, 1000);




function inter1() {
    img[0].style.backgroundImage = "url('index_img.png')";
}

setInterval(inter2, 2000);
function inter2() {

    img[0].style.backgroundImage = "url('index_img2.jpg')";
}

setInterval(inter3, 3000);
function inter3() {

    img[0].style.backgroundImage = "url('index_img3.jpg')";
}

setInterval(inter4, 4000);
function inter4() {

    img[0].style.backgroundImage = "url('img2.png')";
}