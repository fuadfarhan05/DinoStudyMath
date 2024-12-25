// Array of card objects with titles, descriptions, and correct answers
const cards = [
    { title: "Card 1", description: "The T-rex ___ the chicken yesterday.", correctAnswer: "ate" },
    { title: "Card 2", description: "Today the T-rex will ___ turkey.", correctAnswer: "eat" },
    { title: "Card 3", description: "The Stegosaurus ___ the fruits.", correctAnswer: "ate" },
    { title: "Card 5", description: "The Triceratops ___ the leaves this morning.", correctAnswer: "ate" },
    { title: "Card 6", description: "The Velociraptor will ___ the food tonight.", correctAnswer: "eat" },
    { title: "Card 7", description: "The Spinosaurus ___ fish by the river.", correctAnswer: "ate" },
    { title: "Card 8", description: "The Pterodactyl will ___ bugs soon.", correctAnswer: "eat" },
    { title: "Card 9", description: "The Ankylosaurus ___ the plants in the forest.", correctAnswer: "ate" },
    { title: "Card 10", description: "The Diplodocus loves to ___ leaves from tall trees.", correctAnswer: "eat" },
];


let currentIndex = Math.floor(Math.random() * 9) + 1;;

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
