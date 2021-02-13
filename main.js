const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const slider = document.querySelector("#slider")

// console.log(slide.style.background)
console.log(slider.style.backgroundImage)


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
    console.log(slider)
}

leftArrow.addEventListener("click", sliderLeft);