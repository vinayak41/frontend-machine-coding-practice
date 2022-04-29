import Ratings from "./ratings.js";
const ratings = new Ratings();

const STARS = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]

const ratingsComp = document.querySelector(".ratings");

const renderStars = () => {
  ratingsComp.innerHTML = "";
  const stars = STARS.map((star) => {
    let li = document.createElement("li");
    li.innerHTML = "&starf;";
    li.id = star.value;
    li.classList.add("star");

    if (ratings.previewValue) {
      if (ratings.previewValue >= star.value) {
        li.classList.add("active-preview");
        li.classList.remove("active");
      } else {
        li.classList.remove("active");
        li.classList.add("inactive-preview");
      }
    } else {
      if (ratings.value >= star.value) {
        li.classList.remove("active-preview", "inactive-preview");
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    }
    li.addEventListener("mouseover", () => onMouseHover(star.value));
    li.addEventListener("mouseout", onMouseOut);
    li.addEventListener("click", () => updateRatings(star.value));
    return li;
  });
  stars.forEach((star) => {
    ratingsComp.appendChild(star);
  });
};

renderStars();

function onMouseHover(value) {
  if (value !== ratings.previewValue) {
    ratings.previewValue = value;
    renderStars();
  }
}

function onMouseOut() {
  ratings.previewValue = 0;
  renderStars();
}

function updateRatings(value) {
  if (value !== ratings.value) {
    ratings.value = value;
    renderStars;
  }
}
