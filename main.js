let loginEl = document.getElementById("Login-el");
let requestEl = document.getElementById("Login-el");
let emergencyEl = document.getElementById("Login-el");
let resetEl = document.getElementById("reset-el");

function login() {
  loginEl.innerText = "Welcome To TiimDev's Health Web Application!!!";
  console.log("login clicked");
}

function requestCall() {
  requestEl.innerText = "Your call is processing........";
  console.log("requestcall clicked");
}

function emergency() {
  emergencyEl.innerText = "Please hold on! Your call is being forwarded...."; 
  console.log("emergency button clicked");
}

function reset() {
  loginEl.innerText = " ";
  console.log("reset button clicked");
}