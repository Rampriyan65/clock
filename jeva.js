let clockInterval;

function updateClock() 
{
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById('clock').textContent = time;
}

function startClock()
 {
  updateClock(); 
  clockInterval = setInterval(updateClock, 1000);
}

function stopClock()
 {
  clearInterval(clockInterval);
}