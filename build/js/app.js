const arrowBtn = document.getElementById('arrow-btn');
const aboutSkillsSection = document.getElementById('about-skills');
arrowBtn.addEventListener('click', function (e) {
  e.preventDefault(); 
  aboutSkillsSection.scrollIntoView({
    block: 'start'
  });
});

const img = document.getElementById('img1');
const skillsSection = document.getElementById('skills');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Déclencher l'animation lorsque 50% de la section est visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      img.classList.add('animation-img'); // Ajoute la classe d'animation à l'image
      skillsSection.classList.add('animation-skills'); // Ajoute la classe d'animation aux compétences
      observer.unobserve(entry.target); // Arrête d'observer une fois que l'animation a été déclenchée
    }
  });
}, observerOptions);

observer.observe(document.getElementById('about-skills'));