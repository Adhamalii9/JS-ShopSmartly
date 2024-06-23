var inpName = document.getElementsByClassName("input")[0];
var inpEmail = document.getElementsByClassName("input")[1];
var inpPass = document.getElementsByClassName("input")[2];
var inpConPass = document.getElementsByClassName("input")[3];
var nameErr = document.getElementById("nameErr");
var emailErr = document.getElementById("emailErr");
var passErr = document.getElementById("passErr");
var passConErr = document.getElementById("passConErr");
var reqErr = document.getElementById("reqErr");

var users = [];
var user = {name: "adham", email: "adham@gmail.com", password: "12345678"};
users.push(user);

function login() {
    var valid = true;

    if (/^[a-zA-Z]+$/.test(inpName.value)) {
        nameErr.style.display = "none";
    } else {
        nameErr.style.display = "contents";
        valid = false;
    }

    if (/^[a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inpEmail.value)) {
        emailErr.style.display = "none";
    } else {
        emailErr.style.display = "contents";
        valid = false;
    }

    if (/^[a-zA-Z0-9._%+-]{8}$/.test(inpPass.value)) {
        passErr.style.display = "none";
    } else {
        passErr.style.display = "contents";
        valid = false;
    }

    if (inpName.value === "" || inpEmail.value === "" || inpPass.value === "" || inpConPass.value === "") {
        nameErr.style.display = "none";
        emailErr.style.display = "none";
        passErr.style.display = "none";
        passConErr.style.display = "none";
        reqErr.style.display = "contents";
        valid = false;
    } else {
        reqErr.style.display = "none";
    }

    if (inpConPass.value !== inpPass.value) {
        passConErr.style.display = "contents";
        valid = false;
    } else {
        passConErr.style.display = "none";
    }

    if (valid) {
        for (let i = 0; i < users.length; i++) {
            if (inpEmail.value === users[i].email && inpPass.value === users[i].password && /^[a-zA-Z]+$/.test(inpName.value)) {
                setCookie('name', inpName.value);
                setCookie('email', inpEmail.value);
                setCookie('password', inpPass.value);
                window.open("./Home.html", "_self");
                return;
            }
        }

        alert('Invalid login credentials.');
    }
}

function setCookie(key, value) {
    document.cookie = `${key}=${value}; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/`;
}

function deleteCookie(key) {
    var expireData = new Date();
    expireData.setDate(expireData.getDate() - 1);
    document.cookie = key + "=; expires=" + expireData.toUTCString() + "; path=/";
}

function allCookieList() {
    return document.cookie;
}

function hasCookie(cookieName) {
    return getCookie(cookieName) ? true : false;
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}



function Home(){
    window.open("./Home.html","_self");
}

function About(){
    window.open("./Home.html","_self");
}

function ContactUs(){
    window.open("./Home.html","_self");
}

function LogOut(){
    deleteCookie('name');
    deleteCookie('email');
    deleteCookie('password');
    window.open("./index.html","_self");
}
function men_category() {
    setCookie("category",1);
}
function women_category(){
    setCookie("category",2);
}
function kids_category(){
    setCookie("category",3);
}



