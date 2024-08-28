let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".suprime-slider");
let sliderList = slider.querySelector(".suprime-slider-list");
let sliderItems = slider.querySelectorAll(".suprime-slider-list-item");
let thumbnail = document.querySelector(".suprime-slider-thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(
  ".suprime-slider-thumbnail-item"
); // Changed to querySelectorAll to select all thumbnail items

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function () {
  // Corrected 'onClick' to 'onclick'
  moveSlider("next");
};

// Function for prev button
prevBtn.onclick = function () {
  // Corrected 'onClick' to 'onclick'
  moveSlider("prev");
};

function moveSlider(direction) {
  let sliderItems = slider.querySelectorAll(".suprime-slider-list-item"); // Corrected to select all slider items
  let thumbnailItems = thumbnail.querySelectorAll(
    ".suprime-slider-thumbnail-item"
  ); // Corrected to select all thumbnail items

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  ); // Remove the event listener after it's triggered once
}
