// Display user stats from the github API
fetch('https://api.github.com/users/arrantate')
    .then(response => response.json())
    .then(data => {
        document.querySelector("#githubUsername").innerHTML = data.login
        document.querySelector("#githubPublic").innerHTML = data.public_repos
        document.querySelector("#githubFollowers").innerHTML = data.followers
    })
    .catch(error => console.error(error));


// Blinking underscore at the end of the github section
const blinking_ = document.querySelector("#blinking_")
const blinkInterval = 500
const blink = () => {
    if (blinking_.innerHTML === '_') {
        blinking_.innerHTML = ''
    } else {
        blinking_.innerHTML = '_'
    }
}
setInterval(blink, blinkInterval)


// Make sections drop down on arrow click
document.querySelectorAll('.arrow').forEach(arrow => {
    let arrowActive = true
    arrow.onclick = () => {
        console.log(arrow.dataset.class)
        if (arrowActive) {
            document.querySelectorAll(`.${arrow.dataset.class}`).forEach((div) => {
                div.style.display = "none"
                arrow.classList.add("rotate-90")
            })
            arrowActive = false
        } else {
            document.querySelectorAll(`.${arrow.dataset.class}`).forEach((div) => {
                div.style.display = "block"
                arrow.classList.remove("rotate-90")
            })
            arrowActive = true
        }
    }
})