const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const printProducts = document.querySelector(".print-products");
// const productButton = document.querySelector(".prints-header-items")
const productButton = document.getElementsByClassName("product-button");
const slider = document.querySelector("#slider");
let log = console.log

// console.log(slide.style.background)
// console.log(slider.style.backgroundImage)


function sliderRight() {
    let sliderImage = window.getComputedStyle(slider).backgroundImage
    let num = Number(sliderImage.charAt(37))
    if (num === 3) {
        num = 0
    }
    slider.style.backgroundImage = `url(slideshow/${num + 1}.jpg)`
    console.log(slider)
}

rightArrow.addEventListener("click", sliderRight);

function sliderLeft() {
    let sliderImage = window.getComputedStyle(slider).backgroundImage
    let num = Number(sliderImage.charAt(37))
    if (num === 1) {
        num = 4
    }
    slider.style.backgroundImage = `url(slideshow/${num - 1}.jpg)`
}

leftArrow.addEventListener("click", sliderLeft);



for (let i = 0; i < productButton.length; i++) {
    productButton[i].addEventListener("click", changeActive)
}
// for (let key of productButton) {
//     key.addEventListener("click", changeActive)
// }




function changeActive(event) {
    if (event.target.className.includes("active")) {
        event.target.className = event.target.className.replace("active", "")
    } else {
        for (let i = 0; i < productButton.length; i++) {
            productButton[i].className = productButton[i].className.replace("active", "");


            for (key of printProducts.children) {
                if (!event.target.className.includes(key.id)) {
                    key.style.display = "none"
                } else { key.style.display = "" };
            }
        }
        event.target.className += " active"
        // for (key of printProducts.children) {
        //     if (event.target.className.includes(key.id))
        //         key.style.display = "";

        // }


    }

}