if (document.URL.endsWith('Home.html') ||
    document.URL.endsWith('Home.html#contactTarget') ||
    document.URL.endsWith('Home.html#aboutTarget')) {

    var welcomeUser = document.getElementById("welcome");
    var user_name = getCookie("name");
    welcomeUser.textContent += " " + user_name;

   
    

    var img = document.getElementById("clothesImg");
    var arrOfImages = [
        "./assets/slider1.jpg",
        "./assets/shop-smartly.png",
        "./assets/slider2.jpg"
    ];

    var index = 0;
    function next() {
        img.setAttribute("src", arrOfImages[index]);
        index = (index + 1) % arrOfImages.length;
    }

    function back() {
        index = (index - 1 + arrOfImages.length) % arrOfImages.length;
        img.setAttribute("src", arrOfImages[index]);
    }
    
    var interval;
    var bool = false;
    function play() {
        if (bool == false) {
            interval = setInterval(function () {
                bool = true;
                img.setAttribute("src", arrOfImages[index]);
                index = (index + 1) % arrOfImages.length;
            }, 1500);
        }
    }

    play();
    }

    if (document.URL.endsWith('products.html') ||
    document.URL.endsWith('products.html#') ||
    document.URL.endsWith('products.html#contactTarget') ||
    document.URL.endsWith('products.html#aboutTarget')) {
        
        
        document.addEventListener('DOMContentLoaded', () => {
            updateCartDisplay();
            const men_products = [
                { src: './assets/Men_products/1.jpg', alt: 'LEATHER BIKER JACKET', category: 'LEATHER BIKER JACKET', price: 8200 },
                { src: './assets/Men_products/2.jpg', alt: 'COTTON SHIRT', category: 'COTTON SHIRT', price: 2400 },
                { src: './assets/Men_products/3.jpg', alt: 'LACE-UP SNEAKERS', category: 'LACE-UP SNEAKERS', price: 1800 },
                { src: './assets/Men_products/4.jpg', alt: 'SUIT TROUSERS', category: 'SUIT TROUSERS', price: 2000 },
                { src: './assets/Men_products/5.jpg', alt: 'SLIM FIT JEANS', category: 'SLIM FIT JEANS', price: 2700 },
                { src: './assets/Men_products/6.jpg', alt: 'FADED HOODIE', category: 'FADED HOODIE', price: 2900 },
                { src: './assets/Men_products/7.jpg', alt: 'LIGHTWEIGHT BOMBER JACKET', category: 'LIGHTWEIGHT BOMBER JACKET', price: 2400 },
                { src: './assets/Men_products/8.jpg', alt: 'NAVY BLACK + 800 BLACK 100ML', category: 'NAVY BLACK + 800 BLACK 100ML', price: 1400 },
                { src: './assets/Men_products/9.jpg', alt: 'SKINNY FIT JEANS', category: 'SKINNY FIT JEANS', price: 2400 },
                { src: './assets/Men_products/10.jpg', alt: 'TEXTURED POLO SHIRT', category: 'TEXTURED POLO SHIRT', price: 2100 },
                { src: './assets/Men_products/11.jpg', alt: '100ML / 3.38 OZ FOR HIM RED EDITION', category: '100ML / 3.38 OZ FOR HIM RED EDITION', price: 1600 },
                { src: './assets/Men_products/12.jpg', alt: 'COMFORT BERMUDA SHORTS', category: 'COMFORT BERMUDA SHORTS', price: 1700 },

            ];
            const women_products = [
                { src: './assets/Women_products/1.jpg', alt: 'SHORT SLEEVE INTERLOCK T-SHIRT', category: 'SHORT SLEEVE INTERLOCK T-SHIRT', price: 1200 },
                { src: './assets/Women_products/2.jpg', alt: 'METALLIC THREAD PLUSH JOGGERS', category: 'METALLIC THREAD PLUSH JOGGERS', price: 2200 },
                { src: './assets/Women_products/3.jpg', alt: 'VIOLET BLOSSOM 90 ML / 3.04 OZ', category: 'VIOLET BLOSSOM 90 ML / 3.04 OZ', price: 2500 },
                { src: './assets/Women_products/4.jpg', alt: 'HOODIE', category: 'HOODIE', price: 1900 },
                { src: './assets/Women_products/5.jpg', alt: 'PLUSH NY 82 VARSITY SHORTS', category: 'PLUSH NY 82 VARSITY SHORTS', price: 1500 },
                { src: './assets/Women_products/6.jpg', alt: 'FADED-EFFECT PLUSH SWEATSHIRT', category: 'FADED-EFFECT PLUSH SWEATSHIRT', price: 2400 },
                { src: './assets/Women_products/7.jpg', alt: 'HYPNOTIC VANILLA 30 ML / 1.01 OZ', category: 'HYPNOTIC VANILLA 30 ML / 1.01 OZ', price: 800 },
                { src: './assets/Women_products/8.jpg', alt: 'SWEATSHIRT WITH EMBROIDERED SLOGAN', category: 'SWEATSHIRT WITH EMBROIDERED SLOGAN', price: 2000 },
                
                
    
            ];
            const kids_products = [
                { src: './assets/Kids_products/1.jpg', alt: 'TIMELESZ - TERRY POLO SHIRT ', category: 'TIMELESZ - TERRY POLO SHIRT ', price: 1000 },
                { src: './assets/Kids_products/2.jpg', alt: 'STRIPED DRAWSTRING BERMUDA SHORTS', category: 'STRIPED DRAWSTRING BERMUDA SHORTS', price: 200 },
                { src: './assets/Kids_products/3.jpg', alt: 'STRIPED DRESS WITH KNOT', category: 'STRIPED DRESS WITH KNOT', price: 1100 },
                { src: './assets/Kids_products/4.jpg', alt: 'PLUSH TROUSERS', category: 'PLUSH TROUSERS', price: 650  },
                { src: './assets/Kids_products/5.jpg', alt: 'CARS LIGHTNING MCQUEEN © DISNEY T-SHIRT', category: 'CARS LIGHTNING MCQUEEN © DISNEY T-SHIRT', price: 800 },
                { src: './assets/Kids_products/6.jpg', alt: 'LINEN TROUSERS WITH POCKETS', category: 'LINEN TROUSERS WITH POCKETS', price: 1200 },
                { src: './assets/Kids_products/7.jpg', alt: '2-PACK OF LONG FOOD PRINT SOCKS', category: '2-PACK OF LONG FOOD PRINT SOCKS', price: 400 },
    
                
    
            ];
            var category_name = document.getElementById('category_name');
    var category_selected = getCookie("category");
    console.log(category_selected);
    var products = [];
    if (category_selected == 1) {
        products = men_products;
        category_name.innerHTML = "MEN.";
    } else if (category_selected == 2) {
        products = women_products;
        category_name.innerHTML = "WOMEN.";
    } else if (category_selected == 3) {
        products = kids_products;
        category_name.innerHTML = "KIDS.";
    }

    const productContainer = document.querySelector('.productInfo');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.product = JSON.stringify(product);

        productCard.innerHTML = `
            <img src="${product.src}" alt="${product.alt}" class="product-image" />
            <div class="product-details">
                <h3>${product.category}</h3>
                <p>${product.price} L.E</p>
                <button class="btn buy-btn" data-category="${product.category}" data-price="${product.price}" data-src="${product.src}">BUY</button>
            </div>
        `;

        productContainer.appendChild(productCard);

        productCard.addEventListener('click', function() {
            const productData = JSON.parse(this.dataset.product);
            localStorage.setItem('productDetail', JSON.stringify(productData));
            window.location.href = 'product_show.html';
        });
    });

    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the product click event

            const category = this.getAttribute('data-category');
            const price = parseInt(this.getAttribute('data-price'));
            const src = this.getAttribute('data-src');

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.category === category);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += price;
            } else {
                const item = { category: category, price: price, quantity: 1, totalPrice: price, src: src };
                cart.push(item);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const counter = cart.reduce((acc, item) => acc + item.quantity, 0);
        const cartCounter = document.getElementById('cart');
        cartCounter.innerHTML = `CART (${counter})`;
    }
       
        
        });
    }        

