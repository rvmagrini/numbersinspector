"use strict";

let numbersArr = [];

let txtNum = document.getElementById("txtnum");
let txtAlert = document.getElementById("txtalert");
let ulEl = document.getElementById("ulel");
let inspection = document.getElementById("inspection");

document.getElementById("insertbtn").addEventListener("click", function () {
  inspection.innerHTML = "";

  if (txtNum.value.length === 0) {
    txtAlert.textContent = `Please insert a number between 1 and 100.`;
    txtNum.focus();
  } else {
    let number = Number(txtNum.value);
    if (number < 1 || number > 100) {
      txtAlert.textContent = `Please insert a number between 1 and 100.`;
      txtNum.value = "";
      txtNum.focus();
    } else if (numbersArr.includes(number)) {
      txtAlert.textContent = `Number ${number} has already been added. Try another one.`;
      txtNum.value = "";
      txtNum.focus();
    } else {
      txtAlert.textContent = "";
      txtNum.value = "";
      txtNum.focus();

      // Array pushing
      numbersArr.push(number);

      // New item
      const newLi = document.createElement("li");
      newLi.appendChild(document.createTextNode(`Number ${number} inserted.`));
      ulEl.appendChild(newLi);
    }
  }
});

document.getElementById("inspectbtn").addEventListener("click", function () {
  if (numbersArr.length === 0) {
    inspection.innerHTML = `Insert numbers before inspecting.`;
    txtNum.focus();
  } else {
    let amount = numbersArr.length;
    inspection.innerHTML = `<p>Amount of numbers inserted: ${amount}.</p>`;

    let largest = Math.max(...numbersArr);
    inspection.innerHTML += `<p>Largest number inserted: ${largest}.</p>`;

    let lowest = Math.min(...numbersArr);
    inspection.innerHTML += `<p>Lowest number inserted: ${lowest}.</p>`;

    let sum = numbersArr.reduce((acc, cur) => (acc += cur));
    inspection.innerHTML += `<p>Sum of the numbers inserted: ${sum}.</p>`;

    let avg = (sum / amount).toFixed(2);
    inspection.innerHTML += `<p>Average of numbers inserted: ${avg}.`;
  }
});
