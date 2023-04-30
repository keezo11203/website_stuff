let counter = parseInt(localStorage.getItem('counter')) || 0;
counter++;
localStorage.setItem('counter', counter);
document.getElementById('counter').textContent = counter;
