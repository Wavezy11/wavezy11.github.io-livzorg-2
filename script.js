const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const accordionToggles = document.querySelectorAll('.accordion-toggle');
const floatingTop = document.querySelector('.floating-top');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

navList?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

accordionToggles.forEach(btn => {
  const panel = document.querySelector(`#${btn.getAttribute('aria-controls')}`);
  if (!panel) return;
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    panel.classList.toggle('open');
    panel.style.maxHeight = panel.classList.contains('open') ? `${panel.scrollHeight}px` : '0px';
  });
});

const toggleTop = () => {
  const show = window.scrollY > window.innerHeight * 0.5;
  floatingTop?.classList.toggle('show', show);
};
window.addEventListener('scroll', toggleTop);
floatingTop?.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

