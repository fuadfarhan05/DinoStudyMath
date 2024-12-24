// Array of card objects with titles, descriptions, and correct answers
const cards = [
    { title: "Card 1", description: "The T-rex ___ the chicken yesterday.", correctAnswer: "ate" },
    { title: "Card 2", description: "Today the T-rex will ___ turkey.", correctAnswer: "eat" },
    { title: "Card 3", description: "The Stegosaurus ___ the fruits.", correctAnswer: "ate" },
    { title: "Card 4", description: "The brachiosaurus went to ___ bananas.", correctAnswer: "eat" },
    { title: "Card 5", description: "The Triceratops ___ the leaves this morning.", correctAnswer: "ate" },
    { title: "Card 6", description: "The Velociraptor will ___ the meat tonight.", correctAnswer: "eat" },
    { title: "Card 7", description: "The Spinosaurus ___ fish by the river.", correctAnswer: "ate" },
    { title: "Card 8", description: "The Pterodactyl will ___ insects soon.", correctAnswer: "eat" },
    { title: "Card 9", description: "The Ankylosaurus ___ the plants in the forest.", correctAnswer: "ate" },
    { title: "Card 10", description: "The Diplodocus loves to ___ leaves from tall trees.", correctAnswer: "eat" },
    { title: "Card 11", description: "The Brachiosaurus ___ plants that grew high above the ground.", correctAnswer: "ate" },
    { title: "Card 12", description: "The Iguanodon will ___ fruit in the morning.", correctAnswer: "eat" },
    { title: "Card 13", description: "The Stegosaurus ___ the soft ferns in the valley.", correctAnswer: "ate" },
    { title: "Card 14", description: "The Tyrannosaurus rex loves to ___ meat.", correctAnswer: "eat" },
    { title: "Card 15", description: "The Allosaurus ___ a large meal of smaller dinosaurs.", correctAnswer: "ate" },
    { title: "Card 16", description: "The Plesiosaurus will ___ fish from the sea.", correctAnswer: "eat" },
    { title: "Card 17", description: "The Dimetrodon ___ fish from the river.", correctAnswer: "ate" },
    { title: "Card 18", description: "The Mosasaurus will ___ fish and marine reptiles.", correctAnswer: "eat" },
    { title: "Card 19", description: "The Styracosaurus ___ plants found in the plains.", correctAnswer: "ate" },
    { title: "Card 20", description: "The Gallimimus will ___ small plants and insects.", correctAnswer: "eat" },
    { title: "Card 21", description: "The Sauropelta ___ tough plants to survive.", correctAnswer: "ate" },
    { title: "Card 22", description: "The Carcharodontosaurus ___ a large carnivore meal.", correctAnswer: "ate" },
    { title: "Card 23", description: "The Giganotosaurus will ___ other dinosaurs in the jungle.", correctAnswer: "eat" },
    { title: "Card 24", description: "The Protoceratops ___ shrubs and small bushes.", correctAnswer: "ate" },
    { title: "Card 25", description: "The Hypsilophodon will ___ leaves in the early morning.", correctAnswer: "eat" },
    { title: "Card 26", description: "The Pachycephalosaurus ___ tough plants.", correctAnswer: "ate" },
    { title: "Card 27", description: "The Camarasaurus will ___ leaves from the trees.", correctAnswer: "eat" },
    { title: "Card 28", description: "The Elasmosaurus ___ small fish while swimming.", correctAnswer: "ate" },
    { title: "Card 29", description: "The Microceratus will ___ tiny plants and seeds.", correctAnswer: "eat" },
    { title: "Card 30", description: "The Therizinosaurus ___ leaves with its long claws.", correctAnswer: "ate" },
];

let currentIndex = 0;

// Function to update the displayed card
function updateCard() {
    const cardDisplay = document.getElementById('card-display');
    const card = cards[currentIndex];
    cardDisplay.innerHTML = `
        <div class="card-content">
            <div class="card-title">${card.title}</div>
            <div class="card-description">${card.description}</div>
        </div>
    `;
}

function displayFeedback(message) {
    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.innerHTML = `<h1>${message}</h1>`;
}

// Function to check if the correct word is "eat"
function checkEat() {
    const correctAnswer = cards[currentIndex].correctAnswer;

    // If the correct answer is "eat"
    if (correctAnswer === "eat") {
        displayFeedback("Correct! Moving to the next card.");
        currentIndex++; // Move to the next card
        if (currentIndex >= cards.length) {
            displayFeedback("You've completed all the cards!");
            currentIndex = 0; // Reset to the first card
        }
        updateCard(); // Update the card display
    } else {
        displayFeedback("Incorrect. Try again!");
    }
}

// Function to check if the correct word is "ate"
function checkAte() {
    const correctAnswer = cards[currentIndex].correctAnswer;

    // If the correct answer is "ate"
    if (correctAnswer === "ate") {
        displayFeedback("Correct! Moving to the next card.");
        currentIndex++; // Move to the next card
        if (currentIndex >= cards.length) {
            displayFeedback("You've completed all the cards!");
            currentIndex = 0; // Reset to the first card
        }
        updateCard(); // Update the card display
    } else {
        displayFeedback("Incorrect. Try again!");
    }
}

// Initial render
updateCard();
