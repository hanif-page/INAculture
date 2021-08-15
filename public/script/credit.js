const toolsName = document.querySelectorAll(".tools-name")

// offset for customize on what height I want to make the animation active
const elInView = (el, offset) => {
    let elementTop = el.getBoundingClientRect().top; 
    
    // return true of false
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    )
};

const addAnimation = (el) => {
    el.classList.add("animationScrolled")
};

const removeAnimation = (el) => {
    el.classList.remove("animationScrolled")
}

const runAnimation = () => {
    toolsName.forEach(toolName => {
        if(elInView(toolName, 100))
        {
            addAnimation(toolName)
        }
    })
};

window.addEventListener('scroll', () => {
    runAnimation()
})