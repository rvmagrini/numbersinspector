"use strict";

// Taggin elements

document.getElementById("generate").addEventListener("click", function () {
  let selTable = document.getElementById("seltable");
  let txtNumber = document.getElementById("txtnumber").value;

  if (txtNumber.length === 0) {
    alert("Please type a number.");
  } else {
    let number = Number(txtNumber);
    selTable.innerHTML = `Pick a number and click on Generate.`;

    if (number === 0) {
      alert("Please pick a number greater than 0.");
    } else {
      for (let i = 1; i <= 10; i++) {
        let newOpt = document.createElement("option");
        newOpt.text = `${number} x ${i} = ${number * i}`;
        newOpt.value = `mtab${i}`;
        selTable.appendChild(newOpt);
      }
    }
  }
});
