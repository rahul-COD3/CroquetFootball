import { PawnBehavior } from "../PrototypeBehavior";

class score extends PawnBehavior {
  setup() {
    this.addEventListener("pointerDown", "updateScore");
  }
  updateScore() {
    const accessToken = localStorage.getItem("access_token");
    const avatarName = localStorage.getItem("avatar_name");

    const apiUrl =
      "https://api.beamable.com/basic/1691291377650688.DE_1691291377650691.ADMINmicro_Beamablefootboll/SaveData";
    const data = {
      playerName: avatarName,
    };

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-DE-SCOPE": "rahulkumar.DE_1691291377650691",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };

    return fetch(apiUrl, options);
  }
}

export default {
  modules: [
    {
      name: "Score",
      pawnBehaviors: [score],
    },
  ],
};
