window.onload = function() {
  //write your code here

  function generateRandomCard() {
    const suits = ["♥", "♠", "♣", "♦"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    const color = (randomSuit === "♥" || randomSuit === "♦") ? "red" : "black";

    console.log("Random Suit: ", randomSuit);
    console.log("Random Value: ", randomValue);

    document.getElementById("top-left").style.color = color;
    document.getElementById("bottom-right").style.color = color;
    document.getElementById("card-value").style.color = color;

    document.getElementById("top-left").innerHTML = randomSuit;
    document.getElementById("bottom-right").innerHTML = randomSuit;
    document.getElementById("card-value").innerHTML = randomValue;
  }

  generateRandomCard();

  document.getElementById('generate-btn').addEventListener('click', generateRandomCard);

};
