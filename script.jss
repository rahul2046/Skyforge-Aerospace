// GSAP Animations
gsap.from("header h1", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
gsap.from("header p", { duration: 1, delay: 0.5, opacity: 0, ease: "power2.out" });
gsap.from(".cta-button", { duration: 1, delay: 1, scale: 0, ease: "back.out(1.7)" });
gsap.from(".logo", { duration: 1.5, delay: 0.2, rotationY: 360, opacity: 0, ease: "power2.out" });

// Scroll Animations
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

// Star Particles
function createStar() {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = "0";
    document.querySelector(".stars").appendChild(star);

    gsap.to(star, {
        y: window.innerHeight,
        opacity: 0,
        duration: Math.random() * 5 + 10,
        onComplete: () => star.remove(),
    });
}

setInterval(createStar, 200); 
      
