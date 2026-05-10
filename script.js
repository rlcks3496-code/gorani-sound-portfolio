/* ============================================================
   GORANI SOUND — script.js (v3 multi-page)
   ============================================================ */

/* --- 오디오 동시 재생 방지 --- */
const allAudio = document.querySelectorAll('audio');

allAudio.forEach(audio => {
  audio.addEventListener('play', () => {
    allAudio.forEach(other => {
      if (other !== audio) other.pause();
    });
  });
});

/* --- 네비게이션: 스크롤 시 하단 선 표시 --- */
const nav = document.getElementById('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* --- 스크롤 fade-in --- */
const fadeTargets = document.querySelectorAll('.fade-in');

if (fadeTargets.length > 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  fadeTargets.forEach(el => observer.observe(el));
}
