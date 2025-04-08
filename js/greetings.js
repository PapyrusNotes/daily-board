const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const myName = document.querySelector('#profile .profile-name');
const updateNmaeBtn = document.querySelector('#update-name-btn');


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);


function paintGreetings(username){
    greeting.innerText = `Welcome, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    myName.innerText = username;
}

function amendGreetings(){
    console.log("amend cliocked");
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
updateNmaeBtn.addEventListener("click", amendGreetings);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}


