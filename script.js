// Typewriter Effect
function initTypewriterEffect() {
    const headline = document.getElementById('mainHeadline');
    const text = 'Building the Future with Web3 Technology';
    headline.textContent = '';
    headline.style.width = '0';
    headline.style.animation = 'none';

    setTimeout(() => {
        headline.style.animation = 'typewriter 3s steps(40) forwards, blink 1s step-end infinite';
        headline.textContent = text;
    }, 500);
}

// Canvas Background Animation
function initBackgroundAnimation() {
    const canvas = document.getElementById('nodeCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = [];
    const numNodes = 50;

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1
        });
    }

    function drawNode(node) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00FFD1';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00FFD1';
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    function drawConnection(node1, node2, distance) {
        const opacity = Math.max(0, 1 - distance / 150);
        if (opacity > 0.1) {
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(0, 255, 209, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw nodes
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

            drawNode(node);
        });

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    drawConnection(nodes[i], nodes[j], distance);
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// Create floating particles
function createParticles() {
    const container = document.querySelector('.background-animation');

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(particle);
    }
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', function () {
    initTypewriterEffect();
    initBackgroundAnimation();
    createParticles();
});

// Add smooth scrolling for navigation links
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

// Add hover effects to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});
// About Section JavaScript Functionality

document.addEventListener('DOMContentLoaded', function () {
    initAboutSection();
});

function initAboutSection() {
    // Initialize scroll animations
    initScrollAnimations();

    // Initialize button interactions
    initButtonInteractions();

    // Initialize image hover effects
    initImageHoverEffects();

    // Initialize list item animations
    initListItemAnimations();
}

// Scroll-triggered animations
function initScrollAnimations() {
    const aboutSection = document.querySelector('.about-section');
    const aboutHeadline = document.querySelector('.about-headline');
    const aboutDescription = document.querySelector('.about-description');
    const aboutListItems = document.querySelectorAll('.about-list-item');
    const aboutImage = document.querySelector('.about-image');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate headline
                if (aboutHeadline) {
                    aboutHeadline.style.opacity = '0';
                    aboutHeadline.style.transform = 'translateY(30px)';
                    aboutHeadline.style.transition = 'all 0.8s ease-out';

                    setTimeout(() => {
                        aboutHeadline.style.opacity = '1';
                        aboutHeadline.style.transform = 'translateY(0)';
                    }, 200);
                }

                // Animate description
                if (aboutDescription) {
                    aboutDescription.style.opacity = '0';
                    aboutDescription.style.transform = 'translateY(30px)';
                    aboutDescription.style.transition = 'all 0.8s ease-out';

                    setTimeout(() => {
                        aboutDescription.style.opacity = '1';
                        aboutDescription.style.transform = 'translateY(0)';
                    }, 400);
                }

                // Animate list items with stagger effect
                aboutListItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-30px)';
                    item.style.transition = 'all 0.6s ease-out';

                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, 600 + (index * 150));
                });

                // Animate image
                if (aboutImage) {
                    aboutImage.style.opacity = '0';
                    aboutImage.style.transform = 'scale(0.9)';
                    aboutImage.style.transition = 'all 1s ease-out';

                    setTimeout(() => {
                        aboutImage.style.opacity = '1';
                        aboutImage.style.transform = 'scale(1)';
                    }, 300);
                }
            }
        });
    }, observerOptions);

    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// Button interaction effects
function initButtonInteractions() {
    const learnMoreBtn = document.querySelector('.about-learn-more-btn');

    if (learnMoreBtn) {
        // Enhanced hover effects
        learnMoreBtn.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05) translateY(-2px)';
            this.style.boxShadow = '0 0 30px var(--btn-primary-bg), 0 8px 20px rgba(0, 255, 209, 0.4)';
        });

        learnMoreBtn.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 0 25px var(--btn-primary-bg), 0 5px 15px rgba(0, 255, 209, 0.3)';
        });

        // Click effect
        learnMoreBtn.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.98) translateY(0)';
        });

        learnMoreBtn.addEventListener('mouseup', function () {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });

        // Click handler (you can customize this)
        learnMoreBtn.addEventListener('click', function () {
            // Add your click functionality here
            console.log('Learn More button clicked');

            // Example: Scroll to next section or open modal
            // You can replace this with your desired functionality
            alert('Learn More functionality - customize this in your implementation');
        });
    }
}

