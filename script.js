function revealMessage() {
    document.getElementById("hidden-message").classList.remove("hidden");
    document.getElementById("hidden-buttons").classList.remove("hidden");
    createHeartExplosion();
}

function createHeartExplosion() {
    const numberOfHearts = 25;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";

        const x = (Math.random() - 0.5) * 400 + "px";
        const y = (Math.random() - 0.5) * 400 + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        heart.style.left = window.innerWidth / 2 + "px";
        heart.style.top = window.innerHeight / 2 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

function yes() {
    createHeartExplosion();
    const message = document.getElementById("yes-message");
    message.classList.remove("hidden");
    message.classList.remove("fade-out"); 
    message.classList.add("explode-text");

    setTimeout(() => {
        message.classList.remove("explode-text");
        message.classList.add("fade-out");
    }, 2000);

    setTimeout(() => {
        message.classList.add("hidden");
    }, 2800);
}
