/* Players(5) expenses calculation
  ================================ */
document
  .getElementById("player-expense")
  .addEventListener("click", function () {
    const length = document.getElementById("players").children.length;
    const playersExpense = calculatePlayersExpense("per-player-cost");

    const playersTotalCost = playersExpense * length;
    if (isNaN(playersTotalCost)) {
      alert("Empty or not a number. Insert number only!");
    } else {
      setElementValueById("players-expenses", playersTotalCost.toFixed(2));
    }
  });

document
  .getElementById("calculate-grand-total")
  .addEventListener("click", function () {
    const playersExpense = calculatePlayersExpense("per-player-cost");
    // const length = (document.getElementById("players").innerText =
    //   playersArray.length);
    const length = document.getElementById("players").children.length;

    const playersTotalCost = playersExpense * length;

    // Players(5), manager and coach's individual costs
    const managerCost = calculatePlayersExpense("manager-salary");
    const coachCost = calculatePlayersExpense("coach-salary");

    // Grand total of Players(5), manager(1) and coach's(1) costs
    const grandTotalOfAllCosts = (
      playersTotalCost +
      managerCost +
      coachCost
    ).toFixed(2);

    setElementValueById("grand-total-of-all-costs", grandTotalOfAllCosts);
  });

/* Display method fol looping through data to be displayed
  ======================================================== */
function display(playersList) {
  const playerData = document.getElementById("players");
  for (let i = 0; i < playersList.length; i++) {
    const player = playersList[i].titleNode;
    if (i <= 4) {
      const li = document.createElement("li");
      li.innerText = player;
      playerData.appendChild(li);
    } else {
      playerData.appendChild(li).pop();
    }
  }
}

/* Empty array is created to push data in to loop through
=========================================================*/
const playersArray = [];

function addToPlayerList(element) {
  const titleNode = element.parentNode.parentNode.children[0].innerText;
  const playerObject = {
    titleNode: titleNode,
  };
  playersArray.push(playerObject);

  const length = (document.getElementById("players").innerText =
    playersArray.length);

  if (length > 5) {
    alert("You can add up to 5 players!");
  }

  /* Array inserted in the function as argument
  =============================================*/
  display(playersArray);
}
