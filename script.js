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

// Accordion for process/workwijze section with step-toggle buttons
const stepToggles = document.querySelectorAll('.step-toggle');
stepToggles.forEach(btn => {
  const panel = document.querySelector(`#${btn.getAttribute('aria-controls')}`);
  if (!panel) return;
  
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    panel.classList.toggle('open');
    panel.style.maxHeight = panel.classList.contains('open') ? `${panel.scrollHeight}px` : '0px';
    
    // Update button text
    const toggleText = btn.querySelector('.toggle-text');
    if (toggleText) {
      toggleText.textContent = isOpen ? 'Lees meer' : 'Sluiten';
    }
  });
});

// Legacy accordion support (if any remain)
accordionToggles.forEach(btn => {
  const panel = document.querySelector(`#${btn.getAttribute('aria-controls')}`);
  if (!panel) return;
  if (btn.classList.contains('step-toggle')) return; // Skip if already handled
  
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

// IntersectionObserver for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Scrollspy functionality
const scrollspyDots = document.querySelectorAll('.scrollspy-dot');
const sections = ['top', 'diensten', 'over', 'werkwijze', 'ervaringen', 'contact'];

const updateScrollspy = () => {
  if (window.innerWidth < 768) return;
  
  const scrollPos = window.scrollY + window.innerHeight / 3;
  
  sections.forEach((sectionId, index) => {
    let section;
    if (sectionId === 'top') {
      section = document.getElementById('top');
    } else {
      section = document.getElementById(sectionId);
    }
    const dot = document.querySelector(`[data-section="${sectionId}"]`);
    
    if (section && dot) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        scrollspyDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      }
    }
  });
};

window.addEventListener('scroll', updateScrollspy);
window.addEventListener('resize', updateScrollspy);
updateScrollspy();

// Smooth scroll for scrollspy dots
scrollspyDots.forEach(dot => {
  dot.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = dot.getAttribute('data-section');
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});
