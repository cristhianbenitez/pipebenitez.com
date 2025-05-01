/* Test early for local storage color scheme value to avoid FOIT */
const currentColorscheme = localStorage.getItem('halide-color-scheme');
let isDark = false; // Initialize to false for light default

/* 1. is color preference already saved in local storage? */
if (currentColorscheme === 'dark') {
  // Only check for explicit dark preference
  document.documentElement.setAttribute('dark', true);
  isDark = true;
}

window.addEventListener('DOMContentLoaded', (event) => {
  // Header color scheme toggle (light/dark modes)
  const csToggle = document.querySelector('.dark-toggle');

  if (isDark) {
    csToggle.checked = true;
  }

  if (csToggle) {
    csToggle.addEventListener('change', () => {
      document.documentElement.toggleAttribute('dark');

      let cs = 'light';

      if (document.documentElement.hasAttribute('dark')) {
        cs = 'dark';
      }

      localStorage.setItem('halide-color-scheme', cs);
    });
  }
});
