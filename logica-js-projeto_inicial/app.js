let secretNumber = Math.floor(Math.random() * 100);

alert("What is the secret number?");

let guess;
let totalAttempts = 0;

do {
    guess = prompt("Guess a number");
    guess = parseInt(guess, 10); // Converte o guess para um número inteiro pois prompt retorna uma string
    totalAttempts++; // Incrementa o número total de tentativas

    if(guess === secretNumber) {
        alert("Congratulations! You guessed the secret number: " + secretNumber);
        alert("You took " + totalAttempts + " attempts to guess the number.");
    } else if (guess < secretNumber) {
        alert("Enter a larger number");
    } else if (guess > secretNumber) {
        alert("Enter a smaller number");
    }
} while (guess !== secretNumber);
