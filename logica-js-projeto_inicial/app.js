let secretNumber = Math.floor(Math.random() * 100);

alert("What is the secret number?");

let guess;

do {
    guess = prompt("Guess a number");
    guess = parseInt(guess, 10); // Converte o guess para um número inteiro pois prompt retorna uma string

    if(guess === secretNumber) {
        alert("Congratulations! You guessed the secret number: " + secretNumber);
    } else if (guess < secretNumber) {
        alert("Enter a larger number");
    } else if (guess > secretNumber) {
        alert("Enter a smaller number");
    }
} while (guess !== secretNumber);
