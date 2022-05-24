document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("basketball").style.display = "none";
  document.getElementById("hockey").style.display = "none";
  document.getElementById("football").style.display = "flex";
});

function football() {
  document.getElementById("basketball").style.display = "none";
  document.getElementById("hockey").style.display = "none";
  document.getElementById("football").style.display = "flex";
}

function basketball() {
  document.getElementById("hockey").style.display = "none";
  document.getElementById("football").style.display = "none";
  document.getElementById("basketball").style.display = "flex";
}

function hockey() {
  document.getElementById("basketball").style.display = "none";
  document.getElementById("hockey").style.display = "flex";
  document.getElementById("football").style.display = "none";
}

