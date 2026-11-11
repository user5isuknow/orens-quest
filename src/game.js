import Phaser from "phaser";
import skyImage from "/src/assests/gameassests/test/sky.png";

function preload() {
  this.load.image("player", s);
  this.load.image("sky", skyImage);
}

function create() {
  this.add.image(400, 300, "sky");
}

function update() {}

export function createGame(parent) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    backgroundColor: "#000000",
    scene: {
      preload,
      create,
      update,
    },
  });
}
