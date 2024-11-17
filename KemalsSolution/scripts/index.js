const allCards = document.getElementById("all-cards");
const general = document.getElementById("general");
const computers = document.getElementById("computers");
const mathematics = document.getElementById("math");
const vehicles = document.getElementById("vehicles");
const pokemon = document.getElementById("pokemon");

//console.log(general, computers, mathematics, vehicles, pokemon);
console.log(allCards);

const data = [
  {
    id: "general",
    name: "General Knowledge",
    image: "../images/General-Knowledge.jpg",
    description: "Test your general knowledge",
  },
  {
    id: "computers",
    name: "Computers",
    image: "../images/computer.jpg",
    description: "Test your computer knowledge",
  },
  {
    id: "math",
    name: "Mathematics",
    image: "../images/Math.webp",
    description: "Test your math knowledge",
  },
  {
    id: "vehicles",
    name: "Vehicles",
    image: "../images/vehicles.jpg",
    description: "Test your vehicle knowledge",
  },
  {
    id: "pokemon",
    name: "Pokemon",
    image: "../images/pokemon.jpg",
    description: "Test your pokemon knowledge",
  },
];

// placera och visa alla cards

function renderCards() {
  allCards.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.classList.add("category-card");
    card.id = data[i].id;
    card.addEventListener("click", () => {
      console.log(data[i].id);
      chooseCategory(data[i].id);
      //window.location.href = `./quiz.html?category=${data[i].id}`;
    });
    card.innerHTML = `
        <img class="card-image" id ="card-image" src="${data[i].image}" alt="${data[i].name}"></img>
        <div class="card-info" id="card-info">
            <h2 class="category" id="category">${data[i].name}</h2>
            <p class="category-info" id="category-info">${data[i].description}</p>
        </div>
        `;
    allCards.appendChild(card);
  }
}
renderCards();
