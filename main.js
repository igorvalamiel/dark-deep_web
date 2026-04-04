const button = document.getElementById("hackButton");
const overlay = document.getElementById("overlay");

button.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlay.classList.add("flash");

    setTimeout(() => {
        window.location.href = "deep.html";
    }, 2000);
});