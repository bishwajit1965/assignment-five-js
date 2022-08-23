function calculatePlayersExpense(elementId) {
  const playersCost = document.getElementById(elementId);
  const playersCostString = playersCost.value;
  const playersExpense = parseFloat(playersCostString);
  return playersExpense;
}

function calculatePlayersManagerCoachExpense(elementId) {
  const nonPlayerCost = document.getElementById(elementId);
  const nonPlayerCostString = nonPlayerCost.value;
  const nonPlayerExpense = parseFloat(nonPlayerCostString);
  return nonPlayerExpense;
}

function setElementValueById(elementId, value) {
  const nonPlayerCost = document.getElementById(elementId);
  nonPlayerCost.innerText = value;
  if (isNaN(nonPlayerCost.innerText)) {
    alert("Empty or not a number. Insert number only!");
    return;
  }
}
