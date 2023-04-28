const mainCard = document.querySelector(".main-card");
const stars = document.querySelectorAll(".star2");
const dynamic = document.querySelector(".dynamic");

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".two-card").classList.remove("hidden");
  mainCard.style.display = "none";
});

stars.forEach((star) => {
  star.addEventListener("click", () => {
    dynamic.innerHTML = star.innerHTML;
    star.style.backgroundColor = "hsl(25, 97%, 53%)";
  });
});
