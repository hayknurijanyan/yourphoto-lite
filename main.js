const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")


// leftArrow.style.backgroundColor = "red"

function sliderRight() {
    rightArrow.style.backgroundColor = "yellow"
    console.log('done')
}

rightArrow.addEventListener("click", sliderRight);
