// Proposta: checagem ao vivo dos produtos no ar + entradas por seção.
// ponytail: no-cors só diz se o host respondeu, não o status HTTP; serve para "no ar agora".
const live = document.querySelectorAll('[data-ping]');
live.forEach(async (el) => {
  const url = el.dataset.ping;
  const t = performance.now();
  try {
    await fetch(url, { mode: 'no-cors', cache: 'no-store' });
    el.textContent = `no ar agora · respondeu em ${Math.round(performance.now() - t)} ms`;
    el.dataset.state = 'up';
  } catch {
    el.textContent = 'sem resposta agora';
    el.dataset.state = 'down';
  }
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.documentElement.classList.add('js');
document.querySelectorAll('.rise').forEach((el) => io.observe(el));
