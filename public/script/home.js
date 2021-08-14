const aboutUsTitle = document.querySelector(".aboutUs .aboutUsTitle")
const aboutUsContents = document.querySelectorAll(".aboutUs .aboutUsContent")
const aboutUsLine = document.querySelector(".aboutUs .line")
const dataChilds = document.querySelectorAll(".data .data-child")
const dataIcons = document.querySelectorAll(".data .fas")
const dataNumberElements = document.querySelectorAll(".data .data-number")

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
    if(elInView(aboutUsTitle, 100))
    {
        addAnimation(aboutUsTitle)
    }
    if (elInView(aboutUsLine, 100))
    {
        addAnimation(aboutUsLine)
    }
    aboutUsContents.forEach(aboutUsContent => {
        if(elInView(aboutUsContent, 100)){
            addAnimation(aboutUsContent)
        }
    })

    dataIcons.forEach(dataIcon => {
        if(elInView(dataIcon, 100)){
            addAnimation(dataIcon)
        }
    })

    // the counting animation
    dataNumberElements.forEach(dataNumber => {
        if(elInView(dataNumber, 0)){
            addAnimation(dataNumber)
        }
    })
};

window.addEventListener("scroll", () => {
    runAnimation()

    // counting animation on the data section
    const CountingDataNumberElements = document.querySelectorAll(".data-number.animationScrolled")
    var speed = 10
    const activateCount = () => {
        CountingDataNumberElements.forEach( number => {
            const updateCount = () => {
                const target = +number.getAttribute("number-target")
                const count = +number.innerText
    
                // example. If the target number is 1000, then the number animation will be multiply by 100
                const increment = target / speed
    
                if(count < target)
                {
                    number.innerText = count + increment
                    setTimeout(updateCount, 200)
                }
                else 
                {
                    number.innerText = target
                }
            }
    
            // run the function
            updateCount()
        });
    } 

    setTimeout(activateCount, 750)

});



