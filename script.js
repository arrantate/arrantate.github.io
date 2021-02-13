const year = document.querySelector("#year")

document.addEventListener("DOMContentLoaded", () => {
    year.innerHTML = new Date().getFullYear()
})