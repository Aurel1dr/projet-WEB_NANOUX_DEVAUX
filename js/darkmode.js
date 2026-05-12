const btn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    icon.src = '../img/img_logo/sun.svg'; 
    icon.alt = 'Mode Clair';
  } else {
    icon.src = '../img/img_logo/moon.svg';
    icon.alt = 'Mode Sombre';
  }
});