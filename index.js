homeScoreEl = document.getElementById("home-score");
guestScoreEl = document.getElementById("guest-score");

homeScore = 0;
guestScore = 0;

function addScore(team, amount) {
  if (team === "home") {
    homeScore += amount;
    homeScoreEl.textContent = homeScore;
  } else if (team === "guest") {
    guestScore += amount;
    guestScoreEl.textContent = guestScore;
  }
}

// Set initial score on screen at game start
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;
