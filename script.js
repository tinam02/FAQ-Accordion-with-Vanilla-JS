window.onload = () => {
  const questions = document.getElementsByClassName("question__title--wrapper");
  const arrows = document.getElementsByClassName("arrow");

  for (const question of questions) {
    question.addEventListener("click", function () {
        // Shows answer if it exists, else does nothing
      if (this.nextElementSibling) {
        this.firstElementChild.classList.toggle("bold");
        this.nextElementSibling.classList.toggle("active");

        // Flips arrows upside down
        for (arrow of arrows) {
          arrow.classList.toggle("flipped");
        }
      }
    });
  }
};