// Image hover effects
function initImageHoverEffects() {
    const aboutImage = document.querySelector('.about-image');

    if (aboutImage) {
        aboutImage.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 40px 70px -12px rgba(0, 255, 209, 0.2)';
        });

        aboutImage.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
    }
}

// List item hover animations
function initListItemAnimations() {
    const listItems = document.querySelectorAll('.about-list-item');

    listItems.forEach(item => {
        const icon = item.querySelector('.about-icon');

        item.addEventListener('mouseenter', function () {
            this.style.color = '#00FFD1';
            this.style.transform = 'translateX(10px)';

            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.filter = 'drop-shadow(0 0 10px #00FFD1)';
            }
        });

        item.addEventListener('mouseleave', function () {
            this.style.color = '#D1D5DB';
            this.style.transform = 'translateX(0)';

            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = 'drop-shadow(0 0 5px #00FFD1)';
            }
        });
    });
}

// Utility function to add parallax effect to the section (optional)
function addParallaxEffect() {
    const aboutSection = document.querySelector('.about-section');

    if (aboutSection) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const sectionTop = aboutSection.offsetTop;
            const sectionHeight = aboutSection.offsetHeight;
            const windowHeight = window.innerHeight;

            // Check if section is in viewport
            if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
                const parallaxSpeed = 0.5;
                const yPos = -(scrolled - sectionTop) * parallaxSpeed;
                aboutSection.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
}

// Call parallax effect if desired (uncomment the line below)
// addParallaxEffect();

// News Section JavaScript Functionality

document.addEventListener('DOMContentLoaded', function () {
    initNewsSection();
});

function initNewsSection() {
    // Initialize scroll animations
    initNewsScrollAnimations();

    // Initialize button interactions
    initNewsButtonInteractions();

    // Initialize card hover effects
    initNewsCardHoverEffects();

    // Initialize staggered card animations
    initStaggeredCardAnimations();
}

// Scroll-triggered animations for news section
function initNewsScrollAnimations() {
    const newsSection = document.querySelector('.news-section');
    const newsHeadline = document.querySelector('.news-headline');
    const newsIntroduction = document.querySelector('.news-introduction');
    const newsCards = document.querySelectorAll('.news-card');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate headline
                if (newsHeadline) {
                    newsHeadline.style.opacity = '0';
                    newsHeadline.style.transform = 'translateY(40px)';
                    newsHeadline.style.transition = 'all 0.8s ease-out';

                    setTimeout(() => {
                        newsHeadline.style.opacity = '1';
                        newsHeadline.style.transform = 'translateY(0)';
                    }, 200);
                }

                // Animate introduction
                if (newsIntroduction) {
                    newsIntroduction.style.opacity = '0';
                    newsIntroduction.style.transform = 'translateY(30px)';
                    newsIntroduction.style.transition = 'all 0.8s ease-out';

                    setTimeout(() => {
                        newsIntroduction.style.opacity = '1';
                        newsIntroduction.style.transform = 'translateY(0)';
                    }, 400);
                }

                // Animate news cards with stagger effect
                newsCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(50px) scale(0.9)';
                    card.style.transition = 'all 0.6s ease-out';

                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 600 + (index * 100));
                });
            }
        });
    }, observerOptions);

    if (newsSection) {
        observer.observe(newsSection);
    }
}

