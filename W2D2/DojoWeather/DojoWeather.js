var dismissButton = document.querySelector(".cookies");
var temChange = document.querySelector(".tempertureMax");
var todayMax = document.querySelector("#todayMax");
var todayMin = document.querySelector("#todayMin");
var tomorrowMax = document.querySelector("#tomorrowMax");
var tomorrowMix = document.querySelector("#tomorrowMix");
var fridayMax = document.querySelector("#fridayMax");
var fridayMin = document.querySelector("#fridayMin");
var saturdayMax = document.querySelector("#saturdayMax");
var saturdayMin = document.querySelector("#saturdayMin");

var tempList = [
  todayMax,
  todayMin,
  tomorrowMax,
  tomorrowMix,
  fridayMax,
  fridayMin,
  saturdayMax,
  saturdayMin,
];

function displayAlert() {
  alert("Loading wather report...");
}

function disappearCookie() {
  dismissButton.remove();
}

function pickTemp(e) {
  console.log(e.value);
  if (e.value == "celsius") {
    var list = [24, 18, 27, 19, 21, 16, 26, 21];
    for (var i = 0; i < tempList.length; i++) {
      tempList[i].innerHTML = list[i] + "°";
    }
  } else if (e.value == "fahrenheit") {
    for (var i = 0; i < tempList.length; i++) {
      tempList[i].innerHTML =
        Math.round((parseInt(tempList[i].innerHTML) * 9) / 5) + 32 + "°";
    }
  }
}
