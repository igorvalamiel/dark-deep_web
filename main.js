const button = document.getElementById("hackButton");
const overlay = document.getElementById("overlay");
const content = document.getElementById("content");

button.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlay.classList.add("flash");
    content.style.visibility = "hidden";

    setTimeout(() => {
        window.location.href = "deep.html";
    }, 2000);
});