// Button interaction effects
function initNewsButtonInteractions() {
    const readMoreButtons = document.querySelectorAll('.news-read-more-btn');

    readMoreButtons.forEach(button => {
        // Enhanced hover effects
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.08) translateY(-2px)';
            this.style.boxShadow = '0 0 30px var(--secondary-accent), 0 8px 20px rgba(255, 0, 170, 0.4)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 0 25px var(--secondary-accent), 0 5px 15px rgba(255, 0, 170, 0.3)';
        });

        // Click effect
        button.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.95) translateY(0)';
        });

        button.addEventListener('mouseup', function () {
            this.style.transform = 'scale(1.08) translateY(-2px)';
        });

        // Click handler
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the parent card to identify which news item was clicked
            const newsCard = this.closest('.news-card');
            const newsTitle = newsCard.querySelector('.news-card-title').textContent;

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.08) translateY(-2px)';
            }, 150);

            // Custom functionality - replace with your desired behavior
            handleNewsItemClick(newsTitle, newsCard);
        });
    });
}

// Handle news item click (customize this function)
function handleNewsItemClick(title, cardElement) {
    // Example implementations - choose one or customize:

    // Option 1: Show alert (for demo purposes)
    console.log(`Reading more about: ${title}`);

    // Option 2: Open in new tab (replace with actual URLs)
    // const newsUrls = {
    //     'DeFi Revolution: New Protocols Emerge': '/news/defi-revolution',
    //     'NFT Marketplaces Reach New Heights': '/news/nft-marketplaces',
    //     // Add more mappings...
    // };
    // if (newsUrls[title]) {
    //     window.open(newsUrls[title], '_blank');
    // }

    // Option 3: Scroll to detailed section
    // const detailSection = document.querySelector('#news-detail');
    // if (detailSection) {
    //     detailSection.scrollIntoView({ behavior: 'smooth' });
    // }

    // Option 4: Open modal with full article
    // openNewsModal(title, cardElement);

    // For now, show a demo alert
    alert(`Opening article: "${title}"\n\nCustomize the handleNewsItemClick function in news_section.js to implement your desired behavior.`);
}

// Card hover effects
function initNewsCardHoverEffects() {
    const newsCards = document.querySelectorAll('.news-card');

    newsCards.forEach(card => {
        const cardImage = card.querySelector('.news-card-image');
        const cardTitle = card.querySelector('.news-card-title');

        card.addEventListener('mouseenter', function () {
            // Enhanced card hover effect
            this.style.transform = 'translateY(-12px) scale(1.02)';
            this.style.boxShadow = '0 40px 80px -12px rgba(0, 255, 209, 0.2)';

            // Image zoom effect
            if (cardImage) {
                cardImage.style.transform = 'scale(1.1)';
            }

            // Title color change
            if (cardTitle) {
                cardTitle.style.color = '#00FFD1';
                cardTitle.style.textShadow = '0 0 10px rgba(0, 255, 209, 0.5)';
            }
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';

            if (cardImage) {
                cardImage.style.transform = 'scale(1)';
            }

            if (cardTitle) {
                cardTitle.style.color = '#FFFFFF';
                cardTitle.style.textShadow = 'none';
            }
        });
    });
}

// Staggered card animations
function initStaggeredCardAnimations() {
    const newsCards = document.querySelectorAll('.news-card');

    // Add loading class initially
    newsCards.forEach(card => {
        card.classList.add('news-card-loading');
    });

    // Observer for staggered loading animation
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('news-card-loading');
                    entry.target.classList.add('news-card-loaded');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    newsCards.forEach(card => {
        cardObserver.observe(card);
    });
}

// Utility function to create floating particles around news cards (optional)
function addNewsParticleEffects() {
    const newsCards = document.querySelectorAll('.news-card');

    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            createCardParticles(this);
        });
    });
}

