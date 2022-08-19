let formElement = document.querySelector("form");
let hourly = document.getElementById("hourly")
let textarea = document.getElementById("textAreaEl")
formElement.elements.radios[2].addEventListener("click" , () => {
    hourly.style.display = "block"
    textarea.style.display = "none"

})


formElement.elements.radios[0].addEventListener("click" , () => {
    hourly.style.display = "none"
    textarea.style.display = "inline"
})


formElement.elements.radios[1].addEventListener("click" , () => {
    hourly.style.display = "none"
    textarea.style.display = "inline"
})