else if (document.URL.endsWith('cart.html') ||
    document.URL.endsWith('cart.html#contactTarget') ||
    document.URL.endsWith('cart.html#aboutTarget')) {

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartProd = document.getElementById('cartProd');
    var cartCounter = document.getElementById("cart");

    function displayCartItems() {
        cartProd.innerHTML = '';
        cart.forEach((item, index) => {
            var productHTML = `
                <div id="item-${index}" class="cart-item">
                    <div class="item-info">
                        <p>Item: ${item.category}</p>
                        <p>Price: ${item.price} L.E</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Total Price: ${item.totalPrice} L.E</p>
                        <button id='addCart-${index}' class='addCart'>+</button>
                        <button id='removeCart-${index}' class='removeCart'>-</button>
                    </div>
                    <div class="item-image">
                        <img src="${item.src}" alt="${item.category}" />
                    </div>
                </div>

                
            `;
            cartProd.innerHTML += productHTML;
        });
        updateCartCounter();
        updateTotalPrice();
        attachCartEvents();
    }

    function updateCartCounter() {
        var counter = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCounter.innerHTML = `CART (${counter})`;
    }

    function updateTotalPrice() {
        var totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        document.getElementById('totalPricediv').innerHTML = `
            <div>${totalPrice} L.E</div>
            <button id="buyAll" onclick="buyAll()"> BUY ALL</button>
        `;
    }

    function attachCartEvents() {
        cart.forEach((item, index) => {
            document.getElementById(`addCart-${index}`).addEventListener('click', function () {
                item.quantity++;
                item.totalPrice += item.price;
                updateCart();
            });

            document.getElementById(`removeCart-${index}`).addEventListener('click', function () {
                if (item.quantity > 1) {
                    item.quantity--;
                    item.totalPrice -= item.price;
                } else {
                    cart.splice(index, 1);
                }
                updateCart();
            });
        });
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function buyAll() {
        if (cart.length > 0) {
            alert("PAYMENT COMPLETE");
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    }

    displayCartItems();
}
else if (document.URL.endsWith('product_show.html') ||
    document.URL.endsWith('product_show.html#contactTarget') ||
    document.URL.endsWith('product_show.html#aboutTarget')) {
document.addEventListener('DOMContentLoaded', () => {
    const productDetail = JSON.parse(localStorage.getItem('productDetail'));
    if (productDetail) {
        const container = document.getElementById('productShowInfo');
        container.innerHTML = `
            <div class="productShowCard">
                <img src="${productDetail.src}" alt="${productDetail.alt}" class="productShowImage" />
                <div class="productShowDetails">
                    <h3>${productDetail.category}</h3>
                    <h4> Quality clothing is built to last. Durable materials and construction ensure that garments can withstand repeated use and washing, Breathable fabrics, appropriate fit, and softness contribute to overall comfort.</h4>
                    <br><br><br>
                    <p>PRICE : ${productDetail.price} L.E</p>

                    <p><del>PRICE : ${productDetail.price + 1000}</del> L.E</p>
                    <br><br><br><br>
                    <button class="btn buy-btn" id="Show-btnBuy-btn" data-category="${productDetail.category}" data-price="${productDetail.price}" data-src="${productDetail.src}">BUY</button>
                </div>
            </div>
        `;
    }
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the product click event

            const category = this.getAttribute('data-category');
            const price = parseInt(this.getAttribute('data-price'));
            const src = this.getAttribute('data-src');

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.category === category);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += price;
            } else {
                const item = { category: category, price: price, quantity: 1, totalPrice: price, src: src };
                cart.push(item);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const counter = cart.reduce((acc, item) => acc + item.quantity, 0);
        const cartCounter = document.getElementById('cart');
        cartCounter.innerHTML = `CART (${counter})`;
    }
});
}

let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener('click', topFunction);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
