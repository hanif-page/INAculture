const mainTextTitles = document.querySelectorAll(".aosText h2")
const mainTextParagraphs = document.querySelectorAll(".aosText .paragraph")
const imgContainers = document.querySelectorAll(".imgContainer")

// offset for customize on what height I want to make the animation active
const elInView = (el, offset) => {
    let elementTop = el.getBoundingClientRect().top
    
    // return true of false
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    )
}

const addAnimation = (el) => el.classList.add("animationScrolled")

const removeAnimation = (el) => el.classList.remove("animationScrolled")

const runAnimation = () => {
    mainTextTitles.forEach(mainTextTitle => {
        if(elInView(mainTextTitle, 100)) addAnimation(mainTextTitle)
    })

    mainTextParagraphs.forEach(mainTextParagraph => {
        if(elInView(mainTextParagraph, 100)) addAnimation(mainTextParagraph)

    })

    imgContainers.forEach(imgContainer => {
        if(elInView(imgContainer, 100)) addAnimation(imgContainer)
    })
}

window.addEventListener("scroll", () => runAnimation())