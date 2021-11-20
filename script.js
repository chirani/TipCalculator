const radios = document.querySelectorAll("input[name='five'");
console.log(document.querySelector("input[name='tip-input']").value);
function changing() {
  var bill = document.getElementById("bill-entry").value;
  var people = document.getElementById("people").value;
  let tip_percentage;
  for (const radio of radios) {
    if (radio.checked) {
      tip_percentage = radio.value;
      break;
    } else {
      tip_percentage = 0;
    }
  }
  if (document.querySelector("input[name='tip-input']").value === "")
    tip_percentage = parseInt(tip_percentage);
  else {
    tip_percentage = parseFloat(
      document.querySelector("input[name='tip-input']").value
    ).toFixed(2);
  }

  console.log(tip_percentage);
  if (!isNaN(parseFloat(bill)) && !isNaN(parseInt(people, 10))) {
    console.log(parseFloat(bill));
    const tip_amount = (
      (parseFloat(bill) * tip_percentage) /
      100 /
      parseInt(people)
    ).toFixed(2);
    console.log(tip_amount);
    document.getElementById("tip-amount").innerHTML = tip_amount;
    document.getElementById("total-person").innerHTML = (
      parseFloat(bill) / parseInt(people)
    ).toFixed(2);
  }
}
function reset() {
  document.getElementById("tip-amount").innerHTML = (0).toFixed(2);
  document.getElementById("total-person").innerHTML = parseFloat(0).toFixed(2);
}
