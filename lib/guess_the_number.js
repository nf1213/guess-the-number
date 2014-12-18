// YOUR CODE HERE
var computerNum = Math.floor(Math.random() * 100);

var notGuessed = true;
document.write("<h2>Guesses</h2>")
var userNum = parseInt(prompt("Guess a number"));

while(notGuessed) {

  if(userNum < computerNum) {
    document.write('<p>' + userNum + ' is too low</p>');
    userNum = parseInt(prompt("Too low, try again"));
  } else if(userNum > computerNum){
    document.write('<p>' + userNum + ' is too high</p>');
    userNum = parseInt(prompt("Too high, try again"));
  }
  else {
    document.write("<h2>The number was: " + computerNum + "</h2>")
    alert("You got it!\n" + userNum);
    notGuessed = false;
  }
}
