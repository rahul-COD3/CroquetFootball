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
