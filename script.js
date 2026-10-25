/**
 * HIVE RK ENTERPRISE // Brand Interaction System
 * Design System: Charcoal, White & Electric Lime
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Interactive 3D Perspective Tilt for Hero Showcase
  // =========================================================================
  const stage = document.getElementById('stage3D');
  const bgGiantText = document.getElementById('bgGiantText');
  const tiltElements = document.querySelectorAll('.tilt-element');

  let targetTiltX = 0, targetTiltY = 0;
  let currentTiltX = 0, currentTiltY = 0;

  if (stage) {
    window.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const nx = (e.clientX - centerX) / (rect.width / 2);
      const ny = (e.clientY - centerY) / (rect.height / 2);

      targetTiltX = Math.max(-1, Math.min(1, nx));
      targetTiltY = Math.max(-1, Math.min(1, ny));
    }, { passive: true });

    function updateTilt() {
      // Smooth lerp
      currentTiltX += (targetTiltX - currentTiltX) * 0.08;
      currentTiltY += (targetTiltY - currentTiltY) * 0.08;

      const rotateY = currentTiltX * 18; // restrained degrees
      const rotateX = -currentTiltY * 12;

      tiltElements.forEach(el => {
        el.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(24px)`;
      });

      if (bgGiantText) {
        bgGiantText.style.transform = `translate(calc(-50% + ${-currentTiltX * 36}px), calc(-50% + ${-currentTiltY * 18}px))`;
      }

      requestAnimationFrame(updateTilt);
    }
    updateTilt();
  }

  // =========================================================================
  // 2. Hero 3D Showcase Switcher (Carousel & Arrow Navigation)
  // =========================================================================
  const slides = document.querySelectorAll('.subject-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  const heroCategory = document.getElementById('heroCategory');
  const heroLine1 = document.getElementById('heroLine1');
  const heroLine2 = document.getElementById('heroLine2');
  const heroLine3 = document.getElementById('heroLine3');
  const heroMetaLabel = document.getElementById('heroMetaLabel');
  const heroMetaValue = document.getElementById('heroMetaValue');
  const prevSlideName = document.getElementById('prevSlideName');
  const nextSlideName = document.getElementById('nextSlideName');
  const railPrevText = document.getElementById('railPrevText');
  const railNextText = document.getElementById('railNextText');

  const showcaseData = [
    {
      bgText: '2026',
      category: 'VISIONARY & FOUNDER',
      line1: 'HIVE RK',
      line2: 'ENTERPRISE',
      line3: 'ASANSOL',
      metaLabel: 'SIGNATURE ENTERPRISE',
      metaVal: '⭐ 4.9 / 5 Overall Rating',
      prevName: 'Hive The Lounge RK 2.0',
      nextName: 'Hive Automobiles',
    },
    {
      bgText: 'MOTO',
      category: 'PRE-OWNED MOTORCYCLES',
      line1: 'HIVE RK',
      line2: 'AUTOMOBILES',
      line3: 'ASANSOL',
      metaLabel: 'SHOWROOM COLLECTION',
      metaVal: '⭐ 4.9 / 5 · 50 Justdial Ratings',
      prevName: 'Founder & Visionary',
      nextName: 'Hive The Lounge RK',
    },
    {
      bgText: 'HIVE',
      category: '01 // CAFÉ & LOUNGE',
      line1: 'HIVE THE',
      line2: 'LOUNGE RK',
      line3: 'GALAXY MALL',
      metaLabel: 'MUSIC & ATMOSPHERE',
      metaVal: '⭐ 4.1 / 5 · 446 Google Reviews',
      prevName: 'Hive Automobiles',
      nextName: 'Hive The Lounge RK 2.0',
    },
    {
      bgText: '2.0',
      category: '02 // 24-HOUR DINING',
      line1: 'HIVE THE',
      line2: 'LOUNGE RK 2.0',
      line3: 'GOBINDAPUR',
      metaLabel: 'GREENERY & DINING',
      metaVal: '⭐ 4.6 / 5 · 100 Google Reviews',
      prevName: 'Hive The Lounge RK',
      nextName: 'Founder & Visionary',
    }
  ];

  let currentSlideIndex = 0;

  function switchSlide(newIndex) {
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    currentSlideIndex = newIndex;
    const data = showcaseData[currentSlideIndex];

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentSlideIndex);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlideIndex);
    });

    if (bgGiantText) {
      bgGiantText.style.opacity = '0';
      setTimeout(() => {
        bgGiantText.textContent = data.bgText;
        bgGiantText.style.opacity = '1';
      }, 180);
    }

    if (heroCategory) heroCategory.textContent = data.category;
    if (heroLine1) heroLine1.textContent = data.line1;
    if (heroLine2) heroLine2.textContent = data.line2;
    if (heroLine3) heroLine3.textContent = data.line3;
    if (heroMetaLabel) heroMetaLabel.textContent = data.metaLabel;
    if (heroMetaValue) heroMetaValue.textContent = data.metaVal;

    if (prevSlideName) prevSlideName.textContent = data.prevName;
    if (nextSlideName) nextSlideName.textContent = data.nextName;
  }

  if (btnPrev) btnPrev.addEventListener('click', () => switchSlide(currentSlideIndex - 1));
  if (btnNext) btnNext.addEventListener('click', () => switchSlide(currentSlideIndex + 1));
  if (railPrevText) railPrevText.addEventListener('click', () => switchSlide(currentSlideIndex - 1));
  if (railNextText) railNextText.addEventListener('click', () => switchSlide(currentSlideIndex + 1));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      switchSlide(idx);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') switchSlide(currentSlideIndex - 1);
    if (e.key === 'ArrowRight') switchSlide(currentSlideIndex + 1);
  });

  // =========================================================================
  // 3. Curved 3D Cards Carousel
  // =========================================================================
  const cards = [
    document.getElementById('card0'),
    document.getElementById('card1'),
    document.getElementById('card2')
  ];

  let centerCardIndex = 1;

  function updateCurvedCards() {
    cards.forEach((card, idx) => {
      card.classList.remove('center-card', 'prev-card', 'next-card', 'active-card');
      if (idx === centerCardIndex) {
        card.classList.add('center-card', 'active-card');
      } else if (idx === (centerCardIndex + 2) % 3) {
        card.classList.add('prev-card', 'side-card');
      } else {
        card.classList.add('next-card', 'side-card');
      }
    });

    document.querySelectorAll('.curved-tab').forEach((tab, idx) => {
      tab.classList.toggle('active', idx === centerCardIndex);
    });
  }

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (centerCardIndex !== idx) {
        centerCardIndex = idx;
        updateCurvedCards();
      }
    });
  });

  document.querySelectorAll('.curved-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const f = parseInt(tab.getAttribute('data-filter'), 10);
      if (f < 3) {
        centerCardIndex = f;
        updateCurvedCards();
      }
    });
  });

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
      tag: '01 / CAFÉ & LOUNGE · GALAXY MALL',
      desc: 'Settle in, catch up, and let the evening unfold. A lively café and lounge for music, conversations, and time with your people.',
      rating: '⭐ 4.1 / 5 · 446 Google Reviews',
      hours: 'Closes at Midnight · ₹400–600 per person',
      address: 'Near Galaxy Mall, Jaganath Plaza, Girls College Road, Asansol, West Bengal 713325',
      phone: '+91 96143 72650',
      maps: 'https://www.google.com/maps/search/?api=1&query=Hive%20The%20Lounge%20RK%20Asansol',
      images: ['images/lounge1_interior.png', 'images/lounge1_thumb.png', 'images/lounge1_photo3.png']
    },
    auto: {
      title: 'HIVE RK ENTERPRISE AUTOMOBILES',
      tag: '02 / PRE-OWNED MOTORCYCLES & SCOOTERS',
      desc: 'Discover pre-owned motorcycles in Asansol. Visit the showroom, explore inspected bikes, and find a ride that feels right for you.',
      rating: '⭐ 4.9 / 5 · 50 Justdial Ratings',
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
      rating: '⭐ 4.6 / 5 · 100 Google Reviews',
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

  document.querySelectorAll('.btn-tap-more').forEach(btn => {
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

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.getElementById('headerNav');
  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', () => {
      const isVisible = headerNav.style.display === 'flex';
      headerNav.style.display = isVisible ? 'none' : 'flex';
      headerNav.style.position = 'absolute';
      headerNav.style.top = '72px';
      headerNav.style.left = '0';
      headerNav.style.width = '100%';
      headerNav.style.flexDirection = 'column';
      headerNav.style.padding = '24px';
      headerNav.style.background = 'rgba(24, 24, 24, 0.98)';
      headerNav.style.borderBottom = '1px solid var(--color-charcoal-border)';
    });
  }

});
