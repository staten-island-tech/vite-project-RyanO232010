import "./style.css";

const cards = [
  { name: "Dog", img: "/Animals/dog.avif", category: "Animals" },
  { name: "Dog", img: "/Animals/dogg.avif", category: "Animals" },
  { name: "African Wild Dog", img: "/Animals/african_wild_dog.jpg", category: "Animals" },
  { name: "Elk", img: "/Animals/elk.jpg", category: "Animals" },
  { name: "Wildebeest 1", img: "/Animals/wildebeest1.jpg", category: "Animals" },
  { name: "Wildebeest 2", img: "/Animals/wildebeest2.jpg", category: "Animals" },
  { name: "Mussel", img: "/Animals/mussel.jpg", category: "Animals" },
  { name: "Moss Spider", img: "/Animals/moss_spider.jpg", category: "Animals" },
  { name: "Desert Wildlife", img: "/Animals/desert_wildlife.jpg", category: "Animals" },
  { name: "Winter Wildlife", img: "/Animals/winter_wildlife.jpg", category: "Animals" },
  { name: "Bush Elephants", img: "/Animals/bush_elephants.jpg", category: "Animals" },
  { name: "Giraffe", img: "/Animals/giraffe.jpg", category: "Animals" },
  { name: "Wild Boar", img: "/Animals/wild_boar.jpg", category: "Animals" },
  { name: "Giant Panda", img: "/Animals/panda.jpg", category: "Animals" },
  { name: "Humpback Whale", img: "/Animals/whale.jpg", category: "Animals" },
  { name: "Koala", img: "/Animals/koala.jpg", category: "Animals" },
  { name: "Lion", img: "/Animals/lion.jpg", category: "Animals" },
  { name: "Polar Bear", img: "/Animals/pb.jpg", category: "Animals" },
  { name: "Chimpanzee", img: "/Animals/chimp.jpg", category: "Animals" },
  { name: "Tiger", img: "/Animals/tiger.jpg", category: "Animals" },



  // --- Flags (20 total) ---
  { name: "USA Flag", img: "/Flags/usa.svg", category: "Flags" },
  { name: "Canada Flag", img: "/Flags/canada.svg", category: "Flags" },
  { name: "UK Flag", img: "/Flags/uk.svg", category: "Flags" },
  { name: "France Flag", img: "/Flags/france.svg", category: "Flags" },
  { name: "Germany Flag", img: "/Flags/germany.svg", category: "Flags" },
  { name: "Italy Flag", img: "/Flags/italy.svg", category: "Flags" },
  { name: "Spain Flag", img: "/Flags/spain.svg", category: "Flags" },
  { name: "Portugal Flag", img: "/Flags/portugal.svg", category: "Flags" },
  { name: "Japan Flag", img: "/Flags/japan.svg", category: "Flags" },
  { name: "South Korea Flag", img: "/Flags/south_korea.svg", category: "Flags" },
  { name: "China Flag", img: "/Flags/china.svg", category: "Flags" },
  { name: "Brazil Flag", img: "/Flags/brazil.svg", category: "Flags" },
  { name: "Mexico Flag", img: "/Flags/mexico.svg", category: "Flags" },
  { name: "India Flag", img: "/Flags/india.svg", category: "Flags" },
  { name: "Australia Flag", img: "/Flags/australia.svg", category: "Flags" },
  { name: "New Zealand Flag", img: "/Flags/new_zealand.svg", category: "Flags" },
  { name: "South Africa Flag", img: "/Flags/south_africa.svg", category: "Flags" },
  { name: "Egypt Flag", img: "/Flags/egypt.svg", category: "Flags" },
  { name: "Sweden Flag", img: "/Flags/sweden.svg", category: "Flags" },
  { name: "Norway Flag", img: "/Flags/norway.svg", category: "Flags" },

  // --- Poker Cards (20 total) ---
  { name: "Ace of Spades", img: "/Poker/A_spades.svg", category: "Poker" },
  { name: "Ace of Hearts", img: "/Poker/A_hearts.svg", category: "Poker" },
  { name: "Ace of Diamonds", img: "/Poker/A_diamonds.svg", category: "Poker" },
  { name: "Ace of Clubs", img: "/Poker/A_clubs.svg", category: "Poker" },

  { name: "King of Spades", img: "/Poker/K_spades.svg", category: "Poker" },
  { name: "King of Hearts", img: "/Poker/K_hearts.svg", category: "Poker" },
  { name: "King of Diamonds", img: "/Poker/K_diamonds.svg", category: "Poker" },
  { name: "King of Clubs", img: "/Poker/K_clubs.svg", category: "Poker" },

  { name: "Queen of Spades", img: "/Poker/Q_spades.svg", category: "Poker" },
  { name: "Queen of Hearts", img: "/Poker/Q_hearts.svg", category: "Poker" },
  { name: "Queen of Diamonds", img: "/Poker/Q_diamonds.svg", category: "Poker" },
  { name: "Queen of Clubs", img: "/Poker/Q_clubs.svg", category: "Poker" },

  { name: "Jack of Spades", img: "/Poker/J_spades.svg", category: "Poker" },
  { name: "Jack of Hearts", img: "/Poker/J_hearts.svg", category: "Poker" },
  { name: "Jack of Diamonds", img: "/Poker/J_diamonds.svg", category: "Poker" },
  { name: "Jack of Clubs", img: "/Poker/J_clubs.svg", category: "Poker" },

  { name: "Ten of Spades", img: "/Poker/10_spades.svg", category: "Poker" },
  { name: "Ten of Hearts", img: "/Poker/10_hearts.svg", category: "Poker" },
  { name: "Ten of Diamonds", img: "/Poker/10_diamonds.svg", category: "Poker" },
  { name: "Ten of Clubs", img: "/Poker/10_clubs.svg", category: "Poker" }
];

];

document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <div class="l/dmode"><button>Dark Mode/Light Mode</button></div>
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
