const positions = [null, 1, 1];

/**
 *
 * @param {number} playerNum
 * @param {number} positionNum
 * @returns {HTMLElement}
 */
function getPositionElement(playerNum, positionNum) {
  return document.querySelector(
    `#player${playerNum}-race > td:nth-child(${positionNum})`
  );
}

/**
 *
 * @param {HTMLElement} htmlElement
 */
function removeCurrentPosition(htmlElement) {
  htmlElement.classList.remove("active");
}

/**
 *
 * @param {number} playerNum
 * @returns {HTMLElement}
 */
function findNextPosition(playerNum) {
  return getPositionElement(playerNum, ++positions[playerNum]);
}

/**
 *
 * @param {HTMLElement} htmlElement
 */
function AddPosition(htmlElement) {
  htmlElement.classList.add("active");
}

function movePlayer(playerNum) {
  removeCurrentPosition(getPositionElement(playerNum, positions[playerNum]));
  AddPosition(findNextPosition(playerNum));
  if (positions[playerNum] > 11) {
    // @ts-ignore
    document.querySelector("#winner").innerText = playerNum;
    // @ts-ignore
    document.querySelector("dialog").setAttribute("open", "");
  }
}

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case " ":
      movePlayer(1);
      break;
    case "ArrowRight":
      movePlayer(2);
      break;
    default:
      break;
  }
});
