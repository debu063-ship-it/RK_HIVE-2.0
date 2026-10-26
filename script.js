/**
 * HIVE RK ENTERPRISE // Brand Interaction System
 * Design System: Charcoal, White & Electric Lime
 */

document.addEventListener('DOMContentLoaded', () => {

  // Bold Editorial Hero is static and high-performance.
  // No unnecessary animation loops or floating listeners needed.

  // Lounges and Automobile sections are responsive editorial layouts.

  // =========================================================================
  // 4. Scroll Reveal Intersection Observer
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // =========================================================================
  // 5. Interactive Detail Modal for Ventures
  // =========================================================================
  const modal = document.getElementById('detailModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');

  const modalDetails = {
    lounge1: {
      title: 'HIVE THE LOUNGE RK',
      tag: '01 / NIGHTLIFE & LOUNGE · GALAXY MALL',
      desc: 'Settle in, catch up, and let the evening unfold. Atmospheric soundscapes, private leather booths, signature hookah, and evening celebrations in central Asansol.',
      rating: '4.1 / 5 · 446 Google Reviews',
      hours: 'Closes at Midnight · ₹400–600 per person',
      address: 'Near Galaxy Mall, Jaganath Plaza, Girls College Road, Asansol, West Bengal 713325',
      phone: '+91 96143 72650',
      maps: 'https://www.google.com/maps/search/?api=1&query=Hive%20The%20Lounge%20RK%20Asansol',
      images: ['images/hive_party_lounge.jpg', 'images/lounge1_interior.png', 'images/lounge1_thumb.png', 'images/lounge1_photo3.png']
    },
    auto: {
      title: 'HIVE RK ENTERPRISE AUTOMOBILES',
      tag: '02 / PRE-OWNED MOTORCYCLES & SCOOTERS',
      desc: 'Discover pre-owned motorcycles in Asansol. Visit the showroom, explore inspected bikes, and find a ride that feels right for you.',
      rating: '4.9 / 5 · 50 Justdial Ratings',
      hours: 'Open Daily · Closes at 10:00 PM',
      address: 'Shakespeare Sarani, near Gitanjali Dhaba, Asansol, West Bengal',
      phone: '+91 96143 72650',
      maps: 'https://www.google.com/maps/search/?api=1&query=Hive%20RK%20Enterprise%20Automobiles%20Asansol',
      images: ['images/auto_thumb.png', 'images/auto_photo2.png', 'images/auto_photo3.png']
    },
    lounge2: {
      title: 'HIVE THE LOUNGE RK 2.0',
      tag: '03 / 24-HOUR CAFÉ & LOUNGE',
      desc: 'A little greenery, a little glow, and plenty of room to make memories. Meet over a bite, a drink, or a conversation that runs a little longer.',
      rating: '4.6 / 5 · 100 Google Reviews',
      hours: 'Open 24 Hours Daily · ₹200–1,000 per person',
      address: 'Shakespeare Sarani, near Blessed Hospital, Gobindapur, Asansol, West Bengal 713305',
      phone: '+91 96143 72650',
      maps: 'https://www.google.com/maps/search/?api=1&query=Hive%20The%20Lounge%20RK%202.0%20Asansol',
      images: ['images/lounge2_thumb.png', 'images/lounge2_photo2.png', 'images/lounge2_photo3.png', 'images/lounge2_photo4.png']
    }
  };

  function openModal(key) {
    const data = modalDetails[key];
    if (!data || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span style="font-family: var(--font-body); font-size: 11px; font-weight: 700; color: var(--color-lime); letter-spacing: 0.12em;">${data.tag}</span>
        <h2 style="font-family: var(--font-heading); font-size: 34px; font-weight: 800; color: var(--color-white); margin-top: 6px; line-height: 1.1;">${data.title}</h2>
        <p style="font-family: var(--font-body); font-size: 15px; color: var(--color-text-secondary); margin-top: 10px; line-height: 1.6;">${data.desc}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 28px;">
        <div style="background: var(--color-charcoal-surface); border: 1px solid var(--color-charcoal-border); border-radius: var(--radius-sm); padding: 14px;">
          <div style="font-family: var(--font-body); font-size: 10px; font-weight: 700; color: var(--color-text-muted); letter-spacing: 0.08em;">COMMUNITY RATING</div>
          <div style="font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--color-lime); margin-top: 4px;">${data.rating}</div>
        </div>
        <div style="background: var(--color-charcoal-surface); border: 1px solid var(--color-charcoal-border); border-radius: var(--radius-sm); padding: 14px;">
          <div style="font-family: var(--font-body); font-size: 10px; font-weight: 700; color: var(--color-text-muted); letter-spacing: 0.08em;">VISITING HOURS</div>
          <div style="font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--color-white); margin-top: 4px;">${data.hours}</div>
        </div>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-family: var(--font-body); font-size: 12px; font-weight: 700; color: var(--color-white); margin-bottom: 12px; letter-spacing: 0.08em;">PHOTO GALLERY</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
          ${data.images.map(img => `
            <div style="height: 140px; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--color-charcoal-border);">
              <img src="${img}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="${data.maps}" target="_blank" rel="noopener noreferrer" class="btn-card-action" style="padding: 11px 22px;">GET DIRECTIONS</a>
        <a href="tel:${data.phone}" class="btn-primary" style="padding: 11px 22px;">CALL DIRECTLY</a>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.getAttribute('data-modal');
      openModal(key);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });

  // =========================================================================
  // Header Scroll & Active Section Tracking
  // =========================================================================
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Active navigation spy
  const navItems = document.querySelectorAll('.nav-item');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('main > section[id]');

  function updateActiveNav(activeId) {
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === `#${activeId}`) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    mobileNavLinks.forEach(item => {
      const href = item.getAttribute('href');
      if (href === `#${activeId}`) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateActiveNav(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(sec => navObserver.observe(sec));
  }

  // =========================================================================
  // Accessible Mobile Navigation Drawer
  // =========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

  function openMobileMenu() {
    if (!mobileNav || !menuToggle) return;
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileNav || !menuToggle) return;
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileNav?.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileMenu);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileMenu);

  // Close mobile drawer when any navigation link is clicked
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Reset mobile menu state on viewport resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileNav?.classList.contains('open')) {
      closeMobileMenu();
    }
  }, { passive: true });

  // Keyboard navigation: Close menu or modal on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileNav?.classList.contains('open')) {
        closeMobileMenu();
      }
      if (modal?.classList.contains('active')) {
        closeModal();
      }
    }
  });

});
