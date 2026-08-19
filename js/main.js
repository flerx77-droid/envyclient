(function () {
    "use strict";

    var nav = document.querySelector(".nav");
    function onScroll() {
        if (!nav) return;
        if (window.scrollY > 8) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

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
})();
