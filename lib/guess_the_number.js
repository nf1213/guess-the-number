// YOUR CODE HERE
var computerNum = Math.floor(Math.random() * 100);

var notGuessed = true;
document.write("<h2>Guesses</h2>")

var userName = prompt("Hi. I'm computer. Let's play a game of Guess the Number. But first, what is your name?")
var userNum = parseInt(prompt("Nice to meet you " + userName + ". Guess a number!"));

while(notGuessed) {

  if(userNum < computerNum) {
    document.write('<p>' + userNum + ' is too low</p>');
    userNum = parseInt(prompt("Too low, try again"));
  } else if(userNum > computerNum){
    document.write('<p>' + userNum + ' is too high</p>');
    userNum = parseInt(prompt("Too high, try again"));
  }
  else if(userNum == computerNum) {
    document.write("<h2>The number was: " + computerNum + "</h2>")
    alert("You got it!\n" + userNum);
    notGuessed = false;
  }
  else
    {
      input = prompt("That wasn't a number. If you want to quit, say 'q', otherwise guess a number!");
      if(input === 'q'){
        notGuessed = false;
      }
    }
}
