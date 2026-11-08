/**
 * THE MAKING OF ME — Personal Development Portfolio
 * Client-side script handling interactive features:
 * - Scroll progress indicator
 * - Dynamic active nav spy via IntersectionObserver
 * - Mobile drawer navigation
 * - Skill audit animated meters
 * - Evidence archive category filtering
 * - Detailed evidence inspection lightbox / modal
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. EVIDENCE ARTIFACTS DATABASE (Rich Academic Captions)
  // =========================================================================
  const ARTIFACTS_DATA = {
    'Clubfair.jpg': {
      id: 'Artifact #01',
      category: 'Leadership & Outreach',
      title: 'VNUK Club Fair Outreach & Coordination',
      image: 'assets/images/Clubfair.jpg',
      context: 'VNUK University Club Fair — freshman engagement and community booth management.',
      role: 'Outreach Lead: Coordinated booth setup and volunteer orientation.',
      proves: 'Public communication, adaptability, and active facilitation.',
      lesson: 'Direct, empathetic engagement drives higher student involvement.'
    },
    'clubfair2.jpg': {
      id: 'Artifact #02',
      category: 'Team Leadership',
      title: 'Volunteer Squad Mobilization',
      image: 'assets/images/clubfair2.jpg',
      context: 'Club fair operational floor coordination during peak attendance.',
      role: 'Team Lead: Deployed paired volunteer shifts with structured rest breaks.',
      proves: 'Team coordination and volunteer fatigue management.',
      lesson: 'Thoughtful operational frameworks prevent volunteer burnout.'
    },
    'innovation_SV.jpg': {
      id: 'Artifact #03',
      category: 'Critical Thinking',
      title: 'Student Innovation & Research Defense',
      image: 'assets/images/innovation_SV.jpg',
      context: 'Student Innovation & Research Contest before an academic faculty jury.',
      role: 'Presenter & Modeler: Defended data assumptions and prototype workflow.',
      proves: 'Critical reasoning, empirical testing, and problem-solving.',
      lesson: 'User accessibility must always validate technical complexity.'
    },
    'AI_BigData.jpg': {
      id: 'Artifact #04',
      category: 'Academic & Tech',
      title: 'AI & Big Data Symposium',
      image: 'assets/images/AI_BigData.jpg',
      context: 'AI & Big Data Symposium examining large-scale machine learning systems.',
      role: 'Participant: Analyzed enterprise data pipelines and model deployment.',
      proves: 'Technical curiosity and specialization in Applied Data Science.',
      lesson: 'Theoretical models must connect directly to practical problem spaces.'
    },
    '3x3 tournament.jpg': {
      id: 'Artifact #05',
      category: 'Physical Well-Being',
      title: '3x3 Basketball Tournament',
      image: 'assets/images/3x3 tournament.jpg',
      context: 'Competitive 3x3 basketball tournament at the university sports complex.',
      role: 'Team Athlete: Regular athletic conditioning and rapid tactical teamwork.',
      proves: 'Physical stamina, self-regulation, and mental decompression.',
      lesson: 'Athletic exertion recharges cognitive sharpness and discipline.'
    },
    'noel.jpg': {
      id: 'Artifact #06',
      category: 'Emotional Well-Being',
      title: 'Campus Christmas Celebration',
      image: 'assets/images/noel.jpg',
      context: 'Year-end campus Christmas gathering with university peers.',
      role: 'Co-organizer: Facilitated peer connection and reflection activities.',
      proves: 'Emotional well-being, community belonging, and empathy.',
      lesson: 'Shared community connection anchors academic perseverance.'
    }
  };

  // =========================================================================
  // 2. SCROLL PROGRESS BAR & STICKY HEADER
  // =========================================================================
  const progressBar = document.getElementById('scroll-progress-bar');
  const siteHeader = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    if (siteHeader) {
      if (scrollTop > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // =========================================================================
  // 3. MOBILE DRAWER NAVIGATION
  // =========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeModal();
    }
  });

  // =========================================================================
  // 4. ACTIVE NAVIGATION LINK SPY (IntersectionObserver)
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(sec => navObserver.observe(sec));

  // =========================================================================
  // 5. ANIMATED SKILL METERS ON SCROLL
  // =========================================================================
  const skillMeters = document.querySelectorAll('.skill-meter-item');
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fillBar = entry.target.querySelector('.progress-fill');
        if (fillBar) {
          // Trigger CSS transition
          fillBar.style.opacity = '1';
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  skillMeters.forEach(meter => skillObserver.observe(meter));

  // =========================================================================
  // 6. EVIDENCE GALLERY CATEGORY FILTERING
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.artifact-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active filter button styling
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterVal === 'all' || cardCategory === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // =========================================================================
  // 7. EVIDENCE INSPECTION MODAL / LIGHTBOX
  // =========================================================================
  const modalBackdrop = document.getElementById('evidenceModal');
  const modalImg = document.getElementById('modalImg');
  const modalBadge = document.getElementById('modalCategoryBadge');
  const modalId = document.getElementById('modalId');
  const modalTitle = document.getElementById('modalTitle');
  const modalContext = document.getElementById('modalContext');
  const modalRole = document.getElementById('modalRole');
  const modalProves = document.getElementById('modalProves');
  const modalLesson = document.getElementById('modalLesson');
  const modalClose = document.getElementById('modalClose');
  const modalDoneBtn = document.getElementById('modalDoneBtn');

  window.openEvidenceModal = function(imageKey) {
    const data = ARTIFACTS_DATA[imageKey];
    if (!data) return;

    if (modalImg) modalImg.src = data.image;
    if (modalImg) modalImg.alt = data.title;
    if (modalBadge) modalBadge.textContent = data.category;
    if (modalId) modalId.textContent = data.id;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalContext) modalContext.textContent = data.context;
    if (modalRole) modalRole.textContent = data.role;
    if (modalProves) modalProves.textContent = data.proves;
    if (modalLesson) modalLesson.textContent = data.lesson;

    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

});

