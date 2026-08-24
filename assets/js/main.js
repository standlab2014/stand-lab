/* Hanna Cho Lab — main.js
   Shared by every page. Each block does nothing if its markup is absent,
   so the same file can be loaded everywhere.

   1) Full-screen menu   2) Scroll reveal   3) Featured carousel
   4) Publication year filter   5) Footer year */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1) Full-screen menu ─────────────────────────── */
  var btn  = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');

  if (btn && menu) {
    var openMenu = function () {
      menu.hidden = false;
      // Wait one frame after removing [hidden], otherwise the fade has nothing to animate from.
      requestAnimationFrame(function () { menu.classList.add('is-open'); });
      btn.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('is-locked');
    };

    var closeMenu = function () {
      menu.classList.remove('is-open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('is-locked');
      // Hide it only after the fade-out has finished.
      window.setTimeout(function () {
        if (!menu.classList.contains('is-open')) menu.hidden = true;
      }, 400);
    };

    btn.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
    });
  }

  /* ── 1b) Solid header once the hero has scrolled past ── */
  var header = document.querySelector('.site-header');
  var heroPanel = document.querySelector('.hero-panel');

  if (header) {
    var threshold = function () {
      // On the landing page the header stays transparent across the dark hero;
      // everywhere else it turns solid as soon as the page moves.
      return heroPanel ? heroPanel.offsetHeight - header.offsetHeight : 40;
    };
    var syncHeader = function () {
      header.classList.toggle('is-solid', window.scrollY > threshold());
    };
    window.addEventListener('scroll', syncHeader, { passive: true });
    window.addEventListener('resize', syncHeader);
    syncHeader();
  }

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

  /* ── 3) Featured carousel ───────────────────────── */
  var track = document.getElementById('carouselTrack');

  if (track) {
    var slides   = track.querySelectorAll('.slide');
    var dotsWrap = document.getElementById('carouselDots');
    var index    = 0;

    // One dot per slide, built from the markup so the two can never disagree.
    slides.forEach(function (slide, i) {
      var dot = document.createElement('button');
      dot.className = 'dot';
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.addEventListener('click', function () { go(i); });
      dotsWrap.appendChild(dot);
    });

    var dots = dotsWrap.querySelectorAll('.dot');

    function go(next) {
      index = (next + slides.length) % slides.length;   // wraps at both ends
      track.style.transform = 'translateX(' + (-100 * index) + '%)';
      dots.forEach(function (dot, i) {
        dot.setAttribute('aria-selected', String(i === index));
      });
    }

    document.getElementById('carouselPrev').addEventListener('click', function () { go(index - 1); });
    document.getElementById('carouselNext').addEventListener('click', function () { go(index + 1); });

    // Left and right arrow keys move the carousel while it has focus.
    document.getElementById('carousel').addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  go(index - 1);
      if (e.key === 'ArrowRight') go(index + 1);
    });

    go(0);
  }

  /* ── 4) Publication year filter ─────────────────── */
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

  /* ── 5) Keep the footer year current ────────────── */
  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
