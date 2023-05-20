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

    let counter = parseInt(localStorage.getItem('counter')) || 0;
    localStorage.setItem('counter', counter + 1);
    document.getElementById('counter').textContent = getCounterWithSuffix(counter + 1);

    function getCounterWithSuffix(count) {
      let suffix;
      if (count === 1) {
        suffix = "st";
      } else if (count === 2) {
        suffix = "nd";
      } else if (count === 3) {
        suffix = "rd";
      } else {
        suffix = "th";
      }
      return count + suffix;
    }
    
  });