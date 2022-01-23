const imagenes = ['images/slide1.jpeg', 'images/slide2.jpeg', 'images/slide3.jpeg'];
let cont = 1;
let count_cart = 0;
const checks = [];

document.addEventListener("DOMContentLoaded", () => {
    carrousel();
    countCart();
});

const countCart = () => {
    const carts = document.querySelectorAll(".cart img");
    const cartElement = document.querySelector("#count-cart");
    const alert = document.querySelector(".alert");

    carts.forEach(cart => {
        cart.addEventListener("click", () => {
            let messageAlert = "";
            alert.classList.remove("hidden");

            if (cart.classList.contains("in-cart")) {
                cart.src = "images/shopping-cart-icon.svg"
                cart.classList.remove("in-cart");
                --count_cart;
                messageAlert = "Producto eliminado del carrito";
            } else {
                cart.src = "images/less-cart.svg"
                cart.classList.add("in-cart");
                ++count_cart;
                messageAlert = "Producto agregado al carrito";
            }

            alert.querySelector("p").innerHTML = messageAlert;
            setTimeout(() => {
                alert.classList.add("hidden");
            }, 2000);
            cartElement.innerHTML = count_cart;
        });
    });
}

const carrousel = () => {
    let banner = document.querySelector('.banner');

    let check1 = banner.querySelector('#ck1'),
        check2 = banner.querySelector('#ck2'),
        check3 = banner.querySelector('#ck3');

    checks.push(check1, check2, check3);

    banner.addEventListener('click', e => {
        tgt = e.target;

        if (tgt === checks[0]) {
            printPoint(0);
        } else if (tgt === checks[1]) {
            printPoint(1);
        } else if (tgt === checks[2]) {
            printPoint(2);
        }
    });
}

const printPoint = (index) => {
    const img = document.querySelector('.banner img');
    img.src = imagenes[index];

    checks.map((check, i) => {
        i === index ? check.classList.add("check") : check.classList.remove("check")
    });
}

const cambiarImagenes = () => {
    printPoint(cont);
    cont = cont < (checks.length - 1) ? cont + 1 : 0;
}

setInterval(cambiarImagenes, 3000);