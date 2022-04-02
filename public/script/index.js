const hamburgerOpen = () => {
    document.querySelector(".hamburger").classList.toggle('openNav')
    document.querySelector(".mobileNav").classList.toggle('openNav')
}

// Copyright year
const copyrightYear = document.querySelector(".copyright .yyyy")
const currentDate = new Date()
copyrightYear.innerHTML = currentDate.getFullYear()