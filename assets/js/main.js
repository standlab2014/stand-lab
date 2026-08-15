/* Hanna Cho Lab — main.js
   1) Full-screen menu   2) Scroll reveal
   3) Publication year filter   4) Footer year */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1) Full-screen menu ─────────────────────────── */
  var btn  = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');

  function openMenu() {
    menu.hidden = false;
    // Wait one frame after removing [hidden], otherwise the fade has nothing to animate from.
    requestAnimationFrame(function () { menu.classList.add('is-open'); });
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    document.body.classList.add('is-locked');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('is-locked');
    // Hide it only after the fade-out has finished.
    window.setTimeout(function () {
      if (!menu.classList.contains('is-open')) menu.hidden = true;
    }, 400);
  }

  btn.addEventListener('click', function () {
    if (menu.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  // Choosing a link closes the menu and jumps to that section.
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Escape also closes it.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  /* ── 2) Fade elements in as they enter the viewport ── */
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });

  /* ── 3) Publication year filter ─────────────────── */
  var chips = document.querySelectorAll('.chip');
  var pubs  = document.querySelectorAll('.pub');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');

      var year = chip.dataset.filter;
      pubs.forEach(function (pub) {
        pub.hidden = !(year === 'all' || pub.dataset.year === year);
      });
    });
  });

  /* ── 4) Keep the footer year current ────────────── */
  document.getElementById('year').textContent = new Date().getFullYear();
});
