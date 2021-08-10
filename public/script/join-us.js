const inputElement = document.querySelectorAll(".input-child input")
const submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener('click', () => {
    var fillCount = 0
    
    for(var i = 0; i < inputElement.length; i++)
    {
        if (inputElement[i].value === "")
        {
            fillCount += 1
        } 
    }

    if (fillCount != 0)
    {
        alert("Semua Biodata Harus Diisi !")
    } 
})