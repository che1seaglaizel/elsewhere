
const guideName = "CHELSEA'S ELSEWHERE";
const currentYear = new Date().getFullYear();

let runningCount = 0;

// Display the guide name
const guideHeading = document.getElementById("guide-name");

if (guideHeading) {
    guideHeading.textContent = `⋆. 𐙚˚࿔ ${guideName} 𝜗𝜚˚⋆`;
}

// Count the places on the page
const placeCards = document.querySelectorAll(".place-card");

placeCards.forEach(function () {
    runningCount++;
});

// Display the computed place count
const placeCountDisplay = document.getElementById("place-count");

if (placeCountDisplay) {
    placeCountDisplay.textContent = `✦ Places to explore: ${runningCount}`;
}

// Update the footer guide name
const footerName = document.getElementById("footer-guide-name");

if (footerName) {
    footerName.textContent = `✦ ${guideName} ✦`;
}

// Update the copyright year
const copyright = document.getElementById("copyright");

if (copyright) {
    copyright.textContent = `© ${currentYear} ${guideName}`;
}

const isWithinWalkingDistance = true;

const distanceMessage = isWithinWalkingDistance
    ? "Walking distance"
    : "Better to commute";

const distanceDisplay = document.getElementById("distance-result");

if (distanceDisplay) {
    distanceDisplay.textContent = distanceMessage;
}
