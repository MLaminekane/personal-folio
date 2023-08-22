//bouton-navigation sur la page home
const arrowBtn = document.getElementById('arrow-btn');
const aboutSkillsSection = document.getElementById('about-skills');
arrowBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const scrollDistance = aboutSkillsSection.getBoundingClientRect().top;

  const animationDuration = 1000; // 3 seconds
  const startTime = performance.now();
  function scrollStep(timestamp) {
    const currentTime = timestamp - startTime;
    const progress = Math.min(currentTime / animationDuration, 1);
    const newScrollPosition = scrollDistance * progress;
    window.scrollTo(0, newScrollPosition);

    if (currentTime < animationDuration) {
      requestAnimationFrame(scrollStep);
    }
  }
  requestAnimationFrame(scrollStep);
});

//animation de l'image about
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

//background black on button click
let changeColor = document.getElementById('back-color');
let isDarkMode = false;
changeColor.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  document.body.style.backgroundColor = isDarkMode ? 'black' : ''; 

  let projects = document.querySelector("#projects");
  projects.style.backgroundColor = isDarkMode ? 'black' : (isDarkMode ? '' : '');
  projects.style.color = isDarkMode ? 'white' : 'black'; 

  let projectBoxes = document.querySelectorAll("#project-no-page");
  projectBoxes.forEach(project => {
    project.style.backgroundColor = isDarkMode ? 'black' : '';
  });
   
  let shadow = document.querySelectorAll("#shadow-color")
  shadow.forEach(project =>{
    project.style.backgroundColor = isDarkMode ? 'black' : '';
  })

  let aboutSkills = document.querySelector("#about-skills");
  aboutSkills.style.backgroundColor = isDarkMode ? 'black' : (isDarkMode ? '' : '#141C28');
  aboutSkills.style.color = isDarkMode ? 'white' : 'black'; 

  let contact = document.querySelector("#contact");
  contact.style.backgroundColor = isDarkMode ? 'black' : (isDarkMode ? '' : '#141C28');
  contact.style.color = isDarkMode ? 'white' : 'black'; 

  let svg = document.querySelector('.svg-form');
  svg.style.fill = isDarkMode ? 'black' : '#141C28';

  let subtitleP = document.querySelector("#junior");
  subtitleP.style.color = isDarkMode ? 'white' : '#141C28'; 

  let projectTitlesBox = document.querySelectorAll("#projects h2");
  projectTitlesBox.forEach(title => {
    title.style.color = isDarkMode ? 'white' : '#141C28'; 
  });
    let projectTitles = document.querySelectorAll("#projects h1");
  projectTitles.forEach(title => {
    title.style.color = isDarkMode ? 'white' : '#141C28'; 
  });
  
  let titleH1 = document.querySelector("#name");
  titleH1.style.color = isDarkMode ? 'white' : '#141C28'; 

  let moonIcon = changeColor.querySelector('.fa-moon');
  let sunIcon = changeColor.querySelector('.fa-sun');
  moonIcon.style.display = isDarkMode ? 'none' : 'inline';
  sunIcon.style.display = isDarkMode ? 'inline' : 'none';
});
