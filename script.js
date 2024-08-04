let cardImages = {
  "2-C": "https://deckofcardsapi.com/static/img/2C.png",
  "2-D": "https://deckofcardsapi.com/static/img/2D.png",
  "2-H": "https://deckofcardsapi.com/static/img/2H.png",
  "2-S": "https://deckofcardsapi.com/static/img/2S.png",
  "3-C": "https://deckofcardsapi.com/static/img/3C.png",
  "3-D": "https://deckofcardsapi.com/static/img/3D.png",
  "3-H": "https://deckofcardsapi.com/static/img/3H.png",
  "3-S": "https://deckofcardsapi.com/static/img/3S.png",
  "4-C": "https://deckofcardsapi.com/static/img/4C.png",
  "4-D": "https://deckofcardsapi.com/static/img/4D.png",
  "4-H": "https://deckofcardsapi.com/static/img/4H.png",
  "4-S": "https://deckofcardsapi.com/static/img/4S.png",
  "5-C": "https://deckofcardsapi.com/static/img/5C.png",
  "5-D": "https://deckofcardsapi.com/static/img/5D.png",
  "5-H": "https://deckofcardsapi.com/static/img/5H.png",
  "5-S": "https://deckofcardsapi.com/static/img/5S.png",
  "6-C": "https://deckofcardsapi.com/static/img/6C.png",
  "6-D": "https://deckofcardsapi.com/static/img/6D.png",
  "6-H": "https://deckofcardsapi.com/static/img/6H.png",
  "6-S": "https://deckofcardsapi.com/static/img/6S.png",
  "7-C": "https://deckofcardsapi.com/static/img/7C.png",
  "7-D": "https://deckofcardsapi.com/static/img/7D.png",
  "7-H": "https://deckofcardsapi.com/static/img/7H.png",
  "7-S": "https://deckofcardsapi.com/static/img/7S.png",
  "8-C": "https://deckofcardsapi.com/static/img/8C.png",
  "8-D": "https://deckofcardsapi.com/static/img/8D.png",
  "8-H": "https://deckofcardsapi.com/static/img/8H.png",
  "8-S": "https://deckofcardsapi.com/static/img/8S.png",
  "9-C": "https://deckofcardsapi.com/static/img/9C.png",
  "9-D": "https://deckofcardsapi.com/static/img/9D.png",
  "9-H": "https://deckofcardsapi.com/static/img/9H.png",
  "9-S": "https://deckofcardsapi.com/static/img/9S.png",
  "10-C": "https://deckofcardsapi.com/static/img/0C.png",
  "10-D": "https://deckofcardsapi.com/static/img/0D.png",
  "10-H": "https://deckofcardsapi.com/static/img/0H.png",
  "10-S": "https://deckofcardsapi.com/static/img/0S.png",
  "J-C": "https://deckofcardsapi.com/static/img/JC.png",
  "J-D": "https://deckofcardsapi.com/static/img/JD.png",
  "J-H": "https://deckofcardsapi.com/static/img/JH.png",
  "J-S": "https://deckofcardsapi.com/static/img/JS.png",
  "Q-C": "https://deckofcardsapi.com/static/img/QC.png",
  "Q-D": "https://deckofcardsapi.com/static/img/QD.png",
  "Q-H": "https://deckofcardsapi.com/static/img/QH.png",
  "Q-S": "https://deckofcardsapi.com/static/img/QS.png",
  "K-C": "https://deckofcardsapi.com/static/img/KC.png",
  "K-D": "https://deckofcardsapi.com/static/img/KD.png",
  "K-H": "https://deckofcardsapi.com/static/img/KH.png",
  "K-S": "https://deckofcardsapi.com/static/img/KS.png",
  "A-C": "https://deckofcardsapi.com/static/img/AC.png",
  "A-D": "https://deckofcardsapi.com/static/img/AD.png",
  "A-H": "https://deckofcardsapi.com/static/img/AH.png",
  "A-S": "https://deckofcardsapi.com/static/img/AS.png",
};

function getCardImageUrl(card) {
  return cardImages[card];
}

function displayCard(card, containerClass) {
  let cardImg = document.createElement("img");
  let imageUrl = getCardImageUrl(card);
  cardImg.src = imageUrl;
  cardImg.onerror = function () {
    this.src = "https://deckofcardsapi.com/static/img/blue_back.png";
  };
  document.querySelector(.${containerClass}).appendChild(cardImg);
}

function evaluateHand(hand) {
  const cardValues = hand.map((card) => card.split("-")[0]);
  const uniqueValues = new Set(cardValues);
  return uniqueValues.size < cardValues.length ? "Win" : "Lose";
}

document.querySelector(".deal").addEventListener("click", dealCards);

let deck = [];
let playerHand = [];
let communityCards = [];
let playerBalance = 1000;

function buildDeck() {
  const suits = ["C", "D", "H", "S"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  deck = [];

  for (let suit of suits) {
    for (let value of values) {
      deck.push(${value}-${suit});
    }
  }
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function startGame() {
  buildDeck();
  shuffleDeck();
  playerHand = [];
  communityCards = [];
  document.querySelector(".player-cards").innerHTML = "";
  document.querySelector(".community-cards").innerHTML = "";
  document.querySelector(".results").innerHTML = "";
  updateBalance(playerBalance);
}

function updateBalance(amount) {
  playerBalance = amount;
  document.querySelector(".balance").innerText = amount;
}

function dealCards() {
  if (playerBalance < 100) {
    showMessage("Not enough balance to play.", "lose");
    return;
  }

  if (deck.length < 7) {
    startGame();
  }

  updateBalance(playerBalance - 100);

  document.querySelector(".player-cards").innerHTML = "";
  document.querySelector(".community-cards").innerHTML = "";

  playerHand = [];
  for (let i = 0; i < 2; i++) {
    let card = deck.pop();
    playerHand.push(card);
    displayCard(card, "player-cards");
  }

  communityCards = [];
  let dealIndex = 0;

  function dealCommunityCard() {
    if (dealIndex < 5) {
      let card = deck.pop();
      communityCards.push(card);
      displayCard(card, "community-cards");
      dealIndex++;
      setTimeout(dealCommunityCard, 500); // delay each card by 500ms
    } else {
      let fullHand = playerHand.concat(communityCards);
      let result = evaluateHand(fullHand);
      if (result === "Win" && Math.random() > 0.5) {
        // Add randomness to winning
        updateBalance(playerBalance + 200);
        showMessage("You Win!", "win");
      } else {
        showMessage("You Lose!", "lose");
      }
    }
  }

  dealCommunityCard();
}

function showMessage(message, type) {
  let resultsDiv = document.querySelector(".results");
  resultsDiv.innerText = message;
  resultsDiv.className = results ${type};
  resultsDiv.style.display = "block";
}

document.querySelector(".deal").addEventListener("click", function () {
  document.querySelector(".results").style.display = "none";
  dealCards();
});                      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Poker Game</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="game-container">
      <div class="dealer">
        <h2>Community Cards</h2>
        <div class="community-cards"></div>
      </div>
      <div class="player">
        <h2>Your Hand</h2>
        <div class="player-cards"></div>
      </div>
      <div class="account">
        <h2>Account Balance: <span class="balance">1000</span> Chips</h2>
      </div>
      <div class="controls">
        <button class="deal">Deal</button>
      </div>
      <div class="results">
        <!-- Results will be shown here -->
      </div>
    </div>

    <script src="script.js" defer></script>
  </body>
</html>
