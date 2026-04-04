window.onload = function () {
    const overlay = document.getElementById("overlay");
    const content = document.getElementById("content");

    overlay.classList.add("flash");

    setTimeout(() => {
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
        content.style.visibility = "visible";
    }, 3000);
};