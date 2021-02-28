"use strict";

document.getElementById("insertbtn").addEventListener("click", function () {
  let txtNum = document.getElementById("txtnum").value;
  let txtAlert = document.getElementById("txtalert");

  if (txtNum.length === 0) {
    txtAlert.textContent = `Please insert a number between 0 and 100.`;
  } else {
    let number = Number(txtNum);
    if (number < 0 || number > 100) {
      txtAlert.textContent = `Please insert a number between 0 and 100.`;
    } else {
      txtAlert.textContent = "";
    }
  }
});

let numbersArr = [];
