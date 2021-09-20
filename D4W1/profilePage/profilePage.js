var profileName = document.querySelector("#name");
var oneCheck = document.querySelector("#one");
var twoCheck = document.querySelector("#two");
var requestNumber = document.querySelector("#requestNumber");
var connectionNumber = document.querySelector("#connectionNumber");

function changeName() {
  profileName.innerHTML = "Jane Doe";
}

function removeListF() {
  oneCheck.remove();
}

function removeListS() {
  twoCheck.remove();
}

function decreaseRequest() {
  requestNumber.innerHTML = parseInt(requestNumber.innerHTML) - 1;
}

function increaseConnection() {
  connectionNumber.innerHTML = parseInt(connectionNumber.innerHTML) + 1;
}
