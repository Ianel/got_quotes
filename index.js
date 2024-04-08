const sentence = document.querySelector("#sentence");
const author = document.querySelector("#author");
const house = document.querySelector("#house");
const btn = document.querySelector("#btn");

const fetchQuote = async () => {
    const response = await fetch(
        "https://api.gameofthronesquotes.xyz/v1/random"
    );
    const result = await response.json();

    sentence.textContent = `${result.sentence}`;
    author.textContent = `By ${result.character.name}`;
    house.textContent = `Of ${result.character.house.name}`;

    sentence.style.padding = "24px";
};

document.addEventListener("DOMContentLoaded", fetchQuote);
btn.addEventListener("click", fetchQuote);
