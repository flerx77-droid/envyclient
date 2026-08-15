(function () {
    "use strict";

    // nav background on scroll
    var nav = document.querySelector(".nav");
    function onScroll() {
        if (window.scrollY > 20) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // reveal on scroll
    var revealEls = document.querySelectorAll(".reveal");
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });

    // FAQ accordion
    document.querySelectorAll(".faq-item").forEach(function (item) {
        var q = item.querySelector(".faq-q");
        var a = item.querySelector(".faq-a");
        q.addEventListener("click", function () {
            var isOpen = item.classList.contains("open");
            document.querySelectorAll(".faq-item.open").forEach(function (other) {
                other.classList.remove("open");
                other.querySelector(".faq-a").style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add("open");
                a.style.maxHeight = a.scrollHeight + "px";
            }
        });
    });

    // starfield
    var canvas = document.getElementById("stars");
    var ctx = canvas.getContext("2d");
    var stars = [];
    var W, H;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    for (var i = 0; i < 120; i++) {
        stars.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.3 + 0.3,
            s: Math.random() * 0.25 + 0.05,
            o: Math.random()
        });
    }

    function tick() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 0; i < stars.length; i++) {
            var st = stars[i];
            st.y -= st.s;
            if (st.y < -2) { st.y = H + 2; st.x = Math.random() * W; }
            var alpha = 0.25 + Math.sin(Date.now() / 900 + i) * 0.15;
            ctx.globalAlpha = Math.max(0.05, alpha);
            ctx.fillStyle = "#c4b5fd";
            ctx.beginPath();
            ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(tick);
    }
    tick();
})();