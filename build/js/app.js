const arrowBtn = document.getElementById('arrow-btn');
const aboutSkillsSection = document.getElementById('about-skills');
arrowBtn.addEventListener('click', function (e) {
  e.preventDefault(); 
  aboutSkillsSection.scrollIntoView({
    block: 'start'
  });
});
