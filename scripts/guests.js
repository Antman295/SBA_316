let confirmation = confirm(`Just to confirm, you are 18 or older correct?`);

if(confirmation) {
    alert("You may proceed.");
} else {
    alert("You're too young! Please go back to the main page!");
    window.location.href = "index.html"
}

