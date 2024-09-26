let going = document.getElementById('confirmGoing');
let notGoing = document.getElementById('confirmNotGoing');
let thankYou = document.getElementById("thankYou");
let emailAddress = document.getElementById("email");
let form = document.getElementById("confirm");
let message = document.getElementById(`message`);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (event.submitter === going) {
        message.textContent = `Details will be send to your email address: ${emailAddress.value}. See you there! :)`
        thankYou.style.color = "green";
    } else if (event.submitter === notGoing) {
        message.textContent = `Sorry you can't make it. But hopefully you can make it to the next one.`
        thankYou.style.color = "blue";
    }
})
