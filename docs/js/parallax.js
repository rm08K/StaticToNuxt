let pageYOffset = 0
window.addEventListener("scroll",() => {
    pageYOffset = window.pageYOffset / 5
    var positionData = `${pageYOffset}px`
    console.log(positionData)
    document.querySelector(".parallax1").style.backgroundPositionY = `${pageYOffset}px`
})