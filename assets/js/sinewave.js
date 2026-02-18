(function () {
    function start() {
        const paths = Array.from(document.querySelectorAll("path.sinePath"));
        if (!paths.length) return;



        const params = new URLSearchParams(window.location.search);
        const raw = params.get("recursion-count");
        const n = raw && /^\d+$/.test(raw) ? Number(raw) : 0;

        // --- tweakables ---
        const width = 1200;
        const height = 100;
        const amplitude = 25;
        const defaultFrequency = 15;
        const speed = 0.05;
        const step = 10;

        const frequency = n > 0 ? n : defaultFrequency;


        let phase = 0;

        function frame() {
            let d = "";
            for (let x = 0; x <= width; x += step) {
                const y =
                    height / 2 +
                    amplitude * Math.sin((x / width) * frequency * 2 * Math.PI + phase);
                d += (x === 0 ? "M" : "L") + x + "," + y + " ";
            }

            for (const p of paths) p.setAttribute("d", d);

            phase += speed;
            requestAnimationFrame(frame);
        }

        frame();
    }

    // Run after DOM exists (safe even if script loads in <head>)
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
