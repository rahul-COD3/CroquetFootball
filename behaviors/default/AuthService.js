import { PawnBehavior } from "../PrototypeBehavior";
class AuthService extends PawnBehavior {
  setup() {
    this.authenticate();
  }

  authenticate() {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-DE-SCOPE": "1691291377650688.DE_1691291377650691",
      },
      body: JSON.stringify({ grant_type: "guest" }),
    };

    fetch("https://api.beamable.com/basic/auth/token", options)
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("access_token", response.access_token);
      })
      .catch((err) => console.error(err));
  }
}

export default {
  modules: [
    {
      name: "AUTH",
      pawnBehaviors: [AuthService],
    },
  ],
};
