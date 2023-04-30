let counter = parseInt(localStorage.getItem('counter')) || 1;
localStorage.setItem('counter', counter + 1);
document.getElementById('counter').textContent = counter + 'th';

// Get user's location based on their IP address
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const locationMessage = `And I see you're from ${data.city}, ${data.region}. Nice place!`;
    const messageElement = document.createElement('p');
    messageElement.textContent = locationMessage;
    document.querySelector('.scoreboard').appendChild(messageElement);
  })
  .catch(error => console.log(error));