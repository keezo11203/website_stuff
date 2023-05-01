const nav = document.getElementsByTagName('nav')[0];
const navLinks = nav.getElementsByTagName('a');

nav.style.backgroundColor = '#B0E0E6';
nav.style.color = '#fff';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';
nav.style.padding = '10px';

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = '#000';
  navLinks[i].style.textDecoration = 'none';
  navLinks[i].style.fontSize = '20px';
}

const navUl = document.getElementsByTagName('ul')[0];

navUl.style.listStyleType = 'none';
navUl.style.display = 'flex';
navUl.style.justifyContent = 'center';
navUl.style.alignItems = 'center';
navUl.style.margin = '0';
navUl.style.width = '100%';
navUl.style.textAlign = 'center';

const navLi = navUl.getElementsByTagName('li');

for (let i = 0; i < navLi.length; i++) {
  navLi[i].style.margin = '0 10px';
}

for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href.startsWith('http://') || navLinks[i].href.startsWith('https://')) {
    navLinks[i].style.color = '#000';
  }
  navLinks[i].addEventListener('mouseover', function() {
    this.style.color = '#B0E0E6';
    this.style.backgroundColor = '#fff';
    this.style.transition = 'color 0.2s ease-in-out';
  });
  navLinks[i].addEventListener('mouseout', function() {
    this.style.color = '#000';
    this.style.backgroundColor = '';
    this.style.transition = '';
  });
}

const h1 = document.getElementsByTagName('h1')[0];

h1.style.textAlign = 'center';

const scoreboard = document.getElementsByClassName('scoreboard')[0];

scoreboard.style.backgroundColor = '#3498db';
scoreboard.style.color = 'white';
scoreboard.style.textAlign = 'center';
scoreboard.style.height = '80vh';
scoreboard.style.display = 'flex';
scoreboard.style.flexDirection = 'column';
scoreboard.style.justifyContent = 'center';

const scoreboardH1 = scoreboard.getElementsByTagName('h1')[0];
scoreboardH1.style.fontSize = '5em';

const scoreboardP = scoreboard.getElementsByTagName('p');

for (let i = 0; i < scoreboardP.length; i++) {
  scoreboardP[i].style.fontSize = '3em';
  scoreboardP[i].style.marginTop = '0.5em';
}

let counter = parseInt(localStorage.getItem('counter')) || 1;
localStorage.setItem('counter', counter + 1);
document.getElementById('counter').textContent = getCounterWithSuffix(counter);

fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const locationMessage = `And I see you're from ${data.city}, ${data.region}. Nice place!`;
    const locationElement = document.createElement('p');
    locationElement.textContent = locationMessage;
    scoreboard.appendChild(locationElement);

    const welcomeMessage = "Look around my site to get to know me more!";
    const welcomeElement = document.createElement('p');
    welcomeElement.textContent = welcomeMessage;
    document.querySelector('.scoreboard').appendChild(welcomeElement);
    })
    .catch(error => console.log(error));
    
    // Define a function to add fade-in effect to elements when they scroll into view
    function addFadeInEffect() {
    window.addEventListener('scroll', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(element) {
    const position = element.getBoundingClientRect().top;
    const delay = 0;
    const duration = 1000;
    const delayIncrement = 250;
    const windowHeight = window.innerHeight;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (position < scroll + windowHeight) {
    setTimeout(function() {
    element.style.opacity = 1;
    element.style.transform = "translateY(0)";
    }, delay);
    delay += delayIncrement;
    }
    });
    });
    }
    
    // Call the addFadeInEffect function
    addFadeInEffect();    
