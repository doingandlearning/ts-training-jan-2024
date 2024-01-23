console.log("Everything is working fine ... ");

// DOM -> Document Object Model
console.log(document);

const div = document.querySelector("#app") as HTMLDivElement;

const p = document.createElement("p");

p.textContent = "Welcome to our coffee shop!";

div!.append(p); // optional chaining ...

const obj = { person: { name: { firstName: "Kevin" } } };

const title = document.querySelector("h1");
title!.textContent = "Coffee Shoppe";

document.body.style.backgroundColor = "black";
document.body.style.color = "white";

console.log(div.childNodes);
console.log(div.children);

const shopLocations = ["Glasgow", "Salford", "London", "Belfast"];
const drinks = ["Americano", "Latte", "Mocha", "Cappacino"];

const shopButton = document.getElementById("shops") as HTMLButtonElement;
const drinkButton = document.getElementById("drinks") as HTMLButtonElement;
const results = document.getElementById("results") as HTMLDivElement;
const inputEl = document.getElementById("test") as HTMLInputElement;

inputEl!.value;

shopButton?.addEventListener("click", () => {
  let container = "<ul>";
  shopLocations.forEach((location) => {
    container += `<li>${location}</li>`;
  });
  container += "</ul>";
  results!.innerHTML = container;
});

// React
// Vue
// jQuery

// Imperative -> Declarative
