/* ===== LOS CUATES — Script Menú Digital ===== */

// ── Chile icon injection ──────────────────────────────────────────────────────
const chileSVG = (off) =>
  `<svg class="chile-svg${off ? ' off' : ''}" viewBox="0 0 10 14" aria-hidden="true">` +
  `<path d="M2 1 Q3 3 4 4 Q6 5 7 8 Q8 11 5 13 Q2 13 2 10 Q2 7 3 5 Q2 3 2 1 Z" fill="#E11D48"/>` +
  `<path d="M3 1 Q4 0.5 5 1.5 Q4.5 2.5 3.5 2.5 Z" fill="#16A34A"/>` +
  `</svg>`;

document.querySelectorAll('[data-heat]').forEach(el => {
  const level = parseInt(el.dataset.heat, 10);
  if (level === 0) return;
  const icons = [0, 1, 2].map(i => chileSVG(i >= level)).join('');
  el.insertAdjacentHTML('afterbegin', `<span class="chiles" aria-label="Picante ${level}/3">${icons}</span>`);
});

// ── Chips nav: click → scroll to section ─────────────────────────────────────
const nav = document.getElementById('chipsNav');

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const target = document.getElementById(chip.dataset.target);
    if (!target) return;
    const offset = nav ? nav.offsetHeight + 8 : 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Scroll spy: highlight active chip ────────────────────────────────────────
const sections = document.querySelectorAll('[data-section]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.dataset.section;
    document.querySelectorAll('.chip').forEach(c =>
      c.classList.toggle('active', c.dataset.target === id)
    );
    const active = document.querySelector(`.chip[data-target="${id}"]`);
    if (active && nav) {
      nav.scrollTo({
        left: active.offsetLeft - nav.offsetWidth / 2 + active.offsetWidth / 2,
        behavior: 'smooth'
      });
    }
  });
}, { rootMargin: '-15% 0px -75% 0px' });

sections.forEach(s => observer.observe(s));
