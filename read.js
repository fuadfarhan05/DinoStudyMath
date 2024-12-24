// Array of card objects with titles and descriptions
const cards = [
    { title: "Card 1", description: "The T-rex ___ the chicken yesterday." },
    { title: "Card 2", description: "Today the T-rex will ___ turkey." },
    { title: "Card 3", description: "The Stegasaurus ___ the fruits." },
    { title: "Card 4", description: "The brachiousarus went to ___ bananas"},

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

// Function to show the next card
function nextCard() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCard();
    }
}

// Function to show the previous card
function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
}

// Initial render
updateCard();
