import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
//how long it has been since we last rerendered
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

//game loop
function main(currentTime) {
  if (gameOver) {
    if (confirm("you lost. Press ok to restart")) {
      window.location.reload();
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;
  //   constantly having a new render time
  lastRenderTime = currentTime;

  //update game logic in a loop
  update();
  //draw on the screen based on the update loop
  draw();
}
//start the loop
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
