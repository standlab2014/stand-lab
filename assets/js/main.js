/* Hanna Cho Lab — main.js
   1) 전체화면 메뉴  2) 스크롤 등장  3) 논문 연도 필터  4) 푸터 연도 */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1) 전체화면 메뉴 ───────────────────────────── */
  var btn  = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');

  function openMenu() {
    menu.hidden = false;
    // hidden 해제 직후 바로 클래스를 주면 트랜지션이 안 걸려서 한 프레임 기다립니다
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
    // 사라지는 애니메이션이 끝난 뒤에 감춥니다
    window.setTimeout(function () {
      if (!menu.classList.contains('is-open')) menu.hidden = true;
    }, 400);
  }

  btn.addEventListener('click', function () {
    if (menu.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  // 메뉴 항목을 누르면 닫히고 해당 위치로 이동
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Esc 로도 닫기
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  /* ── 2) 스크롤하면 스르륵 나타나기 ──────────────── */
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });

  /* ── 3) 논문 연도 필터 ──────────────────────────── */
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

  /* ── 4) 푸터 연도 자동 ──────────────────────────── */
  document.getElementById('year').textContent = new Date().getFullYear();
});
