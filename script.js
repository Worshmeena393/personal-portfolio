document.addEventListener("DOMContentLoaded", () => {

    const textElement = document.querySelector(".typewriter");

    const words = [
        "HTML5 & CSS3",
        "JavaScript & React",
        "Next.js",
        "Java",
        "Network Design"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;


    function typeEffect() {

        const currentWord = words[wordIndex];


        // Typing
        if (!isDeleting) {

            textElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

        }


        // Deleting
        else {

            textElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

        }


        // Typing speed
        let typeSpeed = isDeleting ? 50 : 100;


        // Word completed
        if (!isDeleting && charIndex === currentWord.length) {

            typeSpeed = 1500;

            isDeleting = true;

        }


        // Word deleted
        else if (isDeleting && charIndex === 0) {

            isDeleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

            typeSpeed = 500;

        }


        setTimeout(typeEffect, typeSpeed);

    }


    // Start the typewriter
    typeEffect();

});