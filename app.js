const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit";

let getJoke = () => {

    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `${item.setup}`;
        })
}
btn.addEventListener("click", getJoke);
getJoke();