function createCardParticles(card) {
    const particleCount = 5;
    const cardRect = card.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#00FFD1';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';

        // Random position around the card
        particle.style.left = (cardRect.left + Math.random() * cardRect.width) + 'px';
        particle.style.top = (cardRect.top + Math.random() * cardRect.height) + 'px';

        document.body.appendChild(particle);

        // Animate the particle
        particle.animate([
            { transform: 'translateY(0px) scale(1)', opacity: 1 },
            { transform: 'translateY(-50px) scale(0)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Initialize particle effects (uncomment if desired)
// setTimeout(addNewsParticleEffects, 1000);

// Utility function for lazy loading images (optional)
function initLazyLoadImages() {
    const images = document.querySelectorAll('.news-card-image');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease-in-out';

                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);

                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading (uncomment if desired)
// initLazyLoadImages();
// Contact Form JavaScript

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Form submission handler
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous messages
        hideMessages();
        clearErrorStates();

        // Validate form
        if (validateForm()) {
            // If validation passes, simulate form submission
            submitForm();
        }
    });

    // Real-time validation on input blur
    nameInput.addEventListener('blur', function () {
        validateField(nameInput, 'Name is required');
    });

    emailInput.addEventListener('blur', function () {
        validateEmail();
    });

    messageInput.addEventListener('blur', function () {
        validateField(messageInput, 'Message is required');
    });

    // Clear error state on focus
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('focus', function () {
            this.classList.remove('input-error');
        });
    });

    function validateForm() {
        let isValid = true;
        const errors = [];

        // Validate name
        if (!nameInput.value.trim()) {
            nameInput.classList.add('input-error');
            errors.push('Name is required');
            isValid = false;
        }

        // Validate email
        if (!emailInput.value.trim()) {
            emailInput.classList.add('input-error');
            errors.push('Email is required');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('input-error');
            errors.push('Please enter a valid email address');
            isValid = false;
        }

        // Validate message
        if (!messageInput.value.trim()) {
            messageInput.classList.add('input-error');
            errors.push('Message is required');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            messageInput.classList.add('input-error');
            errors.push('Message must be at least 10 characters long');
            isValid = false;
        }

        // Display errors if any
        if (!isValid) {
            showErrorMessage(errors.join('<br>'));
        }

        return isValid;
    }

    function validateField(field, errorMsg) {
        if (!field.value.trim()) {
            field.classList.add('input-error');
            return false;
        } else {
            field.classList.remove('input-error');
            return true;
        }
    }

    function validateEmail() {
        if (!emailInput.value.trim()) {
            emailInput.classList.add('input-error');
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('input-error');
            return false;
        } else {
            emailInput.classList.remove('input-error');
            return true;
        }
    }

    function submitForm() {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Show success message
            showSuccessMessage('Thank you for your message! We\'ll get back to you soon.');

            // Reset form
            contactForm.reset();
        }, 2000);
    }

    function showErrorMessage(message) {
        errorMessage.innerHTML = message;
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');

        // Scroll to error message
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showSuccessMessage(message) {
        successMessage.innerHTML = message;
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function hideMessages() {
        errorMessage.classList.add('hidden');
        successMessage.classList.add('hidden');
    }

    function clearErrorStates() {
        [nameInput, emailInput, messageInput].forEach(input => {
            input.classList.remove('input-error');
        });
    }

    // Character counter for message textarea (optional enhancement)
    const maxLength = 500;
    messageInput.addEventListener('input', function () {
        const remaining = maxLength - this.value.length;

        // Create or update character counter
        let counter = document.getElementById('charCounter');
        if (!counter) {
            counter = document.createElement('div');
            counter.id = 'charCounter';
            counter.className = 'text-sm text-gray-400 text-right mt-1';
            this.parentNode.insertBefore(counter, this.nextSibling);
        }

        counter.textContent = `${remaining} characters remaining`;

        if (remaining < 50) {
            counter.className = 'text-sm text-yellow-400 text-right mt-1';
        } else if (remaining < 0) {
            counter.className = 'text-sm text-red-400 text-right mt-1';
            this.value = this.value.substring(0, maxLength);
        } else {
            counter.className = 'text-sm text-gray-400 text-right mt-1';
        }
    });
});
    document.addEventListener('DOMContentLoaded', function () {
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');

          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
              otherItem.querySelector('.faq-answer').classList.add('hidden');
            }
          });

          if (!isOpen) {
            item.classList.add('active');
            answer.classList.remove('hidden');
          } else {
            item.classList.remove('active');
            answer.classList.add('hidden');
          }
        });
      });
    });