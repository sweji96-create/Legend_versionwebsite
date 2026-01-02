// ================================================
// Nashco Global - Interactive Website JavaScript
// ================================================

// Global state
let currentLang = 'en';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupNavigation();
    setupLanguageToggle();
    setupScrollEffects();
    setupAnimations();
    setupFormHandler();
    setupBackToTop();
    updateCurrentYear();
    setupStatCounters();
}

// ================================================
// Navigation
// ================================================

function setupNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scrolled class to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ================================================
// Language Toggle (English/Arabic)
// ================================================

function setupLanguageToggle() {
    const langBtn = document.getElementById('langBtn');
    const langText = document.getElementById('langText');
    const html = document.documentElement;
    
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            toggleLanguage();
        });
    }
    
    function toggleLanguage() {
        if (currentLang === 'en') {
            // Switch to Arabic
            currentLang = 'ar';
            html.setAttribute('lang', 'ar');
            html.setAttribute('dir', 'rtl');
            langText.textContent = 'English';
            updateContent('ar');
        } else {
            // Switch to English
            currentLang = 'en';
            html.setAttribute('lang', 'en');
            html.setAttribute('dir', 'ltr');
            langText.textContent = 'العربية';
            updateContent('en');
        }
        
        // Add smooth transition effect
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 150);
    }
    
    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-en][data-ar]');
        
        elements.forEach(element => {
            const enText = element.getAttribute('data-en');
            const arText = element.getAttribute('data-ar');
            
            if (lang === 'ar' && arText) {
                element.textContent = arText;
            } else if (lang === 'en' && enText) {
                element.textContent = enText;
            }
        });
    }
}

// ================================================
// Scroll Effects
// ================================================

function setupScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animation for stats
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToObserve = document.querySelectorAll(
        '.service-card, .stat-item, .feature-item, .info-item'
    );
    
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

// ================================================
// Animations
// ================================================

function setupAnimations() {
    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ================================================
// Stat Counters
// ================================================

function setupStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        stat.classList.add('counter-ready');
    });
}

function animateCounter(element) {
    if (element.classList.contains('counted')) return;
    
    const target = parseInt(element.getAttribute('data-count') || element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
            element.classList.add('counted');
        }
    };
    
    updateCounter();
}

// ================================================
// Form Handler
// ================================================

function setupFormHandler() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit(contactForm);
        });
    }
}

function handleFormSubmit(form) {
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validate form
    if (!validateForm(data)) {
        return;
    }
    
    // Show success message
    showNotification(
        currentLang === 'en' 
            ? 'Thank you for your message! We will get back to you soon.' 
            : 'شكراً لرسالتك! سنتواصل معك قريباً.',
        'success'
    );
    
    // Reset form
    form.reset();
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', data);
}

function validateForm(data) {
    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification(
            currentLang === 'en' 
                ? 'Please fill in all fields.' 
                : 'يرجى ملء جميع الحقول.',
            'error'
        );
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification(
            currentLang === 'en' 
                ? 'Please enter a valid email address.' 
                : 'يرجى إدخال عنوان بريد إلكتروني صالح.',
            'error'
        );
        return false;
    }
    
    return true;
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: currentLang === 'ar' ? 'auto' : '20px',
        left: currentLang === 'ar' ? '20px' : 'auto',
        padding: '20px 30px',
        background: type === 'success' ? '#27ae60' : '#e74c3c',
        color: '#fff',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
        zIndex: '10000',
        animation: currentLang === 'ar' ? 'slideInRTL 0.3s ease' : 'slideIn 0.3s ease',
        maxWidth: '300px',
        fontSize: '16px',
        fontWeight: '500'
    });
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = currentLang === 'ar' ? 'slideOutRTL 0.3s ease' : 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ================================================
// Back to Top Button
// ================================================

function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ================================================
// Utility Functions
// ================================================

function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ================================================
// Keyboard Navigation
// ================================================

document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.getElementById('menuToggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    }
});

// ================================================
// Performance Optimization
// ================================================

// ================================================
// Lazy Loading Images (if any are added)
// ================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================================
// Console Welcome Message
// ================================================

console.log('%cNashco Global', 'font-size: 24px; font-weight: bold; color: #1a5490;');
console.log('%cExcellence Since 1994', 'font-size: 14px; color: #666;');
console.log('%cWebsite by Nashco Global | Built with modern web technologies', 'font-size: 12px; color: #999;');
