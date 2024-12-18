document.addEventListener("DOMContentLoaded", () => {
  // Scroll hero effect
  const hero = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
      hero.style.opacity = 1 - window.scrollY / 700;
  });

  // Add interactivity to movie rows (example placeholder movies)
  const moviesContainer = document.querySelector(".movies-container");
  for (let i = 1; i <= 10; i++) {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `<img src="https://placehold.co/200x300?text=Movie+${i}" alt="Movie ${i}">`;
      moviesContainer.appendChild(movieCard);
  }
});
