/**
 * NASHCO GLOBAL - PRODUCTION JAVASCRIPT
 * Bilingual Language Switching & Interactive Features
 */

// ============================================
// STATE MANAGEMENT
// ============================================
let currentLanguage = 'en';

// ============================================
// LANGUAGE TRANSLATIONS
// ============================================
const translations = {
    en: {
        langButtonText: 'عربي'
    },
    ar: {
        langButtonText: 'English'
    }
};

// ============================================
// DOM ELEMENTS
// ============================================
const languageToggle = document.getElementById('language-toggle');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');

// ============================================
// LANGUAGE SWITCHING
// ============================================
function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    
    // Update HTML attributes
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const arText = element.getAttribute('data-ar');
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = currentLanguage === 'en' ? enText : arText;
        } else {
            element.textContent = currentLanguage === 'en' ? enText : arText;
        }
    });
    
    // Update language toggle button
    const langText = languageToggle.querySelector('.lang-text');
    langText.textContent = translations[currentLanguage].langButtonText;
    
    // Close mobile menu if open
    closeMobileMenu();
    
    // Store preference
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// SMOOTH SCROLLING
// ============================================
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an anchor link
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    closeMobileMenu();
                    
                    // Calculate offset for fixed header
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    updateActiveLink(this);
                }
            }
        });
    });
}

// ============================================
// ACTIVE LINK HIGHLIGHTING
// ============================================
function updateActiveLink(clickedLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    if (clickedLink) {
        clickedLink.classList.add('active');
    }
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        header.style.padding = '0.8rem 0';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        header.style.padding = '0';
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = currentLanguage === 'en' ? 'Sending...' : 'جاري الإرسال...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        alert(currentLanguage === 'en' 
            ? 'Thank you for your message! We will get back to you soon.' 
            : 'شكراً لرسالتك! سنتواصل معك قريباً.');
        
        // Reset form
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
}

// ============================================
// WHATSAPP BUTTON ANALYTICS (Optional)
// ============================================
function trackWhatsAppClick() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            // Track analytics (if implemented)
            console.log('WhatsApp button clicked');
        });
    }
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
        
        // Toggle language with Alt+L
        if (e.altKey && e.key === 'l') {
            e.preventDefault();
            switchLanguage();
        }
    });
}

// ============================================
// LOAD SAVED PREFERENCES
// ============================================
function loadPreferences() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (savedLanguage && savedLanguage !== currentLanguage) {
        switchLanguage();
    }
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
function init() {
    // Load user preferences
    loadPreferences();
    
    // Set up event listeners
    languageToggle.addEventListener('click', switchLanguage);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    contactForm.addEventListener('submit', handleContactForm);
    
    // Initialize features
    initSmoothScrolling();
    initLazyLoading();
    initScrollAnimations();
    initKeyboardNavigation();
    trackWhatsAppClick();
    
    // Scroll event listeners
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        
        // Debounce active section highlighting
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(highlightActiveSection, 100);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Close mobile menu on large screens
            if (window.innerWidth > 992) {
                closeMobileMenu();
            }
        }, 250);
    });
    
    // Initial active section highlight
    highlightActiveSection();
    
    console.log('Nashco Global website initialized successfully');
}

// ============================================
// START APPLICATION
// ============================================
// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// EXPORT FOR TESTING (if needed)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        toggleMobileMenu,
        closeMobileMenu,
        currentLanguage
    };
}
