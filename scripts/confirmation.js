let going = document.getElementById('confirmGoing');
let notGoing = document.getElementById('confirmNotGoing');
let thankYou = document.getElementById("thankYou");
let emailAddress = document.getElementById("email");
let form = document.getElementById("confirm");
let message = document.createElement(`h1`);

// Event Listener to check whether the user is going or not
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // If user clicks the "Is Going" button, this will happen
    if (event.submitter === going) {
        message.innerText = `Details will be send to your email address: ${emailAddress.value}. See you there! :)`
        document.body.appendChild(message);
        thankYou.style.color = "green";
    // If user clicks the "Is Not Going" button, this will happen
    } else if (event.submitter === notGoing) {
        message.innerText = `Sorry you can't make it. But hopefully you can make it to the next one.`
        document.body.appendChild(message);
        thankYou.style.color = "blue";
    }
})
