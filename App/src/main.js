import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

const cards = [
  { name: "Dog", img: "/Animals/dog.avif", category: "Animals" },
  { name: "Dog", img: "/Animals/dogg.avif", category: "Animals" },
];

document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <h1>Hello!</h1>
      <h1>Welcome to the Memory Game!</h1>
      <h1>Please choose your version!</h1>
    </div>

    <div class="menu">
      <div class="Versions">
        <button class="filterb" data-category="Flags">Flags ( Easy )</button>
        <button class="filterb" data-category="Animals">Animals ( Medium )</button>
        <button class="filterb" data-category="Poker Cards">Poker Cards ( Hard )</button>
      </div>
    </div>
  </div>
`;

function inject(card) {
  const container = document.querySelector(".container");

  if (!container) {
    console.error("Container not found in DOM.");
    return;
  }

  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="memory-card" 
           data-title="${card.name}" 
           data-category="${card.category}">  
        <img class="img" src="${card.img}" alt="${card.name}">
      </div>
    `
  );
}

function filterByCategory(category) {
  document.querySelectorAll(".memory-card").forEach((card) => {
    const cardCat = card.dataset.category;

    if (category === "All" || category === cardCat) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function filterButtons() {
  document.querySelectorAll(".filterb").forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      filterByCategory(category);
    });
  });
}

cards.forEach(inject);
filterButtons();
filterByCategory("");
