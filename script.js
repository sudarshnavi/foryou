const modal = document.getElementById('passwordModal');
const content = document.getElementById('siteContent');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const passwordHint = document.getElementById('passwordHint');
const countdownEl = document.getElementById('countdown');
const secretMessage = document.getElementById('secretMessage');

const PASSWORD = '13/08/2025';
const targetDate = new Date("2026-04-02T00:00:00");

function openSite() {
  modal.classList.add('hidden');
  content.classList.remove('hidden');
  content.setAttribute('aria-hidden', 'false');
}

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (passwordInput.value.trim() === PASSWORD) {
    openSite();
  } else {
    passwordHint.textContent = 'Not quite. Try again, love 💗';
  }
});

function updateCountdown() {

  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "We're finally together ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent = `${days} days ${hours} hours ${minutes} minutes`;
}

setInterval(updateCountdown, 1000);

document.querySelectorAll('.heart').forEach((button) => {
  button.addEventListener('click', () => {
    secretMessage.textContent = button.dataset.message;
  });
});