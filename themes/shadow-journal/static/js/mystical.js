// Shadow Journal - Effets mystiques et interactifs

document.addEventListener('DOMContentLoaded', function() {
    
    // Effet de lueur douce sur le survol des liens
    function addGlowEffect() {
        const links = document.querySelectorAll('a, .post-title');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.textShadow = '0 0 10px rgba(74, 144, 226, 0.5)';
                this.style.transition = 'text-shadow 0.3s ease';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.textShadow = '';
            });
        });
    }
    
    // Animation de fade-in pour les articles
    function animateArticles() {
        const articles = document.querySelectorAll('.post');
        
        const observer = new IntersectionObserver((entries) => {
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
        
        articles.forEach(article => {
            article.style.opacity = '0';
            article.style.transform = 'translateY(20px)';
            article.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(article);
        });
    }
    
    // Effet de particules mystiques flottantes
    function createMysticalParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'mystical-particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 15; i++) {
            createParticle(particlesContainer);
        }
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(74, 144, 226, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            animation: float ${duration}s infinite linear;
        `;
        
        container.appendChild(particle);
        
        // Nettoyer les particules après animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                createParticle(container); // Créer une nouvelle particule
            }
        }, duration * 1000);
    }
    
    // Ajouter les styles d'animation
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes mysticalPulse {
                0%, 100% {
                    box-shadow: 0 0 5px rgba(74, 144, 226, 0.2);
                }
                50% {
                    box-shadow: 0 0 20px rgba(74, 144, 226, 0.4), 0 0 30px rgba(107, 70, 193, 0.2);
                }
            }
            
            .post:hover {
                animation: mysticalPulse 2s ease-in-out infinite;
            }
            
            .reading-time {
                font-style: italic;
                opacity: 0.7;
            }
            
            .post-content blockquote {
                position: relative;
                overflow: hidden;
            }
            
            .post-content blockquote::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 3px;
                height: 100%;
                background: linear-gradient(to bottom, var(--accent-blue), var(--shadow-purple));
                animation: shimmer 3s ease-in-out infinite;
            }
            
            @keyframes shimmer {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Effet de typing pour les citations
    function typeEffect() {
        const quotes = document.querySelectorAll('blockquote p');
        
        quotes.forEach(quote => {
            const text = quote.textContent;
            quote.textContent = '';
            quote.style.borderRight = '2px solid var(--accent-blue)';
            
            let i = 0;
            const timer = setInterval(() => {
                quote.textContent += text[i];
                i++;
                
                if (i >= text.length) {
                    clearInterval(timer);
                    setTimeout(() => {
                        quote.style.borderRight = 'none';
                    }, 1000);
                }
            }, 50);
        });
    }
    
    // Mode lecture nocturne amélioré
    function enhanceReadingExperience() {
        // Ajuster la luminosité selon l'heure
        const hour = new Date().getHours();
        if (hour >= 20 || hour <= 6) {
            document.body.style.filter = 'brightness(0.9)';
        }
        
        // Effet de focus sur le paragraphe lu
        const paragraphs = document.querySelectorAll('.post-content p');
        paragraphs.forEach(p => {
            p.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(74, 144, 226, 0.05)';
                this.style.padding = '0.5rem';
                this.style.borderRadius = '5px';
                this.style.transition = 'all 0.3s ease';
            });
            
            p.addEventListener('mouseleave', function() {
                this.style.background = '';
                this.style.padding = '';
            });
        });
    }
    
    // Initialiser tous les effets
    addGlowEffect();
    animateArticles();
    createMysticalParticles();
    addAnimationStyles();
    enhanceReadingExperience();
    
    // Activer l'effet de typing pour les citations après un délai
    setTimeout(typeEffect, 1000);
    
    // Gérer le redimensionnement de fenêtre
    window.addEventListener('resize', function() {
        // Recréer les particules si nécessaire
        const existingParticles = document.querySelector('.mystical-particles');
        if (existingParticles) {
            existingParticles.remove();
            createMysticalParticles();
        }
    });
    
    console.log('✨ Shadow Journal mystique chargé - Que vos réflexions illuminent la nuit');
});