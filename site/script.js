// Get user's location based on their IP address
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const locationMessage = `And I see you're from ${data.city}, ${data.region}. Nice place!`;
    const messageElement = document.createElement('p');
    messageElement.textContent = locationMessage;
    document.querySelector('.scoreboard').appendChild(messageElement);

    const welcomeMessage = "Look around my site to get to know me more!";
    const welcomeElement = document.createElement('p');
    welcomeElement.textContent = welcomeMessage;
    document.querySelector('.scoreboard').appendChild(welcomeElement);

    // Add scroll-snapping to paragraphs in the about section
    const paragraphs = document.querySelectorAll('.about > p');
    paragraphs.forEach((p, i) => {
      p.style.scrollSnapAlign = 'start';
      p.setAttribute('data-scroll-index', i + 2);
    });
  })
  .catch(error => console.log(error));

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollFraction = scrollTop / (scrollHeight - clientHeight);

  const paragraphs = document.querySelectorAll('.about > p');
  let currentIndex = 1;
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    const index = parseInt(p.getAttribute('data-scroll-index'));
    if (scrollFraction >= (index - 1) / paragraphs.length) {
      currentIndex = index;
    } else {
      break;
    }
  }

  const message = `You're currently viewing paragraph ${currentIndex} out of ${paragraphs.length}.`;
  document.getElementById('scroll-message').textContent = message;
});

let counter = parseInt(localStorage.getItem('counter')) || 1;
localStorage.setItem('counter', counter + 1);
document.getElementById('counter').textContent = getCounterWithSuffix(counter);

function getCounterWithSuffix(count) {
  let suffix = 'th';
  if (count % 10 === 1 && count % 100 !== 11) {
    suffix = 'st';
  } else if (count % 10 === 2 && count % 100 !== 12) {
    suffix = 'nd';
  } else if (count % 10 === 3 && count % 100 !== 13) {
    suffix = 'rd';
  }
  return count + suffix;
}
