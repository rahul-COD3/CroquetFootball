import { PawnBehavior } from "../PrototypeBehavior";

class moveFootball extends PawnBehavior {
  setup() {
    this.angle = 0;
    this.spinSpeed = 0.02;
    this.isBallMoving = false;
    this.x = this.translation[0];
    this.y = this.translation[1];
    this.z = this.translation[2];
    this.checkCollision();
  }

  checkCollision() {
    if (
      !this.isBallMoving &&
      Math.abs(this.getMyAvatar().translation[2] - this.actor.translation[2]) <
        0.9
    ) {
      this.isBallMoving = true;
      this.updateScore();
      this.startMovingBall(0);
    }
    this.future(100).checkCollision();
  }

  startMovingBall(elepsedTime) {
    if (elepsedTime >= 500) {
      this.isBallMoving = false;
      return;
    }
    this.future(10).startMovingBall(elepsedTime + 10);
    this.angle -= this.spinSpeed;
    this.z -= 0.1;
    this.set({
      rotation: Microverse.q_euler(this.angle, 0, 0),
      translation: [this.x, this.y, this.z],
    });
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
      name: "MoveFootball",
      pawnBehaviors: [moveFootball],
    },
  ],
};
