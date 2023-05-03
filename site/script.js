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

    // Get user's currently playing track on Spotify
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      const song = data.item.name;
      const artist = data.item.artists[0].name;
      const spotifyMessage = `Right now, I'm listening to ${song} by ${artist}, give it a listen!`;
      const spotifyElement = document.createElement('p');
      spotifyElement.textContent = spotifyMessage;
      document.querySelector('.scoreboard').appendChild(spotifyElement);
    })
    .catch(error => {
      console.log('Error:', error);
    });

    let counter = parseInt(localStorage.getItem('counter')) || 1;
    localStorage.setItem('counter', counter + 1);
    document.getElementById('counter').textContent = getCounterWithSuffix(counter);

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
