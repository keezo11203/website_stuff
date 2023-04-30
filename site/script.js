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