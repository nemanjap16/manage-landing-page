const header = document.querySelector(".header")
const navBtn = document.querySelector(".mobile-nav-button")
const primaryNav = document.querySelector(".primary-nav")
const hamburger = document.querySelector(".hamburger")

navBtn.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ?
        navBtn.setAttribute("aria-expanded", false) : navBtn.setAttribute("aria-expanded", true)

    primaryNav.toggleAttribute("data-visible")
    header.toggleAttribute("data-overlay")

    primaryNav.hasAttribute("data-visible") ?
        hamburger.setAttribute("src", "/images/icon-close.svg") : hamburger.setAttribute("src", "/images/icon-hamburger.svg")

})

