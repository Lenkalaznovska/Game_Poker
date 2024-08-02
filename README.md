# In Progress Poker Game

This project is a web-based poker game currently under development. The game provides a simple interface to play poker, dealing cards to the player and community, and managing the player's balance. You can view the current progress of the game [here](https://lenkalaznovska.github.io/Game_Poker/).

## Table of Contents

1. [Description](#description)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)

## Description

This web-based poker game includes the following features:
- **Game Field:** The interface where the player can see their hand, community cards, and game results.
- **Player Hand:** Two cards dealt to the player.
- **Community Cards:** Five cards dealt to the table.
- **Game Mechanics:** Includes card dealing, hand evaluation, and balance management.
- **User Interface:** Features a button to deal cards, display of the player’s balance, and game results.

### Game Flow
1. **Deal Cards:** The player clicks the "Deal" button to start the game. Two cards are dealt to the player, and five community cards are revealed one by one.
2. **Evaluate Hand:** The player’s hand combined with the community cards is evaluated to determine the outcome.
3. **Results:** The player is informed whether they win or lose, and their balance is updated accordingly.

## Technologies Used

- **HTML5:** Defines the structure of the game interface and elements.
- **CSS3:** Provides styling for the game layout, including responsive design and animations.
- **JavaScript:** Handles the game logic, including card dealing, hand evaluation, and interaction with the user interface.

## Project Structure

- `index.html`: The main HTML file that sets up the game layout and elements.
- `css/style.css`: CSS file responsible for styling the game field, cards, and interface components.
- `script.js`: JavaScript file containing the game logic, card handling, deck management, and result evaluation.
- `images/`: Folder for storing card images and game background (referenced in CSS).
  
### Key Functions

- `buildDeck()`: Creates a standard deck of 52 playing cards.
- `shuffleDeck()`: Randomizes the order of the deck.
- `dealCards()`: Deals cards to the player and community, and evaluates the game outcome.
- `updateBalance(amount)`: Updates and displays the player’s balance.
- `showMessage(message, type)`: Displays the result of the game ("Win" or "Lose") with appropriate styling.

## How to Play

1. **Start the Game:** Click the "Deal" button to begin.
2. **View Cards:** Observe your hand and community cards as they are dealt.
3. **Check Results:** View the result message and your updated balance.
