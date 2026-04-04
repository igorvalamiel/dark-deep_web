const button = document.getElementById("hackButton");
const overlay = document.getElementById("overlay");
const content = document.getElementById("content");

button.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlay.classList.add("flash");

    setTimeout(() => {
        overlay.classList.remove("flash");
        overlay.innerHTML = "<h1>ACCESS GRANTED</h1>";
    }, 3000);
});
