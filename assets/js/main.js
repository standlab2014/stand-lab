/* Hanna Cho Lab — main.js
   1) 모바일 메뉴  2) 스크롤 시 헤더 선 표시 + 현재 섹션 하이라이트
   3) 스크롤 등장 애니메이션  4) 논문 연도 필터  5) 푸터 연도 자동 */

document.addEventListener('DOMContentLoaded', function () {

  /* 1) 모바일 메뉴 열기/닫기 */
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* 2) 스크롤에 따라 헤더 테두리 */
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });

  /* 2-b) 현재 보고 있는 섹션 메뉴 강조 */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = nav.querySelectorAll('a');

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(function (s) { spy.observe(s); });

  /* 3) 스크롤 등장 애니메이션 */
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });

  /* 4) 논문 연도 필터 */
  var chips = document.querySelectorAll('.chip');
  var pubs = document.querySelectorAll('.pub');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');

      var filter = chip.dataset.filter;
      pubs.forEach(function (pub) {
        pub.hidden = !(filter === 'all' || pub.dataset.year === filter);
      });
    });
  });

  /* 5) 푸터 연도 자동 갱신 */
  document.getElementById('year').textContent = new Date().getFullYear();
});
