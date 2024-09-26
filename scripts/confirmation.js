let going = document.getElementById('confirmGoing');
let notGoing = document.getElementById('confirmNotGoing');
let thankYou = document.getElementById("thankYou");
let emailAddress = document.getElementById("email");

going.addEventListener("click", () => {
    thankYou.style.color = "green";
})

notGoing.addEventListener("click", () => {
    thankYou.style.color = "blue";
})

function messageAppear() {
    let message = document.getElementById(`message`);

    let email = emailAddress.value;
}