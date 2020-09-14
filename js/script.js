var  count = 5;

var guessAlert = document.getElementById('alert');

var alertText = document.getElementById('alert-text');

var userGuess = document.getElementById('userGuess');

var guessButton = document.getElementById('guess');

var answer = document.getElementById('userGuess').value;
  
var trialsLeft = document.getElementById('trialsLeft');

document.querySelector('#userGuess').required=true;

var restartButton = document.getElementById('startAgain');

document.getElementById("guess").addEventListener("click", () => {
  event.preventDefault();
  
  count -= 1;

  var numberOfTrials = `You have ${count} trials left`;
  console.log(count);
  
  const correctAnswer = Math.floor(Math.random() * 10);

  console.log(correctAnswer);

  

  trialsLeft.innerHTML = numberOfTrials;
  if (answer === correctAnswer) {

    guessAlert.classList.remove("alert");

    guessAlert.classList.remove("alert-danger");

    guessAlert.classList.add("alert");

    guessAlert.classList.add("alert-success");

    alertText.innerHTML = `You won with ${count} trial(s) left you used ${5-count} trial(s)`;

    userGuess.disabled = true

    guessButton.disabled = true

    restartButton.style.display = "block";
  } else if(answer != correctAnswer){
    guessAlert.classList.remove("alert");
    guessAlert.classList.remove("alert-success");
    
    
    guessAlert.classList.add("alert");
    guessAlert.classList.add("alert-danger");
    alertText.innerHTML = `You got it wrong the right answer was ${correctAnswer}`;

    restartButton.style.display = "none";
    userGuess.disabled = false;
    document.getElementById('guess').disabled = false;
  }
  if (count === 0) {
    userGuess.disabled = true;
    guessButton.disabled = true;

    restartButton.style.display = "block";
  } else {
    // Let the game continue
  }
});