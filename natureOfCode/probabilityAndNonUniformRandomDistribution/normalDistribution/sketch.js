import normalDSimulator from "./normalDSimulator.js";


let simulator;

window.setup = function() {
  simulator = new normalDSimulator(600, 600);
}

window.draw = function() {
  simulator.start();
}