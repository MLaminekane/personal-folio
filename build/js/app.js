// Animation de navigation
const arrowBtn = document.getElementById('arrow-btn');
const aboutSection = document.getElementById('about-skills');

arrowBtn.addEventListener('click', function(e) {
  e.preventDefault();

  const {top} = aboutSection.getBoundingClientRect();
  const duration = 1000;

  function scrollStep(timestamp) {
    const progress = (timestamp - startTime) / duration;
    window.scrollTo(0, top * progress);

    if(timestamp < startTime + duration) {
      requestAnimationFrame(scrollStep); 
    }
  }

  const startTime = performance.now();
  requestAnimationFrame(scrollStep);
});

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

  let svg = document.querySelectorAll('.svg-form');
  svg.forEach(form => {
    form.style.fill = isDarkMode ? 'black' : '#141C28';
  })

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