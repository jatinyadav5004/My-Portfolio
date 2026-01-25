// Scroll animations and interactive effects
export const initScrollAnimations = () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation class
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  // Removed parallax effect to prevent overlap issues

  // Skill progress animation
  const skillCards = document.querySelectorAll('.skill__card--featured');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.skill__progress-fill');
        if (progressBar) {
          const width = progressBar.style.width;
          progressBar.style.width = '0%';
          setTimeout(() => {
            progressBar.style.width = width;
          }, 100);
        }
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillCards.forEach((card) => {
    skillObserver.observe(card);
  });

  // Typing effect for home subtitle
  const typingElement = document.querySelector('.home__typing');
  if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 1000);
  }
};

// Cursor trail effect
export const initCursorTrail = () => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  };
  animateCursor();
};

// Smooth scroll for anchor links
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

