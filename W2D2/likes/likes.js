var neilLikes = 9;
var nicholeLikes = 12;
var JimLikes = 9;

var neil = document.querySelector("#neil");
var nichole = document.querySelector("#nichole");
var jim = document.querySelector("#jim");

function addLikeNeil() {
  neilLikes++;
  neil.innerText = neilLikes + " likes";
}

function addLikeNichole() {
  nicholeLikes++;
  nichole.innerText = nicholeLikes + " likes";
}

function addLikeJim() {
  JimLikes++;
  jim.innerText = JimLikes + " likes";
}
