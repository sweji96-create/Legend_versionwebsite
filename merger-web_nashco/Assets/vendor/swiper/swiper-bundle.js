(function () {
  function Swiper(containerSelector, options) {
    const container = typeof containerSelector === 'string' ? document.querySelector(containerSelector) : containerSelector;
    if (!container) throw new Error('Swiper container not found');
    const wrapper = container.querySelector('.swiper-wrapper');
    const slides = Array.from(container.querySelectorAll('.swiper-slide'));
    let current = 0;
    const opts = options || {};

    function slidesPerView() {
      const w = window.innerWidth;
      if (opts.breakpoints) {
        const bp = Object.keys(opts.breakpoints).map(Number).sort((a, b) => a - b);
        let result = opts.slidesPerView || 1;
        bp.forEach(v => { if (w >= v) result = opts.breakpoints[v].slidesPerView || result; });
        return result;
      }
      return opts.slidesPerView || 1;
    }

    function update() {
      const spv = slidesPerView();
      const widthPercent = 100 / spv;
      slides.forEach(slide => {
        slide.style.width = widthPercent + '%';
      });
      wrapper.style.transform = `translateX(-${current * widthPercent}%)`;
    }

    function clamp() {
      const spv = slidesPerView();
      const maxIndex = Math.max(0, slides.length - spv);
      if (current > maxIndex) current = maxIndex;
      if (current < 0) current = 0;
    }

    this.slideNext = function () { current += 1; clamp(); update(); };
    this.slidePrev = function () { current -= 1; clamp(); update(); };
    this.on = function () { /* noop for compatibility */ };

    // Navigation
    if (opts.navigation) {
      const nextEl = typeof opts.navigation.nextEl === 'string' ? document.querySelector(opts.navigation.nextEl) : opts.navigation.nextEl;
      const prevEl = typeof opts.navigation.prevEl === 'string' ? document.querySelector(opts.navigation.prevEl) : opts.navigation.prevEl;
      if (nextEl) nextEl.addEventListener('click', (e) => { e.preventDefault(); this.slideNext(); });
      if (prevEl) prevEl.addEventListener('click', (e) => { e.preventDefault(); this.slidePrev(); });
    }

    // Pagination bullets
    if (opts.pagination && opts.pagination.el) {
      const pagEl = typeof opts.pagination.el === 'string' ? document.querySelector(opts.pagination.el) : opts.pagination.el;
      if (pagEl) {
        pagEl.innerHTML = '';
        slides.forEach((_, idx) => {
          const b = document.createElement('span');
          b.className = 'swiper-pagination-bullet' + (idx === 0 ? ' swiper-pagination-bullet-active' : '');
          b.addEventListener('click', () => { current = idx; clamp(); update(); pagEl.querySelectorAll('.swiper-pagination-bullet').forEach((el, i) => el.classList.toggle('swiper-pagination-bullet-active', i === current)); });
          pagEl.appendChild(b);
        });
      }
    }

    window.addEventListener('resize', update, { passive: true });
    update();
  }

  window.Swiper = Swiper;
})();
