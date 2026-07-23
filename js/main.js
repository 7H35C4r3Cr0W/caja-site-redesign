/* CAJA redesign sample — nav + scroll reveals. No dependencies. */
(function () {
  "use strict";

  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  function closeNav(refocus) {
    if (!nav.classList.contains("open")) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    if (refocus) toggle.focus();
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // close the mobile menu when a link is chosen…
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeNav(false);
  });
  // …or on tap outside, Escape, page scroll, or growing past the breakpoint
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
      closeNav(false);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav(true);
  });
  window.addEventListener("scroll", function () { closeNav(false); }, { passive: true });
  var desktopMq = window.matchMedia("(min-width: 781px)");
  desktopMq.addEventListener("change", function (e) {
    if (e.matches) closeNav(false);
  });

  // reveal-on-scroll for section-level blocks
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(
    ".section-head, .program-card, .eti-card, .staff-card, .contact-card, .split-copy, .split-media, .camp-card, .game-wrap, .team-banner, .spotlight, .resource-card, .rank-group"
  );
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(function (el) { io.observe(el); });
})();
