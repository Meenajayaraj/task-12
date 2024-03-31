const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let randomJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.textContent = `${item.joke}`;
    });
};
btn.addEventListener("click", randomJoke);
randomJoke();