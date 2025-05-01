window.addEventListener('DOMContentLoaded', (event) => {
  // Detect when site images have loaded and add a loaded class
  const lazyImages = document.querySelectorAll('img');

  // Loop over the images
  Array.from(lazyImages).forEach((img) => {
    // Add the loaded class if already loaded
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add('loaded');
      // If not already loaded, listen for the load event
    } else {
      img.addEventListener('load', () => {
        // Once loaded, apply the loaded class
        img.classList.add('loaded');
      });
    }
  });
});

// Contact form handling
const contactForm = document.querySelector('.form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    try {
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;

      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        contactForm.reset();
        submitButton.textContent = 'Message Sent!';
        setTimeout(() => {
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
        }, 3000);
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      submitButton.textContent = 'Error!';
      console.error('Form submission error:', error);
      alert('There was a problem sending your message. Please try again.');
      setTimeout(() => {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }, 3000);
    }
  });
}
