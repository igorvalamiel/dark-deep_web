window.onload = function () {
    const overlay = document.getElementById("overlay");

    overlay.classList.add("flash");

    setTimeout(() => {
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }, 3000);
};