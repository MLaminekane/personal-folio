const arrowBtn = document.getElementById('arrow-btn');
const aboutSkillsSection = document.getElementById('about-skills');
arrowBtn.addEventListener('click', function (e) {
  e.preventDefault(); 
  aboutSkillsSection.scrollIntoView({
    block: 'start'
  });
});

const img = document.getElementById('lamine-img');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      img.classList.add('animation-img');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

observer.observe(document.getElementById('about-skills'));