let secretNumber = Math.floor((Math.random() * 100) + 1);

alert("What is the secret number?");

let guess;
let totalAttempts = 0;

do {
    guess = prompt("Guess a number");
    guess = parseInt(guess, 10); // Converte o guess para um número inteiro pois prompt retorna uma string
    totalAttempts++; // Incrementa o número total de tentativas

    // Usa o operador ternário para definir "attempt" ou "attempts"
    let wordAttempts = (totalAttempts === 1) ? "attempt" : "attempts";

    if (guess === secretNumber) {
        alert(`Congratulations! You guessed the secret number: ${secretNumber} with ${totalAttempts} ${wordAttempts}`);
    } else if (guess < secretNumber) {
        alert("Enter a larger number");
    } else if (guess > secretNumber) {
        alert("Enter a smaller number");
    }
} while (guess !== secretNumber);
