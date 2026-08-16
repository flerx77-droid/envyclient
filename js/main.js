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

    // aurora parallax на мышь
    var auroraWrap = document.querySelector(".aurora-wrap");
    if (auroraWrap) {
        var tx = 0, ty = 0, cx = 0, cy = 0;
        window.addEventListener("mousemove", function (e) {
            tx = (e.clientX / window.innerWidth - 0.5) * 30;
            ty = (e.clientY / window.innerHeight - 0.5) * 30;
        });
        (function loop() {
            cx += (tx - cx) * 0.05;
            cy += (ty - cy) * 0.05;
            auroraWrap.style.transform = "translate(" + cx + "px," + cy + "px)";
            requestAnimationFrame(loop);
        })();
    }
})();