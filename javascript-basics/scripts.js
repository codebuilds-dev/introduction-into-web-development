function toggleDarkMode() {
    var btn = document.querySelector("button#dark-mode-btn");

    var body = document.body;

    body.classList.toggle("dark-mode");

    var className = body.className;
    if (className === "dark-mode"){
        btn.textContent = "Light Mode"
    }else{
        btn.textContent = "Dark Mode"
    }
}

function verifySecret() {
    const secret = document.querySelector(".secret")

    if (secret.value === "007") {
        const bondImg = document.querySelector("img");
        bondImg.hidden = false
    }else{
        alert("Nice try :)")
    }
}