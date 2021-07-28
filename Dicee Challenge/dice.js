var player1 = Math.ceil((Math.random()*6));
var player2 = Math.ceil((Math.random()*6));
var address1 = "images/dice"+player1+".png";
var address2 = "images/dice"+player2+".png";
document.querySelector(".img1").setAttribute("src", address1);
document.querySelector(".img2").setAttribute("src", address2);

var title = document.querySelector("h1");
if(player1===player2){
  title.textContent = "Draw";
}
else if (player1>player2){
  title.textContent = "🚩 Player 1 Wins!";
} else {
  title.textContent = "Player 2 Wins! 🚩";
}