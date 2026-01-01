// ===================================
// NASHCO GLOBAL - INTERACTIVE FUNCTIONALITY
// Bilingual (EN/AR) Website Scripts
// ===================================

// Language State
let currentLang = 'en';

// DOM Elements
const langToggle = document.querySelector('.lang-toggle');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const html = document.documentElement;
const body = document.body;

// ===================================
// LANGUAGE TOGGLE FUNCTIONALITY
// ===================================

function switchLanguage() {
    // Toggle language
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update HTML attributes
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all elements with bilingual content
    updateBilingualContent();
    
    // Update form placeholders
    updateFormPlaceholders();
    
    // Store preference
    localStorage.setItem('preferredLanguage', currentLang);
}

function updateBilingualContent() {
    // Update all elements with data-en and data-ar attributes
    const bilingualElements = document.querySelectorAll('[data-en][data-ar]');
    
    bilingualElements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const arText = element.getAttribute('data-ar');
        const text = currentLang === 'en' ? enText : arText;
        
        // Update text content or specific attributes
        if (element.tagName === 'IMG') {
            element.setAttribute('alt', text);
        } else if (element.tagName === 'META') {
            element.setAttribute('content', text);
        } else if (element.tagName === 'TITLE') {
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });
}

function updateFormPlaceholders() {
    // Update input placeholders
    const inputs = document.querySelectorAll('input[data-en-placeholder], textarea[data-en-placeholder]');
    
    inputs.forEach(input => {
        const enPlaceholder = input.getAttribute('data-en-placeholder');
        const arPlaceholder = input.getAttribute('data-ar-placeholder');
        const placeholder = currentLang === 'en' ? enPlaceholder : arPlaceholder;
        
        if (placeholder) {
            input.setAttribute('placeholder', placeholder);
        }
    });
}

// Language Toggle Event Listener
if (langToggle) {
    langToggle.addEventListener('click', switchLanguage);
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translateY(10px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            span.style.transform = '';
            span.style.opacity = '1';
        }
    });
}

// Mobile Menu Event Listeners
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileMenuToggle.contains(e.target)) {
        toggleMobileMenu();
    }
});

// ===================================
// SMOOTH SCROLLING
// ===================================

function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            smoothScrollTo(href);
        }
    });
});

// ===================================
// HEADER SCROLL EFFECT
// ===================================

let lastScroll = 0;
const header = document.querySelector('.header');

function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleScroll, { passive: true });

// ===================================
// LAZY LOADING IMAGES
// ===================================

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load the image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    }
}

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Hello! I'm ${name}.\n\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/971XXXXXXXXX?text=${encodedMessage}`;
        
        // Show success message
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = currentLang === 'en' ? 'Redirecting to WhatsApp...' : 'إعادة التوجيه إلى واتساب...';
        submitBtn.style.background = '#25d366';
        
        // Redirect to WhatsApp after a short delay
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            
            // Reset form and button
            this.reset();
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 2000);
        }, 500);
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.stat-item, .feature-item, .zahy-content, .chemicals-content');
    
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            animationObserver.observe(el);
        });
    }
}

// ===================================
// ACTIVE NAVIGATION HIGHLIGHT
// ===================================

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let currentSection = '';
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ===================================
// WHATSAPP BUTTON ANIMATION
// ===================================

const whatsappButton = document.querySelector('.whatsapp-float');

if (whatsappButton) {
    // Pulse animation
    setInterval(() => {
        whatsappButton.style.animation = 'pulse 1s ease';
        setTimeout(() => {
            whatsappButton.style.animation = '';
        }, 1000);
    }, 5000);
}

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(style);

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
        switchLanguage();
    }
    
    // Initialize lazy loading
    initLazyLoading();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Update active nav on load
    updateActiveNav();
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Add loading complete class to body
    setTimeout(() => {
        body.classList.add('loaded');
    }, 100);
});

// ===================================
// WINDOW RESIZE HANDLER
// ===================================

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Close mobile menu if window is resized to desktop
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }, 250);
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================

// ESC key closes mobile menu
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Tab trap for mobile menu
if (mobileMenuToggle && navMenu) {
    const focusableElements = navMenu.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    navMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && navMenu.classList.contains('active')) {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// ===================================
// PAGE VISIBILITY HANDLING
// ===================================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause any animations or videos when page is hidden
        console.log('Page hidden - pausing activities');
    } else {
        // Resume when page is visible
        console.log('Page visible - resuming activities');
    }
});

// ===================================
// PERFORMANCE MONITORING
// ===================================

if ('PerformanceObserver' in window) {
    // Monitor long tasks
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
                console.warn('Long task detected:', entry);
            }
        }
    });
    
    try {
        perfObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
        // Long task API not supported
    }
}

// Log page load performance
window.addEventListener('load', function() {
    setTimeout(() => {
        if (window.performance && window.performance.timing) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page loaded in ${pageLoadTime}ms`);
        }
    }, 0);
});

// ===================================
// ERROR HANDLING
// ===================================

window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can send errors to analytics here
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You can send errors to analytics here
});

// ===================================
// EXPORT FOR TESTING (if needed)
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        updateBilingualContent,
        smoothScrollTo,
        toggleMobileMenu
    };
}
