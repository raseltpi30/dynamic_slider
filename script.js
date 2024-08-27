$(document).ready(function () {
  const sliderContainer = $(".suprime-slider-container");
  const sliderItems = $(".suprime-slider-item");
  const slideCount = sliderItems.length;
  let currentIndex = 0; // Initialize currentIndex

  function updateActiveClass(index) {
    sliderItems.removeClass("active");
    sliderItems.eq(index).addClass("active");
  }

  sliderItems.on("click", function () {
    currentIndex = $(this).index();
    updateActiveClass(currentIndex);
  });

  // Additional check to ensure active class is correctly applied on page load
  updateActiveClass(currentIndex);
});

