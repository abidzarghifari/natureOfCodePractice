import GameMachine from "./GameMachine.js";

let walkerGame;

window.setup = function() {
  walkerGame = new GameMachine(800, 600);
}

window.draw = function() {
  walkerGame.start();
}