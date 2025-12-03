import "./style.css";

const cards = [
  { name: "Dog", img: "/Animals/dog.avif", category: "Animals" },
  { name: "Dog", img: "/Animals/dogg.avif", category: "Animals" },
  {
    name: "African Wild Dog",
    img: "/Animals/african_wild_dog.jpg",
    category: "Animals",
  },
  { name: "Elk", img: "/Animals/elk.jpg", category: "Animals" },
  {
    name: "Wildebeest 1",
    img: "/Animals/wildebeest1.jpg",
    category: "Animals",
  },
  {
    name: "Wildebeest 2",
    img: "/Animals/wildebeest2.jpg",
    category: "Animals",
  },
  { name: "Mussel", img: "/Animals/mussel.jpg", category: "Animals" },
  { name: "Moss Spider", img: "/Animals/moss_spider.jpg", category: "Animals" },
  {
    name: "Desert Wildlife",
    img: "/Animals/desert_wildlife.jpg",
    category: "Animals",
  },
  {
    name: "Winter Wildlife",
    img: "/Animals/winter_wildlife.jpg",
    category: "Animals",
  },
  {
    name: "Bush Elephants",
    img: "/Animals/bush_elephants.jpg",
    category: "Animals",
  },
  { name: "Giraffe", img: "/Animals/giraffe.jpg", category: "Animals" },
  { name: "Wild Boar", img: "/Animals/wild_boar.jpeg", category: "Animals" },
  { name: "Giant Panda", img: "/Animals/panda.JPG", category: "Animals" },
  { name: "Humpback Whale", img: "/Animals/whale.jpg", category: "Animals" },
  { name: "Koala", img: "/Animals/koala.jpg", category: "Animals" },
  { name: "Lion", img: "/Animals/lion.jpg", category: "Animals" },
  { name: "Polar Bear", img: "/Animals/pb.jpg", category: "Animals" },
  { name: "Chimpanzee", img: "/Animals/chimp.jpg", category: "Animals" },
  { name: "Tiger", img: "/Animals/tiger.jpg", category: "Animals" },

  { name: "USA Flag", img: "/Flags/usa.png", category: "Flags" },
  { name: "Canada Flag", img: "/Flags/canada.png", category: "Flags" },
  { name: "UK Flag", img: "/Flags/uk.png", category: "Flags" },
  { name: "France Flag", img: "/Flags/france.png", category: "Flags" },
  { name: "Germany Flag", img: "/Flags/germany.png", category: "Flags" },
  { name: "Italy Flag", img: "/Flags/italy.png", category: "Flags" },
  { name: "Spain Flag", img: "/Flags/spain.png", category: "Flags" },
  { name: "Portugal Flag", img: "/Flags/portugal.png", category: "Flags" },
  { name: "Japan Flag", img: "/Flags/japan.png", category: "Flags" },
  {
    name: "South Korea Flag",
    img: "/Flags/south_korea.png",
    category: "Flags",
  },
  { name: "China Flag", img: "/Flags/china.png", category: "Flags" },
  { name: "Brazil Flag", img: "/Flags/brazil.png", category: "Flags" },
  { name: "Mexico Flag", img: "/Flags/mexico.png", category: "Flags" },
  { name: "India Flag", img: "/Flags/india.png", category: "Flags" },
  { name: "Australia Flag", img: "/Flags/australia.png", category: "Flags" },
  {
    name: "New Zealand Flag",
    img: "/Flags/new_zealand.png",
    category: "Flags",
  },
  {
    name: "South Africa Flag",
    img: "/Flags/south_africa.png",
    category: "Flags",
  },
  { name: "Egypt Flag", img: "/Flags/egypt.png", category: "Flags" },
  { name: "Sweden Flag", img: "/Flags/sweden.png", category: "Flags" },
  { name: "Norway Flag", img: "/Flags/norway.png", category: "Flags" },

  { name: "Ace of Spades", img: "/Poker/A_spades.png", category: "Poker" },
  { name: "Ace of Hearts", img: "/Poker/A_hearts.png", category: "Poker" },
  { name: "Ace of Diamonds", img: "/Poker/A_diamonds.png", category: "Poker" },
  { name: "Ace of Clubs", img: "/Poker/A_clubs.png", category: "Poker" },
  { name: "King of Spades", img: "/Poker/K_spades.png", category: "Poker" },
  { name: "King of Hearts", img: "/Poker/K_hearts.png", category: "Poker" },
  { name: "King of Diamonds", img: "/Poker/K_diamonds.png", category: "Poker" },
  { name: "King of Clubs", img: "/Poker/K_clubs.png", category: "Poker" },
  { name: "Queen of Spades", img: "/Poker/Q_spades.png", category: "Poker" },
  { name: "Queen of Hearts", img: "/Poker/Q_hearts.png", category: "Poker" },
  {
    name: "Queen of Diamonds",
    img: "/Poker/Q_diamonds.png",
    category: "Poker",
  },
  { name: "Queen of Clubs", img: "/Poker/Q_clubs.png", category: "Poker" },
  { name: "Jack of Spades", img: "/Poker/J_spades.png", category: "Poker" },
  { name: "Jack of Hearts", img: "/Poker/J_hearts.png", category: "Poker" },
  { name: "Jack of Diamonds", img: "/Poker/J_diamonds.png", category: "Poker" },
  { name: "Jack of Clubs", img: "/Poker/J_clubs.png", category: "Poker" },
  { name: "Ten of Spades", img: "/Poker/10_spades.png", category: "Poker" },
  { name: "Ten of Hearts", img: "/Poker/10_hearts.png", category: "Poker" },
  { name: "Ten of Diamonds", img: "/Poker/10_diamonds.png", category: "Poker" },
  { name: "Ten of Clubs", img: "/Poker/10_clubs.png", category: "Poker" },
];

function inject(card) {
  const container = document.querySelector(".container");

  if (!container) {
    console.error("Container not found in DOM.");
    return;
  }

  const categoryClass = card.category.toLowerCase();

  for (let i = 0; i < 2; i++) {
    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="memory-card ${categoryClass}" 
             data-title="${card.name}" 
             data-category="${card.category}">
          
          <img class="${categoryClass}" 
               src="${card.img}" 
               alt="${card.name}">
        </div>
      `
    );
  }
}

function injectAll(cards) {
  const container = document.querySelector(".container");
  if (!container) return;

  const indexes = [];
  for (let i = 0; i < cards.length; i++) {
    indexes.push(i, i);
  }

  indexes.sort(() => Math.random() - 0.5);

  indexes.forEach((i) => inject(cards[i], container));
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

injectAll(cards);
filterButtons();
filterByCategory("");
