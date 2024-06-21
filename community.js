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