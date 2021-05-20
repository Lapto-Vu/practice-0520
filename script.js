const form = document.querySelector(".js-default-form"),
    formInner = form.querySelector("input"),
    welcomeMessage = document.querySelector(".js-welcome-message"),
    body = document.querySelector("body");

//로컬 스토리지 저장된 값의 이름
const ST_DIR_NAME = "username";

// 보여주게 할 클라스 이름
const CL_SHOW = "showing";

function saveName (text) {
    localStorage.setItem(ST_DIR_NAME, text);
}


function handle (clickEvent) {
    clickEvent.preventDefault();
    const currentValue = formInner.value;
    form.classList.remove(CL_SHOW);
    viewMessage(currentValue);
    saveName(currentValue);
}

function askForName () {
    form.classList.add(CL_SHOW);
    form.addEventListener("submit", handle);
}

function viewMessage (userName) {
    welcomeMessage.classList.add(CL_SHOW);
    welcomeMessage.innerText = `Hello ${userName}`;
}

function defaultLoader () {
    const currentName = localStorage.getItem(ST_DIR_NAME);
    if ( currentName === null) {
        askForName ();
    } else {
        viewMessage (currentName);
    }
}

function init () {
    defaultLoader();
}

init();

