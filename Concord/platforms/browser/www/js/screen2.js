var myButton = document.getElementById("btnClick");
myButton.addEventListener("click", goToHome, false);

function goToHome() {
    window.location = "index.html";
}