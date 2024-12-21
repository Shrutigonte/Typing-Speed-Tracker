# Typing Speed Tracker Documentation

## Overview
The Typing Speed Tracker is a web application that allows users to measure their typing speed and accuracy over a specified duration. Users can toggle between light and dark themes and customize the test duration.

## Features
1. **Typing Test**: Measures Words Per Minute (WPM) and typing accuracy.
2. **Custom Duration**: Allows users to select test durations of 1, 3, or 5 minutes.
3. **Dark Mode**: Toggle between light and dark themes for better usability.
4. **Test Results**: Displays final WPM and accuracy after the test.
5. **Restart Option**: Provides a simple way to restart the test.

## File Structure
1. `index.html`: Contains the HTML structure for the application.
2. `style.css`: Contains the CSS styles for the application.
3. `script.js`: Contains the JavaScript logic for the application.

## HTML Structure
- **Header**: Displays the application title and a dark mode toggle button.
- **Settings Section**: Includes a dropdown to select test duration and a button to start the test.
- **Typing Test Section**:
  - Displays the text to type.
  - A textarea for user input.
  - Stats for time left, WPM, and accuracy.
- **Results Section**:
  - Displays final WPM and accuracy.
  - Button to restart the test.

## CSS Styling
- **Theme Management**: Includes styles for light and dark themes.
- **Layout**: Centers the content and applies a clean, responsive design.
- **Styling Elements**:
  - Buttons with hover effects.
  - Highlighting errors in red and correct typing in green.

## JavaScript Functionality
1. **Dark Mode Toggle**
   - Adds or removes the `dark-theme` class on the `<body>` element.
2. **Start Test**:
   - Resets stats and input.
   - Enables the textarea and starts the timer.
3. **Typing Logic**:
   - Compares user input with the displayed text.
   - Updates WPM and accuracy in real-time.
4. **Timer**:
   - Counts down from the selected duration.
   - Ends the test when time runs out.
5. **End Test**:
   - Disables the textarea and shows the results.
6. **Restart Test**:
   - Reloads the page to reset the test.
7. **Utility Functions**:
   - `calculateWPM`: Calculates words per minute based on characters typed.
   - `calculateAccuracy`: Computes accuracy based on errors.

## How to Use
1. Open the application in a web browser.
2. Select a test duration using the dropdown menu.
3. Click "Start Test" to begin.
4. Type the text displayed in the input area.
5. View live stats for WPM and accuracy as you type.
6. When time is up, view your final results.
7. Restart the test if needed.

## Future Enhancements
1. Add a larger pool of test texts for variety.
2. Include advanced stats like keystrokes per minute.
3. Add a leaderboard to compare scores.
4. Implement mobile-specific optimizations.

## Compatibility
- **Browsers**: Compatible with modern browsers like Chrome, Firefox, Edge, and Safari.
- **Devices**: Responsive design ensures usability on desktops, tablets, and smartphones.

