$(document).ready(function () {
  let currentIndex = 0;
  const cards = $("#card-slider .card");
  const progressBar = $("#progress-bar .progress");
  const progressTime = 3000; // 1 second for the progress bar

  function startProgressBar() {
    progressBar.css("width", "0%").animate(
      { width: "100%" },
      {
        duration: progressTime,
        easing: "linear",
        complete: function () {
          showNextCard();
        },
      }
    );
  }

  function showNextCard() {
    // Remove the active class from the current card
    cards.eq(currentIndex).removeClass("active");

    // Increment the index to move to the next card
    currentIndex = (currentIndex + 1) % cards.length;

    // Add the active class to the next card
    cards.eq(currentIndex).addClass("active");

    // Restart the progress bar animation
    startProgressBar();
  }

  // Initialize the first card as active and start the process
  cards.eq(currentIndex).addClass("active");
  startProgressBar();
});
