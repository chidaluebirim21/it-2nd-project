const slider = document.querySelector('.slider');
const track = document.querySelector('.slider-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let isMoving = false;

// move the last 2 slides to the front so there's always one on each side
track.prepend(track.lastElementChild);
track.prepend(track.lastElementChild);

function getSlideWidth() {
  const slide = track.querySelector('img');
  const gap = parseInt(getComputedStyle(track).gap);
  return slide.offsetWidth + gap;
}

function nextSlide() {
  if (isMoving) return;
  isMoving = true;

  track.classList.add('moving');
  track.style.transform = `translateX(-${getSlideWidth()}px)`;

  track.addEventListener('transitionend', () => {
    track.classList.remove('moving');
    track.append(track.firstElementChild);
    track.style.transform = '';
    isMoving = false;
  }, { once: true });
}

function prevSlide() {
  if (isMoving) return;
  isMoving = true;

  // put the last slide at the start first, then slide it in
  track.prepend(track.lastElementChild);
  track.style.transform = `translateX(-${getSlideWidth()}px)`;
  track.offsetWidth; // force reflow so the transition runs

  track.classList.add('moving');
  track.style.transform = 'translateX(0)';

  track.addEventListener('transitionend', () => {
    track.classList.remove('moving');
    isMoving = false;
  }, { once: true });
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// keyboard
slider.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// swipe on touch screens
let startX = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff < -50) nextSlide();
  if (diff > 50) prevSlide();
});
