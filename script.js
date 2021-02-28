"use strict";

let numbersArr = [];

document.getElementById("insertbtn").addEventListener("click", function () {
  let txtNum = document.getElementById("txtnum").value;
  let txtAlert = document.getElementById("txtalert");
  let selTab = document.getElementById("seltab");
  let inspection = document.getElementById("inspection");

  inspection.innerHTML = "";

  if (txtNum.length === 0) {
    txtAlert.textContent = `Please insert a number between 1 and 100.`;
  } else {
    let number = Number(txtNum);
    if (number < 1 || number > 100) {
      txtAlert.textContent = `Please insert a number between 1 and 100.`;
    } else if (numbersArr.includes(number)) {
      txtAlert.textContent = `Number ${number} has already been added. Try another one.`;
    } else {
      txtAlert.textContent = "";

      // Array pushing
      numbersArr.push(number);

      // New select option
      let tabOpt = document.getElementById("tabopt");
      tabOpt.innerHTML = "";

      let newOpt = document.createElement("option");
      newOpt.text = `Número ${number} added.`;
      selTab.appendChild(newOpt);
    }
  }
});

document.getElementById("inspectbtn").addEventListener("click", function () {
  let inspection = document.getElementById("inspection");

  if (numbersArr.length === 0) {
    inspection.innerHTML = `Insert numbers before inspecting.`;
  } else {
    let amount = numbersArr.length;
    inspection.innerHTML = `<p>Amount of numbers inserted: ${amount}.</p>`;

    let largest = Math.max(...numbersArr);
    inspection.innerHTML += `<p>Largest number inserted: ${largest}.</p>`;

    let lowest = Math.min(...numbersArr);
    inspection.innerHTML += `<p>Lowest number inserted: ${lowest}.</p>`;

    let sum = numbersArr.reduce((acc, cur) => (acc += cur));
    inspection.innerHTML += `<p>Sum of numbers inserted: ${sum}.</p>`;

    let avg = (sum / amount).toFixed(2);
    inspection.innerHTML += `<p>Average of numbers inserted: ${avg}.`;
  }
});
