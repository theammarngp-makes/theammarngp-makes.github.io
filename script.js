/**
 * Mohammad Ammar Portfolio — Analytics Command Center
 * Pure vanilla JS — no dependencies
 */

(function () {
  'use strict';

  /* ============================================
     Loading Screen
     ============================================ */
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loaderBar');
  let loadProgress = 0;

  document.body.classList.add('loading');

  const loadInterval = setInterval(() => {
    loadProgress += Math.random() * 18 + 5;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(loadInterval);
      loaderBar.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
        document.body.classList.add('hero-visible');
        initCounters();
      }, 400);
    } else {
      loaderBar.style.width = loadProgress + '%';
    }
  }, 80);

  /* ============================================
     Scroll Progress Bar
     ============================================ */
  const scrollProgress = document.getElementById('scrollProgress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }

  /* ============================================
     Navigation
     ============================================ */
  const navHeader = document.getElementById('navHeader');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ============================================
     Mouse Glow
     ============================================ */
  const mouseGlow = document.getElementById('mouseGlow');
  let glowX = 0;
  let glowY = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animateGlow() {
    glowX += (targetX - glowX) * 0.08;
    glowY += (targetY - glowY) * 0.08;
    mouseGlow.style.left = glowX + 'px';
    mouseGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  /* ============================================
     Particles Canvas
     ============================================ */
  const canvas = document.getElementById('particlesCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  function createParticles() {
    const count = window.innerWidth < 768 ? 30 : 60;
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
  }

  function drawParticles() {
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(74, 222, 128, ${p.opacity})`;
      ctx.fill();

      particles.slice(i + 1).forEach(p2 => {
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(74, 222, 128, ${0.06 * (1 - dist / 100)})`;
          ctx.stroke();
        }
      });
    });

    animationId = requestAnimationFrame(drawParticles);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    resizeCanvas();
    createParticles();
    drawParticles();
    window.addEventListener('resize', () => {
      cancelAnimationFrame(animationId);
      resizeCanvas();
      createParticles();
      drawParticles();
    });
  }

  /* ============================================
     Parallax Floating Cards
     ============================================ */
  const floatCards = document.querySelectorAll('.float-card');

  function handleParallax() {
    const scrollY = window.scrollY;
    floatCards.forEach(card => {
      const speed = parseFloat(card.dataset.speed) || 0.03;
      const offset = scrollY * speed;
      card.style.transform = `translateY(${-offset}px)`;
    });
  }

  /* ============================================
     SQL Typing Animation
     ============================================ */
  const sqlQueries = [
    'SELECT cohort_month,\n  COUNT(DISTINCT customer_id)\nFROM orders\nGROUP BY 1;',
    'WITH rfm AS (\n  SELECT customer_id,\n    MAX(order_date) AS recency,\n    COUNT(*) AS frequency\n  FROM orders GROUP BY 1\n)\nSELECT * FROM rfm;',
    'SELECT DATE_TRUNC(\'month\', order_date),\n  SUM(total_price) AS revenue\nFROM orders\nGROUP BY 1\nORDER BY 1;'
  ];

  const sqlTyping = document.getElementById('sqlTyping');
  let queryIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeSQL() {
    if (!sqlTyping) return;

    const currentQuery = sqlQueries[queryIndex];

    if (!isDeleting) {
      sqlTyping.textContent = currentQuery.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentQuery.length) {
        setTimeout(() => { isDeleting = true; }, 2500);
      }
    } else {
      sqlTyping.textContent = currentQuery.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        queryIndex = (queryIndex + 1) % sqlQueries.length;
      }
    }

    const speed = isDeleting ? 20 : 40;
    setTimeout(typeSQL, speed);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(typeSQL, 1500);
  }

  /* ============================================
     Cohort Heatmap Grid
     ============================================ */
  const heatmapGrid = document.getElementById('heatmapGrid');

  if (heatmapGrid) {
    const heatColors = [
      'rgba(74, 222, 128, 0.9)',
      'rgba(74, 222, 128, 0.6)',
      'rgba(74, 222, 128, 0.35)',
      'rgba(74, 222, 128, 0.15)',
      'rgba(148, 163, 184, 0.1)'
    ];

    for (let i = 0; i < 36; i++) {
      const cell = document.createElement('div');
      cell.className = 'heat-cell';
      const intensity = Math.floor(Math.random() * heatColors.length);
      cell.style.background = heatColors[intensity];
      cell.style.animationDelay = (Math.random() * 4) + 's';
      heatmapGrid.appendChild(cell);
    }
  }

  /* ============================================
     Scroll Reveal
     ============================================ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  /* ============================================
     Animated Counters
     ============================================ */
  function initCounters() {
    const counters = document.querySelectorAll('.metric-value[data-count]');

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count, 10);
      const duration = 2000;
      const start = performance.now();

      function updateCounter(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  /* ============================================
     Nav Scroll State
     ============================================ */
  function handleScroll() {
    updateScrollProgress();

    if (window.scrollY > 50) {
      navHeader.classList.add('scrolled');
    } else {
      navHeader.classList.remove('scrolled');
    }

    const hero = document.getElementById('hero');
    if (hero) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY < heroBottom) {
        document.body.classList.add('hero-visible');
      } else {
        document.body.classList.remove('hero-visible');
      }
    }

    handleParallax();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ============================================
     Copy Email
     ============================================ */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const contactEmail = document.getElementById('contactEmail');

  if (copyEmailBtn && contactEmail) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = contactEmail.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyEmailBtn.textContent = 'Copied!';
        copyEmailBtn.classList.add('copied');
        setTimeout(() => {
          copyEmailBtn.textContent = 'Copy Email';
          copyEmailBtn.classList.remove('copied');
        }, 2000);
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyEmailBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyEmailBtn.textContent = 'Copy Email';
        }, 2000);
      }
    });
  }

  /* ============================================
     Contact Form (Formspree)
     ============================================ */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const honeypot = contactForm.querySelector('.honeypot');
      if (honeypot && honeypot.value) return;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          contactForm.reset();
          formSuccess.hidden = false;
          submitBtn.textContent = 'Send Message';
        } else {
          throw new Error('Form submission failed');
        }
      } catch {
        submitBtn.textContent = 'Error — Try Again';
      } finally {
        submitBtn.disabled = false;
        setTimeout(() => {
          submitBtn.textContent = 'Send Message';
        }, 3000);
      }
    });
  }

  /* ============================================
     Back To Top
     ============================================ */
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================
     Footer Year
     ============================================ */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ============================================
     Active Nav Link Highlight
     ============================================ */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + id) {
            a.style.color = 'var(--primary)';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ============================================
     Smooth Section Transitions on Load
     ============================================ */
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 600 + i * 120);
    });
  });

})();
