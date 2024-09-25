# Slot Machine Game 🎰

A simple slot machine game implemented using HTML, CSS, and JavaScript. The player can deposit money, place bets, spin the reels, and win money based on matching symbols on the reels.

## Features

- **Deposit System**: Players can deposit money into their balance before starting the game.
- **Betting System**: Players can place bets on multiple lines to increase their chances of winning.
- **Spinning Reels**: The game has three spinning reels, each displaying random symbols.
- **Winning Calculation**: Players win money based on matching symbols across selected lines. Each symbol has a different value.
- **Balance Updates**: The player's balance is updated in real-time after each spin.

## Symbol Values and Frequency

| Symbol | Value | Frequency |
|--------|-------|-----------|
| A      | 5     | 6         |
| B      | 4     | 8         |
| C      | 3     | 10        |
| D      | 2     | 12        |

- **Symbol Frequency**: Some symbols are more frequent than others, affecting the chances of winning.
- **Symbol Values**: Higher-value symbols are less frequent but provide bigger rewards when matched.

## How to Play

1. **Deposit Money**: Click the "Deposit" button to add funds. Enter a valid amount to start the game.
2. **Set Bet and Lines**: Choose how many lines to bet on and set your bet amount. The total bet will be deducted from your balance.
3. **Spin the Reels**: Click the "Spin" button to spin the reels. Each reel will display random symbols.
4. **Check Winnings**: If any of the selected lines have matching symbols, you will win based on the symbol values and your bet.

## Game Controls

- **Deposit Button**: Add funds to your balance.
- **Start Button**: Start the game.
- **Spin Button**: Spin the reels to play.

## Winning Conditions

You win if all three symbols in a row match on the lines you bet on. Winnings are calculated based on the following formula:
<br>
 winnings = bet * symbol value

 
## Technologies Used

- **HTML**: Game structure.
- **CSS**: Styling and animations for the slot reels.
- **JavaScript**: Core game logic (balance management, reel spinning, and winnings calculation).

## How to Run

1. Clone or download the project files.
2. Open `index.html` in your preferred web browser.
3. Start playing by depositing money and spinning the reels!

## Future Improvements

- Add more advanced animations for the spinning reels.
- Implement different difficulty levels with varying symbol values and frequencies.
- Include sound effects to enhance user experience.
- Add a leaderboard to track high scores.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


