const clock = document.querySelector('#clock-container h1');

function updateClock() {
  const current = new Date();
  const hours = String(current.getHours()).padStart(2, '0');
  const minutes = String(current.getMinutes()).padStart(2, '0');
  const seconds = String(current.getSeconds()).padStart(2, '0');
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
  updateClock()
}, 1000)

updateClock();
