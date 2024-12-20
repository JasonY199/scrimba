homeScoreEl = document.getElementById("home-score");
guestScoreEl = document.getElementById("guest-score");

homeScore = 0;
guestScore = 0;

// Initial score on screen
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function addScore(team, amount) {
  console.log(team, amount);
}
