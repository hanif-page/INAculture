// GENERATING WHAT THEY SAY CARD
const containerMobile1 = document.querySelector(".container-mobile")
const containerTablet1 = document.querySelector(".container-tablet .col-1")
const containerTablet2 = document.querySelector(".container-tablet .col-2")
const containerDesktop1 = document.querySelector(".container-desktop .col-1")
const containerDesktop2 = document.querySelector(".container-desktop .col-2")
const containerDesktop3 = document.querySelector(".container-desktop .col-3")
const minCard = 1
const maxCard = 6

const nameList = ['regina Sujowo', 'michael putra','gani m. juan', 'jaki susanto', 'm. randy pratama', 'patricia welina']
const ageLocationList = ['17, surabaya', '20, DKI jakarta', '19, padang', '25, balikpapan', '15, jayapura', '23, bandung']
const wordToSayList = ['Cukup bermanfaat platformnya', 'Nice concept, I love it. Mungkin bakal ngerekomendasiin temen buat cek platform ini', 'Platform yang bagus, memotivasi saya menjadi lebih semangat dalam menjalankan pekerjaan saya saat ini', 'Tempat yang bagus untuk menyalurkan hasil jepretan saya', 'Terima Kasih. Karena platform ini, hasil foto saya tidak tersimpan begitu saja. Tetapi bisa dibagikan pada tempatnya', 'Hatur Nuhun buat foundernya']

// make card function
const generateCard = (index, device) => {
    
    // make topSection element and add class
    const topSection = document.createElement("div")
    topSection.classList.add("top-section")

    // make profilePict element and add class
    const profilePict = document.createElement("img")
    profilePict.classList.add("profilePict")
    profilePict.src = "assets/profile-pict/" + index + ".jpg"
    profilePict.alt = "Photographer Profile Picture"

    // make caption element and add class
    const caption = document.createElement("div")
    caption.classList.add("caption")

    // caption child element
    const captionName = document.createElement("h2")
    captionName.innerHTML = nameList[index - 1]
    const captionAgeLocation = document.createElement("h3")
    captionAgeLocation.innerHTML = ageLocationList[index - 1]

    // appending all the caption child element
    caption.appendChild(captionName)
    caption.appendChild(captionAgeLocation)

    // appending top section child
    topSection.appendChild(profilePict)
    topSection.appendChild(caption)

    // make bottomSection element and add class
    const bottomSection = document.createElement("div")
    bottomSection.classList.add("bottom-section")

    // make text element, and append a text inside it
    const wordToSay = document.createElement("p")
    wordToSay.innerHTML = '" ' + wordToSayList[index - 1] + ' "'
    bottomSection.appendChild(wordToSay)

    // MAKE CARD ELEMENT AND ADD CLASS
    const card = document.createElement("div")
    card.classList.add("card")

    // APPEND ALL CARD CHILD ELEMENT
    card.appendChild(topSection)
    card.appendChild(bottomSection)

    // append the card to each container
    if (device === "mobile") containerMobile1.appendChild(card)
    else if (device === "tablet1") containerTablet1.appendChild(card)
    else if (device === "tablet2") containerTablet2.appendChild(card)
    else if (device === "desktop1") containerDesktop1.appendChild(card)   
    else if (device === "desktop2") containerDesktop2.appendChild(card)   
    else if (device === "desktop3") containerDesktop3.appendChild(card)   
    else console.error("ERR : unknown device argument generateCard()")
}

// MOBILE CARD
for(var i = minCard; i <= maxCard; i++) {generateCard(i, "mobile")}

// TABLET CARD
for (var i = minCard; i <= maxCard; i++)
{
    if(i <= maxCard/2) generateCard(i, "tablet1")
    else if (i > maxCard/2 && i <= maxCard ) generateCard(i, "tablet2")
    else console.error("ERR : while generating tablet card")
}

// DESKTOP CARD 
for (var i = minCard; i <= maxCard; i++)
{
    if(i <= maxCard/3) generateCard(i, "desktop1")
    else if (i > maxCard/3 && i <= maxCard*2/3) generateCard(i, "desktop2")
    else if (i > maxCard*2/3 && i <= maxCard) generateCard(i, "desktop3")
    else console.error("ERR : while generating desktop card")
}


// ANIMATE ON SCROLL
const aboutUsTitle = document.querySelector(".aboutUs .aboutUsTitle")
const aboutUsContents = document.querySelectorAll(".aboutUs .aboutUsContent")
const aboutUsLine = document.querySelector(".aboutUs .line")
const dataChilds = document.querySelectorAll(".data .data-child")
const dataIcons = document.querySelectorAll(".data .fas")
const dataNumberElements = document.querySelectorAll(".data .data-number")
const whatTheySayTitle = document.querySelector(".whatTheySay h1")
const cards = document.querySelectorAll(".card")

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
    if(elInView(aboutUsTitle, 100)) addAnimation(aboutUsTitle)
    if (elInView(aboutUsLine, 100)) addAnimation(aboutUsLine)
    if (elInView(whatTheySayTitle, 100)) addAnimation(whatTheySayTitle)

    // I keep all the forEach function above with normal syntax (not a one liner), because I want to keep it readable  

    aboutUsContents.forEach(aboutUsContent => {
        if(elInView(aboutUsContent, 100)) addAnimation(aboutUsContent)
    })

    dataIcons.forEach(dataIcon => {
        if(elInView(dataIcon, 100)) addAnimation(dataIcon)
    })

    // the counting animation
    dataNumberElements.forEach(dataNumber => {
        if(elInView(dataNumber, 0)) addAnimation(dataNumber)
    })
    
    cards.forEach(card => {
        if(elInView(card, 200)) addAnimation(card)
    })
}

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
                }else number.innerText = target

            }
    
            // run the function
            updateCount()
        })
    } 

    setTimeout(activateCount, 750)
})
// ANIMATE ON SCROLL


