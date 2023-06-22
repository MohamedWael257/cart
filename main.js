// let num = document.getElementById('num');
// add products to cart
let cart = document.querySelector(".cart-content")
let h4 = document.querySelector(".cart-content > h4")
let hr = document.querySelector(".cart-content > hr")
let p = document.querySelector(".cart-content > p")
function addtocart() {
    // h4.remove()
    hr.remove()
    p.remove()
    // <h4>Cart</h4>
    cart.innerHTML += `
        <hr>
        <div class="content-details">
            <img src="images/image-product-1-thumbnail.jpg" alt="">
            <div class="content-price">
                <p style="color:hsl(219, 9%, 45%); font-size: 1rem;">Fall Limiter Edition Sneakers</p>
                <div>
                    <span class="in" style=" color:hsl(219, 9%, 45%);">$125.00 x 3</span>
                    <span class="out">$375.00</span>
                </div>
            </div>
            <ion-icon name="trash-outline" onclick="remove()"></ion-icon>
        </div>
        <button>checkout</button>
    `;
    document.querySelector(".cartt").style.display = "grid";
    document.querySelector(".cartt").innerText = num.value;
    var price = document.querySelector(".pp").innerText;
    var pricenum = parseInt(price);
    document.querySelector(".in").innerText = "$" + price + "x" + num.value
    document.querySelector(".out").innerText = "$" + pricenum * num.value + ".00"
}
// remove products to cart

function remove() {
    var cart = document.querySelector(".cart-content")
    cart.innerHTML = `
        <h4>Cart</h4>
        <hr>
        <p>Your Cart is empty</p>
    `;
}
// var num = parseInt(document.getElementById("num").innerText);
// select num of products
let num = document.getElementById('num');
function plus() {
    if (num.value >= 0) {
        num.value++;
    }
}
function minus() {
    if (num.value > 0) {
        num.value--;
    }
}
// show cart
function show() {
    document.querySelector(".cart-content").style.visibility = "visible";
    document.querySelector(".cart-content").style.opacity = 1;
}
// remove cart
var drop = document.querySelector(".dropdown");
drop.onmouseleave = function dropdownn() {
    document.querySelector(".cart-content").style.visibility = "hidden";
    document.querySelector(".cart-content").style.opacity = 0;
}

let main_galary_img = document.querySelector(".main-galary img");
let all_galary_img = document.querySelectorAll('.all-galary img')
let selected1 = document.querySelector(".one");
let selected2 = document.querySelector(".two");
let selected3 = document.querySelector(".three");
let selected4 = document.querySelector(".four");
let details = document.querySelector(".details")
let price = document.querySelector(".pp");
let pricenum = parseInt(price.innerText);
let before_discount = document.querySelector(".before-discount");
selected1.onclick = function () {
    main_galary_img.src = selected1.src
    selected1.style.opacity = 0.5
    selected2.style.opacity = 1
    selected3.style.opacity = 1
    selected4.style.opacity = 1
    price.innerText = 125 + ".00"
    before_discount.innerText = "$" + 250 + ".00"
    num.value = 0
    // document.querySelector(".in").innerText = "$" + price.innerText + "x" + num.value
    // document.querySelector(".out").innerText = "$" + pricenum * num.value + ".00"
}
selected2.onclick = function () {
    main_galary_img.src = selected2.src
    selected1.style.opacity = 1
    selected2.style.opacity = 0.5
    selected3.style.opacity = 1
    selected4.style.opacity = 1
    price.innerText = 225 + ".00"
    before_discount.innerText = "$" + 350 + ".00"
    num.value = 0
    // document.querySelector(".in").innerText = "$" + price.innerText + "x" + num.value
    // document.querySelector(".out").innerText = "$" + pricenum * num.value + ".00"
}
selected3.onclick = function () {
    main_galary_img.src = selected3.src
    selected1.style.opacity = 1
    selected2.style.opacity = 1
    selected3.style.opacity = 0.5
    selected4.style.opacity = 1
    price.innerText = 150 + ".00"
    before_discount.innerText = "$" + 300 + ".00"
    num.value = 0
    // document.querySelector(".in").innerText = "$" + price.innerText + "x" + num.value
    // document.querySelector(".out").innerText = "$" + pricenum * num.value + ".00"

}
selected4.onclick = function () {
    main_galary_img.src = selected4.src
    selected1.style.opacity = 1
    selected2.style.opacity = 1
    selected3.style.opacity = 1
    selected4.style.opacity = 0.5
    price.innerText = 200 + ".00"
    before_discount.innerText = "$" + 400 + ".00"
    num.value = 0
    // document.querySelector(".in").innerText = "$" + price.innerText + "x" + num.value
    // document.querySelector(".out").innerText = "$" + pricenum * num.value + ".00"
}
// details.innerHTML = `
// <h4>sneaker company</h4>
// <h1>Fall Limiter Edition Sneakers</h1>
// <p>These low-profile Sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
//     they 'll withstand everything the weather can offer
// </p>
// <div class="price-det">
//     <span style="margin-right: 0;" class="price">$</span>
//     <p class="price pp"> 150.00</p>
//     <p class="discount">50%</p>
// </div>
// <p class="before-discount">$300.00</p>
// <div class="cart">
//     <div class="plus-minus">
//         <img onclick="minus()" src="images/icon-minus.svg" alt="">
//         <span>
//             <input id="num" value="0" type="text">
//         </span>
//         <img onclick="plus()" style="margin-top: 5px;" src="images/icon-plus.svg" alt="">
//     </div>
//     <button class="addtocart" onclick="addtocart()">
//         <ion-icon name="cart-outline"></ion-icon>
//         <span>Add to cart</span>
//     </button>
// </div>`