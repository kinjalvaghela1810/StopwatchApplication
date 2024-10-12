let timerInterval;
let elapsedTime = 0;
let isRunning = false;

function updateTimerDisplay() {
  const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(
    2,
    "0"
  );
  $(".stopwatch-timer").text(`${hours}:${minutes}:${seconds}`);
}

function displayMessage() {
  const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(
    2,
    "0"
  );
  $(".display-message").text(`Final Elapsed Time: ${hours}:${minutes}:${seconds}`);
}

$(".start-pause-btn").on("click", function () {
  if (isRunning) {
    clearInterval(timerInterval);
    $(this).text("Resume").attr('title', 'Resume');
  } else {
    timerInterval = setInterval(() => {
      elapsedTime += 1000;
      updateTimerDisplay();
    }, 1000);
    $(this).text("Pause").attr('title', 'Pause');
  }
  isRunning = !isRunning;
});

$(".stop-btn").on("click", function () {
  clearInterval(timerInterval);
  isRunning = false;
  displayMessage();
  $(".start-pause-btn").text("Start").attr('title', 'Start');
  setTimeout(() => {
    elapsedTime = 0;
    updateTimerDisplay();
    $(".display-message").text(""); 
  }, 3000); 
});

$(".reset-btn").on("click", function () {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  updateTimerDisplay();
  $(".display-message").text("");
  $(".start-pause-btn").text("Start").attr('title', 'Start');
});
