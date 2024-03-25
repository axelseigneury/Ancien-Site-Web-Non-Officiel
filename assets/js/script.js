const carouselContainer = document.querySelector('.carousel-container');
let activeProfile = 0;

function showNextProfile() {
  const profiles = carouselContainer.querySelectorAll('.instagram-profile');
  profiles[activeProfile].style.display = 'none';
  activeProfile = (activeProfile + 1) % profiles.length;
  profiles[activeProfile].style.display = 'block';
}

function showPreviousProfile() {
  const profiles = carouselContainer.querySelectorAll('.instagram-profile');
  profiles[activeProfile].style.display = 'none';
  activeProfile = (activeProfile - 1 + profiles.length) % profiles.length;
  profiles[activeProfile].style.display = 'block';
}

// Afficher le premier profil
const profiles = carouselContainer.querySelectorAll('.instagram-profile');
profiles[activeProfile].style.display = 'block';
