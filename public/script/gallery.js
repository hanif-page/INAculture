// GENERATING IMAGE GALLERY
const imageContainerMobile = document.querySelector("#imageContainerMobile")
const imageContainerTabletColumn1 = document.querySelector("#imageContainerTablet #col-1")
const imageContainerTabletColumn2 = document.querySelector("#imageContainerTablet #col-2")
const imageContainerDesktopColumn1 = document.querySelector("#col-desktop-1")
const imageContainerDesktopColumn2 = document.querySelector("#col-desktop-2")
const imageContainerDesktopColumn3 = document.querySelector("#col-desktop-3")
var minImageNumber = 1
var maxImageNumber = 24

// GENERATE IMAGE FUNCTION 
const generateImage = (index, device) => {
    const img = document.createElement('img')
    const imgSrc = "../assets/img4/" + index + ".jpg"
    const imgAlt = "Indonesian Culture or Nature Photos"
    img.src = imgSrc
    img.id = index
    img.alt = imgAlt
    img.setAttribute("onclick", "displayLightbox(this.id)")
    
    // what type is the device
    if(device === "mobile") imageContainerMobile.appendChild(img)
    else if(device === "tabletCol1") imageContainerTabletColumn1.appendChild(img)
    else if(device === "tabletCol2") imageContainerTabletColumn2.appendChild(img)
    else if(device === "desktopCol1") imageContainerDesktopColumn1.appendChild(img)
    else if(device === "desktopCol2") imageContainerDesktopColumn2.appendChild(img)
    else if(device === "desktopCol3") imageContainerDesktopColumn3.appendChild(img)
    else console.error("ERR : unknown device argument generateImage()")
}

// mobile gallery
for(var i = minImageNumber; i <= maxImageNumber; i++) generateImage(i, "mobile")

// tablet gallery
for(var i = minImageNumber; i <= maxImageNumber; i++)
{
    if(i <= maxImageNumber*1/2) generateImage(i, "tabletCol1")
    else if(i > maxImageNumber*1/2 && i <= maxImageNumber) generateImage(i, "tabletCol2")
    else console.error("ERR : while generating image (tablet gallery)")
}

// desktop gallery 
for(var i = minImageNumber; i <= maxImageNumber; i++)
{
    if(i <= maxImageNumber*1/3) generateImage(i, "desktopCol1")
    else if(i > maxImageNumber*1/3 && i <= maxImageNumber*2/3) generateImage(i, "desktopCol2")
    else if(i > maxImageNumber*2/3 && i <= maxImageNumber) generateImage(i, "desktopCol3")
    else console.error("ERR : while generating image (desktop gallery)")
}
// GENERATING IMAGE GALLERY


// LIGHTBOX LOGIC
const child = document.querySelectorAll(".child")
const body = document.querySelector('body')
const lightBoxTitle = document.querySelector(".lightboxTitle")
const lightBox = document.querySelector(".lightbox")
const lightBoxDisplay = document.querySelector('#display')

// initial image number
var activeImageIndex

// display the lightbox
function displayLightbox (imageIndex) 
{
    activeImageIndex = imageIndex
    changeImage(activeImageIndex)

    // open the lightbox    
    lightBox.style.display = "flex"
    body.style.overflow = "hidden"
}

// close the lightbox
function closeLightbox () 
{
    var displayedImage = document.querySelector("#displayedImage")
    displayedImage.remove()
    lightBox.style.display = "none"
    body.style.overflow = "auto"
}

// add or change the image that displayed on the lightbox
function changeImage(currentIndex)
{
    var imageSrc = "../assets/img4/" + currentIndex + ".jpg"
    var img = document.createElement("img")
    img.id = "displayedImage"
    img.src = imageSrc 
    lightBoxDisplay.appendChild(img)
    var title = "Gambar ke-" + currentIndex + " dari " + maxImageNumber
    lightBoxTitle.innerHTML = title
}

// for the onclick next image button
function nextImage ()
{
    // reset the image that displayed before
    var displayedImage = document.querySelector("#displayedImage")
    displayedImage.remove()

    // increase the index
    activeImageIndex++

    // check how big is the activeImageIndex
    if (activeImageIndex > maxImageNumber) 
    {
        activeImageIndex = minImageNumber
        changeImage(activeImageIndex)
    } else changeImage(activeImageIndex)
}

// for the onclick previous image button
function previousImage ()
{
    // reset the image that displayed before
    var displayedImage = document.querySelector("#displayedImage")
    displayedImage.remove()

    // decrease the index
    activeImageIndex--

    // check how big is the activeImageIndex
    if (activeImageIndex < minImageNumber) 
    {
        activeImageIndex = maxImageNumber
        changeImage(activeImageIndex)
    } else changeImage(activeImageIndex)
}
// LIGHTBOX LOGIC


// ANIMATE ON SCROLL 
const aosImages = document.querySelectorAll("main img")
const scrollMe = document.querySelector("main .scrollMe")

// offset for customize on what height I want to make the animation active
const elInView = (el, offset) => {
    let elementTop = el.getBoundingClientRect().top; 
    
    // return true of false
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    )
}

const addAnimation = (el) => el.classList.add("animationScrolled")

const removeAnimation = (el) => el.classList.remove("animationScrolled")

const runAnimation = () => {
   aosImages.forEach(aosImage => {
       if(elInView(aosImage, 200)) addAnimation(aosImage)
   })
}

window.addEventListener("scroll", () => {
    runAnimation()

    scrollMe.style.display = "none"
});
// ANIMATE ON SCROLL