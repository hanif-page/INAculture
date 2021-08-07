const hamburgerOpen = () => {
    const hamburger = document.querySelector(".hamburger")
    const mobileNav = document.querySelector(".mobileNav")
    hamburger.classList.toggle('openNav')
    mobileNav.classList.toggle('openNav')
}