document.addEventListener("DOMContentLoaded", () => {

    // 1. Typewriter Effect (انیمیشن تایپ زنده)
    const textElement = document.querySelector(".typewriter");
    if (textElement) {
        const words = [
            "Frontend Web Development", 
            "Java Programming", 
            "React & Next.js", 
            "JavaScript", 
            "Network Design", 
            "Data Analytics"
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1800; // Pause when word is complete
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        typeEffect();
    }

    // 2. Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Reveal Elements on Scroll
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-on-scroll');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('section, .skill-card, .project-card');
    animatedElements.forEach(el => observer.observe(el));
});