// Live clock — proves the JavaScript file is loading correctly.
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const clock = document.getElementById("clock");
  if (clock) clock.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

// Dark mode toggle.
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
