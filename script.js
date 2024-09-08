const SYMBOLS_COUNT = {
    "A": 6,  // Increased frequency to make the game more winnable
    "B": 8,
    "C": 10,
    "D": 12
};

const SYMBOL_VALUES = {
    "A": 5,  // High value
    "B": 4,
    "C": 3,
    "D": 2   // Low value, but more frequent
};

let balance = 0;

const updateBalance = () => {
    document.getElementById('balance').textContent = balance;
};

const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount:");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        alert("Invalid deposit amount, try again.");
    } else {
        balance += numberDepositAmount;
        updateBalance();
    }
};

const startGame = () => {
    if (balance <= 0) {
        alert("Please deposit money before starting the game.");
        return;
    }
    alert("Game started!");
};

const playGame = () => {
    if (balance <= 0) {
        const investMore = confirm("You ran out of money! Do you want to invest more?");
        if (investMore) {
            deposit();
        } else {
            alert("Thank you for playing!");
            return;
        }
    }

    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);

    balance -= bet * numberOfLines;
    updateBalance();

    // Add spinning animation
    const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];

    reels.forEach(reel => reel.classList.add('spin-animation'));

    // Stop spinning after 1 second and show the result
    setTimeout(() => {
        reels.forEach(reel => reel.classList.remove('spin-animation'));
        displayResult(reels);

        // Calculate winnings and show the alert after the animation is complete
        const rows = [];
        for (let i = 0; i < 3; i++) {
            rows.push([
                reels[0].children[i].textContent,
                reels[1].children[i].textContent,
                reels[2].children[i].textContent,
            ]);
        }

        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        updateBalance();

        alert(`You won $${winnings}!`);
    }, 1000); // Adjust the time to match the duration of your animation
};

const displayResult = (reels) => {
    const symbols = [];
    
    // Populate the symbols array based on their frequency
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const getRandomSymbol = () => {
        return symbols[Math.floor(Math.random() * symbols.length)];
    };

    reels.forEach(reel => {
        reel.innerHTML = `
            <div class="symbol">${getRandomSymbol()}</div>
            <div class="symbol">${getRandomSymbol()}</div>
            <div class="symbol">${getRandomSymbol()}</div>
        `;
    });
};

const getNumberOfLines = () => {
    return parseInt(document.getElementById('lines').value);
};

const getBet = (balance, lines) => {
    const bet = parseFloat(document.getElementById('bet').value);
    if (isNaN(bet) || bet <= 0 || bet > balance / lines) {
        alert("Invalid bet amount.");
        return 0;
    }
    return bet;
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let i = 0; i < lines; i++) {
        const symbols = rows[i];
        if (symbols.every(symbol => symbol === symbols[0])) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings;
};

document.getElementById('depositButton').addEventListener('click', deposit);
document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('spinButton').addEventListener('click', playGame);
