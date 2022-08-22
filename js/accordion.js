// const answer = document.querySelectorAll(".answer")
const questions = document.querySelectorAll(".question");

questions.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
      question.nextElementSibling.classList.toggle("show");
    } else {
      questions.forEach((question) =>
        question.parentNode.classList.remove("active")
      );
      questions.forEach((question) =>
        question.nextElementSibling.classList.remove("show")
      );
      question.parentNode.classList.add("active");
      question.nextElementSibling.classList.add("show");
    }
  })
);
