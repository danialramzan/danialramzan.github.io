function getStarCount() {
    const params = new URLSearchParams(window.location.search);
    const n = parseInt(params.get("recursion-count"), 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
}

function mulberry32(seed) {
    return function () {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}


function overlaps(x, y, size, placedStars, gap = 6) {
    const cx = x + size / 2;
    const cy = y + size / 2;
    const r = size / 2;

    for (const star of placedStars) {
        const otherCx = star.x + star.size / 2;
        const otherCy = star.y + star.size / 2;
        const otherR = star.size / 2;

        const dx = cx - otherCx;
        const dy = cy - otherCy;
        const minDist = r + otherR + gap;

        if (dx * dx + dy * dy < minDist * minDist) {
            return true;
        }
    }

    return false;
}

function renderSidebarStars() {
    const field = document.getElementById("star-field");
    if (!field) return;

    const count = getStarCount();
    field.innerHTML = "";

    const rect = field.getBoundingClientRect();
    const width = rect.width;

    const isMobile = window.innerWidth < 768;
    const verticalSpread = isMobile
        ? Math.max(100, count * 12)
        : Math.max(180, count * 18);

    const placedStars = [];
    let maxBottom = 0;

    for (let i = 0; i < count; i++) {
        const rand = mulberry32(1000 + i);

        const size = 34 + rand() * 10;
        const rotation = rand() * 360;

        let x = 0;
        let y = 0;
        let foundSpot = false;

        for (let attempt = 0; attempt < 80; attempt++) {
            const attemptRand = mulberry32(1000 + i * 100 + attempt);

            x = attemptRand() * Math.max(1, width - size);
            y = attemptRand() * Math.max(1, verticalSpread - size);

            if (!overlaps(x, y, size, placedStars, 1)) {
                foundSpot = true;
                break;
            }
        }

        // if no non-overlapping spot was found, keep last attempted spot
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

        placedStars.push({ x, y, size });

        const bottom = y + size;
        if (bottom > maxBottom) {
            maxBottom = bottom;
        }
    }

    field.style.height = `${Math.ceil(maxBottom)}px`;
}

window.addEventListener("DOMContentLoaded", renderSidebarStars);
window.addEventListener("resize", renderSidebarStars);