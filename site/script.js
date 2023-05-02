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
      p.setAttribute('data-scroll-index', i + 1);
      if (i === 0) {
        p.classList.add('current');
      }
    });

    window.addEventListener('scroll', () => {
      let currentParagraph = document.querySelector('.about > p.current');
      let nextParagraph = currentParagraph.nextElementSibling;
      if (nextParagraph !== null) {
        let rect = nextParagraph.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          currentParagraph.classList.remove('current');
          nextParagraph.classList.add('current');
          let currentIndex = parseInt(nextParagraph.getAttribute('data-scroll-index'));
          const message = `You're currently viewing paragraph ${currentIndex} out of ${paragraphs.length}.`;
          document.getElementById('scroll-message').textContent = message;
        }
      }
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
  });