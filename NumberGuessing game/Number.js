//create secretNumber
var secretNumber=4;
//ask user for theguess
var stringGuess=prompt("Guess the number");
var guess=Number(StringGuess);
if(guess===secretNumber)
{
    alert("YOU GOT IT RIGHT!");
}
else if(guess >secretNumber)
{
    alert("Too high. Guess again!");
}
else{
    alert("Too low. Guess again!");
}
