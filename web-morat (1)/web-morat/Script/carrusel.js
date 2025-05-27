const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");
const slidesContainer = document.querySelector(".slides-container");

let scrollAmount = 0;
const scrollStep = 110; // ancho del slide + margin

nextBtn.addEventListener("click", () => {
  if (scrollAmount <= slidesContainer.scrollWidth - slidesContainer.clientWidth) {
    scrollAmount += scrollStep;
    slidesContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }
});

prevBtn.addEventListener("click", () => {
  if (scrollAmount > 0) {
    scrollAmount -= scrollStep;
    slidesContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }
});
