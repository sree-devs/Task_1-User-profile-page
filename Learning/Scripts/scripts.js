// Countdown Timer
function initializeCountdown(timeInSeconds) {
    if (!timeInSeconds || timeInSeconds <= 0) {
        document.getElementById("countdown-timer").innerText = "Reward is now available!";
        return;
    }

    let totalSeconds = timeInSeconds;

    function updateCountdown() {
        if (totalSeconds <= 0) {
            document.getElementById("countdown-timer").innerText = "Reward is now available!";
            clearInterval(interval);
            return;
        }

        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');

        document.getElementById("countdown-timer").innerText = `${hours}:${minutes}:${seconds}`;
        totalSeconds--;
    }

    updateCountdown(); // Update immediately
    const interval = setInterval(updateCountdown, 1000); // Update every second
}


// Theme Switcher
function changeTheme(theme) {
    if (theme === "dark") {
        document.documentElement.style.setProperty("--background-color", "#333");
        document.documentElement.style.setProperty("--text-color", "#fff");
    } else {
        document.documentElement.style.setProperty("--background-color", "#fff");
        document.documentElement.style.setProperty("--text-color", "#000");
    }
}
// Function to animate progress bar based on the data-progress attribute
// document.addEventListener("DOMContentLoaded", () => {
//     const progressBars = document.querySelectorAll(".progress-bar");

//     progressBars.forEach(bar => {
//         const targetProgress = bar.getAttribute("data-progress");
//         bar.style.width = `${targetProgress}%`; // Trigger the animation
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const progressBars = document.querySelectorAll(".progress-bar");

//     progressBars.forEach((bar, index) => {
//         const targetProgress = bar.getAttribute("data-progress");
//         setTimeout(() => {
//             bar.style.width = `${targetProgress}%`; // Trigger animation
//         }, index * 300); // Delay each animation by 300ms
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function(bar) {
        let progressValue = parseInt(bar.getAttribute('data-progress'));
        let width = 0;
        
        // Animate the progress bar
        const interval = setInterval(function() {
            if (width < progressValue) {
                width++;
                bar.style.width = width + '%';
                bar.textContent = width + '%'; // Show the percentage inside the bar
            } else {
                clearInterval(interval);
            }
        }, 10); // Speed of animation
    });
});


// Function to change theme
document.addEventListener("DOMContentLoaded", () => {
    const themeButtons = document.querySelectorAll("button");
    const container = document.querySelector(".container");

    themeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const theme = button.getAttribute("onclick").match(/'(.+)'/)[1];

            // Remove existing theme classes
            container.classList.remove("light-theme", "dark-theme");

            // Add the selected theme class
            container.classList.add(`${theme}-theme`);
        });
    });
});
