// moments.js
import { SLIDES_CONFIG } from './config.js';

export function handleSlideChange(slideIndex, visualSystem) {
  const config = SLIDES_CONFIG[slideIndex];
  if (!config) return;

  // 1. Actualizar el comportamiento de las partículas
  visualSystem.setSlideState(config);

  // 2. Gestionar la fotografía y el layout en el DOM
  const photoElement = document.getElementById('slide-photo');
  const slideContainer = document.getElementById('slide-container');

  if (config.hasPhoto) {
    photoElement.src = config.photoPath;
    photoElement.classList.add('visible');
    slideContainer.setAttribute('data-layout', config.layout);
  } else {
    photoElement.classList.remove('visible');
    slideContainer.setAttribute('data-layout', 'FULL');
  }
}