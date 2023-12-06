// Function to fetch and update the player scores every 5 seconds
function fetchAndUpdatePlayerScores() {
  const accessToken = localStorage.getItem("access_token");
  const avatarName = localStorage.getItem("avatar_name");
  const apiUrl =
    "https://api.beamable.com/basic/1691291377650688.DE_1691291377650691.ADMINmicro_Beamablefootboll/GetScores";

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-DE-SCOPE": "1691291377650688.DE_1691291377650691",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  // Make API call
  return fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        updatePlayerScores(data);

        // Check if the avatar_name is "admin" and display the reset button
        const resetButtonContainer = document.getElementById(
          "resetButtonContainer"
        );
        resetButtonContainer.innerHTML = "";

        if (avatarName === "admin") {
          const resetButton = document.createElement("button");
          resetButton.textContent = "Reset Scores";
          resetButton.addEventListener("click", resetScores);
          resetButtonContainer.appendChild(resetButton);
        }
      }
    })
    .catch((error) => console.error("Error fetching player scores:", error));
}

// Function to update the player scores display
function updatePlayerScores(players) {
  const playerScoresContainer = document.getElementById("playerScores");

  // Clear previous content
  playerScoresContainer.innerHTML = "";

  // Display player names and scores
  players.forEach((player) => {
    const playerScoreDiv = document.createElement("div");
    playerScoreDiv.textContent = `${player.PlayerName}: ${player.Score}`;
    playerScoresContainer.appendChild(playerScoreDiv);
  });
}

// Function to reset scores
function resetScores() {
  const accessToken = localStorage.getItem("access_token");
  const apiUrl =
    "https://api.beamable.com/basic/1691291377650688.DE_1691291377650691.ADMINmicro_Beamablefootboll/ResetScores";

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-DE-SCOPE": "1691291377650688.DE_1691291377650691",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  // Make API call
  fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response after resetting scores
      console.log("Scores reset successfully:", data);
    })
    .catch((error) => console.error("Error resetting scores:", error));
}

fetchAndUpdatePlayerScores();

// Set up an interval to fetch and update the player scores every 5 seconds
setInterval(fetchAndUpdatePlayerScores, 5000);
