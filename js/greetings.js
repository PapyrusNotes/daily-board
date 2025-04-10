const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const myName = document.querySelector('#profile .profile-name');
const updateNmaeBtn = document.querySelector('#update-name-btn');

const HIDDEN_CLASSNAME = "hidden";
const FADEIN_CLASSNAME = "fade-in";
const FADEOUT_CLASSNAME = "fade-out";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);



function paintGreetings(username){
    greeting.innerText = `Welcome, ${username}`;
    myName.innerText = username;

    greeting.classList.remove(FADEOUT_CLASSNAME);
    greeting.classList.add(FADEIN_CLASSNAME);
}

function eraseGreetings(){
    greeting.classList.remove(FADEIN_CLASSNAME);
    greeting.classList.add(FADEOUT_CLASSNAME);
}

function paintLoginForm(){
    loginForm.classList.remove(_CLASSNAME);
    loginForm.classList.remove(FADEOUT_CLASSNAME);
    loginForm.classList.add(FADEIN_CLASSNAME);
}

function eraseLoginForm(){
    loginForm.classList.remove(FADEIN_CLASSNAME);
    loginForm.classList.add(FADEOUT_CLASSNAME);
}

function hideLoginForm(){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(FADEOUT_CLASSNAME);
    loginForm.classList.add(FADEIN_CLASSNAME);
}

function amendGreetings(){
    eraseGreetings();
    paintLoginForm();
}

function onLoginSubmit(event) {
    event.preventDefault();
    eraseLoginForm();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
updateNmaeBtn.addEventListener("click", amendGreetings);

if (savedUsername === null){
    paintLoginForm();
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
    eraseLoginForm();
}

