import { PawnBehavior, ActorBehavior } from "../PrototypeBehavior";

class moveFootball extends PawnBehavior {
  setup() {
    this.addEventListener("pointerDown", "move");
  }

  move() {
    console.log("move");
    let x = this.translation[0];
    let y = this.translation[1];
    let z = this.translation[2] - 5;

    this.set({ translation: [x, y, z] });
    this.updateScore();
  }

  updateScore() {
    const accessToken = localStorage.getItem("access_token");
    console.log("accessToken:", accessToken);

    const apiUrl =
      "https://api.beamable.com/basic/1691291377650688.DE_1691291377650691.ADMINmicro_Beamablefootboll/SaveData";

    const data = {
      playerName: "rahul",
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
      name: "MoveFootball",
      actorBehaviors: [moveFootball],
    },
  ],
};
