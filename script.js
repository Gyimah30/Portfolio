// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
    // Ensure all project cards are visible on load
    projectCards.forEach(card => {
        card.style.display = 'block';
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            const id = card.getAttribute('data-id');
            if (filter === 'all') {
                card.style.display = 'block';
                card.classList.add('fade-in');
                console.log('SHOW:', id);
            } else if (filter === 'web') {
                if (id === 'portfolio' || id === 'ecommerce-frontend' || id === 'ecommerce-backend') {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    console.log('SHOW:', id);
                } else {
                    card.style.display = 'none';
                    console.log('HIDE:', id);
                }
            } else if (filter === 'design') {
                if (id === 'flyer1' || id === 'flyer2' || id === 'flyer3' || id === 'docspot') {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    console.log('SHOW:', id);
                } else {
                    card.style.display = 'none';
                    console.log('HIDE:', id);
                }
            } else if (filter === 'security') {
                if (id === 'securitylab') {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    console.log('SHOW:', id);
                } else {
                    card.style.display = 'none';
                    console.log('HIDE:', id);
                }
            } else if (!id) {
                // Always show cards with no data-id
                card.style.display = 'block';
                card.classList.add('fade-in');
                console.log('SHOW (no id):', card);
            }
        });
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Contact form handling with Formspree
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Let Formspree handle the submission
        // We'll add a loading state and success handling
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Formspree will handle the submission automatically
        // We'll reset the form after a short delay to simulate success
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your message! I\'ll get back to you soon.');
        }, 2000);
    });
}

// Image Modal Functionality
function openImageModal(imageSrc, title) {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="closeImageModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <img src="${imageSrc}" alt="${title}">
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.appendChild(modal);
    
    // Close modal when clicking overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
}

function closeImageModal() {
    const modal = document.querySelector('.image-modal');
    if (modal) {
        modal.remove();
    }
} 