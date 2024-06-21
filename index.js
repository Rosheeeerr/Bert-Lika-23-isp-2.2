let leftArrow = document.getElementById('left')
let rightArrow = document.getElementById('right')
let sliderLine = document.getElementById('slider')

let imageId = 3
let pos = 0

leftArrow.addEventListener("click", () => {
    if(imageId != 1){
        pos += 46.421875
        sliderLine.style.left = pos + "vw"
        imageId -= 1
    }
})
rightArrow.addEventListener("click", () => {
    if(imageId != 5){
        pos -= 46.421875
        sliderLine.style.left = pos + "vw"
        imageId += 1
    }
})
burgerOpen.addEventListener("click", () => {
    burgerMenu.style.right = "0%"
    burgerMenu.style.opacity ="1"
    burgerMenu.style.visibility ="visible"
})

burgerClose.addEventListener("click", () => {
    burgerMenu.style.right = "-11%"
    burgerMenu.style.opacity ="0"
    burgerMenu.style.visibility ="hidden"
})