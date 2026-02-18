(function () {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("recursion-count");
    const n = raw ? parseInt(raw, 10) : 0;

    const display = document.getElementById("recursion-display");
    const link = document.getElementById("recursion-link");

    if (!display || !link) return;

    if (!Number.isNaN(n) && n > 0) {
        display.textContent = `Recursion count = ${n}`;
        link.href = `${window.location.pathname}?recursion-count=${n + 1}`;
    } else {
        display.textContent = "";
        link.href = `${window.location.pathname}?recursion-count=1`;
    }
})();

(function () {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("recursion-count");

    if (!raw || !/^\d+$/.test(raw)) return;

    const search = `?recursion-count=${raw}`;

    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    sidebar.querySelectorAll("a[href]").forEach(a => {
        const href = a.getAttribute("href");

        // ignore external links
        if (!href || href.startsWith("http") || href.startsWith("#"))
            return;

        // preserve hash if present
        const [path, hash] = href.split("#");

        a.href = `${path}${search}${hash ? "#" + hash : ""}`;
    });
})();
