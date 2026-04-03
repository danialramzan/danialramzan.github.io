function getStarCount() {
    const params = new URLSearchParams(window.location.search);
    const n = parseInt(params.get("recursion-count"), 10);
    return Number.isFinite(n) && n > 0 ? n : 15;
}

function mulberry32(seed) {
    return function () {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function renderSidebarStars() {
    const field = document.getElementById("star-field");
    if (!field) {
        console.log("no star-field found");
        return;
    }

    const count = getStarCount();
    field.innerHTML = "";

    const rect = field.getBoundingClientRect();
    console.log("star count:", count, "rect:", rect.width, rect.height);

    for (let i = 0; i < count; i++) {
        const rand = mulberry32(1000 + i);

        const size = 14 + rand() * 22;
        const x = -size * 0.15 + rand() * Math.max(1, rect.width - size * 0.7);
        const y = -size * 0.15 + rand() * Math.max(1, rect.height - size * 0.7);
        const rotation = rand() * 360;

        const star = document.createElement("img");
        star.src = "/assets/star.svg";
        star.alt = "";
        star.className = "star";

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.transform = `rotate(${rotation}deg)`;

        field.appendChild(star);
    }
}

window.addEventListener("DOMContentLoaded", renderSidebarStars);
window.addEventListener("resize", renderSidebarStars);