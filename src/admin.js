function renderGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning, Admin";
  } else if (hour < 18) {
    greeting = "Good afternoon, Admin";
  } else {
    greeting = "Good evening, Admin";
  }

  const el = document.createElement("p");
  el.textContent = greeting;
  el.className = "text-gray-500 text-center mt-2";
  document.querySelector("h2").after(el);
}

renderGreeting();

function renderClock() {
  const el = document.createElement("p");
  el.className = "text-gray-400 text-center text-sm mt-1";
  document.querySelector("h2").nextSibling.after(el);

  setInterval(() => {
    const now = new Date();
    el.textContent =
      now.toLocaleDateString("sv-SE") + " " + now.toLocaleTimeString("sv-SE");
  }, 1000);
}

renderClock();
