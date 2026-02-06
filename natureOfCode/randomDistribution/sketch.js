import GameMachine from "./GameMachine.js";

let randomDistributionGame;

window.setup = function() {
  randomDistributionGame = new GameMachine(800, 600);
}

window.draw = function() {
  randomDistributionGame.start();
}