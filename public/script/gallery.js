const imageContainerMobile = document.querySelector("#imageContainerMobile")
const imageContainerTabletColumn1 = document.querySelector("#imageContainerTablet #col-1")
const imageContainerTabletColumn2 = document.querySelector("#imageContainerTablet #col-2")
const imageContainerDesktopColumn1 = document.querySelector("#col-desktop-1")
const imageContainerDesktopColumn2 = document.querySelector("#col-desktop-2")
const imageContainerDesktopColumn3 = document.querySelector("#col-desktop-3")
var minImageNumber = 1
var maxImageNumber = 24

// mobile gallery
for(var i = minImageNumber; i <= maxImageNumber; i++)
{
    var img = document.createElement('img')
    var imgSrc = "../assets/img4/" + i + ".jpg"
    img.src = imgSrc
    img.id = i
    img.setAttribute("onclick", "displayLightbox(this.id)") 
    imageContainerMobile.appendChild(img)

}

// tablet gallery
for(var i = minImageNumber; i <= maxImageNumber*1/2; i++)
{
    var img = document.createElement('img')
    var imgSrc = "../assets/img4/" + i + ".jpg"
    img.src = imgSrc
    img.id = i
    img.setAttribute("onclick", "displayLightbox(this.id)") 
    imageContainerTabletColumn1.appendChild(img)
}
for(var i = maxImageNumber*1/2 + 1; i <= maxImageNumber; i++)
{
    var img = document.createElement('img')
    var imgSrc = "../assets/img4/" + i + ".jpg"
    img.src = imgSrc
    img.id = i
    img.setAttribute("onclick", "displayLightbox(this.id)") 
    imageContainerTabletColumn2.appendChild(img)
}

// desktop gallery 

// col-desktop-1
for(var i = minImageNumber; i <= maxImageNumber*1/3; i++)
{
    var img = document.createElement('img')
    var imgSrc = "../assets/img4/" + i + ".jpg"
    img.src = imgSrc
    img.id = i
    img.setAttribute("onclick", "displayLightbox(this.id)") 
    imageContainerDesktopColumn1.appendChild(img)
}
// col-desktop-2
for(var i = maxImageNumber*1/3 + 1; i <= maxImageNumber*2/3; i++)
{
    var img = document.createElement('img')
    var imgSrc = "../assets/img4/" + i + ".jpg"
    img.src = imgSrc
    img.id = i
    img.setAttribute("onclick", "displayLightbox(this.id)") 
    imageContainerDesktopColumn2.appendChild(img)
}
// col-desktop-3
for(var i = maxImageNumber*2/3 + 1; i <= maxImageNumber; i++)
{
    var img = document.createElement('img')
    var imgSrc = "../assets/img4/" + i + ".jpg"
    img.src = imgSrc
    img.id = i
    img.setAttribute("onclick", "displayLightbox(this.id)") 
    imageContainerDesktopColumn3.appendChild(img)
}

// (Lightbox Logic)
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

//   close the lightbox
function closeLightbox () 
{

    var displayedImage = document.querySelector("#displayedImage")
    displayedImage.remove()
    lightBox.style.display = "none"
    body.style.overflow = "auto"
    
}

//   add or change the image that displayed on the lightbox
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

//   for the onclick next image button
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
    }
    else changeImage(activeImageIndex)
}

//   for the onclick previous image button
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
    }
    else changeImage(activeImageIndex)
}
// (Lightbox Logic)


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
};

const addAnimation = (el) => {
    el.classList.add("animationScrolled")
};

const removeAnimation = (el) => {
    el.classList.remove("animationScrolled")
}

const runAnimation = () => {
   aosImages.forEach(aosImage => {
       if(elInView(aosImage, 200))
       {
           addAnimation(aosImage)
       }
   })
};

window.addEventListener("scroll", () => {
    runAnimation()

    scrollMe.style.display = "none"
});
// ANIMATE ON SCROLL