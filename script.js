
const textDisplay = document.getElementById("text-display");
const textInput = document.getElementById("text-input");
const timeLeftDisplay = document.getElementById("time-left");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const resultsSection = document.getElementById("results");
const finalWpm = document.getElementById("final-wpm");
const finalAccuracy = document.getElementById("final-accuracy");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const startTestButton = document.getElementById("start-test");
const restartButton = document.getElementById("restart-test");

let timer;
let timeLeft = 60;
let charactersTyped = 0;
let errors = 0;
let isTestActive = false;

// Toggle Dark Mode
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Start Test
startTestButton.addEventListener("click", () => {
    const duration = parseInt(document.getElementById("time-select").value);
    timeLeft = duration;
    timeLeftDisplay.textContent = timeLeft;
    charactersTyped = 0;
    errors = 0;
    isTestActive = true;
    textInput.value = "";
    textInput.disabled = false;
    textInput.focus();
    textInput.classList.remove("disabled");
    resultsSection.style.display = "none";

    timer = setInterval(updateTimer, 1000);
});

// Typing Logic
textInput.addEventListener("input", () => {
    if (!isTestActive) return;

    const typedText = textInput.value;
    const originalText = textDisplay.textContent;

    // Error Highlighting
    if (typedText !== originalText.slice(0, typedText.length)) {
        textInput.style.color = "red";
        errors++;
    } else {
        textInput.style.color = "green";
    }

    charactersTyped = typedText.length;

    // Update Stats
    const wpm = calculateWPM(charactersTyped, timeLeft);
    const accuracy = calculateAccuracy(charactersTyped, errors);

    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = accuracy;
});

// Timer Function
function updateTimer() {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        endTest();
    }
}

// End Test
function endTest() {
    isTestActive = false;
    textInput.disabled = true;

    finalWpm.textContent = wpmDisplay.textContent;
    finalAccuracy.textContent = accuracyDisplay.textContent;
    resultsSection.style.display = "block";
}

// Restart Test
restartButton.addEventListener("click", () => {
    location.reload();
});

// Utility Functions
function calculateWPM(charsTyped, timeRemaining) {
    const words = charsTyped / 5;
    const timeElapsed = (timeLeft - timeRemaining) || 1;
    return Math.round((words / timeElapsed) * 60);
}

function calculateAccuracy(charsTyped, errors) {
    if (charsTyped === 0) return 100;
    return Math.round(((charsTyped - errors) / charsTyped) * 100);
}
