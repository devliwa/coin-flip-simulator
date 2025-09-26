let heads = 0;
let tails = 0;

document.getElementById("flipBtn").addEventListener("click", function () {
  let coin = document.getElementById("coin");
  let result = document.getElementById("result");

  // Simulate coin flip
  let flip = Math.random() < 0.5 ? "heads" : "tails";

  // Flip animation
  coin.style.transform = "rotateY(720deg)";
  setTimeout(() => {
    if (flip === "heads") {
      coin.src = "images/coin1.png"; // Heads image
      result.textContent = "🪙 It's Heads!";
      heads++;
      document.getElementById("headsCount").textContent = heads;
    } else {
      coin.src = "images/coin2.png"; // Tails image
      result.textContent = "🪙 It's Tails!";
      tails++;
      document.getElementById("tailsCount").textContent = tails;
    }
    coin.style.transform = "rotateY(0deg)";
  }, 600);

  // Auto-update footer year
  document.getElementById("year").textContent = new Date().getFullYear();

});