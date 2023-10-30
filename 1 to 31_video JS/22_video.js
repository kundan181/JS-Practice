//Guess the Number

//generates the random number 
// Generate a random number between 1 and 100 and store it in a variable
let originalNumber = Math.floor(Math.random() * 100) + 1;

// Initialize a counter for the number of guesses
let numGuesses = 0;

// Continue taking input from the user until the number is guessed
while (true) {
  // Get the user's guess
  let guess = prompt("Enter your guess (1-100):");
  guess = parseInt(guess);

  // Increment the counter for the number of guesses
  numGuesses++;

  // Check if the guess is correct
  if (guess === originalNumber) {
    alert("Correct! You took " + numGuesses + " guesses.");
    break;
  } 
  // Check if the guess is greater than the original number
  else if (guess > originalNumber) {
    alert("Your guess is too high.");
  } 
  // If the guess is not correct or greater than the original number, it must be lesser
  else {
    alert("Your guess is too low.");
  }
}

// Calculate and display the user's score
let score = 100 - numGuesses;
alert("Your score is: " + score);
