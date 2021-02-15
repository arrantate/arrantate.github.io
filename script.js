fetch('https://api.github.com/users/arrantate')
    .then(response => response.json()) //Converting the response to a JSON object
    .then(data => {
        console.log(data)
        document.querySelector("#githubUsername").innerHTML = data.login
        document.querySelector("#githubPublic").innerHTML = data.public_repos
        document.querySelector("#githubFollowers").innerHTML = data.followers
    })
    .catch(error => console.error(error));



