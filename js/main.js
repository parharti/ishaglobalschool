// Mobile nav
const ham = document.getElementById('ham');
const mobNav = document.getElementById('mobNav');
const mobClose = document.getElementById('mobClose');
if (ham) ham.addEventListener('click', () => { mobNav.classList.add('open'); document.body.style.overflow = 'hidden'; });
if (mobClose) mobClose.addEventListener('click', () => { mobNav.classList.remove('open'); document.body.style.overflow = ''; });
if (mobNav) mobNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobNav.classList.remove('open'); document.body.style.overflow = ''; }));

// FAQ accordion
document.querySelectorAll('details').forEach(d => {
  d.addEventListener('toggle', () => {
    const arrow = d.querySelector('.fq-arrow');
    if (arrow) arrow.textContent = d.open ? '−' : '+';
    if (d.open) document.querySelectorAll('details').forEach(o => { if (o !== d) { o.removeAttribute('open'); const a = o.querySelector('.fq-arrow'); if(a) a.textContent = '+'; }});
  });
});

// Scroll animations
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; obs.unobserve(e.target); }});
}, { threshold: .1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.why-card,.learner-card,.val-card,.approach-card,.step-card,.mgmt-card').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  obs.observe(el);
});
