const hamburger = document.querySelector(".hamburger-svg")
const close = document.querySelector(".close-svg")

hamburger.addEventListener("click", () => {
    var tl = gsap.timeline()

    tl
    .to(".hamburger-svg", {
        duration: 0.4,
        opacity: 0,
        zIndex :-1
    },"a")
    .to(".close-svg", {
        duration: 0.4,
        opacity: 1,
        zIndex: 3,
        delay: 0.3
    },"a")
    .to(".menu-bar", {
        top: "0%"
    },"a")
})

close.addEventListener("click", () => {
    var tl = gsap.timeline()

    tl
    .to(".hamburger-svg", {
        duration: 0.4,
        opacity: 1,
        zIndex : 1
    },"a")
    .to(".close-svg", {
        duration: 0.4,
        opacity: 0,
        zIndex: -1,
    },"a")
    .to(".menu-bar", {
        top: "-100%"
    },"a")
})