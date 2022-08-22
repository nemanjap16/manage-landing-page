const slideBtns = document.querySelectorAll("[data-slideBtn]");
const slideContainer = document.querySelector("[data-slideContainer]");
const slides = [...document.querySelectorAll("[data-slide]")];
let currentIndex = 0;
let isMoving = false;

// btn handle function
function handleSlideBtnClick(e) {
  // handle skipping
  // disable clicking on buttons
  if (isMoving) return;
  isMoving = true;

  // change index
  if (e.currentTarget.id === "prev") {
    currentIndex--;
  } else {
    currentIndex++;
  }
  slideContainer.dispatchEvent(new Event("sliderMove"));
}

// remove/add attribute function
const removeDisabledAttribute = (els) =>
  els.forEach((el) => el.removeAttribute("disabled"));
const addDisabledAttribute = (els) =>
  els.forEach((el) => el.setAttribute("disabled", "true"));

// event listeners
slideBtns.forEach((btn) => btn.addEventListener("click", handleSlideBtnClick));

slideContainer.addEventListener("sliderMove", () => {
  let gap = (slideContainer.clientWidth / 100) * 2;
  let slideWidth = `${slides[0].clientWidth + gap}`;

  // 1. translate container to the left/right
  slideContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
  // 2. remove disabled attributes
  removeDisabledAttribute(slideBtns);
  // 3. reenable disabled attribute if needed
  currentIndex === 0 && addDisabledAttribute([slideBtns[0]]);
});

// transition end event
// enable clicking on buttons
slideContainer.addEventListener("transitionend", () => (isMoving = false));

// disable image drag events
document
  .querySelectorAll("[data-slide] img")
  .forEach((img) => (img.ondragstart = () => false));

// intersection observer for slider
const slideObserver = new IntersectionObserver(
  (slide) => {
    if (slide[0].isIntersecting) {
      addDisabledAttribute([slideBtns[1]]);
    }
  },
  { threshold: 0.75 }
);

slideObserver.observe(slides[slides.length - 1]);
